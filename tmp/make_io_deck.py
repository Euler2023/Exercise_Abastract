# -*- coding: utf-8 -*-
"""生成《正二十面体群与正八面体群题目精讲》PPTX（自适应版式）。

渲染器与内容分离：内容见 deck_content.py。
公式一律用 Unicode 纯文本（PPTX 不渲染 LaTeX）；避免字体缺失的冷僻符号。
"""
import datetime
import math
import os
import sys

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.oxml.ns import qn
from pptx.util import Inches, Pt

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import io_deck_content as C  # noqa: E402

FONT = "Microsoft YaHei"
SW, SH = 13.333, 7.5

INK = RGBColor(0x1F, 0x38, 0x64)
ACCENT = RGBColor(0xC0, 0x00, 0x00)
GOLD = RGBColor(0xBF, 0x8F, 0x00)
GRAY = RGBColor(0x59, 0x59, 0x59)
GRAY_LIGHT = RGBColor(0x80, 0x80, 0x80)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
LIGHTGRAY = RGBColor(0xF3, 0xF4, 0xF6)
AMBER = RGBColor(0xFF, 0xF6, 0xE5)
GREEN = RGBColor(0xEB, 0xF4, 0xEB)
BLUETINT = RGBColor(0xE9, 0xEF, 0xF8)
BODY_TEXT = RGBColor(0x22, 0x22, 0x22)
GREEN_DARK = RGBColor(0x2E, 0x6B, 0x2E)

M = 0.62
CW = SW - 2 * M
BODY_TOP = 1.40
FOOTER_TOP = 6.88

SIZES_BODY = (15.5, 14.5, 13.5, 12.5, 11.5, 10.5, 9.5)


def set_run(run, size, bold=False, color=INK, italic=False, font=FONT):
    f = run.font
    f.name = font
    f.size = Pt(size)
    f.bold = bold
    f.italic = italic
    f.color.rgb = color
    rPr = run._r.get_or_add_rPr()
    for tag in ("a:ea", "a:cs"):
        el = rPr.find(qn(tag))
        if el is None:
            el = rPr.makeelement(qn(tag), {})
            rPr.append(el)
        el.set("typeface", font)


def txbox(slide, l, t, w, h, anchor=MSO_ANCHOR.TOP):
    box = slide.shapes.add_textbox(Inches(l), Inches(t), Inches(w), Inches(h))
    tf = box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    tf.margin_left = tf.margin_right = Inches(0.02)
    tf.margin_top = tf.margin_bottom = Inches(0.01)
    return tf


def add_par(tf, text, size, bold=False, color=INK, italic=False,
            before=2, after=3, first=False, align=PP_ALIGN.LEFT):
    p = tf.paragraphs[0] if first else tf.add_paragraph()
    p.alignment = align
    p.space_before = Pt(before)
    p.space_after = Pt(after)
    run = p.add_run()
    run.text = text
    set_run(run, size, bold=bold, color=color, italic=italic)
    return p


def rect(slide, l, t, w, h, fill=LIGHTGRAY, line=None):
    shp = slide.shapes.add_shape(1, Inches(l), Inches(t), Inches(w), Inches(h))
    shp.shadow.inherit = False
    if fill is None:
        shp.fill.background()
    else:
        shp.fill.solid()
        shp.fill.fore_color.rgb = fill
    if line is None:
        shp.line.fill.background()
    else:
        shp.line.color.rgb = line
        shp.line.width = Pt(1)
    shp.text_frame.word_wrap = True
    return shp


# ------------------------------------------------------------ 文本度量
def est_units(text):
    u = 0.0
    for ch in text:
        o = ord(ch)
        if o > 0x2E7F:
            u += 2.0
        elif o >= 0x2000:
            u += 1.35
        else:
            u += 1.0
    return u


def est_lines(text, size, w_in):
    cap = max(6.0, (w_in * 72.0) / (size * 0.535))
    return max(1, int(math.ceil(est_units(text) / cap)))


def est_height(paras, size, w_in, space=6.0):
    total = 0.0
    for txt in paras:
        total += est_lines(txt, size, w_in) * (size * 1.34) + space
    return total / 72.0


