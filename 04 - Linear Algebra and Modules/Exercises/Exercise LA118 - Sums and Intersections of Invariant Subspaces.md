---
title: "Exercise LA118: Sums and Intersections of Invariant Subspaces"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - invariant-subspaces
  - subspace-sums
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.3, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA118: Sums and Intersections of Invariant Subspaces

## Problem Statement

> [!question] Exercise 4.3
> If $W_1,W_2$ are $T$-invariant subspaces of $V$, prove that $W_1+W_2$ and $W_1\cap W_2$ are $T$-invariant.

## Hints

> [!hint]- Hint 1
> Apply $T$ to $w_1+w_2$ and separately to an element lying in both spaces.

## Solution

> [!success]- Solution
> If $w_i\in W_i$, then $T(w_1+w_2)=Tw_1+Tw_2\in W_1+W_2$. If $w\in W_1\cap W_2$, invariance gives $Tw\in W_1$ and $Tw\in W_2$, so $Tw\in W_1\cap W_2$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** [S1, Ch. 4, §4, Ex. 4.3, printed p. 127, PDF p. 139]; independent solution.

