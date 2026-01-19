# Abstract Algebra Exercises

An Obsidian vault for studying abstract algebra, featuring exercises, concepts, and visual maps covering the major topics.

![[./Attachments/cover.jpeg]]

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
