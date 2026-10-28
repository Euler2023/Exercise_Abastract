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

### 2026-10-28 (Diamond-Shurman Chapter 2 Exercise Archive)

- Added: 21 complete English exercise notes, one per previously missing Chapter 2 source number: G351–G357, LA592–LA599, MF35–MF39, and AG70. Every original subpart is retained with progressive collapsed hints, a complete independent solution, exact S7 structured provenance and printed/PDF anchors, and a not-started learning state. Preserved 2.3.2 → LA580 and 2.3.5 → MF2 without rewriting them. Chapter 2 is now 23/23; whole-book numbered coverage is 63/354, with 291 source labels still unarchived.
- Connected: Added Modular Curve Charts and Cusp Widths in the existing Modular Forms concept directory, with definitions, quotient-chart proofs, examples, source/proof boundaries and a dynamic exercise-backlink query. Linked it from the existing hub and moduli concept. Routed each exercise by its main proof tools; the batch creates no directories and requires no Canvas or report-count changes.
- Clarified visibly: Distinguished effective periods from matrix orders and effective cusp widths from unsigned matrix stabilizers; used the determinant's trace congruence modulo N squared to cover N=2,3; proved both positive integer local exponents for rational-matrix maps. G355 records that Lemma 2.3.1's termination proof has finitely many larger heights, although translations give infinitely many transformed points. MF38 records the surrounding text's Y(Γ)/X(Γ) cusp-chart typo; MF2 retains its earlier s(τ) inverse-direction correction. LA596 names the imported PID torsion-free module theorem and proves the required Euclidean ring facts.
- Verified: Inspected original exercise pages and bounded context/appendix pages at 200 dpi and independently cross-reviewed all 21 solutions and the new concept. Exact arithmetic checks verified two orientation-changing conjugations, six distinct mod-2 representatives, the low-level matrix powers and stabilizer lists (4 and 3 elements), the trace congruence for 114 sampled determinant-one matrices, and all three trace obstructions for primes 11,23,47,59,71,83. These finite checks supplement the proofs. Executed all ten archive dashboard scripts against the vault's actual exercise metadata: Chapter 2 sections 3/3,5/5,8/8,7/7; §2.5 has no numbered exercises; missing, duplicate, unexpected and unparsed Chapter 2 mappings are all zero, and book-level reconciliation has no duplicate, unexpected or unmatched mappings. Checked numbering, YAML, path links, balanced Obsidian math, dynamic concept backlinks and Study Progress tag discovery; the whole-vault English scan covered 2,270 exercise/concept notes without residual Chinese or fullwidth prose. These are source, proof and static syntax checks, not an Obsidian reading-view render test.
- Preservation and cleanup: Retained unrelated user edits and the generated daily lists; did not change the Exercise Manager state, plugin, Bases, Canvases, source PDF, learning progress, Git branches, commits or remotes. Recorded the completed reconciliation in the permanent chapter status, advanced the next source pointer to Chapter 3 §3.1, removed temporary batch notices and task-owned source renders, and synchronized README's latest-three excerpt while preserving the full history.

### 2026-10-26 (Unified Research Paper Exercise Ledger)

- Added: A single English Research Paper Exercise Ledger in 00 - Home, grouping the five registered papers and their ten adapted exercises across topic folders. Each paper records its bibliographic identity, local PDF, selected results, adaptation scope and source issues; live tables derive exercise links, exact source/page strings and learning states from existing metadata. A dynamic overview flags paper references that have no registered section.
- Distinguished: Recorded G105's existing attribution to the 1993 homophonic-group paper as a related paper-based proof awaiting original-source verification, separate from direct paper adaptations. Preserved the distinction between registration, full-paper coverage, proof scope and learning progress, including the current daily sampler's textbook-source boundary.
- Connected and verified: Added a Home navigation link and executed all six embedded table/overview scripts against actual vault metadata in a compatible offline harness: five groups of two, ten unique exercises, no concept-note contamination and a working future-source warning. Checked YAML, English text, links and formula delimiters, and synchronized README's latest-three excerpt. No exercise, concept, source PDF, Base, Canvas, plugin, runtime state or generated daily list was modified by this ledger change.

### 2026-10-26 (LA589 and Shared Jordan Notation)

- Clarified: Named and defined the size-two Jordan block J_2(1) at its first use in LA589(d), explained its letter and size subscript, and expanded the diagonal matrix in part (c). Added an entrywise definition of J_r(a) and the block diagonal convention to the shared Invariants Coinvariants and Weak Semisimplicity concept so it is independently readable.
- Verified: Checked both complete notes for English text, metadata, links and balanced Obsidian math delimiters; retained the problem tasks, proofs, source provenance and not-started learning states. Synchronized README's latest three entries and preserved the complete changelog history.
