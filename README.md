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

### 2026-08-30 (Heisenberg Group Concept)
- Added: A source-grounded Heisenberg group concept note covering the matrix model, group law, commutators, center, quotient, class-$2$ nilpotence, and Lie algebra perspective, with related exercises discovered through Dataview.
- Updated: Linked Exercise G95 and the Group Theory Hub to the new concept, reclassified G95 as intermediate, and recorded Hall's terminology alongside Artin's exercise provenance.

### 2026-08-30 (Relationship-Aware Exercise Retrieval)
- Added: Exercise Manager 0.5.0 can find exercises related to the active exercise or concept note, prioritizing direct concept links and shared `Related Concepts` before shared tags, topic, and full-note semantic similarity.
- Added: Search results now explain the relationship—such as a direct concept reference, shared concepts, or shared tags—and show a composite relevance score alongside semantic similarity; results can still be opened or added to the reading list.

### 2026-08-29 (Daily Exercise Workflow)
- Added: Exercise Manager 0.4.0 now maintains an independent `Systematic Progress` queue, defaulting to two Artin exercises per day from Chapter 3 onward in exact source order, with complete-and-advance, skip, and undo controls that do not affect the random-review cycle.
- Updated: Refined the daily Markdown export from two days of actual use: random and systematic items include numbered Todos, exact source citations, and copied problem statements, while handwritten content outside the two managed regions remains untouched.
- Migrated: Existing random-batch dates reserve the corresponding sequential Chapter 3 assignments on first load, preventing an upgraded vault from restarting systematic progress at Exercise 1.1.
- Fixed: Exercise Manager 0.4.1 defers systematic migration until Obsidian metadata and the sequential candidate pool are ready, and adds a guarded repair for the initial empty-batch migration; repair runs only when every systematic batch is empty and no completion/skip action exists.
- Fixed: Re-export all historical daily files affected by systematic migration, so the repaired assignments appear in both state and their original dated Markdown lists rather than only in the current day.
- Verified: Audited the live vault ordering across 770 eligible Artin exercises and confirmed the Chapter 3 sequence begins 1.1, 1.2, …, 1.10, 1.11, 2.1; added regression coverage for ordering, independent state, migration, completion, skipping, undo, export rendering, idempotence, replacements, and handwritten-note preservation.

### 2026-08-29 (Artin Archive Metadata Fix)
- Fixed: Repaired the YAML title of **LA199** so Obsidian and Dataview can parse its `exercise` tag and Artin Chapter 7 source locator; the live archive counts now reconcile with the verified **96/96** coverage.

### 2026-08-29 (Lang Chapter III Complete Exercise Archive)
- Added: Archived all **29** exercises in Chapter III, *Modules*, using **27** new notes—**LA352–LA373**, **R224–R226**, **G327**, and **Rep116**—and exact Lang provenance on the existing **LA107** and **F39** notes.
- Added: Created the required concept notes for module localization, projective modules and Grothendieck groups, direct and inverse limits, and filtered/graded algebras; expanded the existing exact-sequence, finite-presentation, and Hom notes and linked the concepts from their topic hubs.
- Illustrated: Preserved the source diagrams required by III.14, III.15, III.18(a), and III.26 as four verified direct crops in `Attachments/`.
- Flagged: Preserved III.6's false full-rank-sublattice claim with a counterexample and an explicitly external Artin–Tate correction; also recorded III.18(b)'s $T_p(A)$/$T_p(M)$ and III.29(a)'s $x_{nn}$/$x_{1n}$ misprints, while confirming that III.23 correctly uses inverse limits in both identities.
- Verified: Reconciled III.1–III.29 one-to-one with no missing, duplicate, unexpected, or unparsed labels; checked source anchors, metadata, required sections, path-qualified links, Obsidian formula delimiters, tracker tags, and all four figure crops.

### 2026-08-28 (Dedekind Ring Hierarchy and Artin Comparison)
- Updated: Expanded `Dedekind Rings and Fractional Ideals` with the inclusion diagram from fields and Euclidean domains through PIDs, UFDs, and Dedekind domains, including the exact intersection $\mathrm{UFD}\cap\mathrm{Dedekind}=\mathrm{PID}$.
- Clarified: Recorded that Artin does not introduce “Dedekind domain” as a named general definition, but his imaginary-quadratic Main Lemma gives fractional-ideal inverses and his Chapter 13 proves the corresponding unique ideal factorization.
- Verified: Checked the relevant Artin and Lang source pages visually and distinguished quoted source results from the independent hierarchy deductions.

### 2026-08-28 (Lang Chapter II Complete Exercise Archive)
- Added: Archived all **19** exercises in Chapter II, *Rings*, as **R206–R223** and **G326**, with II.8 routed to Group Theory because its main task is the structure classification of a finite unit group.
- Added: Created the necessary concept notes `Local Rings`, `Trigonometric Polynomials and Fourier Degree`, `Dirichlet Convolution and Mobius Inversion`, and `Dedekind Rings and Fractional Ideals`, and linked them from the Ring Theory Hub.
- Flagged: Recorded the incorrect Chapter III cross-reference for the Dedekind-ring definition, II.11's missing zero-degree convention, II.16's nonzero-prime convention, and the II.18-to-II.19 continuation boundary.
- Verified: Reconciled II.1–II.19 one-to-one with no missing, duplicate, unexpected, or unparsed source labels; checked metadata, required sections, path-qualified links, Obsidian formula delimiters, tracker tags, and confirmed that all three exercise pages contain no figure-dependent tasks.

### 2026-08-28 (Lang Chapter I Complete Exercise Archive)
- Added: Created `00 - Home/Lang Algebra Exercise Archive.md` and archived all **57** exercises in Chapter I, *Groups*, using **45** new Group Theory notes (**G281–G325**) and **LA351** for the matrix-dynamics exercise.
- Reused: Added exact Lang provenance and any missing clauses to **11** existing Artin exercise notes, so mathematically duplicate tasks remain single notes and cannot be sampled twice under separate filenames.
- Illustrated: Preserved Exercise I.56's unnumbered ping-pong-domain diagram as a verified direct crop in `Attachments/lang-algebra-3e-ch01-ex56-ping-pong-domains.png`.
- Flagged: Kept visible source-issue records for I.48's omitted finiteness hypotheses, I.52's reversed pushout-arrow reference, and I.55's scalar-matrix counterexample.
- Verified: Reconciled I.1–I.57 one-to-one with no missing, duplicate, unexpected, or unparsed labels; checked all 57 mapped notes for required metadata, exercise tags, exact printed/PDF locators, required sections, path-qualified links, Obsidian math delimiters, and the Exercise I.56 image link.

### 2026-08-28 (Artin Figure and Archive Cleanup)
- Cleaned: Removed the obsolete `Next Archival Batch` section and the redundant per-chapter `archival audit complete` callouts from the Artin archive; durable totals, source anchors, mappings, and the Appendix A.7 source warning remain in the permanent tables.
- Cleaned: Removed the locked `.aux` and `.log` build artifacts for the Chapter 13 Exercise 8.5 lattice-shape figure while preserving its editable TeX, vector PDF, and Obsidian PNG outputs.
- Verified: Recompiled the figure in an isolated working directory with no LaTeX diagnostics; confirmed that the fresh and archived PDF renders are pixel-identical and visually free of clipping or label collisions.

### 2026-08-28 (Artin Chapter 16 Final Reconciliation)
- Verified: Audited the original Chapter 16 exercise pages, establishing an exact source set of **90** exercises—**77** section exercises from 1.1 through 12.8 and **M.1–M.13**—on printed pp. 505–512 / PDF pp. 517–524.
- Reconciled: Matched all 90 labels one-to-one to the existing archive with no omissions, duplicate mappings, unexpected labels, unparsed locators, or page-anchor mismatches.
- Completed: Closed the approved Chapter 12–Appendix archival scope after confirming that Chapters 12–16 and all 15 Appendix exercises are fully represented.

### 2026-08-28 (Artin Appendix Complete Exercise Archive)
- Added: Archived all **15** exercises A.1–A.15 in the Appendix, *Background Material*, as **R194–R205**, **G280**, and **AG15–AG16**, preserving the four original section titles and exact printed/PDF provenance.
- Added: Created concept notes for **Mathematical Induction and Peano Arithmetic**, **Partially Ordered Sets and Zorn's Lemma**, and the **Implicit Function Theorem for Complex Polynomials**, with links from the Ring Theory and Arithmetic Geometry hubs.
- Routed: Placed proof induction, Peano arithmetic, polynomial factorization, order theory, and maximal ideals in Ring Theory; finite-set surjections in Group Theory; and the complex-polynomial implicit-function exercises in Arithmetic Geometry.
- Flagged: Preserved Exercise A.7's literal zero-polynomial boundary as a visible source issue and proved the intended nonzero statement rather than silently changing the source.
- Verified: Reconciled A.1–A.15 one-to-one with no omissions, duplicate mappings, unexpected labels, or unparsed locators; checked all 15 notes for required metadata, exercise tags, page anchors, path-qualified links, and Obsidian math delimiters.

### 2026-08-28 (Artin Chapter 15 Complete Exercise Archive)
- Added: Archived the **31** previously missing exercises in Chapter 15, *Fields*, as **F39–F61**, **Gal79–Gal84**, and **G278–G279**, bringing the chapter to all **60** numbered source exercises.
- Routed: Placed field extensions, minimal polynomials, finite fields, and rational functions in Field Theory; ruler-and-compass problems in Galois Theory; and the two arithmetic matrix-group problems in Group Theory, while preserving the existing Ring Theory and Arithmetic Geometry mappings.
- Solved: Supplied complete independent arguments for all missing exercises, including the six cyclotomic minimal-polynomial computations, pure-radical membership tests, constructibility questions, universal modular reducibility, $PGL_2(\mathbb C)$ automorphisms, and surjectivity of reduction to $SL_2(\mathbb F_p)$.
- Verified: Reconciled all 60 source labels one-to-one with no omissions, duplicate mappings, unexpected labels, or unparsed locators; checked the 31 new notes for required metadata, exercise tags, exact page anchors, path-qualified links, filenames, Obsidian math delimiters, and selected symbolic identities.

