---
title: "Exercise G216: Even Permutations Centralizing a Three-Cycle"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.9, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G216: Even Permutations Centralizing a Three-Cycle

## Problem Statement

> [!question] Exercise 5.9
> Let $q$ be a $3$-cycle in $S_n$. How many even $p$ satisfy $pqp^{-1}=q$?

## Hints

> [!hint]- Hint 1
> Use $Z_{S_n}(q)=\langle q\rangle\times S_{n-3}$.

## Solution

> [!success]- Solution
> The displayed centralizer description holds because a commuting permutation preserves the support of $q$. All three powers of $q$ are even. Hence the answer is
>
> $$
> 3\quad(n=3,4),\qquad \frac{3(n-3)!}{2}\quad(n\ge5),
> $$
>
> since for $n\ge5$ exactly half of $S_{n-3}$ is even. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.9, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.
