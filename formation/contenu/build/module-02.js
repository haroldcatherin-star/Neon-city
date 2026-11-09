const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, LevelFormat, Header, Footer, PageNumber, HeadingLevel, PageBreak,
  TabStopType,
} = require("docx");

const CHAR = "1C1C1F", BORD = "7A1F2E", MUTED = "6F6A61", LINE = "CDC6B9", PAPER = "F1EEE8", GREY = "8A857C";
const SERIF = "Georgia", SANS = "Calibri";
const W = 9638; // A4 - 2 cm margins

/* ---------- inline markup ----------
   **gras**  _italique_  {C} consensus  {P} préliminaire  {W} mise en garde  {M} avis médical */
const TAGS = {
  C: { t: "CONSENSUS", fill: CHAR, color: "FFFFFF" },
  P: { t: "PRÉLIMINAIRE", fill: "D9D4CA", color: CHAR },
  W: { t: "MISE EN GARDE", fill: BORD, color: "FFFFFF" },
  M: { t: "AVIS MÉDICAL", fill: "FFFFFF", color: BORD },
};
function runs(str, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|_[^_]+_|\{[CPWM]\})/g;
  let last = 0, m;
  while ((m = re.exec(str))) {
    if (m.index > last) out.push(new TextRun({ text: str.slice(last, m.index), ...base }));
    const s = m[0];
    if (s.startsWith("**")) out.push(new TextRun({ text: s.slice(2, -2), bold: true, ...base }));
    else if (s.startsWith("_")) out.push(new TextRun({ text: s.slice(1, -1), italics: true, ...base }));
    else {
      const g = TAGS[s[1]];
      out.push(new TextRun({ text: " " + g.t + " ", font: SANS, size: 15, bold: true, color: g.color,
        shading: { type: ShadingType.CLEAR, fill: g.fill, color: "auto" },
        border: s[1] === "M" ? { style: BorderStyle.SINGLE, size: 4, color: BORD, space: 0 } : undefined,
        characterSpacing: 10 }));
      out.push(new TextRun({ text: " ", ...base }));
    }
    last = m.index + s.length;
  }
  if (last < str.length) out.push(new TextRun({ text: str.slice(last), ...base }));
  return out;
}

const P = (s, o = {}) => new Paragraph({ children: runs(s, o.run), spacing: { after: 140, line: 300 }, ...o.p });
const H1 = (num, s) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [
  ...(num ? [new TextRun({ text: num + "  ", color: BORD, font: SERIF })] : []), new TextRun({ text: s })] });
const H2 = s => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(s)] });
const B = (s, lvl = 0) => new Paragraph({ numbering: { reference: "dash", level: lvl }, children: runs(s), spacing: { after: 80, line: 290 } });
const N = (s, ref = "num") => new Paragraph({ numbering: { reference: ref, level: 0 }, children: runs(s), spacing: { after: 80, line: 290 } });
const SP = () => new Paragraph({ children: [], spacing: { after: 60 } });

function callout(title, lines, color = BORD) {
  const cell = new TableCell({
    width: { size: W, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: PAPER, color: "auto" },
    margins: { top: 160, bottom: 120, left: 240, right: 240 },
    borders: { left: { style: BorderStyle.SINGLE, size: 24, color }, top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
    children: [
      new Paragraph({ children: [new TextRun({ text: title.toUpperCase(), bold: true, size: 17, color, characterSpacing: 20 })], spacing: { after: 100 } }),
      ...lines.map(l => new Paragraph({ children: runs(l), spacing: { after: 80, line: 290 } })),
    ],
  });
  return [new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W], rows: [new TableRow({ cantSplit: true, children: [cell] })] }), SP()];
}

function table(head, rows, widths) {
  const sum = widths.reduce((a, b) => a + b, 0);
  widths = widths.map(w => Math.round(w / sum * W));
  widths[widths.length - 1] += W - widths.reduce((a, b) => a + b, 0);
  const b = { style: BorderStyle.SINGLE, size: 4, color: LINE };
  const cell = (s, i, hd) => new TableCell({
    width: { size: widths[i], type: WidthType.DXA },
    shading: hd ? { type: ShadingType.CLEAR, fill: CHAR, color: "auto" } : undefined,
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    borders: { top: b, bottom: b, left: b, right: b },
    children: s.split("\n").map(line => new Paragraph({ children: runs(line, hd ? { bold: true, color: "FFFFFF", size: 18 } : { size: 19 }), spacing: { after: 40, line: 260 } })),
  });
  return [new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: widths,
    rows: [new TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, i, true)) }),
      ...rows.map(r => new TableRow({ cantSplit: true, children: r.map((c, i) => cell(c, i, false)) }))],
  }), SP()];
}