def pick_size(paras, w_in, h_in, sizes=SIZES_BODY):
    for s in sizes:
        if est_height(paras, s, w_in) <= h_in:
            return s
    return sizes[-1]


# ------------------------------------------------------------------ 版式块
def slide_blank(prs):
    return prs.slides.add_slide(prs.slide_layouts[6])


def header(slide, title, right=None):
    tf = txbox(slide, M, 0.30, CW - 2.4, 0.62)
    add_par(tf, title, 24, bold=True, color=INK, first=True, before=0, after=0)
    if right:
        tf2 = txbox(slide, SW - M - 2.4, 0.40, 2.4, 0.42)
        add_par(tf2, right, 11.5, color=GRAY, first=True, before=0, after=0,
                align=PP_ALIGN.RIGHT)
    rect(slide, M, 1.02, CW, 0.035, fill=ACCENT)
    rect(slide, M, 1.02, 1.5, 0.035, fill=GOLD)


def footer(slide, left, right=""):
    tf = txbox(slide, M, FOOTER_TOP, CW - 1.1, 0.40)
    add_par(tf, left, 8.5, color=GRAY_LIGHT, first=True, before=0, after=0)
    if right:
        tf2 = txbox(slide, SW - M - 1.1, FOOTER_TOP, 1.1, 0.40)
        add_par(tf2, right, 8.5, color=GRAY_LIGHT, first=True, before=0, after=0,
                align=PP_ALIGN.RIGHT)


def section_divider(prs, sec):
    slide = slide_blank(prs)
    rect(slide, 0, 0, SW, SH, fill=INK)
    rect(slide, 0, 2.55, SW, 0.045, fill=GOLD)
    tf = txbox(slide, 1.1, 1.35, 10.5, 1.2)
    add_par(tf, f"§{sec['num']}  {sec['title']}", 38, bold=True, color=WHITE,
            first=True, before=0, after=0)
    tf2 = txbox(slide, 1.12, 2.78, 11.0, 1.0)
    add_par(tf2, sec["subtitle"], 15, color=RGBColor(0xD6, 0xDF, 0xEF),
            first=True, before=0, after=0)
    tf3 = txbox(slide, 1.12, 3.90, 11.0, 1.4)
    add_par(tf3, "本节题目：" + "   ".join(sec["codes"]), 13.5, bold=True,
            color=RGBColor(0xE8, 0xC9, 0x68), first=True, before=0, after=0)
    add_par(tf3, "每题两页：题面（含来源与提示）→ 解答（关键步骤与结论）",
            11.5, color=RGBColor(0xB8, 0xC4, 0xDC), before=8)


def table(slide, spec, l, t, w, row_h=0.34, font=12.0, hdr_font=12.0, widths=None):
    rows = len(spec["rows"]) + 1
    cols = len(spec["header"])
    shape = slide.shapes.add_table(rows, cols, Inches(l), Inches(t),
                                   Inches(w), Inches(row_h * rows))
    tbl = shape.table
    tbl.first_row = True
    if widths:
        scale = w / sum(widths)
        for i, wd in enumerate(widths):
            tbl.columns[i].width = Inches(wd * scale)
    else:
        first = w * 0.24
        rest = (w - first) / (cols - 1)
        tbl.columns[0].width = Inches(first)
        for i in range(1, cols):
            tbl.columns[i].width = Inches(rest)
    for r in range(rows):
        tbl.rows[r].height = Inches(row_h)
    data = [spec["header"]] + [list(r) for r in spec["rows"]]
    for r, row in enumerate(data):
        for c, val in enumerate(row):
            cell = tbl.cell(r, c)
            cell.margin_left = cell.margin_right = Inches(0.06)
            cell.margin_top = cell.margin_bottom = Inches(0.02)
            cell.vertical_anchor = MSO_ANCHOR.MIDDLE
            cell.fill.solid()
            cell.fill.fore_color.rgb = (INK if r == 0
                                        else (WHITE if r % 2 else RGBColor(0xF5, 0xF7, 0xFA)))
            tf = cell.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.alignment = PP_ALIGN.CENTER if c else PP_ALIGN.LEFT
            run = p.add_run()
            run.text = str(val)
            set_run(run, hdr_font if r == 0 else font,
                    bold=(r == 0), color=WHITE if r == 0 else INK)
    return tbl


