---
title: "Exercise LA47: Rank Normal Form by Row and Column Operations"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - rank
  - row-reduction
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, §3, Ex. 3.4, printed p. 33, PDF p. 45; Ch. 4, §2, Ex. 2.4, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA47: Rank Normal Form by Row and Column Operations

## Problem Statement

> [!question] Exercises 3.4 (Chapter 1) and 2.4 (Chapter 4)
> Chapter 1 asks: how much can a matrix be simplified if both row and column operations are allowed?
>
> Chapter 4 asks for a proof of Theorem 4.2.10(b) using row and column operations: if $A$ is an $m\times n$ matrix of rank $r$, prove that invertible matrices $Q,P$ exist such that
>
> $$
> Q^{-1}AP=\begin{pmatrix}I_r&0\\0&0\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Move a nonzero entry to the upper-left corner, scale it to $1$, and clear its row and column.

## Solution

> [!success]- Solution
> If $A$ has rank $r$, invertible row and column operations reduce it to
>
> $$
> \begin{bmatrix}I_r&0\\0&0\end{bmatrix}.
> $$
>
> Indeed, if $A\ne0$, move a nonzero entry to position $(1,1)$, scale it to $1$, and use row and column additions to clear the rest of the first column and first row. Repeat on the remaining lower-right block. The process stops after exactly $r$ pivots because invertible row and column operations preserve rank. Thus rank is the only invariant of a matrix under this two-sided equivalence.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Deduplication:** Chapter 4 Exercise 2.4 is the theorem-form version of Chapter 1 Exercise 3.4, already archived here. The same note is reused rather than creating a duplicate LA exercise.
- **Source status:** The two prompts were checked at [S1, Ch. 1, §3, Ex. 3.4, printed p. 33, PDF p. 45] and [S1, Ch. 4, Thm. 4.2.10(b), printed p. 106, PDF p. 118; §2, Ex. 2.4, printed p. 126, PDF p. 138]. The solution is an independent derivation for this vault.
