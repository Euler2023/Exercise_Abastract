---
title: "Exercise Rep96: Irreducibility of the SU2-to-SO3 Representation"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 8, Ex. 8.3, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep96: Irreducibility of the SU2-to-SO3 Representation

## Problem Statement

> [!question] Exercise 8.3
> Prove that the orthogonal representation (9.4.1) $SU_2\to SO_3$ is irreducible.

## Hints

> [!hint]- Hint 1
> The image is all of $SO_3$; compare rotations about different axes.

## Solution

> [!success]- Solution
> The map $SU_2\to SO_3$ is onto, so invariant subspaces are exactly those invariant under every spatial rotation. If a nonzero proper real invariant subspace existed, its invariant orthogonal complement would reduce the problem to a common invariant line. But a line invariant under every rotation would have to be the rotation axis for rotations about the $x$-axis and also for rotations about the $y$-axis, which is impossible. Hence the real representation is irreducible. The same argument after complexification, using two rotations with no common eigenline, proves complex irreducibility. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source input:** surjectivity of the spin map is established in Artin §9.4.
- **Source status:** [S1, Ch. 10, §8, Ex. 8.3, printed p. 320, PDF p. 332].