def block_height(label, paras, max_h, min_h, tail=None, tail_size=9.5):
    inner_w = CW - 0.5
    label_h = 0.25 if label else 0.0
    avail = max_h - 0.26 - label_h
    size = pick_size(paras, inner_w, avail)
    need = est_height(paras, size, inner_w) + label_h + 0.26
    if tail:
        need += est_height([tail], tail_size, inner_w) + 0.06
    return max(min_h, min(max_h, need))


def block(slide, label, paras, top, max_h, min_h, fill, label_color=INK,
          tail=None, tail_size=9.5):
    """自适应高度的内容框，返回框底部的 y 坐标（英寸）。"""
    inner_w = CW - 0.5
    label_h = 0.25 if label else 0.0
    avail = max_h - 0.26 - label_h
    size = pick_size(paras, inner_w, avail)
    h = block_height(label, paras, max_h, min_h, tail=tail, tail_size=tail_size)
    rect(slide, M, top, CW, h, fill=fill)
    rect(slide, M, top, 0.055, h, fill=label_color)
    tf = txbox(slide, M + 0.28, top + 0.12, inner_w, h - 0.24)
    first = True
    if label:
        add_par(tf, label, 11.5, bold=True, color=label_color, first=True,
                before=0, after=4)
        first = False
    for txt in paras:
        add_par(tf, txt, size, first=first, before=2, after=4, color=BODY_TEXT)
        first = False
    if tail:
        add_par(tf, "原文：" + tail, tail_size, color=GRAY_LIGHT, italic=True,
                first=first, before=6, after=0)
    return top + h


def conclusion_box(slide, text, top):
    rect(slide, M, top, CW, 0.86, fill=GREEN)
    rect(slide, M, top, 0.055, 0.86, fill=GREEN_DARK)
    tf = txbox(slide, M + 0.28, top + 0.09, CW - 0.56, 0.70)
    add_par(tf, "结论", 11, bold=True, color=GREEN_DARK, first=True, before=0, after=2)
    size = pick_size([text], CW - 0.6, 0.46, sizes=(14, 13, 12, 11, 10))
    add_par(tf, text, size, bold=True, color=RGBColor(0x1B, 0x3D, 0x1B),
            before=0, after=0)
    return top + 0.86


# ------------------------------------------------------------------ 页面
def cover(prs):
    slide = slide_blank(prs)
    rect(slide, 0, 0, SW, SH, fill=INK)
    rect(slide, 0, 0, 0.22, SH, fill=GOLD)
    tf = txbox(slide, 1.0, 1.65, 11.3, 1.0)
    add_par(tf, "正二十面体群与正八面体群", 42, bold=True, color=WHITE,
            first=True, before=0, after=0)
    tf2 = txbox(slide, 1.02, 2.75, 11.3, 0.9)
    add_par(tf2, "题目精讲 · I ≅ A₅ 与 O ≅ S₄", 24,
            color=RGBColor(0xE8, 0xC9, 0x68), first=True, before=0, after=0)
    rect(slide, 1.02, 3.66, 4.2, 0.035, fill=WHITE)
    tf3 = txbox(slide, 1.03, 4.00, 11.3, 1.9)
    lines = [
        "31 道题目 · 每题两页：题面 + 完整解答",
        "群论 G 系列：Artin《Algebra》2e 第 6、7、9 章",
        "表示论 Rep 系列：Artin 第 10 章 · Lang《Algebra》第 XVIII 章",
        "内容取自本库笔记（Exercise Manager 检索筛选）",
    ]
    for i, line in enumerate(lines):
        add_par(tf3, line, 14, color=RGBColor(0xD6, 0xDF, 0xEF),
                first=(i == 0), before=3, after=3)
    tf4 = txbox(slide, 1.03, 6.30, 11.3, 0.5)
    add_par(tf4, f"生成日期 {datetime.date.today().isoformat()}",
            11.5, color=RGBColor(0xA9, 0xB6, 0xD0), first=True, before=0, after=0)


