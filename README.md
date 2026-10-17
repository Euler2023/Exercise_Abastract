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

### 2026-10-17 (Weekly Daily Exercise Review Deck)

- Added: A 30-page Chinese Beamer review of this week's six Daily Exercise Lists (`10 - Daily Exercise Lists/Daily Exercise List - 2026-10-12.md` to `2026-10-17.md`): 25 exercises (22 group theory, 3 linear algebra) covering Artin Ch. 7 §7.2 conjugation and the class equation (8), §7.3 p-groups and the fixed-point theorem (4), §7.4 group actions on the Platonic rotation groups (9) and §7.5 symmetric groups (4). Saved as `Attachments/daily-exercise-weekly-review-2026-10-12-to-17.tex` with its compiled `Attachments/daily-exercise-weekly-review-2026-10-12-to-17.pdf`, marked as the 2026-10-18 review-session edition.
- Clarified: Each exercise group now carries a derivation rather than a conclusion: the orbit-stabilizer and class-equation proofs; LA198's five matrix centralizers solved by hand (A3 via PE12 = E12P, A4 via N = E12 + E23, A5 via centrosymmetry); the complete divisibility chains of G125 and G127; LA199 (24 = 1+1+4+4+4+4+6) with the lambda^2 scaling argument for U1 not similar to U-1; G197 (|Z| = p excluded from p^2 by the cyclic-quotient lemma, |Z(x)| = p^2, p^3 = p+(p^2-1)p); G198 (nonabelian case forced to D4 or Q8 by b^2 in {1, a^2}, with the element-order profiles that separate them); S4 and A5 class sizes from the cycle-type centralizer formula, including the parity reason why a 3-cycle is not conjugate to its inverse in A4; the T/O/I rotation-axis counts and the A4 < S4 inscribed-tetrahedron argument; G208's adjacent-transposition identity with the cycle-count minimality bound; and the connectivity lemma behind Lang I.38(d).
- Extended: A per-day overview listing the ordered exercise IDs, a 77-minute session agenda with page references, two answer-key tables covering all 25 exercises, six reusable method cards with trigger conditions, an error/source-issue page, eight self-test questions keyed to the answer pages, and a note on folding 10-18's three exercises into the deck. Three TikZ figures remain (per-day bar chart, orbit-decomposition diagram, cube with its two inscribed tetrahedra).
- Layout: 16:9 ctexbeamer in the vault's existing ink/accent/gold/green palette with a footline citing the week and frame number, so all mathematics stays native vector LaTeX and is selectable in the PDF.
- Source: Every statement, exercise ID, printed/PDF page and solution conclusion was taken from the six lists and the 25 existing notes, which record their own source verification; no Artin or Lang PDF page was re-rendered for this review. No exercise note, concept, hub, Base or Canvas file was modified.
- Verified: Two XeLaTeX passes under TeX Live 2023 with zero Overfull, Underfull and Missing-character warnings; 30 pages at 453.54 x 255.12 pt with PDF title/subject metadata. All 30 pages were rendered and inspected page by page (table widths, TikZ label placement, inline-formula line breaks, CJK glyphs, footline collisions); this found and fixed an overflowing inline sum, an oversized answer-key table, a squashed geometric table, the axis wording, and two class-membership arguments. Every exercise ID was checked against the vault, the formulas against the corresponding notes, and the page cross-references in the agenda, answer keys and self-test list against the final pagination. README's latest-three excerpt was synchronized, and build intermediates were kept outside the vault.

### 2026-10-17 (Neukirch I.5 Minkowski Theory Exercises)

- Added: Archived all three exercises of Chapter I §5 as LA537-LA539 in Linear Algebra and Modules. Each retains the complete English problem and any printed hint, supplies progressive collapsed hints and a complete independent derivation, records printed p. 34 / PDF p. 53, links existing prerequisites, and remains not-started.
- Clarified: Gave an explicit field-dependent constant for simultaneous embedding bounds; calculated canonical convex-body volume using real signs, complex polar coordinates, the canonical measure factor, and an elementary simplex integral; and derived the Minkowski norm bound with a rigorous least-positive-integer-norm endpoint argument. Preserved Exercise 2's unstated parameter range, visibly explained validity for t >= 0 and failure for t < 0, and supplied the full real-parameter formula. Distinguished all-embedding sums and products from one-per-complex-pair coordinates, and included the degree-one equality case.
- Updated: Expanded the existing Lattices in Euclidean Space concept with the Minkowski embedding, canonical metric and volume, ideal-lattice covolume, and field-norm conventions; retained its dynamic exercise backlinks and learning/source-status metadata. Reconciled I.5.1-I.5.3 as 3/3 complete with zero missing, duplicate, unexpected or unparsed source mappings. Added the independent I.§6 The Class Number query and advanced both next-target pointers. No new concept or directory was needed; the full Chapter I total remains unaudited.
- Verified: Inspected the original exercise page and relevant definitions and theorem inputs on printed pp. 29-34 / PDF pp. 48-53 at 200 dpi, and checked the registered PDF hash. Independently cross-reviewed all three proofs and the concept additions. Checked numbering, metadata, path-qualified links, Obsidian formula syntax, tracker-tag discovery, preserved prior batches and other existing notes, and complete changelog history. Executed all eight dashboard query blocks in a local Dataview simulation using real vault metadata, synchronized README's latest-three excerpt, and removed temporary source renders.

### 2026-10-17 (Neukirch I.4 Lattices Exercises)

- Added: Archived all three exercises of Chapter I §4 as LA534-LA536 in Linear Algebra and Modules. Each retains the complete English problem and any printed hint, supplies progressive collapsed hints and a complete independent derivation, records exact printed/PDF pages, links existing prerequisites, and remains not-started. The two tasks in Exercise 2 stay in one note.
- Clarified: Proved the full-lattice/compact-quotient equivalence with the quotient topology and Hausdorff property; gave the open-parallelepiped equality counterexample and the compact equality proof using finite lattice intersections and a fixed nonzero point; and derived the simultaneous strict linear-form bounds from the image lattice. Preserved Exercise 3's omission of a nonzero-vector condition, explained that the printed statement is true but trivial at zero, and proved its stronger nonzero form. Stated the positive-dimensional scope of the equality conclusion and its zero-dimensional exception.
- Updated: Expanded the existing Lattices in Euclidean Space concept with Neukirch's full-rank terminology, determinant/Gram covolume formulas, the strict Minkowski theorem and its proof status; preserved its dynamic exercise backlinks and learning/source-status metadata. Reconciled I.4.1-I.4.3 as 3/3 complete with zero missing, duplicate, unexpected or unparsed source mappings. Added the I.§5 Minkowski Theory query and repaired the stale bottom next-target pointer so both navigation locations agree. No new concept or directory was needed; the full Chapter I total remains unaudited.
- Verified: Inspected original printed pp. 24-28 / PDF pp. 43-47 at 200 dpi and checked the registered PDF hash. Independently cross-reviewed all three proofs and the concept additions. Checked numbering, metadata, all affected path-qualified links, formula delimiters and braces, tracker-tag discovery, concept backlinks, preservation of the prior I.§3 batch and other existing notes, and the full changelog history. Executed all seven dashboard query blocks in a local Dataview simulation with real vault metadata, synchronized README's latest-three excerpt, and removed temporary source-page renders.
