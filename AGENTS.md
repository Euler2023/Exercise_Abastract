# AGENTS.md — Working Rules for the Obsidian Mathematics Vault

This repository is an Obsidian vault for organizing abstract algebra and related mathematics. The following rules apply to Codex when reading, classifying, writing, editing, or validating content in this project.

## 1. Core Principles

- Communicate with the user in Chinese by default. Match the language and style of neighboring notes; retain standard English mathematical terminology when it prevents ambiguity.
- The user's explicit instructions in the current turn override this file. If the user changes the classification policy, update the entire active batch instead of mechanically following an earlier plan.
- Before editing, inspect nearby notes, templates, topic hubs, trackers, and Git status. Reuse the existing structure.
- Preserve all existing user changes. Do not overwrite, revert, or opportunistically clean up unrelated work.
- Do not create a new top-level folder, topic folder, or subfolder unless the user explicitly approves it.
- Ordinary note work does not authorize creating Codex tasks, branches, commits, pull requests, or other external writes.
- Also consult `CLAUDE.md` for compatible repository background. If instructions conflict, follow the user's latest request first, then this file.

## 2. Classification Policy: Route by the Primary Computational Toolkit

Choose a note's topic according to the structures, computations, and proof techniques that do most of the work. Do not classify solely by the names of the mathematical objects or by the textbook chapter title.

- Matrix calculations, determinants, linear maps, bases and dimension, eigenvalues, bilinear forms, orthogonal forms, Lorentz forms, symplectic forms, and finite-dimensional matrix topology belong in `04 - Linear Algebra and Modules/`.
- Group axioms, subgroups, quotient groups, conjugation, Sylow theory, finite-group classification, and group-action arguments that are primarily group-theoretic belong in `01 - Group Theory/`.
- Rings, ideals, divisibility, and factorization belong in `02 - Ring Theory/`.
- Field extensions, minimal polynomials, and splitting fields belong in `03 - Field Theory/`.
- Galois correspondence, Galois groups, and solvability by radicals belong in `05 - Galois Theory/`.
- Representations, characters, and Lie groups or Lie algebras studied as representation-theoretic objects belong in `06 - Representation Theory/`.
- If an exercise crosses several topics, use the folder determined by its primary computational toolkit and add cross-topic links under `Related Concepts`.
- When classification is genuinely ambiguous, state a short routing rationale before writing. Do not infer the destination from a chapter title alone.

## 3. One Numbered Exercise per Note

- One numbered source exercise corresponds to one note.
- Keep parts `(a)`, `(b)`, and `(c)` of the same numbered exercise in that note.
- Continue the existing numbering sequence in the target topic. Inspect the largest existing number before creating files.
- Use the filename pattern `Exercise [CODE][NUM] - [Short Title].md`.
- Use the title pattern `Exercise [CODE][NUM]: [Title]`.
- Linear Algebra and Modules uses `LA` or the existing `M` sequence. Prefer the sequence already used by notes of the same type.

## 4. Exercise Note Structure

Every exercise note must contain this frontmatter:

```yaml
---
title: "Exercise [CODE][NUM]: [Title]"
topic: [topic-name]
difficulty: beginner | intermediate | advanced
status: not-started | in-progress | completed
tags:
  - exercise
  - [topic-tag]
source: "Precise source"
created: YYYY-MM-DD
---
```

The body must contain at least:

1. `Problem Statement`: use a `> [!question]` callout and preserve the exact problem and its multipart structure.
2. `Hints`: use collapsed `> [!hint]-` callouts, ordered from weaker to stronger.
3. `Solution`: use a collapsed `> [!success]-` callout and provide a complete derivation.
4. `Related Concepts`: link the main prerequisites and any cross-topic concepts.
5. `Notes`: record method boundaries, alternative approaches, source status, or source ambiguities.

Even when a note contains a full solution, keep its learning status as `not-started` by default. Change the status only when the user says the exercise has been started or completed.

