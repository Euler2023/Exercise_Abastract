---
title: Matrix Representation
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Matrix Representation

## Definition

> [!info] Definition (Matrix of a Linear Transformation)
> Let $T: V \to W$ be a [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|linear transformation]] with ordered bases $\mathcal{B} = \{v_1, \ldots, v_n\}$ for $V$ and $\mathcal{C} = \{w_1, \ldots, w_m\}$ for $W$. The **matrix of $T$** with respect to $\mathcal{B}$ and $\mathcal{C}$ is:
> $$[T]_\mathcal{B}^\mathcal{C} = [a_{ij}] \in M_{m \times n}(F)$$
> where $T(v_j) = \sum_{i=1}^m a_{ij} w_i$.

## Key Properties

1. $[T(v)]_\mathcal{C} = [T]_\mathcal{B}^\mathcal{C} [v]_\mathcal{B}$
2. $[S \circ T]_\mathcal{B}^\mathcal{D} = [S]_\mathcal{C}^\mathcal{D} [T]_\mathcal{B}^\mathcal{C}$
3. $[T + S] = [T] + [S]$
4. $[\alpha T] = \alpha [T]$
5. $T$ is invertible iff $[T]$ is invertible

## Change of Basis

> [!info] Definition (Change of Basis Matrix)
> For bases $\mathcal{B}$ and $\mathcal{B}'$ of $V$, the **change of basis matrix** $P$ from $\mathcal{B}$ to $\mathcal{B}'$ satisfies:
> $$[v]_{\mathcal{B}'} = P[v]_\mathcal{B}$$

> [!abstract] Theorem (Similar Matrices)
> If $[T]_\mathcal{B} = A$ and $[T]_{\mathcal{B}'} = A'$, then:
> $$A' = P^{-1}AP$$
> Matrices related this way are called **similar**.

## Invariants Under Similarity

Similar matrices share:
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinant]]
- Trace
- Characteristic polynomial
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank]]
- Minimal polynomial

## Examples

> [!example] Example 1: Derivative operator
> $D: P_2 \to P_2$ with basis $\{1, x, x^2\}$:
> $$[D] = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$

> [!example] Example 2: Rotation
> Rotation by $\theta$ in $\mathbb{R}^2$ (standard basis):
> $$[R_\theta] = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

> [!example] Example 3: Change of basis
> From $\{(1,0), (0,1)\}$ to $\{(1,1), (1,-1)\}$:
> $$P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

## Canonical Forms

| Form | Condition | Use |
|------|-----------|-----|
| Diagonal | Diagonalizable | Simplest computation |
| Jordan | Any matrix over $\mathbb{C}$ | Classification |
| Rational canonical | Any matrix | Unique over any field |

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]] (group homomorphisms to $GL(V)$)
