---
title: "Exercise LA171: Simultaneous Diagonalization of Commuting Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - diagonalization
  - commuting-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §2, Ex. 2.4, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA171: Simultaneous Diagonalization of Commuting Matrices

## Problem Statement

> [!question] Exercise 2.4
> Let $A$ and $B$ be diagonalizable complex matrices. Prove that there is an invertible matrix $P$ such that $P^{-1}AP$ and $P^{-1}BP$ are both diagonal if and only if $AB=BA$.

## Hints

> [!hint]- Hint 1
> If $A$ and $B$ commute, every eigenspace of $A$ is invariant under $B$.

## Solution

> [!success]- Solution
> If the same $P$ diagonalizes both matrices, their diagonal forms commute, so $AB=BA$.
>
> Conversely, assume $AB=BA$. Decompose the space into eigenspaces of $A$:
>
> $$
> V=\bigoplus_\lambda E_\lambda(A).
> $$
>
> For $v\in E_\lambda(A)$,
>
> $$
> A(Bv)=B(Av)=\lambda Bv,
> $$
>
> so every $E_\lambda(A)$ is $B$-invariant. Because $B$ is diagonalizable, its restriction to each invariant subspace $E_\lambda(A)$ is diagonalizable: the polynomial projections onto the eigenspaces of $B$ preserve every $B$-invariant subspace. Choose a basis of $B$-eigenvectors in each $E_\lambda(A)$. Their union is a basis of common eigenvectors, and its coordinate matrix $P$ diagonalizes both $A$ and $B$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA118 - Sums and Intersections of Invariant Subspaces|Exercise LA118]]

## Notes

- **Source status:** [S1, Ch. 5, §2, Ex. 2.4, printed p. 151, PDF p. 163]; independent proof.
