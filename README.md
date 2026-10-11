# Abstract Algebra Exercises

An Obsidian vault for studying abstract algebra, featuring exercises, concepts, and visual maps covering the major topics.

<img src="Attachments/cover.jpeg" alt="Abstract Algebra Cover" width="100%">

## Topics Covered

- **Group Theory** - Groups, subgroups, homomorphisms, quotient groups, Sylow theorems
- **Ring Theory** - Rings, ideals, quotient rings, PIDs, UFDs
- **Field Theory** - Field extensions, algebraic elements, splitting fields
- **Linear Algebra & Modules** - Vector spaces, linear transformations, modules over rings
- **Galois Theory** - Galois groups, fundamental theorem, solvability by radicals
- **Representation Theory** - Group representations, characters, Maschke's theorem, Lie groups, Lie algebras
- **Modular Forms** - Modular group, cusp forms, Hecke operators, L-functions, modularity theorem
- **Arithmetic Geometry** - Elliptic curves, rational points, schemes, BSD conjecture, Galois representations
- **Set Theory and Foundations** - Induction, partial orders, Zorn's lemma, cardinality and infinite sets

## Structure

```
exercise_abstract/
├── 00 - Home/           # Index, trackers, and base files
├── 01 - Group Theory/   # Concepts and exercises
├── 02 - Ring Theory/    # Concepts and exercises
├── 03 - Field Theory/   # Concepts and exercises
├── 04 - Linear Algebra and Modules/  # Concepts and exercises
├── 05 - Galois Theory/  # Concepts and exercises
├── 06 - Representation Theory/  # Concepts and exercises
├── 07 - Modular Forms/  # Concepts and exercises
├── 08 - Arithmetic Geometry/  # Concepts and exercises
├── 09 - Set Theory and Foundations/  # Concepts and exercises
├── 10 - Daily Exercise Lists/  # Configurable output folder for daily Markdown todo lists
├── Canvas/              # Visual topic maps
├── Templates/           # Exercise and concept templates
└── Attachments/         # Images and files
```

## Features

### Obsidian Bases
- **Exercise Tracker** - Track progress across all exercises
- **Concept Index** - Browse and search concepts
- **Study Progress** - Filter by difficulty and topic

### JSON Canvas
- **Abstract Algebra Overview** - High-level topic connections
- **Topic Relationships** - Detailed concept hierarchy
- **Study Roadmap** - Suggested learning path

### Templates
- **Exercise Template** - Structured format with hints and solutions
- **Concept Template** - Definitions, examples, and related concepts

## Plugins Used

- **Dataview** - Dynamic queries and progress tracking
- **Templater** - Template insertion
- **LaTeX Suite** - Math typing shortcuts
- **TikZJax** - Commutative diagrams
- **Excalidraw** - Freeform diagrams

## Getting Started

1. Open the vault in Obsidian
2. Start at `00 - Home/Index.md`
3. Follow the study roadmap or explore by topic
4. Use the Exercise Tracker to monitor progress

## Exercise Format

Each exercise includes:
- Problem statement in callout format
- Progressive hints (collapsed by default)
- Full solution (collapsed by default)
- Related concepts and notes
- YAML frontmatter for tracking (status, difficulty, topic, source)

---

## Changelog

[Full change history](CHANGELOG.md)

### 2026-10-12 (Configurable Daily-Exercise Lists Folder)

