---
title: "Exercise Gal58: Solvability of Degree-Ten Galois Extensions"
topic: galois-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - galois-theory
  - solvable-groups
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 12, Ex. 12.1, printed p. 510, PDF p. 522
created: 2026-08-12
---

# Exercise Gal58: Solvability of Degree-Ten Galois Extensions

## Problem Statement

> [!question] Exercise 12.1
> Is every Galois extension of degree $10$ solvable?

## Hints

> [!hint]- Hint 1
> Classify groups of order $2p$, $p$ odd prime.

## Solution

> [!success]- Solution
> Yes. A group $G$ of order $10$ has a unique Sylow $5$-subgroup $P\cong C_5$, since its number divides $2$ and is $1\bmod5$. Thus $P\triangleleft G$, and $G/P\cong C_2$. The normal series
> $$
> G\triangleright P\triangleright\{1\}
> $$
> has cyclic quotients, so $G$ is solvable. Hence every degree-ten Galois extension is solvable by radicals in Artin's sense.

## Related Concepts

- [[01 - Group Theory/Concepts/Solvable Groups|Solvable Groups]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Notes

This asserts solvability of the extension/group, not that it is cyclic.
