---
title: "Exercise R75: Inverting a Zero Component in a Product Ring"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - product-rings
  - localization
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.6, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R75: Inverting a Zero Component in a Product Ring

## Problem Statement

> [!question] Exercise 6.6
> Describe the ring obtained from $\mathbb R\times\mathbb R$ by inverting $(2,0)$.

## Hints

> [!hint]- Hint 1
> The element $(0,1)$ annihilates $(2,0)$ and must therefore become zero.

## Solution

> [!success]- Solution
> In the localized ring, $(2,0)$ is a unit. Since
>
> $$
> (0,1)(2,0)=(0,0),
> $$
>
> multiplying by its inverse forces $(0,1)=0$. Thus the second factor disappears. The first component $2$ is already invertible in $\mathbb R$, so no further change occurs. The map
>
> $$
> \mathbb R\times\mathbb R\to\mathbb R,
> \qquad(a,b)\mapsto a
> $$
>
> realizes the universal localization, and the resulting ring is $\mathbb R$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §6, Ex. 6.6, printed p. 356, PDF p. 368]. The annihilator argument is independent.

