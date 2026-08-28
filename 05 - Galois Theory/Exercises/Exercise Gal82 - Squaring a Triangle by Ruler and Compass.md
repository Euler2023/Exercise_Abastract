---
title: "Exercise Gal82: Squaring a Triangle by Ruler and Compass"
topic: galois-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - galois-theory
  - ruler-and-compass
  - geometric-mean
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 5, Constructions with Ruler and Compass, Ex. 5.4, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise Gal82: Squaring a Triangle by Ruler and Compass

## Problem Statement

> [!question] Exercise 5.4
> Is it possible to construct a square whose area is equal to that of a given triangle?

## Hints

> [!hint]- Hint 1
> If the triangle has base $b$ and altitude $h$, the desired side length is the geometric mean of $b$ and $h/2$.

## Solution

> [!success]- Solution
> Yes. Construct an altitude $h$ to a chosen base of length $b$, and bisect the altitude to obtain $h/2$. The triangle has area
>
> $$
> A=\frac{bh}{2}=b\left(\frac h2\right).
> $$
>
> To construct the geometric mean, place consecutive segments of lengths $b$ and $h/2$ on a line, draw the semicircle having their sum as diameter, and erect the perpendicular at their common endpoint. By the altitude theorem for a right triangle, the perpendicular segment to the semicircle has length
>
> $$
> s=\sqrt{b(h/2)}.
> $$
>
> A square with side $s$ then has area $s^2=bh/2=A$, exactly the area of the given triangle.

## Related Concepts

- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass]]

## Notes

- **Routing:** Galois Theory is primary in the vault because the construction realizes closure of constructible lengths under positive square roots.
- **Source status:** [S1, Ch. 15, §15.5, Ex. 5.4, printed p. 473, PDF p. 485]. The construction is independent.
