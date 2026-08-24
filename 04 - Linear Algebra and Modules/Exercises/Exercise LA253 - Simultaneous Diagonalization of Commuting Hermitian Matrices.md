---
title: "Exercise LA253: Simultaneous Diagonalization of Commuting Hermitian Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - simultaneous-diagonalization
  - hermitian-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.17, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA253: Simultaneous Diagonalization of Commuting Hermitian Matrices

## Problem Statement

> [!question] Exercise 6.17
> Let $A,B$ be Hermitian matrices that commute. Prove that there is a unitary matrix $P$ such that $P^*AP$ and $P^*BP$ are both diagonal.

## Hints

> [!hint]- Hint 1
> Decompose the space into eigenspaces of $A$.

> [!hint]- Hint 2
> Commutativity makes every eigenspace of $A$ invariant under $B$.

## Solution

> [!success]- Solution
> The Hermitian spectral theorem gives an orthogonal direct sum of eigenspaces
>
> $$
> \mathbb C^n=\bigoplus_\lambda E_\lambda(A).
> $$
>
> If $x\in E_\lambda(A)$, then
>
> $$
> A(Bx)=B(Ax)=\lambda Bx,
> $$
>
> so $Bx\in E_\lambda(A)$. Thus each $A$-eigenspace is $B$-invariant. The restriction of $B$ to each $E_\lambda(A)$ remains Hermitian, so it has an orthonormal eigenbasis there.
>
> Taking the union of these orthonormal bases produces an orthonormal basis of $\mathbb C^n$ consisting of simultaneous eigenvectors for $A$ and $B$. If $P$ has these vectors as columns, then $P$ is unitary and both $P^*AP$ and $P^*BP$ are diagonal.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- The same argument extends to any finite commuting family of Hermitian matrices.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.17, printed p. 257, PDF p. 269]. The proof is independent.