- Fixed: Renaming the daily exercise list folder made the Exercise Manager plugin recreate the old hardcoded `09 - Daily Exercise Lists/` path, leaving the vault with two list folders. Confirmed the recreated `Daily Exercise List - 2026-10-12.md` was byte-identical (SHA-256) to the copy in `10 - Daily Exercise Lists/`, removed the duplicate folder after that check, and pointed the plugin at `10 - Daily Exercise Lists`.
- Added: Upgraded the local Exercise Manager to 0.6.1. The daily list output folder is now a setting (settings page "每日题单文件夹", stored as `settings.listsDir` in the daily state file): vault-relative paths are accepted, `a/b` subfolders are created level by level, and empty, absolute, `..`-escaping, or `* ? " < > |` paths are rejected with a notice instead of being written. Automatic generation, every export, and the sidebar's displayed path follow the configured folder; changing the value redirects only future writes, so existing lists must be moved by hand.
- Added: The same release adds a "暂停每日自动出题" switch (sidebar button, settings toggle, and "暂停/恢复每日自动出题" command) that stops automatic generation when the vault opens, the date rolls over, or metadata becomes ready, for both the random list and the systematic queue. Manual generation stays available, and existing lists, cycle history, seen sets, and systematic progress are preserved; resuming immediately backfills the current date.
- Updated: Set Theory and Foundations now lives in `09`, so the Dataview exercise queries in its hub and in `00 - Home/Index.md` were repaired, and the folder trees in `README.md` and `CLAUDE.md` were synchronized with the actual layout (`09 - Set Theory and Foundations/`, `10 - Daily Exercise Lists/`). Historical changelog entries were left untouched.
- Verified: The Exercise Manager test suite passes 42/42, covering pause gating of all automatic entry points, resume backfill, the sidebar button and settings toggle, custom and nested output folders, invalid-path rejection, old state files without the new fields, and idempotent re-export. The live daily state file (revision 112, 32 batches) was re-hydrated with the new schema to confirm `paused` and `listsDir` load without altering existing history or batches.

### 2026-10-11 (Neukirch I.2 Integrality Exercises)

- Added: Archived all seven exercises of Chapter I §2 as R330-R335 in Ring Theory and LA532 in Linear Algebra and Modules. Each preserves the complete source problem, includes progressive collapsed hints and a complete independent derivation, links existing prerequisites, records printed p. 15 / PDF p. 34, and remains not-started. No new concept or directory was needed.
- Clarified: Proved polynomial normality in arbitrary characteristic with roots-of-unity coefficient sums; computed the cusp quotient and its missing integral element; derived quadratic integer bases including negative radicands and the uniform discriminant basis; proved maximality of the cube-root-of-two power order; distinguished the proper theta power order from the full integer ring generated by beta in the discriminant -107 cubic; and completed the Galois descent in Stickelberger's printed determinant hint. No incorrect printed assertion was identified in this section.
- Verified: Visually checked the exercise group and its end on printed pp. 15-16 / PDF pp. 34-35, with integrality and discriminant inputs on printed pp. 6-7 and 11-12 / PDF pp. 25-26 and 30-31. Mathematical cross-review covered all seven solutions, with exact symbolic checks of cubic norm, characteristic-coefficient, and discriminant calculations. Reconciled I.2.1-I.2.7 one-to-one: missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. Metadata, numbering, links, Obsidian formula syntax, tracker tags, preserved unrelated changes, and README's latest-three excerpt were checked; temporary source renders were removed. The dashboard records §2 as complete and advances the next target to I.§3 Ideals, while the full Chapter I total remains unaudited.

### 2026-10-02 (Qualifying Exercises and Neukirch Conductor Counterexample)

- Added: Archived Kent State qualifying-exam bank Problems 55, 56, and 74 as F123-F125, Rice's 2020-08-21 Question 3(a)-(b) as Gal140, and Neukirch I.8.2 as R329. Each preserves the complete mathematical task and source identity, includes progressive hints and a complete independent derivation, and remains not-started. Distinguished the Kent problem bank from the dated Rice examination.
- Clarified: Preserved Neukirch's false prescribed coprime-conductor claim with a visible source warning. Derived Dedekind's cubic integer basis, discriminant -503, the quotient modulo 2 as F2 cubed, the impossibility for every integral primitive element, and a valid replacement with different quantifiers. Added Orders and Conductors and the algebraic intermediate-field criterion in Primitive Elements. Marked Georgia Tech's Fall 2017 Question 4 as a duplicate of F16; the Neukirch dashboard records selected I.8.2 coverage without claiming a complete section audit.
- Verified: Checked Kent printed pp. 5-6 / PDF pp. 9-10, Rice printed/PDF p. 2, Neukirch printed pp. 11-12 and 52 / PDF pp. 30-31 and 71, and Conrad Example 7 printed/PDF pp. 5-6 against rendered originals. Independent mathematical review checked inseparable cases, finite-degree reductions, orbit-sum stabilizers and field inclusions, and the conductor counterexample. Metadata, numbering, links, formula delimiters, tracker tags, source mappings, preservation of unrelated changes, and the README latest-three excerpt passed checks; temporary source files were removed.
