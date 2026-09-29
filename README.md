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

### 2026-09-29 (Neukirch Chapter I Section 1 Trial Archive)

- Added: All seven exercises from Chapter I section 1, The Gaussian Integers, as R322-R328 in Ring Theory, checked against printed p. 5 / PDF p. 24. Each note preserves the original problem, supplies progressive hints and an independent solution, and remains `not-started`; existing concepts are reused.
- Verified: The source labels I.1.1-I.1.7 reconcile one-to-one. Mathematical cross-review covers the Gaussian power and Pythagorean arguments, the elementary infinite-unit proof, and the complete units/prime-elements classification for the square-root-of-two ring. Metadata, source anchors, links, formula syntax, and tracker discovery were checked.
- Updated: The Neukirch dashboard now distinguishes completed section coverage (7/7) from the still-unaudited Chapter I total; the next target is section 2, Integrality.

### 2026-09-29 (Changelog History Separation)

- Reorganized: Preserved the complete change history in `CHANGELOG.md`; README now shows only the latest three entries with a link to the full history. Updated the repository guidelines to keep both files synchronized on future changes.

### 2026-09-29 (Neukirch Exercise Archive Dashboard)

- Added: A Neukirch Algebraic Number Theory archive dashboard modeled on the Lang archive, with seven source-checked chapter titles, dynamic chapter coverage and exercise mappings, source-locator checks, and a Chapter I next-target pointer. Exercise identities include chapter, section, and number because numbering restarts between sections. Full source totals remain explicitly unaudited; no exercise notes or learning states were changed. Linked the dashboard from the home page.
