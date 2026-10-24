---
title: Diamond-Shurman Modular Forms Exercise Archive
aliases:
  - Diamond-Shurman Exercise Archive
  - A First Course in Modular Forms Exercise Archive
  - Diamond-Shurman Modular Forms Archive Status
tags:
  - index
  - exercise-archive
  - diamond-shurman-modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016"
created: 2026-10-23
---

# Diamond-Shurman Modular Forms Exercise Archive

This dashboard records the archival coverage of the numbered exercises in Fred Diamond and Jerry Shurman’s *A First Course in Modular Forms*, GTM 228, Springer, 2005, corrected at the fourth printing in 2016.

> [!info] Archive status and learning status
> An exercise is **archived** when an exercise note is identified with its original numbered source exercise. This differs from the note’s learning `status`; adding an archive entry does not mark an exercise started or completed.

> [!note] Source audit
> **354 numbered exercises, 9 chapters, 70 sections: 69 exercise groups and one section with no numbered exercises (§2.5).** Chapter totals are **36, 23, 51, 57, 55, 28, 46, 35, 23**. The original exercise pages were rendered at 200 dpi and inspected on 2026-10-23 to verify the ordered labels and printed/PDF anchors below. This verifies source coverage, not complete transcriptions, formulas, appendix hints or solutions.
>
> This page establishes navigation and the source ledger. Existing notes without numbered provenance appear separately under source matching and do not increase numbered-exercise coverage.

> [!note] Faithful restoration of the legacy notes — 2026-10-23
> The three formerly composite MF2, MF5 and MF9 notes now each preserve one complete numbered exercise. Three companion notes separate the other original exercises, giving six distinct numbered source mappings. All original subparts are retained. The earlier independent practice questions have been removed, and all six notes are written in English. Live coverage below derives from source provenance, and learning status remains unchanged.

> [!note] Chapter 1 complete — 36/36 — 2026-10-24
> All 36 ordered source labels were rechecked on the original exercise pages at 200 dpi and reconciled one-to-one with 36 complete exercise notes: §1.1, 1.1.1–1.1.9 (9/9); §1.2, 1.2.1–1.2.11 (11/11); §1.3, 1.3.1–1.3.3 (3/3); §1.4, 1.4.1–1.4.5 (5/5); §1.5, 1.5.1–1.5.8 (8/8). The printed/PDF page ranges are respectively 7–10/22–25, 21–24/36–39, 31/46, 36–37/51–52, and 42–44/57–59. The section label arrays below retain the exact expected set, including every original subpart within its numbered exercise.
>
> Final reconciliation: **missing 0; duplicate mappings 0; unexpected labels 0; unparsed Chapter 1 locators 0**. The note ranges are MF14–MF34 (21), LA582–LA587 (6), AG65–AG69 (5), G347–G349 (3), and R425 (1), routed by the principal proof toolkit. All learning states remain `not-started`. Whole-book numbered coverage is now **42/354**, with 312 labels still unarchived and no duplicate, unexpected or unparsed source mappings.
>
> Each note contains its complete English problem, progressive hints and a complete independent solution with named imported inputs. Source/proof boundaries and printed defects are visible: the derivative in 1.1.9; the growth exponent and limit needed in 1.2.6; the lemma/hint references in 1.2.11; the exact-order boundary in 1.5.4 at N=1; and the auxiliary double-d generator sum referenced by 1.5.8. The weight-two endpoint, literal equality in 1.5.7, meromorphic domains and the two discriminant normalizations are explicitly distinguished. Figure 1.1, printed p. 11 / PDF p. 26, is retained as a direct crop; the original Weil-pairing square is faithfully transcribed.

## Quick Navigation

- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|1. Modular Forms, Elliptic Curves, and Modular Curves]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 2|2. Modular Curves as Riemann Surfaces]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 3|3. Dimension Formulas]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 4|4. Eisenstein Series]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 5|5. Hecke Operators]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 6|6. Jacobians and Abelian Varieties]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 7|7. Modular Curves as Algebraic Curves]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 8|8. The Eichler–Shimura Relation and L-functions]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 9|9. Galois Representations]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Appendix A|Appendix A — Hints and Answers]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Source and Counting Boundaries|Source and Counting Boundaries]]