/* ================= CONTENU ================= */
const body = [];
const add = (...x) => x.forEach(e => Array.isArray(e) ? body.push(...e) : body.push(e));

/* --- ouverture --- */
add(
  new Paragraph({ children: [new TextRun({ text: "MODULE 02", bold: true, color: BORD, size: 20, characterSpacing: 40 })], spacing: { before: 1800, after: 120 } }),
  new Paragraph({ children: [new TextRun({ text: "Skincare", font: SERIF, size: 88, color: CHAR })], spacing: { after: 80 } }),
  new Paragraph({ children: [new TextRun({ text: "Une peau nette avec une routine simple, des actifs bien choisis et de la patience.", font: SERIF, italics: true, size: 28, color: MUTED })], spacing: { after: 480 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: CHAR, space: 12 } } }),
  ...table(["Durée de lecture", "Budget", "Premiers effets visibles", "Prérequis"],
    [["25 minutes environ", "35 à 50 € / mois", "8 à 12 semaines", "Module 01 lu"]], [1, 1, 1, 1]),
);
add(...callout("Ce que tu sauras faire à la fin du module", [
  "Identifier ton type de peau en 1 heure, sans matériel.",
  "Monter une routine matin / soir de 5 produits maximum.",
  "Choisir **un** actif adapté à ton problème principal et l'introduire sans irriter ta peau.",
  "Reconnaître les situations où il faut consulter, et ne pas perdre de temps avant de le faire.",
], CHAR));
add(...callout("Comment lire les étiquettes", [
  "{C} Validé par la recherche et les recommandations des dermatologues.",
  "{P} Résultats encourageants mais études limitées. Ça peut valoir le coup, sans garantie.",
  "{W} Inefficace, risqué, ou les deux. À ne pas faire.",
  "{M} Ce point relève d'un professionnel de santé : médecin, dermatologue ou pharmacien.",
]));

/* --- 1 --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.1", "Comprendre ta peau en 5 minutes"));
add(P("Pas besoin d'un cours de biologie pour avoir une bonne peau. Mais trois notions t'éviteront 90 % des erreurs que tu vois sur TikTok."));
add(H2("La barrière cutanée"));
add(P("La couche la plus externe de ta peau fonctionne comme un mur de briques : des cellules mortes (les briques) tenues par des lipides (le ciment). Ce mur garde l'eau à l'intérieur et les irritants à l'extérieur. {C}"));
add(P("Quand tu l'abîmes (gommages agressifs, trop d'actifs en même temps, savon décapant), ta peau tire, rougit, pique, et paradoxalement **produit parfois plus de sébum et de boutons**. La première règle du skincare, c'est donc de ne pas casser la barrière."));
add(H2("Le renouvellement de la peau"));
add(P("Ta peau se renouvelle en permanence : les cellules naissent en profondeur et remontent vers la surface en quelques semaines. Conséquence directe : **aucun produit ne peut montrer son vrai effet en quelques jours.** Il faut compter 8 à 12 semaines pour juger un traitement de l'acné. {C}"));
add(H2("Pourquoi l'acné à 16-25 ans"));
add(P("L'acné n'est ni une question d'hygiène, ni une punition pour ce que tu manges. Elle vient de quatre mécanismes qui se combinent : {C}"));
add(N("**Excès de sébum**, stimulé par les hormones androgènes, très actives à ton âge.", "num"));
add(N("**Pores qui se bouchent** : les cellules mortes s'accumulent à l'entrée du follicule.", "num"));
add(N("**Prolifération d'une bactérie** naturellement présente sur la peau (_Cutibacterium acnes_).", "num"));
add(N("**Inflammation**, qui transforme un point noir en bouton rouge.", "num"));
add(P("Chaque actif de ce module cible un ou plusieurs de ces mécanismes. C'est pour ça qu'on choisit un actif selon son problème, pas selon la mode."));
add(...callout("Et l'alimentation ?", [
  "Quelques études associent les produits laitiers et les aliments à index glycémique élevé à plus d'acné chez certaines personnes. {P}",
  "Le lien existe peut-être, mais il est modeste et variable. Ne te lance pas dans un régime restrictif pour ta peau : commence par la routine. Si tu veux tester, réduis un seul élément pendant 8 semaines et observe.",
], GREY));

/* --- 2 --- */
add(H1("2.2", "Identifier ton type de peau"));
add(P("Le test le plus simple, à faire un jour où tu n'as rien prévu :"));
add(N("Lave ton visage avec un nettoyant doux, sèche en tamponnant.", "num2"));
add(N("N'applique **rien** pendant une heure.", "num2"));
add(N("Observe ton front, ton nez, tes joues à la lumière du jour.", "num2"));
add(...table(["Ce que tu observes", "Type de peau", "Ce que ça change"], [
  ["Brillance partout, y compris sur les joues", "**Grasse**", "Textures légères (gel, fluide). Ne pas décaper : ça aggrave."],
  ["Brillance sur front, nez, menton ; joues normales", "**Mixte**", "Le cas le plus fréquent chez les hommes jeunes. Routine standard."],
  ["Ta peau tire, quelques zones rugueuses ou qui pèlent", "**Sèche**", "Crème plus riche, nettoyant très doux, éviter l'eau très chaude."],
  ["Ni brillance ni tiraillement", "**Normale**", "Tu as de la marge. Protège ce que tu as."],
], [3, 1.4, 3.6]));
add(P("La peau **sensible** n'est pas un type mais un trait : elle rougit, chauffe ou pique facilement. Si c'est ton cas, tout ce qui suit s'applique, en allant deux fois plus lentement et en évitant les produits parfumés."));

