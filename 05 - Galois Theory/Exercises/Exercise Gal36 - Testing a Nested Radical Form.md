---
title: "Exercise Gal36: Testing a Nested Radical Form"
topic: galois-theory
difficulty: beginner
status: not-started
tags: [exercise, galois-theory, nested-radicals]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.3, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal36: Testing a Nested Radical Form

## Problem Statement

> [!question] Exercise 9.3
> Can $\sqrt{4+\sqrt7}$ be written as $\sqrt a+\sqrt b$ with rational $a,b$?

## Hints

> [!hint]- Hint 1
> Square and compare rational and irrational parts.

## Solution

> [!success]- Solution
> If $\sqrt{4+\sqrt7}=\sqrt a+\sqrt b$, then
> $$
> a+b=4,\qquad 2\sqrt{ab}=\sqrt7,
> $$
> so $ab=7/4$. Thus $a,b$ would be roots of
> $$
> z^2-4z+\frac74=0,
> $$
> namely $a,b=2\pm\frac32$, i.e. $\{a,b\}=\{7/2,1/2\}$. Hence the answer is yes:
> $$
> \boxed{\sqrt{4+\sqrt7}=\sqrt{\frac72}+\sqrt{\frac12}}.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Notes

Both radicands are nonnegative rational numbers.
