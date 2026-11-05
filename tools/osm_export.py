# Extrait la zone utile de l'export OSM en données compactes pour le jeu (mètres, x=est, z=sud, origine = centre de la zone)
import sys,json,math,random,xml.etree.ElementTree as ET
src,out=sys.argv[1:3]
r=ET.parse(src).getroot();b=r.find('bounds').attrib
lat0=(float(b['minlat'])+float(b['maxlat']))/2;lon0=(float(b['minlon'])+float(b['maxlon']))/2
KX=111320*math.cos(math.radians(lat0));KZ=110540
X0,X1,Z0,Z1=-732,485,-360,390           # zone de la capture + 60 m de marge (repère de l'export)
OX,OZ=(X0+X1)/2,(Z0+Z1)/2
P=lambda la,lo:((lo-lon0)*KX-OX,-(la-lat0)*KZ-OZ)
BX0,BX1,BZ0,BZ1=X0-OX,X1-OX,Z0-OZ,Z1-OZ
N={};TREE=[]
for n in r.findall('node'):
    p=P(float(n.get('lat')),float(n.get('lon')));N[n.get('id')]=p
    t={x.get('k'):x.get('v') for x in n.findall('tag')}
    if t.get('natural')=='tree':TREE.append(p)
tags=lambda e:{x.get('k'):x.get('v') for x in e.findall('tag')}
W={w.get('id'):([N[n.get('ref')] for n in w.findall('nd') if n.get('ref') in N],tags(w)) for w in r.findall('way')}
inb=lambda p,m=0:BX0-m<=p[0]<=BX1+m and BZ0-m<=p[1]<=BZ1+m
def rings(parts):
    parts=[list(p) for p in parts if len(p)>1];out=[]
    while parts:
        cur=parts.pop(0)
        while cur[0]!=cur[-1]:
            for i,p in enumerate(parts):
                if p[0]==cur[-1]:cur+=p[1:];parts.pop(i);break
                if p[-1]==cur[-1]:cur+=p[::-1][1:];parts.pop(i);break
                if p[-1]==cur[0]:cur=p+cur[1:];parts.pop(i);break
                if p[0]==cur[0]:cur=p[::-1]+cur[1:];parts.pop(i);break
            else:break
        if len(cur)>3 and cur[0]==cur[-1]:out.append(cur)
    return out
def clip(poly):  # Sutherland-Hodgman sur le rectangle
    def cl(pts,inside,inter):
        o=[]
        for i in range(len(pts)):
            a,bb=pts[i-1],pts[i]
            if inside(bb):
                if not inside(a):o.append(inter(a,bb))
                o.append(bb)
            elif inside(a):o.append(inter(a,bb))
        return o
    pts=poly[:-1] if poly[0]==poly[-1] else poly[:]
    for ax,v,s in((0,BX0,1),(0,BX1,-1),(1,BZ0,1),(1,BZ1,-1)):
        if not pts:break
        def ins(p,ax=ax,v=v,s=s):return (p[ax]-v)*s>=0
        def it(a,bb,ax=ax,v=v):
            t=(v-a[ax])/((bb[ax]-a[ax]) or 1e-9);return (a[0]+(bb[0]-a[0])*t,a[1]+(bb[1]-a[1])*t)
        pts=cl(pts,ins,it)
    return pts
polys=[]
for rel in r.findall('relation'):
    t=tags(rel)
    if t.get('type')!='multipolygon' and 'building' not in t:continue
    outer=[W[m.get('ref')][0] for m in rel.findall('member') if m.get('type')=='way' and m.get('role') in('outer','') and m.get('ref') in W]
    inner=[W[m.get('ref')][0] for m in rel.findall('member') if m.get('type')=='way' and m.get('role')=='inner' and m.get('ref') in W]
    hs=rings(inner)
    for o in rings(outer):polys.append((t,o,[h for h in hs]))