def guide(prs):
    slide = slide_blank(prs)
    header(slide, "内容导览", "共 5 节 · 31 题 · 76 页")
    tops = [1.30, 2.36, 3.42, 4.48, 5.54]
    for sec, top in zip(C.SECTIONS, tops):
        rect(slide, M, top, CW, 0.96, fill=BLUETINT)
        rect(slide, M, top, 0.055, 0.96, fill=INK)
        tf = txbox(slide, M + 0.30, top + 0.12, 3.05, 0.74)
        add_par(tf, f"§{sec['num']}  {sec['title']}", 14.5, bold=True, color=INK,
                first=True, before=0, after=2)
        add_par(tf, f"{len(sec['codes'])} 题", 10.5, color=GRAY, before=0, after=0)
        tf2 = txbox(slide, M + 3.55, top + 0.11, CW - 3.9, 0.78)
        add_par(tf2, sec["subtitle"], 12, color=BODY_TEXT, first=True, before=0, after=2)
        add_par(tf2, "、".join(sec["codes"]), 11, bold=True, color=ACCENT,
                before=0, after=0)
    footer(slide, "每题固定两页结构：题面（来源 Artin/Lang 页码 + 提示）→ 解答（关键步骤 + 结论）。")


def notation(prs):
    slide = slide_blank(prs)
    header(slide, "记号与约定", "阅读前请先看这一页")
    left = [
        "T：正四面体旋转群，|T| = 12，T ≅ A₄",
        "O：正八面体 / 立方体旋转群，|O| = 24，O ≅ S₄",
        "I：正二十面体 / 正十二面体旋转群，|I| = 60，I ≅ A₅",
        "全对称群（允许反射）：正四面体 ≅ S₄；立方体/正八面体 ≅ S₄ × C₂；正十二面体/正二十面体 ≅ A₅ × C₂",
    ]
    right = [
        "题号：G*** 在 01 - Group Theory/Exercises；Rep*** 在 06 - Representation Theory/Exercises。库内编号与来源题号（Artin Ex. x.y、Lang Ex. n）不同。",
        "来源：S1 = Artin, Algebra, 2nd ed.；S2 = Lang, Algebra, rev. 3rd ed.。页码同时给出印刷页与 PDF 页。",
        "难度标签沿用笔记 frontmatter：入门 / 中级 / 进阶（beginner / intermediate / advanced）。",
        "本课件只做汇总与改写；完整推导、外部输入标注、来源歧义说明见各原笔记链接。",
        "PPTX 不渲染 LaTeX，公式统一改写为 Unicode 纯文本；原笔记中的 LaTeX 版本为权威。",
    ]
    y = block(slide, "三个群（本课件的主角）", left, BODY_TOP, 2.05, 1.9, LIGHTGRAY)
    block(slide, "题号、来源与阅读约定", right, y + 0.22, 6.66 - (y + 0.22), 2.6, AMBER)
    footer(slide, "注意：I 与 O 在不同教材中可能指全对称群；本课件与笔记一致，用 I、O 表示保向旋转群。")


def groups_overview(prs):
    slide = slide_blank(prs)
    header(slide, C.GROUPS_TABLE["title"], "T / O / I 对照")
    spec = dict(header=C.GROUPS_TABLE["header"], rows=C.GROUPS_TABLE["rows"])
    table(slide, spec, M, 1.45, CW, row_h=0.62, font=13, hdr_font=13,
          widths=[2.30, 0.75, 1.25, 1.35, 2.35, 4.10])
    tf = txbox(slide, M, 4.30, CW, 2.4)
    add_par(tf, "三点结构性事实", 13.5, bold=True, color=INK, first=True, before=0, after=6)
    for t in [
        "① T ⊂ O ⊂ I 的几何嵌入：正四面体、立方体、正十二面体的内接关系对应 A₄ ⊂ S₄ 与 A₅ 的子群（G184、G199、G204）。",
        "② 类方程把共轭类大小写出来，正规子群就是含单位元的共轭类之并（G202、G203）。",
        "③ 表示论上：O ≅ S₄ 有 5 个不可约表示（1,1,2,3,3）；I ≅ A₅ 也有 5 个（1,3,3,4,5），后者对应正十二面体的顶点、面、棱（Rep58、Rep80、Rep82、Rep136）。",
    ]:
        add_par(tf, t, 12, color=BODY_TEXT, before=2, after=4)
    footer(slide, C.GROUPS_TABLE["note"])


