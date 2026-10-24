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

### 2026-10-24 (Uniform Solution Callout Titles)

- Standardized: Normalized 677 solution-callout headers in 676 exercise notes to the exact collapsed form `> [!success]- Solution`. All 1,970 solution callouts across 1,968 exercise notes now use this form, including the former solution-type alias, an uncollapsed callout, a misspelling and trailing-space variants.
- Preserved: Moved informative previous titles into the existing callout body as proof-scope text or method headings, retaining independent-derivation provenance, corrected hypotheses, proof-status limits, the Lang Exercise 27 distinction and both named proofs in LA184. Mathematical arguments, formulas, other callouts, note metadata, source references and learning states are unchanged.
- Prevented recurrence: Made the exact header explicit in AGENTS.md and CLAUDE.md; the existing exercise template already matches. Verified the header inventory and exact content-preservation checks, retained prior user changes and daily-plugin state, and synchronized README's latest-three excerpt. No archive counts or exercise statuses were changed.

### 2026-10-24 (Diamond–Shurman Chapter 1 Archive)

- Archived: All 36 numbered Chapter 1 exercises, preserving complete English statements and subparts, progressive collapsed hints, complete independent solutions, precise printed/PDF anchors, stable S7 source references and not-started learning states. Topic routing follows the principal toolkit: MF14–MF34 (21), LA582–LA587 (6), AG65–AG69 (5), G347–G349 (3) and R425 (1). Existing exercise notes and the current daily list are preserved.
- Connected: Added Complex Tori and Isogenies, Weierstrass Elliptic Functions, and Modular Curves and Moduli in existing concept directories, with dynamic exercise backlinks and the relevant Hub entries. Retained Figure 1.1 as a verified direct crop and faithfully transcribed the Weil-pairing square. Updated the dedicated Diamond–Shurman ledger from a pre-archive source audit to permanent Chapter 1 completion: section totals 9/9, 11/11, 3/3, 5/5 and 8/8; no missing, duplicate, unexpected or unparsed mappings. Whole-book coverage is now 42/354, with the next source group Chapter 2 §2.1.
- Corrected visibly: Preserved the printed derivative in 1.1.9 and restored its missing factor; supplied the global growth estimate and explicit exponent adjustment needed by 1.2.6; documented the lemma and triangularization-hint misreferences in 1.2.11; separated the N=1 identity from the exact-order-two Fricke assertion; and identified the double-d generator-sum misprint referenced by 1.5.8. Distinguished the two discriminant normalizations, the weight-two endpoint, literal equality versus isomorphism, meromorphic domains, and all named external proof inputs.
- Verified: Inspected the original exercise, prerequisite and appendix pages at 200 dpi and independently cross-reviewed all 36 solutions and three concepts. Exact finite checks covered 1,566 determinant-one residue matrices and lifts at seven moduli, 692 small determinant-one integral matrices, 702 Gamma-zero-four descent inputs, Bernoulli recurrence through B12 and the divisor convolution through n=200; these checks supplement the proofs. Executed all ten archive queries against actual metadata, checked metadata, English text, numbering, links, Obsidian math syntax and Study Progress tag discovery, and sampled an actual Obsidian reading view. Preserved protected-file hashes, removed temporary source renders and scripts, retained complete changelog history and synchronized README's latest-three excerpt. No new folder, Base, Canvas, Git commit or publication was created.

### 2026-10-23 (Vault-Wide English Notes and Module Homomorphisms)

- Standardized: Translated the remaining Chinese text in 111 exercise notes, including R391, without deleting problems, hints, proof steps, source issues or scope boundaries. Replaced Chinese aliases in 12 concept notes with existing or equivalent English names. Gal78 retains its full English source title, Chinese-edition identification and exact page locator. Source IDs, structured source references, paths, numbering and learning states are preserved.
- Completed: Replaced the Module Homomorphisms placeholder with an English definition for unital left modules, kernel/image and quotient constructions, full factorization and first isomorphism proofs, the precise commutative-ring condition for the pointwise Hom module, a noncommutative matrix counterexample, worked examples and dynamic exercise backlinks. Visually checked Artin 14.1.4–14.1.6 on printed pp. 413–414 / PDF pp. 425–426, with the module axioms on printed p. 412 / PDF p. 424. The note explicitly distinguishes the source statements and omitted source proofs from its independent derivations.
- Prevented recurrence: Added an English-language requirement for mathematical vault notes and a whole-vault language check to AGENTS.md. Retained the existing Chinese review handout as requested; quoted application commands and historical changelog text are outside the mathematical-note cleanup.
- Verified: Rescanned all 1,932 exercise notes and 264 concept notes: no Chinese text or Chinese fullwidth punctuation remains. The 123 language-cleanup targets preserve all 456 existing display formulas, apart from translated text annotations, and all Wikilink targets; checked 488 path-qualified links across the affected notes. Validated metadata and MathJax delimiters, independently reviewed the new concept proofs and sampled translation fidelity, retained the two pre-existing mathematical changes, preserved the complete changelog and synchronized README's latest three entries. The language pass is not a new proof audit of every existing exercise. No plugin, daily-list state, Git commit or publication was changed.
