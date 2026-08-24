---
title: "Exercise LA258: Spectral Theorem for Symmetric Operators"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - symmetric-operators
  - spectral-theorem
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.22, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA258: Spectral Theorem for Symmetric Operators

## Problem Statement

> [!question] Exercise 6.22
> Prove the Spectral Theorem for symmetric operators.

## Hints

> [!hint]- Hint 1
> Obtain a real eigenvector, then prove that its orthogonal complement is invariant.

> [!hint]- Hint 2
> Apply induction on the dimension.

## Solution

> [!success]- Solution
> Let $T$ be symmetric on a finite-dimensional Euclidean space $V$. After complexification, its matrix is Hermitian, so its eigenvalues are real. A complex eigenvector $x+iy$ for a real eigenvalue $\lambda$ satisfies
>
> $$
> Tx=\lambda x,
> \qquad
> Ty=\lambda y.
> $$
>
> At least one of $x,y$ is nonzero, so $T$ has a nonzero real eigenvector. Normalize one such vector to $v_1$ and let $W=\operatorname{span}(v_1)$.
>
> If $u\in W^\perp$, symmetry gives
>
> $$
> (Tu,v_1)=(u,Tv_1)=\lambda(u,v_1)=0.
> $$
>
> Hence $W^\perp$ is $T$-invariant. The restriction of $T$ to $W^\perp$ is again symmetric. By induction on $\dim V$, $W^\perp$ has an orthonormal basis of eigenvectors. Adding $v_1$ produces an orthonormal eigenbasis of $V$.
>
> If $P$ has this basis as columns, then $P$ is real orthogonal and $P^{\mathsf T}AP$ is real diagonal. This is the spectral theorem for symmetric operators.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- The only imported input is the already established reality of the spectrum of a real symmetric matrix, obtained by viewing it as Hermitian over $\mathbb C$.
- **Source status:** The exercise and Theorem 8.6.10 were verified at [S1, Ch. 8, §6, Ex. 6.22, printed p. 258, PDF p. 270] and printed p. 245/PDF p. 257. The proof is independent.