### 2026-08-28 (Artin Chapter 14 Complete Exercise Archive)
- Added: Archived all **55** exercises in Chapter 14, *Linear Algebra in a Ring*, as **LA312–LA350**, **R188–R193**, **G269–G277**, and **F38**, preserving one note per numbered source exercise and exact printed/PDF provenance.
- Added: Created the **Cyclic Vectors and Companion Matrices** and **Jordan Canonical Form** concept notes, linked them from the Linear Algebra and Modules hub, and supplied an editable TikZ/PDF/PNG lattice diagram for Exercise 4.1.
- Routed: Classified exercises by their primary toolkit across Linear Algebra and Modules, Ring Theory, Group Theory, and Field Theory rather than routing mechanically by chapter title.
- Flagged: Preserved the source qualifications or notation issues in Exercises 1.3, 8.3, 8.4, 9.5, and M.7, including the printed rank-drop example in 9.5, without silently rewriting the source.
- Verified: Reconciled all 55 source labels one-to-one with no omissions, duplicate mappings, unexpected labels, or unparsed locators; checked metadata, exercise tags, page anchors, path-qualified links, filenames, Obsidian math delimiters, figure compilation, and visual legibility.

### 2026-08-28 (Artin Chapter 13 Complete Exercise Archive)
- Added: Archived all **44** exercises in Chapter 13, *Quadratic Number Fields*, as **F34–F37**, **R151–R187**, and **LA309–LA311**, with one note per numbered source exercise, exact printed/PDF provenance, progressive hints, and independent solutions.
- Added: Created **Quadratic Number Fields and Rings of Integers**, **Prime Splitting in Quadratic Fields**, **Ideal Classes and Class Groups**, and **Units in Real Quadratic Fields**, linked from the relevant topic hubs and active exercises.
- Illustrated: Supplied four reproducible TikZ/PDF/PNG assets covering the Section 3 ideal shapes, all twelve Section 8.5 class representatives, the ideal $(\sqrt2)$ under the two real embeddings, and the units of $\mathbb Z[\sqrt3]$ on the norm hyperbolas.
- Computed: Completed the ideal products, splitting criteria, norm relations, class groups, real-quadratic unit groups, Euclidean algorithm, lattice-index arguments, quadratic-order classification, split-prime ellipse test, polynomial-ring prime ideals, and Pick's Theorem requested across Sections 4–10 and M.1–M.4.
- Flagged: Preserved Exercise 1.3(c)'s missing minimal-polynomial hypothesis and Exercise 10.2's incompatible basis-order wording, with explicit counterexample or corrected formulation rather than silent repair.
- Verified: Reconciled all 44 source labels one-to-one with no omissions, duplicate mappings, unexpected labels, or unparsed exercise locators; checked required metadata, exercise tags, path-qualified links, filenames, Obsidian math delimiters, finite norm/form computations, figure compilation, and visual legibility.

### 2026-08-28 (Artin Chapter 12 Complete Exercise Archive)
- Added: Archived all **47** exercises in Chapter 12, *Factoring*, as **R106–R150** and **G267–G268**, with one note per numbered source exercise, exact printed/PDF provenance, progressive hints, and independent solutions.
- Routed: Kept the 45 polynomial, factorization, and quadratic-integer exercises in Ring Theory; routed M.1–M.2 to the existing cancellative-semigroup sequence in Group Theory.
- Added: Created the **Partial Fraction Decomposition** concept note and two reproducible TikZ prime-lattice diagrams for Exercises 5.4 and 5.8, with editable TeX, vector PDF, and Obsidian-ready PNG outputs.
- Flagged: Preserved the literal issue in Exercise 3.2 and the hypotheses required in Exercise 4.15; recorded counterexamples to both unqualified printed conclusions in Exercise 5.10 and proved the corrected unit-normalized and even-leg versions.
- Verified: Reconciled all 47 source labels one-to-one with no omissions, duplicates, unexpected labels, or unparsed locators; checked metadata, exercise tags, path-qualified links, filenames, Obsidian math delimiters, exact computational certificates, and both diagrams by compile and visual inspection.

### 2026-08-28 (Artin Chapters 12–Appendix Source Audit)
- Audited: Fixed the exact ordered source-label sets and printed/PDF page ranges for Chapters 12–15 and the Appendix of Artin's *Algebra*, second edition.
- Scoped: Registered 192 remaining notes—47 from Chapter 12, 44 from Chapter 13, 55 from Chapter 14, 31 missing from Chapter 15, and 15 from the Appendix—while preserving Chapter 16 as an already complete reconciliation target.
- Status: Marked Chapters 12–14 and the Appendix as source-audited but not complete; no chapter will be marked complete until source labels reconcile one-to-one with note provenance.

### 2026-08-28 (Artin Archive Titles and Appendix)
- Updated: Added the original English titles of all sixteen chapters and the `Appendix — Background Material` source unit from Artin's *Algebra*, second edition, to the archive coverage table, scope ledger, mapping headings, and next-batch pointer.
- Audited: Registered all 15 appendix exercises, A.1–A.15 across Sections A.1–A.4, as source-audited but not yet archived.
- Verified: Checked the title transcription against the original contents pages (printed pp. v–ix / PDF pp. 1–5) and the appendix exercise set against printed pp. 521–522 / PDF pp. 533–534 without changing existing chapter counts, mappings, or statuses.

### 2026-08-28 (Daily Exercise List Export)
- Added: Upgraded the local Exercise Manager to 0.3.0 with automatic and manual export of each daily batch to a dated Markdown todo list under the new top-level `09 - Daily Exercise Lists/` directory.
- Preserved: Re-exporting the same date updates one managed checklist, retains completed boxes for exercises still in the batch, keeps user notes outside that checklist untouched, and does not alter source exercise statuses or no-repeat history.
- Verified: Covered initial export, same-date idempotency, checkbox preservation, replacement synchronization, user-note preservation, and plugin lifecycle compatibility in the existing 29-test suite.

### 2026-08-28 (Exercise Manager Module-Loading Hotfix)
- Fixed: Changed the local Exercise Manager to load its daily sampler and state modules from validated absolute plugin paths after Obsidian initialization, avoiding Electron's incorrect `renderer_init` resolution of top-level relative imports.
- Hardened: Preserved failure isolation for the pre-existing search, vector-sync, link, and gap-scan features while loading the daily modules only after the plugin directory is known.
- Verified: Re-ran the complete 29-test suite, syntax checks, and diff checks with coverage for the relative-module failure in the plugin lifecycle smoke test.

### 2026-08-27 (Local Daily Exercise Draw Plugin)
- Added: Extended the local **Exercise Manager 0.2.0** plugin with a Chinese daily-exercise sidebar, source/chapter selection, configurable daily count, deterministic no-replacement sampling, replacement/undo controls, and explicit cycle resets.
- Added: Introduced stable S1–S11 source IDs, legacy Artin locator parsing, and structured `source_refs` support for later book archives; multi-locator notes are consumed as one exercise unit across all selected chapters.
- Safeguarded: Stored daily settings and draw history in an atomic, backed-up, per-vault state file under `.obsidian`, while leaving exercise-note learning statuses unchanged and refusing to overwrite corrupt or future-schema state.
- Verified: Parsed 869 current Artin exercise units (853 `not-started`) and exhausted all 72 Chapter 11 units in daily batches without repeating a unit or source reference; automated sampler/state/workflow tests all passed.

### 2026-08-27 (Automatic Concept–Exercise Backlinks)
- Standardized: Replaced static exercise-link blocks in twelve concept notes with Dataview queries driven by exercise outlinks, covering 98 formerly manual associations.
- Preserved: Audited every former association and added the two missing exercise-to-concept links before conversion, so no relationship was lost.
- Updated: Synchronized `Templates/Concept Template.md` with the canonical `status`, `difficulty`, and `source` Dataview columns; `Templates/Exercise Template.md` continues to provide explicit `Related Concepts` links.

### 2026-08-27 (Artin Chapter 11 Complete Exercise Archive)
- Added: Archived all **72** exercises in Chapter 11 of Michael Artin's *Algebra* as **R37–R105**, **F32–F33**, and **G266**, with one note per numbered source exercise, exact printed/PDF provenance, progressive hints, and independent solutions.
- Routed: Classified the two algebraic-number exercises under Field Theory and the cancellative-semigroup completion under Group Theory; routed the remaining 69 exercises by their primary ring-theoretic toolkit, including the polynomial and affine-variety exercises.
- Added: Created concept notes for **Formal Power Series**, **Localization and Laurent Polynomials**, **Product Rings and the Chinese Remainder Theorem**, and **Nilpotent and Idempotent Elements**, linked them bidirectionally to the active exercises through Dataview backlinks, and added them to the Ring Theory hub.
- Standardized: Required every new concept note to populate its `Exercises` section dynamically from exercise outlinks with Dataview instead of maintaining a manual exercise list.
- Flagged: Preserved visible source issues in Exercises 9.6, 9.11, and 9.12, and recorded the boundary-inclusive “upper half plane” convention needed in Exercise 8.4.
- Verified: Reconciled all 72 Chapter 11 source labels one-to-one, with zero omissions, duplicate mappings, unexpected labels, or unparsed locators; found no exact or high-similarity problem-statement duplicates against the pre-existing exercise archive.
- Cleaned: Removed the completed Chapter 11 source checklist and in-progress wording from the archive dashboard after reconciliation.

### 2026-08-27 (Artin Chapter 10 Complete Exercise Archive)
- Added: Archived all **68** exercises in Chapter 10 of Michael Artin's *Algebra* as **Rep48–Rep115**, covering finite-group representations, invariant forms, character tables, regular and permutation representations, Schur's lemma, $SU_2$/$SO_3$, induced representations, and Frobenius reciprocity, with exact printed/PDF provenance, progressive hints, and independent solutions.
- Corrected: Re-audited the original exercise pages and corrected the Chapter 10 source total from **63** to **68**: 53 section exercises plus **M.1–M.15** on printed pp. 314–322/PDF pp. 326–334.
- Added: Created **Induced Representations and Frobenius Reciprocity**, linked it bidirectionally to M.9–M.12, and added it to the Representation Theory hub.
- Standardized: Added a full-chapter archival protocol that registers an exact source manifest before note creation and requires post-archive checks for missing labels, duplicate mappings, unexpected labels, and unparsed locators before a chapter can be marked complete.
- Cleaned: Removed the completed Chapter 10 batch's temporary manifest, active-batch wording, and one-off reconciliation code from the permanent archive dashboard after recording the final result.
- Verified: Reconciled all 68 Chapter 10 source labels one-to-one, with zero omissions, duplicate mappings, or unexpected labels; also found no exact or high-similarity problem-statement duplicates against the pre-existing exercise archive.

