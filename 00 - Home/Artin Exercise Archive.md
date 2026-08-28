---
title: Artin Exercise Archive
aliases:
  - Artin Archive Status
  - Artin Algebra Exercise Coverage
tags:
  - index
  - exercise-archive
  - artin-algebra
created: 2026-08-27
---

# Artin Exercise Archive

This dashboard records the archival coverage of the numbered exercises in Michael Artin's *Algebra*, second edition.

> [!info] Archive status and learning status
> An exercise is **archived** when the vault contains a source-identified exercise note for it. This is separate from the note's learning `status`: an archived exercise may remain `not-started`.

## Chapter and Appendix Coverage

```dataviewjs
const artinSource = "Michael Artin, Algebra, 2nd ed.";
const chapterTitles = new Map([
  [1, "Matrices"],
  [2, "Groups"],
  [3, "Vector Spaces"],
  [4, "Linear Operators"],
  [5, "Applications of Linear Operators"],
  [6, "Symmetry"],
  [7, "More Group Theory"],
  [8, "Bilinear Forms"],
  [9, "Linear Groups"],
  [10, "Group Representations"],
  [11, "Rings"],
  [12, "Factoring"],
  [13, "Quadratic Number Fields"],
  [14, "Linear Algebra in a Ring"],
  [15, "Fields"],
  [16, "Galois Theory"],
  ["A", "Background Material"],
]);
const pages = dv.pages("#exercise")
  .where(page => typeof page.source === "string" && page.source.includes(artinSource));

function parseSourceUnit(segment) {
  const chapterMatch = segment.match(/Ch\.\s*(\d+)/);
  if (chapterMatch) return Number(chapterMatch[1]);
  if (/\bAppendix(?:\s+A)?\b/i.test(segment) || /\bSection\s+A\.\d+\b/i.test(segment)) {
    return "A";
  }
  return null;
}

function parseExerciseLocator(segment) {
  const chapter = parseSourceUnit(segment);
  if (chapter === null) return null;
  if (chapter === "A") {
    const appendixExercise = segment.match(/(?:Ex\.|Exercise)\s*A\.\s*0*(\d+)/i);
    return appendixExercise ? { chapter, label: `A.${Number(appendixExercise[1])}` } : null;
  }

  const sectionExercise = segment.match(
    /(?:Section|§)\s*(\d+)[^;]*?(?:Ex\.|Exercise)\s*(\d+\.\d+)/
  );
  if (sectionExercise) {
    return { chapter, label: sectionExercise[2] };
  }

  const miscellaneousExercise = segment.match(
    /Miscellaneous(?:\s+Problems?)?[^;]*?(?:Ex\.|Exercise)?\s*M\.(\d+)/
  );
  if (miscellaneousExercise) {
    return { chapter, label: `M.${miscellaneousExercise[1]}` };
  }

  const fallbackExercise = segment.match(/(?:Ex\.|Exercise)\s*(\d+\.\d+)/);
  return fallbackExercise ? { chapter, label: fallbackExercise[1] } : null;
}

const noteFiles = new Map(
  [...chapterTitles.keys()].map(chapter => [chapter, new Set()])
);
const sourceExercises = new Map(
  [...chapterTitles.keys()].map(chapter => [chapter, new Set()])
);

for (const page of pages) {
  for (const segment of page.source.split(";")) {
    const sourceUnit = parseSourceUnit(segment);
    if (sourceUnit !== null) noteFiles.get(sourceUnit)?.add(page.file.path);

    const locator = parseExerciseLocator(segment);
    if (locator && sourceExercises.has(locator.chapter)) {
      sourceExercises.get(locator.chapter).add(locator.label);
    }
  }
}

const auditedCoverage = new Map([
  [1,  { covered: 53, total: 53, status: "Complete" }],
  [2,  { covered: 101, total: 101, status: "Complete" }],
  [3,  { covered: 39, total: 39, status: "Complete" }],
  [4,  { covered: 62, total: 62, status: "Complete" }],
  [5,  { covered: 29, total: 29, status: "Complete" }],
  [6,  { covered: 77, total: 77, status: "Complete" }],
  [7,  { covered: 96, total: 96, status: "Complete" }],
  [8,  { covered: 81, total: 81, status: "Complete" }],
  [9,  { covered: 74, total: 74, status: "Complete" }],
  [10, { covered: 68, total: 68, status: "Complete" }],
  [11, { covered: 72, total: 72, status: "Complete" }],
  [12, { covered: 47, total: 47, status: "Complete" }],
  [13, { covered: 44, total: 44, status: "Complete" }],
  [14, { covered: 55, total: 55, status: "Complete" }],
  [15, { covered: 60, total: 60, status: "Complete" }],
  [16, { covered: 90, total: 90, status: "Complete" }],
  ["A", { covered: 15, total: 15, status: "Complete" }],
]);

const rows = [];
for (const [chapter, title] of chapterTitles) {
  const exerciseCount = sourceExercises.get(chapter)?.size ?? 0;
  const noteCount = noteFiles.get(chapter)?.size ?? 0;
  const audit = auditedCoverage.get(chapter);
  const coverage = audit ? `${audit.covered}/${audit.total}` : "Pending source-total audit";
  const status = audit?.status ?? (noteCount > 0 ? "Partial" : "Not archived");
  rows.push([chapter === "A" ? "Appendix" : chapter, title, exerciseCount, noteCount, coverage, status]);
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
> “Archived source exercises” and “Note files” are calculated live from exercise tags and source metadata. They need not be equal: one note can carry provenance from more than one source exercise, while several notes may archive the same source exercise. “Verified source coverage” is asserted only for chapters or the appendix whose full exercise list has been audited against the original PDF.

Chapter and appendix titles are transcribed from the original contents pages. [S1, Contents, printed pp. v–ix, PDF pp. 1–5]

## Chapter Scope Notes

| Chapter / appendix | Original title | Current archive scope | Status note |
|---:|---|---|---|
| 1 | Matrices | All 53 source exercises | Complete |
| 2 | Groups | All 101 source exercises | Complete |
| 3 | Vector Spaces | All 39 source exercises | Complete |
| 4 | Linear Operators | All 62 source exercises | Complete; two exercises reuse notes carrying Chapter 1 provenance |
| 5 | Applications of Linear Operators | All 29 source exercises | Complete |
| 6 | Symmetry | All 77 source exercises | Complete; all numbered and miscellaneous exercises are represented once |
| 7 | More Group Theory | All 96 source exercises | Complete; all numbered and miscellaneous exercises are represented once |
| 8 | Bilinear Forms | All 81 source exercises | Complete; the eight former duplicate pairs were consolidated into LA11–LA18 |
| 9 | Linear Groups | All 74 source exercises | Complete; source-label audit found no gaps or duplicates |
| 10 | Group Representations | All 68 source exercises: 53 section exercises and M.1–M.15 | Complete; source exercise labels reconciled with no omissions, duplicates, unexpected labels, or unparsed exercise locators |
| 11 | Rings | All 72 source exercises: 65 section exercises and M.1–M.7 | Complete; all source labels map one-to-one to 72 notes with no omissions or duplicates |
| 12 | Factoring | All 47 source exercises: 45 section exercises and M.1–M.2 | Complete; all source labels map one-to-one to R106–R150 and G267–G268 |
| 13 | Quadratic Number Fields | All 44 source exercises: 40 section exercises and M.1–M.4 | Complete; all source labels map one-to-one to F34–F37, R151–R187, and LA309–LA311 |
| 14 | Linear Algebra in a Ring | All 55 source exercises: 45 section exercises and M.1–M.10 | Complete; all source labels map one-to-one to LA312–LA350, R188–R193, G269–G277, and F38 |
| 15 | Fields | All 60 source exercises: 53 section exercises and M.1–M.7 | Complete; all source labels map one-to-one to 60 notes across Field, Galois, Group, Ring, and Arithmetic Geometry topics |
| 16 | Galois Theory | All 90 source exercises: 77 section exercises and M.1–M.13 | Complete; all source labels and page anchors reconcile one-to-one with 90 notes |
| Appendix | Background Material | All 15 source exercises, A.1–A.15 | Complete; all source labels map one-to-one to R194–R205, G280, and AG15–AG16; Exercise A.7's zero-polynomial boundary is visibly flagged in R199 |


## Source Exercise to Archived Note Mapping

Each chapter and the appendix below use static Markdown headings, so they appear in Obsidian's document outline. The tables remain generated from exercise frontmatter; if one source exercise has two archived notes, both mappings appear as separate rows.

```dataviewjs
const artinSource = "Michael Artin, Algebra, 2nd ed.";
const pages = dv.pages("#exercise")
  .where(page => typeof page.source === "string" && page.source.includes(artinSource));

