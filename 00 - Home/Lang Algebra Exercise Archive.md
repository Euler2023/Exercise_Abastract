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
    if (!segment.includes(langSource)) continue;
    const unit = parseSourceUnit(segment);
    if (unit !== null) noteFiles.get(unit)?.add(page.file.path);
    const locator = parseExerciseLocator(segment);
    if (locator && sourceExercises.has(locator.unit)) {
      sourceExercises.get(locator.unit).add(locator.label);
    }
  }
}

const auditedCoverage = new Map([
  ["V", {
    covered: 34,
    total: 34,
    status: "Complete",
    pages: "printed pp. 253-259 / PDF pp. 268-274",
  }],
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
  ["VI", {
    covered: 51,
    total: 51,
    status: "Complete",
    pages: "printed pp. 320-332 / PDF pp. 335-347",
  }],
  ["VII", {
    covered: 12,
    total: 12,
    status: "Complete",
    pages: "printed pp. 352-354 / PDF pp. 367-369",
  }],
  ["VIII", {
    covered: 10,
    total: 10,
    status: "Complete",
    pages: "printed pp. 374-375 / PDF pp. 389-390",
  }],
  ["IX", {
    covered: 19,
    total: 19,
    status: "Complete",
    pages: "printed pp. 410-412 / PDF pp. 425-427",
  }],
  ["X", {
    covered: 19,
    total: 19,
    status: "Complete",
    pages: "printed pp. 443-447 / PDF pp. 458-462",
  }],
  ["XI", {
    covered: 13,
    total: 13,
    status: "Complete",
    pages: "printed pp. 461-463 / PDF pp. 476-478",
  }],
  ["XII", {
    covered: 20,
    total: 20,
    status: "Complete",
    pages: "printed pp. 495-499 / PDF pp. 510-514",
  }],
  ["XIII", {
    covered: 36,
    total: 36,
    status: "Complete",
    pages: "printed pp. 545-552 / PDF pp. 560-567",
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
> “Archived source exercises” and “Note files” are calculated live from exercise tags and source metadata. Each semicolon-separated source segment must itself identify this edition of *Algebra*; chapter references belonging to another book on the same note are excluded. “Verified source coverage” is asserted only after the source-label set has been checked against the original PDF and reconciled with parsed note provenance.

Chapter and appendix titles are transcribed from the original contents pages. [S2, Contents, printed pp. xi-xv, PDF pp. 11-15]

## Chapter Scope Notes

| Chapter / appendix | Original title | Verified source scope | Status note |
|---:|---|---|---|
| I | Groups | All 57 exercises I.1-I.57; printed pp. 75-82 / PDF pp. 90-97 | Complete; 46 new notes and 11 existing cross-source notes |
| II | Rings | All 19 exercises II.1-II.19; printed pp. 114-116 / PDF pp. 129-131 | Complete; 18 Ring Theory notes and 1 Group Theory note |
| III | Modules | All 29 exercises III.1-III.29; printed pp. 165-172 / PDF pp. 180-187 | Complete; 27 new notes and 2 existing cross-source notes |
| IV | Polynomials | All 27 exercises IV.1-IV.27; printed pp. 213-219 / PDF pp. 228-234 | Complete; 24 Ring Theory notes, 1 Field Theory note, and 2 Linear Algebra and Modules notes |
| V | Algebraic Extensions | All 34 exercises V.1-V.34; printed pp. 253-259 / PDF pp. 268-274 | Complete; 33 new notes and 1 reused note; V.30 retains conjectural proof status |
| VI | Galois Theory | All 51 exercises VI.1-VI.51; printed pp. 320-332 / PDF pp. 335-347 | Complete; 51 new Galois Theory notes |
| VII | Extensions of Rings | All 12 exercises VII.1-VII.12; printed pp. 352-354 / PDF pp. 367-369 | Complete; 6 Ring Theory notes, 4 Linear Algebra and Modules notes, and 2 Galois Theory notes |
| VIII | Transcendental Extensions | All 10 exercises VIII.1-VIII.10; printed pp. 374-375 / PDF pp. 389-390 | Complete; 9 Field Theory notes and 1 Ring Theory note |
| IX | Algebraic Spaces | All 19 exercises IX.1-IX.19; printed pp. 410-412 / PDF pp. 425-427 | Complete; 19 Ring Theory notes |
| X | Noetherian Rings and Modules | All 19 exercises X.1-X.19; printed pp. 443-447 / PDF pp. 458-462 | Complete; 10 Ring Theory notes and 9 Linear Algebra and Modules notes |
| XI | Real Fields | All 13 exercises XI.1-XI.13; printed pp. 461-463 / PDF pp. 476-478 | Complete; 11 Field Theory notes and 2 Ring Theory notes |
| XII | Absolute Values | All 20 exercises XII.1-XII.20; printed pp. 495-499 / PDF pp. 510-514 | Complete; 7 Field Theory, 5 Ring Theory, and 8 Arithmetic Geometry notes |
| XIII | Matrices and Linear Maps | All 36 exercises XIII.1-XIII.36; printed pp. 545-552 / PDF pp. 560-567 | Complete; 24 Linear Algebra and Modules, 3 Ring Theory, 2 Group Theory, 5 Representation Theory, and 2 Galois Theory notes |
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
| V | V.1-V.34 | printed pp. 253-259 / PDF pp. 268-274 | 34 | 0 | 0 | 0 | 0 | Complete |
| VI | VI.1-VI.51 | printed pp. 320-332 / PDF pp. 335-347 | 51 | 0 | 0 | 0 | 0 | Complete |
| VII | VII.1-VII.12 | printed pp. 352-354 / PDF pp. 367-369 | 12 | 0 | 0 | 0 | 0 | Complete |
| VIII | VIII.1-VIII.10 | printed pp. 374-375 / PDF pp. 389-390 | 10 | 0 | 0 | 0 | 0 | Complete |
| IX | IX.1-IX.19 | printed pp. 410-412 / PDF pp. 425-427 | 19 | 0 | 0 | 0 | 0 | Complete |
| X | X.1-X.19 | printed pp. 443-447 / PDF pp. 458-462 | 19 | 0 | 0 | 0 | 0 | Complete |
| XI | XI.1-XI.13 | printed pp. 461-463 / PDF pp. 476-478 | 13 | 0 | 0 | 0 | 0 | Complete |
| XII | XII.1-XII.20 | printed pp. 495-499 / PDF pp. 510-514 | 20 | 0 | 0 | 0 | 0 | Complete |
| XIII | XIII.1-XIII.36 | printed pp. 545-552 / PDF pp. 560-567 | 36 | 0 | 0 | 0 | 0 | Complete |

Chapter XIII was source-audited on all eight original exercise pages before note creation and reconciled on 2026-09-26 against the ordered labels XIII.1-XIII.36 (36 total), printed pp. 545-552 / PDF pp. 560-567. Each source label has exactly one parsed note mapping: 24 in Linear Algebra and Modules (LA393-LA416), 3 in Ring Theory (R298-R300), 2 in Group Theory (G328-G329), 5 in Representation Theory (Rep117-Rep121), and 2 in Galois Theory (Gal138-Gal139). Missing, duplicate, unexpected, and unparsed exception sets are empty. All 36 learning statuses remain `not-started`. Printed source issues and named external proof inputs are identified in the relevant notes.

Chapter XII was reconciled on 2026-09-25 against the ordered source labels XII.1-XII.20, audited on all five original exercise pages before note creation (printed pp. 495-499 / PDF pp. 510-514). Each label has exactly one parsed note mapping: 7 in Field Theory (F107-F113), 5 in Ring Theory (R293-R297), and 8 in Arithmetic Geometry (AG18-AG25). The missing, duplicate, unexpected, and unparsed exception sets are empty. All 20 learning statuses remain `not-started`. The existing valuation concept now distinguishes absolute-value places from valuation-ring residue maps; source issues and imported proof inputs are recorded in the relevant notes.

Chapter XI was reconciled on 2026-09-25 against all 13 ordered source labels XI.1-XI.13, audited on the three original exercise pages before note creation (printed pp. 461-463 / PDF pp. 476-478). Each label has exactly one parsed note mapping: 11 in Field Theory (F96-F106) and 2 in Ring Theory (R291-R292). Missing, duplicate, unexpected, and unparsed exception sets are empty. Two prerequisite concepts have dynamic exercise backlinks and links from Field Theory Hub. All 13 learning statuses remain `not-started`. The notes separate the printed source issues from corrected, independently derived arguments; XI.13 identifies its permitted generic Bezout input.

Chapter I was reconciled against the ordered source labels on all eight exercise pages. Every source exercise has exactly one parsed note mapping. The archive reuses 11 pre-existing notes whose mathematical tasks coincide with Artin exercises and adds 46 notes for the remaining Lang exercises.

Chapter II was reconciled against the ordered source labels on all three exercise pages. Every source exercise has exactly one parsed note mapping: 18 are routed to Ring Theory and II.8 is routed to Group Theory because finite-group structure supplies its primary computational toolkit. The reconciliation found no missing, duplicate, unexpected, or unparsed labels.

Chapter III was reconciled against the ordered labels III.1-III.29 on all eight exercise pages. Every source exercise has exactly one parsed note mapping: the archive adds 27 notes—22 in Linear Algebra and Modules, 3 in Ring Theory, 1 in Group Theory, and 1 in Representation Theory—and reuses 2 existing cross-source notes. The reconciliation found no missing, duplicate, unexpected, or unparsed labels.

On 2026-09-06, the current source metadata was rechecked for Chapters I-III: 105 distinct source labels have exactly one note mapping each, with no missing, duplicate, unexpected, or unparsed Lang exercise locators. This is a provenance reconciliation, not a fresh audit of all existing solutions.

Chapter IV was reconciled on 2026-09-06 against the ordered source labels IV.1-IV.27 on all seven exercise pages, printed pp. 213-219 / PDF pp. 228-234. Every numbered exercise has exactly one note mapping: 24 in Ring Theory, IV.10 in Field Theory, and IV.16 and IV.19 in Linear Algebra and Modules. The reconciliation found no missing, duplicate, unexpected, or unparsed labels. Seven prerequisite concept notes are linked from the exercises and the existing topic hubs, with dynamic exercise backlinks. All 27 notes follow the exercise template and retain learning status `not-started`.

Chapter V was reconciled on 2026-09-06 against all 34 labels V.1-V.34, verified on printed pp. 253-259 / PDF pp. 268-274 before note creation. Every label has exactly one parsed note mapping: 25 in Field Theory (24 new notes and the reused F24), 4 in Ring Theory, 4 in Linear Algebra and Modules, and 1 in Arithmetic Geometry. The four exception sets—missing, duplicate, unexpected, and unparsed—are empty. The three new prerequisite concepts have dynamic exercise backlinks and are linked from their topic hubs. All 34 exercise notes retain learning status `not-started`. V.30 is archived as a conjecture with proved low-degree special cases, and V.34 distinguishes its source-contained argument from independently supplied details.

Chapter VI was reconciled on 2026-09-12 against all 51 labels VI.1-VI.51, verified on printed pp. 320-332 / PDF pp. 335-347 before note creation. Every numbered exercise has exactly one parsed note mapping in Galois Theory (Exercise Gal85 to Exercise Gal135). The four exception sets—missing, duplicate, unexpected, and unparsed—are empty. Three prerequisite concept notes (Normal Basis Theorem, Infinite Galois Extensions and Krull Topology, and Witt Vectors and Artin-Schreier-Witt Theory) have dynamic exercise backlinks and are linked from Galois Theory Hub. All 51 exercise notes retain learning status `not-started`.

Chapter VII was reconciled on 2026-09-15 against all 12 labels VII.1-VII.12, verified on printed pp. 352-354 / PDF pp. 367-369 before note creation. Every numbered exercise has exactly one parsed note mapping: 6 in Ring Theory (`Exercise R255` to `Exercise R260`), 4 in Linear Algebra and Modules (`Exercise LA380` to `Exercise LA383`), and 2 in Galois Theory (`Exercise Gal136` and `Exercise Gal137`). The four exception sets—missing, duplicate, unexpected, and unparsed—are empty. Two prerequisite concept notes (`Integral Ring Extensions and Integrally Closed Domains` and `Decomposition and Inertia Groups`) have dynamic exercise backlinks and are linked from their respective topic hubs. All 12 exercise notes retain learning status `not-started`.

Chapter VIII was reconciled on 2026-09-15 against all 10 labels VIII.1-VIII.10, verified on printed pp. 374-375 / PDF pp. 389-390 before note creation. Every numbered exercise has exactly one parsed note mapping: 9 in Field Theory (`Exercise F87` to `Exercise F95`) and 1 in Ring Theory (`Exercise R261`). The four exception sets—missing, duplicate, unexpected, and unparsed—are empty. Two prerequisite concept notes (`Transcendence Bases and Transcendence Degree` and `Derivations and Differentials on Fields`) have dynamic exercise backlinks and are linked from Field Theory Hub. All 10 exercise notes retain learning status `not-started`.

Chapter IX was reconciled on 2026-09-15 against all 19 labels IX.1-IX.19, verified on printed pp. 410-412 / PDF pp. 425-427 before note creation. Every numbered exercise has exactly one parsed note mapping in Ring Theory (`Exercise R262` to `Exercise R280`). The four exception sets—missing, duplicate, unexpected, and unparsed—are empty. Three prerequisite concept notes (`Hilbert Nullstellensatz`, `Krull Dimension and Catenarity`, and `Multivariate Resultants and Resultant Systems`) have dynamic exercise backlinks and are linked from Ring Theory Hub. All 19 exercise notes retain learning status `not-started`.

On 2026-09-20, the 29 exercises in Chapters VIII–IX and their five prerequisite concepts were reviewed against the bounded original source pages and revised for proof completeness, hypotheses, signs, source references, and links. Source discrepancies and external proof inputs remain explicit, particularly VIII.6(a), IX.17, and the dimension theorems used in IX.18–19. A fresh provenance reconciliation of Chapters I–IX found 258 distinct exercise labels, each mapped to exactly one note, with all four exception sets empty. The dashboard now filters each source segment separately, preventing references to Lang's *Algebraic Number Theory* from being counted as *Algebra* exercises. All 29 learning statuses remain `not-started`.

Chapter X was reconciled on 2026-09-22 against the ordered source labels X.1-X.19, audited on all five original exercise pages before note creation (printed pp. 443-447 / PDF pp. 458-462). Each label has exactly one note: X.2-X.10 and X.14 use Ring Theory (R281-R290); X.1, X.11-X.13, and X.15-X.19 use Linear Algebra and Modules (LA384-LA392). Missing, duplicate, unexpected, and unparsed exception sets are empty. Four prerequisite concepts have dynamic exercise backlinks and topic-hub links. All 19 exercise notes and four concepts are written in English; all 19 learning statuses remain not-started. The unnumbered complex preamble is supporting material, not an additional numbered exercise. Proofs, printed source issues, and hypothesis boundaries were checked separately from this provenance count.

Chapters I-XIII cover **346 verified source exercises** (57 + 19 + 29 + 27 + 34 + 51 + 12 + 10 + 19 + 19 + 13 + 20 + 36). A fresh provenance reconciliation across Chapters I-XIII found exactly one note mapping for each label, with no missing, duplicate, unexpected, or unparsed locators. This is not a fresh proof audit of earlier chapters. Codex-written solutions are identified as independent derivations in the notes.

## Source Exercise to Archived Note Mapping

### Chapter I — Groups

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
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
    if (!segment.includes(langSource)) continue;
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
    if (!segment.includes(langSource)) continue;
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
    if (!segment.includes(langSource)) continue;
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

### Chapter V — Algebraic Extensions

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*V\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["V." + row[0], row[1], row[2], row[3]])
);
```

### Chapter VI — Galois Theory

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*VI\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["VI." + row[0], row[1], row[2], row[3]])
);
```

### Chapter VII — Extensions of Rings

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*VII\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["VII." + row[0], row[1], row[2], row[3]])
);
```

### Chapter VIII — Transcendental Extensions

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*VIII\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["VIII." + row[0], row[1], row[2], row[3]])
);
```

