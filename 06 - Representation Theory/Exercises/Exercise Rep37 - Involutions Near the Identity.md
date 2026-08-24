---
title: "Exercise Rep37: Involutions Near the Identity"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - exponential-map
  - local-structure
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 7, Ex. 7.3, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep37: Involutions Near the Identity

## Problem Statement

> [!question] Exercise 7.3
> Using the exponential, find all solutions near $I$ of the equation $P^2=I$.

## Hints

> [!hint]- Hint 1
> Restrict the exponential to a neighborhood on which it is injective.

## Solution

> [!success]- Solution
> Choose a neighborhood $U$ of $0$ on which $\exp$ is one-to-one and such that $2U$ remains in a logarithm neighborhood of $I$. If $P$ is sufficiently near $I$, write $P=e^A$ with $A\in U$. Then
>
> $$
> I=P^2=e^{2A}.
> $$
>
> Local injectivity of the exponential gives $2A=0$, so $A=0$ and $P=I$. Thus the identity is the only solution near $I$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- Globally there may be many involutions; the conclusion is purely local.
- **Source status:** Ex. 7.3 was visually checked at [S1, Ch. 9, §9.7, printed p. 286, PDF p. 298]. The local-logarithm proof is independent.

