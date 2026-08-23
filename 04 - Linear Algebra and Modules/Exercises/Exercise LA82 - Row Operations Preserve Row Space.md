---
title: "Exercise LA82: Row Operations Preserve Row Space"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - row-operations
  - row-spaces
  - spanning-sets
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.4, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA82: Row Operations Preserve Row Space

## Problem Statement

> [!question] Exercise 3.4
> Let $A$ be an $m\times n$ matrix and let $A'$ result from elementary row operations. Prove that the rows of $A$ and $A'$ span the same space.

## Hints

> [!hint]- Hint 1
> Each elementary row operation replaces rows by linear combinations of the old rows.

> [!hint]- Hint 2
> Use the inverse elementary operation for the reverse inclusion.

## Solution

> [!success]- Solution
> After one elementary row operation, each new row is a linear combination of the old rows, so $\operatorname{Row}(A')\subseteq\operatorname{Row}(A)$. Every elementary row operation is invertible, and its inverse is again elementary. Applying the same argument to the inverse operation gives the reverse inclusion. Induction over a finite sequence of operations yields
> 
> $$
> \operatorname{Row}(A')=\operatorname{Row}(A).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.4, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
