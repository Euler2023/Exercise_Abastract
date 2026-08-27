---
title: "Exercise R80: No Domain Has Fifteen Elements"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-fields
  - integral-domains
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §7, Ex. 7.3, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R80: No Domain Has Fifteen Elements

## Problem Statement

> [!question] Exercise 7.3
> Is there a domain that contains exactly $15$ elements?

## Hints

> [!hint]- Hint 1
> A finite domain is a field, and a finite field is a vector space over its prime field.

## Solution

> [!success]- Solution
> A domain with $15$ elements would be a field by Exercise 7.1. A finite field has characteristic $p$ and is a finite-dimensional vector space over $\mathbb F_p$, so its order is $p^d$ for some prime $p$ and integer $d\ge1$. Since $15=3\cdot5$ is not a prime power, no such domain exists.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Exercises/Exercise R78 - Every Finite Domain Is a Field|Exercise R78]]

## Notes

- **Source status:** The question is from [S1, Ch. 11, §7, Ex. 7.3, printed p. 357, PDF p. 369]. The order obstruction is independently derived.

