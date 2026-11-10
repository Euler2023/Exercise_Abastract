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

### 2026-11-10 (Exercise Manager: Backfill Missed Daily Lists)

- Added: A "补齐最近一周题单" feature to the Exercise Manager plugin (`E:\project\tools\exercise_manager`, junctioned at `.obsidian/plugins/exercise_manager`): new controller method `backfillRecentWeek()` plus `recentDateKeys()` in `main.js` fill any dates missing a daily list within the last 7 days (today included), oldest first — for each missing date it draws a deterministic random-review batch (no-repeat within the cycle) and, when Systematic Progress is enabled, also creates that date's systematic batch, then exports the `Daily Exercise List - YYYY-MM-DD.md` file; existing batches (including today's) are never modified, and exhaustion leaves remaining dates empty with an honest notice. Registered as command `backfill-week-daily-exercises` and as a sidebar button with pause-aware tooltip; like "生成今日题单" it is a manual action and works while automatic generation is paused.
- Updated: The plugin's own `README.md` (command table, sidebar description, drawing rules, pause section) and its test suite — new `tests/daily_backfill.test.js` (fill-only-missed-days with existing batches untouched and idempotency, paused backfill, command and button registration); `tests/main_smoke.test.js` command expectations updated for the new command id.
- Verified: `node --test` in the plugin root — 45/45 tests pass (including all pre-existing daily sampler/state/workflow/pause tests). No vault note, daily list, Exercise Manager runtime state, Base or Canvas was modified; the untracked generated list `10 - Daily Exercise Lists/Daily Exercise List - 2026-11-10.md` was left untouched. The plugin repo has other uncommitted pre-existing changes that were preserved as-is.

### 2026-11-08 (Weekly Deck PDF Bookmarks)

- Added: A PDF bookmark outline to `Attachments/daily-exercise-weekly-review-2026-11-02-to-08.pdf` — 57 entries: cover, 14 part-level sections, and one level-2 bookmark per exercise — generated by explicit `\pdfbookmark` entries added to the self-contained `.tex`, so rebuilding the source preserves the outline. Random Review exercises nest under 四、随机复习 and Systematic Progress exercises under 五、系统推进; every exercise bookmark targets its first page.
- Verified: Three XeLaTeX passes with unchanged 96-page pagination, zero errors/Overfull/Underfull/missing characters and no "??" in 139,808 extracted characters; outline titles, nesting and page destinations checked programmatically with pypdf (15 top-level entries and 42 nested exercise entries, no duplicate or dangling destinations); the bookmarked PDF was regenerated from the delivered `.tex` in a temporary output directory, which was removed afterwards. No exercise note, daily list, Exercise Manager state, Base or Canvas was modified.

### 2026-11-08 (Weekly Daily Exercise Review Deck, 2026-11-02 to 11-08)

- Added: A 96-page Chinese Beamer review of all seven Daily Exercise Lists for 11-02 through 11-08 (no missing day): 42 exercises = 21 Random Review (Artin Ch. 6 §3–§12 + M.1: plane isometries and complex coordinates, discrete/frieze groups, stabilizers and group actions, cube/icosahedron symmetry, wallpaper point groups and crystallographic restriction, lattices, $D_{10}$ cosets) + 21 Systematic Progress (Ch. 7 §10–§11 + M.1–M.9 + Ch. 8 §1.1: commutator subgroups, the Heisenberg group, normal closures in free groups, presentations and Todd–Coxeter, triangle groups, double cosets, isomorphism theorems, coset cardinalities, odd-order conjugacy, symmetric/skew decomposition). Saved as `Attachments/daily-exercise-weekly-review-2026-11-02-to-08.tex` with its compiled PDF; G148's Figure 6.6.2 and the G110 frieze pattern are embedded from verified `Attachments/` assets.
- Clarified: Every exercise follows the same template — exact English statement with printed/PDF locator, one-line strategy, step-by-step derivation with displayed intermediate equations, and a concrete verification or counterexample. Random Review and Systematic Progress stay separate sections; the deck is derived material and changes no exercise-note status, generated daily list, Exercise Manager state, Base or Canvas. Snapshot: 2026-11-08 16:25 (11-08 list read time); the list files themselves were not edited.
- Corrected visibly (notes unchanged): G253's note direct proof mis-wrote $xy^2x=y$ as $=1$; G256's note omits the $|G|=60$ step and uses a right-action convention; G258's "see Exercise M.9" is a cross-chapter misreference (the double-coset definition is Ch. 2 M.9, printed p. 76 / PDF p. 88); G148's note appears to swap $pmg$/$pgg$ for the brick and wave patterns (point groups unchanged, $D_2$) and several notes (G148/G177/G162/G169) contain literal `qquad` typos; G113's countability argument is tightened; G247's printed duplicated (d) is preserved; G255's "generate a triangle group" is proved as $\cong G^{333}$. The G251(c) derivation and LA201's characteristic-2 remark were corrected inside the deck after independent audit.
- Verified: All 42 statements and locators were checked against the original Artin *Algebra* 2e PDF (Ch. 6 printed pp. 188–193 = PDF pp. 200–205; Ch. 7 printed pp. 226–227 = PDF pp. 238–239; Ch. 8 printed p. 254 = PDF p. 266) and Lang's *Algebra*, rev. 3rd ed. (printed p. 75 = PDF p. 90), including the cross-anchors (6.3.3), (6.8.4), (7.8.2), (7.7.8), Fig. 6.6.2 and Ex. 7.11.8. Six fragment authors independently re-derived the exercises and ran Python checks; the Lead re-checked the S1 Todd–Coxeter/coset-table results with bounded enumeration plus explicit matrix/permutation models; a non-author verifier audited the assembled source and PDF (42/42 statements and locators pass; G169 $D_4/V_4$, G148's rows and 13/4 split, G178 4/5/8, G251's ten orders including $SL_2(\mathbb F_3)$, G250's tables, G111, G264, G265 and LA201 independently recomputed; its two math-text defects, one glyph defect and its low-severity note that seven statements had been paraphrased in Chinese were all fixed before delivery — those statements were restored to verbatim English). Three XeLaTeX passes under TeX Live 2023 with zero errors, zero Overfull/Underfull boxes, no missing characters, no unresolved references and no "??" in 139,808 extracted characters; the 96-page PDF was rendered and all pages were inspected (contact sheets plus targeted full-resolution pages, including the G148 figure frame and the changed S1/back-matter pages). Snapshot hashes of the seven lists (SHA-256 prefixes): 11-02 F551E09C7C48, 11-03 FD7B6BBE714C, 11-04 648F6D8EF73E, 11-05 05F4FF529794, 11-06 E5F572A1FF87, 11-07 CA9E08516994, 11-08 372FC251D0A9; PDF SHA-256 prefix FBA090027DAAADF3.
- Note: The G253/G256/G258/G148/G113 wording issues and the `qquad` typos remain in the existing exercise notes; this deck carries the corrections and source-issue explanations. No exercise note, concept note, hub, Base, Canvas, daily list or Exercise Manager state was modified. The scratch build directory `tmp/weekly-2026-11-02-to-08` was removed after delivery; README's latest-three excerpt was synchronized while the full changelog history was preserved.