lines=[]
for wid,(pts,t) in W.items():
    if not t or len(pts)<2:continue
    closed=pts[0]==pts[-1] and len(pts)>3
    isarea=closed and (any(k in t for k in('building','landuse','leisure','natural','water'))or t.get('amenity')in('parking','university','college','school','kindergarten') or (t.get('highway')=='pedestrian' and t.get('area')=='yes') or t.get('place')) and t.get('area')!='no' and t.get('natural')!='tree_row' and t.get('barrier') is None
    if isarea and 'highway' in t and t.get('area')!='yes':isarea=False
    (polys.append((t,pts,[])) if isarea else lines.append((t,pts)))
F=lambda pts:[round(c,1) for p in pts for c in p]
def area_kind(t):
    lu,le,na,am=t.get('landuse'),t.get('leisure'),t.get('natural'),t.get('amenity')
    if t.get('highway')=='pedestrian' or t.get('place'):return 'ped'
    if 'water' in t or na=='water' or lu in('basin','reservoir'):return 'water'
    if am=='parking' or t.get('parking'):return 'parking'
    if le=='pitch':return 'pitch'
    if lu in('forest',) or na in('wood','scrub'):return 'wood'
    if lu in('farmland','meadow','farmyard') or na=='grassland':return 'farm'
    if lu in('grass','flowerbed','village_green','recreation_ground') or le in('park','garden','playground') or na=='wetland':return 'grass'
    if lu in('construction','brownfield'):return 'dirt'
    if am in('university','college','school','kindergarten') or lu in('education',):return 'campus'
    if lu in('residential','commercial','retail','industrial'):return 'urban'
    return None
def bheight(t):
    try:
        if t.get('height'):return float(t['height'].split()[0])
    except:pass
    try:
        if t.get('building:levels'):return float(t['building:levels'])*3.3+1
    except:pass
    return {'house':6.5,'detached':6.5,'shed':3.5,'service':4,'garage':3.5,'dormitory':13,'apartments':16,'office':12,'hangar':8,'industrial':8,'public':9,'roof':5}.get(t.get('building'),10)
LABELS={'CentraleSupélec - Bâtiment Gustave Eiffel':'Eiffel','CentraleSupélec - Bâtiment Francis Bouygues':'Bouygues','CentraleSupélec - Bâtiment Bréguet':'Bréguet',
 "Bâtiment Nord de l'École Normale Supérieure Paris-Saclay":'ENS Paris-Saclay','Lieu de vie':'Lieu de vie','Polytech Paris-Saclay - Bâtiment 620':'Polytech (620)',
 "Pôle Universitaire d'Ingénierie d'Orsay - Université Paris-Saclay (Bât. 640)":'PUIO (640)',"Bâtiment ħ (625) de l'université Paris-Saclay":'Bâtiment ħ (625)','Lumen':'Lumen',
 'Bât 630 - Institut des Sciences des Plantes - Paris-Saclay':'IPS2 (630)',"Administration de l'IUT d'Orsay - Bâtiment E 605":"IUT d'Orsay",'Résidence Crous - George Sand':'Résidence George Sand',
 'Laboratoire Génie électrique et électronique de Paris':'GeePs','Résidence V - Joliot Curie':'Résidence Joliot-Curie','The Mix':'The Mix','DIGITEO-Moulon - Bâtiment 660':'Digiteo (660)',
 'HM1 - bâtiment recherche':'HM1','Twenty Campus Gif-Sur-Yvette - Résidence Étudiante':'Twenty Campus','Université Paris-Saclay':'Gare Université Paris-Saclay'}
A=[];B=[];LB=[];seen=set()
for t,o,holes in polys:
    if not any(inb(p,40) for p in o):continue
    if 'building' in t:
        if t.get('building') in('construction',) :continue
        h=bheight(t);mh=0.0
        try:mh=float(t.get('min_height',0) or 0) or (float(t.get('building:min_level',0))*3.3)
        except:mh=0
        kind={'roof':1,'bridge':2}.get(t.get('building'),0)
        if kind==1:mh=max(mh,h-1.2)
        if kind==2:mh=5;h=8.5
        B.append([round(h,1),round(mh,1),kind,F(o[:-1]),[F(hh[:-1]) for hh in holes if any(inb(p,40) for p in hh)]])
        n=t.get('name')
        if n in LABELS and n not in seen:
            seen.add(n);xs=[p[0] for p in o];zs=[p[1] for p in o];LB.append([LABELS[n],round(sum(xs)/len(xs),1),round(sum(zs)/len(zs),1),round(h,1)])
        continue
    k=area_kind(t)
    if not k:continue
    c=clip(o)
    if len(c)<3:continue
    A.append([k,F(c),[F(hh[:-1]) for hh in holes if all(inb(p) for p in hh)]])
