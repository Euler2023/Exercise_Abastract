---
title: "Exercise Rep111: Character Tables of S3, S4, and S5 by Induction"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.11, printed p. 322, PDF p. 334"
created: 2026-08-27
---

# Exercise Rep111: Character Tables of S3, S4, and S5 by Induction

## Problem Statement

> [!question] Miscellaneous Exercise M.11
> Derive the character table of $S_n$ using induced representations from $A_n$, when **(a)** $n=3$, **(b)** $n=4$, and **(c)** $n=5$.

## Hints

> [!hint]- Hint 1
> Apply Exercises M.9–M.10 to the index-two subgroup $A_n$ and its conjugate characters.

## Solution

> [!success]- Solution
> Inducing conjugate pairs of $A_n$-characters and extending the invariant ones gives the usual tables. For $S_3$, on cycle types $1,2,3$, the rows are
>
> $$
> (1,1,1),\quad(1,-1,1),\quad(2,0,-1).
> $$
>
> For $S_4$, on $1,2,2^2,3,4$, the rows are
>
> $$
> \begin{array}{c|rrrrr}
> 1&1&1&1&1&1\\ \varepsilon&1&-1&1&1&-1\\
> 2&2&0&2&-1&0\\ 3&3&1&-1&0&-1\\ 3'&3&-1&-1&0&1
> \end{array}.
> $$
>
> For $S_5$, on cycle types $1,2,2^2,3,3\cdot2,4,5$, the seven rows are
>
> $$
> \begin{array}{c|rrrrrrr}
> &1&2&2^2&3&3\cdot2&4&5\\\hline
> 1&1&1&1&1&1&1&1\\
> 4&4&2&0&1&-1&0&-1\\
> 5&5&1&1&-1&1&-1&0\\
> 6&6&0&-2&0&0&0&1\\
> 5'&5&-1&1&-1&-1&1&0\\
> 4'&4&-2&0&1&1&0&-1\\
> \varepsilon&1&-1&1&1&-1&-1&1
> \end{array}.
> $$
>
> The primed rows are sign twists. Weighted orthogonality and the degree-square sums verify completeness. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.11, printed p. 322, PDF p. 334]; the tables are independently assembled from the index-two induction rules.

