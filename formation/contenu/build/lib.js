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
const LABELS = {
  fr: { C: "CONSENSUS", P: "PRÉLIMINAIRE", W: "MISE EN GARDE", M: "AVIS MÉDICAL" },
  en: { C: "CONSENSUS", P: "PRELIMINARY", W: "WARNING", M: "MEDICAL ADVICE" },
};
const TAGS = {
  C: { fill: CHAR, color: "FFFFFF" },
  P: { fill: "D9D4CA", color: CHAR },
  W: { fill: BORD, color: "FFFFFF" },
  M: { fill: "FFFFFF", color: BORD },
};
let LANG = "fr";
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
      out.push(new TextRun({ text: " " + LABELS[LANG][s[1]] + " ", font: SANS, size: 15, bold: true, color: g.color,
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

/* ================= DOCUMENT ================= */
function build({ lang, num, short, title, out, content }) {
LANG = lang;
const body = [];
const add = (...x) => x.forEach(e => Array.isArray(e) ? body.push(...e) : body.push(e));
content({ add, P, H1, H2, B, N, SP, callout, table, runs, Paragraph, TextRun, PageBreak, BorderStyle, CHAR, BORD, MUTED, GREY, SERIF });
const numCfg = ref => ({ reference: ref, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
  style: { run: { color: BORD, bold: true }, paragraph: { indent: { left: 400, hanging: 400 } } } }] });
const doc = new Document({
  creator: "2Th & H4SH", title, language: lang === "fr" ? "fr-FR" : "en-US",
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
        new TextRun({ text: "\tMODULE " + num + " · " + short.toUpperCase(), size: 16, color: MUTED, characterSpacing: 20 })] })] }),
      first: new Header({ children: [new Paragraph({ children: [new TextRun({ text: "2TH & H4SH", bold: true, size: 16, characterSpacing: 20 })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
      children: [new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED })] })] }),
      first: new Footer({ children: [new Paragraph({ children: [] })] }) },
    children: body,
  }],
});
return Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log("ok", out); });
}
module.exports = { build };
