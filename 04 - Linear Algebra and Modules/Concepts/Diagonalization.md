---
title: Diagonalization
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Diagonalization

## Definition

> [!info] Definition (Diagonalizable)
> A [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|linear transformation]] $T: V \to V$ (or matrix $A$) is **diagonalizable** if there exists a [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|basis]] of $V$ consisting of [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|eigenvectors]] of $T$.
>
> Equivalently, $A$ is diagonalizable if $A = PDP^{-1}$ for some invertible $P$ and diagonal $D$.

## Diagonalizability Criteria

> [!abstract] Theorem (Diagonalizability)
> An $n \times n$ matrix $A$ is diagonalizable if and only if:
> 1. The sum of geometric multiplicities equals $n$, OR
> 2. For each eigenvalue, geometric multiplicity = algebraic multiplicity, OR
> 3. The minimal polynomial has no repeated roots

> [!tip] Sufficient Conditions
> $A$ is diagonalizable if:
> - $A$ has $n$ distinct eigenvalues
> - $A$ is symmetric/Hermitian (Spectral Theorem)
> - $A$ is a normal matrix ($A^*A = AA^*$)

## The Diagonalization Process

For matrix $A \in M_n(F)$:
1. Find all eigenvalues $\lambda_1, \ldots, \lambda_k$
2. Find basis for each eigenspace $E_{\lambda_i}$
3. Check if eigenvectors form a basis for $F^n$
4. If yes: $P = [v_1 | \cdots | v_n]$, $D = \text{diag}(\lambda_1, \ldots, \lambda_n)$
5. Then $A = PDP^{-1}$

## Applications

> [!tip] Computing Powers
> If $A = PDP^{-1}$, then $A^k = PD^kP^{-1}$, which is easy to compute.

> [!tip] Matrix Exponential
> $e^A = Pe^DP^{-1}$ where $e^D = \text{diag}(e^{\lambda_1}, \ldots, e^{\lambda_n})$.

## Examples

> [!example] Example 1: Diagonalizable
> $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ has eigenvalues $5, 2$ with eigenvectors $(1,1)^T, (1,-2)^T$.
> So $A = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}^{-1}$

> [!example] Example 2: Not diagonalizable
> $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has only eigenvalue $1$ with geometric multiplicity $1 < 2$.

> [!example] Example 3: Symmetric matrix
> All symmetric matrices over $\mathbb{R}$ are orthogonally diagonalizable.

## Jordan Normal Form

> [!info] Definition (Jordan Form)
> When $A$ is not diagonalizable, the closest we can get is the **Jordan normal form**:
> $$J = \begin{pmatrix} J_1 & & \\ & \ddots & \\ & & J_k \end{pmatrix}$$
> where $J_i = \begin{pmatrix} \lambda_i & 1 & & \\ & \lambda_i & \ddots & \\ & & \ddots & 1 \\ & & & \lambda_i \end{pmatrix}$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]] (orthogonal diagonalization)
