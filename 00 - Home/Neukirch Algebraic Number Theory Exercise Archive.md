---
title: Neukirch Algebraic Number Theory Exercise Archive
aliases:
  - Neukirch Exercise Archive
  - Neukirch Algebraic Number Theory Archive Status
  - Neukirch Algebraic Number Theory Exercise Coverage
tags:
  - index
  - exercise-archive
  - neukirch-algebraic-number-theory
created: 2026-09-29
---

# Neukirch Algebraic Number Theory Exercise Archive

This dashboard records the archival coverage of the numbered exercises in Jürgen Neukirch's *Algebraic Number Theory*, English translation by Norbert Schappacher, Springer, 1999 (Grundlehren 322).

> [!info] Archive status and learning status
> An exercise is **archived** when the vault contains a source-identified exercise note for it. This is separate from the note's learning `status`: an archived exercise may remain `not-started`.

> [!note] Audit scope
> Chapter I is complete: **75 numbered source exercises, 75 notes, verified coverage 75/75**. Every section has its own source-label set and reconciliation below; §13 and §14 were checked to contain no numbered exercises. On 2026-10-20, the original pages were rechecked and all four exception sets were empty: missing labels, duplicate mappings, unexpected labels and unparsed Neukirch locators. The other six chapters have not had full exercise-set audits; an archived count of zero does not establish a zero source total.

## Chapter Coverage

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const chapterTitles = new Map([
  ["I", "Algebraic Integers"],
  ["II", "The Theory of Valuations"],
  ["III", "Riemann-Roch Theory"],
  ["IV", "Abstract Class Field Theory"],
  ["V", "Local Class Field Theory"],
  ["VI", "Global Class Field Theory"],
  ["VII", "Zeta Functions and L-series"],
]);

