---
title: "Exercise LA115: Singularity of the Commutator Operator"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - commutators
  - singular-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §3, Ex. 3.4, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA115: Singularity of the Commutator Operator

## Problem Statement

> [!question] Exercise 3.4
> Let $B$ be a complex $n\times n$ matrix. Prove or disprove: the operator $T$ on all $n\times n$ matrices defined by $T(A)=AB-BA$ is singular.

## Hints

> [!hint]- Hint 1
> Test the identity matrix.

## Solution

> [!success]- Solution
> The assertion is true. Since
>
> $$
> T(I)=IB-BI=0
> $$
>
> and $I\ne0$, the kernel is nontrivial. Thus $T$ is singular for every $B$ (indeed, every polynomial in $B$ also lies in the kernel).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA59 - The Identity Is Not a Matrix Commutator|Exercise LA59]]

## Notes

- **Deduplication:** LA59 concerns which matrices can be values of a commutator; this exercise concerns the kernel of the commutator operator, so they are related but not duplicates.
- **Source status:** [S1, Ch. 4, §3, Ex. 3.4, printed p. 126, PDF p. 138]; independent solution.

