---
title: "Exercise LA183: Continuity of Conjugation by a Fixed Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-convergence
  - similarity
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.8, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA183: Continuity of Conjugation by a Fixed Matrix

## Problem Statement

> [!question] Exercise 4.8
> Let $P,B_k,B$ be $n\times n$ matrices, with $P$ invertible. Prove that if $B_k$ converges to $B$, then $P^{-1}B_kP$ converges to $P^{-1}BP$.

## Hints

> [!hint]- Hint 1
> Subtract the proposed limit and estimate with a submultiplicative matrix norm.

## Solution

> [!success]- Solution
> Since $P$ and $P^{-1}$ are fixed,
>
> $$
> P^{-1}B_kP-P^{-1}BP=P^{-1}(B_k-B)P.
> $$
>
> Thus, for any submultiplicative matrix norm,
>
> $$
> \|P^{-1}B_kP-P^{-1}BP\|
> \le \|P^{-1}\|\,\|B_k-B\|\,\|P\|\longrightarrow0.
> $$
>
> Therefore conjugation by a fixed invertible matrix is a continuous linear automorphism of the matrix space.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** [S1, Ch. 5, §4, Ex. 4.8, printed p. 152, PDF p. 164]; independent proof.

