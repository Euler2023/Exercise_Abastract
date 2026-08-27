---
title: "Exercise G195: Fixed Point Theorem for p-Group Actions"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 3, Ex. 3.1, printed p. 222, PDF p. 234"
created: 2026-08-27
---

# Exercise G195: Fixed Point Theorem for p-Group Actions

## Problem Statement

> [!question] Exercise 3.1
> Prove the Fixed Point Theorem (7.3.2).

## Hints

> [!hint]- Hint 1
> Partition the set into orbits. Every non-singleton orbit has order divisible by $p$.

## Solution

> [!success]- Solution
> Let the finite $p$-group $G$ act on the finite set $S$, and let $S^G$ be the set of points fixed by every element of $G$. By orbit-stabilizer, each orbit has order $[G:G_s]$, hence is a power of $p$. The orbits of order $1$ are exactly the points of $S^G$; every other orbit has order divisible by $p$. Summing orbit sizes gives
>
> $$
> |S|=|S^G|+\sum_{\lvert Gs\rvert>1}|Gs|\equiv |S^G|\pmod p.
> $$
>
> In particular, if $p\nmid |S|$, then $S^G$ is nonempty. This is the Fixed Point Theorem. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- **Source status:** [S1, Ch. 7, §3, Ex. 3.1, printed p. 222, PDF p. 234]; problem checked against the source PDF; solution independently derived for this vault.
