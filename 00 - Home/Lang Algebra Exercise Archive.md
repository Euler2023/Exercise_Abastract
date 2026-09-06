---
title: Lang Algebra Exercise Archive
aliases:
  - Lang Algebra Archive Status
  - Lang Algebra Exercise Coverage
tags:
  - index
  - exercise-archive
  - lang-algebra
created: 2026-08-28
---

# Lang Algebra Exercise Archive

This dashboard records the archival coverage of the numbered exercises in Serge Lang's *Algebra*, revised third edition.

> [!info] Archive status and learning status
> An exercise is **archived** when the vault contains a source-identified exercise note for it. This is separate from the note's learning `status`: an archived exercise may remain `not-started`.

## Chapter and Appendix Coverage

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const unitTitles = new Map([
  ["I", "Groups"],
  ["II", "Rings"],
  ["III", "Modules"],
  ["IV", "Polynomials"],
  ["V", "Algebraic Extensions"],
  ["VI", "Galois Theory"],
  ["VII", "Extensions of Rings"],
  ["VIII", "Transcendental Extensions"],
  ["IX", "Algebraic Spaces"],
  ["X", "Noetherian Rings and Modules"],
  ["XI", "Real Fields"],
  ["XII", "Absolute Values"],
  ["XIII", "Matrices and Linear Maps"],
  ["XIV", "Representation of One Endomorphism"],
  ["XV", "Structure of Bilinear Forms"],
  ["XVI", "The Tensor Product"],
  ["XVII", "Semisimplicity"],
  ["XVIII", "Representations of Finite Groups"],
  ["XIX", "The Alternating Product"],
  ["XX", "General Homology Theory"],
  ["XXI", "Finite Free Resolutions"],
  ["A1", "The Transcendence of e and pi"],
  ["A2", "Some Set Theory"],
]);

const pages = dv.pages("#exercise")
  .where(page => typeof page.source === "string" && page.source.includes(langSource));

function parseSourceUnit(segment) {
  const chapter = segment.match(/Ch\.\s*([IVXLCDM]+)/i);
  if (chapter) return chapter[1].toUpperCase();
  const appendix = segment.match(/Appendix\s*([12])/i);
  return appendix ? "A" + appendix[1] : null;
}

function parseExerciseLocator(segment) {
  const unit = parseSourceUnit(segment);
  if (unit === null) return null;
  const exercise = segment.match(/Exercise\s*(\d+)/i);
  return exercise ? { unit, label: unit + "." + Number(exercise[1]) } : null;
}

const noteFiles = new Map([...unitTitles.keys()].map(unit => [unit, new Set()]));
const sourceExercises = new Map([...unitTitles.keys()].map(unit => [unit, new Set()]));

for (const page of pages) {
  for (const segment of page.source.split(";")) {
    const unit = parseSourceUnit(segment);
    if (unit !== null) noteFiles.get(unit)?.add(page.file.path);
    const locator = parseExerciseLocator(segment);
    if (locator && sourceExercises.has(locator.unit)) {
      sourceExercises.get(locator.unit).add(locator.label);
    }
  }
}

const auditedCoverage = new Map([
  ["I", {
    covered: 57,
    total: 57,
    status: "Complete",
    pages: "printed pp. 75-82 / PDF pp. 90-97",
  }],
  ["II", {
    covered: 19,
    total: 19,
    status: "Complete",
    pages: "printed pp. 114-116 / PDF pp. 129-131",
  }],
  ["III", {
    covered: 29,
    total: 29,
    status: "Complete",
    pages: "printed pp. 165-172 / PDF pp. 180-187",
  }],
  ["IV", {
    covered: 27,
    total: 27,
    status: "Complete",
    pages: "printed pp. 213-219 / PDF pp. 228-234",
  }],
]);

