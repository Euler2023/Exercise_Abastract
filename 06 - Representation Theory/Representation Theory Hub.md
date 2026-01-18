---
title: Representation Theory Hub
alias:
  - Representation Theory
  - Group Representations
tags:
  - hub
  - representation-theory
topic: representation-theory
created: 2025-01-19
---

# Representation Theory

Representation theory studies abstract algebraic structures by representing their elements as linear transformations of vector spaces. It essentially linearizes group theory, allowing us to apply the powerful tools of linear algebra to understand groups.

## Core Concepts

### Foundations
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

### Linear Algebra Prereqs
- [[06 - Representation Theory/Concepts/Vector Spaces|Vector Spaces]]
- [[06 - Representation Theory/Concepts/Linear Transformations|Linear Transformations]]
- [[06 - Representation Theory/Concepts/Eigenvalues|Eigenvalues and Eigenvectors]]

## Exercises by Difficulty

### Beginner
```dataview
TABLE status, source
FROM "06 - Representation Theory/Exercises"
WHERE difficulty = "beginner"
SORT file.name ASC
```

### Intermediate
```dataview
TABLE status, source
FROM "06 - Representation Theory/Exercises"
WHERE difficulty = "intermediate"
SORT file.name ASC
```

### Advanced
```dataview
TABLE status, source
FROM "06 - Representation Theory/Exercises"
WHERE difficulty = "advanced"
SORT file.name ASC
```

## Key Theorems

> [!abstract] Maschke's Theorem
> For finite group $G$ and field $F$ with $\text{char}(F) \nmid |G|$:
> Every representation is completely reducible (direct sum of irreducibles).

> [!abstract] Schur's Lemma
> A $G$-homomorphism between irreducibles is either zero or an isomorphism.
> Over algebraically closed fields: endomorphisms are scalars.

> [!abstract] Orthogonality Relations
> Irreducible characters form an orthonormal basis for the space of class functions.

## Connection Summary

| Concept | Group Theory | Linear Algebra |
|---------|--------------|----------------|
| **Object** | Group $G$ | Vector Space $V$ |
| **Action** | Action on Set | Linear Transformation |
| **Structure** | Subgroup | Subspace |
| **Decomposition** | Simple Groups | Irreducible Representations |
| **Measurement** | Conjugacy Class | Trace (Character) |

## Related Areas

- [[01 - Group Theory/Group Theory Hub|Group Theory]] - The source of symmetry
- [[06 - Representation Theory/Concepts/Vector Spaces|Linear Algebra]] - The tool for analysis
- [[04 - Module Theory/Module Theory Hub|Module Theory]] - Generalization to rings