def table_page(prs, spec, right=""):
    slide = slide_blank(prs)
    header(slide, spec["title"], right)
    tf = txbox(slide, M, 1.16, CW, 0.4)
    add_par(tf, spec["caption"], 11.5, color=GRAY, first=True, before=0, after=0)
    table(slide, spec, M, 1.72, CW, row_h=0.46, font=13, hdr_font=12.5,
          widths=[2.2, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1])
    tf2 = txbox(slide, M, 5.05, CW, 1.5)
    add_par(tf2, spec["note"], 12.5, color=INK, first=True, before=0, after=0)
    add_par(tf2, "用法：本页表格在后续解答页被反复引用（Rep80、Rep82、Rep83、Rep84、Rep85、Rep136）。",
            11.5, color=GRAY, before=6, after=0)
    footer(slide, "表格数值取自对应笔记的解答；维数平方和分别为 24 与 60。")


def problem_page(prs, p):
    slide = slide_blank(prs)
    header(slide, f"{p['code']} · {p['title']}", f"难度：{p['diff']}")
    tf = txbox(slide, M, 1.13, CW, 0.32)
    add_par(tf, "来源：" + p["source"], 10.5, color=GRAY, italic=True,
            first=True, before=0, after=0)
    max_problem = 3.50
    h1 = block_height("题面", p["zh"], max_problem, 1.15, tail=p.get("orig"))
    h2 = block_height("提示（先自己想一想）", p["hints"], 1.50, 0.80)
    needed = h1 + 0.22 + h2
    off = max(0.0, min(0.45, (6.66 - BODY_TOP - needed) * 0.32))
    y = block(slide, "题面", p["zh"], BODY_TOP + off, max_problem, 1.15, LIGHTGRAY,
              tail=p.get("orig"))
    y = block(slide, "提示（先自己想一想）", p["hints"], y + 0.22,
              min(1.50, 6.66 - (y + 0.22)), 0.80, AMBER)
    footer(slide, "原笔记：" + p["note"])


def solution_page(prs, p):
    slide = slide_blank(prs)
    header(slide, f"{p['code']} · 解答", f"难度：{p['diff']}")
    has_table = bool(p.get("extra"))
    max_steps = 2.62 if has_table else 4.30
    spec = None
    tbl_h = 0.0
    if has_table:
        spec = C.S4_TABLE if p["extra"] == "s4_table" else C.A5_TABLE
        tbl_h = 0.30 * (len(spec["rows"]) + 1) + 0.16
    h_steps = block_height("关键步骤", p["steps"], max_steps, 1.60)
    needed = h_steps + tbl_h + 0.18 + 0.86
    off = max(0.0, min(0.35, (6.70 - BODY_TOP - needed) * 0.32))
    y = block(slide, "关键步骤", p["steps"], BODY_TOP + off, max_steps, 1.60, BLUETINT)
    if has_table:
        y += 0.16
        table(slide, spec, M, y, CW, row_h=0.30, font=10.5, hdr_font=10.5,
              widths=[2.2, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1])
        y += 0.30 * (len(spec["rows"]) + 1)
    conclusion_box(slide, p["concl"], min(y + 0.18, 6.00))
    footer(slide, "原笔记：" + p["note"])


def cheat_sheet(prs, rows, title, right, row_h, font):
    slide = slide_blank(prs)
    header(slide, title, right)
    widths = [1.0, 3.5, 0.95, CW - 5.45]
    shape = slide.shapes.add_table(len(rows) + 1, 4, Inches(M), Inches(1.32),
                                   Inches(CW), Inches(row_h * (len(rows) + 1)))
    tbl = shape.table
    for i, wd in enumerate(widths):
        tbl.columns[i].width = Inches(wd)
    data = [["题号", "主题", "难度", "核心结论"]] + [list(r) for r in rows]
    for r, row in enumerate(data):
        tbl.rows[r].height = Inches(row_h)
        for c, val in enumerate(row):
            cell = tbl.cell(r, c)
            cell.margin_left = cell.margin_right = Inches(0.05)
            cell.margin_top = cell.margin_bottom = Inches(0.01)
            cell.vertical_anchor = MSO_ANCHOR.MIDDLE
            cell.fill.solid()
            cell.fill.fore_color.rgb = (INK if r == 0
                                        else (WHITE if r % 2 else RGBColor(0xF5, 0xF7, 0xFA)))
            tf = cell.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.alignment = PP_ALIGN.CENTER if c in (0, 2) else PP_ALIGN.LEFT
            run = p.add_run()
            run.text = str(val)
            set_run(run, font, bold=(r == 0 or c == 0),
                    color=WHITE if r == 0 else INK)
    return slide