/* --- 3 --- */
add(H1("2.3", "La routine de base"));
add(P("Cinq produits au maximum. Si tu ne dois retenir qu'une chose : **une routine simple faite tous les jours bat une routine parfaite faite une fois sur trois.**"));
add(...table(["", "Matin", "Soir"], [
  ["1", "**Nettoyant doux**\nOu simplement de l'eau si ta peau est sèche.", "**Nettoyant doux**\nObligatoire si tu as transpiré ou mis du SPF."],
  ["2", "_(Actif du matin, facultatif)_", "**Actif** (un seul, voir 2.4)\nSur peau bien sèche."],
  ["3", "**Hydratant**\nTexture adaptée à ton type de peau.", "**Hydratant**\nMême produit que le matin, c'est très bien."],
  ["4", "**Protection solaire SPF 30 minimum**\nSPF 50 si tu passes du temps dehors.", "—"],
], [0.4, 4, 4]));
add(H2("La protection solaire, le produit le plus important"));
add(P("Les UV sont la première cause du vieillissement visible de la peau : rides, taches, texture irrégulière. Dans une étude australienne de 4 ans, les participants qui appliquaient un SPF tous les jours ne montraient pas d'aggravation détectable du vieillissement cutané, contrairement au groupe qui l'utilisait à leur guise. {C}"));
add(P("Pour toi, le SPF a deux intérêts immédiats :"));
add(B("il empêche les **marques rouges et brunes** laissées par les boutons de s'assombrir ;"));
add(B("plusieurs actifs (rétinoïdes, acides) rendent la peau **plus sensible au soleil**. Sans SPF, ils deviennent contre-productifs."));
add(...callout("Les 3 erreurs qui annulent ton SPF", [
  "**Pas assez de produit.** Pour le visage et le cou, compte environ deux longueurs de doigt. Une noisette ne suffit pas.",
  "**Pas tous les jours.** Les UV traversent les nuages et les vitres. Hiver compris.",
  "**Pas de réapplication.** Dehors au soleil, on renouvelle toutes les 2 heures, et après la transpiration ou la baignade.",
], CHAR));
add(H2("Le nettoyant : doux, vraiment"));
add(P("Cherche « nettoyant doux », « gel nettoyant pour peaux sensibles » ou « syndet ». Évite les savons classiques et les produits qui laissent la peau « squeaky clean » : cette sensation de propreté extrême, c'est ta barrière qui part. 30 à 60 secondes de massage, eau tiède, et c'est fini."));
add(H2("L'hydratant : même si ta peau est grasse"));
add(P("Une peau grasse peut être déshydratée. Un hydratant léger, marqué « non comédogène », aide la barrière à tenir et limite les irritations causées par les actifs. Si ta peau est très grasse, un gel suffit."));