## 5. Concept Notes

- Add only concepts that are genuinely required by the active exercises and are not already present. Search aliases and existing content before creating a note.
- Store concept notes in the existing `Concepts/` directory of the selected topic. Do not create textbook-specific subfolders.
- Include at least a definition, intuition or explanation, key properties, examples, related concepts, related exercises, and source/proof status.
- Link concepts and exercises in both directions: exercises link explicitly to their prerequisite concepts, and every new concept note's `Exercises` section must use a Dataview query to list exercise notes whose `file.outlinks` contain `this.file.link`. Do not maintain a manual exercise list in a concept note.
- Add new concepts to the appropriate location in the target topic hub.
- Explicitly distinguish notation for cross-disciplinary objects, such as Artin's noncompact real symplectic group `SP_{2n}(\mathbb R)` and the compact Lie group `Sp(n)`.

## 6. Textbooks and Mathematical Sources

- When the user names Artin, Lang, or another local mathematics source, use the applicable mathematics skill and resolve the original PDF through that skill's source ledger.
- Exact exercises, definitions, formulas, theorems, figures, and page citations must be checked against a bounded slice of the original PDF. OCR is a search aid, not an authoritative source.
- Record both the printed page and the physical PDF page, for example:
  `[S1, Ch. 9, §9.1, printed p. 283, PDF p. 295]`.
- Distinguish clearly among:
  - statements or proofs contained in the source;
  - independently derived solutions in this vault;
  - external standard inputs;
  - computational verification;
  - source errors or unresolved ambiguities.
- Do not describe an exercise as proved in the textbook merely because the textbook states it. Label Codex-written solutions as independent derivations.
- Never silently repair a source error. Preserve the printed statement, add a visible `Source issue` or equivalent warning, and then state the intended corrected version.
- State the exact hypotheses of mathematical claims. Do not hide essential steps behind words such as "obvious" or "standard." Name any imported result that is not proved at the note's level.

## 7. Images and Source Figures

- Preserve an image only when the exercise materially depends on a source figure, geometric configuration, numbered diagram, or labels in the image.
- Do not retain a screenshot that contains only text and formulas. Transcribe it into searchable Markdown and LaTeX.
- For a figure-dependent task, verify both the source-figure page and the separate exercise page that refers to it.
- Reuse the existing `Attachments/` directory. Do not create a book-specific image subfolder unless the user explicitly approves it.
- Use stable source-based filenames such as `artin-algebra-2e-ch06-fig-6.1.4.png`.
- Record the figure number, printed page, PDF page, and asset type—direct crop, redraw, reconstruction, or annotated derivative—in frontmatter or a `Source Figures` section.
- After embedding, verify figure identity, crop boundaries, legibility, and the Obsidian link.

## 7A. Obsidian Markdown and Formula Syntax

- Write mathematics with Obsidian/MathJax delimiters only: `$...$` for inline mathematics and `$$...$$` for display mathematics.
- Do not use LaTeX document delimiters `\(...\)` or `\[...\]` in Markdown notes. Do not place mathematical expressions in backticks unless the literal source text is being discussed.
- Put each display-math delimiter on its own line. In a callout or blockquote, prefix the opening delimiter, every formula line, and the closing delimiter with `>` so the entire display remains inside the callout, for example:
  ```markdown
  > $$
  > f(x)=x^2+1.
  > $$
  ```
- Keep delimiters balanced within each Markdown file. Do not open inline mathematics on one line and close it on another; use display mathematics for multiline expressions.
- Prefer inline mathematics inside Markdown tables because multiline `$$...$$` blocks can break table rendering.
- Before delivery, scan every newly created or modified Markdown note for forbidden delimiters `\(`, `\)`, `\[`, and `\]`, and verify that all `$` and `$$` delimiters are balanced outside fenced code blocks.

## 8. Study Tracking and Base Files

