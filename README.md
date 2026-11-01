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

### 2026-11-01 (Weekly Daily Exercise Review Deck, 2026-10-26 to 11-01)

- Added: A 92-page Chinese Beamer review of all seven Daily Exercise Lists present this week (10-26 through 11-01, no missing day): 42 exercises = 21 Random Review (Artin Ch. 6 §3–§12 + M.3: complex isometry formulas, stabilizers, polyhedra/prism/I-beam, wallpaper point groups, three-dimensional crystallographic restriction, matrix and lattice actions) + 21 Systematic Progress (Artin Ch. 7 §7.5–§10: Sylow, classification of orders 33/18/20/30/12/2p/28/55, simple groups below 60, free groups, presentations, characteristic subgroups). Saved as `Attachments/daily-exercise-weekly-review-2026-10-26-to-11-01.tex` with its compiled PDF; G150's Artin Exercise 6.3 figure is embedded from the verified `Attachments/artin-algebra-2e-ch06-ex-6.3-patterns.png` asset.
- Clarified: Every exercise follows the same template — exact statement with printed/PDF locator, one-line strategy, step-by-step derivation with displayed intermediate equations, and a concrete verification or counterexample. Random Review and Systematic Progress stay separate sections; the deck is derived material and changes no exercise-note status, generated daily list, Exercise Manager state, Base or Canvas. Snapshot: 2026-11-01 11:48 (today's list generation time); the list files themselves were not edited.
- Corrected visibly (notes unchanged): G238's note mis-transcribed the source's v = y² as v = y; with v = y one gets x = z v⁻¹, so ⟨x², y, xy⟩ = F(x, y) is rank 2 and the rank-3 claim fails. The deck states v = y² and records a visible Source issue (source page: Artin printed p. 225 / PDF p. 237). G231's note wording "12 leaves a unique Sylow 2-subgroup" is false unconditionally (D₆ has n₂ = 3); the deck uses the correct n₃ ∈ {1, 4} argument. LA299(a)'s printed GL_n(R) versus a 2×2 matrix is preserved visibly and solved with n = 2. G150's fish pattern was reclassified from the note's pm to pg (600 dpi comparison: glide 0.83 versus pure mirror ≤ 0.47; point group D₁ unchanged); the p4g/p4m refinement of the basket-weave pattern remains flagged as unverified. G241/G246's order-eight dihedral group is written D₄ under Artin's |D_n| = 2n convention. G163/G167/G24 `\qquad` typos and G186's incomplete A₅ completeness argument were corrected only inside the deck.
- Verified: All 42 statements and locators were checked against the original Artin Algebra 2e PDF (Ch. 6 printed pp. 188–193 = PDF pp. 200–205; Ch. 7 printed pp. 224–225 = PDF pp. 236–237) and Lang's Algebra, rev. 3rd ed. (printed pp. 75/77 = PDF pp. 90/92). Six fragment authors ran independent Python checks and a non-author verifier recomputed the quantitative claims from scratch (196 assertions covering group orders, subgroup and Sylow counts, class equations, automorphism groups, orbit sizes, free-group reductions and G150 pattern correlations); 40/42 passed initially and the two failures were fixed in the final deck. Three XeLaTeX passes under TeX Live 2023 with zero errors, zero Overfull/Underfull boxes, no missing characters, no unresolved references and no "??" in 78,940 extracted characters; the 92-page PDF was rendered and all pages were inspected (contact sheets plus targeted full-resolution pages), with a delta recheck of the changed pages. Snapshot hashes of the seven lists (SHA-256 prefixes): 10-26 F4FDFDE2B31D, 10-27 25AB2CA3B32D, 10-28 BCE204EDDB5B, 10-29 F95D82669378, 10-30 E6DA94CD6DC9, 10-31 6A549AF64CAE, 11-01 7302E1B6CAFC; the 11-01 list was generated at 11:48:15.
- Note: The G238, G231, G150, G186, G241/G246 and G163/G167/G24 wording issues remain in the existing exercise notes; this deck carries the corrections and source-issue explanations. No exercise note, concept note, hub, Base, Canvas, daily list or Exercise Manager state was modified. The scratch build directory was removed after delivery; README's latest-three excerpt was synchronized while the full changelog history is preserved.

### 2026-10-28 (Diamond-Shurman Remaining Chapters Exercise Archive)

- Archived: Added 291 complete English notes for every previously missing source number in Chapters 3–9: G358–G378 (21), R431–R468 (38), F142–F149 (8), LA600–LA650 (51), Gal209–Gal221 (13), Rep152–Rep167 (16), MF40–MF107 (68), and AG71–AG146 (76). Each note preserves its complete numbered problem and original subparts, progressive collapsed hints, an independent full solution with named inputs, precise S7 structured and printed/PDF provenance, and a not-started learning state. Preserved all 63 pre-existing source mappings, including the four later-chapter notes. The chapter totals are now 36/36, 23/23, 51/51, 57/57, 55/55, 28/28, 46/46, 35/35 and 23/23: the whole book is 354/354.
- Connected: Added Divisors and Riemann-Roch on Compact Curves and Jacobians and Functorial Maps in the existing Arithmetic Geometry concept folder, with definitions, examples, proof boundaries and dynamic exercise backlinks; linked them from the existing hub. Retained verified direct crops of Figure 3.1 (printed p.69/PDF p.83) and Figure 5.1 (printed p.175/PDF p.189) in Attachments. Transcribed formula-only commuting diagrams and field towers into searchable mathematics. No new vault directory was created.
- Recorded source defects visibly: Preserved the duplicated polygon vertex in 3.1.4; distinguished G1 from its normalized g1 in 4.8.6 and corrected the negative odd-weight Fourier/Poisson sign in 4.10.6 and its dependent exercises, including an explicit counterexample to the printed symmetric equation. Corrected the level-prime-square Eisenstein dimension in 5.2.6, low-weight coefficient estimates, the oldform Euler-factor sign, and the false bad-prime adjoint and conjugate-subgroup claims in 5.11.2. Proved the matrix-center factor in 6.3.1. Recorded the insufficient two-coordinate Weber field in 7.7.3 with its level-three counterexample and corrected third-coordinate version. Chapter 8 records the characteristic-three perfection condition, the bad prime in the supersingularity claim, the missing conic patch and the Noetherian localization hypothesis. Chapter 9 excludes rational cubes from the claimed S3 example and makes the irreducible residual case explicit in the cuspidal Langlands-Tunnell argument. Other printed typos, domain limits and notation conventions remain local to their notes.
- Distinguished proof inputs and computations: Riemann-Roch, Abel and period theorems, Strong Multiplicity One, Chebotarev, Langlands-Tunnell and the relevant algebraic-geometric reduction theorems are named imported inputs, not falsely presented as proved by an exercise. Actual exact checks include the polygon pairings and vertex/edge/face counts for p=11,13,17, oldspace counterexample matrices, symbolic Weierstrass changes, and the 48-element integral GL2(F3) lift with 48 distinct reductions. A numerical negative-weight theta check supports the separately supplied analytic sign correction. Finite or numerical checks supplement the proofs and are labeled accordingly.
- Verified: Rechecked bounded original exercise pages at 200 dpi, plus the needed context and appendix pages. Every one of the 291 new exercise notes and both concepts received a non-author review. Executed all ten coverage-dashboard scripts against actual vault metadata: all 354 source labels map once, with missing, duplicate, unexpected and unparsed exceptions all zero; Section 2.5 has no numbered exercises. Checked contiguous topic numbering, filenames, YAML and enum fields, all new path-qualified links and figures, balanced Obsidian math delimiters, complete subpart markers, dynamic concept backlinks and Study Progress exercise-tag discovery. The whole-vault English scan covered 2,563 exercise/concept notes without residual Chinese or fullwidth prose. These are source, proof and static syntax checks, not an Obsidian reading-view render test.
- Preservation and cleanup: Verified pre-existing note and protected runtime hashes, preserving unrelated user work and the 63 earlier Diamond mappings. This archival work did not modify learning status, generated daily lists, Exercise Manager state or plugin, Bases, Canvases, report counts or the source PDF, and did not invoke Git branch, commit or publication operations. The vault's independently generated automatic backup and graph-setting changes were preserved. Replaced temporary source-audit notices with durable chapter and book completion records, closed the next-source pointer, removed task-owned manifests/scripts/renders, synchronized README's exact latest-three excerpt, and retained the complete changelog history.

### 2026-10-28 (Diamond-Shurman Chapter 2 Exercise Archive)

- Added: 21 complete English exercise notes, one per previously missing Chapter 2 source number: G351–G357, LA592–LA599, MF35–MF39, and AG70. Every original subpart is retained with progressive collapsed hints, a complete independent solution, exact S7 structured provenance and printed/PDF anchors, and a not-started learning state. Preserved 2.3.2 → LA580 and 2.3.5 → MF2 without rewriting them. Chapter 2 is now 23/23; whole-book numbered coverage is 63/354, with 291 source labels still unarchived.
- Connected: Added Modular Curve Charts and Cusp Widths in the existing Modular Forms concept directory, with definitions, quotient-chart proofs, examples, source/proof boundaries and a dynamic exercise-backlink query. Linked it from the existing hub and moduli concept. Routed each exercise by its main proof tools; the batch creates no directories and requires no Canvas or report-count changes.
- Clarified visibly: Distinguished effective periods from matrix orders and effective cusp widths from unsigned matrix stabilizers; used the determinant's trace congruence modulo N squared to cover N=2,3; proved both positive integer local exponents for rational-matrix maps. G355 records that Lemma 2.3.1's termination proof has finitely many larger heights, although translations give infinitely many transformed points. MF38 records the surrounding text's Y(Γ)/X(Γ) cusp-chart typo; MF2 retains its earlier s(τ) inverse-direction correction. LA596 names the imported PID torsion-free module theorem and proves the required Euclidean ring facts.
- Verified: Inspected original exercise pages and bounded context/appendix pages at 200 dpi and independently cross-reviewed all 21 solutions and the new concept. Exact arithmetic checks verified two orientation-changing conjugations, six distinct mod-2 representatives, the low-level matrix powers and stabilizer lists (4 and 3 elements), the trace congruence for 114 sampled determinant-one matrices, and all three trace obstructions for primes 11,23,47,59,71,83. These finite checks supplement the proofs. Executed all ten archive dashboard scripts against the vault's actual exercise metadata: Chapter 2 sections 3/3,5/5,8/8,7/7; §2.5 has no numbered exercises; missing, duplicate, unexpected and unparsed Chapter 2 mappings are all zero, and book-level reconciliation has no duplicate, unexpected or unmatched mappings. Checked numbering, YAML, path links, balanced Obsidian math, dynamic concept backlinks and Study Progress tag discovery; the whole-vault English scan covered 2,270 exercise/concept notes without residual Chinese or fullwidth prose. These are source, proof and static syntax checks, not an Obsidian reading-view render test.
- Preservation and cleanup: Retained unrelated user edits and the generated daily lists; did not change the Exercise Manager state, plugin, Bases, Canvases, source PDF, learning progress, Git branches, commits or remotes. Recorded the completed reconciliation in the permanent chapter status, advanced the next source pointer to Chapter 3 §3.1, removed temporary batch notices and task-owned source renders, and synchronized README's latest-three excerpt while preserving the full history.