/* --- 4 --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.4", "Les actifs : choisir le bon"));
add(P("Un actif est un ingrédient qui a un effet ciblé. C'est là que les gens se perdent : ils en accumulent cinq, irritent leur peau, et concluent que « rien ne marche ». **Commence par un seul**, choisi selon ton problème principal."));
add(...table(["Actif", "Pour quoi", "Niveau", "À savoir"], [
  ["**Peroxyde de benzoyle**\n2,5 à 5 %", "Boutons rouges, acné inflammatoire", "{C}", "Disponible en pharmacie sans ordonnance. Décolore les serviettes et taies d'oreiller. Commencer à 2,5 %."],
  ["**Adapalène**\n0,1 %", "Points noirs, boutons, texture", "{C}", "Rétinoïde. Sur ordonnance en France. {M}"],
  ["**Acide azélaïque**\n10 à 20 %", "Boutons, rougeurs, marques brunes", "{C}", "Bien toléré. La forme à 20 % est un médicament (demande à ton pharmacien), les versions cosmétiques tournent autour de 10 %."],
  ["**Niacinamide**\n2 à 5 %", "Sébum, rougeurs, marques", "{P}", "Très bien toléré, bon premier actif si ta peau est sensible."],
  ["**Acide salicylique**\n0,5 à 2 %", "Points noirs, pores, peau grasse", "{P}", "Efficacité plus modeste que les trois premiers. Utile en complément."],
  ["**Rétinol / rétinal**\ncosmétique", "Texture, grain de peau", "{P}", "Version douce des rétinoïdes. Moins puissant que l'adapalène, effet plus lent."],
  ["**Acides AHA**\nglycolique, lactique", "Éclat, texture, peau terne", "{P}", "Augmentent la sensibilité au soleil. Pas le même soir qu'un rétinoïde au début."],
  ["**Vitamine C**", "Éclat, antioxydant", "{P}", "Facultative. Ne passe pas avant la routine de base."],
], [2.1, 2, 1.3, 3.6]));
add(H2("Quel actif pour quel problème ?"));
add(...table(["Ton problème principal", "Premier choix", "Alternative si peau sensible"], [
  ["Boutons rouges, inflammés", "Peroxyde de benzoyle 2,5 %", "Acide azélaïque"],
  ["Points noirs, petits boutons, grain irrégulier", "Rétinoïde (adapalène sur avis médical, sinon rétinol)", "Niacinamide"],
  ["Peau grasse et brillante", "Niacinamide", "Niacinamide"],
  ["Marques laissées par les boutons", "SPF quotidien + acide azélaïque ou niacinamide", "Niacinamide"],
  ["Peau terne, rien de spécial", "Aucun actif n'est obligatoire. SPF + routine de base.", "—"],
], [3, 3.4, 2.6]));
add(...callout("Les rétinoïdes, mode d'emploi", [
  "Ce sont parmi les actifs les mieux étudiés pour l'acné et la texture. Ils accélèrent le renouvellement des cellules et empêchent les pores de se boucher. {C}",
  "**Le soir uniquement**, sur peau sèche, une quantité de la taille d'un petit pois pour tout le visage.",
  "**Commence 2 soirs par semaine**, puis augmente toutes les 2 semaines si ta peau le tolère.",
  "Les premières semaines, une peau qui pèle un peu ou rougit légèrement est fréquente. Une brûlure ou un gonflement ne l'est pas : arrête.",
  "La trétinoïne et l'adapalène nécessitent une ordonnance en France. Ne les achète pas sur internet hors circuit pharmaceutique. {M}",
], CHAR));

/* --- 5 --- */
add(H1("2.5", "Plan d'introduction sur 12 semaines"));
add(P("La règle d'or : **un seul nouveau produit à la fois, et au moins deux semaines entre deux nouveautés.** Si ta peau réagit, tu sauras exactement quel produit est en cause."));
add(P("Avant d'utiliser un nouveau produit sur tout le visage, fais un **test** : applique-le derrière l'oreille ou sur le côté du cou pendant 3 soirs. Pas de réaction ? Tu peux y aller."));
add(...table(["Semaines", "Ce que tu fais", "Objectif"], [
  ["**1 – 2**", "Nettoyant doux + hydratant + SPF. Rien d'autre.\nPhotos de départ : même lumière, même angle, sans filtre.", "Installer l'habitude. Calmer la peau si tu utilisais trop de produits."],
  ["**3 – 4**", "Ajoute ton actif **2 soirs par semaine** (ex. lundi et jeudi).", "Habituer la peau."],
  ["**5 – 6**", "Passe à **un soir sur deux** si aucune irritation.", "Monter progressivement."],
  ["**7 – 8**", "Passe à **tous les soirs** si ta peau le tolère. Sinon, reste à un soir sur deux.", "Atteindre la fréquence cible."],
  ["**9 – 12**", "Ne change rien.\nNouvelles photos à la semaine 12, mêmes conditions.", "Laisser le temps à l'actif d'agir, puis juger."],
], [1.2, 5, 2.8]));
add(P("À la semaine 12, compare tes photos, pas ton reflet du jour. Amélioration nette : garde la routine. Peu ou pas de changement : tu peux ajouter un deuxième actif de façon progressive, ou consulter."));
add(...callout("Purge ou réaction ?", [
  "Avec un rétinoïde ou un acide, certaines personnes voient **plus de petits boutons pendant 2 à 6 semaines**, aux endroits où elles en ont d'habitude. C'est souvent la purge : les pores bouchés remontent plus vite. Ça passe. {P}",
  "Des boutons à des endroits inhabituels, des démangeaisons, une brûlure ou des plaques : ce n'est pas une purge. Arrête le produit et, si ça persiste, demande conseil à un pharmacien ou un médecin.",
], GREY));

