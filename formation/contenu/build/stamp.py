"""Stamp a buyer's details onto the sales PDF (for manual sales or platforms without stamping).

Usage:  python3 build/stamp.py buyer@email.com [ORDER-ID] [--in master.pdf] [--out file.pdf]
Writes the buyer's email into the cover's "Licensed to" box and a small line at the bottom of
every page, and records it in the PDF metadata. Keep the unstamped master private.
"""
import argparse, io, os, re, sys
from pypdf import PdfReader, PdfWriter
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from book import LICENSE_BOX, OUT as MASTER  # same coordinates as the cover


def overlay(w, h, first, text, order):
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(w, h))
    if first:
        b = LICENSE_BOX
        c.setFillColorRGB(0.945, 0.933, 0.91)
        c.setFont("Courier-Bold", 13)
        c.drawString((b["x"] + 4) * mm, (b["y"] + 5) * mm, text)
        if order:
            c.setFont("Courier", 7.5)
            c.setFillColorRGB(0.6, 0.58, 0.54)
            c.drawRightString((b["x"] + b["w"] - 4) * mm, (b["y"] + 13.5) * mm, "ORDER " + order)
    else:
        c.setFont("Courier", 6.5)
        c.setFillColorRGB(0.45, 0.43, 0.4)
        line = f"Licensed to {text}" + (f" · order {order}" if order else "")
        c.drawCentredString(w / 2, 6 * mm, line)
    c.save()
    buf.seek(0)
    return PdfReader(buf).pages[0]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("email")
    ap.add_argument("order", nargs="?", default="")
    ap.add_argument("--in", dest="src", default=MASTER)
    ap.add_argument("--out")
    a = ap.parse_args()
    if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", a.email):
        sys.exit("Invalid email")
    out = a.out or os.path.join(os.path.dirname(a.src), "2th-h4sh-protocol." + re.sub(r"[^\w.-]", "_", a.email) + ".pdf")
    r, wr = PdfReader(a.src), PdfWriter()
    for i, pg in enumerate(r.pages):
        pw, ph = float(pg.mediabox.width), float(pg.mediabox.height)
        pg.merge_page(overlay(pw, ph, i == 0, a.email, a.order))
        wr.add_page(pg)
    meta = dict(r.metadata or {})
    meta.update({"/LicensedTo": a.email, "/OrderID": a.order})
    wr.add_metadata(meta)
    if r.outline:  # keep bookmarks
        for item in r.outline:
            if not isinstance(item, list):
                wr.add_outline_item(item.title, r.get_destination_page_number(item))
    with open(out, "wb") as f:
        wr.write(f)
    print(out)


if __name__ == "__main__":
    main()