### 2026-08-27 (Artin Exercise Archive Dashboard)
- Added: Created a Home dashboard for Artin's *Algebra* exercise archive, with live chapter-by-chapter note counts and audited source-coverage totals.
- Expanded: Added all 16 chapter scopes and an outline-visible, live source-exercise-to-note index, with ordinary exercises sorted numerically by section and problem number and miscellaneous exercises placed afterward; chapters without archived exercises remain visible.
- Distinguished: Counted unique source exercises separately from note files, exposing the eight duplicate Chapter 8 mappings without deleting or merging user notes and excluding the theorem-adapted Rank–Nullity note from numbered-exercise coverage.
- Verified: Re-audited all 74 Chapter 9 source labels against Artin's printed pp. 283–289/PDF pp. 295–301; confirmed 74 unique archived exercises with no omissions, duplicates, or unexpected labels and no required-structure defects.
- Fixed: Audited Chapter 6 as 22/77, Chapter 7 as 20/96, and Chapter 15 as 29/60 against the original PDF and the full cross-topic vault; deferred Chapter 10 until the Chapter 6–8 remediation is complete.
- Added: Archived all 55 previously missing Chapter 6 exercises as **G148–G194** and **LA296–LA303**, including direct crops of Figure 6.6.2 and the four Exercise 6.3 patterns, exact page provenance, the full seventeen-wallpaper-group classification, polyhedral and permutation actions, fundamental domains, Burnside counting, and visible source boundaries for Exercise 7.10 and M.6; Chapter 6 is now complete at 77/77 with one note per source exercise.
- Added: Archived all 76 previously missing Chapter 7 exercises as **G195–G265** and **LA304–LA308**, covering finite $p$-groups, class equations, symmetric-group conjugacy, normalizers, Sylow theory, groups of small order, free groups, presentations, Todd–Coxeter enumeration, triangle groups, double cosets, and the isomorphism theorems; Chapter 7 is now complete at 96/96 with one note per source exercise.
- Verified: Reconciled the complete Chapter 7 source-label set against Artin's printed pp. 221–227/PDF pp. 233–239, with 96 unique mappings, no gaps or duplicates, valid exercise metadata, resolving Wikilinks, and Obsidian-compatible mathematics; preserved the duplicated part label in Exercise 10.8 and the OCR-only misreading of Exercise 11.8.
- Consolidated: Merged the unique methods and provenance details from the eight duplicate Chapter 8 notes **LA259–LA266** into the canonical notes **LA11–LA18**, then removed the duplicate files; Chapter 8 now has 81 source exercises mapped one-to-one to 81 notes.
- Verified: Re-audited Chapters 6–9 after cleanup: Chapter 6 is 77/77, Chapter 7 is 96/96, Chapter 8 is 81/81, and Chapter 9 is 74/74, with no missing or duplicate source labels. The pre-Chapter 10 remediation boundary is now cleared.
- Connected: Linked the new Artin archive dashboard from the main Home index while preserving the distinction between archival coverage and each note's learning status.

### 2026-08-24 (Infinite Matrices Concept)
- Added: Created **Infinite Matrices**, distinguishing row-finite and column-finite matrices, proving their exact actions on the full sequence space and the finite-support space, and recording the composition, transpose, and endomorphism conventions.
- Expanded: Added Artin's concrete subspaces $C$, $\ell^1$, and $Z$ of $\mathbb R^\infty$, the standard rows $e_i$, the non-finite-support vector $(1,1,\ldots)$, and the resulting basis distinction; labeled Propositions 1–3 locally as independent vault derivations rather than textbook propositions.
- Connected: Linked the concept bidirectionally with Artin Exercise LA157, Matrix Representation, and the Linear Algebra and Modules Hub.
- Compared: Added source-verified perspectives from Artin's algebraic sequence spaces, Lang's infinite relation matrices and finite-minor Fitting ideals, and Kac's finite Cartan matrices for infinite-dimensional Lie algebras.

### 2026-08-24 (Artin Chapter 9 Complete Exercise Archive)
- Added: Archived all 67 previously missing exercises from Chapter 9 of Michael Artin's *Algebra* (2nd ed.) as **LA282–LA295**, **G130–G147**, and **Rep13–Rep47**, with exact printed/PDF provenance, progressive hints, and complete independent solutions; together with the seven audited Section 1 notes **LA2–LA8**, the chapter's complete 74-exercise sequence is now archived.
- Audited: Rechecked the seven existing Section 1 notes **LA2–LA8**, restored their source exercise numbers, corrected a broken subgroup symbol in LA2, and retained the printed false transitivity claim in Ex. 1.7 with its established correction to nonzero vectors.
- Connected: Added **SU2, Quaternions, and the Spin Cover** and **Adjoint Representation and Invariant Trace Forms**, linking the quaternion/spin model, adjoint actions, trace forms, standard Killing-form terminology, Lorentz representations, and $PSL_2(\mathbb C)\cong SO_3(\mathbb C)$.
- Illustrated: Constructed, compiled outside the sandbox, and visually verified editable TikZ/PDF/PNG figures for diagonal one-parameter groups, positive-affine flows, and the tangent field $z\mapsto z(1+i)$ on $\mathbb C^{\times}$.
- Flagged: Preserved and explained the signature reversal in printed Ex. 4.8, the missing half-turn nonuniqueness in Ex. 4.9, the duplicated symbol in Ex. 8.10, and both the nonstandard Killing-form name and missing prime in M.11; clarified right-coset orientation in Ex. 5.8, repaired a malformed Lorentz-form formula, and removed a false global converse about matrix exponentials from the existing concept note.

### 2026-08-24 (Artin Chapter 8, Miscellaneous Exercise Archive)
- Added: Archived all 15 miscellaneous exercises in Chapter 8 of Michael Artin's *Algebra* (2nd ed.) as **LA267–LA281**, completing the chapter's 81-exercise sequence **LA201–LA281** with exact printed/PDF provenance, progressive hints, and complete independent solutions.
- Illustrated: Constructed, compiled outside the sandbox, and visually verified an editable TikZ/PDF/PNG orbit diagram for M.1, separating the six real-congruence classes of symmetric $2\times2$ matrices.
- Flagged: Preserved the missing “nonreal” hypothesis in printed M.12 as a visible source issue; explicitly labeled the supporting-hyperplane theorem in M.9 and the quadratic Gauss-sum evaluation in M.10 as external standard inputs.
- Covered: Added the singular-value and polar decompositions, Fourier interpolation, real orthogonal block form, projection for a general symmetric form, the sharp $n+1$ pairwise-obtuse bound, and the Fischer inner product decomposition of polynomial space.

### 2026-08-24 (Artin Chapter 8, Sections 7–8 Exercise Archive)
- Added: Archived all 8 exercises in Chapter 8, Sections 7–8 of Michael Artin's *Algebra* (2nd ed.) as **LA259–LA266**, covering affine classification of conics and quadrics, skew-form projection, the Cayley transform, and determinant arithmetic.
- Classified: Identified Exercise 7.1 as a one-sheeted hyperboloid centered at $(0,-1/2,-1/2)$ and recorded coefficient-level criteria for circles and degenerate quadrics.
- Bounded: Proved the integral skew-symmetric determinant square using rational standard form, explicitly avoiding an unproved Pfaffian dependency.

### 2026-08-24 (Artin Chapter 8, Sections 5–6 Exercise Archive)
- Added: Archived all 28 exercises in Chapter 8, Sections 5–6 of Michael Artin's *Algebra* (2nd ed.) as **LA231–LA258**, with exact source pages, progressive hints, and complete independent solutions.
- Added: Created **Normal Operators and the Spectral Theorem**, linked it bidirectionally to all 22 spectral-theorem exercises, and added it to the Linear Algebra and Modules hub.
- Covered: Recorded Euclidean and Hermitian identities, Householder reflections, symmetric projections, Fourier modes and matrices, normality tests, simultaneous diagonalization, cyclic shifts, circulants, and positive square-root factorization; visibly preserved the stray printed “5.” in Exercise 6.13 as a source issue.

### 2026-08-24 (Artin Chapter 8, Section 4 Exercise Archive)
- Added: Archived all 21 exercises in Chapter 8, Section 4 of Michael Artin's *Algebra* (2nd ed.) as **LA210–LA230**, covering orthogonal complements and projections, Gram–Schmidt, trace forms, congruence diagonalization, positive-definiteness criteria, and Sylvester's Law.
- Illustrated: Constructed, compiled outside the sandbox, and visually verified an editable TikZ/PDF/PNG diagram for Exercise 4.4, showing orthogonal vectors and null directions for the indefinite form $x_1y_1-x_2y_2$.
- Expanded: Added the general projection formula and direct exercise links to **Inner Product Spaces**; retained `not-started` status and exact printed/PDF provenance for every exercise.

### 2026-08-24 (Artin Chapter 8, Sections 1–3 Exercise Archive)
- Added: Archived all 9 exercises in Chapter 8, Sections 1–3 of Michael Artin's *Algebra* (2nd ed.) as **LA201–LA209**, with the exact printed statement at printed p. 254/PDF p. 266, progressive hints, and complete independent solutions.
- Added: Created **Bilinear and Hermitian Forms**, linked it bidirectionally to the new exercises, and added it to the Linear Algebra and Modules hub.
- Clarified: Separated congruence from similarity, proved the quadratic-form reality criterion for Hermitian matrices directly, and recorded that $A^2$, $A^{-1}$, and $A+B$ preserve positive-definite Hermitian structure while $AB$ need not be Hermitian.

### 2026-08-24 (Artin Chapter 7, Sections 1–2 Exercise Archive)
- Added: Archived all 20 exercises in Chapter 7, Sections 1–2 of Michael Artin's *Algebra* (2nd ed.) as **G116–G129** and **LA195–LA200**, with exact printed/PDF provenance, progressive hints, and complete independent solutions.
- Added: Created **Conjugacy Classes, Centralizers, and the Class Equation** and **Matrix Centralizers and Similarity**, linked them bidirectionally to the new exercises, and added them to the Group Theory and Linear Algebra hubs.
- Illustrated: Constructed, compiled, and visually verified an editable TikZ/PDF/PNG conjugacy-class sketch for Exercise 2.5, separating the vertical classes $x\ne1$, the two rays at $x=1$, and the identity.
- Flagged: Preserved the printed $GL_n/SL_n$ ambient groups in Exercise 2.18, visibly recorded their incompatibility with the displayed $2\times2$ matrices, and solved the evident intended $GL_2/SL_2$ problem.