/* --- 6 --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.6", "Le budget : 35 à 50 € par mois"));
add(P("Pas besoin de marques de luxe. Les gammes de pharmacie et de grande surface proposent des formules sérieuses. Ce qui compte, c'est la formule, pas le flacon."));
add(...table(["Produit", "Prix courant", "Durée", "Coût mensuel"], [
  ["Nettoyant doux (200 ml)", "8 – 12 €", "2 à 3 mois", "≈ 4 €"],
  ["Hydratant (50 ml)", "10 – 15 €", "≈ 2 mois", "≈ 6 €"],
  ["SPF 50 visage (50 ml)", "12 – 20 €", "≈ 1 mois*", "≈ 15 €"],
  ["Un actif (sérum ou gel)", "10 – 20 €", "2 à 3 mois", "≈ 6 €"],
  ["Baume à lèvres SPF, imprévus", "—", "—", "≈ 5 €"],
  ["**Total**", "", "", "**≈ 35 – 40 €**"],
], [3.6, 1.8, 1.8, 1.8]));
add(P("* Si ton tube de SPF dure trois mois, c'est que tu n'en mets pas assez. C'est le poste le plus important du budget : ne fais pas d'économie dessus.", { run: { size: 19, color: MUTED } }));
add(H2("Lire une étiquette en 30 secondes"));
add(B("**Non comédogène** : formulé pour limiter le risque de boucher les pores. Utile si tu as de l'acné."));
add(B("**Sans parfum** : mieux toléré, surtout si ta peau est sensible ou si tu utilises un actif."));
add(B("**Le pourcentage** de l'actif est indiqué ? Bon signe. Un actif en fin de liste d'ingrédients, sans pourcentage, est souvent présent à dose symbolique."));
add(B("**« Clean », « détox », « naturel »** : ces mots ne garantissent rien. Ni mieux, ni pire."));

/* --- 7 --- */
add(H1("2.7", "Problèmes fréquents"));
add(H2("Boutons et rougeurs après le rasage"));
add(P("Souvent des poils incarnés ou une irritation du follicule. Rase dans le sens du poil, avec une lame propre, sur peau mouillée et un gel de rasage. Si ça persiste, une tondeuse qui laisse 0,5 à 1 mm de poil règle souvent le problème. Détails dans le module 05."));
add(H2("Les marques laissées par les boutons"));
add(P("Les marques **rouges ou brunes** ne sont pas des cicatrices : elles s'estompent seules en quelques mois. Le SPF quotidien accélère le processus en empêchant qu'elles foncent, et l'acide azélaïque ou la niacinamide peuvent aider. {C}"));
add(P("Les **creux** dans la peau sont de vraies cicatrices. Aucun produit cosmétique ne les comble. Des traitements existent chez le dermatologue. {M}"));
add(H2("Les points noirs sur le nez"));
add(P("Beaucoup de « points noirs » sur le nez sont en fait des **filaments sébacés** : des petits points gris réguliers, normaux, qui se remplissent à nouveau en quelques jours. Les patchs et extracteurs ne servent qu'à irriter. Un acide salicylique ou un rétinoïde les rend moins visibles, sans les faire disparaître."));
add(H2("La peau après le sport"));
add(P("La transpiration seule ne cause pas d'acné, mais la sueur bloquée sous un casque, une casquette ou un t-shirt synthétique peut aggraver les boutons. Rince ton visage après l'entraînement et change de vêtements dès que possible."));
add(H2("Une peau qui tire, brûle ou pèle beaucoup"));
add(P("Ta barrière est abîmée, souvent parce que tu en fais trop. **Stoppe tous les actifs pendant une à deux semaines** : nettoyant doux, hydratant, SPF. Ta peau va se calmer. Ensuite, reprends un seul actif, plus lentement."));

