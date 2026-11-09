"""Build the single sales PDF: cover + contents + the 11 English modules.

Usage:  python3 build/book.py            (from formation/contenu)
Output: 2th-h4sh-protocol.en.pdf  (unstamped master, ready for platform stamping)
Needs:  node + docx, LibreOffice, pdftotext, Playwright (node), pypdf.
        Fonts: Georgia (or Gelasio aliased to Georgia in fontconfig) and Calibri (or Carlito).
"""
import json, os, re, subprocess, sys, tempfile
from pypdf import PdfReader, PdfWriter

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(ROOT, "2th-h4sh-protocol.en.pdf")
SOFFICE = os.environ.get("SOFFICE_PY")  # optional wrapper; falls back to soffice
EDITION = "Edition 1.0 · 2026"

MODULES = [
    ("00", "Preamble", "Read this first"),
    ("01", "Framework and realistic expectations", "What you can change, and how to track it"),
    ("02", "Skincare", "Routine, actives, 12-week introduction plan"),
    ("03", "Soft-maxxing", "Posture, mewing, teeth, sleep"),
    ("04", "Physique", "Fat loss, V-taper, jawline"),
    ("05", "Style and grooming", "Haircut, beard, capsule wardrobe"),
    ("06", "Hair care", "Scalp, hair loss, proven treatments"),
    ("07", "Confidence and body language", "Eye contact, voice, exposure ladder"),
    ("08", "Practices to avoid", "Twelve shortcuts, and what to do instead"),
    ("09", "90-day action plan", "Week by week, three checkpoints"),
    ("10", "FAQ and resources", "Answers, professionals, glossary"),
]

# Cover "Licensed to" box, in mm from the bottom-left corner (shared with stamp.py).
LICENSE_BOX = {"x": 20, "y": 22, "w": 120, "h": 20}


def run(cmd, **kw):
    subprocess.run(cmd, check=True, **kw)


