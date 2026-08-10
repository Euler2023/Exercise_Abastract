---
title: "Exercise F2: Additive Group of F4"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.1, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F2: Additive Group of $\mathbb F_4$

## Problem Statement

> [!question] Exercise
> Identify the group $\mathbb F_4^+$.

## Hints

> [!hint]- Hint 1
> Regard $\mathbb F_4$ as a two-dimensional vector space over $\mathbb F_2$.

> [!hint]- Hint 2
> Every element satisfies $a+a=0$.

## Solution

> [!success]- Solution
> Let $\alpha^2+\alpha+1=0$. Then
> $$
> \mathbb F_4=\{0,1,\alpha,1+\alpha\}.
> $$
> Its characteristic is $2$, so every nonzero element has additive order $2$. Hence the additive group has order $4$ but is not cyclic. Therefore
> $$
> \mathbb F_4^+\cong C_2\times C_2.
> $$
> Equivalently, it is the two-dimensional vector space $(\mathbb F_2)^2$ under addition.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]

## Notes

The superscript $+$ denotes the additive group. The solution is independently derived from the characteristic and vector-space structure.
