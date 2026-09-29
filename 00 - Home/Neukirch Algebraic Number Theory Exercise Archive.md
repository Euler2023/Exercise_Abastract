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
> The seven chapter titles have been checked against the original contents pages. Chapter I §1 has a verified source set of seven exercises; its section coverage is tracked separately below. Full chapter exercise totals and ordered label sets have **not yet been audited**. An archived count of zero means that no matching exercise note is currently found; it does not mean that the chapter has no exercises.

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
const auditedCoverage = new Map();
const auditedSections = new Map([
  ["I.1", {
    title: "The Gaussian Integers",
    labels: ["I.1.1", "I.1.2", "I.1.3", "I.1.4", "I.1.5", "I.1.6", "I.1.7"],
    pages: "printed p. 5 / PDF p. 24",
    reconciled: true,
  }],
]);

const chapterOrder = new Map([...chapterTitles.keys()].map((ch, i) => [ch, i]));
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

dv.header(2, "Source Exercise to Archived Note Mapping");
const sorted = [...mappings.entries()].sort(([, a], [, b]) =>
  chapterOrder.get(a.chapter) - chapterOrder.get(b.chapter)
  || a.section - b.section || a.exercise - b.exercise
);
if (sorted.length === 0) {
  dv.paragraph("No source-identified Neukirch exercises are archived yet.");
} else {
  const exerciseRows = sorted.flatMap(([label, entry]) =>
    [...entry.notes.values()].map(page =>
      [label, page.file.link, page.topic, page.status, page.difficulty]));
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    exerciseRows
  );
}
```

## Chapter Scope Notes

| Chapter | Original title | Source exercise audit |
|---------|----------------|-----------------------|
| I | Algebraic Integers | §1 complete: 7/7 exercises, R322-R328 in Ring Theory. Full chapter total pending. |
| II | The Theory of Valuations | Pending |
| III | Riemann-Roch Theory | Pending |
| IV | Abstract Class Field Theory | Pending |
| V | Local Class Field Theory | Pending |
| VI | Global Class Field Theory | Pending |
| VII | Zeta Functions and L-series | Pending |

The chapter titles and order were visually checked on all three original contents pages. The contents end with the bibliography and index and do not list a separate appendix. This contents check is not an audit of the full exercise corpus. [S4, Contents, printed pp. xv-xvii, PDF pp. 16-18]

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

The exercise groups of Chapter I §1 and §2 both begin with Exercise 1. They were checked to establish the section-sensitive numbering convention; they do not establish a complete Chapter I total. [S4, Ch. I, §1, Exercises, printed p. 5, PDF p. 24; §2, Exercises, printed p. 15, PDF p. 34]

> [!warning] Section boundaries
> Printed p. 5 / PDF p. 24 carries a §2 running header, but the exercises above the §2 body heading belong to **§1**. Determine ownership from the surrounding text and section boundaries, not the running header.

## Counting and Reconciliation Rules

1. Count one numbered source exercise once, regardless of its subparts or the note's learning status. A section number is required because exercise numbers restart.
2. Parse each semicolon-separated source segment independently. Each segment counted here must begin with the canonical edition prefix; references to Lang, Artin, or other books do not contribute.
3. Keep **archived source exercises**, **note files**, and **verified source totals** distinct. Exercise notes are discovered through `#exercise` and `source`, across all topic folders.
4. Before a chapter or section batch, inspect its exercise pages and record the ordered source-label set, verified total, and printed/PDF page anchors in this dashboard. Update `auditedSections` for checked sections and `auditedCoverage` only for a checked whole chapter; a completed section does not establish the full chapter total.
5. After archival, reconcile expected labels against note provenance. Mark a chapter `Complete` only after missing labels, duplicate mappings, unexpected labels, and unparsed locators are all absent and the total agrees.
6. Preserve durable coverage and source-status records after reconciliation; remove temporary batch-planning material. Archive completeness does not certify every mathematical claim or change any learning status.

## Classification and Source Status

Exercises will be routed by the primary computational or proof method, following the existing vault policy. Chapter titles alone do not determine their destination. Cross-topic prerequisites belong under `Related Concepts`.

Future notes must distinguish the printed problem, independently derived solutions, imported results, computational checks, and source errors or unresolved ambiguities. Preserve any defective printed statement visibly before presenting a corrected formulation.

Chapter I §1 was source-audited on 2026-09-29 against the ordered labels I.1.1-I.1.7, all on printed p. 5 / PDF p. 24. The complete section text on printed pp. 1-5 / PDF pp. 20-24 was visually checked, including the exercise group's end before the §2 heading. No exercise requires a source figure. Section completion will not be promoted to chapter completion without a separate full-chapter source audit.

On 2026-09-29, all seven labels were reconciled one-to-one with R322-R328 in Ring Theory: no missing labels, duplicate mappings, unexpected labels, or unparsed locators remain in this section. All seven notes preserve the source problem, contain progressive hints and an independently derived solution, and remain `not-started`. Mathematical cross-review covered every solution. Existing concepts suffice; no new concept note or topic directory was needed.

Exercise I.1.2 makes explicit the intended positive-integer exponent convention and handles zero factors. I.1.3 preserves the original Gaussian-factorization hint and proves both directions of the parametrization. I.1.4 specifies an order compatible with ring operations. I.1.5-I.1.6 distinguish the specified quadratic subrings from the full rings of integers. I.1.6 proves infinitude by pigeonhole approximation and congruent equal-norm elements, without importing Dirichlet's unit theorem. I.1.7 proves Euclidean division using the absolute norm, the full unit group, and the complete prime-element classification, including the square criterion for 2 modulo an odd prime. No incorrect printed assertion was identified in this batch.

## Next Archive Target

**Chapter I §2 — Integrality.** Audit its complete exercise group before assigning the next topic-specific note numbers. Section §1 is complete; the rest of Chapter I remains unaudited.

## Related Archives

- [[00 - Home/Artin Exercise Archive|Artin Exercise Archive]]
- [[00 - Home/Lang Algebra Exercise Archive|Lang Algebra Exercise Archive]]
- [[00 - Home/Index|Home]]
