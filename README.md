# Abstract Algebra Exercises

An Obsidian vault for studying abstract algebra, featuring exercises, concepts, and visual maps covering the major topics.

## Topics Covered

- **Group Theory** - Groups, subgroups, homomorphisms, quotient groups, Sylow theorems
- **Ring Theory** - Rings, ideals, quotient rings, PIDs, UFDs
- **Field Theory** - Field extensions, algebraic elements, splitting fields
- **Linear Algebra & Modules** - Vector spaces, linear transformations, modules over rings
- **Galois Theory** - Galois groups, fundamental theorem, solvability by radicals
- **Representation Theory** - Group representations, characters, Maschke's theorem

## Structure

```
exercise_abstract/
├── 00 - Home/           # Index, trackers, and base files
├── 01 - Group Theory/   # Concepts and exercises
├── 02 - Ring Theory/    # Concepts and exercises
├── 03 - Field Theory/   # Concepts and exercises
├── 04 - Linear Algebra and Modules/  # Concepts and exercises
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