### Chapter IX — Algebraic Spaces

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*IX\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["IX." + row[0], row[1], row[2], row[3]])
);
```

### Chapter X — Noetherian Rings and Modules

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*X\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
rows.map(row => ["X." + row[0], row[1], row[2], row[3]])
);
```

### Chapter XI — Real Fields

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*XI\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["XI." + row[0], row[1], row[2], row[3]])
);
```

### Chapter XII — Absolute Values

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*XII\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["XII." + row[0], row[1], row[2], row[3]])
);
```

### Chapter XIII — Matrices and Linear Maps

```dataviewjs
const langSource = "Serge Lang, Algebra, rev. 3rd ed.";
const rows = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string" || !page.source.includes(langSource)) continue;
  for (const segment of page.source.split(";")) {
    if (!segment.includes(langSource)) continue;
    if (!/Ch\.\s*XIII\b/i.test(segment)) continue;
    const match = segment.match(/Exercise\s*(\d+)/i);
    if (match) rows.push([Number(match[1]), page.file.link, page.status, page.difficulty]);
  }
}

rows.sort((a, b) => a[0] - b[0]);
dv.table(
  ["Source exercise", "Archived note", "Learning status", "Difficulty"],
  rows.map(row => ["XIII." + row[0], row[1], row[2], row[3]])
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

- **V.8 / F24:** The reused Artin note's previous induction incorrectly discarded an entire irreducible factor after adjoining only one root. The corrected proof splits the full factor before removing it, and handles arbitrary characteristic.
- **V.23 source remark:** The exercise's Euler product and asymptotic are proved independently. Its unnumbered elliptic-curve remark prematurely builds rationality into its definition and unnecessarily excludes real Frobenius roots; an exact 625-pair enumeration gives a counterexample to the latter restriction.
- **V.27:** The converse requires positive degree in the final variable. The note retains the printed wording and gives the counterexample in which an irreducible polynomial becomes a fraction-field unit.
- **V.29:** The literal printed exponent pair must be made primitive and given the kernel signs. The note computes the Laurent kernel and supplies a counterexample to using nonprimitive exponents unchanged.
- **V.30:** The source explicitly calls this Artin conjecture unknown. The note records the conjectural boundary and proves only degree-one and degree-two cases, naming the quadratic cyclotomic input.
- **V.31–V.32:** Root-sequence and partial-fraction assertions require a field containing the characteristic roots. V.32 prints an extra factor $t$ in $vtX^2$; the recurrence requires $vX^2$. Zero roots and initial-value conventions are handled explicitly.
- **V.33:** The coefficient indexed by $j$ corresponds to the column for $T^j$, namely column $j+1$ under one-based numbering. Division by a nonzero Vandermonde determinant takes place in a fraction field unless it is a unit.
- **V.34:** The printed coefficient ring uses $z_1$ instead of $x_1$, one determinant uses $x_n$ instead of $x_d$, and the proof's exponential numerator prints $k+d+1$ instead of $k+d-1$. The note records the source-contained Howe argument and corrects these notational slips visibly.
- **Chapter V figure audit:** All seven exercise pages were inspected. No numbered exercise depends on a figure or geometric diagram; formulas and determinant matrices are transcribed as searchable mathematics. No attachment was created.

- **Chapter VI figure audit:** All thirteen exercise pages (printed pp. 320–332 / PDF pp. 335–347) were inspected via direct high-resolution PDF page renders. No exercise depends on a source figure, diagram, or labeled geometric configuration; all equations, tables, and polynomials are transcribed as searchable LaTeX/Markdown. No image attachment is required.

- **Chapter VII figure audit:** All three exercise pages (printed pp. 352–354 / PDF pp. 367–369) were inspected. No exercise depends on a source figure, diagram, or labeled geometric configuration; all equations, lattices, and polynomials are transcribed as searchable LaTeX/Markdown. No image attachment is required.
- **VII.4:** The map embeds $\mathfrak o_L$ into Euclidean space via conjugates $\alpha \mapsto (\sigma_1(\alpha), \dots, \sigma_n(\alpha))$; the finiteness of elements in bounded regions deduces that $\mathfrak o_L$ is a free $\mathbb Z$-module of rank $n$.
- **VII.5:** The map $l: U \to \mathbb R^n$ maps $u \mapsto (\log |\sigma_1(u)|, \dots, \log |\sigma_n(u)|)$; its kernel is the finite cyclic group of roots of unity in $E$, and the image is a discrete subgroup of $\mathbb R^n$, proving $U$ is a finitely generated abelian group.
- **VII.10(b):** The printed condition 'divisible by at least two primes' holds for all $n \ge 6$ that are not prime powers; the unit property follows from $\Phi_n(1) = 1$.

- **Chapter VIII figure audit:** Both exercise pages (printed pp. 374–375 / PDF pp. 389–390) were inspected via direct high-resolution PDF page renders. No exercise depends on a source figure, diagram, or labeled geometric configuration; all equations, operators, and polynomials are transcribed as searchable LaTeX/Markdown. No image attachment is required.
- **VIII.2:** The printed text reads "and $L$ is separable over $k$ or $K$ is separable over $k$"; OCR errors turning "$K$" into "1)." are clarified.
- **VIII.6(a):** The printed target field is $k(y)$, which omits the parameter $u$ appearing in the proposed basis elements. The note preserves that wording, gives a counterexample to the literal formulation, and proves the intended statement over $k_u(y)$.
- **VIII.8(b):** The definition of a logarithmic derivative presupposes $x\in F$; this implicit condition is stated explicitly.
- **VIII.9:** The original PDF supports $z_1,\ldots,z_r$; the earlier claim of a printed subscript error was unsupported and has been removed. Proposition 5.5 is located at printed p. 372 / PDF p. 387.

- **Chapter IX figure audit:** All three exercise pages (printed pp. 410–412 / PDF pp. 425–427) were inspected via direct high-resolution PDF page renders. No exercise depends on a source figure, diagram, or labeled geometric configuration; all equations and structures are transcribed as searchable LaTeX/Markdown. No image attachment is required.
- **IX.1:** Generic point $(x)$ and forms $f_1, \ldots, f_r$; the note proves $V \cap \mathfrak{A} = \{0\} \iff x_i$ integral over $k[f(x)]$ via the homogeneous Nullstellensatz and Chapter VII Theorem 3.7.
- **IX.5–IX.9 shared setup:** The regularity assumption on $k(x)/k$ printed before Exercise 5 applies throughout this group. It is now repeated in the relevant notes; in IX.9 it supplies $I_0=k$.
- **IX.11:** Up to a nonzero scalar, the gcd of the chosen resultant system factors as $\prod_j L_u(x^{(j)})^{m_j}$ with positive exponents. These exponents depend on the system: squaring every member doubles them. The exercise alone does not define intrinsic intersection multiplicities.
- **IX.17:** General localization fractions are allowed. Agreement “as functions” must mean equality in $A_{f_if_j}$ (equality of local sections); pointwise equality in residue fields is insufficient for nonreduced rings. The note preserves the printed wording and records the dual-number counterexample.
- **IX.18–IX.19 proof boundary:** The revised solutions separately establish maximal-ideal heights and use catenarity for chains with fixed endpoints. Universal catenarity and the dimension formula are explicitly imported from Stacks Tags 00NM and 02IJ. IX.19 also states the characteristic-zero hypothesis implicit in $\mathbf Q(x_1,\ldots,x_n)$.

- **Chapter X figure audit:** All five exercise pages (printed pp. 443-447 / PDF pp. 458-462) were inspected as high-resolution original PDF renders. No numbered exercise depends on a geometric figure or diagram. The unnumbered chain-map diagram in the shared background on printed p. 445 has reversed vertical arrows; its maps and correction are recorded as searchable formulas in the complexes concept. No image attachment is needed.
- **X.9(a):** The printed hint has $x(\mathfrak p)=0$. The note preserves this and explains that the domain-to-field argument must start with a nonzero residue class.
- **X.14(b):** The maximum component dimension $r$ presupposes a nonempty projective zero set. For the empty set the Hilbert polynomial is zero; the note states this boundary separately and proves the degree assertion for the nonempty case.
- **X.15:** The hint places basis lifts in $A$ instead of $E$, and writes $J\subset\mathfrak p$ for a submodule $J\subseteq A^r$. The note preserves these expressions and explains the intended $x_j\in E$ and $J\subseteq\mathfrak pA^r$.
- **X.17-X.19 shared preamble:** Printed p. 445 mixes differential and cohomology indices and reverses the chain-map diagram's vertical arrows. The complexes concept records the printed formulas and uses $d^i:K^i\to K^{i+1}$, $H^i=\ker d^i/\operatorname{Im}d^{i-1}$, with the corresponding endpoint corrections.
- **X.17:** The printed hint ends with “Exercise 12”; the constant-rank splitting theorem applied directly is Exercise 16. The note preserves the reference and proves the result using X.15-X.16.
- **X.19(d):** The final reference to (b) concerns degree $i-1$, whereas the displayed split inclusions directly compute degree $i$. The solution proves both comparison isomorphisms with their degrees distinguished.

- **Chapter XI figure audit:** All three exercise pages (printed pp. 461-463 / PDF pp. 476-478) were inspected as high-resolution original PDF renders. No exercise depends on a source figure, diagram, or labeled geometric configuration; no attachment was created.
- **XI.1:** The printed strict positivity criterion omits the zero case. The note preserves the statement, gives $\alpha=0$ as a counterexample, and proves the corrected nonzero or weak-inequality formulation. The same omission occurs in the source example on printed p. 457 / PDF p. 472.
- **XI.3:** The printed representation permits $c\ge0$, while strict positivity forces $c>0$ in any representation. The hint divides by $\beta-\alpha$; the note handles the one-point interval $\alpha=\beta$ separately.
- **XI.5-XI.10 proof boundary:** The printed shared preamble says solutions to the real-place sequence are in the external [La 53] paper. The notes supply independent arguments and name any imported standard result; they do not attribute these proofs to the textbook.
- **XI.8:** The printed place is allowed to have any algebraic value field over $F$. A nonreal residue field gives a counterexample. The note proves the corrected statement with real algebraic values and records the valuation-extension theorem used in its counterexample as an external input.
- **XI.13:** The printed Bezout comment uses an undefined terminal index $m$ in $d_1\cdots d_m$ and does not specify projective counting. The note retains this text and uses the corrected generic projective count $d_1\cdots d_r$ as the exercise-permitted external input. Infinitesimal specialization handles arbitrary real closed base fields.

- **Chapter XII figure audit:** All five exercise pages (printed pp. 495-499 / PDF pp. 510-514) were inspected as high-resolution original PDF renders. No exercise depends on a source figure or diagram; no attachment was created.
- **XII.5:** The printed conclusion $\mathfrak o=A_{(p)}$ fails for a general Bézout domain because the center $P=\mathfrak m_{\mathfrak o}\cap A$ need not be principal. The note supplies a rank-two valuation-ring counterexample and proves the corrected $\mathfrak o=A_P$ with a uniformizer $p\in A$ for $\mathfrak o$.
- **XII.12:** Part (a) visibly prints “degree 1.” The Galois-polynomial argument for part (b) needs the stronger Schur prime-divisor lemma for arbitrary nonconstant integral polynomials, proved independently in the note.
- **XII.15-XII.16:** XII.15 uses an unspecified prime $p$ and needs residue characteristic $p>0$; XII.16 also needs a perfect residue field for its $p$-power-invariant Teichmüller representatives. The notes preserve the printed statements, give counterexamples, and prove the corrected assertions.
- **XII.17(b):** The printed “special system of Exercise 15” refers to Exercise 16. The embedding series uses powers $p^i$, including for a ramified target DVR; its ring-homomorphism proof derives from the earlier Witt ghost identities and the corrected Teichmüller construction.
- **XII.19:** The printed “converse of Exercise 17” means Exercise 18. The claim also uses the preceding curve-function-field setting; the note states this inherited scope and derives the DVR of the smooth rational point.
- **XII.20:** After moving to a non-compact Riemann surface $U$, the printed final phrase “associated with a complex number” should refer to a point of $U$. The note names the Weierstrass/Stein divisor and meromorphic-quotient theorems needed for the analytic extension.

- **Chapter XIII figure audit:** All eight exercise pages (printed pp. 545-552 / PDF pp. 560-567) were inspected as high-resolution original PDF renders. The chapter contains equations and displayed matrices, but no exercise depends on a source figure or diagram; no attachment was created.
- **XIII.3 and XIII.7:** Non-symmetric bilinear forms in XIII.3 give only the printed transpose's one-sided orthogonality; LA395 supplies a counterexample to two-sided orthogonality. XIII.7 calls quaternion conjugation an automorphism, though it reverses multiplication; LA399 preserves the wording and uses an involutive anti-automorphism.
- **XIII.14 and XIII.16:** The diagonal-normalizer conclusion fails over $\mathbb F_2$ for $n\ge2$; LA403 proves it under $|F|>2$. The printed $PSL_n(F)$ order in XIII.16 stops its product at $n-1$; LA405 records and corrects the missing final factor.
- **XIII.22 and XIII.25:** G329 independently proves the full mod-$p$ lifting theorem by a congruence filtration; the cited Serre result is not imported. LA413 uses the named Smith reduction theorem for a commutative principal ideal ring, including rings with zero divisors, as an external structural input.
- **XIII.23, XIII.30, and XIII.31:** XIII.23 uses an undefined $G$, interpreted in LA411 as $GL_2(k)$. XIII.30 writes $R[t]$ for a square-zero dual-number algebra; Rep119 states the quotient $R[t]/(t^2)$. XIII.31's two cocycle-splitting formulas use inverse witnesses, and its printed polynomial-selection hint excludes finite base fields; Gal138 proves the result uniformly by invariant-vector descent.
- **XIII.33-XIII.36:** LA415 preserves and resolves the negative-degree, low-$n$, and $m<d$ boundaries in XIII.33; LA416 names the Nullstellensatz input in XIII.34. Rep120 makes explicit the real/complex scalar switch in XIII.35 and completes the printed Howe-Tan recurrence argument. XIII.36's diagonal group $A$ is generally outside $SL_n(F)$ and its $E_{ii}$ are outside $\mathfrak{sl}_n(F)$; Rep121 states the corrected action and the $n\ge2$ irreducibility boundary.

## Next Archive Target

Chapter XIV, **Representation of One Endomorphism**, is the next archive target. Its source-label set and total have not yet been audited.