function parseSourceUnit(segment) {
  const chapterMatch = segment.match(/Ch\.\s*(\d+)/);
  if (chapterMatch) return Number(chapterMatch[1]);
  if (/\bAppendix(?:\s+A)?\b/i.test(segment) || /\bSection\s+A\.\d+\b/i.test(segment)) {
    return "A";
  }
  return null;
}

function parseExerciseLocator(segment) {
  const chapter = parseSourceUnit(segment);
  if (chapter === null) return null;
  if (chapter === "A") {
    const appendixExercise = segment.match(/(?:Ex\.|Exercise)\s*A\.\s*0*(\d+)/i);
    return appendixExercise ? { chapter, label: `A.${Number(appendixExercise[1])}` } : null;
  }

  const sectionExercise = segment.match(
    /(?:Section|§)\s*(\d+)[^;]*?(?:Ex\.|Exercise)\s*(\d+\.\d+)/
  );
  if (sectionExercise) {
    return { chapter, label: sectionExercise[2] };
  }

  const miscellaneousExercise = segment.match(
    /Miscellaneous(?:\s+Problems?)?[^;]*?(?:Ex\.|Exercise)?\s*M\.(\d+)/
  );
  if (miscellaneousExercise) {
    return { chapter, label: `M.${miscellaneousExercise[1]}` };
  }

  const fallbackExercise = segment.match(/(?:Ex\.|Exercise)\s*(\d+\.\d+)/);
  return fallbackExercise ? { chapter, label: fallbackExercise[1] } : null;
}