### 2026-08-24 (Artin Chapter 6, Section 5 Exercise Archive)
- Added: Archived all 12 exercises in Chapter 6, Section 5 of Michael Artin's *Algebra* (2nd ed.) as **G107–G115** and **LA192–LA194**, with exact printed/PDF provenance, progressive hints, and complete independent solutions.
- Added: Created **Discrete Isometry Groups and Frieze Groups**, **Discrete and Dense Subgroups**, and **Lattices in Euclidean Space**, with bidirectional exercise links and placement in the Group Theory and Linear Algebra hubs.
- Preserved: Added direct source crops for the frieze patterns in Exercises 5.5 and 5.6; classified the latter's full point group as $D_2$ and its translation subgroup as index $4$ after visual verification.
- Bounded: Distinguished source statements from vault derivations and labeled the countability, pigeonhole, and finitely generated abelian-group inputs used in the solutions.

### 2026-08-24 (Artin Chapter 5 Exercise Archive)
- Added: Archived all 29 numbered exercises in Chapter 5 of Michael Artin's *Algebra* (2nd ed.) as **LA163–LA191**, with exact section, printed-page, and physical-PDF provenance, collapsed hints, and complete independent solutions.
- Covered: Added exercises on orthogonal matrices and spatial rotations, simultaneous diagonalization, matrix-valued differentiation, constant-coefficient differential systems, matrix exponentials and trigonometric functions, finite-rank integral operators, recurrences, and matrix convergence.
- Bounded: Distinguished identities valid for every matrix from those requiring commutativity, classified $O_n\cong SO_n\times\{\pm I\}$ by parity, retained Jordan/Newton/analysis inputs explicitly, and reused existing concept notes without creating a new topic or directory. Preserved and visibly flagged the malformed printed Binet formula in M.5(a) before solving its inferred intended correction.

### 2026-08-24 (Getz–Hahn Langlands Boundary Expansion)
- Added: Created **Quasi-split Unitary Groups** with the Borel-subgroup definition, the standard $U_n$ matrix model, split/quasi-split distinctions, the Galois action on ${}^LU_n$, unramified-place behavior, and the exact conditional boundary of the unitary-group LLC; linked it from the Arithmetic Geometry Hub and the adjacent Langlands concepts.
- Upgraded: Promoted **L-Groups and Langlands Dual**, **Local Langlands Correspondence**, and **Fundamental Lemma** from `unverified` to `partially-verified` after checking Getz–Hahn's original PDF. The vault now contains **166 concepts**: **10 verified**, **151 partially verified**, and **5 unverified**.
- Sourced: Recorded exact printed/PDF anchors for quasi-splitness [S11, p. 33/PDF 50], the $U_n$ model and $L$-group [p. 193/PDF 206], $\mathrm{GL}_n$ LLC [p. 327/PDF 338], the tempered quasi-split conjecture [p. 329/PDF 340], conditional unitary packets [p. 332/PDF 343], orbital integrals [p. 233/PDF 246], and the Fundamental Lemma's history/application boundary [pp. 363, 517–518/PDF 373, 524–525].
- Bounded: Kept Vertex Operator Algebras, Monstrous Moonshine, Partition Function, Gross–Zagier–Kolyvagin, and Motives as `unverified`; S11 does not supply their core definitions and proofs. Marked geometric Satake, detailed endoscopy, Ngô's Hitchin-fibration proof, and the conditional classical-group LLC inputs as external rather than source-contained.

### 2026-08-23 (Ten-Source Lie-Theory and Boundary Re-audit)
- Re-audited: Rechecked all **16** remaining `unverified` concepts against the expanded ten-source skill, verified the registered SHA-256 hashes of Kac's *Infinite-Dimensional Lie Algebras* and Hall's *Lie Groups, Lie Algebras, and Representations*, and visually checked the decisive original-PDF pages for $\mathfrak{sl}_2$ classification, root/simple-Lie classification boundaries, PBW, complete reducibility, Weyl and Weyl–Kac character formulas, generalized Cartan matrices, affine realizations, modular character transformations, and vertex-operator context.
- Upgraded: Promoted **8** notes to `partially-verified`: Representations of Lie Algebras, Root Systems, Semisimple Lie Algebras, $\mathfrak{sl}_2$ Representations, Weights and Weight Spaces, Weyl Character Formula, Kac–Moody Algebras, and Affine Lie Algebras. The vault remains at **165 concepts**, now comprising **10 verified**, **147 partially verified**, and **8 unverified**.
- Corrected: Fixed the $\mathfrak{sl}_2$ module-label convention, Weyl–Kac $\rho$-shift, Jacobi triple-product exponent, affine $A_1^{(1)}$ relations, integrability criterion, Monster-module grading, VOA lower truncation and rationality caveats, Heegner-point field of definition, tempered-parameter boundedness, depth/conductor distinction, motivic Euler-factor inversion, and several overstrong classification, support, transfer, and uniqueness assertions.
- Bounded: Retained Vertex Operator Algebras, Monstrous Moonshine, Partition Function, Fundamental Lemma, Gross–Zagier–Kolyvagin, L-Groups and Langlands Dual, Local Langlands Correspondence, and Motives as `unverified`. Kac's vertex-operator and Monster remarks are contextual rather than a general VOA or moonshine source, while Hall and Kac do not supply the required partition-theory, endoscopy, modern Langlands, or motives theorems.

### 2026-08-23 (Eight-Source Unverified Re-audit)
- Re-audited: Rechecked all **22** remaining `unverified` concepts against the upgraded eight-source Artin–Lang–Neukirch–Sorensen–Serre–Diamond–Shurman–Milne skill; verified the registered SHA-256 hashes for S6–S8 and visually checked the decisive original-PDF pages for eta transformation, rational height counting, Mordell–Weil context, Riemann-surface periods, étale comparison/Frobenius formulas, the cycle map, and the Tate conjecture.
- Upgraded: Promoted **6** notes to `partially-verified`: Eta Function, Heights, Étale Cohomology, Mordell–Weil Theorem, Periods, and Tate Conjecture. The vault remains at **165 concepts**, now comprising **10 verified**, **139 partially verified**, and **16 unverified**.
- Bounded: Replaced the stale five-source boundary in every remaining `unverified` note with an eight-source finding. S6's algebraic-group root data does not supply advanced Lie representation theory; S7's modular curves do not verify partitions, moonshine, Gross–Zagier–Kolyvagin, $L$-groups, or local Langlands; and S8's cycle/cohomology theory does not supply motives, endoscopy, or the Fundamental Lemma.
- Corrected: Restored the finite-presentation boundary in the étale definition, continuous Galois cohomology for $\operatorname{Spec}k$, Tate twists, the dual-Tate-module convention, and the correct Weil functional equation; narrowed the abelian-variety Tate claim to the sourced codimension-one result and removed unsupported implication/Sha formulas; corrected the Dedekind sum, eta/discriminant normalization, Verma-module dimension claim, root-space bracket containment, Cartan-subalgebra scope, canonical-height normalization, Lang–Néron caveat, and several schematic or unsourced numerical examples.

### 2026-08-23 (Five-Source Unverified Re-audit)
- Re-audited: Rechecked all **29** remaining `unverified` concept notes against the upgraded Artin–Lang–Neukirch–Sorensen skill and bounded slices of Claus Sorensen's *From Classical L-Functions to Modern Reciprocity Laws*; verified the local S5 PDF against the registered SHA-256 and visually checked the decisive BSD, fundamental-domain, Eisenstein, Petersson, and adelic-$\mathrm{GL}_2$ pages.
- Upgraded: Promoted **7** notes to `partially-verified`: Fundamental Domain, Eisenstein Series, Petersson Inner Product, Automorphic Forms, Automorphic Representations, BSD Conjecture, and Abelian Varieties. The vault remains at **165 concepts**, now comprising **10 verified**, **133 partially verified**, and **22 unverified**.
- Bounded: Replaced the former four-source boundary in each of the other **22** notes with an itemized five-source finding. Sorensen's $\mathfrak{sl}_2$/Casimir discussion does not supply advanced Lie theory; its $L$-group and local-Langlands mentions defer definitions; étale cohomology is explicitly black-box; and it contains no source treatment of VOA/moonshine, partitions/eta, Gross–Zagier–Kolyvagin, heights, Mordell–Weil, motives, periods, the Tate conjecture, or the Fundamental Lemma.
- Corrected: Restricted Petersson self-adjointness to the appropriate level/character setting, removed an unsupported numerical norm for $\Delta$, and replaced an over-normalized point-value formula by the source-supported Rankin–Selberg residue relation; also fixed the second elliptic boundary representative and proper-discontinuity claim, added connectedness and inseparable-isogeny caveats for abelian varieties, narrowed the $\mathrm{GL}_1$/Hecke and Hecke-eigenform dictionaries, recorded the $n=1$ Godement–Jacquet exception, and separated analytic root-number parity from the BSD prediction for algebraic rank.

### 2026-08-23 (Itemized Unverified Audit and Zariski Topology)
- Re-audited: Reviewed the remaining **48** `unverified` concepts one by one against bounded original-PDF slices of Artin's *Algebra*, Lang's *Algebra*, Lang's *Algebraic Number Theory*, and Neukirch's *Algebraic Number Theory*. Each of the **29** notes that remains `unverified` now records its nearest four-book boundary and the exact missing external source domain instead of a generic blanket warning.
- Upgraded: Promoted **19** existing notes to `partially-verified`: Sporadic Groups, Monster Group, Congruence Subgroups, Cusp Forms, Discriminant Function, Elliptic Curves and Modularity, Hecke Operators, Modular Forms Definition, Modular Functions, Modular Group, Quadratic Forms and Theta Series, Theta Functions, $j$-Invariant, Diophantine Equations, Elliptic Curves Arithmetic, Inverse Galois Problem, Langlands Program, Morphisms of Schemes, and Rational Points.
- Added: Created a source-grounded [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]] concept from Lang and Neukirch, added it to the Arithmetic Geometry Hub, and linked it bidirectionally with schemes, varieties, rational points, ideals, and prime ideals. The vault now has **165 concepts**: **10 verified**, **126 partially verified**, and **29 unverified**.
- Corrected: Fixed the $1728$ normalization in the $j$-formula, restored the missing elliptic variable in the four Jacobi theta functions, removed the unsupported conflation of the 290-theorem with an odd-universality criterion, corrected the Monster/Happy-Family placement of $J_1$, replaced an invalid rational-point congruence argument, and tightened Fermat, genus-$0$, genus-$1$, and semistable modularity statements.

