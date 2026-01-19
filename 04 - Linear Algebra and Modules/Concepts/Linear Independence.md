---
title: Linear Independence
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Linear Independence

## Definition

> [!info] Definition (Linear Independence)
> A set of vectors $\{v_1, v_2, \ldots, v_n\}$ in a [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] $V$ is **linearly independent** if:
> $$\alpha_1 v_1 + \alpha_2 v_2 + \cdots + \alpha_n v_n = 0 \implies \alpha_1 = \alpha_2 = \cdots = \alpha_n = 0$$

> [!info] Definition (Linear Dependence)
> A set is **linearly dependent** if it is not linearly independent, i.e., there exist scalars $\alpha_i$, not all zero, such that $\sum \alpha_i v_i = 0$.

## Key Properties

1. The empty set is linearly independent
2. A set containing $\mathbf{0}$ is linearly dependent
3. A single non-zero vector is linearly independent
4. Subsets of linearly independent sets are linearly independent
5. Supersets of linearly dependent sets are linearly dependent

## Characterizations

> [!tip] Equivalent Conditions
> For $\{v_1, \ldots, v_n\}$ in $V$, the following are equivalent:
> 1. The set is linearly dependent
> 2. Some $v_i$ is a linear combination of the others
> 3. The matrix with columns $v_i$ has non-trivial null space
> 4. $\det[v_1 | \cdots | v_n] = 0$ (if $n = \dim V$)

> [!abstract] Theorem
> In an $n$-dimensional vector space:
> - Any set of more than $n$ vectors is linearly dependent
> - Any linearly independent set has at most $n$ vectors

## Testing Linear Independence

For vectors in $F^n$:
1. Form matrix $A$ with vectors as columns
2. Row reduce to echelon form
3. Linearly independent iff every column has a pivot

## Examples

> [!example] Example 1: Standard basis vectors
> $\{e_1, e_2, e_3\}$ in $\mathbb{R}^3$ are linearly independent.

> [!example] Example 2: Dependent set
> $\{(1,2), (2,4)\}$ is dependent since $(2,4) = 2(1,2)$.

> [!example] Example 3: Polynomials
> $\{1, x, x^2\}$ is linearly independent in the space of polynomials.

> [!example] Example 4: Functions
> $\{e^x, e^{2x}, e^{3x}\}$ is linearly independent (can verify via Wronskian).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
