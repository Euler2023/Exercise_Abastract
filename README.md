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

### 2026-11-25 (Hall Chapter 3 Exercise Archive)

- Archived all 22 numbered exercises in Hall §3.9 as LA679–LA691, Rep168–Rep175, and G380. Each English note preserves the original problem and printed hint, gives progressive hints and a complete independent proof, and includes matching readable and S10 source locators. All learning statuses are `not-started`.
- Rechecked printed pp. 73–75 / PDF pp. 85–87 and the Chapter 4 boundary at 200 dpi. The one-to-one audit found zero missing, duplicate, unexpected, or unparsed Chapter 3 mappings. Whole-book coverage is 51/170. The next target is Chapter 4, §4.9, Exercises 1–14.
- Clarified Hall's lower-central-series terminology and the wording of the printed hint to Exercise 15. Expanded the existing Lie Algebras and Matrix Logarithms concepts with the series, complexification, and the local subgroup logarithm. Linked the latter to the orthogonal complement used in Hall's proof.
- Completed non-author proof review, exact symbolic checks, and metadata, provenance, Wikilink, MathJax, and study-tracker validation. Removed task-owned page renders and confirmed their scratch paths are absent.

### 2026-11-25 (Artin Orthogonal Complements)

- Expanded the existing Orthogonal Complement section with searchable aliases, Artin's notation for a subspace or a vector, the hypotheses for double complements and orthogonal sums, and a worked example comparing two forms.
- Linked LA220, LA232, LA233, LA251, LA258, LA279, Bilinear and Hermitian Forms, and the Linear Algebra and Modules hub directly to the section. The Dataview exercise list matches both section and whole-note links.
- Checked the definition, results, and exercise anchors against Artin's original rendered pages. Removed the task's page renders and confirmed both scratch paths were absent.

### 2026-11-22 (Weekly Review Deck 2026-11-16 to 11-22)

- Added: `Attachments/daily-exercise-weekly-review-2026-11-16-to-22.tex/.pdf` — a ~40-page self-contained Beamer deck covering all 42 unique exercises from the seven daily lists of 2026-11-16 to 11-22 (Random Review 21: LA94, LA178, LA188, LA143, LA85, LA106, LA162, LA165, LA191, LA147, LA177, G20, LA91, LA81, LA175, LA131, LA170, LA154, LA179, LA136, LA126; Systematic Progress 21: LA223–LA243, Artin Ch. 8 §4 Ex. 4.14–4.21, §5, §6). Every exercise gets its exact statement with printed/PDF locators, a one-line strategy, a step-by-step derivation with intermediate equations, and a concrete verification or counterexample; plus overview, two quick-reference tables, five method cards, pitfall/boundary notes, a ten-question self-test, and per-exercise PDF bookmarks. LA188's printed Binet-formula defect (right side independent of n) is reported under both literal and intended readings, not silently corrected.
- Verified: The 11-21 daily list was missing when the task started; it was generated by the user via the plugin's backfill command (no hand-editing of managed blocks), then re-read before authoring. No note frontmatter, status, list content, or Exercise Manager state was touched. Computational claims re-checked with NumPy (17 checks, all passing): LA188 Binet + averaging limit, LA91 subspace brute-force counts for p = 2,3 vs Gaussian binomials, LA224–LA227, LA170 commutator spectrum, LA154 orbit ranks, LA147, LA178/LA177 via a scaling–squaring matrix exponential (initial FAILs were script bugs — element-wise exp and a truncated incremental Gauss-binomial — not note errors), LA131, LA233, LA229, LA241, LA162. Built with xelatex (3+ passes): zero errors, zero Overfull/Underfull, zero missing characters, no undefined references or `??`; footer and per-exercise content presence checked programmatically. Visual page inspection was not possible (current model has no image input); layout validated via log-level and text-extraction checks, so a quick visual skim is still recommended.
- Cleanup: All scratch work (verification script, build directory, text dumps) stayed in the system temp directory; one temp wipe by the OS mid-task forced a re-write of the source, after which the directory was removed and its absence confirmed. No superseded artifact was removed.
