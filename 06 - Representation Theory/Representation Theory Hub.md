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
- [[Vector Spaces]]
- [[Linear Transformations]]
- [[Eigenvalues and Eigenvectors]]

### Lie Theory
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]
- [[06 - Representation Theory/Concepts/Weights and Weight Spaces|Weights and Weight Spaces]]
- [[06 - Representation Theory/Concepts/Weyl Character Formula|Weyl Character Formula]]

### Infinite-Dimensional & Moonshine
- [[06 - Representation Theory/Concepts/Kac-Moody Algebras|Kac-Moody Algebras]]
- [[06 - Representation Theory/Concepts/Affine Lie Algebras|Affine Lie Algebras]]
- [[06 - Representation Theory/Concepts/Vertex Operator Algebras|Vertex Operator Algebras]]
- [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]
- [[06 - Representation Theory/Concepts/Monster Group|Monster Group]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]

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

> [!abstract] Weyl's Theorem (Lie Algebras)
> Every finite-dimensional representation of a semisimple Lie algebra is completely reducible.

> [!abstract] Highest Weight Classification
> Finite-dimensional irreducible representations of semisimple Lie algebras are classified by dominant integral weights.

> [!abstract] Weyl-Kac Character Formula
> For integrable highest weight modules over Kac-Moody algebras, the character is given by a ratio involving the Weyl group.

> [!abstract] Jacobi Triple Product (from Affine sl₂)
> $\prod_{n=1}^\infty (1-q^n)(1-zq^{n-1})(1-z^{-1}q^n) = \sum_{m \in \mathbb{Z}}(-1)^m z^m q^{m(m+1)/2}$

> [!abstract] Monstrous Moonshine (Borcherds, 1992)
> The McKay-Thompson series $T_g(\tau)$ for each $g \in \mathbb{M}$ is a Hauptmodul for a genus-zero subgroup of $\text{SL}_2(\mathbb{R})$.

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
- [[Linear Algebra and Modules Hub|Linear Algebra]] - The tool for analysis
- [[Linear Algebra and Modules Hub|Module Theory]] - Generalization to rings