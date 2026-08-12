---
title: "Exercise Gal34: Element Degrees in an S4 Extension"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, galois-correspondence]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.1, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal34: Element Degrees in an $S_4$-Extension

## Problem Statement

> [!question] Exercise 9.1
> Let $K/F$ be Galois with group $S_4$. Which integers occur as degrees of elements of $K$ over $F$?

## Hints

> [!hint]- Hint 1
> The degree of $\alpha$ is the index of its stabilizer; list subgroup orders of $S_4$.

## Solution

> [!success]- Solution
> Every subgroup $H\le S_4$ is the stabilizer of some element of $K$, so the possible degrees are precisely the indices $[S_4:H]$. Subgroup orders occurring in $S_4$ are
> $$
> 1,2,3,4,6,8,12,24.
> $$
> (There are no subgroups of orders $16$ or $18$, and Lagrange excludes all other divisors.) Therefore the possible degrees are
> $$
> \boxed{1,2,3,4,6,8,12,24}.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

Existence uses Exercise 7.10, archived as [[05 - Galois Theory/Exercises/Exercise Gal27 - An Element with Prescribed Stabilizer|Gal27]].
