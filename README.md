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

### 2026-11-12 (Hall Exercise Source Ledger and First Chapter)

- Added: Established the Hall second-edition archive ledger before writing any exercise note. Audited all 170 numbered exercises in 13 chapters against the original 200 dpi exercise pages and boundaries, retaining exact ordered source keys, chapter totals, printed/PDF anchors, page-by-page distributions, appendix inventory limits, visible source-issue candidates, and figure-verification boundaries. The permanent source ID remains S10; the 452-page PDF identity and SHA-256 were verified. Linked the ledger from Home, with live coverage, source-reconciliation warnings, and per-chapter mappings.
- Archived: Completed Chapter 1, Section 1.6, Exercises 1–18 as LA651–LA667 and G379, with complete English statements and printed hints, progressive hints, independent full solutions, precise readable/structured source provenance, existing prerequisite links, and not-started learning states. One-to-one reconciliation has zero missing, duplicate, unexpected, or unparsed Chapter 1 mappings. Whole-book coverage is 18/170; the next target is Chapter 2, Section 2.6, Exercises 1–11. Preserved the source's Exercise 12 endpoint orientation and distinguished compact Sp(n) from Hall's and Artin's noncompact symplectic notation.
- Verified: Every new exercise received non-author mathematical review. Exact symbolic checks covered the symplectic determinant identity, Heisenberg group law and commutator, SU(2) norm/determinant, the orientation adjustment, and the centralizer span. Executed the coverage script against actual metadata and seven reconciliation edge cases; checked numbering, YAML, source pages, links and anchors, Obsidian formula syntax, Study Progress discovery, and all 2,581 exercise/concept files for residual Chinese/fullwidth prose. Preserved all existing notes and the pre-existing generated daily list; no learning progress, runtime state, plugin, Base, Canvas, report count, Git branch, commit, or remote was changed. Retained the complete changelog history and synchronized README's latest-three excerpt.
- Cleanup: Removed all task-owned source renders, extraction metadata, and validation files after their checks; the Hall audit, review, and first-chapter scratch directories were confirmed absent. Pre-existing temporary content was preserved.

### 2026-11-10 (Exercise Manager Backfill: Stale-File Repair)

- Fixed: The new "补齐最近一周题单" command skipped dates whose state batches already existed even when the exported Markdown file was missing or contained another date's content, so a hand-copied list file (e.g. `10 - Daily Exercise Lists/Daily Exercise List - 2026-11-09.md` duplicated from the 11-10 file, title still reading 2026-11-10 and carrying 11-10's exercises) could not be repaired by re-running the command. The controller now re-exports every in-window date that has any batch; `updateDailyListDocument` additionally normalizes the frontmatter `title`, `date` and the `# Daily Exercise List` heading to the file's own dateKey (managed blocks and the preserved Notes section are handled exactly as before). The state file's 11-09 random/systematic batches were verified correct and non-duplicated (sha256 token comparison against both list files); the duplication existed only in the hand-copied file.
- Verified: Plugin test suite extended with a regression test simulating the hand-copy scenario (stale file rewritten to its own date's batch, title normalized, and a later re-run repairs re-corrupted files); `node --test` in the plugin root passes 46/46. Idempotency re-confirmed: correctly exported dates are untouched (`updated=false`). No vault note, daily list, or Exercise Manager runtime state was modified; the wrong 11-09 list file was deliberately NOT hand-edited (AGENTS.md §8A) — reloading the plugin and running "补齐最近一周题单" once repairs it automatically.

### 2026-11-10 (Exercise Manager: Backfill Missed Daily Lists)

- Added: A "补齐最近一周题单" feature to the Exercise Manager plugin (`E:\project\tools\exercise_manager`, junctioned at `.obsidian/plugins/exercise_manager`): new controller method `backfillRecentWeek()` plus `recentDateKeys()` in `main.js` fill any dates missing a daily list within the last 7 days (today included), oldest first — for each missing date it draws a deterministic random-review batch (no-repeat within the cycle) and, when Systematic Progress is enabled, also creates that date's systematic batch, then exports the `Daily Exercise List - YYYY-MM-DD.md` file; existing batches (including today's) are never modified, and exhaustion leaves remaining dates empty with an honest notice. Registered as command `backfill-week-daily-exercises` and as a sidebar button with pause-aware tooltip; like "生成今日题单" it is a manual action and works while automatic generation is paused.
- Updated: The plugin's own `README.md` (command table, sidebar description, drawing rules, pause section) and its test suite — new `tests/daily_backfill.test.js` (fill-only-missed-days with existing batches untouched and idempotency, paused backfill, command and button registration); `tests/main_smoke.test.js` command expectations updated for the new command id.
- Verified: `node --test` in the plugin root — 45/45 tests pass (including all pre-existing daily sampler/state/workflow/pause tests). No vault note, daily list, Exercise Manager runtime state, Base or Canvas was modified; the untracked generated list `10 - Daily Exercise Lists/Daily Exercise List - 2026-11-10.md` was left untouched. The plugin repo has other uncommitted pre-existing changes that were preserved as-is.
