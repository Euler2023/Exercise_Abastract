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

### 2026-10-16 (Icosahedral and Octahedral Groups Slide Deck)

- Added: A 76-slide Chinese teaching deck for the icosahedral-group ($I\cong A_5$) and octahedral-group ($O\cong S_4$) exercises, saved as `Attachments/正二十面体群与正八面体群题目精讲.pptx`. It covers 31 vault exercises, each on two slides (problem page with exact source locator, statement, and hints; then a solution page with the key steps and the conclusion), plus notation and group-overview pages, $S_4$ and $A_5$ character-table reference pages, five section dividers, two quick-reference tables, and a source/method page. The generator stays as `tmp/make_io_deck.py` with its content module `tmp/io_deck_content.py`.
- Selected: Used the local Exercise Manager CLI (`lm.cmd search ... --keyword --json`) to find the vault's icosahedral/octahedral clusters, then grouped them into five sections: Artin Ch. 6 §9/§12 and M.4 (G166, G181-G186, G190), Ch. 7 §4 (G199-G204), Ch. 7 §11 (G254-G256), Ch. 9 M.9 (G146) with Rep108, and Ch. 10 §1-§6 with Lang XVIII.12 (Rep49, Rep50, Rep55, Rep58, Rep79, Rep80, Rep82-Rep85, Rep136).
- Noted: Every statement, hint, and solution step was copied from the existing source-verified notes; per the user's instruction this batch did not re-render any Artin or Lang PDF page, so the printed/PDF anchors are those already recorded in the notes. Because PPTX does not render LaTeX, all formulas are Unicode text, and symbols missing from the deck font (semi-direct product, wreath product, normal-subgroup triangle, tensor sign, hook arrow, blackboard P, warning sign) were replaced by words or plain equivalents.
- Verified: The bundled office checker passes on the deliverable (76 slides, package integrity, all required strings present) and the LibreOffice renderer reported no missing fonts. All 76 slides were rendered at 80 dpi and inspected for clipping, overlap, and notation; the `_n` subscripts, character-table cells, and box heights were corrected and the deck regenerated. No exercise note, frontmatter, status, hub, Canvas, or Base file was modified, and the temporary previews and draft PPTX files were deleted.

### 2026-10-16 (Colimits and Universal Constructions)

- Added: An independent Colimits concept page with the general small-diagram universal property, compatible-isomorphism uniqueness, coproduct/coequalizer/pushout examples, and the direct-sum quotient construction for arbitrary small diagrams of modules. Supplied complete independent proofs of the module construction, finite-presentation criterion, and right exactness, with explicit counterexamples to single-stage reasoning and exactness for unrestricted colimits.
- Compared: Checked Vakil's general categorical definitions and Exercise 1.3.H against Lang III §10 and Theorem 10.1. Distinguished general colimits, filtered diagrams, and directed-poset direct limits; recorded that the cited module universal-property verifications are left as exercises, rather than source-written proofs.
- Connected: Added the concept to the existing module constructions hub and linked 13 existing exercises on pushouts, free products, direct sums, directed limits, finite presentation, tensor products, flatness, and extensions. Clarified the scope of Direct and Inverse Limits, retained its historical alias, and preserved exercise problem statements, solutions, metadata, and learning states. No new exercise or directory was needed.
- Verified: Inspected the bounded original Vakil and Lang PDF pages at 200 dpi, independently cross-reviewed the mathematical arguments, and checked metadata, path-qualified links, Obsidian formula delimiters, dynamic exercise backlinks, tracker discovery, and the task diff. Synchronized README's latest three entries while preserving the full changelog and unrelated changes; temporary source images were removed.


### 2026-10-14 (Irreducibility, Function Fields, and Riemann Surfaces)

- Added: Three concept notes for Irreducible Polynomials, Function Fields, and Riemann Surfaces, with searchable aliases, exact hypotheses, examples, source/proof boundaries, and dynamic exercise backlinks. Compared Artin's integer-polynomial and complex-function-field routes with Lang's UFD, transcendence-basis, separability, and covering discussions.
- Expanded: Archived Artin's Chapter 11 weak Nullstellensatz, quotient-ring point correspondence, inconsistent-system certificate, maximal-ideal existence input, and finite-intersection proof in existing concepts. Riemann Surfaces directly records Lemma 11.9.7, Proposition 11.9.9, and Theorems 11.9.10 and 11.9.16 with proofs and their dependency chain. Added a complete locator and proof-status table for §15.9, printed pp. 464-471 / PDF pp. 476-483, including gluing, simultaneous conjugacy, transitivity, local cycles, and infinity.
- Clarified: Distinguished singular plane models from normalized Riemann surfaces, affine exceptions from genuine ramification, compact algebraic function fields from unrestricted noncompact meromorphic fields, and monodromy of the splitting field from automorphisms of the original extension. Recorded Artin 15.9.14(b)'s missing second-transposition hypothesis, its double-root coordinate error, and 15.9.14(c)'s derivative error, with a counterexample and explicit corrections. Recorded Lang's weak-Nullstellensatz cross-reference and puncture-index errors. Rechecked F61's printed finite-deletion notation and linked its general-field algebraic proofs. Corrected the field-automorphism composition order in F61 and Gal119 and made the inverse-matrix PGL convention explicit.
- Connected: Added prerequisites to 26 existing exercises, cross-linked the related concepts, and updated the Ring Theory, Field Theory, and Arithmetic Geometry hubs. Preserved exercise frontmatter and learning states; no new exercise, directory, or Canvas was required.
- Verified: Checked the relevant original Artin and Lang PDF pages at 200 dpi and independently reviewed the new mathematical arguments. Checked metadata, path and heading links, Obsidian formula delimiters, dynamic backlinks, exercise-tag tracker discovery, and preservation of unrelated changes. Synchronized README's latest-three excerpt and removed temporary source renders and validation code.
