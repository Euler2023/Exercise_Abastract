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

### 2026-10-23 (Diamond–Shurman English Notes and Original Exercises Only)

- Updated: Rewrote all six archived Diamond–Shurman exercise notes in English, including statement introductions, hints, complete independent solutions, source issues, proof boundaries and link labels. Preserved the complete original numbered exercises, mathematical derivations, source anchors, metadata, file paths and learning states.
- Removed: Deleted the earlier independently composed practice questions from MF2, MF13 and MF9, together with obsolete references to those supplements and the former MF5 Ramanujan example. The remaining notes correspond only to Exercises 2.3.2, 2.3.5, 3.5.4, 5.2.5, 5.8.3 and 5.8.7. Updated the archive's language and scope guidance; coverage remains 6/354.
- Verified: Checked the English notes for residual Chinese text and deleted-example references, reviewed preservation of the original subparts and formulas, and checked source/proof warnings, metadata, links, MathJax syntax, Study Progress discovery and all ten archive queries. Preserved unrelated changes and the complete changelog; synchronized README's latest three entries.

### 2026-10-23 (Diamond–Shurman Faithful Exercise Split)

- Restored: Replaced the three composite MF2/MF5/MF9 problems with complete original Exercises 2.3.5, 5.8.7 and 3.5.4, preserving existing paths and creation dates; added LA580/2.3.2, MF13/5.2.5 and LA581/5.8.3. Each numbered exercise retains every original subpart, progressive collapsed hints, a full independent solution, readable book identity, exact printed/PDF anchors and stable structured provenance. Earlier practice questions remain clearly marked independent supplements; learning states remain not-started.
- Corrected visibly: Recorded the reversed s(tau) direction in 2.3.5(b), Appendix 5.2.5's Hecke sign/normalization and weight-one boundary, and Proposition 3.2.2's cusp-width/root-of-unity misprints. Replaced the earlier Frey conductor claim with an explicit integral minimal-model derivation under stated hypotheses, and named the deep external inputs. Repaired the Hecke Operators concept's level/character hypotheses, weighted diamond action, adjoints and eigenbasis limits; LA581 supplies the bad-prime counterexample.
- Reconciled: The navigation now finds 6/354 distinct original exercises (Chapter 2: 2/23; Chapter 3: 1/51; Chapter 5: 3/55), with 348 still missing and no duplicate, unexpected or unparsed mappings. No full chapter or book is marked complete. Existing topic routing places the trace calculation and oldspace matrix exercise in Linear Algebra and Modules.
- Verified: Inspected bounded original exercise and prerequisite pages at 200 dpi and cross-reviewed all six proofs. Independently checked 28,104 exact positive-coefficient/oldspace equalities, three eigenvectors and the characteristic polynomial, four complete finite-field point counts and five dimension calculations; finite checks supplement the written proofs. Checked metadata, numbering, links, MathJax syntax, Study Progress tag discovery, all ten archive queries and source-matching boundaries; preserved unrelated notes and the pre-existing Neukirch change, cleaned source renders, retained full changelog history and synchronized README's latest three entries. No Git publication was performed.

### 2026-10-23 (Diamond–Shurman Exercise Archive Navigation)

- Added: A navigation and source-coverage dashboard for Fred Diamond and Jerry Shurman’s *A First Course in Modular Forms* (2005, corrected fourth printing 2016), recording all 354 audited exercise labels across nine chapters and 70 sections, exact section label sets, printed/PDF anchors, and the zero-exercise §2.5. Appendix A is recorded as selected hints and answers, not additional exercises.
- Connected: Added entry points from Home and the Modular Forms Hub. Dynamic chapter/section coverage and exercise links distinguish numbered provenance from the three existing generic-source notes; initial numbered coverage is 0/354. Missing, duplicate, unexpected and unparsed mappings remain visible, and learning status is kept separate.
- Verified: Checked chapter totals, all 70 section rows and live queries against exercise metadata, source-matching boundaries, links and Markdown syntax. Preserved all existing exercise notes and the pre-existing Neukirch dashboard change; no new exercise or concept notes were created.