## Chapter Coverage

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapters = [
{
  chapter: 1, title: "Modular Forms, Elliptic Curves, and Modular Curves",
  printed: [7, 44], pdf: [22, 59],
  sections: [
    {"key": "1.1", "title": "First definitions and examples", "labels": ["1.1.1", "1.1.2", "1.1.3", "1.1.4", "1.1.5", "1.1.6", "1.1.7", "1.1.8", "1.1.9"], "printed": [7, 10], "pdf": [22, 25]},
    {"key": "1.2", "title": "Congruence subgroups", "labels": ["1.2.1", "1.2.2", "1.2.3", "1.2.4", "1.2.5", "1.2.6", "1.2.7", "1.2.8", "1.2.9", "1.2.10", "1.2.11"], "printed": [21, 24], "pdf": [36, 39]},
    {"key": "1.3", "title": "Complex tori", "labels": ["1.3.1", "1.3.2", "1.3.3"], "printed": [31, 31], "pdf": [46, 46]},
    {"key": "1.4", "title": "Complex tori as elliptic curves", "labels": ["1.4.1", "1.4.2", "1.4.3", "1.4.4", "1.4.5"], "printed": [36, 37], "pdf": [51, 52]},
    {"key": "1.5", "title": "Modular curves and moduli spaces", "labels": ["1.5.1", "1.5.2", "1.5.3", "1.5.4", "1.5.5", "1.5.6", "1.5.7", "1.5.8"], "printed": [42, 44], "pdf": [57, 59]},
  ],
},
{
  chapter: 2, title: "Modular Curves as Riemann Surfaces",
  printed: [47, 63], pdf: [62, 78],
  sections: [
    {"key": "2.1", "title": "Topology", "labels": ["2.1.1", "2.1.2", "2.1.3"], "printed": [47, 47], "pdf": [62, 62]},
    {"key": "2.2", "title": "Charts", "labels": ["2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5"], "printed": [52, 52], "pdf": [67, 67]},
    {"key": "2.3", "title": "Elliptic points", "labels": ["2.3.1", "2.3.2", "2.3.3", "2.3.4", "2.3.5", "2.3.6", "2.3.7", "2.3.8"], "printed": [56, 57], "pdf": [71, 72]},
    {"key": "2.4", "title": "Cusps", "labels": ["2.4.1", "2.4.2", "2.4.3", "2.4.4", "2.4.5", "2.4.6", "2.4.7"], "printed": [62, 63], "pdf": [77, 78]},
    {"key": "2.5", "title": "Modular curves and Modularity", "labels": [], "printed": [63, 63], "pdf": [78, 78]},
  ],
},
{
  chapter: 3, title: "Dimension Formulas",
  printed: [69, 108], pdf: [83, 122],
  sections: [
    {"key": "3.1", "title": "The genus", "labels": ["3.1.1", "3.1.2", "3.1.3", "3.1.4", "3.1.5", "3.1.6"], "printed": [69, 71], "pdf": [83, 85]},
    {"key": "3.2", "title": "Automorphic forms", "labels": ["3.2.1", "3.2.2", "3.2.3", "3.2.4", "3.2.5", "3.2.6"], "printed": [76, 77], "pdf": [90, 91]},
    {"key": "3.3", "title": "Meromorphic differentials", "labels": ["3.3.1", "3.3.2", "3.3.3", "3.3.4", "3.3.5", "3.3.6"], "printed": [82, 83], "pdf": [96, 97]},
    {"key": "3.4", "title": "Divisors and the Riemann–Roch Theorem", "labels": ["3.4.1", "3.4.2", "3.4.3"], "printed": [85, 85], "pdf": [99, 99]},
    {"key": "3.5", "title": "Dimension formulas for even $k$", "labels": ["3.5.1", "3.5.2", "3.5.3", "3.5.4", "3.5.5"], "printed": [88, 89], "pdf": [102, 103]},
    {"key": "3.6", "title": "Dimension formulas for odd $k$", "labels": ["3.6.1", "3.6.2", "3.6.3", "3.6.4", "3.6.5"], "printed": [92, 92], "pdf": [106, 106]},
    {"key": "3.7", "title": "More on elliptic points", "labels": ["3.7.1", "3.7.2", "3.7.3", "3.7.4", "3.7.5", "3.7.6", "3.7.7"], "printed": [97, 98], "pdf": [111, 112]},
    {"key": "3.8", "title": "More on cusps", "labels": ["3.8.1", "3.8.2", "3.8.3", "3.8.4", "3.8.5", "3.8.6", "3.8.7", "3.8.8"], "printed": [106, 106], "pdf": [120, 120]},
    {"key": "3.9", "title": "More dimension formulas", "labels": ["3.9.1", "3.9.2", "3.9.3", "3.9.4", "3.9.5"], "printed": [108, 108], "pdf": [122, 122]},
  ],
},
{
  chapter: 4, title: "Eisenstein Series",
  printed: [111, 162], pdf: [125, 176],
  sections: [
    {"key": "4.1", "title": "Eisenstein series for $SL_2(\\mathbb Z)$", "labels": ["4.1.1", "4.1.2"], "printed": [111, 111], "pdf": [125, 125]},
    {"key": "4.2", "title": "Eisenstein series for $\\Gamma(N)$ when $k\\geq3$", "labels": ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6"], "printed": [115, 116], "pdf": [129, 130]},
    {"key": "4.3", "title": "Dirichlet characters, Gauss sums, and eigenspaces", "labels": ["4.3.1", "4.3.2", "4.3.3", "4.3.4"], "printed": [119, 120], "pdf": [133, 134]},
    {"key": "4.4", "title": "Gamma, zeta, and $L$-functions", "labels": ["4.4.1", "4.4.2", "4.4.3", "4.4.4", "4.4.5", "4.4.6"], "printed": [123, 126], "pdf": [137, 140]},
    {"key": "4.5", "title": "Eisenstein series for the eigenspaces when $k\\geq3$", "labels": ["4.5.1", "4.5.2", "4.5.3"], "printed": [130, 130], "pdf": [144, 144]},
    {"key": "4.6", "title": "Eisenstein series of weight 2", "labels": ["4.6.1", "4.6.2", "4.6.3", "4.6.4"], "printed": [133, 133], "pdf": [147, 147]},
    {"key": "4.7", "title": "Bernoulli numbers and the Hurwitz zeta function", "labels": ["4.7.1", "4.7.2", "4.7.3", "4.7.4", "4.7.5"], "printed": [137, 138], "pdf": [151, 152]},
    {"key": "4.8", "title": "Eisenstein series of weight 1", "labels": ["4.8.1", "4.8.2", "4.8.3", "4.8.4", "4.8.5", "4.8.6", "4.8.7"], "printed": [142, 143], "pdf": [156, 157]},
    {"key": "4.9", "title": "The Fourier transform and the Mellin transform", "labels": ["4.9.1", "4.9.2", "4.9.3", "4.9.4", "4.9.5", "4.9.6"], "printed": [146, 147], "pdf": [160, 161]},
    {"key": "4.10", "title": "Nonholomorphic Eisenstein series", "labels": ["4.10.1", "4.10.2", "4.10.3", "4.10.4", "4.10.5", "4.10.6", "4.10.7", "4.10.8"], "printed": [153, 155], "pdf": [167, 169]},
    {"key": "4.11", "title": "Modular forms via theta functions", "labels": ["4.11.1", "4.11.2", "4.11.3", "4.11.4", "4.11.5", "4.11.6"], "printed": [161, 162], "pdf": [175, 176]},
  ],
},
{
  chapter: 5, title: "Hecke Operators",
  printed: [167, 214], pdf: [181, 228],
  sections: [
    {"key": "5.1", "title": "The double coset operator", "labels": ["5.1.1", "5.1.2", "5.1.3", "5.1.4", "5.1.5", "5.1.6"], "printed": [167, 168], "pdf": [181, 182]},
    {"key": "5.2", "title": "The $\\langle d\\rangle$ and $T_p$ operators", "labels": ["5.2.1", "5.2.2", "5.2.3", "5.2.4", "5.2.5", "5.2.6", "5.2.7", "5.2.8", "5.2.9", "5.2.10"], "printed": [176, 179], "pdf": [190, 193]},
    {"key": "5.3", "title": "The $\\langle n\\rangle$ and $T_n$ operators", "labels": ["5.3.1", "5.3.2", "5.3.3", "5.3.4"], "printed": [181, 181], "pdf": [195, 195]},
    {"key": "5.4", "title": "The Petersson inner product", "labels": ["5.4.1", "5.4.2", "5.4.3", "5.4.4"], "printed": [184, 184], "pdf": [198, 198]},
    {"key": "5.5", "title": "Adjoints of the Hecke Operators", "labels": ["5.5.1"], "printed": [188, 188], "pdf": [202, 202]},
    {"key": "5.6", "title": "Oldforms and Newforms", "labels": ["5.6.1", "5.6.2", "5.6.3"], "printed": [190, 190], "pdf": [204, 204]},
    {"key": "5.7", "title": "The Main Lemma", "labels": ["5.7.1", "5.7.2", "5.7.3", "5.7.4", "5.7.5", "5.7.6", "5.7.7", "5.7.8"], "printed": [195, 196], "pdf": [209, 210]},
    {"key": "5.8", "title": "Eigenforms", "labels": ["5.8.1", "5.8.2", "5.8.3", "5.8.4", "5.8.5", "5.8.6", "5.8.7"], "printed": [200, 200], "pdf": [214, 214]},
    {"key": "5.9", "title": "The connection with $L$-functions", "labels": ["5.9.1", "5.9.2", "5.9.3", "5.9.4", "5.9.5", "5.9.6", "5.9.7"], "printed": [207, 208], "pdf": [221, 222]},
    {"key": "5.10", "title": "Functional equations", "labels": ["5.10.1", "5.10.2"], "printed": [210, 210], "pdf": [224, 224]},
    {"key": "5.11", "title": "Eisenstein series again", "labels": ["5.11.1", "5.11.2", "5.11.3"], "printed": [213, 214], "pdf": [227, 228]},
  ],
},
{
  chapter: 6, title: "Jacobians and Abelian Varieties",
  printed: [220, 251], pdf: [234, 265],
  sections: [
    {"key": "6.1", "title": "Integration, homology, the Jacobian, and Modularity", "labels": ["6.1.1", "6.1.2", "6.1.3", "6.1.4"], "printed": [220, 221], "pdf": [234, 235]},
    {"key": "6.2", "title": "Maps between Jacobians", "labels": ["6.2.1", "6.2.2", "6.2.3", "6.2.4", "6.2.5", "6.2.6", "6.2.7", "6.2.8"], "printed": [228, 230], "pdf": [242, 244]},
    {"key": "6.3", "title": "Modular Jacobians and Hecke operators", "labels": ["6.3.1"], "printed": [234, 234], "pdf": [248, 248]},
    {"key": "6.4", "title": "Algebraic numbers and algebraic integers", "labels": ["6.4.1", "6.4.2", "6.4.3", "6.4.4", "6.4.5"], "printed": [236, 237], "pdf": [250, 251]},
    {"key": "6.5", "title": "Algebraic eigenvalues", "labels": ["6.5.1", "6.5.2", "6.5.3", "6.5.4", "6.5.5"], "printed": [243, 244], "pdf": [257, 258]},
    {"key": "6.6", "title": "Eigenforms, Abelian varieties, and Modularity", "labels": ["6.6.1", "6.6.2", "6.6.3", "6.6.4", "6.6.5"], "printed": [251, 251], "pdf": [265, 265]},
  ],
},
{
  chapter: 7, title: "Modular Curves as Algebraic Curves",
  printed: [259, 312], pdf: [272, 325],
  sections: [
    {"key": "7.1", "title": "Elliptic curves as algebraic curves", "labels": ["7.1.1", "7.1.2", "7.1.3", "7.1.4", "7.1.5"], "printed": [259, 261], "pdf": [272, 274]},
    {"key": "7.2", "title": "Algebraic curves and their function fields", "labels": ["7.2.1", "7.2.2", "7.2.3", "7.2.4", "7.2.5", "7.2.6", "7.2.7", "7.2.8", "7.2.9", "7.2.10", "7.2.11", "7.2.12"], "printed": [270, 272], "pdf": [283, 285]},
    {"key": "7.3", "title": "Divisors on curves", "labels": ["7.3.1", "7.3.2", "7.3.3", "7.3.4", "7.3.5"], "printed": [278, 279], "pdf": [291, 292]},
    {"key": "7.4", "title": "The Weil pairing algebraically", "labels": ["7.4.1", "7.4.2", "7.4.3"], "printed": [282, 282], "pdf": [295, 295]},
    {"key": "7.5", "title": "Function fields over $\\mathbb C$", "labels": ["7.5.1", "7.5.2", "7.5.3", "7.5.4", "7.5.5", "7.5.6", "7.5.7"], "printed": [289, 290], "pdf": [302, 303]},
    {"key": "7.6", "title": "Function fields over $\\mathbb Q$", "labels": ["7.6.1", "7.6.2"], "printed": [294, 294], "pdf": [307, 307]},
    {"key": "7.7", "title": "Modular curves as algebraic curves and Modularity", "labels": ["7.7.1", "7.7.2", "7.7.3"], "printed": [298, 299], "pdf": [311, 312]},
    {"key": "7.8", "title": "Isogenies algebraically", "labels": ["7.8.1", "7.8.2", "7.8.3", "7.8.4", "7.8.5"], "printed": [302, 304], "pdf": [315, 317]},
    {"key": "7.9", "title": "Hecke operators algebraically", "labels": ["7.9.1", "7.9.2", "7.9.3", "7.9.4"], "printed": [310, 312], "pdf": [323, 325]},
  ],
},
{
  chapter: 8, title: "The Eichler–Shimura Relation and L-functions",
  printed: [318, 369], pdf: [331, 382],
  sections: [
    {"key": "8.1", "title": "Elliptic curves in arbitrary characteristic", "labels": ["8.1.1", "8.1.2", "8.1.3", "8.1.4", "8.1.5", "8.1.6"], "printed": [318, 320], "pdf": [331, 333]},
    {"key": "8.2", "title": "Algebraic curves in arbitrary characteristic", "labels": ["8.2.1", "8.2.2", "8.2.3"], "printed": [326, 326], "pdf": [339, 339]},
    {"key": "8.3", "title": "Elliptic curves over $\\mathbb Q$ and their reductions", "labels": ["8.3.1", "8.3.2", "8.3.3", "8.3.4", "8.3.5", "8.3.6", "8.3.7"], "printed": [331, 333], "pdf": [344, 346]},
    {"key": "8.4", "title": "Elliptic curves over $\\overline{\\mathbb Q}$ and their reductions", "labels": ["8.4.1", "8.4.2", "8.4.3", "8.4.4", "8.4.5"], "printed": [340, 340], "pdf": [353, 353]},
    {"key": "8.5", "title": "Reduction of algebraic curves and maps", "labels": ["8.5.1", "8.5.2", "8.5.3", "8.5.4", "8.5.5", "8.5.6", "8.5.7", "8.5.8", "8.5.9"], "printed": [350, 351], "pdf": [363, 364]},
    {"key": "8.6", "title": "Modular curves in characteristic $p$: Igusa’s Theorem", "labels": ["8.6.1"], "printed": [353, 353], "pdf": [366, 366]},
    {"key": "8.7", "title": "The Eichler–Shimura Relation", "labels": ["8.7.1", "8.7.2"], "printed": [359, 360], "pdf": [372, 373]},
    {"key": "8.8", "title": "Fourier coefficients, $L$-functions, and Modularity", "labels": ["8.8.1", "8.8.2"], "printed": [368, 369], "pdf": [381, 382]},
  ],
},
{
  chapter: 9, title: "Galois Representations",
  printed: [378, 411], pdf: [390, 423],
  sections: [
    {"key": "9.1", "title": "Galois number fields", "labels": ["9.1.1", "9.1.2", "9.1.3"], "printed": [378, 379], "pdf": [390, 391]},
    {"key": "9.2", "title": "The $\\ell$-adic integers and the $\\ell$-adic numbers", "labels": ["9.2.1", "9.2.2", "9.2.3"], "printed": [383, 383], "pdf": [395, 395]},
    {"key": "9.3", "title": "Galois representations", "labels": ["9.3.1", "9.3.2", "9.3.3", "9.3.4", "9.3.5", "9.3.6", "9.3.7"], "printed": [389, 390], "pdf": [401, 402]},
    {"key": "9.4", "title": "Galois representations and elliptic curves", "labels": ["9.4.1", "9.4.2", "9.4.3", "9.4.4"], "printed": [393, 394], "pdf": [405, 406]},
    {"key": "9.5", "title": "Galois representations and modular forms", "labels": ["9.5.1", "9.5.2"], "printed": [402, 402], "pdf": [414, 414]},
    {"key": "9.6", "title": "Galois representations and Modularity", "labels": ["9.6.1", "9.6.2", "9.6.3", "9.6.4"], "printed": [409, 411], "pdf": [421, 423]},
  ],
}
];

const allLabels = chapters.flatMap(chapter => chapter.sections.flatMap(section => section.labels));
const total = summarize(allLabels);
dv.paragraph("**Numbered-exercise coverage: " + total.covered.length + "/" + allLabels.length + "** in " + total.paths.size + " source-mapped note files. **Book archive status: " + total.status + ".** Source-label audit: complete.");
dv.table(["Chapter", "Original title", "Note files", "Source coverage", "Exercise pages", "Archive status"], chapters.map(chapter => {
  const expected = chapter.sections.flatMap(section => section.labels);
  const current = summarize(expected, chapter.chapter);
  return ["[[#Chapter " + chapter.chapter + "|" + chapter.chapter + "]]", chapter.title, current.paths.size,
    current.covered.length + "/" + expected.length, anchors(chapter), current.status];
}));
dv.header(3, "Source mapping checks");
dv.table(["Check", "Count", "Meaning"], [
  ["Missing source labels", total.missing.length, "Expected until the corresponding numbered exercise is archived"],
  ["Duplicate mappings", total.duplicates.length, "One source number mapped to more than one note"],
  ["Unexpected source labels", total.unexpected.length, "Parsed labels outside the audited source set"],
  ["Notes requiring source matching", unresolved.length, "Generic, malformed or multiple numbered provenance; resolve before final reconciliation"],
]);
if (total.duplicates.length) dv.table(["Duplicate source label", "Notes"], total.duplicates.map(([label, notes]) => [label, [...notes.values()].map(page => page.file.link)]));
if (total.unexpected.length) dv.table(["Unexpected source label", "Notes"], total.unexpected.sort(labelOrder).map(label => [label, [...noteByLabel.get(label).values()].map(page => page.file.link)]));
if (unresolved.length) {
  dv.header(3, "Existing notes awaiting source matching");
  dv.table(["Note", "Source matching required", "Current source"], unresolved.map(record => [record.page.file.link, record.issues.join("; "), record.page.source ?? ""]));
}
```

The tables below preserve each section’s exact ordered source-label set and both page anchors. Coverage and linked exercise lists are calculated live from exercise tags and provenance. Chapter and section status checks the corresponding source scope; notes with no identifiable chapter remain in the whole-book source-matching table.

## Chapter 1

**Modular Forms, Elliptic Curves, and Modular Curves** — 36 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 1, title: "Modular Forms, Elliptic Curves, and Modular Curves",
  printed: [7, 44], pdf: [22, 59],
  sections: [
    {"key": "1.1", "title": "First definitions and examples", "labels": ["1.1.1", "1.1.2", "1.1.3", "1.1.4", "1.1.5", "1.1.6", "1.1.7", "1.1.8", "1.1.9"], "printed": [7, 10], "pdf": [22, 25]},
    {"key": "1.2", "title": "Congruence subgroups", "labels": ["1.2.1", "1.2.2", "1.2.3", "1.2.4", "1.2.5", "1.2.6", "1.2.7", "1.2.8", "1.2.9", "1.2.10", "1.2.11"], "printed": [21, 24], "pdf": [36, 39]},
    {"key": "1.3", "title": "Complex tori", "labels": ["1.3.1", "1.3.2", "1.3.3"], "printed": [31, 31], "pdf": [46, 46]},
    {"key": "1.4", "title": "Complex tori as elliptic curves", "labels": ["1.4.1", "1.4.2", "1.4.3", "1.4.4", "1.4.5"], "printed": [36, 37], "pdf": [51, 52]},
    {"key": "1.5", "title": "Modular curves and moduli spaces", "labels": ["1.5.1", "1.5.2", "1.5.3", "1.5.4", "1.5.5", "1.5.6", "1.5.7", "1.5.8"], "printed": [42, 44], "pdf": [57, 59]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 2

**Modular Curves as Riemann Surfaces** — 23 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 2, title: "Modular Curves as Riemann Surfaces",
  printed: [47, 63], pdf: [62, 78],
  sections: [
    {"key": "2.1", "title": "Topology", "labels": ["2.1.1", "2.1.2", "2.1.3"], "printed": [47, 47], "pdf": [62, 62]},
    {"key": "2.2", "title": "Charts", "labels": ["2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5"], "printed": [52, 52], "pdf": [67, 67]},
    {"key": "2.3", "title": "Elliptic points", "labels": ["2.3.1", "2.3.2", "2.3.3", "2.3.4", "2.3.5", "2.3.6", "2.3.7", "2.3.8"], "printed": [56, 57], "pdf": [71, 72]},
    {"key": "2.4", "title": "Cusps", "labels": ["2.4.1", "2.4.2", "2.4.3", "2.4.4", "2.4.5", "2.4.6", "2.4.7"], "printed": [62, 63], "pdf": [77, 78]},
    {"key": "2.5", "title": "Modular curves and Modularity", "labels": [], "printed": [63, 63], "pdf": [78, 78]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 3

**Dimension Formulas** — 51 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 3, title: "Dimension Formulas",
  printed: [69, 108], pdf: [83, 122],
  sections: [
    {"key": "3.1", "title": "The genus", "labels": ["3.1.1", "3.1.2", "3.1.3", "3.1.4", "3.1.5", "3.1.6"], "printed": [69, 71], "pdf": [83, 85]},
    {"key": "3.2", "title": "Automorphic forms", "labels": ["3.2.1", "3.2.2", "3.2.3", "3.2.4", "3.2.5", "3.2.6"], "printed": [76, 77], "pdf": [90, 91]},
    {"key": "3.3", "title": "Meromorphic differentials", "labels": ["3.3.1", "3.3.2", "3.3.3", "3.3.4", "3.3.5", "3.3.6"], "printed": [82, 83], "pdf": [96, 97]},
    {"key": "3.4", "title": "Divisors and the Riemann–Roch Theorem", "labels": ["3.4.1", "3.4.2", "3.4.3"], "printed": [85, 85], "pdf": [99, 99]},
    {"key": "3.5", "title": "Dimension formulas for even $k$", "labels": ["3.5.1", "3.5.2", "3.5.3", "3.5.4", "3.5.5"], "printed": [88, 89], "pdf": [102, 103]},
    {"key": "3.6", "title": "Dimension formulas for odd $k$", "labels": ["3.6.1", "3.6.2", "3.6.3", "3.6.4", "3.6.5"], "printed": [92, 92], "pdf": [106, 106]},
    {"key": "3.7", "title": "More on elliptic points", "labels": ["3.7.1", "3.7.2", "3.7.3", "3.7.4", "3.7.5", "3.7.6", "3.7.7"], "printed": [97, 98], "pdf": [111, 112]},
    {"key": "3.8", "title": "More on cusps", "labels": ["3.8.1", "3.8.2", "3.8.3", "3.8.4", "3.8.5", "3.8.6", "3.8.7", "3.8.8"], "printed": [106, 106], "pdf": [120, 120]},
    {"key": "3.9", "title": "More dimension formulas", "labels": ["3.9.1", "3.9.2", "3.9.3", "3.9.4", "3.9.5"], "printed": [108, 108], "pdf": [122, 122]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 4

**Eisenstein Series** — 57 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 4, title: "Eisenstein Series",
  printed: [111, 162], pdf: [125, 176],
  sections: [
    {"key": "4.1", "title": "Eisenstein series for $SL_2(\\mathbb Z)$", "labels": ["4.1.1", "4.1.2"], "printed": [111, 111], "pdf": [125, 125]},
    {"key": "4.2", "title": "Eisenstein series for $\\Gamma(N)$ when $k\\geq3$", "labels": ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6"], "printed": [115, 116], "pdf": [129, 130]},
    {"key": "4.3", "title": "Dirichlet characters, Gauss sums, and eigenspaces", "labels": ["4.3.1", "4.3.2", "4.3.3", "4.3.4"], "printed": [119, 120], "pdf": [133, 134]},
    {"key": "4.4", "title": "Gamma, zeta, and $L$-functions", "labels": ["4.4.1", "4.4.2", "4.4.3", "4.4.4", "4.4.5", "4.4.6"], "printed": [123, 126], "pdf": [137, 140]},
    {"key": "4.5", "title": "Eisenstein series for the eigenspaces when $k\\geq3$", "labels": ["4.5.1", "4.5.2", "4.5.3"], "printed": [130, 130], "pdf": [144, 144]},
    {"key": "4.6", "title": "Eisenstein series of weight 2", "labels": ["4.6.1", "4.6.2", "4.6.3", "4.6.4"], "printed": [133, 133], "pdf": [147, 147]},
    {"key": "4.7", "title": "Bernoulli numbers and the Hurwitz zeta function", "labels": ["4.7.1", "4.7.2", "4.7.3", "4.7.4", "4.7.5"], "printed": [137, 138], "pdf": [151, 152]},
    {"key": "4.8", "title": "Eisenstein series of weight 1", "labels": ["4.8.1", "4.8.2", "4.8.3", "4.8.4", "4.8.5", "4.8.6", "4.8.7"], "printed": [142, 143], "pdf": [156, 157]},
    {"key": "4.9", "title": "The Fourier transform and the Mellin transform", "labels": ["4.9.1", "4.9.2", "4.9.3", "4.9.4", "4.9.5", "4.9.6"], "printed": [146, 147], "pdf": [160, 161]},
    {"key": "4.10", "title": "Nonholomorphic Eisenstein series", "labels": ["4.10.1", "4.10.2", "4.10.3", "4.10.4", "4.10.5", "4.10.6", "4.10.7", "4.10.8"], "printed": [153, 155], "pdf": [167, 169]},
    {"key": "4.11", "title": "Modular forms via theta functions", "labels": ["4.11.1", "4.11.2", "4.11.3", "4.11.4", "4.11.5", "4.11.6"], "printed": [161, 162], "pdf": [175, 176]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 5

**Hecke Operators** — 55 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 5, title: "Hecke Operators",
  printed: [167, 214], pdf: [181, 228],
  sections: [
    {"key": "5.1", "title": "The double coset operator", "labels": ["5.1.1", "5.1.2", "5.1.3", "5.1.4", "5.1.5", "5.1.6"], "printed": [167, 168], "pdf": [181, 182]},
    {"key": "5.2", "title": "The $\\langle d\\rangle$ and $T_p$ operators", "labels": ["5.2.1", "5.2.2", "5.2.3", "5.2.4", "5.2.5", "5.2.6", "5.2.7", "5.2.8", "5.2.9", "5.2.10"], "printed": [176, 179], "pdf": [190, 193]},
    {"key": "5.3", "title": "The $\\langle n\\rangle$ and $T_n$ operators", "labels": ["5.3.1", "5.3.2", "5.3.3", "5.3.4"], "printed": [181, 181], "pdf": [195, 195]},
    {"key": "5.4", "title": "The Petersson inner product", "labels": ["5.4.1", "5.4.2", "5.4.3", "5.4.4"], "printed": [184, 184], "pdf": [198, 198]},
    {"key": "5.5", "title": "Adjoints of the Hecke Operators", "labels": ["5.5.1"], "printed": [188, 188], "pdf": [202, 202]},
    {"key": "5.6", "title": "Oldforms and Newforms", "labels": ["5.6.1", "5.6.2", "5.6.3"], "printed": [190, 190], "pdf": [204, 204]},
    {"key": "5.7", "title": "The Main Lemma", "labels": ["5.7.1", "5.7.2", "5.7.3", "5.7.4", "5.7.5", "5.7.6", "5.7.7", "5.7.8"], "printed": [195, 196], "pdf": [209, 210]},
    {"key": "5.8", "title": "Eigenforms", "labels": ["5.8.1", "5.8.2", "5.8.3", "5.8.4", "5.8.5", "5.8.6", "5.8.7"], "printed": [200, 200], "pdf": [214, 214]},
    {"key": "5.9", "title": "The connection with $L$-functions", "labels": ["5.9.1", "5.9.2", "5.9.3", "5.9.4", "5.9.5", "5.9.6", "5.9.7"], "printed": [207, 208], "pdf": [221, 222]},
    {"key": "5.10", "title": "Functional equations", "labels": ["5.10.1", "5.10.2"], "printed": [210, 210], "pdf": [224, 224]},
    {"key": "5.11", "title": "Eisenstein series again", "labels": ["5.11.1", "5.11.2", "5.11.3"], "printed": [213, 214], "pdf": [227, 228]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 6

**Jacobians and Abelian Varieties** — 28 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 6, title: "Jacobians and Abelian Varieties",
  printed: [220, 251], pdf: [234, 265],
  sections: [
    {"key": "6.1", "title": "Integration, homology, the Jacobian, and Modularity", "labels": ["6.1.1", "6.1.2", "6.1.3", "6.1.4"], "printed": [220, 221], "pdf": [234, 235]},
    {"key": "6.2", "title": "Maps between Jacobians", "labels": ["6.2.1", "6.2.2", "6.2.3", "6.2.4", "6.2.5", "6.2.6", "6.2.7", "6.2.8"], "printed": [228, 230], "pdf": [242, 244]},
    {"key": "6.3", "title": "Modular Jacobians and Hecke operators", "labels": ["6.3.1"], "printed": [234, 234], "pdf": [248, 248]},
    {"key": "6.4", "title": "Algebraic numbers and algebraic integers", "labels": ["6.4.1", "6.4.2", "6.4.3", "6.4.4", "6.4.5"], "printed": [236, 237], "pdf": [250, 251]},
    {"key": "6.5", "title": "Algebraic eigenvalues", "labels": ["6.5.1", "6.5.2", "6.5.3", "6.5.4", "6.5.5"], "printed": [243, 244], "pdf": [257, 258]},
    {"key": "6.6", "title": "Eigenforms, Abelian varieties, and Modularity", "labels": ["6.6.1", "6.6.2", "6.6.3", "6.6.4", "6.6.5"], "printed": [251, 251], "pdf": [265, 265]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 7

**Modular Curves as Algebraic Curves** — 46 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 7, title: "Modular Curves as Algebraic Curves",
  printed: [259, 312], pdf: [272, 325],
  sections: [
    {"key": "7.1", "title": "Elliptic curves as algebraic curves", "labels": ["7.1.1", "7.1.2", "7.1.3", "7.1.4", "7.1.5"], "printed": [259, 261], "pdf": [272, 274]},
    {"key": "7.2", "title": "Algebraic curves and their function fields", "labels": ["7.2.1", "7.2.2", "7.2.3", "7.2.4", "7.2.5", "7.2.6", "7.2.7", "7.2.8", "7.2.9", "7.2.10", "7.2.11", "7.2.12"], "printed": [270, 272], "pdf": [283, 285]},
    {"key": "7.3", "title": "Divisors on curves", "labels": ["7.3.1", "7.3.2", "7.3.3", "7.3.4", "7.3.5"], "printed": [278, 279], "pdf": [291, 292]},
    {"key": "7.4", "title": "The Weil pairing algebraically", "labels": ["7.4.1", "7.4.2", "7.4.3"], "printed": [282, 282], "pdf": [295, 295]},
    {"key": "7.5", "title": "Function fields over $\\mathbb C$", "labels": ["7.5.1", "7.5.2", "7.5.3", "7.5.4", "7.5.5", "7.5.6", "7.5.7"], "printed": [289, 290], "pdf": [302, 303]},
    {"key": "7.6", "title": "Function fields over $\\mathbb Q$", "labels": ["7.6.1", "7.6.2"], "printed": [294, 294], "pdf": [307, 307]},
    {"key": "7.7", "title": "Modular curves as algebraic curves and Modularity", "labels": ["7.7.1", "7.7.2", "7.7.3"], "printed": [298, 299], "pdf": [311, 312]},
    {"key": "7.8", "title": "Isogenies algebraically", "labels": ["7.8.1", "7.8.2", "7.8.3", "7.8.4", "7.8.5"], "printed": [302, 304], "pdf": [315, 317]},
    {"key": "7.9", "title": "Hecke operators algebraically", "labels": ["7.9.1", "7.9.2", "7.9.3", "7.9.4"], "printed": [310, 312], "pdf": [323, 325]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 8

**The Eichler–Shimura Relation and L-functions** — 35 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 8, title: "The Eichler–Shimura Relation and L-functions",
  printed: [318, 369], pdf: [331, 382],
  sections: [
    {"key": "8.1", "title": "Elliptic curves in arbitrary characteristic", "labels": ["8.1.1", "8.1.2", "8.1.3", "8.1.4", "8.1.5", "8.1.6"], "printed": [318, 320], "pdf": [331, 333]},
    {"key": "8.2", "title": "Algebraic curves in arbitrary characteristic", "labels": ["8.2.1", "8.2.2", "8.2.3"], "printed": [326, 326], "pdf": [339, 339]},
    {"key": "8.3", "title": "Elliptic curves over $\\mathbb Q$ and their reductions", "labels": ["8.3.1", "8.3.2", "8.3.3", "8.3.4", "8.3.5", "8.3.6", "8.3.7"], "printed": [331, 333], "pdf": [344, 346]},
    {"key": "8.4", "title": "Elliptic curves over $\\overline{\\mathbb Q}$ and their reductions", "labels": ["8.4.1", "8.4.2", "8.4.3", "8.4.4", "8.4.5"], "printed": [340, 340], "pdf": [353, 353]},
    {"key": "8.5", "title": "Reduction of algebraic curves and maps", "labels": ["8.5.1", "8.5.2", "8.5.3", "8.5.4", "8.5.5", "8.5.6", "8.5.7", "8.5.8", "8.5.9"], "printed": [350, 351], "pdf": [363, 364]},
    {"key": "8.6", "title": "Modular curves in characteristic $p$: Igusa’s Theorem", "labels": ["8.6.1"], "printed": [353, 353], "pdf": [366, 366]},
    {"key": "8.7", "title": "The Eichler–Shimura Relation", "labels": ["8.7.1", "8.7.2"], "printed": [359, 360], "pdf": [372, 373]},
    {"key": "8.8", "title": "Fourier coefficients, $L$-functions, and Modularity", "labels": ["8.8.1", "8.8.2"], "printed": [368, 369], "pdf": [381, 382]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Chapter 9

**Galois Representations** — 23 numbered exercises.

```dataviewjs
const bookName = /(?:Diamond[^;]*Shurman|Shurman[^;]*Diamond|A First Course in Modular Forms)/i;
const allExercises = Array.from(dv.pages("#exercise"));
function asList(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? value.array() : [String(value)];
}
function readSource(page) {
  const labels = new Set();
  const issues = [];
  const source = typeof page.source === "string" ? page.source : "";
  const refs = asList(page.source_refs).filter(ref => typeof ref === "string" && /^S7(?:\/|$)/i.test(ref));
  const candidate = bookName.test(source) || refs.length > 0;
  if (!candidate) return null;
  for (const ref of refs) {
    const match = ref.match(/^S7\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) labels.add(match.slice(1).map(Number).join("."));
    else issues.push("Unparsed structured locator: " + ref);
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) continue;
    const full = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\.([1-9]\d*)\.([1-9]\d*)\b(?!\.\d)/gi)];
    if (full.length) {
      for (const match of full) labels.add(match.slice(1).map(Number).join("."));
      continue;
    }
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
    const exercise = segment.match(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/i);
    if (chapter && section && exercise) {
      if (section[1] && Number(section[1]) !== Number(chapter[1])) issues.push("Chapter and section disagree");
      else labels.add([Number(chapter[1]), Number(section[2]), Number(exercise[1])].join("."));
    }
  }
  if (labels.size === 0 && issues.length === 0) issues.push("No numbered source locator; match against the original exercise before counting");
  if (labels.size > 1) issues.push("Multiple source numbers in one note; reconcile one numbered exercise per note");
  return {page, labels: [...labels], issues};
}
const records = allExercises.map(readSource).filter(Boolean);
const noteByLabel = new Map();
for (const record of records) {
  for (const label of record.labels) {
    if (!noteByLabel.has(label)) noteByLabel.set(label, new Map());
    noteByLabel.get(label).set(record.page.file.path, record.page);
  }
}
const unresolved = records.filter(record => record.issues.length > 0);
function summarize(expected, chapter = null, section = null) {
  const scope = label => (chapter === null || Number(label.split(".")[0]) === chapter) &&
    (section === null || label.startsWith(section + "."));
  const expectedSet = new Set(expected);
  const covered = expected.filter(label => noteByLabel.has(label));
  const missing = expected.filter(label => !noteByLabel.has(label));
  const duplicates = [...noteByLabel].filter(([label, notes]) => scope(label) && notes.size > 1);
  const unexpected = [...noteByLabel.keys()].filter(label => scope(label) && !expectedSet.has(label));
  const paths = new Set(covered.flatMap(label => [...noteByLabel.get(label).keys()]));
  const pending = unresolved.filter(record => {
    if (chapter === null || record.labels.some(scope)) return true;
    const hints = [];
    for (const ref of asList(record.page.source_refs)) {
      const match = typeof ref === "string" && ref.match(/^S7\/ch-([1-9]\d*)(?:\/sec-([1-9]\d*))?/i);
      if (match) hints.push([Number(match[1]), match[2] ? Number(match[2]) : null]);
    }
    for (const segment of String(record.page.source ?? "").split(";")) {
      if (!bookName.test(segment)) continue;
      const ch = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
      const sec = segment.match(/(?:§|Section)\s*(?:([1-9]\d*)\.)?([1-9]\d*)\b/i);
      if (ch) hints.push([Number(ch[1]), sec ? Number(sec[2]) : null]);
    }
    return hints.some(([ch, sec]) => ch === chapter && (section === null || section === ch + "." + sec));
  });
  let status = expected.length === 0 ? "No numbered exercises" : "Source-audited; not archived";
  if (duplicates.length || unexpected.length) status = "Needs source reconciliation";
  else if (covered.length && missing.length) status = "Partial";
  else if (covered.length && pending.length) status = "Mapped; source matching pending";
  else if (covered.length) status = "Complete";
  return {covered, missing, duplicates, unexpected, paths, status};
}
function span(range) { return range[0] === range[1] ? String(range[0]) : range[0] + "–" + range[1]; }
function anchors(item) { return "printed " + span(item.printed) + " / PDF " + span(item.pdf); }
function labelRange(labels) { return labels.length ? labels[0] + (labels.length > 1 ? "–" + labels.at(-1) : "") : "∅"; }
function labelOrder(a, b) {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
const chapter = {
  chapter: 9, title: "Galois Representations",
  printed: [378, 411], pdf: [390, 423],
  sections: [
    {"key": "9.1", "title": "Galois number fields", "labels": ["9.1.1", "9.1.2", "9.1.3"], "printed": [378, 379], "pdf": [390, 391]},
    {"key": "9.2", "title": "The $\\ell$-adic integers and the $\\ell$-adic numbers", "labels": ["9.2.1", "9.2.2", "9.2.3"], "printed": [383, 383], "pdf": [395, 395]},
    {"key": "9.3", "title": "Galois representations", "labels": ["9.3.1", "9.3.2", "9.3.3", "9.3.4", "9.3.5", "9.3.6", "9.3.7"], "printed": [389, 390], "pdf": [401, 402]},
    {"key": "9.4", "title": "Galois representations and elliptic curves", "labels": ["9.4.1", "9.4.2", "9.4.3", "9.4.4"], "printed": [393, 394], "pdf": [405, 406]},
    {"key": "9.5", "title": "Galois representations and modular forms", "labels": ["9.5.1", "9.5.2"], "printed": [402, 402], "pdf": [414, 414]},
    {"key": "9.6", "title": "Galois representations and Modularity", "labels": ["9.6.1", "9.6.2", "9.6.3", "9.6.4"], "printed": [409, 411], "pdf": [421, 423]},
  ],
};

dv.table(["Section", "Original title", "Audited source labels", "Source coverage", "Exercise pages", "Archive status"], chapter.sections.map(section => {
  const current = summarize(section.labels, chapter.chapter, section.key);
  return [section.key, section.title, labelRange(section.labels), current.covered.length + "/" + section.labels.length,
    anchors(section), current.status];
}));
const expectedSet = new Set(chapter.sections.flatMap(section => section.labels));
const rows = records.flatMap(record => record.labels.filter(label => expectedSet.has(label)).map(label =>
  [label, record.page.file.link, record.page.status ?? "", record.page.difficulty ?? "", record.page.source ?? ""]));
rows.sort((a, b) => labelOrder(a[0], b[0]) || String(a[1]).localeCompare(String(b[1])));
if (rows.length) dv.table(["Source exercise", "Note", "Learning status", "Difficulty", "Source"], rows);
else dv.paragraph("No source-numbered exercises from this chapter have been archived yet.");
```

[[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Quick Navigation|Back to chapter navigation]]

## Appendix A

**Hints and Answers to the Exercises** — printed pp. 413–433 / PDF pp. 424–444. The appendix supplies selected hints and answers to the chapter exercises; it contains no additional exercise set and is not a complete index of the 354 source numbers. Its mathematical content must be checked together with the corresponding exercise when that exercise is archived.

## Source and Counting Boundaries

- **Book:** Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016.
- **Original PDF:** [A First Course in Modular Forms](<E:/project/math/ant/input/A first course in modular forms.pdf>), 462 physical pages; SHA-256 `ed5b34f4f8e2402d68fed8129c8b79a701c50386f97b6358fb6cfb79dd0f3989`.
- **Pagination:** the inspected exercise pages use PDF = printed +15 in Chapters 1–2, +14 in Chapters 3–6, +13 in Chapters 7–8, and +12 in Chapter 9. Appendix A uses +11. Use the recorded page anchors rather than a single book-wide offset.
- **Section §2.5:** printed p. 63 / PDF p. 78 was checked and contains no numbered exercises; it is marked “No numbered exercises” rather than “Complete”.
- **Counting:** one source number is one exercise, including all its subparts. Appendix hints do not add exercises. Coverage counts unique labels in the audited set; repeated locators in one note do not inflate coverage, and duplicate mappings across notes are reported separately.
- **Language and scope:** archived problem statements, hints, independent solutions and source/proof notes for this book are written in English. Each exercise note contains its complete original numbered exercise; the earlier independently composed practice questions are excluded.
- **Provenance:** a generic book title is insufficient to count an exercise. The queries recognize numbered full-book citations and stable structured source references. Readable source fields should retain the complete author/title/edition and printed/PDF anchors.
- **Reconciliation:** missing labels are expected before archival. “Complete” requires all expected labels mapped, no duplicate or unexpected mappings, and no outstanding source-matching notes in the corresponding scope. Notes without an identifiable chapter remain a whole-book reconciliation issue and do not block an independently reconciled chapter or section. The coverage ledger does not certify proof completeness or alter learning status.
- **Next source group:** Chapter 2, §2.1, Exercises 2.1.1–2.1.3, printed p. 47 / PDF p. 62. Chapter 2 already has 2.3.2 and 2.3.5 archived; preserve those mappings when continuing.

## Related Navigation

- [[07 - Modular Forms/Modular Forms Hub|Modular Forms]]
- [[08 - Arithmetic Geometry/Arithmetic Geometry Hub|Arithmetic Geometry]]
- [[00 - Home/Artin Exercise Archive|Artin Exercise Archive]]
- [[00 - Home/Lang Algebra Exercise Archive|Lang Algebra Exercise Archive]]
- [[00 - Home/Neukirch Algebraic Number Theory Exercise Archive|Neukirch Algebraic Number Theory Exercise Archive]]
- [[00 - Home/Index|Home]]