// Populate only after inspecting the original exercise pages.
// Each entry records { labels: [...], pages: "...", reconciled: false }.
// Labels include chapter, section, and exercise, for example "I.1.1".
// Set reconciled to true only after the post-archive source reconciliation.
const auditedCoverage = new Map([
  ["I", {
    labels: ["I.1.1", "I.1.2", "I.1.3", "I.1.4", "I.1.5", "I.1.6", "I.1.7", "I.2.1", "I.2.2", "I.2.3", "I.2.4", "I.2.5", "I.2.6", "I.2.7", "I.3.1", "I.3.2", "I.3.3", "I.3.4", "I.3.5", "I.3.6", "I.3.7", "I.3.8", "I.3.9", "I.3.10", "I.4.1", "I.4.2", "I.4.3", "I.5.1", "I.5.2", "I.5.3", "I.6.1", "I.6.2", "I.6.3", "I.6.4", "I.6.5", "I.6.6", "I.6.7", "I.7.1", "I.7.2", "I.7.3", "I.7.4", "I.7.5", "I.7.6", "I.8.1", "I.8.2", "I.8.3", "I.8.4", "I.8.5", "I.8.6", "I.8.7", "I.8.8", "I.8.9", "I.8.10", "I.8.11", "I.9.1", "I.9.2", "I.9.3", "I.9.4", "I.10.1", "I.10.2", "I.10.3", "I.10.4", "I.10.5", "I.11.1", "I.11.2", "I.11.3", "I.11.4", "I.11.5", "I.11.6", "I.11.7", "I.12.1", "I.12.2", "I.12.3", "I.12.4", "I.12.5"],
    pages: "printed pp. 5, 15, 23, 27-28, 34, 38, 43-44, 52-53, 58, 64-65, 71-72, 84 / PDF pp. 24, 34, 42, 46-47, 53, 57, 62-63, 71-72, 77, 83-84, 90-91, 103; sections 13-14 checked: no numbered exercises",
    reconciled: true,
  }],
]);
const auditedSections = new Map([
  ["I.1", {
    title: "The Gaussian Integers",
    labels: ["I.1.1", "I.1.2", "I.1.3", "I.1.4", "I.1.5", "I.1.6", "I.1.7"],
    pages: "printed p. 5 / PDF p. 24",
    reconciled: true,
  }],
  ["I.2", {
    title: "Integrality",
    labels: ["I.2.1", "I.2.2", "I.2.3", "I.2.4", "I.2.5", "I.2.6", "I.2.7"],
    pages: "printed p. 15 / PDF p. 34",
    reconciled: true,
  }],
  ["I.3", {
    title: "Ideals",
    labels: ["I.3.1", "I.3.2", "I.3.3", "I.3.4", "I.3.5", "I.3.6", "I.3.7", "I.3.8", "I.3.9", "I.3.10"],
    pages: "printed p. 23 / PDF p. 42",
    reconciled: true,
  }],
  ["I.4", {
    title: "Lattices",
    labels: ["I.4.1", "I.4.2", "I.4.3"],
    pages: "printed pp. 27-28 / PDF pp. 46-47",
    reconciled: true,
  }],
  ["I.5", {
    title: "Minkowski Theory",
    labels: ["I.5.1", "I.5.2", "I.5.3"],
    pages: "printed p. 34 / PDF p. 53",
    reconciled: true,
  }],
  ["I.6", {
    title: "The Class Number",
    labels: ["I.6.1", "I.6.2", "I.6.3", "I.6.4", "I.6.5", "I.6.6", "I.6.7"],
    pages: "printed p. 38 / PDF p. 57",
    reconciled: true,
  }],
  ["I.7", {
    title: "Dirichlet's Unit Theorem",
    labels: ["I.7.1", "I.7.2", "I.7.3", "I.7.4", "I.7.5", "I.7.6"],
    pages: "printed pp. 43-44 / PDF pp. 62-63",
    reconciled: true,
  }],
  ["I.8", {
    title: "Extensions of Dedekind Domains",
    labels: ["I.8.1", "I.8.2", "I.8.3", "I.8.4", "I.8.5", "I.8.6", "I.8.7", "I.8.8", "I.8.9", "I.8.10", "I.8.11"],
    pages: "printed pp. 52-53 / PDF pp. 71-72",
    reconciled: true,
  }],
  ["I.9", {
    title: "Hilbert's Ramification Theory",
    labels: ["I.9.1", "I.9.2", "I.9.3", "I.9.4"],
    pages: "printed p. 58 / PDF p. 77",
    reconciled: true,
  }],
  ["I.10", {
    title: "Cyclotomic Fields",
    labels: ["I.10.1", "I.10.2", "I.10.3", "I.10.4", "I.10.5"],
    pages: "printed pp. 64-65 / PDF pp. 83-84",
    reconciled: true,
  }],
  ["I.11", {
    title: "Localization",
    labels: ["I.11.1", "I.11.2", "I.11.3", "I.11.4", "I.11.5", "I.11.6", "I.11.7"],
    pages: "printed pp. 71-72 / PDF pp. 90-91",
    reconciled: true,
  }],
  ["I.12", {
    title: "Orders",
    labels: ["I.12.1", "I.12.2", "I.12.3", "I.12.4", "I.12.5"],
    pages: "printed p. 84 / PDF p. 103",
    reconciled: true,
  }],
  ["I.13", {
    title: "One-dimensional Schemes",
    labels: [],
    pages: "body printed pp. 84-93 / PDF pp. 103-112; no numbered exercises",
    reconciled: true,
  }],
  ["I.14", {
    title: "Function Fields",
    labels: [],
    pages: "body printed pp. 94-97 / PDF pp. 113-116; no numbered exercises",
    reconciled: true,
  }],
]);

const noteFiles = new Map([...chapterTitles.keys()].map(ch => [ch, new Set()]));
const mappings = new Map();
const unparsed = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapterTitles.has(chapter)) noteFiles.get(chapter).add(page.file.path);
    if (!chapterTitles.has(chapter) || !section || !exercise) {
      unparsed.push([page.file.link, segment]);
      continue;
    }
    const label = chapter + "." + Number(section) + "." + Number(exercise);
    if (!mappings.has(label)) {
      mappings.set(label, {
        chapter, section: Number(section), exercise: Number(exercise), notes: new Map(),
      });
    }
    mappings.get(label).notes.set(page.file.path, page);
  }
}

