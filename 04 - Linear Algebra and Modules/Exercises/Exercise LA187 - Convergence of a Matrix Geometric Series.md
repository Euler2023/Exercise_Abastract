---
title: "Exercise LA187: Convergence of a Matrix Geometric Series"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-series
  - eigenvalues
  - jordan-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.4, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA187: Convergence of a Matrix Geometric Series

## Problem Statement

> [!question] Miscellaneous Problem M.4
> Let $A$ be a complex $n\times n$ matrix all of whose eigenvalues have absolute value less than $1$. Prove that
>
> $$
> I+A+A^2+\cdots
> $$
>
> converges to $(I-A)^{-1}$.

## Hints

> [!hint]- Hint 1
> Use Jordan form to prove $A^k\to0$, then apply the finite geometric-sum identity.

## Solution

> [!success]- Solution
> Put $A=PJP^{-1}$. On a Jordan block $J_r(\lambda)=\lambda I+N$,
>
> $$
> J_r(\lambda)^k=\sum_{j=0}^{r-1}\binom{k}{j}\lambda^{k-j}N^j.
> $$
>
> Each term tends to zero because $|\lambda|<1$ and an exponential decay dominates the polynomial factor $\binom{k}{j}$. Hence $J^k\to0$ and therefore $A^k\to0$.
>
> Since $1$ is not an eigenvalue, $I-A$ is invertible. For every $N\ge0$,
>
> $$
> (I-A)\sum_{k=0}^N A^k=I-A^{N+1}.
> $$
>
> Letting $N\to\infty$ gives
>
> $$
> \sum_{k=0}^\infty A^k=(I-A)^{-1}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** [S1, Ch. 5, Miscellaneous Problems, Ex. M.4, printed p. 152, PDF p. 164]; independent proof.

