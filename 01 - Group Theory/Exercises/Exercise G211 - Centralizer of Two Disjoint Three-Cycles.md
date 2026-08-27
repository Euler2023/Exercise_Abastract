---
title: "Exercise G211: Centralizer of Two Disjoint Three-Cycles"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.4, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G211: Centralizer of Two Disjoint Three-Cycles

## Problem Statement

> [!question] Exercise 5.4
> Describe $Z(\sigma)$ for $\sigma=(153)(246)$ in $S_7$, and compute $|Z(\sigma)|$ and $|C(\sigma)|$.

## Hints

> [!hint]- Hint 1
> Rotate the two $3$-cycles independently and possibly interchange them.

## Solution

> [!success]- Solution
> The point $7$ is fixed. The two $3$-cycle supports may be rotated independently and interchanged compatibly, so
>
> $$
> Z_{S_7}(\sigma)\cong(C_3\times C_3)\rtimes C_2=C_3\wr S_2.
> $$
>
> Therefore $|Z(\sigma)|=18$ and
>
> $$
> |C(\sigma)|=[S_7:Z(\sigma)]=\frac{7!}{18}=280.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.4, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.