const rows = [];
for (const [unit, title] of unitTitles) {
  const exerciseCount = sourceExercises.get(unit)?.size ?? 0;
  const noteCount = noteFiles.get(unit)?.size ?? 0;
  const audit = auditedCoverage.get(unit);
  const coverage = audit ? audit.covered + "/" + audit.total : "Pending source-total audit";
  const status = audit?.status ?? (noteCount > 0 ? "Partial" : "Not archived");
  rows.push([
    unit.startsWith("A") ? "Appendix " + unit.slice(1) : unit,
    title,
    exerciseCount,
    noteCount,
    coverage,
    status,
  ]);
}

dv.table(
  [
    "Chapter / appendix",
    "Original title",
    "Archived source exercises",
    "Note files",
    "Verified source coverage",
    "Archive status",
  ],
  rows
);
```

> [!note] Counting boundary
> “Archived source exercises” and “Note files” are calculated live from exercise tags and source metadata. “Verified source coverage” is asserted only after the source-label set has been checked against the original PDF and reconciled with parsed note provenance.

Chapter and appendix titles are transcribed from the original contents pages. [S2, Contents, printed pp. xi-xv, PDF pp. 11-15]

## Chapter Scope Notes

| Chapter / appendix | Original title | Verified source scope | Status note |
|---:|---|---|---|
| I | Groups | All 57 exercises I.1-I.57; printed pp. 75-82 / PDF pp. 90-97 | Complete; 46 new notes and 11 existing cross-source notes |
| II | Rings | All 19 exercises II.1-II.19; printed pp. 114-116 / PDF pp. 129-131 | Complete; 18 Ring Theory notes and 1 Group Theory note |
| III | Modules | All 29 exercises III.1-III.29; printed pp. 165-172 / PDF pp. 180-187 | Complete; 27 new notes and 2 existing cross-source notes |
| IV | Polynomials | All 27 exercises IV.1-IV.27; printed pp. 213-219 / PDF pp. 228-234 | Complete; 24 Ring Theory notes, 1 Field Theory note, and 2 Linear Algebra and Modules notes |
| V | Algebraic Extensions | Pending source-total audit | Not archived |
| VI | Galois Theory | Pending source-total audit | Not archived |
| VII | Extensions of Rings | Pending source-total audit | Not archived |
| VIII | Transcendental Extensions | Pending source-total audit | Not archived |
| IX | Algebraic Spaces | Pending source-total audit | Not archived |
| X | Noetherian Rings and Modules | Pending source-total audit | Not archived |
| XI | Real Fields | Pending source-total audit | Not archived |
| XII | Absolute Values | Pending source-total audit | Not archived |
| XIII | Matrices and Linear Maps | Pending source-total audit | Not archived |
| XIV | Representation of One Endomorphism | Pending source-total audit | Not archived |
| XV | Structure of Bilinear Forms | Pending source-total audit | Not archived |
| XVI | The Tensor Product | Pending source-total audit | Not archived |
| XVII | Semisimplicity | Pending source-total audit | Not archived |
| XVIII | Representations of Finite Groups | Pending source-total audit | Not archived |
| XIX | The Alternating Product | Pending source-total audit | Not archived |
| XX | General Homology Theory | Pending source-total audit | Not archived |
| XXI | Finite Free Resolutions | Pending source-total audit | Not archived |
| Appendix 1 | The Transcendence of e and pi | Pending source-total audit | Not archived |
| Appendix 2 | Some Set Theory | Pending source-total audit | Not archived |

## Verified Chapter Coverage

| Chapter | Verified labels | Source pages | Archived notes | Missing | Duplicate | Unexpected | Unparsed | Status |
|---:|---|---|---:|---:|---:|---:|---:|---|
| I | I.1-I.57 | printed pp. 75-82 / PDF pp. 90-97 | 57 | 0 | 0 | 0 | 0 | Complete |
| II | II.1-II.19 | printed pp. 114-116 / PDF pp. 129-131 | 19 | 0 | 0 | 0 | 0 | Complete |
| III | III.1-III.29 | printed pp. 165-172 / PDF pp. 180-187 | 29 | 0 | 0 | 0 | 0 | Complete |
| IV | IV.1-IV.27 | printed pp. 213-219 / PDF pp. 228-234 | 27 | 0 | 0 | 0 | 0 | Complete |

Chapter I was reconciled against the ordered source labels on all eight exercise pages. Every source exercise has exactly one parsed note mapping. The archive reuses 11 pre-existing notes whose mathematical tasks coincide with Artin exercises and adds 46 notes for the remaining Lang exercises.

Chapter II was reconciled against the ordered source labels on all three exercise pages. Every source exercise has exactly one parsed note mapping: 18 are routed to Ring Theory and II.8 is routed to Group Theory because finite-group structure supplies its primary computational toolkit. The reconciliation found no missing, duplicate, unexpected, or unparsed labels.

Chapter III was reconciled against the ordered labels III.1-III.29 on all eight exercise pages. Every source exercise has exactly one parsed note mapping: the archive adds 27 notes—22 in Linear Algebra and Modules, 3 in Ring Theory, 1 in Group Theory, and 1 in Representation Theory—and reuses 2 existing cross-source notes. The reconciliation found no missing, duplicate, unexpected, or unparsed labels.

On 2026-09-06, the current source metadata was rechecked for Chapters I-III: 105 distinct source labels have exactly one note mapping each, with no missing, duplicate, unexpected, or unparsed Lang exercise locators. This is a provenance reconciliation, not a fresh audit of all existing solutions.

Chapter IV was reconciled on 2026-09-06 against the ordered source labels IV.1-IV.27 on all seven exercise pages, printed pp. 213-219 / PDF pp. 228-234. Every numbered exercise has exactly one note mapping: 24 in Ring Theory, IV.10 in Field Theory, and IV.16 and IV.19 in Linear Algebra and Modules. The reconciliation found no missing, duplicate, unexpected, or unparsed labels. Seven prerequisite concept notes are linked from the exercises and the existing topic hubs, with dynamic exercise backlinks. All 27 notes follow the exercise template and retain learning status `not-started`.

Chapters I-IV now cover **132 verified source exercises** (57 + 19 + 29 + 27). The unnumbered Chapter IV closing note continues on printed p. 220 / PDF p. 235 and adds no exercise label. Statements, source issues, and proof boundaries were checked separately from the numerical reconciliation; Codex-written solutions are identified as independent derivations in each note.

## Source Exercise to Archived Note Mapping

### Chapter I — Groups

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!/Ch\.\s*I\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["I." + row[0], row[1], row[2], row[3]])
);
```