### 2026-08-23 (Upgraded Four-Source Concept Re-audit)
- Re-audited: Rechecked all **60** previously `unverified` concept notes against the upgraded Artin–Lang–Neukirch skill and bounded slices of all four registered books: Artin's *Algebra*, both Lang volumes, and Neukirch's *Algebraic Number Theory*.
- Upgraded: Promoted **12** notes to `partially-verified` with printed-page and physical-PDF provenance: Quaternion Group, Simple Groups, Perfect Pairings over Finite Local Rings, Affine and Projective Varieties, Algebraic Varieties, Schemes, Curves over Number Fields, Faltings' Theorem, Galois Representations, Local–Global Principles, Reduction mod $p$, and Zeta Functions of Varieties. New totals are **10 verified**, **106 partially verified**, and **48 unverified**.
- Corrected: Fixed the $\mathbb Q_3$ obstruction for $x^2+y^2=3$, weak/strong approximation definitions, the minimal-model reduction criteria and an $\mathbb F_7$ point count, a false finite-image claim for a CM Tate-module representation, projective-coordinate points at infinity, genus-$0$ curve classification, and a center-based simplicity overstatement.
- Bounded: Recorded that Lang's “Faltings' finiteness theorem” concerns semisimple $\ell$-adic representations and is not the Mordell–Faltings theorem; retained modular forms, Langlands theory, general scheme-morphism/cohomology theory, BSD/Gross–Zagier, advanced Lie theory, and detailed sporadic-group data as externally unverified.

### 2026-08-23 (Concept Source and Format Audit)
- Standardized: Audited all 164 concept notes and added explicit `source`, `source_status`, and learning `status` metadata plus a visible `Source and Proof Status` section; updated the concept template to preserve the distinction between learning progress and source reliability.
- Sourced: Checked bounded slices of Michael Artin's *Algebra*, Serge Lang's *Algebra*, and Serge Lang's *Algebraic Number Theory*; recorded both printed and physical-PDF pages where available. Final source states are deliberately conservative: **10 verified**, **94 partially verified**, and **60 unverified**.
- Bounded: Marked advanced Lie theory, modular forms, and modern arithmetic geometry not covered by the checked textbook slices as requiring dedicated external primary-source audits rather than inventing textbook provenance.
- Corrected: Fixed the unit-circle condition for eigenvalues of orthogonal/unitary matrices, the characteristic-polynomial convention, algebraic-closure identification, local reciprocity and unramified-extension statements, strong approximation and the idèle class group of $\mathbb Q$, completed-zeta and theta-Mellin normalizations, and a conjectural BSD equivalence.
- Cleaned: Removed an invalid `source: claude` value, unsupported numerical bounds, and scraped biographical text; normalized the Galois Group `Exercises` heading and removed the remaining forbidden LaTeX-document delimiter.

### 2026-08-23 (Artin Chapter 4 Exercise Archive)
- Added: Archived all 62 numbered exercises in Chapter 4 of Michael Artin's *Algebra* (2nd ed.) with exact section, printed-page, and physical-PDF provenance, progressive hints, and independent solutions.
- Routed: Added 60 new linear-algebra notes as **LA103–LA162**, covering the dimension formula, matrices of linear maps, eigenvectors, characteristic polynomials, diagonalization, Jordan form, and miscellaneous operator problems.
- Deduplicated: Reused **LA47** for Chapter 4 Exercise 2.4 because it is the theorem-form repeat of Chapter 1 Exercise 3.4; expanded **LA65** with Chapter 4 M.10(a) and dual provenance because M.10(b) exactly repeats Chapter 1 M.10.
- Clarified: Preserved and flagged the missing characteristic-$2$ restriction in Exercise 4.2(a), the omitted $x$ in the printed polynomial of Exercise 4.6, and the inconsistent eigenvalue $2$ in Exercise 7.4(b), while separately stating the intended corrected readings.
- Verified: Visually checked source PDF pp. 137–143, including every matrix and damaged OCR symbol; confirmed exercise counts, consecutive new numbering, required frontmatter and sections, resolved Wikilinks, exercise-tag discovery, and Obsidian/MathJax delimiter rules.

### 2026-08-23 (Artin Chapters 1–3 Exercise Archive)
- Added: Archived all 193 numbered exercises in Chapters 1–3 of Michael Artin's *Algebra* (2nd ed.) with complete solutions and exact section, printed-page, and physical-PDF provenance; externally imported inputs are labeled in the affected notes.
- Routed: Added 184 new notes as **LA19–LA102**, **G28–G106**, **R20–R36**, and **F28–F31**, classified by their primary computational toolkit rather than by textbook chapter alone.
- Deduplicated: Reused the existing **G7–G15** notes for Chapter 2 Exercises 1.1–1.3 and 2.1–2.6, adding precise Artin provenance instead of creating duplicate notes; kept the related Vandermonde exercises separate because their source statements and tasks are not identical.
- Clarified: Preserved and flagged the ambiguity in Chapter 2 Exercise 4.4 (“no proper subgroup”), recorded Artin's second-edition base-change convention $B'=BP$, and distinguished imported results such as Cauchy's theorem and the published homophonic-group argument from vault-derived proofs.
- Verified: Checked batch counts by chapter (53, 101, 39), required frontmatter and sections, exercise-tag discovery, source anchors, path-qualified links, and Obsidian/MathJax delimiter rules.

### 2026-08-13 (Exercise Manager plugin: fix notesDirs default wiping the vector DB)
- Fixed: In `main.js` `spawnEnv`, `LIT_NOTES_DIRS` was only passed to Python when the setting differed from the plugin default; since `data.json` held exactly the default (the 8 math topic dirs), Python fell back to the leftover `Paper_reading` default in `common.py`, scanned an empty folder set, and `build_vector_db.py` deleted every row of the LanceDB table (0 rows left).
- Fixed: `common.py` fallback default notes dirs changed from the Literature Manager leftover `Paper_reading` to the 8 math topic directories (`01 - Group Theory` … `08 - Arithmetic Geometry`), matching `main.js` defaults (documented as kept in sync); `main.js` now always forwards a non-empty `notesDirs` setting.
- Cleaned: Remaining `Paper_reading` / `literature_manager` references in `common.py` docstrings replaced with the math-vault description.
- Verified: vector DB rebuilt via `lm.cmd sync` (379 notes embedded into `lance_db/notes.lance`).

### 2026-08-13 (Exercise Manager plugin: fix PS 5.1 parsing)
- Fixed: Removed non-ASCII (UTF-8) Chinese comments and strings from `exercise_manager/tools/lm.ps1`, `run.ps1`, and `setup_vault.ps1`; under Windows PowerShell 5.1 the UTF-8 bytes were read as ANSI/GBK, swallowing the newline so `$dataJson = Join-Path ...` merged into the comment and `lm.cmd info` failed with `Test-Path $null`. All three files are pure ASCII again, matching their "ASCII only" header convention.
- Cleaned: Replaced the leftover medical search example (`lm.cmd search "主动脉夹层 单细胞"`) copied from Literature Manager with a math example, and fixed the "Literature Manager" wording in `run.ps1`.
- Verified: `lm.cmd info --json` and `lm.cmd topics --json` now run end-to-end against the vault (379 notes, 8 topic dirs, shared bge-m3 model detected).

### 2026-08-13 (Exercise Gal78: Correcting a Compositum Galois Group)
- Added: Archived Yu Pin's Example 5.26 as **Gal78**, preserving the printed claim that the splitting field of $x^7-8$ has cyclic direct-product Galois group while visibly marking that conclusion as a source error.
- Corrected: Proved independently that the degree-$42$ Galois group is the nonabelian semidirect product $C_7\rtimes C_6\cong\operatorname{AGL}_1(\mathbb F_7)$, with explicit generators and conjugation relation $\tau\sigma\tau^{-1}=\sigma^3$.
- Clarified: Recorded that $\mathbb Q(\zeta_7)/\mathbb Q$ is Galois whereas $\mathbb Q(\sqrt[7]8)/\mathbb Q$ is not, which is exactly why one complementary subgroup is nonnormal.
- Linked: Connected Gal78 bidirectionally with composita, cyclotomic extensions, normal subgroups, direct products, and the general semidirect-product result in Gal72.
- Maintained: Kept concept-to-exercise listings Dataview-driven; no manual Gal78 entries were added under concept `Exercises` sections.

### 2026-08-13 (Exercise Gal28 Compositum Classification)
- Reclassified: Renamed **Gal28** as **A Primitive Element of a Compositum**, added explicit compositum and intersection calculations, derived the recovery formula for the primitive element, and connected the exercise bidirectionally with **Composita and Restriction Maps**.

### 2026-08-13 (Dynamic Home Navigation)
- Updated: Replaced the manually maintained Quick Navigation table in `Index.md` with a single Dataview query that discovers numbered topic folders, links their hub pages, and computes completed, total, and percentage progress automatically from the contents and status metadata of their `Exercises` directories.
- Added: Included an automatically refreshed vault-wide exercise summary for total, not-started, in-progress, completed, metadata needing review, and overall completion rate; the directory-based query also counts legacy exercises that are still missing the `exercise` tag.

### 2026-08-13 (Hilbert 90 and Artin–Schreier Extensions)
- Added: Created a source-grounded **Hilbert's Theorem 90** concept from Lang's *Algebra*, with complete proofs of both the multiplicative norm-one form and the additive trace-zero form.
- Added: Created a source-grounded **Artin–Schreier Extensions** concept from Lang's *Algebra*, using additive Hilbert 90 to prove the degree-$p$ classification theorem.
- Expanded: Added the irreducibility criterion, parameter classification by $k/\wp(k)$, rational-function and finite-field trace examples, and a precise comparison with Kummer theory.
- Linked: Connected Hilbert 90 and Artin–Schreier theory bidirectionally with Kummer extensions, Galois extensions, separability, finite fields, and the Galois Theory hub.

### 2026-08-13 (Exercise Gal35 Referenced Example)
- Expanded: Made **Gal35** self-contained by stating Artin's Example 16.9.2(a), including the quartic, its four roots, splitting field, biquadratic subfield, and $D_4$ Galois group.
- Clarified: Replaced the vague reference to “other nested square roots” with the two explicit Galois families and proved that the second quartic has the same splitting field.

