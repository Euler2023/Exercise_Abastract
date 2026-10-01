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
├── 09 - Daily Exercise Lists/  # Daily Markdown todo lists
├── 10 - Set Theory and Foundations/  # Concepts and exercises
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

### 2026-10-01 (Permutation Matrices in Symmetric Groups)

- Expanded: Added permutation matrices to Symmetric Groups, including the basis-vector and entry definitions, coordinate reindexing, the three-cycle example, composition and inverse/transpose proofs, row/column permutations, and determinant sign with the characteristic-two boundary. Linked the matrix prerequisites and existing exercises; preserved learning statuses.
- Verified: Visually checked Artin, second edition, section 1.5 (printed pp. 26-27 / PDF pp. 38-39), distinguishing the textbook's proved product formula from its omitted verifications and the independent derivations supplied here. Reviewed convention consistency with existing notes and checked metadata, links, formula delimiters, dynamic exercise backlinks, and tracker discovery.

### 2026-09-29 (Simplify Lang Archive Coverage)

- Removed: The entire Verified Chapter Coverage section from the Lang archive dashboard, including its repeated table and reconciliation narratives. Chapter and appendix coverage, scope notes, all independent exercise mappings, and source-issue records remain intact.

### 2026-09-29 (Separate Textbook Archive Mapping Views)

- Fixed: Neukirch now has real chapter and section headings with independent queries for I.1 and the next I.2 batch, replacing the single combined exercise table. Chapter overview and source-reconciliation records are preserved; future batches must receive their own section query.
- Fixed: Restored separate Lang mappings for Chapters XIV-XVII and split the combined final table into Chapters XIX, XX, XXI, and Appendix 2. Existing summary counts, source audits, exercise notes, and learning states are unchanged.
- Verified: Executed the queries against vault metadata: Neukirch I.1 contains seven notes and I.2 remains empty; Lang displays all 529 source labels exactly once across 22 separate mapping tables. Checked chapter/section/edition boundaries, numeric ordering, repeated source segments, note links, and README's latest-three excerpt.
