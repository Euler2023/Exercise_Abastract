---
title: Group Theory Hub
aliases:
  - Groups
tags:
  - hub
  - group-theory
topic: group-theory
created: 2025-01-19
---

# Group Theory

Group theory is the study of algebraic structures called **groups**. A group $(G, \cdot)$ is a set $G$ together with a binary operation $\cdot$ satisfying closure, associativity, identity, and inverse properties.

## Core Concepts

### Foundations
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

### Structure Theory
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

### Advanced Topics
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Important Groups

| Group | Notation | Description |
|-------|----------|-------------|
| Integers under addition | $(\mathbb{Z}, +)$ | Infinite cyclic group |
| Integers mod $n$ | $(\mathbb{Z}/n\mathbb{Z}, +)$ | Cyclic group of order $n$ |
| Symmetric group | $S_n$ | Permutations of $n$ elements |
| Alternating group | $A_n$ | Even permutations |
| Dihedral group | $D_n$ | Symmetries of regular $n$-gon |
| General linear group | $GL_n(F)$ | Invertible $n \times n$ matrices |

## Exercises by Difficulty

### Beginner
```dataview
TABLE status, source
FROM "01 - Group Theory/Exercises"
WHERE difficulty = "beginner"
SORT file.name ASC
```

### Intermediate
```dataview
TABLE status, source
FROM "01 - Group Theory/Exercises"
WHERE difficulty = "intermediate"
SORT file.name ASC
```

### Advanced
```dataview
TABLE status, source
FROM "01 - Group Theory/Exercises"
WHERE difficulty = "advanced"
SORT file.name ASC
```

## Key Theorems

> [!abstract] Lagrange's Theorem
> If $H$ is a subgroup of finite group $G$, then $|H|$ divides $|G|$.

> [!abstract] First Isomorphism Theorem
> If $\phi: G \to H$ is a [[01 - Group Theory/Concepts/Group Homomorphisms|homomorphism]], then $G/\ker(\phi) \cong \text{im}(\phi)$.

> [!abstract] Sylow Theorems
> For a finite group $G$ with $|G| = p^n m$ where $p \nmid m$:
> 1. Sylow $p$-subgroups exist
> 2. All Sylow $p$-subgroups are conjugate
> 3. The number $n_p$ of Sylow $p$-subgroups satisfies $n_p \equiv 1 \pmod{p}$ and $n_p | m$

## Related Areas

- [[02 - Ring Theory/Ring Theory Hub|Ring Theory]] - Rings generalize groups
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]] - Groups classify field extensions
- [[06 - Representation Theory/Representation Theory Hub|Representation Theory]] - Matrix groups
