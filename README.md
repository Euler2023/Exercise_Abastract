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

### 2026-11-27 (Gram Determinants)

- Added a linear algebra concept note on Gram matrices and determinants, including the independence criterion, the Gram-Schmidt product, volume and distance formulas, the sum of squared minors, and the induced exterior-power norm.
- Linked the note from the topic hub, Determinants, Inner Product Spaces, and six existing exercises. The concept page uses Dataview to list linked exercises.
- Verified original page images for Artin's Hermitian form conventions and Gram-Schmidt construction, Neukirch's volume and exterior-power formulas, and Hall's definition and rank-two computation. Recorded their printed and physical page anchors and identified the independent derivations. Confirmed the task-owned textbook renders and preview scratch path were absent.

### 2026-11-25 (Hall Chapter 3 Exercise Archive)

- Archived all 22 numbered exercises in Hall §3.9 as LA679–LA691, Rep168–Rep175, and G380. Each English note preserves the original problem and printed hint, gives progressive hints and a complete independent proof, and includes matching readable and S10 source locators. All learning statuses are `not-started`.
- Rechecked printed pp. 73–75 / PDF pp. 85–87 and the Chapter 4 boundary at 200 dpi. The one-to-one audit found zero missing, duplicate, unexpected, or unparsed Chapter 3 mappings. Whole-book coverage is 51/170. The next target is Chapter 4, §4.9, Exercises 1–14.
- Clarified Hall's lower-central-series terminology and the wording of the printed hint to Exercise 15. Expanded the existing Lie Algebras and Matrix Logarithms concepts with the series, complexification, and the local subgroup logarithm. Linked the latter to the orthogonal complement used in Hall's proof.
- Completed non-author proof review, exact symbolic checks, and metadata, provenance, Wikilink, MathJax, and study-tracker validation. Removed task-owned page renders and confirmed their scratch paths are absent.

### 2026-11-25 (Artin Orthogonal Complements)

- Expanded the existing Orthogonal Complement section with searchable aliases, Artin's notation for a subspace or a vector, the hypotheses for double complements and orthogonal sums, and a worked example comparing two forms.
- Linked LA220, LA232, LA233, LA251, LA258, LA279, Bilinear and Hermitian Forms, and the Linear Algebra and Modules hub directly to the section. The Dataview exercise list matches both section and whole-note links.
- Checked the definition, results, and exercise anchors against Artin's original rendered pages. Removed the task's page renders and confirmed both scratch paths were absent.
