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

### 2026-10-25 (Weekly Daily Exercise Review Deck, 2026-10-19 to 10-25)

- Added: A 67-page Chinese Beamer review of the five Daily Exercise Lists actually present this week (10-19, 10-20, 10-23, 10-24, 10-25; 10-21 and 10-22 have no lists and were not backfilled): 30 exercises = 15 Random Review (Artin Ch. 6: plane isometries, wallpaper groups, polyhedra, group actions, matrix and lattice actions) + 15 Systematic Progress (Artin Ch. 7 §5–§7: $S_n$ class equations, $A_n$ splitting, normalizers, Sylow). Saved as `Attachments/daily-exercise-weekly-review-2026-10-19-to-25.tex` with its compiled PDF; the source figures for G157, G153, G109 and G16 are embedded from the verified `Attachments/` assets.
- Clarified: Every exercise follows the same template — exact statement with printed/PDF locator, one-line strategy, step-by-step derivation with displayed intermediate equations, and a concrete verification or counterexample. The deck records its snapshot (2026-10-25 19:16; the 10-25 list was generated at 19:15) and keeps Random Review and Systematic Progress separate.
- Corrected: G225's note solution claimed "$n_5=1$ or $4$, hence 4 or 16 elements of order 5"; Sylow III gives $n_5\mid4$ and $n_5\equiv1\pmod5$, so $n_5=1$ and every group of order 20 has exactly 4 elements of order 5 ($C_5\rtimes C_4$ has 4, not 16); the deck includes an explicit errata. G157's $p4g$ stabilizers were tightened: mirror-axis intersections are 2-fold centres ($D_2$); $D_4$ occurs only in $p4m$. G16's completeness argument now also excludes the horizontal reflection/glide cases; G149 adds the reflection formula; G192 records the missing boundedness/cocompactness hypothesis; G153 adds the lift/origin-change formula; G173 spells out the uniqueness of the four $S_3$-sets. G219's $S_8/A_8$ class equations were recomputed with Python ($40320/20160$), and G216/G217 were rechecked.
- Verified: Three XeLaTeX passes under TeX Live 2023 with zero errors, zero Overfull/Underfull boxes, zero missing characters and no unresolved references; 67 pages at 453.54 × 255.12 pt; all 67 pages were rendered and inspected (contact sheets plus targeted high-resolution pages). Independent Python checks covered the $S_8/A_8$ class equations; G216 counts for $n=3,\dots,8$; G217 centralizers; G225's five order-20 groups; G226's Sylow counts and the order-12 case; G149's 12 lattice automorphisms; G173's 34 homomorphisms falling into 4 $S_3$-set classes; G157's stabilizer models; and G181's dodecahedron/icosahedron symmetry matrix sets. No exercise note, concept, hub, Base or Canvas file was modified.
- Note: The G225 and G157 exercise notes still carry the old wording; this deck carries the corrections. They were deliberately not edited in this batch.

### 2026-10-24 (Uniform Solution Callout Titles)

- Standardized: Normalized 677 solution-callout headers in 676 exercise notes to the exact collapsed form `> [!success]- Solution`. All 1,970 solution callouts across 1,968 exercise notes now use this form, including the former solution-type alias, an uncollapsed callout, a misspelling and trailing-space variants.
- Preserved: Moved informative previous titles into the existing callout body as proof-scope text or method headings, retaining independent-derivation provenance, corrected hypotheses, proof-status limits, the Lang Exercise 27 distinction and both named proofs in LA184. Mathematical arguments, formulas, other callouts, note metadata, source references and learning states are unchanged.
- Prevented recurrence: Made the exact header explicit in AGENTS.md and CLAUDE.md; the existing exercise template already matches. Verified the header inventory and exact content-preservation checks, retained prior user changes and daily-plugin state, and synchronized README's latest-three excerpt. No archive counts or exercise statuses were changed.

### 2026-10-24 (Diamond–Shurman Chapter 1 Archive)

- Archived: All 36 numbered Chapter 1 exercises, preserving complete English statements and subparts, progressive collapsed hints, complete independent solutions, precise printed/PDF anchors, stable S7 source references and not-started learning states. Topic routing follows the principal toolkit: MF14–MF34 (21), LA582–LA587 (6), AG65–AG69 (5), G347–G349 (3) and R425 (1). Existing exercise notes and the current daily list are preserved.
- Connected: Added Complex Tori and Isogenies, Weierstrass Elliptic Functions, and Modular Curves and Moduli in existing concept directories, with dynamic exercise backlinks and the relevant Hub entries. Retained Figure 1.1 as a verified direct crop and faithfully transcribed the Weil-pairing square. Updated the dedicated Diamond–Shurman ledger from a pre-archive source audit to permanent Chapter 1 completion: section totals 9/9, 11/11, 3/3, 5/5 and 8/8; no missing, duplicate, unexpected or unparsed mappings. Whole-book coverage is now 42/354, with the next source group Chapter 2 §2.1.
- Corrected visibly: Preserved the printed derivative in 1.1.9 and restored its missing factor; supplied the global growth estimate and explicit exponent adjustment needed by 1.2.6; documented the lemma and triangularization-hint misreferences in 1.2.11; separated the N=1 identity from the exact-order-two Fricke assertion; and identified the double-d generator-sum misprint referenced by 1.5.8. Distinguished the two discriminant normalizations, the weight-two endpoint, literal equality versus isomorphism, meromorphic domains, and all named external proof inputs.
- Verified: Inspected the original exercise, prerequisite and appendix pages at 200 dpi and independently cross-reviewed all 36 solutions and three concepts. Exact finite checks covered 1,566 determinant-one residue matrices and lifts at seven moduli, 692 small determinant-one integral matrices, 702 Gamma-zero-four descent inputs, Bernoulli recurrence through B12 and the divisor convolution through n=200; these checks supplement the proofs. Executed all ten archive queries against actual metadata, checked metadata, English text, numbering, links, Obsidian math syntax and Study Progress tag discovery, and sampled an actual Obsidian reading view. Preserved protected-file hashes, removed temporary source renders and scripts, retained complete changelog history and synchronized README's latest-three excerpt. No new folder, Base, Canvas, Git commit or publication was created.
