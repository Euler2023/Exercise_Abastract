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

### 2026-11-17 (Hall Chapter 2 Exercise Archive)

- Archived: Completed all 11 numbered exercises in Hall Chapter 2, Section 2.6 as LA668–LA678, preserving complete English statements, multipart structure and printed hints, with progressive hints, full independent derivations, precise readable/S10 provenance, and not-started learning states. Rechecked the original 200 dpi exercise pages, printed pp. 46–48 / PDF pp. 58–60, the chapter boundary, and the required definitions, examples, local logarithm results and appendix statements. The pre-archive source set and final notes reconcile one-to-one, with zero missing, duplicate, unexpected or unparsed Chapter 2 mappings. Whole-book coverage is 29/170; the next target is Chapter 3, Section 3.9, Exercises 1–22.
- Connected and clarified: Added Hilbert-Schmidt Norm and Matrix Logarithms in the existing Linear Algebra concept folder, with dynamic exercise backlinks and hub entries. Preserved the Exercise 5 hint's printed b^m entry, supplied a counterexample and proved the d^m correction. Specified forward time and the stable exceptional line in Exercise 8; separated local logarithms, nilpotent polynomial inverses and global complex logarithms. The appendix's triangularization and generalized-eigenspace results are named inputs, not falsely called source-proved results. Figure 2.1 was inspected but requires no retained asset.
- Verified: Every new exercise and both concepts received non-author mathematical review. Exact symbolic checks covered the norm, ordered product rule, triangular powers/exponentials, trace-zero and explicit 2-by-2 calculations, both flow equations/eigenpairs, and nilpotent inverse identities for Jordan sizes 1–5. Executed the live ledger against actual metadata and checked numbering, YAML, source pages, links, Obsidian formula syntax, dynamic backlinks and Study Progress discovery. The English scan of all 2,594 exercise/concept files passed. Preserved all pre-existing notes, the user's current changelog/README changes, daily lists and weekly deck files; no runtime state, plugin, Base, Canvas, report count, learning progress or Git publication was changed. Retained the complete history and synchronized README's latest-three excerpt.
- Cleanup: Removed task-owned page renders, baseline metadata and validation files after their checks. All Hall Chapter 2 audit, author and review scratch paths were confirmed absent; pre-existing temporary content was preserved.

### 2026-11-15 (Weekly Review Deck 2026-11-09 to 11-15)

- Added: `Attachments/daily-exercise-weekly-review-2026-11-09-to-15.tex/.pdf` — a 41-page self-contained Beamer deck covering all 42 unique exercises from the seven daily lists of 2026-11-09 to 11-15 (Random Review 21: F28, LA163, LA148, LA97, LA140, LA158, LA118, F29, LA77, LA183, LA167, LA93, LA149, LA105, LA90, G182, LA79, G190, LA134, LA145, G152; Systematic Progress 21: LA202–LA222, Artin Ch. 8 §2–§4). Every exercise gets its exact statement with printed/PDF locators, a one-line strategy, a step-by-step derivation with intermediate equations, and a concrete verification or counterexample; plus a 7-day overview table, two quick-reference tables, five method cards, pitfall/boundary notes, and a ten-question self-test. PDF outline has section-level and per-exercise bookmarks. LA148's printed sign error (eigenvalue 2 vs −2) is reported under both literal and intended readings, not silently corrected.
- Verified: Snapshot re-read from all seven generated lists; no note frontmatter, status, daily-list managed block, or Exercise Manager state was touched. Computational claims independently re-checked with NumPy (14 checks, all passing): LA163(b)(c) orthogonality/determinant/axis, LA145, LA90 brute force for p = 2,3,5, LA208 counterexample eigenvalues, LA214(a)(b) Gram diagonals, LA215 Hadamard orthonormality, LA216, LA217, LA218 (numerical integration), LA221 trace values, F29 mod-2 identities, LA148 characteristic roots; two initial test-script construction errors (matrix column order, Jordan diagonal) were diagnosed as script bugs, not note errors. Built with xelatex (3+ passes): zero errors, zero Overfull/Underfull, zero missing characters, no undefined references or `??` in extracted text; footer/structure presence checked programmatically. Visual page-by-page PNG inspection could not be performed because the current model has no image input; layout was validated via log-level and pixel-band checks instead, so a quick visual skim of the deck is still recommended.
- Cleanup: All scratch work (verification script, build directory, PNG renders, text dumps) was kept in the system temp directory and removed after delivery; both temp paths confirmed absent. No superseded artifact was removed.

### 2026-11-12 (Hall Exercise Source Ledger and First Chapter)

- Added: Established the Hall second-edition archive ledger before writing any exercise note. Audited all 170 numbered exercises in 13 chapters against the original 200 dpi exercise pages and boundaries, retaining exact ordered source keys, chapter totals, printed/PDF anchors, page-by-page distributions, appendix inventory limits, visible source-issue candidates, and figure-verification boundaries. The permanent source ID remains S10; the 452-page PDF identity and SHA-256 were verified. Linked the ledger from Home, with live coverage, source-reconciliation warnings, and per-chapter mappings.
- Archived: Completed Chapter 1, Section 1.6, Exercises 1–18 as LA651–LA667 and G379, with complete English statements and printed hints, progressive hints, independent full solutions, precise readable/structured source provenance, existing prerequisite links, and not-started learning states. One-to-one reconciliation has zero missing, duplicate, unexpected, or unparsed Chapter 1 mappings. Whole-book coverage is 18/170; the next target is Chapter 2, Section 2.6, Exercises 1–11. Preserved the source's Exercise 12 endpoint orientation and distinguished compact Sp(n) from Hall's and Artin's noncompact symplectic notation.
- Verified: Every new exercise received non-author mathematical review. Exact symbolic checks covered the symplectic determinant identity, Heisenberg group law and commutator, SU(2) norm/determinant, the orientation adjustment, and the centralizer span. Executed the coverage script against actual metadata and seven reconciliation edge cases; checked numbering, YAML, source pages, links and anchors, Obsidian formula syntax, Study Progress discovery, and all 2,581 exercise/concept files for residual Chinese/fullwidth prose. Preserved all existing notes and the pre-existing generated daily list; no learning progress, runtime state, plugin, Base, Canvas, report count, Git branch, commit, or remote was changed. Retained the complete changelog history and synchronized README's latest-three excerpt.
- Cleanup: Removed all task-owned source renders, extraction metadata, and validation files after their checks; the Hall audit, review, and first-chapter scratch directories were confirmed absent. Pre-existing temporary content was preserved.
