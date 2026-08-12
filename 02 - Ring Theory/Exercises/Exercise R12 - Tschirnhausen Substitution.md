---
title: "Exercise R12: Tschirnhausen Substitution for a Cubic"
topic: ring-theory
difficulty: intermediate
status: not-started
tags: [exercise, ring-theory, discriminant]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 2, Ex. 2.3, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise R12: Tschirnhausen Substitution for a Cubic

## Problem Statement

> [!question] Exercise 2.3
> (a) Prove the Tschirnhausen substitution does not change a cubic's discriminant. (b) Determine the resulting $p,q$.

## Hints

> [!hint]- Hint 1
> Translate every root by the same constant.

## Solution

> [!success]- Solution
> For $f(x)=x^3+ax^2+bx+c$, put $x=y-a/3$. All roots are translated equally, so pairwise differences and the discriminant are unchanged. Expansion gives
> $$
> y^3+py+q,\qquad
> p=b-\frac{a^2}{3},\qquad
> q=c-\frac{ab}{3}+\frac{2a^3}{27}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

The substitution requires $3$ to be invertible.
