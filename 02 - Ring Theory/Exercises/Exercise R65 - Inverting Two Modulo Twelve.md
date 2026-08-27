---
title: "Exercise R65: Inverting Two Modulo Twelve"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - quotient-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §5, Ex. 5.3, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R65: Inverting Two Modulo Twelve

## Problem Statement

> [!question] Exercise 5.3
> Describe the ring obtained from $\mathbb Z/12\mathbb Z$ by adjoining an inverse of $2$.

## Hints

> [!hint]- Hint 1
> Elements killed by a power of $2$ must vanish after $2$ becomes invertible.

## Solution

> [!success]- Solution
> In $\mathbb Z/12\mathbb Z$, the elements killed by some power of $2$ are exactly the multiples of $3$:
>
> $$
> \{0,3,6,9\}=(3).
> $$
>
> They must map to zero after $2$ is inverted. The quotient by this kernel is $\mathbb Z/3\mathbb Z$, where $2$ is already a unit. Therefore the universal ring obtained by adjoining $2^{-1}$ is
>
> $$
> \mathbb F_3.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §5, Ex. 5.3, printed p. 356, PDF p. 368]. The kernel calculation is independent.