const rows = [];
const reconciliationRows = [];
for (const [chapter, title] of chapterTitles) {
  const found = new Set(
    [...mappings.entries()].filter(([, entry]) => entry.chapter === chapter).map(([label]) => label)
  );
  const duplicateCount = [...found].filter(label => mappings.get(label).notes.size > 1).length;
  const audit = auditedCoverage.get(chapter);
  let coverage = "Pending source-total audit";
  let status = found.size > 0 ? "Partial; source audit pending" : "Not archived";
  if (noteFiles.get(chapter).size > 0 && found.size === 0) status = "Needs locator review";
  if (audit) {
    const expected = new Set(audit.labels);
    const missing = [...expected].filter(label => !found.has(label));
    const unexpected = [...found].filter(label => !expected.has(label));
    coverage = [...found].filter(label => expected.has(label)).length + "/" + expected.size;
    const clean = missing.length === 0 && unexpected.length === 0
      && duplicateCount === 0 && unparsed.length === 0;
    status = audit.reconciled && clean ? "Complete" : "Source-audited; reconciliation pending";
    reconciliationRows.push([
      chapter, expected.size, missing.length, duplicateCount, unexpected.length,
      audit.pages, status,
    ]);
  }
  rows.push([chapter, title, found.size, noteFiles.get(chapter).size, coverage, status]);
}

dv.table(
  ["Chapter", "Original title", "Archived source exercises", "Note files",
   "Verified source coverage", "Archive status"],
  rows
);

dv.header(3, "Verified Chapter Coverage");
if (reconciliationRows.length === 0) {
  dv.paragraph("No chapter has completed a source-total audit yet. Missing and unexpected label counts are unknown until the source sets are recorded.");
} else {
  dv.table(
    ["Chapter", "Verified total", "Missing", "Duplicate mappings", "Unexpected",
     "Exercise pages", "Archive status"],
    reconciliationRows
  );
}

dv.header(3, "Verified Section Coverage");
const sectionRows = [];
for (const [section, audit] of auditedSections) {
  const expected = new Set(audit.labels);
  const found = new Set([...mappings.keys()].filter(label => label.startsWith(section + ".")));
  const missing = [...expected].filter(label => !found.has(label));
  const unexpected = [...found].filter(label => !expected.has(label));
  const duplicates = [...found].filter(label => mappings.get(label).notes.size > 1);
  const clean = missing.length === 0 && unexpected.length === 0
    && duplicates.length === 0 && unparsed.length === 0;
  sectionRows.push([
    section, audit.title, [...expected].filter(label => found.has(label)).length + "/" + expected.size,
    missing.length, duplicates.length, unexpected.length, audit.pages,
    audit.reconciled && clean ? "Complete" : "Source-audited; reconciliation pending",
  ]);
}
dv.table(
  ["Section", "Original title", "Verified coverage", "Missing", "Duplicate mappings",
   "Unexpected", "Exercise pages", "Archive status"], sectionRows
);

dv.header(3, "Source Locator Checks");
const duplicates = [...mappings.entries()].filter(([, entry]) => entry.notes.size > 1);
dv.paragraph("Duplicate mappings: " + duplicates.length + ". Unparsed source locators: " + unparsed.length + ".");
if (duplicates.length > 0) {
  dv.table(["Source exercise", "Mapped notes"], duplicates.map(([label, entry]) =>
    [label, [...entry.notes.values()].map(page => page.file.link)]));
}
if (unparsed.length > 0) {
  dv.table(["Note", "Source segment needing review"], unparsed);
}

