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
      out.push(new TextRun({ text: "\u00A0" + LABELS[LANG][s[1]] + "\u00A0", font: SANS, size: 15, bold: true, color: g.color,
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
// Each distinct key restarts numbering at 1 (same list style, separate instance).
const INST = {};
let SECT = "";
const N = (s, key = "num") => new Paragraph({ numbering: { reference: "num", level: 0, instance: (INST[SECT + ":" + key] ??= Object.keys(INST).length + 1) }, children: runs(s), spacing: { after: 80, line: 290 } });
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
const T = {
  fr: { goals: "Ce que tu sauras faire à la fin du module", how: "Comment lire les étiquettes", src: "Sources",
    keys: ["Validé par la recherche et les recommandations des professionnels.", "Résultats encourageants mais études limitées. Ça peut valoir le coup, sans garantie.", "Inefficace, risqué, ou les deux. À ne pas faire.", "Ce point relève d'un professionnel de santé."],
    disc: "Ce module a une visée esthétique et éducative. Il ne remplace pas l'avis d'un professionnel de santé." },
  en: { goals: "By the end of this module, you'll be able to", how: "How to read the labels", src: "Sources",
    keys: ["Backed by research and professional guidelines.", "Promising results, limited studies. Might be worth it, no guarantees.", "Ineffective, risky, or both. Don't do it.", "This belongs to a healthcare professional."],
    disc: "This module is for aesthetic and educational purposes only. It does not replace advice from a qualified healthcare professional." },
};

// Builds the docx section for one module spec.
function section({ lang, num, short, content }, { footerNote = "", pageStart } = {}) {
  LANG = lang; SECT = num;
  const t = T[lang];
  const body = [];
  const add = (...x) => x.forEach(e => Array.isArray(e) ? body.push(...e) : body.push(e));
  const pb = () => new Paragraph({ children: [new PageBreak()] });
  const opener = ({ subtitle, meta, goals, labels = true }) => {
    add(
      new Paragraph({ children: [new TextRun({ text: num === "00" ? (lang === "fr" ? "PRÉAMBULE" : "PREAMBLE") : "MODULE " + num, bold: true, color: BORD, size: 20, characterSpacing: 40 })], spacing: { before: 1800, after: 120 } }),
      new Paragraph({ children: [new TextRun({ text: short, font: SERIF, size: short.length > 18 ? 64 : 88, color: CHAR })], spacing: { after: 80 } }),
      new Paragraph({ children: [new TextRun({ text: subtitle, font: SERIF, italics: true, size: 28, color: MUTED })], spacing: { after: 480 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: CHAR, space: 12 } } }));
    if (meta) add(...table(meta[0], [meta[1]], meta[0].map(() => 1)));
    if (goals) add(...callout(t.goals, goals, CHAR));
    if (labels) add(...callout(t.how, ["{C} " + t.keys[0], "{P} " + t.keys[1], "{W} " + t.keys[2], "{M} " + t.keys[3]]));
  };
  const srcInst = 1000 + Number(num);
  const sources = list => {
    add(H1("", t.src));
    list.forEach(s => add(new Paragraph({ numbering: { reference: "src", level: 0, instance: srcInst }, children: runs(s, { size: 18 }), spacing: { after: 80 } })));
    add(SP(), P(t.disc, { run: { italics: true, size: 18, color: MUTED } }));
  };
  const check = items => items.forEach(r => add(new Paragraph({ children: [new TextRun({ text: "☐  ", color: BORD, size: 24 }), ...runs(r)], spacing: { after: 100 } })));
  content({ add, P, H1, H2, B, N, SP, callout, table, runs, Paragraph, TextRun, PageBreak, BorderStyle, CHAR, BORD, MUTED, GREY, SERIF, pb, opener, sources, check });

  const footRuns = [];
  if (footerNote) footRuns.push(new TextRun({ text: footerNote, size: 14, color: MUTED, characterSpacing: 10 }), new TextRun({ text: "\t" }));
  footRuns.push(new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED }));
  const foot = () => new Footer({ children: [new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: W }],
    alignment: footerNote ? AlignmentType.LEFT : AlignmentType.RIGHT, children: footRuns })] });
  return {
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 },
      ...(pageStart ? { pageNumbers: { start: pageStart } } : {}) }, titlePage: true },
    headers: { default: new Header({ children: [new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: W }],
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE, space: 4 } },
      children: [new TextRun({ text: "2TH & H4SH", bold: true, size: 16, color: CHAR, characterSpacing: 20 }),
        new TextRun({ text: "\t" + (num === "00" ? "" : "MODULE " + num + " · ") + short.toUpperCase(), size: 16, color: MUTED, characterSpacing: 20 })] })] }),
      first: new Header({ children: [new Paragraph({ children: [new TextRun({ text: "2TH & H4SH", bold: true, size: 16, characterSpacing: 20 })] })] }) },
    footers: footerNote ? { default: foot(), first: foot() }
      : { default: foot(), first: new Footer({ children: [new Paragraph({ children: [] })] }) },
    children: body,
  };
}

function makeDoc(sections, { lang, title }) {
  const numCfg = ref => ({ reference: ref, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
    style: { run: { color: BORD, bold: true }, paragraph: { indent: { left: 400, hanging: 400 } } } }] });
  return new Document({
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
      numCfg("num"), numCfg("src"),
    ] },
    sections,
  });
}

const write = (doc, out) => Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log("ok", out); });
const reset = () => { for (const k in INST) delete INST[k]; };

// One module -> one docx (unchanged behaviour).
function build(spec) { reset(); return write(makeDoc([section(spec)], spec), spec.out); }

// Several modules -> one docx, continuous page numbers.
function buildBook(specs, { out, title, footerNote, pageStart = 1 }) {
  reset();
  const sections = specs.map((s, i) => section(s, { footerNote, pageStart: i === 0 ? pageStart : undefined }));
  return write(makeDoc(sections, { lang: specs[0].lang, title }), out);
}
module.exports = { build, buildBook };