### Chapter II — Rings

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!/Ch\.\s*II\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["II." + row[0], row[1], row[2], row[3]])
);
```

### Chapter III — Modules

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!/Ch\.\s*III\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["III." + row[0], row[1], row[2], row[3]])
);
```

### Chapter IV — Polynomials

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!/Ch\.\s*IV\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["IV." + row[0], row[1], row[2], row[3]])
);
```

## Source Issues and Figure Coverage

- **I.48:** The printed finite-count identities omit finiteness hypotheses; the note preserves the wording and proves the intended finite statement.
- **I.52:** “$f,g$ as above” gives the wrong arrow orientation for a pushout; the note preserves the mismatch and uses the orientation forced by the printed quotient formula.
- **I.55:** Scalar matrices contradict the printed “at most two fixed points” conclusion; the note records the counterexample and proves the corrected non-scalar statement.
- **I.56:** The unnumbered ping-pong-domain diagram on printed p. 82 / PDF p. 97 is preserved as a direct crop in `Attachments/lang-algebra-3e-ch01-ex56-ping-pong-domains.png`.
- **Chapter II cross-reference:** Printed p. 114 / PDF p. 129 says the Dedekind-ring definition is in the exercises of Chapter III. The definition is actually in Chapter II §1 on printed p. 88 / PDF p. 103, while the Chapter III exercises explicitly depend on the preceding chapter.
- **II.11:** The printed trigonometric-degree definition assigns no value to the zero function although the product formula is stated without a nonzero qualification. The note preserves the statement and proves the identity for nonzero factors.
- **II.16:** “Only one prime ideal” uses the chapter's convention that ideals are nonzero; the note makes this explicit because $(0)$ is also prime in a domain under modern unrestricted terminology.
- **II.18-II.19:** Exercise II.18 ends with “Use this to prove:” and II.19 supplies the separate numbered target. The archive keeps two notes and records the dependency.
- **Chapter II figure audit:** No exercise depends on a source figure, diagram, or labeled geometric configuration, so no attachment was created.
- **III.6:** The printed full-rank-sublattice claim is false even after adding $G$-invariance. The note preserves it, supplies a counterexample, and labels the finite-index replacement theorem from Lang's *Algebraic Number Theory* as an external input.
- **III.18(b):** The printed $T_p(A)$ is preserved and visibly corrected to $T_p(M)$, the inverse limit defined by the displayed module system.
- **III.23:** Both displayed Hom identities involve inverse limits; the source page was rechecked and no direct-limit correction is needed.
- **III.29(a):** The printed $x_{nn}$ is impossible for a strictly upper-triangular matrix; the note preserves it and uses the intended last-diagonal entry $x_{1n}$.
- **Chapter III figure audit:** The diagrams required by III.14, III.15, III.18(a), and III.26 are preserved as verified direct crops in `Attachments/lang-algebra-3e-ch03-ex14-snake-diagram.png`, `Attachments/lang-algebra-3e-ch03-ex15-five-lemma-diagram.png`, `Attachments/lang-algebra-3e-ch03-ex18-inverse-module-system.png`, and `Attachments/lang-algebra-3e-ch03-ex26-hom-limit-diagram.png`.

- **IV.9:** The printed classification omits the requirement to fix the coefficient ring. The note supplies a coefficient-conjugation counterexample and proves the intended algebra-automorphism statement.
- **IV.11(c):** The logarithmic derivative requires the printed scalar $c$ to be nonzero.
- **IV.13:** The exercise omits nonconstant and nonzero boundaries needed for its degree bounds. The note gives counterexamples to the unrestricted versions and proves the corrected statements. The chapter prints a weaker Davenport bound with $-1$ on printed p. 195 / PDF p. 210, while IV.13(a) prints the stronger $+1$ bound; the solution proves the exercise's version.
- **IV.14-IV.15:** These are conditional implications under the specified generalized Szpiro or abc hypothesis. The scaled Frey polynomial in the supporting text, printed p. 199 / PDF p. 214, has a sign inconsistent with its claimed discriminant; IV.14 visibly corrects that sign. No unconditional conjecture or prime-infinitude claim is made.
- **IV.16:** The estimate includes nonzero constant polynomials. The note handles them explicitly and states the empty-determinant and $0^0$ convention when both degrees are zero.
- **IV.17:** The displayed product ends at $b_{d-1}$ although the preceding line defines only $b_1,\ldots,b_{d-2}$ and requires degree $d$. The note preserves the printed product and uses the corrected endpoint $b_{d-2}$.
- **IV.19-IV.20:** IV.19's printed degree threshold $n(n-1)$ is preserved; the solution establishes the stronger $n(n-1)/2$ bound. IV.20 prints a monomial ending at $a_n$ although $f$ ends at $a_m$; its coefficient range is visibly clarified.
- **IV.21-IV.24:** The printed additive lambda axioms do not impose $\lambda_t(1)=1+t$. IV.23(b)-(c) and IV.24 require that additional normalization. The notes provide an explicit formal-exponential counterexample and prove the normalized statements.
- **IV.26-IV.27:** The notes make the index ranges for the leading-two-terms and division-by-$k$ formulas explicit. IV.27's unspecified value ring is taken to be a commutative $\mathbb Q$-algebra, so its factorial and period denominators are defined.
- **Chapter IV figure audit:** No exercise depends on a source figure, diagram, or labeled geometric configuration; no attachment was created. Temporary source-page renders were removed after checking.

## Next Archive Target

Chapter V, **Algebraic Extensions**, is the next archive target. Its complete source-label set and total have not yet been audited.