### 2026-08-12 (Artin Chapter 8 Quadratic and Skew-Symmetric Forms)
- Added: Archived and independently solved Artin Chapter 8 Exercises 7.1–7.4 and 8.1–8.4 as **LA11–LA18**, with exact printed/PDF page provenance.
- Added: Created separate Linear Algebra concepts for general **Quadratic Forms** and **Skew-Symmetric Bilinear Forms**, including real quadric classification, symplectic standard form, and the Pfaffian determinant identity.
- Refined: Renamed the Modular Forms concept to **Quadratic Forms and Theta Series** and explicitly limited it to positive-definite integral quadratic forms and their arithmetic theta-series applications.
- Linked: Connected the two quadratic-form layers, the new exercises, LA8/LA10, Symplectic Groups, and the Linear Algebra and Modular Forms hubs bidirectionally.

### 2026-08-12 (Exercise LA1 Source Correction)
- Corrected: Reclassified **LA1** as a proof-exercise adaptation of Artin's Theorem 4.1.6, *Dimension Formula*, with exact printed/PDF page provenance rather than the previous generic Axler attribution.
- Refined: Removed the unnecessary finite-dimensionality assumption on the codomain, clarified the independent proof status, normalized the display mathematics, and connected the exercise to the Rank and Nullity and Basis and Dimension concepts.

### 2026-08-12 (Alibaba 2021 Final Problems 1–3)
- Added: **Rep12**, proving that fixed-space dimensions across all complex representations detect the intersections of two subgroups with the center.
- Added: **R19**, identifying the translation-invariant ring $\mathbb{F}_p[x^p-x]$ and constructing the orbit basis generated by $x^{p-1}$.
- Added: **LA10**, deriving a closed formula for isotropic vectors of a perfect symmetric pairing over $\mathbb{Z}/p^N\mathbb{Z}$.
- Added: **Perfect Pairings over Finite Local Rings**, linked through the Linear Algebra hub and the existing module, finite-field, determinant, character, and group-action concepts.

### 2026-08-12 (Galois Correspondence Concept Merge)
- Consolidated: Merged **Galois Correspondence** into **Fundamental Theorem of Galois Theory**, retaining the former title as an Obsidian alias.
- Expanded: Added the lattice anti-isomorphism, a complete finite-case proof, fixed-field computation guidance, examples, and precise Artin source/proof status.
- Fixed: Corrected the subgroup-field assignments in the splitting field of $x^3-2$ and redirected all path-qualified links to the canonical concept note.

### 2026-08-12 (Alibaba 2021 Final Problem 4)
- Added: **Gal77**, a complete classification of the nested prime radicals $\sqrt[p]{2021+\sqrt[q]{a}}$ that are rational linear combinations of roots of unity.
- Documented: The infinite $p=q=2$ family, the unique cubic exception, exact source/proof boundaries, and an independently checked Lucas-recurrence exhaustion.
- Expanded: Cyclotomic Extensions with a self-contained Gauss-sum proof of the quadratic Kronecker-Weber theorem, removing Gal77's dependency on a separate local note.
- Updated: Galois Extensions, Galois Correspondence, and Square Classes with bidirectional links to the new exercise.

### 2026-08-12 (Exercise Gal7 Compositum Rewrite)
- Rewritten: Replaced the incomplete Pell-unit and prime-ideal arguments in Exercise Gal7 with source-level compositum proofs: a disjoint $C_3$-extension and $S_3$-extension over $F$ in part (a), and an $S_4$ quartic splitting field composed with $\mathbb Q(\sqrt{10})$ in part (b).
- Refined: Recast part (a) using the product and quotient resolvents $c=uv$ and $q=u/v$, eliminating the detour through two absolute $S_3$ fields and the Fourier inversion argument.
- Clarified: Simplified the field map in part (b) to the essential tower $\mathbb Q\subset F\subset H\subset K$, where $H$ is the $S_4$ splitting field generated by pairwise products and $K=H(\sqrt{10})$.
- Clarified: Distinguished the role of the tower from the source of the direct product: with $L=F(\sqrt{10})$, one has $K=HL$ and $H\cap L=F$, so restriction gives $\operatorname{Gal}(K/F)\cong A_4\times C_2$.
- Verified: Retained both the resolvent-cubic proof and the direct degree-$6$-subfield proof of the $S_4$ result; also checked the Eisenstein arguments, discriminants, field intersections, reverse generator recovery, and Obsidian-native formula delimiters.

### 2026-08-12 (Composita, Square Classes, and Quaternion Extensions)
- Added: Five Galois Theory exercises, **Gal72–Gal76**, on composita and restriction maps, an $S_3\times C_2$ intermediate-field classification, a compositum of two $S_3$ splitting fields, square-class criteria for biquadratic extensions, and Milne's quaternion Galois extension.
- Added: Concept notes on composita and restriction maps, square classes and multiquadratic extensions, and the quaternion group, with reciprocal exercise links and hub integration.
- Corrected: Repaired the supplied minimal-polynomial typo, distinguished internal semidirect products from direct products, and replaced an erroneous commuting relation in the $Q_8$ construction by the correct anticommutation relation.
- Documented: Marked inaccessible web-linked problem statements as user-supplied and independently derived, while verifying Milne Exercise 3-3 against the official v5.10 PDF.

### 2026-08-12 (Artin Chapter 16 Exercise Archive)
- Added: Archived 81 previously missing exercises from Michael Artin's *Algebra*, Chapter 16, with exact source-section and printed/PDF page provenance, progressive hints, and independently derived solutions.
- Routed: Classified the exercises by their primary toolkit into Ring Theory (R7–R18), Field Theory (F24–F27), Group Theory (G26–G27), Linear Algebra (LA9), Galois Theory (Gal11–Gal71), and Representation Theory (Rep11).
- Deduplicated: Reused the nine existing Chapter 16 exercises 9.10–9.18 instead of creating duplicate notes.
- Added: Created concept notes for symmetric polynomials and Newton identities, polynomial discriminants, and Kummer extensions; updated the Ring Theory and Galois Theory hubs and reciprocal concept links.
- Fixed: Converted every formula in the new Chapter 16 notes from LaTeX document delimiters to Obsidian-native `$...$` and `$$...$$` syntax, and added an enforceable formula-syntax rule to `AGENTS.md`.
- Improved: Rewrote Exercise Gal14 with a complete algebraic-closure proof and a second base-field-independent rational-function proof, explicitly closing the omitted nonzero-polynomial step.
- Verified: Recorded characteristic restrictions, source ambiguities, external proof inputs, and computational-verification boundaries; corrected the reducible cubic in Exercise 8.2(b) and preserved the shifted denominator in M.8.

### 2026-08-11 (Exercise R6: Cauchy Sequence Ideal)
- Added: A complete Ring Theory exercise proving that the rational Cauchy sequences converging to zero form a maximal ideal in the ring of rational Cauchy sequences.
- Derived: Supplied an independent proof using boundedness, a finite-term modification, a uniform lower bound away from zero, and the Cauchy estimate for the reciprocal sequence.
- Documented: Recorded Zou Ying's *Mathematical Analysis, Vol. I*, Chapter 2, Exercise 6 as the direct source, while labeling the Ramis–Deschamps–Odoux connection as a likely French-textbook influence rather than a verified literal translation.
- Linked: Added reciprocal exercise links from the Ideals, Prime and Maximal Ideals, and Quotient Rings concept notes.

### 2026-08-11 (Exercise LA8 Inductive Proof)
- Expanded: Added a complete algebraic induction proof that every real symplectic matrix has determinant $1$, using a complex invariant plane and separate nondegenerate and isotropic cases.
- Archived: Added three photographs from the user-supplied WeChat source, which presents them as a student-era assignment by 2026 Fields Medalist Hong Wang; the note links the direct image source, verifies her award through the official IMU announcement, and records the absence of an institutional archival check.
- Clarified: Corrected the second manuscript branch to $\omega(y_1,y_2)=0$, supplied the omitted invariant-complement and block-matrix arguments, and distinguished Artin's exercise statement from the external manuscript and the independent rewrite.

### 2026-08-11 (Artin Chapter 16 Quartic Equations)
- Added: Seven new Galois Theory exercise notes, **Gal4–Gal10**, for Artin Exercises 9.10 and 9.12–9.17, and expanded the existing **Gal1** and **Gal2** notes to archive Exercises 9.11 and 9.18 without renumbering them.
- Added: Complete quartic Galois-group classifications, two full $D_4$ subgroup–fixed-field correspondences, Kummer calculations for nested radicals over $\mathbb Q(\omega)$, an explicit nested-square-root recovery formula, the general resolvent cubic, and the constructibility criterion for real quartics.
- Added: A source-grounded Quartic Resolvents and Galois Groups concept note, linked from the Galois Theory Hub and reciprocally connected to the prerequisite concepts and exercises.
- Verified: The exercise statements on Artin printed p. 509 (PDF p. 521) and the quartic/resolvent conventions on printed pp. 493–496 (PDF pp. 505–508); exact SageMath checks independently confirmed the finite polynomial and nested-radical group computations.
- Documented: The missing characteristic restrictions in Exercises 9.15 and 9.18, the external Pell-unit input in Exercise 9.14, and the boundary between Artin's proofs, independent derivations, and computational verification.

### 2026-08-10 (Exercise AG12 Revision)
- Revised: Reorganized Exercise AG12 as the source's progressive chain: part (a) classifies the seven isomorphism classes, part (b) assigns gluing data to those classes, and part (c) realizes the same labeled classes by explicit polynomials.
- Clarified: Fixed the permutation ordering, the affine-plane role of monodromy at infinity, and the distinction between “ramified only at” and requiring both displayed points to be true branch points.
- Corrected: Confirmed that the printed $F[t]/(f)$ in Exercise 9.3(c) should be $F[x]/(f)$, while preserving the source wording and recording the correction visibly in AG12.

### 2026-08-10 (Artin Chapter 15 Fields)
- Added: Twenty-nine source-verified exercise notes covering Artin Chapter 15 Exercises 6.3, 7.1–7.14, 8.1–8.2, 9.1–9.5, 10.1–10.4, and M.1–M.3, routed to Galois Theory, Ring Theory, Field Theory, and Arithmetic Geometry by their primary proof toolkit.
- Added: Complete finite-field computations, primitive-element classifications, quadratic and rational-function arguments, function-field monodromy data, the quadratic Riemann Existence proof, and program listings for monodromy continuation and polynomial-circle visualization.
- Generated: A reproducible six-panel SageMath visualization for Exercise F20, archived as a PNG and embedded in the note together with its WSL-compatible Sage Python generator.
- Expanded: The Algebraic Closure concept note with Artin's circle-image proof outline of the Fundamental Theorem of Algebra, an explicit winding-number proof boundary, and an explanation of what the F20 Sage visualization represents.
- Added: A Branch Points and Monodromy concept note with source-status boundaries, true-versus-false branch-point distinctions, and links to Exercises AG11–AG14.
- Documented: The literal $n=1,2$ ambiguity in Exercise 6.3, the printed $F[t]/(f)$ notation issue and the alternative “at most” versus “exactly” interpretation in Exercise 9.3, and every external theorem or computational-verification boundary used by the solutions.
- Updated: Arithmetic Geometry Hub and the Finite Fields, Algebraic Closure, Cyclotomic Extensions, Polynomial Rings, and Separable Extensions concept notes with the new bidirectional links.

