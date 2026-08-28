---
title: "Exercise F45: Squaring a Generator of a Quintic Extension"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - extension-degree
  - simple-extensions
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.1, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F45: Squaring a Generator of a Quintic Extension

## Problem Statement

> [!question] Exercise 3.1
> Let $F$ be a field, and let $\alpha$ be an element that generates a field extension of $F$ of degree $5$. Prove that $\alpha^2$ generates the same extension.

## Hints

> [!hint]- Hint 1
> Compare $F\subseteq F(\alpha^2)\subseteq F(\alpha)$ and use that $\alpha$ satisfies a quadratic polynomial over $F(\alpha^2)$.

## Solution

> [!success]- Solution
> Put $K=F(\alpha)$. Since $\alpha$ is a root of $x^2-\alpha^2\in F(\alpha^2)[x]$,
>
> $$
> [K:F(\alpha^2)]\le2.
> $$
>
> On the other hand, the tower law gives
>
> $$
> 5=[K:F]=[K:F(\alpha^2)]\,[F(\alpha^2):F].
> $$
>
> Thus $[K:F(\alpha^2)]$ divides $5$. Its only possible value compatible with the upper bound $2$ is $1$. Hence $K=F(\alpha^2)$.

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Routing:** Field Theory is primary because the tower law and the prime extension degree do all the work.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.1, printed p. 472, PDF p. 484]. The proof is independent.