```

## Chapter Scope Notes

| Chapter | Original title | Source exercise audit |
|---------|----------------|-----------------------|
| I | Algebraic Integers | Complete: 75/75 source exercises in 75 notes; §1–§14 reconciled. This batch added 44 notes and reused R329 for I.8.2. §13–§14 have no numbered exercises. Source issues remain visibly recorded in their notes and section warnings. |
| II | The Theory of Valuations | Pending |
| III | Riemann-Roch Theory | Pending |
| IV | Abstract Class Field Theory | Pending |
| V | Local Class Field Theory | Pending |
| VI | Global Class Field Theory | Pending |
| VII | Zeta Functions and L-series | Pending |

The chapter titles and order were visually checked on all three original contents pages. The contents end with the bibliography and index and do not list a separate appendix. This contents check is not an audit of the full exercise corpus. [S4, Contents, printed pp. xv-xvii, PDF pp. 16-18]

## Source Exercise to Archived Note Mapping

Each section has its own query under a chapter heading. These Markdown headings can be folded and selected in the outline. A section table matches the exact edition, chapter, and section in the same source segment; exercise numbers are sorted numerically within that section.

### Chapter I — Algebraic Integers

#### I.1 — The Gaussian Integers

Source-audited labels: I.1.1-I.1.7, printed p. 5 / PDF p. 24. The verified section coverage above reports the current reconciliation status.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 1;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.2 — Integrality

Source-audited and reconciled on 2026-10-11: the ordered labels are I.2.1-I.2.7, all on printed p. 15 / PDF p. 34. The following page begins §3, confirming the end of the exercise group. Verified coverage: 7/7; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. No source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 2;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.3 — Ideals

Source-audited and reconciled on 2026-10-17: the ordered labels are I.3.1-I.3.10, all on printed p. 23 / PDF p. 42. The exercise group precedes the §4 body heading on the same page, despite the §4 running header. The section begins on printed p. 16 / PDF p. 35. Verified coverage: 10/10; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. No source figure is required.

> [!warning] Source wording and scope in Exercises I.3.3 and I.3.5
> I.3.3 implicitly needs a genuine quadratic field: under the usual definition of squarefree, $d=1$ is allowed by the printed wording and gives a counterexample. Its note preserves the original and proves the intended $d\ne1$ version.
>
> I.3.5 calls the quotient a "principal ideal domain." This fails for $\mathbb Z/4\mathbb Z$. Its note preserves the original statement, gives the counterexample, and proves the intended principal ideal **ring** version, allowing zero divisors. Its printed hint also omits the zero ideal from the list of proper quotient ideals. These source issues do not change the one-note-per-number archival count.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 3;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.4 — Lattices

Source-audited and reconciled on 2026-10-17: the ordered labels are I.4.1-I.4.3. Exercises 1-2 are on printed p. 27 / PDF p. 46; Exercise 3 is on printed p. 28 / PDF p. 47, immediately before the §5 body heading. The section begins on printed p. 23 / PDF p. 42. Verified coverage: 3/3; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. No source figure is required.

> [!note] Source precision in Exercise I.4.3
> The printed conclusion does not require the integer vector to be nonzero, so the zero vector already satisfies it. The archived note preserves that true statement and derives the stronger nonzero-vector conclusion from the printed strict determinant bound. I.4.2 explicitly works in positive dimension for its nonzero-point equality conclusion and records the zero-dimensional exception.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 4;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.5 — Minkowski Theory

Source-audited and reconciled on 2026-10-17: the ordered labels are I.5.1-I.5.3, all on printed p. 34 / PDF p. 53, immediately before the §6 body heading. The section begins on printed p. 28 / PDF p. 47. Verified coverage: 3/3, mapping one-to-one to LA537-LA539; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. All three learning states remain `not-started`. No source figure is required.

> [!warning] Source parameter range in Exercise I.5.2
> The printed volume formula does not specify the range of $t$. It holds for $t\ge0$; for $t<0$ the set is empty while the printed polynomial is nonzero. The note preserves the original, proves the intended $t>0$ calculation, and states the full real-parameter version. I.5.3 uses only positive parameters and separately justifies its non-strict endpoint by the minimum positive integer norm.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 5;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.6 — The Class Number

Source-audited and reconciled on 2026-10-20: ordered labels I.6.1-I.6.7, printed p. 38 / PDF p. 57. Verified coverage 7/7; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Invalid discriminant entry in I.6.2
> The source prints positive $11$, which is not a quadratic-field discriminant. Its note preserves the entry, explains its impossibility, and proves the remaining seven valid cases without guessing a replacement.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 6;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.7 — Dirichlet's Unit Theorem

Source-audited and reconciled on 2026-10-20: ordered labels I.7.1-I.7.6, printed pp. 43–44 / PDF pp. 62–63. Verified coverage 6/6; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 7;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.8 — Extensions of Dedekind Domains

Source-audited and reconciled on 2026-10-20: ordered labels I.8.1-I.8.11, printed pp. 52–53 / PDF pp. 71–72. Verified coverage 11/11; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Source statement refuted
> Exercise I.8.2's prescribed coprime-conductor claim is false even for a separable cubic number field. Its archived note preserves the full mathematical claim and gives an independent integral-basis calculation, the quotient $\mathcal O_L/2\mathcal O_L\simeq\mathbb F_2^3$, and a contradiction for every integral primitive element. Archival coverage records this source issue; it does not treat the printed claim as a proved theorem.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const matches = [];
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== "I" || Number(section) !== 8 || !exercise) continue;
    matches.push({
      number: Number(exercise), path: page.file.path,
      row: ["I.8." + Number(exercise), page.file.link, page.topic,
        page.status, page.source_status ?? "See note"],
    });
  }
}
matches.sort((a, b) => a.number - b.number || a.path.localeCompare(b.path));
dv.table(["Source exercise", "Archived note", "Topic", "Learning status", "Source status"],
  matches.map(entry => entry.row));
```

