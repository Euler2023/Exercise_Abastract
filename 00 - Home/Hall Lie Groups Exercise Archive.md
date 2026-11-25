---
title: Hall Lie Groups Exercise Archive
aliases:
  - Hall Exercise Archive
  - Hall Lie Groups and Lie Algebras Archive Status
tags:
  - index
  - exercise-archive
  - hall-lie-groups
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015"
source_id: S10
created: 2026-11-12
---

# Hall Lie Groups Exercise Archive

This dashboard records the source audit and numbered-exercise coverage of Brian C. Hall's second edition. It was established before the first exercise note was written.

> [!info] Three independent statuses
> A **source audit** establishes the ordered exercise numbers and their original pages. An exercise is **archived** only when a source-identified note represents that complete numbered exercise. Its learning `status` remains independent; adding a solution does not mark it started or completed.

## Source Identity

- **Source ID:** S10; existing source identifiers are preserved.
- **Edition:** Second edition, corrected publication, Springer, 2015; GTM 222.
- **Original PDF:** [Lie Groups, Lie Algebras, and Representations](<E:/project/math/ant/input/Lie groups lie algebra and representations.pdf>).
- **Physical pages:** 452, verified with `pdfinfo`.
- **SHA-256:** `34397d9e69a8ccb87153a944278f54df2c7a9bebbf04411e01b37c2e2cd1410e`.
- **Pagination:** use the chapter-specific anchors below; do not assume one offset throughout the volume.
- **Numbering:** exercises restart at 1 in each chapter. A key such as `1.6` below means Chapter 1, Exercise 6; it is not the section number §1.6. Original section and exercise numbers remain separate in provenance.
- **Structured provenance:** for example `S10/ch-1/sec-6/ex-1`, alongside the complete readable `source` string and printed/PDF pages.

## Source Audit

**170 numbered exercises in 13 chapters**, with chapter totals **18, 11, 22, 14, 14, 12, 14, 14, 7, 10, 10, 9, 15**. Every chapter exercise page, exercise-section heading, and following boundary was inspected on the original PDF at 200 dpi on 2026-11-12. Chapter titles and exercise-section numbers were checked against the original contents. This audit establishes the ordered source set; it does not claim that the remaining chapters have been solved or archived.

| Chapter | Original title | Exercise section | Original numbers | Verified total | Printed pages | PDF pages |
| ---: | --- | --- | --- | ---: | --- | --- |
| 1 | Matrix Lie Groups | §1.6 | 1–18 | 18 | 26–30 | 38–42 |
| 2 | The Matrix Exponential | §2.6 | 1–11 | 11 | 46–48 | 58–60 |
| 3 | Lie Algebras | §3.9 | 1–22 | 22 | 73–75 | 85–87 |
| 4 | Basic Representation Theory | §4.9 | 1–14 | 14 | 105–107 | 116–118 |
| 5 | The Baker–Campbell–Hausdorff Formula and Its Consequences | §5.11 | 1–14 | 14 | 135–137 | 145–147 |
| 6 | The Representations of $\mathrm{sl}(3;\mathbb C)$ | §6.9 | 1–12 | 12 | 165–167 | 173–175 |
| 7 | Semisimple Lie Algebras | §7.8 | 1–14 | 14 | 193–196 | 200–203 |
| 8 | Root Systems | §8.12 | 1–14 | 14 | 238–240 | 245–247 |
| 9 | Representations of Semisimple Lie Algebras | §9.8 | 1–7 | 7 | 264–265 | 271–272 |
| 10 | Further Properties of the Representations | §10.9 | 1–10 | 10 | 305–306 | 311–312 |
| 11 | Compact Lie Groups and Maximal Tori | §11.8 | 1–10 | 10 | 341–343 | 346–348 |
| 12 | The Compact Group Approach to Representation Theory | §12.7 | 1–9 | 9 | 371–372 | 375–376 |
| 13 | Fundamental Groups of Compact Lie Groups | §13.9 | 1–15 | 15 | 405–407 | 409–411 |

