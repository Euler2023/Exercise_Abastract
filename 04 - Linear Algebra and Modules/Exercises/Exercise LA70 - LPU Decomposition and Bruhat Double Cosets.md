---
title: "Exercise LA70: $LPU$ Decomposition and Bruhat Double Cosets"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-factorization
  - gaussian-elimination
  - double-cosets
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.11, printed p. 76, PDF p. 88"
created: 2026-08-23
---

# Exercise LA70: $LPU$ Decomposition and Bruhat Double Cosets

## Problem Statement

> [!question] Exercise M.11
> Most invertible matrices can be written $A=LU$, where $L$ is lower triangular and $U$ is upper triangular with all diagonal entries equal to $1$.
> 
> **(a)** Explain how to compute $L$ and $U$.
> 
> **(b)** Prove uniqueness.
> 
> **(c)** Show that every invertible matrix can be written $LPU$, with $L,U$ as above and $P$ a permutation matrix.
> 
> **(d)** Describe the double cosets $LgU$.

## Hints

> [!hint]- Hint 1
> Ordinary elimination without row exchanges gives $LU$; allowing pivot exchanges introduces $P$.

> [!hint]- Hint 2
> For uniqueness, intersect the lower-triangular group with the upper-unitriangular group.

> [!hint]- Hint 3
> Use ranks of northwest submatrices to distinguish the permutation representatives.

## Solution

> [!success]- Solution
> **(a)** Perform Gaussian elimination on $A$ without row exchanges. The elimination multipliers and pivots form an invertible lower-triangular matrix $L$, while the resulting upper-triangular factor is normalized by moving its diagonal entries into $L$; the remaining upper factor $U$ has diagonal $1$. This succeeds precisely when the required pivots are nonzero, equivalently when all leading principal minors are nonzero.
> 
> **(b)** If $LU=L'U'$, then
> 
> $$
> L^{-1}L'=UU'^{-1}.
> $$
> 
> The left side is lower triangular and the right side is upper unitriangular. Their intersection is $\{I\}$, so $L=L'$ and $U=U'$.
> 
> **(c)** Gaussian elimination with pivot exchanges gives the same factorization with a permutation matrix recording the exchanges. After arranging conventions, this yields $A=LPU$.
> 
> **(d)** Let $\mathcal L$ be the invertible lower-triangular group and $\mathcal U$ the upper-unitriangular group. Part (c) shows that every double coset $\mathcal Lg\mathcal U$ contains a permutation matrix. The ranks of the northwest submatrices are unchanged by left multiplication by $\mathcal L$ and right multiplication by $\mathcal U$; for a permutation matrix these ranks determine its permutation. Hence each double coset contains exactly one permutation matrix. Thus the double cosets are indexed by the permutations in $S_n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.11, printed p. 76, PDF p. 88]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Notation:** In the statement and solution, $\mathcal L$ and $\mathcal U$ denote the two matrix subgroups; this avoids confusing a subgroup with an individual factor.
