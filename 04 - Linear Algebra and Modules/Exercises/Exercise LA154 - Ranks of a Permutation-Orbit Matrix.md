---
title: "Exercise LA154: Ranks of a Permutation-Orbit Matrix"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - permutation-actions
  - rank
  - invariant-subspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.1, printed p. 130, PDF p. 142"
created: 2026-08-23
---

# Exercise LA154: Ranks of a Permutation-Orbit Matrix

## Problem Statement

> [!question] Exercise M.1
> Let $v=(a_1,\ldots,a_n)$ be a real row vector. Form the $n!\times n$ matrix $M$ whose rows are all permutations of the entries of $v$, in arbitrary order. Determine the possible ranks of $M$.

## Hints

> [!hint]- Hint 1
> Split $\mathbb R^n$ into the constant line and the hyperplane of coordinate sum zero.
>
> [!hint]- Hint 2
> Subtract two rows that differ by a transposition.

## Solution

> [!success]- Solution
> Put $s=\sum_i a_i$. If $v=0$, the rank is $0$. If $v$ is a nonzero constant vector, every row is equal and the rank is $1$.
>
> Suppose $v$ is nonconstant. For indices with $a_i\ne a_j$, subtracting the row obtained by transposing $i,j$ from $v$ produces a nonzero multiple of $e_i-e_j$. Permuting this difference shows that the row span contains the entire hyperplane
>
> $$
> H=\{x:\sum_i x_i=0\}.
> $$
>
> If $s=0$, all rows lie in $H$, so the rank is $n-1$. If $s\ne0$, averaging all rows produces a nonzero constant vector, which together with $H$ spans $\mathbb R^n$, so the rank is $n$. Thus the possibilities are $0,1,n-1,n$ (with coincidences for small $n$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** The construction, including the displayed $n=3$ example, was checked at [S1, Ch. 4, Misc. Problems, Ex. M.1, printed p. 130, PDF p. 142]. The solution is independent.

