---
title: "Exercise LA101: An Infinite-Field Vector Space Is Not a Finite Union of Proper Subspaces"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - vector-spaces
  - infinite-fields
  - subspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Miscellaneous Problems, Ex. M.4, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA101: An Infinite-Field Vector Space Is Not a Finite Union of Proper Subspaces

## Problem Statement

> [!question] Exercise M.4
> Let $V$ be a vector space over an infinite field $F$. Prove that $V$ is not the union of finitely many proper subspaces.

## Hints

> [!hint]- Hint 1
> Induct on the number of subspaces after discarding redundant ones.

> [!hint]- Hint 2
> Choose a line whose direction avoids the earlier subspaces; each such subspace meets it in at most one point.

## Solution

> [!success]- Solution
> Induct on the number $r$ of proper subspaces. After deleting any subspace contained in another, suppose
> 
> $$
> V=W_1\cup\cdots\cup W_r.
> $$
> 
> By induction applied inside $W_r$ to the proper subspaces $W_r\cap W_i$, choose $a\in W_r$ with $a\notin W_i$ for $i<r$. Choose $b\notin W_r$. Consider the affine line $b+ta$, $t\in F$. It never meets $W_r$, for such a meeting would put $b$ in $W_r$. Each $W_i$ with $i<r$ meets it in at most one point: two intersection points would have difference $(t-s)a\in W_i$, forcing $a\in W_i$. Thus the finite union meets the line in at most $r-1$ points. Since $F$ is infinite, the line has infinitely many points, a contradiction.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, Misc. Problems, Ex. M.4, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
