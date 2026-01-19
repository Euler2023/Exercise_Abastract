---
title: Rank and Nullity
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Rank and Nullity

## Definitions

> [!info] Definition (Kernel/Null Space)
> For a [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|linear transformation]] $T: V \to W$:
> $$\ker(T) = \{v \in V : T(v) = 0\}$$
> This is a [[04 - Linear Algebra and Modules/Concepts/Subspaces|subspace]] of $V$.

> [!info] Definition (Image/Range)
> $$\text{im}(T) = \{T(v) : v \in V\} = T(V)$$
> This is a subspace of $W$.

> [!info] Definition (Nullity and Rank)
> - **Nullity**: $\text{null}(T) = \dim(\ker T)$
> - **Rank**: $\text{rank}(T) = \dim(\text{im } T)$

## Rank-Nullity Theorem

> [!abstract] Theorem (Rank-Nullity / Dimension Theorem)
> For $T: V \to W$ with $V$ finite-dimensional:
> $$\dim V = \text{rank}(T) + \text{null}(T)$$
> Or equivalently: $\dim V = \dim(\ker T) + \dim(\text{im } T)$

## For Matrices

For matrix $A \in M_{m \times n}(F)$:

| Concept | Definition |
|---------|------------|
| Column rank | Dimension of column space |
| Row rank | Dimension of row space |
| Null space | Solutions to $Ax = 0$ |
| Nullity | Dimension of null space |

> [!abstract] Theorem
> Row rank = Column rank = Rank

## Key Properties

1. $\text{rank}(A) = $ number of pivots in row echelon form
2. $\text{null}(A) = n - \text{rank}(A)$ (number of free variables)
3. $\text{rank}(A) \leq \min(m, n)$
4. $\text{rank}(AB) \leq \min(\text{rank}(A), \text{rank}(B))$
5. $\text{rank}(A^T) = \text{rank}(A)$
6. $\text{rank}(A) = \text{rank}(A^T A) = \text{rank}(AA^T)$

## Applications

> [!tip] Injectivity and Surjectivity
> For $T: V \to W$:
> - $T$ is injective (one-to-one) iff $\ker(T) = \{0\}$ iff $\text{null}(T) = 0$
> - $T$ is surjective (onto) iff $\text{im}(T) = W$ iff $\text{rank}(T) = \dim W$

> [!tip] Solvability of Linear Systems
> For $Ax = b$:
> - Has a solution iff $\text{rank}(A) = \text{rank}(A|b)$
> - Unique solution iff additionally $\text{null}(A) = 0$

## Examples

> [!example] Example 1: Projection
> $P: \mathbb{R}^3 \to \mathbb{R}^3$ projecting onto $xy$-plane: $\text{rank}(P) = 2$, $\text{null}(P) = 1$.

> [!example] Example 2: Derivative
> $D: P_n \to P_{n-1}$: $\text{rank}(D) = n$, $\text{null}(D) = 1$ (constants).

> [!example] Example 3: Matrix
> $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$: $\text{rank}(A) = 1$, $\text{null}(A) = 2$.

## Four Fundamental Subspaces

For $A \in M_{m \times n}(F)$:
1. Column space of $A$ (in $F^m$): dimension = rank
2. Null space of $A$ (in $F^n$): dimension = nullity
3. Row space of $A$ (in $F^n$): dimension = rank
4. Left null space of $A$ (in $F^m$): dimension = $m$ - rank

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]] (generalization)