/* --- 8 --- */
add(H1("2.8", "Ce qu'il ne faut pas faire"));
add(...table(["Pratique", "Pourquoi c'est une mauvaise idée", ""], [
  ["Percer ou gratter ses boutons", "Pousse l'inflammation plus profond. C'est la première cause de marques durables et de cicatrices.", "{W}"],
  ["Dentifrice, citron, bicarbonate, vinaigre sur les boutons", "Irritants, voire caustiques. Peuvent laisser des taches et des brûlures.", "{W}"],
  ["Gommages à grains plusieurs fois par semaine", "Microlésions et barrière abîmée. Les acides font le travail plus proprement.", "{W}"],
  ["Accumuler 4 ou 5 actifs dès le départ", "Irritation quasi garantie, et impossible de savoir ce qui marche.", "{W}"],
  ["Acheter de la trétinoïne ou de l'isotrétinoïne sur internet", "Produits non contrôlés, dosages inconnus. L'isotrétinoïne exige un suivi médical strict (risques pour la grossesse, suivi de l'humeur).", "{W}"],
  ["Crèmes « éclaircissantes » hors pharmacie", "Certaines contiennent des corticoïdes, de l'hydroquinone non encadrée ou du mercure.", "{W}"],
], [2.8, 4.9, 1.9]));

/* --- 9 --- */
add(H1("2.9", "Quand consulter"));
add(P("Consulter n'est pas un échec. C'est souvent **le moyen le plus rapide** d'avoir des résultats, parce que les traitements les plus efficaces contre l'acné sont sur ordonnance. {M}"));
add(...callout("Prends rendez-vous si…", [
  "Tu as des boutons **profonds, durs et douloureux** (nodules, kystes).",
  "Des **cicatrices en creux** commencent à apparaître.",
  "Ton acné ne s'améliore pas après **3 mois de routine bien suivie**.",
  "Ta peau **affecte ton moral**, ta confiance ou ta vie sociale.",
  "Un **grain de beauté change** : forme irrégulière, plusieurs couleurs, bords flous, taille qui augmente.",
  "Tu fais une **réaction** : gonflement, plaques, démangeaisons fortes.",
]));
add(P("**Par où commencer en France :** ton pharmacien peut te conseiller gratuitement et sans rendez-vous. Pour une ordonnance, va voir ton médecin généraliste : il peut prescrire un traitement de l'acné ou t'orienter vers un dermatologue. Si tu as moins de 18 ans, parles-en à un parent pour prendre rendez-vous."));

/* --- 10 --- */
add(H1("2.10", "Le bon état d'esprit"));
add(P("Ta peau n'a pas besoin d'être parfaite. Personne n'a une peau de filtre Instagram, y compris les gens qui la montrent."));
add(B("**Ne t'inspecte pas au miroir grossissant.** À 10 cm, tout le monde a des pores, des rougeurs et des imperfections. Les autres te voient à un mètre."));
add(B("**Juge tes progrès sur photos**, une fois par mois, même lumière. Pas sur ton reflet du matin."));
add(B("**Une mauvaise semaine n'est pas un échec.** Le stress, le manque de sommeil, le rasage peuvent faire ressortir quelques boutons. Continue la routine."));
add(P("Si tu passes beaucoup de temps à penser à ta peau, que ça t'empêche de sortir ou que ça pèse sur ton moral, parles-en. À un proche, à ton médecin. C'est fréquent, et ça se traite aussi."));

