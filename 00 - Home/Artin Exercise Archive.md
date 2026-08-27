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

## Chapter Coverage

```dataviewjs
const artinSource = "Michael Artin, Algebra, 2nd ed.";
const pages = dv.pages("#exercise")
  .where(page => typeof page.source === "string" && page.source.includes(artinSource));

function parseExerciseLocator(segment) {
  const chapterMatch = segment.match(/Ch\.\s*(\d+)/);
  if (!chapterMatch) return null;

  const chapter = Number(chapterMatch[1]);
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
  Array.from({ length: 16 }, (_, index) => [index + 1, new Set()])
);
const sourceExercises = new Map(
  Array.from({ length: 16 }, (_, index) => [index + 1, new Set()])
);

for (const page of pages) {
  for (const segment of page.source.split(";")) {
    const chapterMatch = segment.match(/Ch\.\s*(\d+)/);
    if (chapterMatch) {
      const chapter = Number(chapterMatch[1]);
      noteFiles.get(chapter)?.add(page.file.path);
    }

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
  [10, { covered: 0, total: 63, status: "Ready for archival planning" }],
  [15, { covered: 29, total: 60, status: "Partial — 31 missing" }],
  [16, { covered: 90, total: 90, status: "Complete" }],
]);

const rows = [];
for (let chapter = 1; chapter <= 16; chapter++) {
  const exerciseCount = sourceExercises.get(chapter)?.size ?? 0;
  const noteCount = noteFiles.get(chapter)?.size ?? 0;
  const audit = auditedCoverage.get(chapter);
  const coverage = audit ? `${audit.covered}/${audit.total}` : "Pending source-total audit";
  const status = audit?.status ?? (noteCount > 0 ? "Partial" : "Not archived");
  rows.push([chapter, exerciseCount, noteCount, coverage, status]);
}

dv.table(
  [
    "Chapter",
    "Archived source exercises",
    "Note files",
    "Verified source coverage",
    "Archive status",
  ],
  rows
);
```

> [!note] Counting boundary
> “Archived source exercises” and “Note files” are calculated live from exercise tags and source metadata. They need not be equal: one note can carry provenance from more than one source exercise, while several notes may archive the same source exercise. “Verified source coverage” is asserted only for chapters whose full exercise list has been audited against the original PDF.

> [!success] Pre-Chapter 10 remediation complete
> Chapters 6–9 have been re-audited against the source metadata. Each now has complete one-to-one source-exercise coverage with no duplicate mappings. Chapter 10 is ready for its archival plan. The Chapter 15 partial archive is recorded accurately but is not part of this chronological cleanup.

## Chapter Scope Notes

| Chapter | Current archive scope | Status note |
|---:|---|---|
| 1 | All 53 source exercises | Complete |
| 2 | All 101 source exercises | Complete |
| 3 | All 39 source exercises | Complete |
| 4 | All 62 source exercises | Complete; two exercises reuse notes carrying Chapter 1 provenance |
| 5 | All 29 source exercises | Complete |
| 6 | All 77 source exercises | Complete; all numbered and miscellaneous exercises are represented once |
| 7 | All 96 source exercises | Complete; all numbered and miscellaneous exercises are represented once |
| 8 | All 81 source exercises | Complete; the eight former duplicate pairs were consolidated into LA11–LA18 |
| 9 | All 74 source exercises | Complete; source-label audit found no gaps or duplicates |
| 10 | No exercise notes yet | Ready for the next archival plan |
| 11 | No exercise notes yet | Not archived |
| 12 | No exercise notes yet | Not archived |
| 13 | No exercise notes yet | Not archived |
| 14 | No exercise notes yet | Not archived |
| 15 | 29 of 60: Exercises 6.3, 7.1–7.14, 8.1–8.2, 9.1–9.5, 10.1–10.4, and M.1–M.3 | Partial; 31 source exercises remain |
| 16 | All 90 source exercises | Complete |

Source-total audit anchors: [S1, Ch. 6, Exercises, printed pp. 188–194, PDF pp. 200–206]; [S1, Ch. 7, Exercises, printed pp. 221–227, PDF pp. 233–239]; [S1, Ch. 15, Exercises, printed pp. 472–476, PDF pp. 484–488].

## Source Exercise to Archived Note Mapping

Each chapter below is a static Markdown heading, so it appears in Obsidian's document outline. The tables remain generated from exercise frontmatter; if one source exercise has two archived notes, both mappings appear as separate rows.

```dataviewjs
const artinSource = "Michael Artin, Algebra, 2nd ed.";
const pages = dv.pages("#exercise")
  .where(page => typeof page.source === "string" && page.source.includes(artinSource));

function parseExerciseLocator(segment) {
  const chapterMatch = segment.match(/Ch\.\s*(\d+)/);
  if (!chapterMatch) return null;

  const chapter = Number(chapterMatch[1]);
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

  if (!foundExercise && /Ch\.\s*\d+/.test(page.source)) {
    unparsed.push(page.file.link);
  }
}

const entries = [...mapping.values()];

dv.paragraph(
  `${entries.length} unique Artin source exercises are currently mapped. ` +
  `${unparsed.length} Artin-based exercise note(s) have no source-exercise locator and are excluded from the mapping.`
);
```

### Chapter 1

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

### Chapter 2

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

### Chapter 3

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

### Chapter 4

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

### Chapter 5

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

### Chapter 6

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

### Chapter 7

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

### Chapter 8

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

### Chapter 9

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

### Chapter 10

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

### Chapter 11

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

### Chapter 12

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

### Chapter 13

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

### Chapter 14

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

### Chapter 15

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

### Chapter 16

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

> [!note] Non-source exercise boundary
> [[04 - Linear Algebra and Modules/Exercises/Exercise LA1 - Rank-Nullity|Exercise LA1: Rank–Nullity]] is adapted from Artin's Theorem 4.1.6 rather than from a numbered source exercise. It is therefore counted as an Artin-based note but intentionally excluded from the source-exercise mapping.

## Next Archival Batch

The Chapter 6–9 remediation and re-audit are complete. Chapter 10 is the next archival batch; prepare its source-grounded outline before creating notes.
