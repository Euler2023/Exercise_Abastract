---
title: "Exercise LA149: One Eigenline Forces One Jordan Block"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-form
  - geometric-multiplicity
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.5, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA149: One Eigenline Forces One Jordan Block

## Problem Statement

> [!question] Exercise 7.5
> What is the Jordan form of a matrix $A$ all of whose eigenvectors are multiples of a single vector?

## Hints

> [!hint]- Hint 1
> Different eigenvalues have independent eigenvectors, and each Jordan block contributes one eigenvector.

## Solution

> [!success]- Solution
> There can be only one eigenvalue $\lambda$, since eigenvectors for distinct eigenvalues are independent. The dimension of its eigenspace equals the number of Jordan blocks, and by hypothesis that dimension is one. Thus the Jordan form consists of the single block
>
> $$
> J_n(\lambda).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Hypothesis boundary:** The Jordan-form conclusion assumes the characteristic polynomial splits, as in Artin's complex-vector-space setting for this section.
- **Source status:** [S1, Ch. 4, §7, Ex. 7.5, printed p. 129, PDF p. 141]; independent solution.

