---
title: "Exercise F33: Cyclotomic Cosines Are Algebraic"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-elements
  - cyclotomic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.2, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise F33: Cyclotomic Cosines Are Algebraic

## Problem Statement

> [!question] Exercise 1.2
> Prove that, for $n\ne0$, $\cos(2\pi/n)$ is an algebraic number.

## Hints

> [!hint]- Hint 1
> Let $\zeta=e^{2\pi i/n}$ and express the cosine using $\zeta$ and $\zeta^{-1}$.

## Solution

> [!success]- Solution
> The number $\zeta=e^{2\pi i/n}$ satisfies $\zeta^{|n|}=1$, so it is algebraic over $\mathbb{Q}$. Its inverse is also algebraic, and algebraic numbers form a field. Since
>
> $$
> \cos(2\pi/n)=\frac{\zeta+\zeta^{-1}}{2},
> $$
>
> the cosine is algebraic over $\mathbb{Q}$.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Source status:** The problem is transcribed from [S1, Ch. 11, §1, Ex. 1.2, printed p. 354, PDF p. 366]. The field property of algebraic numbers is a previously established source result; the displayed derivation is independent.

