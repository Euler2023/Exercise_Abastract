---
title: "Exercise Gal62: Nonabelian Simple Galois Groups Obstruct Radicals"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, solvability-by-radicals]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 12, Ex. 12.6, printed p. 511, PDF p. 523"
created: 2026-08-12
---

# Exercise Gal62: Nonabelian Simple Galois Groups Obstruct Radicals

## Problem Statement

> [!question] Exercise 12.6
> Prove that if the Galois group of a polynomial is nonabelian simple, then its roots are not solvable.

## Hints

> [!hint]- Hint 1
> A radical solution would give a subnormal series with cyclic prime quotients.

## Solution

> [!success]- Solution
> If the roots were solvable by radicals, after adjoining the needed roots of unity one could embed the splitting field into a tower of Galois extensions of prime cyclic degree. Intersections with the splitting field would produce a normal series of its Galois group with cyclic quotients. Thus the Galois group would be solvable.
>
> A nonabelian simple group has no nontrivial proper normal subgroup, so its only possible normal series is $G\triangleright\{1\}$, whose quotient $G$ is not cyclic. It is therefore not solvable, a contradiction.

## Related Concepts

- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Notes

This proves the necessary group-theoretic obstruction.