### 2026-08-10 (Codex Workflow and Artin Chapter 9)
- Added: A project-level `AGENTS.md` defining Codex rules for tool-based topic routing, one-exercise-per-note archival, source verification, figure handling, concept linking, Study Progress metadata, and validation.
- Updated: Translated the project-level Codex working rules in `AGENTS.md` into English without changing their scope or behavior.
- Added: Seven Linear Algebra exercise notes, **LA2–LA8**, for Artin Chapter 9 Section 1, together with four concept notes on classical linear groups, Lorentz forms, symplectic groups, and matrix-group topology.
- Documented: The apparent source issue in Artin Exercise 9.1.7(a), preserving the printed statement while proving transitivity on the nonzero vectors.
- Updated: The Linear Algebra and Modules Hub and the Lie Groups notation distinction between real $SP_{2n}(\mathbb R)$ and compact $Sp(n)$.

### 2026-08-10 (Artin Chapter 6 Symmetry)
- Added: Ten Group Theory exercise notes, **G16–G25**, covering plane-figure symmetries, composition and conjugation of plane isometries, complex-coordinate formulas, reflections, glide reflections, and dihedral-group calculations.
- Added: Four concept notes on symmetry groups and plane isometries, rotations/reflections/glide reflections, orthogonal transformations of the plane, and dihedral groups.
- Added: Source-faithful crops of Artin Figures 6.1.4, 6.1.6, and 6.1.7, indexed in G16 frontmatter and embedded beside the exercise.
- Added: Complete classifications of the subgroups requested in $D_4$, $D_{15}$, and $D_6$, together with the cosets, quotient, and direct-product decomposition in $D_{10}$.
- Updated: Group Theory Hub with a dedicated symmetry and plane-isometry section and the finite-subgroups-of-$O_2$ theorem.
- Documented: Exact Artin printed/PDF page provenance and proof-status boundaries for the Chapter 6 source material.

### 2026-08-10 (Foundations for Artin Chapter 2)
- Added: Four Group Theory concept notes on binary operations and associativity, semigroups/monoids/units, symmetric groups, and opposite groups.
- Added: Complete proofs for one-sided identity and inverse compatibility, the group of units, noncommutativity of $S_n$ for $n\ge3$, the opposite-group axioms, and the inversion isomorphism $G\cong G^{\mathrm{op}}$.
- Updated: Group Theory Hub, Group Definition, Subgroups, and Exercises G7-G15 with integrated concept and exercise links.

### 2026-08-10 (Artin Chapter 2 Exercises)
- Added: Nine Group Theory exercise notes, **G7-G15**, covering Artin's laws of composition, one-sided inverses, $S_3$, units of a monoid, group equations, subgroup tests, inherited identities and inverses, and the opposite group.
- Added: Progressive hints, complete proofs or exact finite computations, related-concept links, and precise Artin chapter/section/exercise provenance for all nine notes.

### 2026-08-10 (Tracking and Template Fixes)
- Fixed: **Study Progress** now discovers all exercise notes by tag, including Linear Algebra and Modules, Modular Forms, Arithmetic Geometry, and future chapters.
- Added: A metadata-quality view and clearer progress/difficulty indicators to **Study Progress**.
- Updated: Embedded **Study Progress** directly on the home dashboard.
- Fixed: **Concept Template** now prompts for the topic instead of hard-coding Arithmetic Geometry.
- Fixed: **Exercise Template** now prompts for topic and difficulty and generates a valid creation date.

### 2026-01-19 (Canvas Updates)
- Updated: **Abstract Algebra Overview.canvas** with:
  - New nodes for Simple & Sporadic Groups, Solvable Groups, IGP-Faltings connections
  - New edges: Group Theory → Simple Groups → Representation Theory (Monster/Moonshine)
  - New edges: Solvable Groups → Galois Theory (solvability)
  - New edges: IGP-Faltings → Arithmetic Geometry (covers & curves)
- Updated: **Topic Relationships.canvas** with:
  - Extended Group Theory section: Simple Groups, Solvable Groups, Sporadic Groups nodes
  - New Representation Theory section: Lie Algebras, Root Systems, Weights, Characters, Monster, Moonshine
  - Cross-topic edges: Sporadic → Monster, Moonshine → j-function, Solvable → Galois
- Updated: **Study Roadmap.canvas** with:
  - Expanded from 24 to 32 topics in learning path
  - Phase 1: Added Linear Algebra and Modules
  - Phase 2: Added Simple Groups and Solvable Groups
  - Phase 3: Added Representation Theory, Lie Algebras, Sporadic Groups
  - Phase 4: Added Langlands Program and Monstrous Moonshine
  - New cross-edge: Sporadic Groups → Moonshine

### 2026-01-19 (Academic Report)
- Added: **Academic_Report.md** - Comprehensive academic report documenting the project:
  - Executive summary and project objectives
  - Content scope analysis (191 files, 140 concepts, 43 exercises across 8 chapters)
  - Pedagogical design evaluation (concept structure, exercise scaffolding)
  - Technical implementation details (knowledge graph, databases, canvas files)
  - Mathematical depth analysis (theorem coverage, research-level content)
  - Comparative analysis with textbooks and online resources
  - Future development recommendations
  - Complete file inventory appendices

### 2026-01-19 (IGP-Faltings Connection)
- Updated: **Inverse Galois Problem** with new section "Connection to Faltings' Theorem" explaining:
  - Galois covers as curves: Riemann-Hurwitz formula, genus computations
  - Finiteness interplay: both are finiteness results constraining each other
  - Hurwitz spaces and Malle's Conjecture connection
  - Anabelian geometry: Section Conjecture unifying rational points and Galois actions
  - Belyi's Theorem as common ground for both problems
  - Effective methods comparison (Chabauty vs rigidity)
  - Moduli perspective diagram showing M_g, A_g, and Hurwitz spaces

### 2026-01-19 (Sporadic Groups)
- Added: **Sporadic Groups** concept to Group Theory covering:
  - Complete table of all 26 sporadic groups with orders and discoverers
  - Happy Family (20 groups in Monster) vs Pariahs (6 groups outside)
  - Mathieu groups: multiply transitive actions, Golay codes, Steiner systems
  - Conway groups: Leech lattice automorphisms
  - Fischer groups: 3-transposition groups
  - Monster group overview with order factorization
  - Discovery methods and historical timeline (1861-1982)
  - Connections to coding theory, lattices, modular forms, number theory

### 2026-01-19 (Solvable Groups)
- Added: **Solvable Groups** concept to Group Theory covering:
  - Definition via derived series and normal series with abelian factors
  - Closure properties (subgroups, quotients, extensions)
  - Examples: abelian groups, $S_n$ for $n \leq 4$, $p$-groups, nilpotent groups
  - Non-examples: $A_5$, $S_n$ for $n \geq 5$, simple non-abelian groups
  - Connection to Galois theory and solvability by radicals
  - Major theorems: Burnside's theorem, Feit-Thompson (odd order), Hall's theorem
  - Metabelian and supersolvable groups

### 2026-01-19 (Simple Groups)
- Added: Complete content for **Simple Groups** concept in Group Theory:
  - Definition and characterization theorem
  - Classification of Finite Simple Groups (CFSG) - cyclic, alternating, Lie type, sporadic
  - Examples: $\mathbb{Z}_p$, $A_n$, $\text{PSL}_n(q)$, sporadic groups including Monster
  - Composition series and Jordan-Hölder theorem
  - Methods for proving simplicity
  - Connections to Galois theory and representation theory

### 2026-01-19 (Concept Cross-References)
- Updated: Added cross-reference between Faltings' Theorem and Inverse Galois Problem in Related Concepts sections

### 2026-01-19 (Exercise Reorganization)
- Moved: Exercise Rep1 (Rank-Nullity Theorem) from Representation Theory to Linear Algebra and Modules as Exercise LA1 - this is a pure linear algebra topic
- Renumbered: All Representation Theory exercises from Rep2-Rep11 to Rep1-Rep10

### 2026-01-19 (Langlands Program)
- Added: 7 new concept files to Arithmetic Geometry for the Langlands Program and classical problems:
  - **Langlands Program** - Overview, reciprocity conjecture, functoriality, key theorems (modularity, Sato-Tate)
  - **Automorphic Representations** - Tensor product structure, cuspidal representations, L-functions, multiplicity one
  - **Automorphic Forms** - Generalization of modular forms, adelization, Whittaker models, Eisenstein series
  - **Local Langlands Correspondence** - Weil-Deligne representations, correspondence for GLₙ, L-packets, status for various groups
  - **L-Groups and Langlands Dual** - Root data, dual groups, Satake isomorphism, functoriality principle
  - **Fundamental Lemma** - Orbital integrals, endoscopy, Ngô's proof via Hitchin fibration (Fields Medal 2010)
  - **Inverse Galois Problem** - Which finite groups are Galois groups over ℚ, rigidity method, known results (all solvable, sporadic groups)
- Updated: Arithmetic Geometry Hub.md with "Langlands Program" and "Classical Problems" sections

### 2026-01-19 (Weyl Denominator & Jacobi Triple Product)
- Added: 1 new concept file to Representation Theory:
  - **Weyl Character Formula** - Weyl formula, denominator identity, dimension formula, Weyl-Kac generalization, connection to Jacobi/Euler identities
- Added: 3 new exercises connecting representation theory to number theory:
  - **Rep9**: Weyl Denominator Formula for sl₂ (intermediate) - verify denominator identity, derive character formula
  - **Rep10**: Jacobi Triple Product from Affine sl₂ (advanced) - derive classical identity from Kac-Moody theory
  - **Rep11**: Euler's Pentagonal Number Theorem (intermediate) - derive from Jacobi, partition recurrence
