---
title: "Exercise R3: Maximal Ideals and Fields"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - fields
  - proof
source: "Dummit & Foote, Ch. 7"
created: 2025-01-19
---

# Exercise R3: Maximal Ideals and Fields

## Problem Statement

> [!question] Exercise
> Let $R$ be a commutative ring with unity. Prove that an ideal $M \subsetneq R$ is maximal if and only if $R/M$ is a field.

## Hints

> [!hint]- Hint 1
> Use the correspondence theorem: ideals of $R/M$ correspond to ideals of $R$ containing $M$.

> [!hint]- Hint 2
> $R/M$ is a field iff its only ideals are $(0)$ and $R/M$.

> [!hint]- Hint 3
> $M$ is maximal iff the only ideals containing $M$ are $M$ and $R$.

## Solution

> [!success]- Solution
> ### Proof
> **($\Rightarrow$)** Suppose $M$ is maximal.
>
> By the correspondence theorem, ideals of $R/M$ correspond bijectively to ideals of $R$ containing $M$.
>
> Since $M$ is maximal, the only ideals of $R$ containing $M$ are $M$ and $R$.
>
> These correspond to $\bar{0}$ and $R/M$ in $R/M$.
>
> Therefore $R/M$ has only trivial ideals.
>
> Since $R/M$ is a commutative ring with unity $\bar{1} \neq \bar{0}$ (because $M \neq R$), having only trivial ideals implies $R/M$ is a field.
>
> **($\Leftarrow$)** Suppose $R/M$ is a field.
>
> Then $R/M$ has only trivial ideals: $\{\bar{0}\}$ and $R/M$.
>
> By the correspondence theorem, ideals of $R$ containing $M$ correspond to ideals of $R/M$.
>
> So the only ideals containing $M$ are $M$ (corresponding to $\{\bar{0}\}$) and $R$ (corresponding to $R/M$).
>
> Therefore $M$ is maximal. $\square$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

This theorem is fundamental for constructing fields as quotients. For example:
- $\mathbb{Z}/(p) \cong \mathbb{F}_p$ (finite field)
- $\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$