#### I.9 — Hilbert's Ramification Theory

Source-audited and reconciled on 2026-10-20: ordered labels I.9.1-I.9.4, printed p. 58 / PDF p. 77. Verified coverage 4/4; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Incorrect exponent in I.9.2
> The source sets the Frobenius exponent to the residue-extension degree. Its note preserves that formula, gives a counterexample in $\mathbb Q(i)$ above $3$, and proves the corrected statement with $q=\#\kappa(\mathfrak p)$. The term nonsplit in I.9.1 means exactly one prime above the base prime.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 9;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.10 — Cyclotomic Fields

Source-audited and reconciled on 2026-10-20: ordered labels I.10.1-I.10.5, printed pp. 64–65 / PDF pp. 83–84. Verified coverage 5/5; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 10;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.11 — Localization

Source-audited and reconciled on 2026-10-20: ordered labels I.11.1-I.11.7, printed pp. 71–72 / PDF pp. 90–91. Verified coverage 7/7; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 11;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.12 — Orders

Source-audited and reconciled on 2026-10-20: ordered labels I.12.1-I.12.5, printed p. 84 / PDF p. 103. Verified coverage 5/5; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Reversed parameter in the hint to I.12.1
> The printed parametrization $X=t^2-1$, $Y=t(t^2-1)$ requires $t=Y/X$, although the hint prints $t=X/Y$. The note preserves the original, explains the correction, and proves the printed kernel and all four normalizations.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 12;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.13 — One-dimensional Schemes

Source-audited and reconciled on 2026-10-20: no numbered exercises occur in this section (body printed pp. 84–93 / PDF pp. 103–112). The expected source-label set is empty, verified total 0 and coverage 0/0. This is a checked zero-exercise section, rather than an unaudited or missing batch. No exercise note is created.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 13;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.14 — Function Fields

Source-audited and reconciled on 2026-10-20: no numbered exercises occur in this section (body printed pp. 94–97 / PDF pp. 113–116). The expected source-label set is empty, verified total 0 and coverage 0/0. This is a checked zero-exercise section, rather than an unaudited or missing batch. No exercise note is created.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 14;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

### Chapter II — The Theory of Valuations

Section archival has not started. Add a separate section heading and query when its source group is audited.

### Chapter III — Riemann-Roch Theory

Section archival has not started. Add a separate section heading and query when its source group is audited.

### Chapter IV — Abstract Class Field Theory

Section archival has not started. Add a separate section heading and query when its source group is audited.

### Chapter V — Local Class Field Theory

Section archival has not started. Add a separate section heading and query when its source group is audited.

### Chapter VI — Global Class Field Theory

Section archival has not started. Add a separate section heading and query when its source group is audited.

### Chapter VII — Zeta Functions and L-series

Section archival has not started. Add a separate section heading and query when its source group is audited.

## Source Identity and Numbering