/* --- récap --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.11", "Fiche récap"));
add(...table(["", "Matin", "Soir"], [
  ["1", "Nettoyant doux (ou eau)", "Nettoyant doux"],
  ["2", "Hydratant", "Actif : un seul, introduit progressivement"],
  ["3", "SPF 30 minimum, deux longueurs de doigt", "Hydratant"],
], [0.4, 4, 4]));
add(H2("Les 7 règles"));
["Une routine simple, tous les jours.", "Le SPF, tous les matins, toute l'année.", "Un seul actif pour commencer.", "Un nouveau produit à la fois, deux semaines minimum entre deux.", "On juge un résultat à 8–12 semaines, sur photos.", "On ne perce pas ses boutons.", "Si ça ne s'améliore pas en 3 mois, on consulte."]
  .forEach(r => add(N(r, "num3")));
add(H2("Ta check-list de départ"));
["J'ai identifié mon type de peau.", "J'ai un nettoyant doux, un hydratant et un SPF.", "J'ai pris mes photos de départ.", "J'ai choisi mon actif selon mon problème principal.", "J'ai noté dans mon agenda les semaines 3, 5, 7 et 12."]
  .forEach(r => add(new Paragraph({ children: [new TextRun({ text: "☐  ", color: BORD, size: 24 }), ...runs(r)], spacing: { after: 100 } })));

/* --- sources --- */
add(H1("", "Sources"));
[
  "Reynolds RV, Yeung H, Cheng CE, et al. Guidelines of care for the management of acne vulgaris. _Journal of the American Academy of Dermatology_, 2024 ; 90(5) : 1006.e1–1006.e30.",
  "Zaenglein AL, Pathy AL, Schlosser BJ, et al. Guidelines of care for the management of acne vulgaris. _Journal of the American Academy of Dermatology_, 2016 ; 74(5) : 945–973.",
  "Hughes MCB, Williams GM, Baker P, Green AC. Sunscreen and prevention of skin aging: a randomized trial. _Annals of Internal Medicine_, 2013 ; 158(11) : 781–790.",
  "Kafi R, Kwak HSR, Schumacher WE, et al. Improvement of naturally aged skin with vitamin A (retinol). _Archives of Dermatology_, 2007 ; 143(5) : 606–612.",
  "Draelos ZD, Matsubara A, Smiles K. The effect of 2% niacinamide on facial sebum production. _Journal of Cosmetic and Laser Therapy_, 2006 ; 8(2) : 96–101.",
  "ANSM (Agence nationale de sécurité du médicament). Isotrétinoïne orale : informations et mesures de réduction des risques. ansm.sante.fr.",
].forEach(s => add(new Paragraph({ numbering: { reference: "src", level: 0 }, children: runs(s, { size: 18 }), spacing: { after: 80 } })));
add(SP(), P("Ce module a une visée esthétique et éducative. Il ne remplace pas l'avis d'un médecin, d'un dermatologue ou d'un pharmacien.", { run: { italics: true, size: 18, color: MUTED } }));

/* ================= DOCUMENT ================= */
const numCfg = ref => ({ reference: ref, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
  style: { run: { color: BORD, bold: true }, paragraph: { indent: { left: 400, hanging: 400 } } } }] });
const doc = new Document({
  creator: "2Th & H4SH", title: "Module 02 — Skincare",
  styles: {
    default: { document: { run: { font: SANS, size: 21, color: CHAR } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: SERIF, size: 40, color: CHAR },
        paragraph: { spacing: { before: 480, after: 200 }, keepNext: true, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE, space: 6 } } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: SANS, size: 24, bold: true, color: BORD },
        paragraph: { spacing: { before: 280, after: 100 }, keepNext: true, outlineLevel: 1 } },
    ],
  },
  numbering: { config: [
    { reference: "dash", levels: [{ level: 0, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT,
      style: { run: { color: BORD }, paragraph: { indent: { left: 400, hanging: 280 } } } }] },
    numCfg("num"), numCfg("num2"), numCfg("num3"), numCfg("src"),
  ] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } }, titlePage: true },
    headers: { default: new Header({ children: [new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: W }],
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE, space: 4 } },
      children: [new TextRun({ text: "2TH & H4SH", bold: true, size: 16, color: CHAR, characterSpacing: 20 }),
        new TextRun({ text: "\tMODULE 02 · SKINCARE", size: 16, color: MUTED, characterSpacing: 20 })] })] }),
      first: new Header({ children: [new Paragraph({ children: [new TextRun({ text: "2TH & H4SH", bold: true, size: 16, characterSpacing: 20 })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
      children: [new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED })] })] }),
      first: new Footer({ children: [new Paragraph({ children: [] })] }) },
    children: body,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2], b); console.log("ok"); });