The detailed chapter sections below retain every expected key and the page distribution, including exercises or hints continued across pages. Appendices A–D and the Erratum add no separate numbered exercise set; their inventory boundary is recorded under [Appendices and Erratum](#appendices-and-erratum).

## Live Coverage and Reconciliation

The following table is calculated from exercise tags and provenance, across all topic folders. **Complete** requires both a successful source reconciliation recorded for that chapter and zero current exceptions. A source-audited chapter with no notes remains **Source-audited; not archived**.

```dataviewjs
const audits = [
  {
    "chapter": 1,
    "title": "Matrix Lie Groups",
    "section": 6,
    "labels": [
      "1.1",
      "1.2",
      "1.3",
      "1.4",
      "1.5",
      "1.6",
      "1.7",
      "1.8",
      "1.9",
      "1.10",
      "1.11",
      "1.12",
      "1.13",
      "1.14",
      "1.15",
      "1.16",
      "1.17",
      "1.18"
    ],
    "printed": "26–30",
    "pdf": "38–42"
  },
  {
    "chapter": 2,
    "title": "The Matrix Exponential",
    "section": 6,
    "labels": [
      "2.1",
      "2.2",
      "2.3",
      "2.4",
      "2.5",
      "2.6",
      "2.7",
      "2.8",
      "2.9",
      "2.10",
      "2.11"
    ],
    "printed": "46–48",
    "pdf": "58–60"
  },
  {
    "chapter": 3,
    "title": "Lie Algebras",
    "section": 9,
    "labels": [
      "3.1",
      "3.2",
      "3.3",
      "3.4",
      "3.5",
      "3.6",
      "3.7",
      "3.8",
      "3.9",
      "3.10",
      "3.11",
      "3.12",
      "3.13",
      "3.14",
      "3.15",
      "3.16",
      "3.17",
      "3.18",
      "3.19",
      "3.20",
      "3.21",
      "3.22"
    ],
    "printed": "73–75",
    "pdf": "85–87"
  },
  {
    "chapter": 4,
    "title": "Basic Representation Theory",
    "section": 9,
    "labels": [
      "4.1",
      "4.2",
      "4.3",
      "4.4",
      "4.5",
      "4.6",
      "4.7",
      "4.8",
      "4.9",
      "4.10",
      "4.11",
      "4.12",
      "4.13",
      "4.14"
    ],
    "printed": "105–107",
    "pdf": "116–118"
  },
  {
    "chapter": 5,
    "title": "The Baker–Campbell–Hausdorff Formula and Its Consequences",
    "section": 11,
    "labels": [
      "5.1",
      "5.2",
      "5.3",
      "5.4",
      "5.5",
      "5.6",
      "5.7",
      "5.8",
      "5.9",
      "5.10",
      "5.11",
      "5.12",
      "5.13",
      "5.14"
    ],
    "printed": "135–137",
    "pdf": "145–147"
  },
  {
    "chapter": 6,
    "title": "The Representations of sl(3; C)",
    "section": 9,
    "labels": [
      "6.1",
      "6.2",
      "6.3",
      "6.4",
      "6.5",
      "6.6",
      "6.7",
      "6.8",
      "6.9",
      "6.10",
      "6.11",
      "6.12"
    ],
    "printed": "165–167",
    "pdf": "173–175"
  },
  {
    "chapter": 7,
    "title": "Semisimple Lie Algebras",
    "section": 8,
    "labels": [
      "7.1",
      "7.2",
      "7.3",
      "7.4",
      "7.5",
      "7.6",
      "7.7",
      "7.8",
      "7.9",
      "7.10",
      "7.11",
      "7.12",
      "7.13",
      "7.14"
    ],
    "printed": "193–196",
    "pdf": "200–203"
  },
  {
    "chapter": 8,
    "title": "Root Systems",
    "section": 12,
    "labels": [
      "8.1",
      "8.2",
      "8.3",
      "8.4",
      "8.5",
      "8.6",
      "8.7",
      "8.8",
      "8.9",
      "8.10",
      "8.11",
      "8.12",
      "8.13",
      "8.14"
    ],
    "printed": "238–240",
    "pdf": "245–247"
  },
  {
    "chapter": 9,
    "title": "Representations of Semisimple Lie Algebras",
    "section": 8,
    "labels": [
      "9.1",
      "9.2",
      "9.3",
      "9.4",
      "9.5",
      "9.6",
      "9.7"
    ],
    "printed": "264–265",
    "pdf": "271–272"
  },
  {
    "chapter": 10,
    "title": "Further Properties of the Representations",
    "section": 9,
    "labels": [
      "10.1",
      "10.2",
      "10.3",
      "10.4",
      "10.5",
      "10.6",
      "10.7",
      "10.8",
      "10.9",
      "10.10"
    ],
    "printed": "305–306",
    "pdf": "311–312"
  },
  {
    "chapter": 11,
    "title": "Compact Lie Groups and Maximal Tori",
    "section": 8,
    "labels": [
      "11.1",
      "11.2",
      "11.3",
      "11.4",
      "11.5",
      "11.6",
      "11.7",
      "11.8",
      "11.9",
      "11.10"
    ],
    "printed": "341–343",
    "pdf": "346–348"
  },
  {
    "chapter": 12,
    "title": "The Compact Group Approach to Representation Theory",
    "section": 7,
    "labels": [
      "12.1",
      "12.2",
      "12.3",
      "12.4",
      "12.5",
      "12.6",
      "12.7",
      "12.8",
      "12.9"
    ],
    "printed": "371–372",
    "pdf": "375–376"
  },
  {
    "chapter": 13,
    "title": "Fundamental Groups of Compact Lie Groups",
    "section": 9,
    "labels": [
      "13.1",
      "13.2",
      "13.3",
      "13.4",
      "13.5",
      "13.6",
      "13.7",
      "13.8",
      "13.9",
      "13.10",
      "13.11",
      "13.12",
      "13.13",
      "13.14",
      "13.15"
    ],
    "printed": "405–407",
    "pdf": "409–411"
  }
];
const reconciledChapters = new Set([1, 2, 3]);
const bookName = /(?:Brian\s+C\.\s+Hall|Lie Groups,\s*Lie Algebras,\s*and Representations)/i;
function list(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return typeof value.array === "function" ? Array.from(value.array()) : [String(value)];
}
const expectedSection = new Map(audits.map(a => [a.chapter, a.section]));
const records = [];
for (const page of Array.from(dv.pages("#exercise"))) {
  const source = typeof page.source === "string" ? page.source : "";
  const refs = list(page.source_refs).filter(r => typeof r === "string" && /^S10(?:\/|$)/i.test(r));
  if (!bookName.test(source) && !refs.length) continue;
  const structured = new Set(), readable = new Set(), issues = [], chapters = new Set();
  function register(chapter, section, exercise, target) {
    chapters.add(chapter);
    target.add(chapter + "." + exercise);
    if (expectedSection.has(chapter) && section !== expectedSection.get(chapter))
      issues.push("Exercise-section mismatch: " + chapter + "." + section);
  }
  for (const ref of refs) {
    const match = ref.match(/^S10\/ch-([1-9]\d*)\/sec-([1-9]\d*)\/ex-([1-9]\d*)$/i);
    if (match) register(...match.slice(1).map(Number), structured);
    else {
      issues.push("Unparsed structured locator: " + ref);
      const chapter = ref.match(/^S10\/ch-([1-9]\d*)/i);
      if (chapter) chapters.add(Number(chapter[1]));
    }
  }
  for (const segment of source.split(";")) {
    if (!bookName.test(segment)) {
      if (bookName.test(source) && /^\s*(?:Ch\.|Chapter|Section|§|Exercise|Ex\.)\s/i.test(segment)) {
        issues.push("Source segment omits its book identity: " + segment.trim());
        const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
        if (chapter) chapters.add(Number(chapter[1]));
      }
      continue;
    }
    if (!/\b(?:2nd|second)\s+ed(?:ition)?\.?/i.test(segment))
      issues.push("Readable Hall locator does not identify the second edition");
    const chapter = segment.match(/(?:Ch\.|Chapter)\s*([1-9]\d*)\b/i);
    const section = segment.match(/(?:Section|§)\s*([1-9]\d*)\.([1-9]\d*)\b/i);
    const exercises = [...segment.matchAll(/(?:Exercise|Ex\.)\s*([1-9]\d*)\b(?!\.\d)/gi)];
    if (chapter) chapters.add(Number(chapter[1]));
    if (chapter && section && exercises.length && Number(section[1]) === Number(chapter[1])) {
      for (const match of exercises) register(Number(chapter[1]), Number(section[2]), Number(match[1]), readable);
    } else issues.push("No complete readable chapter/section/exercise locator");
  }
  if (!readable.size) issues.push("No complete readable Hall source locator");
  if (structured.size && readable.size &&
      [...new Set([...structured, ...readable])].some(k => !structured.has(k) || !readable.has(k)))
    issues.push("Readable and structured locators disagree");
  const labels = [...new Set([...structured, ...readable])];
  if (!labels.length) issues.push("No numbered Hall source locator");
  if (labels.length > 1) issues.push("Multiple Hall exercise numbers in one note");
  records.push({page, labels, issues: [...new Set(issues)], chapters});
}
const byLabel = new Map();
for (const record of records) for (const label of record.labels) {
  if (!byLabel.has(label)) byLabel.set(label, new Map());
  byLabel.get(label).set(record.page.file.path, record.page);
}
const expected = new Set(audits.flatMap(a => a.labels));
const missing = [...expected].filter(k => !byLabel.has(k));
const duplicates = [...byLabel].filter(([key, notes]) => notes.size > 1);
const unexpected = [...byLabel.keys()].filter(k => !expected.has(k));
const unparsed = records.filter(r => r.issues.length);
dv.paragraph("Numbered coverage: **" + (expected.size - missing.length) + "/" + expected.size +
  "**; Hall exercise notes: **" + records.length + "**. Missing source keys: **" + missing.length +
  "**; duplicate keys: **" + duplicates.length + "**; unexpected keys: **" + unexpected.length +
  "**; notes needing source reconciliation: **" + unparsed.length + "**.");
const rows = audits.map(a => {
  const chapter = Number(a.chapter), keys = new Set(a.labels);
  const covered = a.labels.filter(k => byLabel.has(k)).length;
  const duplicateCount = duplicates.filter(([k]) => Number(k.split(".")[0]) === chapter).length;
  const unexpectedCount = unexpected.filter(k => Number(k.split(".")[0]) === chapter).length;
  const pending = unparsed.filter(r => r.chapters.has(chapter)).length;
  const unknownChapter = unparsed.some(r => r.chapters.size === 0);
  let status = covered ? "Partial" : "Source-audited; not archived";
  if (duplicateCount || unexpectedCount || pending) status = "Needs source reconciliation";
  else if (covered === keys.size)
    status = reconciledChapters.has(chapter) && !unknownChapter ? "Complete" : "Mapped; final audit pending";
  return [dv.sectionLink(dv.current().file.path, "Chapter " + chapter, false, String(chapter)),
    a.title, covered + "/" + keys.size, keys.size - covered, duplicateCount, unexpectedCount, pending, status];
});
dv.table(["Chapter", "Original title", "Mapped / source total", "Missing", "Duplicate keys",
  "Unexpected keys", "Unparsed notes", "Archive status"], rows);
if (duplicates.length) dv.table(["Duplicate source key", "Notes"],
  duplicates.map(([key, notes]) => [key, [...notes.values()].map(p => p.file.link)]));
if (unexpected.length) dv.paragraph("Unexpected source keys: " + unexpected.join(", "));
if (unparsed.length) dv.table(["Source reconciliation needed", "Issue"],
  unparsed.map(r => [r.page.file.link, r.issues.join("; ")]));
if (!duplicates.length && !unexpected.length && !unparsed.length)
  dv.paragraph("No duplicate, unexpected, or unparsed Hall source mappings were found.");
```

## Chapter Navigation

- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 1|Chapter 1 — Matrix Lie Groups]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 2|Chapter 2 — The Matrix Exponential]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 3|Chapter 3 — Lie Algebras]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 4|Chapter 4 — Basic Representation Theory]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 5|Chapter 5 — The Baker–Campbell–Hausdorff Formula and Its Consequences]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 6|Chapter 6 — The Representations of sl(3; C)]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 7|Chapter 7 — Semisimple Lie Algebras]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 8|Chapter 8 — Root Systems]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 9|Chapter 9 — Representations of Semisimple Lie Algebras]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 10|Chapter 10 — Further Properties of the Representations]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 11|Chapter 11 — Compact Lie Groups and Maximal Tori]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 12|Chapter 12 — The Compact Group Approach to Representation Theory]]
- [[00 - Home/Hall Lie Groups Exercise Archive#Chapter 13|Chapter 13 — Fundamental Groups of Compact Lie Groups]]

## Source Exercise to Archived Note Mapping

### Chapter 1

**Matrix Lie Groups** — [S10, Ch. 1, §1.6, Exercises 1–18, printed pp. 26–30, PDF pp. 38–42].

**Expected ordered keys:** 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 26 | 38 | 1 |
| 27 | 39 | 2–7 |
| 28 | 40 | 8–13 |
| 29 | 41 | 14–16 |
| 30 | 42 | 17–18 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 1,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 2

**The Matrix Exponential** — [S10, Ch. 2, §2.6, Exercises 1–11, printed pp. 46–48, PDF pp. 58–60].

**Source recheck — 2026-11-17:** all three original exercise pages and the following Chapter 3 boundary were re-inspected at 200 dpi before the archival pass. The ordered keys 2.1–2.11 and the total 11 agree with the source ledger. All eleven keys now reconcile one-to-one with LA668–LA678; the completion record below states the proof and validation boundaries.

**Expected ordered keys:** 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 46 | 58 | 1–5 |
| 47 | 59 | 5 (hint continued), 6–9 |
| 48 | 60 | 10–11 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 2,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 3

**Lie Algebras** — [S10, Ch. 3, §3.9, Exercises 1–22, printed pp. 73–75, PDF pp. 85–87].

**Expected ordered keys:** 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14, 3.15, 3.16, 3.17, 3.18, 3.19, 3.20, 3.21, 3.22.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 73 | 85 | 1–4 |
| 74 | 86 | 5–15 |
| 75 | 87 | 15 (hint continued), 16–22 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 3,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 4

**Basic Representation Theory** — [S10, Ch. 4, §4.9, Exercises 1–14, printed pp. 105–107, PDF pp. 116–118].

**Expected ordered keys:** 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 4.12, 4.13, 4.14.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 105 | 116 | 1–7 |
| 106 | 117 | 7 (hint continued), 8–13 |
| 107 | 118 | 14 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 4,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 5

**The Baker–Campbell–Hausdorff Formula and Its Consequences** — [S10, Ch. 5, §5.11, Exercises 1–14, printed pp. 135–137, PDF pp. 145–147].

**Expected ordered keys:** 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 135 | 145 | 1 |
| 136 | 146 | 2–10 |
| 137 | 147 | 11–14 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 5,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 6

**The Representations of $\mathrm{sl}(3;\mathbb C)$** — [S10, Ch. 6, §6.9, Exercises 1–12, printed pp. 165–167, PDF pp. 173–175].

**Expected ordered keys:** 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 6.10, 6.11, 6.12.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 165 | 173 | 1–7 |
| 166 | 174 | 8–12 |
| 167 | 175 | 12 (continued) |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 6,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 7

**Semisimple Lie Algebras** — [S10, Ch. 7, §7.8, Exercises 1–14, printed pp. 193–196, PDF pp. 200–203].

**Expected ordered keys:** 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13, 7.14.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 193 | 200 | 1 |
| 194 | 201 | 2–8 |
| 195 | 202 | 8 (continued), 9–12 |
| 196 | 203 | 12 (continued), 13–14 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 7,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 8

**Root Systems** — [S10, Ch. 8, §8.12, Exercises 1–14, printed pp. 238–240, PDF pp. 245–247].

**Expected ordered keys:** 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10, 8.11, 8.12, 8.13, 8.14.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 238 | 245 | 1–3 |
| 239 | 246 | 3 (continued), 4–12 |
| 240 | 247 | 13–14 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 8,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 9

**Representations of Semisimple Lie Algebras** — [S10, Ch. 9, §9.8, Exercises 1–7, printed pp. 264–265, PDF pp. 271–272].

**Expected ordered keys:** 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 264 | 271 | 1–3 |
| 265 | 272 | 4–7 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 9,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 10

**Further Properties of the Representations** — [S10, Ch. 10, §10.9, Exercises 1–10, printed pp. 305–306, PDF pp. 311–312].

**Expected ordered keys:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 10.10.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 305 | 311 | 1–7 |
| 306 | 312 | 8–10 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 10,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 11

**Compact Lie Groups and Maximal Tori** — [S10, Ch. 11, §11.8, Exercises 1–10, printed pp. 341–343, PDF pp. 346–348].

**Expected ordered keys:** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 341 | 346 | 1–3 |
| 342 | 347 | 3 (continued), 4–9 |
| 343 | 348 | 9 (continued), 10 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 11,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 12

**The Compact Group Approach to Representation Theory** — [S10, Ch. 12, §12.7, Exercises 1–9, printed pp. 371–372, PDF pp. 375–376].

**Expected ordered keys:** 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 371 | 375 | 1–3 |
| 372 | 376 | 4–9 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 12,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

### Chapter 13

**Fundamental Groups of Compact Lie Groups** — [S10, Ch. 13, §13.9, Exercises 1–15, printed pp. 405–407, PDF pp. 409–411].

**Expected ordered keys:** 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 13.10, 13.11, 13.12, 13.13, 13.14, 13.15.

| Printed page | PDF page | Original exercise numbers |
| ---: | ---: | --- |
| 405 | 409 | 1–7 |
| 406 | 410 | 7 (continued), 8–12 |
| 407 | 411 | 12 (continued), 13–15 |

```dataview
TABLE WITHOUT ID
  number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) AS "Hall exercise",
  file.link AS "Archived note",
  topic AS "Topic",
  status AS "Learning status"
FROM #exercise
FLATTEN split(source, ";") AS locator
WHERE contains(locator, "Brian C. Hall,") AND contains(locator, "Ch. 13,")
SORT number(regexreplace(locator, ".*Exercise ([0-9]+),.*", "$1")) ASC
```

## Appendices and Erratum

| Unit | Original title | Printed pages | PDF pages | Numbered-exercise boundary |
| --- | --- | --- | --- | --- |
| Erratum | Correction to author name | E1 | 412 | No exercises |
| A | Linear Algebra Review | 409–419 | 413–423 | No separate numbered exercise set |
| B | Differential Forms | 421–425 | 424–428 | No separate numbered exercise set |
| C | Clebsch–Gordan Theory and the Wigner–Eckart Theorem | 427–436 | 429–438 | No separate numbered exercise set |
| D | Peter–Weyl Theorem and Completeness of Characters | 437–443 | 439–445 | No separate numbered exercise set |

**Audit scope:** the contents (printed p. x / PDF p. 10), the complete appendix text layer (PDF pp. 413–445), and targeted original images were checked. The targeted images include Appendix A's opening, its Definition A.9 property list, and Appendix D's opening; the complete Erratum page was inspected. This is a contents/text-layer inventory with targeted visual verification, not an assertion that every appendix page was visually audited. Numbered properties in definitions are not exercises; Appendix D's reference to Exercise 5 points back to Chapter 12 and adds no source key.

## Source Issues and Figure Boundaries

These entries record issues clarified in archived notes and candidates to check when later chapters are archived.

- **Chapter 2, Exercise 5 hint**, printed p. 47 / PDF p. 59: the displayed power of an upper triangular matrix has bottom-right entry $b^m$, although the original matrix has bottom-right entry $d$. [[04 - Linear Algebra and Modules/Exercises/Exercise LA672 - The Exponential of a Two by Two Triangular Matrix|LA672]] preserves the original hint, gives an $m=1$ counterexample, and proves the corrected formula with $d^m$. The exponential formula itself remains valid, including the repeated-diagonal limit.
- **Chapter 3, Definition 3.15**, printed p. 54 / PDF p. 66. Hall calls the descending commutator sequence the “upper central series.” [[04 - Linear Algebra and Modules/Exercises/Exercise LA679 - Nilpotence of Strictly Upper Triangular Matrices|LA679]] specifies the recurrence and gives the usual lower-central-series terminology.
- **Chapter 3, Exercise 15 hint**, printed p. 75 / PDF p. 87. The printed phrase omits the verb defining $B_k=A_{j_k}$. [[04 - Linear Algebra and Modules/Exercises/Exercise LA685 - Compact Matrix Groups Have Finitely Many Components|LA685]] preserves the printed hint and introduces the subsequence explicitly in the proof.
- **Chapter 5, Exercise 14(b)**, printed p. 137 / PDF p. 147: the target of a Lie group homomorphism is printed as the Lie algebra $\mathrm{gl}(N;\mathbb C)$; the apparent intended target is $GL(N;\mathbb C)$.
- **Chapter 12, Exercise 3**, printed p. 371 / PDF p. 375: after introducing maps from $V$ to $W$, one occurrence reverses the Hom arguments to $\operatorname{Hom}(W,V)$. Reconcile the domains against the action before supplying a solution.
- **Chapter 12, Exercise 9**, printed p. 372 / PDF p. 376: the Vandermonde product includes $j=k$ in the printed index range; these factors vanish. Check the intended strict inequality $j<k$.
- **Chapter 13, Exercise 10**, printed p. 406 / PDF p. 410: the reflection is declared on $V$, but the affine-hyperplane formula and its later use require the ambient space $E$. Keep the printed domains visible and check the intended correction.
- **Figure-dependent later tasks:** Chapter 6 Exercises 3(c), 10, and 12 refer to Figures 6.2–6.4; Chapter 8 Exercises 13–14 refer to earlier root-system/Dynkin figures; Chapter 10 Exercises 7–8 refer to root-system pictures; Chapter 13 Exercise 13 depends on Figure 13.8 on printed p. 407 / PDF p. 411. Source-label auditing does not replace the separate figure-page verification required when these exercises are archived. No figure asset is retained in this ledger batch.

## Counting and Proof Boundaries

- One original exercise number corresponds to one complete note; subparts and printed hints stay with it.
- Coverage is reconciled against the ordered source keys, reporting missing labels, duplicate mappings, unexpected labels, and unparsed Hall locators. File counts alone do not establish completeness.
- Chapter mapping tables use the canonical readable source beginning with `Brian C. Hall,` and the explicit second-edition chapter, section, exercise, and printed/PDF locator. The overview also detects structured S10 candidates and reports absent, ambiguous, conflicting, or non-second-edition readable provenance for reconciliation.
- A chapter remains source-audited but unarchived until its numbered notes exist. Even complete live mappings require the final source/proof checks before the permanent completion record is set.
- Source statements, independent derivations, named imported results, computational checks, and source defects are distinguished in each note.
- Matrix calculations, forms, and finite-dimensional matrix topology are routed to Linear Algebra and Modules. Primarily group-theoretic center and quotient arguments are routed to Group Theory. Representation-theoretic exercises are routed to Representation Theory.
- Hall's noncompact groups $Sp(n;\mathbb R)$ and $Sp(n;\mathbb C)$ act on dimension $2n$; the compact group $Sp(n)$ is $Sp(n;\mathbb C)\cap U(2n)$. Artin's $SP_{2n}(\mathbb R)$ denotes Hall's $Sp(n;\mathbb R)$, not compact $Sp(n)$.
- A completed archive does not certify every imported theorem or alter learning status or the Exercise Manager queue.

## Chapter Completion Records

**Chapter 1 complete — 18/18 — 2026-11-12.** The ordered source keys 1.1–1.18 reconcile one-to-one with **LA651–LA667 (17 notes)** in Linear Algebra and Modules and **G379 (1 note)** in Group Theory. Final Chapter 1 exceptions: **missing labels 0; duplicate mappings 0; unexpected labels 0; unparsed locators 0**. The complete readable citations agree with the structured S10 references and the original printed/PDF page anchors.

Every note preserves the complete English problem and any printed hint, supplies progressive hints and a complete independent derivation, and received a non-author mathematical review. Hall's forward Theorem 1.6 remains a named source input; Exercise 6 supplies its converse independently. The proofs explicitly handle the compact/noncompact symplectic notation, the orientation requirement in Exercise 15, the noncircular kernel calculation in Exercise 16, the nonclosed homomorphism image in Exercise 17, and the local-to-global argument in Exercise 18. Exercise 12 preserves the printed endpoint values and explains the resulting path direction; this does not affect connectedness.

All 18 learning statuses remain `not-started`. Whole-book coverage at this checkpoint is **18/170**, leaving **152** source keys unarchived, with no duplicate, unexpected, or unparsed Hall mappings. Chapters 2–13 are source-audited but not archived. Exact symbolic checks confirmed the two-dimensional symplectic determinant identity, the Heisenberg product and commutator, SU(2) norm/determinant identities, the orientation-adjustment rotation formula, and the centralizer spanning identity; these checks supplement the written proofs.

Validation covered note metadata, filenames and numbering, source/page reconciliation, path-qualified links and chapter anchors, balanced Obsidian mathematics, the English-only scan of all 2,581 exercise/concept notes, and discovery by the Study Progress exercise-tag filter. The live coverage JavaScript was executed against actual vault metadata and exercised with duplicate, unexpected, mismatched, missing-readable, ambiguous-segment, wrong-edition, and malformed-reference cases. These are source, proof, and static/runtime-script checks, not an Obsidian reading-view render test. No exercise-manager state, generated list, Base, or Canvas was edited.

**Chapter 2 complete — 11/11 — 2026-11-17.** The ordered source keys 2.1–2.11 reconcile one-to-one with **LA668–LA678**, all in Linear Algebra and Modules. Final Chapter 2 exceptions: **missing labels 0; duplicate mappings 0; unexpected labels 0; unparsed locators 0**. The complete source statements, original hints, and printed/PDF anchors were checked on the original exercise pages, with Definition 2.2, Example 2.5, equation (2.6), the local logarithm results, and Appendix A.4–A.5 checked where used. The structured S10 references agree with the readable citations.

The notes give complete independent derivations, including all parts of Exercise 9, and each received non-author mathematical review. Theorem A.4 triangularization and Theorem A.5 generalized-eigenspace decomposition are named imported inputs: the inspected appendix states them without full proofs. Theorem 2.8 is used only with its precise local hypotheses; the global nilpotent and invertible-complex-matrix results are proved in the exercise notes, rather than falsely attributed to a source-written proof of Theorem 2.10. Exercise 5 visibly preserves and corrects its hint defect; Exercise 8 specifies forward time and the exceptional stable line.

Added shared prerequisites: [[04 - Linear Algebra and Modules/Concepts/Hilbert-Schmidt Norm|Hilbert–Schmidt Norm]] and [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]], each with dynamic exercise backlinks and an entry in the existing topic hub. They distinguish Hall's inner-product convention, the identity norm $\|I_n\|=\sqrt n$, local inverse conditions, terminating nilpotent series, complex existence, and nonuniqueness. Figure 2.1 was checked with Exercise 8; it is illustrative and supplies no required figure-specific data, so no raster asset is retained.

All 11 new learning statuses remain `not-started`. Whole-book coverage at that checkpoint was **29/170**, leaving **141** source keys unarchived, with no duplicate, unexpected, or unparsed Hall mappings. Chapters 3–13 still awaited archival at that checkpoint. Validation covered numbering, YAML, page anchors, links, balanced Obsidian mathematics, dynamic backlinks, the Study Progress exercise-tag filter, and an English-only scan of all **2,594** exercise/concept files. Exact symbolic checks covered the noncommuting product rule, complex unitary norm invariance, triangular powers and exponentials, the trace-zero and explicit $2\times2$ formulas, both flow equations and eigenpairs, and the nilpotent inverse identities for Jordan sizes 1–5. Finite checks supplement the written proofs. The live coverage script was executed against actual vault metadata; these checks do not constitute an Obsidian reading-view render test.

**Chapter 3 complete — 22/22 — 2026-11-25.** The ordered source keys 3.1–3.22 reconcile one-to-one with **LA679–LA691** (13 notes), **Rep168–Rep175** (8 notes), and **G380** (1 note). Final Chapter 3 exceptions are **missing labels 0, duplicate mappings 0, unexpected labels 0, and unparsed locators 0**. The original §3.9 pages (printed pp. 73–75, PDF pp. 85–87) and the Chapter 4 boundary were re-inspected at 200 dpi before writing. Exercise 15 includes its continued hint and both page numbers. No exercise requires a source figure.

All notes preserve the printed problems and hints, supply progressive hints and complete independent derivations, and received a non-author mathematical review. The notes name Hall's local subgroup logarithm, exponential generation, and Lie-group differential results where used. The unitary spectral theorem is a named input, and Exercise 22 uses the real Jordan form under the permission in its printed hint. The two existing concept notes [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]] and [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]] now cover the lower central series, real forms, and the group-dependent logarithm neighborhood.

All 22 learning statuses are `not-started`. Whole-book coverage is **51/170**, with **119** source keys remaining and no duplicate, unexpected, or unparsed Hall mappings. Validation covered English prose, exercise metadata, path-qualified links, section anchors, Obsidian formula delimiters, and Study Progress tag discovery. The live ledger was executed against the actual exercise metadata. Exact symbolic checks verified strict upper triangular support, the finite-subgroup logarithm example, Lorentz blocks, Lie brackets, iterated commutators, and representative exponential formulas.

## Next Archive Target

**Chapter 4 — Basic Representation Theory**, §4.9, Exercises 1–14, printed pp. 105–107 / PDF pp. 116–118. Its ordered source set is audited above.

## Related Navigation

- [[00 - Home/Index|Home]]
- [[04 - Linear Algebra and Modules/Linear Algebra and Modules Hub|Linear Algebra and Modules]]
- [[01 - Group Theory/Group Theory Hub|Group Theory]]
- [[06 - Representation Theory/Representation Theory Hub|Representation Theory]]
- [[00 - Home/Artin Exercise Archive|Artin Exercise Archive]]
- [[00 - Home/Lang Algebra Exercise Archive|Lang Algebra Exercise Archive]]
- [[00 - Home/Neukirch Algebraic Number Theory Exercise Archive|Neukirch Algebraic Number Theory Exercise Archive]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Modular Forms Exercise Archive]]
