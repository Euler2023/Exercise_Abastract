---
title: Eigenvalues and Eigenvectors
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Eigenvalues and Eigenvectors

## Definition

> [!info] Definition (Eigenvalue and Eigenvector)
> Let $T: V \to V$ be a [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|linear transformation]]. A scalar $\lambda \in F$ is an **eigenvalue** of $T$ if there exists a non-zero vector $v \in V$ such that:
> $$T(v) = \lambda v$$
> The vector $v$ is called an **eigenvector** corresponding to $\lambda$.

> [!info] Definition (Eigenspace)
> The **eigenspace** for eigenvalue $\lambda$ is:
> $$E_\lambda = \ker(T - \lambda I) = \{v \in V : T(v) = \lambda v\}$$

## Characteristic Polynomial

> [!info] Definition (Characteristic Polynomial)
> For a matrix $A \in M_n(F)$:
> $$p_A(\lambda) = \det(A - \lambda I)$$
> Eigenvalues are the roots of $p_A(\lambda) = 0$.

> [!abstract] Cayley-Hamilton Theorem
> Every matrix satisfies its own characteristic polynomial: $p_A(A) = 0$.

## Key Properties

1. **Algebraic multiplicity**: multiplicity of $\lambda$ as root of $p_A(\lambda)$
2. **Geometric multiplicity**: $\dim E_\lambda = \dim \ker(A - \lambda I)$
3. Geometric multiplicity $\leq$ algebraic multiplicity
4. Eigenvectors for distinct eigenvalues are linearly independent
5. $\text{tr}(A) = \sum \lambda_i$ and $\det(A) = \prod \lambda_i$

## Finding Eigenvalues and Eigenvectors

1. Compute $\det(A - \lambda I) = 0$
2. Solve for $\lambda$ (eigenvalues)
3. For each $\lambda$, solve $(A - \lambda I)v = 0$ for eigenvectors

## Examples

> [!example] Example 1: Rotation matrix
> $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ has eigenvalues $\pm i$ (no real eigenvectors).

> [!example] Example 2: Diagonal matrix
> $D = \text{diag}(d_1, \ldots, d_n)$ has eigenvalues $d_i$ with eigenvectors $e_i$.

> [!example] Example 3: 2×2 matrix
> $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$: eigenvalues $\lambda = 3, 2$ with eigenvectors $(1, 0)^T$ and $(1, -1)^T$.

> [!example] Example 4: Projection
> A projection onto a subspace has eigenvalues $0$ and $1$ only.

## Special Cases

| Matrix Type         | Eigenvalue Properties |
| ------------------- | --------------------- |
| Symmetric/Hermitian | All real eigenvalues  |
| Orthogonal/Unitary  | $\lambda=1$           |
| Positive definite   | All $\lambda > 0$     |
| Nilpotent           | All $\lambda = 0$     |

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[06 - Representation Theory/Concepts/Characters|Characters]] (trace of representation)