def build_body(tmp):
    docx = os.path.join(tmp, "body.docx")
    run(["node", os.path.join(HERE, "book.js"), docx], stdout=subprocess.DEVNULL)
    conv = [sys.executable, SOFFICE] if SOFFICE else ["soffice"]
    run(conv + ["--headless", "--convert-to", "pdf", "--outdir", tmp, docx], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return os.path.join(tmp, "body.pdf")


def find_starts(pdf):
    """Printed page number where each module starts (body page 1 = printed page 3)."""
    n = len(PdfReader(pdf).pages)
    starts = {}
    for i in range(1, n + 1):
        top = subprocess.run(["pdftotext", "-f", str(i), "-l", str(i), "-layout", pdf, "-"],
                             capture_output=True, text=True).stdout.splitlines()[:12]
        for line in top:
            m = re.fullmatch(r"\s*(MODULE (\d\d)|PREAMBLE)\s*", line)
            if m:
                starts.setdefault(m.group(2) or "00", i + 2)
    missing = [m for m, *_ in MODULES if m not in starts]
    if missing:
        sys.exit(f"Could not find start page for modules {missing}")
    return starts, n


FACE = """<svg viewBox="0 0 400 520" fill="none" stroke-linecap="round" stroke-linejoin="round">
<g stroke="#5a5a62" stroke-width=".8" stroke-dasharray="3 4">
<line x1="200" y1="20" x2="200" y2="512"/><line x1="40" y1="112" x2="360" y2="112"/><line x1="40" y1="222" x2="360" y2="222"/>
<line x1="40" y1="332" x2="360" y2="332"/><line x1="40" y1="468" x2="360" y2="468"/></g>
<g stroke="#C9566A" stroke-width="1"><line x1="100" y1="262" x2="300" y2="262"/><line x1="100" y1="256" x2="100" y2="268"/>
<line x1="300" y1="256" x2="300" y2="268"/><line x1="128" y1="400" x2="272" y2="400"/><line x1="128" y1="394" x2="128" y2="406"/><line x1="272" y1="394" x2="272" y2="406"/></g>
<g stroke="#E9E4DA" stroke-width="1.4">
<path d="M200 40 C270 40 305 100 300 180 C302 220 305 250 298 290 C292 330 285 360 272 385 C255 420 235 455 200 468 C165 455 145 420 128 385 C115 360 108 330 102 290 C95 250 98 220 100 180 C95 100 130 40 200 40 Z"/>
<path d="M118 142 C138 100 262 100 282 142"/><path d="M300 228 C322 224 326 272 302 300"/><path d="M100 228 C78 224 74 272 98 300"/>
<path d="M128 222 C145 210 170 210 185 218"/><path d="M215 218 C230 210 255 210 272 222"/>
<path d="M132 246 C146 233 168 233 182 247 C168 255 146 255 132 246 Z"/><path d="M218 247 C232 233 254 233 268 246 C254 255 232 255 218 247 Z"/>
<path d="M196 256 C193 290 184 314 186 324 C190 333 210 333 214 324"/><path d="M168 376 C185 369 215 369 232 376"/>
<path d="M176 383 C190 393 210 393 224 383"/><path d="M158 447 L156 516"/><path d="M242 447 L244 516"/></g>
<g font-family="JetBrains Mono" font-size="9.5" fill="#8f8a80"><text x="42" y="106">UPPER THIRD</text><text x="42" y="216">MIDDLE THIRD</text>
<text x="42" y="326">LOWER THIRD</text><text x="332" y="265" fill="#C9566A">BIZYG.</text><text x="278" y="416" fill="#C9566A">BIGONIAL</text></g></svg>"""


def front_html(starts, body_pages):
    b = LICENSE_BOX
    rows = "".join(
        f'<li><span class="n">{"—" if m == "00" else m}</span><span class="t"><b>{t}</b><i>{s}</i></span>'
        f'<span class="dots"></span><span class="p">{starts[m]}</span></li>' for m, t, s in MODULES)
    total = body_pages + 2
    return f"""<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
@page {{ size: A4; margin: 0 }}
* {{ margin:0; padding:0; box-sizing:border-box }}
body {{ font-family:"Inter Tight",sans-serif; -webkit-print-color-adjust:exact; print-color-adjust:exact }}
.page {{ width:210mm; height:297mm; position:relative; overflow:hidden; page-break-after:always }}
.mono {{ font-family:"JetBrains Mono",monospace; font-size:8.5pt; letter-spacing:.08em; text-transform:uppercase }}
.cover {{ background:#1C1C1F; color:#F1EEE8 }}
.cover .top {{ position:absolute; top:18mm; left:20mm; right:20mm; display:flex; justify-content:space-between; color:#9A948A; border-bottom:1px solid #3A3A40; padding-bottom:4mm }}
.cover .top b {{ color:#F1EEE8; font-weight:500 }} .cover .top b em {{ color:#C9566A; font-style:normal }}
.cover .face {{ position:absolute; right:-3mm; top:34mm; width:105mm; opacity:.9 }}
.cover .kick {{ position:absolute; left:20mm; top:62mm; color:#C9566A }}
.cover h1 {{ position:absolute; left:20mm; top:72mm; width:100mm; font-family:"Instrument Serif",serif; font-weight:400; font-size:58pt; line-height:.92; letter-spacing:-.01em }}
.cover h1 em {{ color:#C9566A }}
.cover .sub {{ position:absolute; left:20mm; top:150mm; width:92mm; font-size:11.5pt; line-height:1.5; color:#C9C2B6 }}
.cover .stats {{ position:absolute; left:20mm; right:20mm; top:196mm; display:flex; border-top:1px solid #3A3A40; padding-top:5mm }}
.cover .stats div {{ flex:1 }} .cover .stats b {{ display:block; font-family:"Instrument Serif",serif; font-weight:400; font-size:30pt; line-height:1 }}
.cover .stats span {{ color:#9A948A }}
.lic {{ position:absolute; left:{b['x']}mm; bottom:{b['y']}mm; width:{b['w']}mm; height:{b['h']}mm; border:1px solid #5a5a62; padding:3mm 4mm }}
.lic .mono {{ color:#9A948A; font-size:7.5pt }}
.lic-note {{ position:absolute; left:{b['x'] + b['w'] + 6}mm; right:20mm; bottom:{b['y']}mm; height:{b['h']}mm; display:flex; align-items:flex-end; font-size:7.5pt; line-height:1.45; color:#9A948A }}
.toc {{ background:#F1EEE8; color:#17171A; padding:22mm 20mm }}
.toc .hd {{ display:flex; justify-content:space-between; color:#6F6A61; border-bottom:1px solid #17171A; padding-bottom:3mm }}
.toc h2 {{ font-family:"Instrument Serif",serif; font-weight:400; font-size:44pt; margin:10mm 0 6mm }}
.toc ol {{ list-style:none }}
.toc li {{ display:flex; align-items:baseline; gap:4mm; padding:2.6mm 0; border-top:1px solid #CDC6B9 }}
.toc li:last-child {{ border-bottom:1px solid #CDC6B9 }}
.toc .n {{ font-family:"JetBrains Mono",monospace; font-size:9pt; color:#7A1F2E; width:8mm }}
.toc .t b {{ font-family:"Instrument Serif",serif; font-weight:400; font-size:15.5pt; display:block; line-height:1.1 }}
.toc .t i {{ font-style:normal; font-size:8.5pt; color:#6F6A61 }}
.toc .dots {{ flex:1; border-bottom:1px dotted #9a948a; transform:translateY(-1.2mm) }}
.toc .p {{ font-family:"JetBrains Mono",monospace; font-size:10pt; width:8mm; text-align:right }}
.toc .foot {{ position:absolute; left:20mm; right:20mm; bottom:18mm; display:grid; grid-template-columns:1fr 1fr; gap:8mm; font-size:8pt; line-height:1.5; color:#3A3936; border-top:1px solid #17171A; padding-top:4mm }}
.toc .foot b {{ display:block; font-family:"JetBrains Mono",monospace; font-weight:500; font-size:7.5pt; letter-spacing:.08em; text-transform:uppercase; color:#7A1F2E; margin-bottom:1.5mm }}
.tags span {{ display:inline-block; font-family:"Inter Tight"; font-weight:700; font-size:6.5pt; letter-spacing:.06em; padding:.4mm 1.2mm; margin:0 1mm .8mm 0 }}
</style></head><body>
<section class="page cover">
  <div class="top mono"><b>2TH <em>&amp;</em> H4SH</b><span>{EDITION}</span></div>
  <div class="face">{FACE}</div>
  <div class="kick mono">The 90-day protocol</div>
  <h1>Looksmaxing, <em>minus</em> the BS.</h1>
  <p class="sub">Skin, physique, style and presence. Every recommendation graded by level of evidence. Nothing dangerous, nothing magical.</p>
  <div class="stats mono"><div><b>11</b><span>modules</span></div><div><b>90</b><span>day plan</span></div><div><b>4</b><span>evidence labels</span></div><div><b>{total}</b><span>pages</span></div></div>
  <div class="lic"><div class="mono">Licensed to</div></div>
  <div class="lic-note">Personal, non-transferable license. This copy is tied to its buyer.</div>
</section>
<section class="page toc">
  <div class="hd mono"><span>2TH &amp; H4SH · The 90-day protocol</span><span>Contents</span></div>
  <h2>Contents</h2>
  <ol>{rows}</ol>
  <div class="foot">
    <div><b>How to read this program</b>
      <div class="tags"><span style="background:#1C1C1F;color:#fff">CONSENSUS</span><span style="background:#D9D4CA">PRELIMINARY</span><span style="background:#7A1F2E;color:#fff">WARNING</span><span style="border:1px solid #7A1F2E;color:#7A1F2E">MEDICAL ADVICE</span></div>
      Every claim carries a label showing how strong the evidence is. Start with the preamble, then follow the order or your assessment results.</div>
    <div><b>License &amp; disclaimer</b>This copy is licensed to a single buyer. Sharing, reselling or publishing it, in whole or in part, is prohibited. © 2026 2Th &amp; H4SH. This program is for aesthetic and educational purposes only and does not replace advice from a qualified healthcare professional.</div>
  </div>
</section></body></html>"""


RENDER_JS = r"""
const { chromium } = require('playwright');
(async () => {
  const [html, out] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + html, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: out, format: 'A4', printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
  await b.close();
})();
"""


def main():
    with tempfile.TemporaryDirectory() as tmp:
        body = build_body(tmp)
        starts, n = find_starts(body)
        html = os.path.join(tmp, "front.html")
        open(html, "w", encoding="utf-8").write(front_html(starts, n))
        js = os.path.join(tmp, "render.js")
        open(js, "w").write(RENDER_JS)
        front = os.path.join(tmp, "front.pdf")
        run(["node", js, html, front])
        w = PdfWriter()
        for src in (front, body):
            for pg in PdfReader(src).pages:
                w.add_page(pg)
        if len(w.pages) != n + 2:
            sys.exit(f"Unexpected page count {len(w.pages)}")
        w.add_metadata({"/Title": "2Th & H4SH — The 90-Day Protocol", "/Author": "2Th & H4SH",
                        "/Subject": "Looksmaxing, minus the BS. " + EDITION})
        # Bookmarks for each module
        for m, t, _ in MODULES:
            w.add_outline_item(("" if m == "00" else m + " · ") + t, starts[m] - 1)
        with open(OUT, "wb") as f:
            w.write(f)
        print(json.dumps({"out": OUT, "pages": n + 2, "starts": starts}))


if __name__ == "__main__":
    main()