- Updated: Representation Theory Hub.md with Weyl Character Formula link and Jacobi Triple Product theorem

### 2026-01-19 (Kac-Moody & Monstrous Moonshine)
- Added: 2 new concept files to Representation Theory for Kac-Moody algebras and Monstrous Moonshine:
  - **Monstrous Moonshine** - McKay's observation, Conway-Norton conjecture, moonshine module $V^\natural$, Borcherds' proof, generalizations (umbral, Mathieu)
  - **Monster Group** - Properties, representations (196883), Griess algebra, subgroup structure, connection to moonshine, character table
- Updated: Representation Theory Hub.md with "Infinite-Dimensional & Moonshine" section (links to existing j-Invariant in Modular Forms) and two new key theorems (Weyl-Kac, Monstrous Moonshine)

### 2026-01-19 (Lie Groups and Lie Algebras)
- Added: 5 new Lie theory concept files to Representation Theory:
  - **sl₂ Representations** - Classification theorem, weight spaces, Casimir operator, Clebsch-Gordan decomposition
  - **Root Systems** - Definition, Weyl groups, Cartan matrices, Dynkin diagrams, classification
  - **Semisimple Lie Algebras** - Cartan's criterion, Killing form, Weyl's theorem, classification
  - **Representations of Lie Algebras** - Modules, morphisms, constructions, highest weight theory
  - **Weights and Weight Spaces** - Weight lattice, fundamental weights, character theory
- Added: 4 new Lie theory exercises:
  - **Rep5**: Computing Matrix Exponentials (beginner)
  - **Rep6**: sl₂ Representation Classification (intermediate)
  - **Rep7**: Lie Bracket Verification (beginner)
  - **Rep8**: Root System of sl₃ (advanced)
- Updated: Representation Theory Hub.md with Lie Theory section and new key theorems

### 2026-01-19 (CLAUDE.md Guidelines Update)
- Added: Section 2 "Significant Updates Detection" to CLAUDE.md with:
  - Criteria for what counts as a significant update
  - Required updates table (README.md, Canvas/, Index.md)
  - Specific instructions for each Canvas file
  - README.md sections to update (Topics Covered, Structure, Changelog)
- Updated: Renumbered all subsequent sections (3-9)

### 2026-01-19 (Canvas Updates)
- Updated: **Abstract Algebra Overview.canvas** - Added Modular Forms and Arithmetic Geometry nodes with connections (modularity, Galois representations, number fields)
- Updated: **Topic Relationships.canvas** - Added Modular Forms group (modular group, forms, Hecke, L-functions, modularity) and Arithmetic Geometry group (varieties, schemes, rational points, elliptic curves, Galois representations)
- Updated: **Study Roadmap.canvas** - Added Phase 4: Frontiers with topics 19-24 (Modular Group, Modular Forms, L-functions, Elliptic Curves, Schemes, Galois Representations)
- Fixed: Module Theory path updated to Linear Algebra and Modules in Abstract Algebra Overview.canvas

### 2026-01-19 (Riemann Zeta Function)
- Added: **Riemann Zeta Function** concept to Chapter 07 - Modular Forms
  - Definition, Euler product, analytic continuation
  - Functional equation, trivial and non-trivial zeros, Riemann Hypothesis
  - Special values: $\zeta(2n) = \pi^{2n} \times \text{rational}$, Apéry's theorem for $\zeta(3)$
  - Connection to primes (PNT), Eisenstein series, theta functions
  - Relation to L-functions and motives
- Updated: Modular Forms Hub.md with Riemann Zeta Function link

### 2026-01-19 (Arithmetic Geometry - Motives & Periods)
- Added: **Motives** concept - Grothendieck's universal cohomology, pure/mixed motives, standard conjectures, motivic Galois group, Voevodsky's DM(k)
- Added: **Periods** concept - comparison isomorphisms, classical periods (π, log, elliptic), period ring, Grothendieck period conjecture, relation to L-values
- Updated: Arithmetic Geometry Hub.md with new "Deep Structure" section

### 2026-01-19 (Arithmetic Geometry Chapter - Updated)
- Added: 8 additional concept files to complete Arithmetic Geometry Hub links:
  - Morphisms of Schemes, Local Fields, Adèles and Idèles
  - Abelian Varieties, Curves over Number Fields, Diophantine Equations
  - Tate Conjecture, **Gross-Zagier and Kolyvagin Theorem** (major addition on BSD evidence)
- Updated: Arithmetic Geometry Hub.md with Gross-Zagier/Kolyvagin link

### 2026-01-19 (Arithmetic Geometry Chapter)
- Added: New chapter **08 - Arithmetic Geometry** with comprehensive coverage of Diophantine geometry and scheme-theoretic foundations:
  - Created Arithmetic Geometry Hub.md with overview, mermaid diagram, and key theorems
  - Foundation concepts (5): Algebraic Varieties, Affine and Projective Varieties, Schemes, p-adic Numbers, Valuations and Places
  - Core concepts (4): Rational Points, Heights, Local-Global Principles, Elliptic Curves Arithmetic
  - Advanced concepts (7): Mordell-Weil Theorem, Étale Cohomology, Galois Representations, Faltings Theorem, BSD Conjecture, Zeta Functions of Varieties, Reduction mod p
- Added: 10 Arithmetic Geometry exercises (AG1-AG10) covering all difficulty levels:
  - Beginner (3): p-adic Valuations, Rational Points on Conics, Heights on Projective Space
  - Intermediate (4): Points on Elliptic Curves, Hasse-Minkowski Theorem, Mordell-Weil Group, Zeta Functions
  - Advanced (3): Schemes and Spec, BSD Conjecture Verification, Galois Representations
- Updated: Index.md navigation table with Arithmetic Geometry entry and dataview queries
- Updated: CLAUDE.md guidelines with Arithmetic Geometry folder, topic tag (arithmetic-geometry), and exercise code (AG)

### 2026-01-19
- Added: 10 Modular Forms exercises (MF1-MF10) covering all difficulty levels:
  - Beginner (3): Verifying Modularity of E₄, Fundamental Domain, Discriminant Function
  - Intermediate (4): Dimension Formulas, Hecke Operators, Theta Series and Squares, j-Invariant
  - Advanced (3): L-functions and Functional Equations, Modularity and Elliptic Curves, Partition Congruences
- Added: New chapter **07 - Modular Forms** with comprehensive coverage:
  - Created Modular Forms Hub.md with overview, mermaid diagram, and dimension formulas
  - Foundation concepts (4): Modular Group, Fundamental Domain, Modular Forms Definition, Congruence Subgroups
  - Core concepts (5): Cusp Forms, Eisenstein Series, Discriminant Function, j-Invariant, Modular Functions
  - Advanced concepts (5): Hecke Operators, L-functions, Theta Functions, Eta Function, Petersson Inner Product
  - Application concepts (3): Elliptic Curves and Modularity, Partition Function, Quadratic Forms and Theta Series
- Updated: Index.md navigation table with Modular Forms entry and dataview queries
- Updated: CLAUDE.md guidelines with Modular Forms folder, topic tag, and exercise code (MF)
- Added: 19 Linear Algebra and Module Theory concept files to complete hub links:
  - Linear Algebra (9): Subspaces, Basis and Dimension, Linear Independence, Eigenvalues and Eigenvectors, Diagonalization, Inner Product Spaces, Matrix Representation, Determinants, Rank and Nullity
  - Module Theory (10): Submodules, Quotient Modules, Free Modules, Finitely Generated Modules, Torsion Modules, Noetherian Modules, Direct Sum, Tensor Product, Exact Sequences, Hom Functor
- Fixed: Broken link in Direct Products.md - updated "04 - Module Theory/Concepts/Direct Sum" to "04 - Linear Algebra and Modules/Concepts/Direct Sum"
- Renamed: "04 - Module Theory" folder to "04 - Linear Algebra and Modules" to combine linear algebra and module theory content
- Moved: Vector Spaces.md and Linear Transformations.md from Representation Theory to Linear Algebra and Modules
- Updated: Linear Algebra and Modules Hub.md with new structure covering both Linear Algebra foundations and Module Theory
- Updated: Linear Transformations.md - filled content with comprehensive definition, kernel/image, rank-nullity theorem, types of linear maps, matrix representation, and examples
- Fixed: Broken link in Representation Theory.md (was pointing to non-existent "02 - Linear Algebra/Linear Algebra Hub")
- Updated: All internal links throughout the vault to use new folder paths
- Updated: Index.md navigation table and dataview queries for new folder structure
- Added: 10 Ring Theory concept files (Subrings, Ring Homomorphisms, Quotient Rings, Prime and Maximal Ideals, Isomorphism Theorems for Rings, Integral Domains, Principal Ideal Domains, Unique Factorization Domains, Euclidean Domains, Polynomial Rings)
- Added: 9 Field Theory concept files (Algebraic and Transcendental Elements, Minimal Polynomials, Degree of Extension, Algebraic Extensions, Splitting Fields, Algebraic Closure, Finite Fields, Separable Extensions, Normal Extensions)
- Updated: Automorphisms.md - filled content with formal definitions (field automorphism, F-automorphism), key properties, examples (rationals, complex conjugation, quadratics, non-Galois extensions), and method for constructing automorphisms
- Updated: Fixed Fields.md - filled content with definition, Artin's theorem, Galois correspondence connection, computing methods, and detailed examples
- Updated: Cyclotomic Extensions.md - filled content with roots of unity, cyclotomic polynomials, Galois group isomorphism to units, examples, and applications (constructible polygons, Kronecker-Weber)
- Added: `.gitignore` configuration to secure API keys (Copilot, Excalidraw), exclude workspace settings, and ignore system files.

### 2025-01-19
- **Initial Release**
  - Added: Project structure with 6 topic areas
  - Added: 6 Hub pages (Group Theory, Ring Theory, Field Theory, Module Theory, Galois Theory, Linear Algebra)
  - Added: 12 Concept notes across all topics
  - Added: 13 Exercise notes (G1-G6, R1-R3, F1, M1, Gal1, LA1)
  - Added: 3 Obsidian Base files (Exercise Tracker, Concept Index, Study Progress)
  - Added: 3 Canvas files (Abstract Algebra Overview, Topic Relationships, Study Roadmap)
  - Added: 2 Templates (Exercise Template, Concept Template)
  - Added: Representation Theory content (3 concepts: Representation Theory, Characters, Group Algebra)
  - Added: 3 Representation Theory exercises (Rep1-Rep3)
  - Added: CLAUDE.md project guidelines
