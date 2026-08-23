---
title: "Exercise LA105: A Lower Bound for Nullity"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - rank-nullity
  - homogeneous-systems
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §1, Ex. 1.3, printed p. 125, PDF p. 137"
created: 2026-08-23
---

# Exercise LA105: A Lower Bound for Nullity

## Problem Statement

> [!question] Exercise 1.3
> Let $A$ be an $m\times n$ matrix. Use the dimension formula to prove that the space of solutions of the linear system $AX=0$ has dimension at least $n-m$.

## Hints

> [!hint]- Hint 1
> Apply rank-nullity to $A:F^n\to F^m$ and bound its rank by $m$.

## Solution

> [!success]- Solution
> The solution space is $\ker A$. The dimension formula gives
>
> $$
> \dim\ker A=n-\operatorname{rank}A.
> $$
>
> Since $\operatorname{im}A\subseteq F^m$, one has $\operatorname{rank}A\le m$. Therefore $\dim\ker A\ge n-m$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA1 - Rank-Nullity|Exercise LA1]]

## Notes

- **Deduplication:** LA1 develops the dimension theorem itself; this numbered Artin exercise is a distinct application and is retained separately.
- **Source status:** [S1, Ch. 4, §1, Ex. 1.3, printed p. 125, PDF p. 137]; independent solution.