def closing(prs):
    slide = slide_blank(prs)
    header(slide, "来源、方法与使用说明", "读完之后")
    items = [
        ("内容来源", "全部题面、提示、解答步骤取自本库笔记（Exercise G***/Rep***）；各笔记的 source 字段已记录 Artin《Algebra》2e 与 Lang《Algebra》rev. 3rd ed. 的印刷页与 PDF 页。"),
        ("抽题方式", "用本库自研 Obsidian 插件 Exercise Manager 的命令行接口做关键词检索（lm search \"icosahedral group\"、\"octahedral group\"、\"dodecahedron\" 等），再人工归类。"),
        ("本课件的边界", "只做汇总、改写与排版：完整推导、外部结论标注（如 SL₂(ℂ) 有限子群分类）、来源歧义说明（如 G200 的 proper 用词）都在原笔记中。"),
        ("公式表示", "PPTX 不渲染 LaTeX，所有公式改写为 Unicode 纯文本（如 A₅、C₂ × C₂、1⊕τ⊕σε）；引用时请以原笔记的 LaTeX 为准。"),
        ("本次未做", "按用户要求，没有重新回查 Artin/Lang 的 PDF 原页；页码锚点沿用笔记中已记录的核对结果。"),
    ]
    top = BODY_TOP
    for i, (k, v) in enumerate(items):
        h = 0.98
        rect(slide, M, top, CW, h, fill=LIGHTGRAY if i % 2 == 0 else BLUETINT)
        tf = txbox(slide, M + 0.25, top + 0.10, 2.1, h - 0.2)
        add_par(tf, k, 13, bold=True, color=INK, first=True, before=0, after=0)
        tf2 = txbox(slide, M + 2.45, top + 0.09, CW - 2.7, h - 0.18)
        add_par(tf2, v, 11.5, color=BODY_TEXT, first=True, before=0, after=0)
        top += h + 0.10
    footer(slide, "完整题目列表见各主题目录：01 - Group Theory/Exercises 与 06 - Representation Theory/Exercises。")


def stamp_pages(prs):
    total = len(prs.slides._sldIdLst)
    for i, slide in enumerate(prs.slides, start=1):
        if i == 1:
            continue
        tf = txbox(slide, SW - M - 1.2, SH - 0.40, 1.2, 0.28)
        add_par(tf, f"{i} / {total}", 9, color=GRAY_LIGHT, first=True,
                before=0, after=0, align=PP_ALIGN.RIGHT)


def main():
    out = sys.argv[1] if len(sys.argv) > 1 else "deck.pptx"
    prs = Presentation()
    prs.slide_width = Inches(SW)
    prs.slide_height = Inches(SH)

    cover(prs)
    guide(prs)
    notation(prs)
    groups_overview(prs)
    table_page(prs, C.S4_TABLE, "参考页 1 / 2")
    table_page(prs, C.A5_TABLE, "参考页 2 / 2")

    by_sec = {}
    for p in C.PROBLEMS:
        by_sec.setdefault(p["sec"], []).append(p)

    for idx, sec in enumerate(C.SECTIONS, start=1):
        section_divider(prs, sec)
        for p in by_sec.get(idx, []):
            problem_page(prs, p)
            solution_page(prs, p)

    cheat_sheet(prs, C.CHEAT_1, "速查表 1 / 2：群论部分（20 题）", "G 系列", 0.255, 10)
    cheat_sheet(prs, C.CHEAT_2, "速查表 2 / 2：表示论部分（11 题）", "Rep 系列", 0.40, 11.5)
    closing(prs)
    stamp_pages(prs)

    prs.save(out)
    print(f"saved {out}: {len(prs.slides._sldIdLst)} slides")


if __name__ == "__main__":
    main()
