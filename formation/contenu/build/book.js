// Assembles the 11 English modules into one docx with continuous page numbers.
// Cover + table of contents are added afterwards by book.py (pages 1-2).
const { buildBook } = require("./lib");
const specs = ["00","01","02","03","04","05","06","07","08","09","10"].map(n => require(`./module-${n}.en.js`));
buildBook(specs, {
  out: process.argv[2] || require("path").join(__dirname, "book-body.en.docx"),
  title: "2Th & H4SH — The 90-Day Protocol",
  footerNote: "PERSONAL LICENSE · NOT FOR REDISTRIBUTION",
  pageStart: 3,
});
