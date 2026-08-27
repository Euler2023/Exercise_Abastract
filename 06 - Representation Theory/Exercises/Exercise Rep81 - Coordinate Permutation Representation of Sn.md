---
title: "Exercise Rep81: Coordinate Permutation Representation of Sn"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.5, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep81: Coordinate Permutation Representation of Sn

## Problem Statement

> [!question] Exercise 6.5
> The symmetric group $S_n$ operates on $\mathbb C^n$ by permuting the coordinates. Decompose this representation explicitly into irreducible representations. Hint: I recommend against using the orthogonality relations. This problem is closely related to Exercise M.1 from Chapter 4.

## Hints

> [!hint]- Hint 1
> Separate the all-ones line from the coordinate-sum-zero hyperplane.

## Solution

> [!success]- Solution
> Let $\mathbf1=(1,\ldots,1)$ and
>
> $$
> W=\{(z_1,\ldots,z_n):z_1+\cdots+z_n=0\}.
> $$
>
> Both are invariant and $\mathbb C^n=\mathbb C\mathbf1\oplus W$. The first summand is trivial. To see that $W$ is irreducible, take a nonzero invariant subspace and a vector in it with two unequal coordinates. Subtracting its image under the transposition of those coordinates produces a nonzero multiple of $e_i-e_j$. Conjugating by $S_n$ yields every $e_k-e_l$, which span $W$. Thus
>
> $$
> \mathbb C^n\cong1\oplus W,
> $$
>
> with $W$ irreducible for $n\ge2$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.5, printed p. 318, PDF p. 330]; the direct proof follows the suggested non-character route.

