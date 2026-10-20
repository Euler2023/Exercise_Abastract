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

### 2026-10-20 (Neukirch Chapter I Archive Complete — 75/75)

- Completed: Chapter I now has 75 numbered source exercises mapped one-to-one to 75 notes across all 14 sections. This batch added 44 notes (R345–R369, LA540–LA546, Gal141–Gal148, G331–G332 and F126–F127), reused I.8.2/R329, and recorded the verified zero-exercise sections I.13–I.14. All new notes remain not-started. Each numbered problem retains all its subparts, progressive hints, a complete independent solution, precise printed/PDF provenance and prerequisite links.
- Preserved and corrected visibly: I.6.2's impossible discriminant 11, I.9.2's wrong Frobenius exponent, and I.12.1's reversed parameter hint; R329's complete counterexample remains unchanged. Existing concepts now distinguish a Frobenius cycle from the entire Galois group, retain only the valid divisibility-to-cyclotomic-containment implication with a counterexample to its converse, and state residue/ramification hypotheses explicitly. Added one general Dirichlet-unit/logarithmic-lattice concept, its Hub entry and dynamic exercise backlinks; expanded only the concepts needed by this batch.
- Source audit: Checked bounded original pages at 200 dpi and independently cross-reviewed every new solution. Re-rendered the previous §1–§5 exercise pages and rechecked their 30 ordered labels. The permanent dashboard records all section totals, source anchors, the full 75-label chapter set and successful reconciliation; missing labels, duplicates, unexpected labels and unparsed source locators are all zero. The next archive pointer is Chapter II §1.
- Exact computational checks: Rechecked R329's multiplication relations, discriminant −503, all 8 quotient elements and all 64 quotient products; checked the six fundamental-unit norms; enumerated Pell-13 coefficients 1–5000 (first positive pair 649,180) and all norm-seven solutions with −10000 ≤ y ≤ 10000 (40 pairs), agreeing with the proved two-orbit classification. These bounded checks supplement the complete proofs; they are not substitutes for them.
- Final validation: Executed all 15 dashboard queries against actual note metadata: Chapter I reports 75/75, 75 files and Complete, with all 14 section results correct. Checked numbering, metadata, not-started states, topic routing, source parsing, path-qualified links, Obsidian math delimiters, dynamic backlinks and the existing Study Progress exercise-tag filter. Removed temporary source renders, retained complete changelog history and synchronized README's latest three entries. Baseline hashes preserve existing rules, daily lists, review artifacts and unrelated changes. No Git commit or publication was performed.

### 2026-10-20 (Neukirch I.13–I.14 Zero-Exercise Source Audit)

- Audited: Visually checked §13 One-dimensional Schemes (printed pp. 84–93 / PDF pp. 103–112) and §14 Function Fields (printed pp. 94–97 / PDF pp. 113–116): neither contains a numbered exercise group. Body subsection numbers and references to earlier exercises are not new exercise labels.
- Recorded: Both permanent section ledgers have the empty expected label set, verified total 0 and clean reconciliation. No extra exercise note was created; the Chapter II boundary was checked at printed p. 99 / PDF p. 118.

### 2026-10-20 (Neukirch I.12 Orders Exercises)

- Archived: Reconciled all 5 source exercises of Chapter I §12 (printed p. 84 / PDF p. 103), with one note per number and complete multipart structure; new learning states remain not-started.
- Explained: Computed four curve normalizations including the total quotient ring of the reducible example, preserved and corrected the reversed parameter ratio in the printed hint, proved the biquadratic-order unit identity, the complete-module multiplier order, both Pell norm-seven orbits, and the regular/invertible-prime equivalence.
- Verified: Inspected original source pages at 200 dpi, independently cross-reviewed the mathematical arguments, and checked source provenance, metadata, numbering, links and Obsidian formula syntax. All four source exception sets are empty. Preserved existing user changes and complete changelog history; synchronized README’s latest-three excerpt.
