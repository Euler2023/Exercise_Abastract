# Abstract Algebra Exercises

An Obsidian vault for studying abstract algebra, featuring exercises, concepts, and visual maps covering the major topics.

## Topics Covered

- **Group Theory** - Groups, subgroups, homomorphisms, quotient groups, Sylow theorems
- **Ring Theory** - Rings, ideals, quotient rings, PIDs, UFDs
- **Field Theory** - Field extensions, algebraic elements, splitting fields
- **Module Theory** - Modules over rings, structure theorem for finitely generated modules
- **Galois Theory** - Galois groups, fundamental theorem, solvability by radicals
- **Linear Algebra Connections** - Vector spaces as modules, matrix groups, representation theory

## Structure

```
exercise_abstract/
├── 00 - Home/           # Index, trackers, and base files
├── 01 - Group Theory/   # Concepts and exercises
├── 02 - Ring Theory/    # Concepts and exercises
├── 03 - Field Theory/   # Concepts and exercises
├── 04 - Module Theory/  # Concepts and exercises
├── 05 - Galois Theory/  # Concepts and exercises
├── 06 - Representation Theory/
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

### 2026-01-19
- Added: `.gitignore` configuration to secure API keys (Copilot, Excalidraw), exclude workspace settings, and ignore system files.
- Renamed: "Linear Algebra Connections" topic to "Representation Theory" to better reflect the content focus.
- Updated: Directory structure and all internal links to use the new `06 - Representation Theory` path.
- Updated: Comprehensive cross-linking of concepts across Group, Ring, Field, Module, Galois, and Linear Algebra notes.

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
