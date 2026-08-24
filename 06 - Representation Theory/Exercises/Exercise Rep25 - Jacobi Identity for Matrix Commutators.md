---
title: "Exercise Rep25: Jacobi Identity for Matrix Commutators"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - commutators
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.1, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep25: Jacobi Identity for Matrix Commutators

## Problem Statement

> [!question] Exercise 6.1
> Verify the Jacobi identity for the bracket operation $[A,B]=AB-BA$.

## Hints

> [!hint]- Hint 1
> Expand the three double commutators without rearranging factors.

## Solution

> [!success]- Solution
> Associativity gives
>
> $$
> [A,[B,C]]=ABC-ACB-BCA+CBA,
> $$
>
> with the other two expressions obtained cyclically. Hence
>
> $$
> \begin{aligned}
> &[A,[B,C]]+[B,[C,A]]+[C,[A,B]]\\
> &=(ABC-ACB-BCA+CBA)\\
> &\quad +(BCA-BAC-CAB+ACB)\\
> &\quad +(CAB-CBA-ABC+BAC)=0.
> \end{aligned}
> $$
>
> Every word cancels with its negative, proving the Jacobi identity. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]

## Notes

- Only associativity of matrix multiplication is used.
- **Source status:** Ex. 6.1 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The expansion is independent.