const mapping = new Map();
const unparsed = [];

for (const page of pages) {
  let foundExercise = false;
  for (const segment of page.source.split(";")) {
    const locator = parseExerciseLocator(segment);
    if (!locator) continue;

    foundExercise = true;
    const key = `${locator.chapter}:${locator.label}`;
    if (!mapping.has(key)) {
      mapping.set(key, { ...locator, notes: [] });
    }

    const record = mapping.get(key);
    if (!record.notes.some(note => note.path === page.file.path)) {
      record.notes.push({
        path: page.file.path,
        link: page.file.link,
        topic: page.topic ?? "—",
        status: page.status ?? "—",
      });
    }
  }

  if (!foundExercise && (/Ch\.\s*\d+/.test(page.source) || /\bAppendix(?:\s+A)?\b/i.test(page.source))) {
    unparsed.push(page.file.link);
  }
}

const entries = [...mapping.values()];

dv.paragraph(
  `${entries.length} unique Artin source exercises are currently mapped. ` +
  `${unparsed.length} Artin-based exercise note(s) have no source-exercise locator and are excluded from the mapping.`
);
```

### Chapter 1 — Matrices

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 1,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 2 — Groups

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 2,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 3 — Vector Spaces

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 3,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 4 — Linear Operators

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 4,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 5 — Applications of Linear Operators

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 5,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 6 — Symmetry

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 6,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 7 — More Group Theory

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 7,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 8 — Bilinear Forms

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 8,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 9 — Linear Groups

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 9,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 10 — Group Representations

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 10,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 11 — Rings

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 11,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 12 — Factoring

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 12,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 13 — Quadratic Number Fields

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 13,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 14 — Linear Algebra in a Ring

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 14,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 15 — Fields

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 15,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Chapter 16 — Galois Theory

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN choice(
  contains(locator, "M."),
  regexreplace(locator, ".*(M\\.[0-9]+).*", "$1"),
  regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*([0-9]+\\.[0-9]+).*", "$1")
) AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Ch. 16,")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN choice(startswith(exercise, "M."), 1, 0) AS exercise_group
FLATTEN choice(exercise_group = 1, 999, number(split(exercise, "\\.")[0])) AS section_order
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_group ASC, section_order ASC, exercise_order ASC, file.name ASC
```

### Appendix — Background Material

```dataview
TABLE WITHOUT ID
  exercise AS "Artin exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
FLATTEN regexreplace(locator, ".*(?:Ex\\.|Exercise)\\s*(A\\.[0-9]+).*", "$1") AS exercise
WHERE contains(source, "Michael Artin, Algebra, 2nd ed.")
  AND contains(locator, "Appendix")
  AND (contains(locator, "Ex.") OR contains(locator, "Exercise"))
FLATTEN number(split(exercise, "\\.")[1]) AS exercise_order
SORT exercise_order ASC, file.name ASC
```

> [!note] Non-source exercise boundary
> [[04 - Linear Algebra and Modules/Exercises/Exercise LA1 - Rank-Nullity|Exercise LA1: Rank–Nullity]] is adapted from Artin's Theorem 4.1.6 rather than from a numbered source exercise. It is therefore counted as an Artin-based note but intentionally excluded from the source-exercise mapping.