- **Source:** S4, Jürgen Neukirch, *Algebraic Number Theory*, English translation by Norbert Schappacher, Springer, 1999, Grundlehren 322.
- **Registered original PDF:** `E:/project/math/ant/input/ANT_neurich.pdf`. The filename misspells the author's surname; this is the registered source, not a different edition.
- **Exercise identity:** chapter + section + numbered exercise. Use archive labels such as `I.1.1` and `I.2.1`; preserve all subparts in the same note.
- **Canonical source prefix:** `Jürgen Neukirch, Algebraic Number Theory, English ed., 1999`.
- **Source anchors:** every exercise note must record its chapter, section, original exercise number, printed page, and physical PDF page.

For example, the following locator identifies the first exercise of Chapter I, §1:

```yaml
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 1, printed p. 5, PDF p. 24"
```

The exercise groups of Chapter I §1 and §2 both begin with Exercise 1. They establish the section-sensitive numbering convention. The complete Chapter I total is independently established by the full audit above. [S4, Ch. I, §1, Exercises, printed p. 5, PDF p. 24; §2, Exercises, printed p. 15, PDF p. 34]

> [!warning] Section boundaries
> Printed p. 5 / PDF p. 24 carries a §2 running header, but the exercises above the §2 body heading belong to **§1**. Determine ownership from the surrounding text and section boundaries, not the running header.

## Counting and Reconciliation Rules

1. Count one numbered source exercise once, regardless of its subparts or the note's learning status. A section number is required because exercise numbers restart.
2. Parse each semicolon-separated source segment independently. Each segment counted here must begin with the canonical edition prefix; references to Lang, Artin, or other books do not contribute.
3. Keep **archived source exercises**, **note files**, and **verified source totals** distinct. Exercise notes are discovered through `#exercise` and `source`, across all topic folders.
4. Before a chapter or section batch, inspect its exercise pages and record the ordered source-label set, verified total, and printed/PDF page anchors in this dashboard. Update `auditedSections` for checked sections and `auditedCoverage` only for a checked whole chapter; a completed section does not establish the full chapter total.
5. After archival, reconcile expected labels against note provenance. Mark a chapter `Complete` only after missing labels, duplicate mappings, unexpected labels, and unparsed locators are all absent and the total agrees.
6. Preserve durable coverage and source-status records after reconciliation; remove temporary batch-planning material. Archive completeness does not certify every mathematical claim or change any learning status.
7. For every new section batch, add or update its own Markdown subsection and independent query under the correct chapter in the mapping area. Match both chapter and section exactly within the same source segment; do not append its notes to another section table. Keep the chapter overview separate from these section-level mappings.

## Classification and Source Status

Exercises will be routed by the primary computational or proof method, following the existing vault policy. Chapter titles alone do not determine their destination. Cross-topic prerequisites belong under `Related Concepts`.

Future notes must distinguish the printed problem, independently derived solutions, imported results, computational checks, and source errors or unresolved ambiguities. Preserve any defective printed statement visibly before presenting a corrected formulation.

Chapter I §1 was source-audited on 2026-09-29 against the ordered labels I.1.1-I.1.7, all on printed p. 5 / PDF p. 24. The complete section text on printed pp. 1-5 / PDF pp. 20-24 was visually checked, including the exercise group's end before the §2 heading. No exercise requires a source figure. The separate full-chapter source audit and reconciliation were completed on 2026-10-20, as recorded above.

On 2026-09-29, all seven labels were reconciled one-to-one with R322-R328 in Ring Theory: no missing labels, duplicate mappings, unexpected labels, or unparsed locators remain in this section. All seven notes preserve the source problem, contain progressive hints and an independently derived solution, and remain `not-started`. Mathematical cross-review covered every solution. Existing concepts suffice; no new concept note or topic directory was needed.

Exercise I.1.2 makes explicit the intended positive-integer exponent convention and handles zero factors. I.1.3 preserves the original Gaussian-factorization hint and proves both directions of the parametrization. I.1.4 specifies an order compatible with ring operations. I.1.5-I.1.6 distinguish the specified quadratic subrings from the full rings of integers. I.1.6 proves infinitude by pigeonhole approximation and congruent equal-norm elements, without importing Dirichlet's unit theorem. I.1.7 proves Euclidean division using the absolute norm, the full unit group, and the complete prime-element classification, including the square criterion for 2 modulo an odd prime. No incorrect printed assertion was identified in this batch.