- Exercise tracking is driven by frontmatter and the `exercise` tag. Do not maintain a static exercise list manually.
- Every new exercise must have valid `topic`, `difficulty`, `status`, and `source` fields plus the `exercise` tag so that `Study Progress.base` can discover it automatically.
- Use only these status values: `not-started`, `in-progress`, and `completed`.
- Before editing a `.base` file, inspect its YAML, filters, formulas, and views. Preserve UTF-8 encoding.
- After adding exercises, verify that `file.hasTag("exercise")` matches them.
- Account for view-level limits: an item not visible in one view may still be present in the Base result set.
- Do not mark an exercise `completed` merely because a solution was added.

## 9. Hubs, README, and Canvas

- Add new concepts to the relevant topic hub. Ordinary exercises should appear through Dataview or Bases rather than a manually maintained complete list.
- After every actual repository modification, add a concise consolidated entry at the top of the Changelog in `README.md`.
- Do not update global counts in `Academic_Report.md` for an ordinary exercise batch unless the user explicitly requests report maintenance.
- Update Canvas files only when a new topic, major directory restructuring, or a genuine knowledge-graph change requires it. Do not edit unrelated canvases merely for formality.
- Do not create a directory solely for a single batch, textbook chapter, or temporary render.

## 10. Editing and Validation Workflow

### Full-chapter source archive protocol

For every full textbook-chapter exercise batch, use the archive dashboard as a two-sided source ledger rather than updating it only after note creation:

1. **Pre-archive source audit:** inspect the bounded exercise pages in the original PDF, record the exact ordered source-label set, the verified total, and the printed/PDF page range in `00 - Home/Artin Exercise Archive.md`. Mark the chapter as source-audited but not complete.
2. **One-to-one archival pass:** create one note for each numbered source exercise, preserving multipart structure, exact source locators, and visible source issues. Do not infer completeness from the number of files alone.
3. **Post-archive reconciliation:** compare the expected source-label set with parsed note provenance. Report missing labels, duplicate mappings, unexpected labels, and Artin-based notes whose locators cannot be parsed. Mark a chapter `Complete` only when all four exception sets are empty and the verified total matches the source audit.
4. **Archive cleanup:** after recording the successful reconciliation in the permanent chapter coverage/status and README Changelog, remove temporary planning prose, active-batch notices, one-off source manifests, and temporary reconciliation code from `Artin Exercise Archive.md`. Keep only durable totals, source anchors, final status notes, and the next-batch pointer.
5. **Final consistency pass:** rerun the ordinary metadata, link, formula-delimiter, tracker, and Git-status checks after that cleanup.

Before writing:

1. Check Git status and identify existing user changes.
2. Read the target templates, several recent notes of the same type, the relevant topic hub, and the tracker configuration.
3. Verify the source, topic routing, numbering range, and whether figures are necessary.
4. For a batch of new mathematical notes, present a short archival plan and obtain the user's approval before writing.

Before delivery, verify at least:

- file count, filenames, numbering, and destination folders;
- complete frontmatter and valid enum values;
- all path-qualified Wikilinks resolve;
- no obsolete paths, old numbers, or pre-move files remain;
- display-math delimiters such as `$$` are balanced;
- all formulas use Obsidian `$...$` or `$$...$$` delimiters, with no LaTeX document delimiters `\(...\)` or `\[...\]` remaining;
- the problem statement, notation, and page anchors match the PDF;
- external proof inputs and source ambiguities are explicitly labeled;
- new exercises are discoverable by the Study Progress tag filter;
- temporary PDF renders and crops have been cleaned up;
- the README Changelog has been updated;
- Git status contains no unintended modifications.

## 11. User-Facing Handoff

- Lead with the outcome, then summarize the important decisions.
- List the main added or modified files using clickable absolute paths.
- Report the validation actually performed and any remaining caveats.
- State source errors, notation conflicts, and unproved dependencies directly.
- Never claim that an unperformed check, an uncreated file, or an unverified conclusion is complete.