RW={'trunk':(10.5,0),'secondary':(9,0),'secondary_link':(6,0),'tertiary':(8,0),'tertiary_link':(6,0),'residential':(6.5,1),'unclassified':(6,1),'living_street':(5,1),'service':(4.2,2),'busway':(7,3),'pedestrian':(4,4),'footway':(2,5),'steps':(2,5),'path':(1.6,5),'cycleway':(2.2,6),'track':(3,7),'construction':(7,1)}
R_=[];BAR=[];RAIL=[]
for t,pts in lines:
    if not any(inb(p,30) for p in pts):continue
    h=t.get('highway')
    if h in RW:
        if t.get('tunnel') in('yes',) or (t.get('layer','0').lstrip('-').isdigit() and int(t.get('layer','0'))<0):continue
        w,c=RW[h]
        if c in(0,1,3) and t.get('lanes'):
            try:w=max(w*.7,int(t['lanes'])*3.3+(1 if t.get('oneway')!='yes' else .6))
            except:pass
        elif c==0 and t.get('oneway')=='yes':w=w*.72
        if t.get('service')=='parking_aisle':w=5
        if t.get('footway') in('sidewalk','crossing') and c==5:w=2
        R_.append([c,round(w,1),F(pts)])
    elif t.get('barrier') in('fence','wall','hedge','retaining_wall'):
        BAR.append([{'fence':0,'wall':1,'retaining_wall':1,'hedge':2}[t['barrier']],F(pts)])
    elif t.get('natural')=='tree_row':
        for i in range(len(pts)-1):
            (ax,az),(bx,bz)=pts[i],pts[i+1];L=math.hypot(bx-ax,bz-az);n=max(1,int(L/8))
            for k in range(n):TREE.append((ax+(bx-ax)*(k+.5)/n,az+(bz-az)*(k+.5)/n))
    elif t.get('railway')=='subway':RAIL.append([1 if t.get('bridge') else 0,F(pts)])
# arbres dans les bois (tirage déterministe)
rnd=random.Random(7)
def pip(x,z,poly):
    c=False;j=len(poly)-1
    for i in range(len(poly)):
        xi,zi=poly[i];xj,zj=poly[j]
        if (zi>z)!=(zj>z) and x<(xj-xi)*(z-zi)/((zj-zi) or 1e-9)+xi:c=not c
        j=i
    return c
for k,ptsF,holes in A:
    if k!='wood':continue
    poly=list(zip(ptsF[0::2],ptsF[1::2]));xs=[p[0] for p in poly];zs=[p[1] for p in poly]
    ar=0.5*abs(sum(poly[i-1][0]*poly[i][1]-poly[i][0]*poly[i-1][1] for i in range(len(poly))))
    for _ in range(min(900,int(ar/110))):
        x=rnd.uniform(min(xs),max(xs));z=rnd.uniform(min(zs),max(zs))
        if pip(x,z,poly):TREE.append((x,z))
TREE=[p for p in TREE if inb(p)]
data={'b':[round(BX0,1),round(BX1,1),round(BZ0,1),round(BZ1,1)],'A':A,'B':B,'R':R_,'W':BAR,'L':RAIL,'T':F(TREE),'N':LB}
s=json.dumps(data,separators=(',',':'),ensure_ascii=False)
open(out,'w').write('const MOULON_OSM='+s+';\n')
print('areas',len(A),'buildings',len(B),'roads',len(R_),'barriers',len(BAR),'rail',len(RAIL),'trees',len(TREE),'labels',len(LB),'KB',len(s)//1024)
print('bounds',data['b'])