Chapter I §2 was source-audited on 2026-10-11 against the ordered labels I.2.1-I.2.7, all on printed p. 15 / PDF p. 34. The entire exercise page and the following §3 opening were visually checked. All seven labels were reconciled one-to-one with R330-R335 and LA532: no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. Every note preserves the problem, supplies progressive hints and a complete independent derivation, and remains `not-started`. Mathematical cross-review covered all seven solutions; existing concepts suffice and no new directory or concept note was required.

I.2.1 simplifies its fraction before checking a monic integer equation. I.2.2 proves polynomial normality in arbitrary characteristic using roots-of-unity coefficient sums and two coprime multipliers. I.2.3 computes the cusp kernel and exhibits a missing integral element in the quotient's own fraction field. I.2.4 treats positive and negative squarefree radicands and verifies the uniform basis $(d+\sqrt d)/2$. I.2.5 proves maximality of the cube-root-of-two power order by excluding denominators 2 and 3. I.2.6 uses discriminant -107 to establish its integral basis and distinguishes the original proper power order from the full ring generated by a different element. I.2.7 follows the printed determinant hint, proving that the parity-symmetric combinations are rational integers. No incorrect printed assertion was identified in this section. The full chapter was separately audited and reconciled on 2026-10-20.

Chapter I §4 was source-audited and reconciled on 2026-10-17 against I.4.1-I.4.3, printed pp. 27-28 / PDF pp. 46-47. The three labels map one-to-one to LA534-LA536, with all source-locator exception sets empty. Every note retains the original exercise, supplies progressive hints and a complete independent derivation, and remains `not-started`. The compact-quotient proof specifies the quotient topology, the equality exercise keeps both tasks together, and the linear-forms proof preserves the printed wording while deriving a nonzero integer vector. Existing lattice concepts were expanded with the source's full-rank convention, covolume and Minkowski theorem, retaining dynamic exercise backlinks and existing metadata. No new concept or directory was needed; the complete chapter total was subsequently verified as 75 on 2026-10-20.

Chapter I §5 was source-audited and reconciled on 2026-10-17 against I.5.1-I.5.3, all on printed p. 34 / PDF p. 53. The three labels map one-to-one to LA537-LA539, with all source-locator exception sets empty. Every note retains the original exercise, supplies progressive hints and a complete independent derivation, and remains `not-started`. I.5.1 supplies an explicit field-dependent embedding bound; I.5.2 computes canonical volume by polar coordinates and an elementary simplex integral while recording the omitted parameter range; I.5.3 derives the Minkowski norm bound and proves its endpoint with the least positive integer norm. Existing lattice concepts were expanded with Minkowski space, the canonical metric and its $2^s$ measure factor, ideal-lattice covolumes, and the all-embedding norm convention. Dynamic exercise backlinks and existing concept metadata are retained. No new concept or directory was needed; the full chapter total was subsequently verified as 75 on 2026-10-20.

Chapter I was finally source-audited and reconciled on 2026-10-20. The ordered section totals are 7, 7, 10, 3, 3, 7, 6, 11, 4, 5, 7, 5, 0 and 0, totaling 75. The original §1–§5 exercise pages (printed pp. 5, 15, 23, 27–28 and 34 / PDF pp. 24, 34, 42, 46–47 and 53) were re-rendered at 200 dpi and their 30 labels rechecked. Together with the independently checked §6–§12 groups, the expected 75 labels map to 75 distinct notes, with no missing, duplicate, unexpected or unparsed entries. Sections §13 and §14 contain no numbered exercises; §14 ends at printed p. 97 / PDF p. 116, PDF p. 117 is blank, and Chapter II begins at printed p. 99 / PDF p. 118. The permanent chapter and section ledgers above retain the source anchors and final status. Learning status remains separate from archive coverage.

## Next Archive Target

**Chapter II §1 — The p-adic Numbers.** Chapter I is complete at 75/75 after the full source-set audit and one-to-one reconciliation. This pointer records the next batch; Chapter II is outside the completed batch.

## Related Archives

- [[00 - Home/Artin Exercise Archive|Artin Exercise Archive]]
- [[00 - Home/Lang Algebra Exercise Archive|Lang Algebra Exercise Archive]]
- [[00 - Home/Index|Home]]
