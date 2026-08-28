---
title: "Exercise F34: The Golden Ratio Is an Algebraic Integer"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-integers
  - quadratic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 1, Algebraic Integers, Ex. 1.1, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise F34: The Golden Ratio Is an Algebraic Integer

## Problem Statement

> [!question] Exercise 1.1
> Is $\frac12(1+\sqrt5)$ an algebraic integer?

## Hints

> [!hint]- Hint 1
> Eliminate $\sqrt5$ from the equation $2\alpha-1=\sqrt5$.

## Solution

> [!success]- Solution
> Yes. Let
>
> $$
> \alpha=\frac{1+\sqrt5}{2}.
> $$
>
> Since $2\alpha-1=\sqrt5$, squaring gives
>
> $$
> 4\alpha^2-4\alpha+1=5,
> $$
>
> and hence
>
> $$
> \alpha^2-\alpha-1=0.
> $$
>
> Thus $\alpha$ is a root of the monic integer polynomial $x^2-x-1$, so it is an algebraic integer.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Field Theory is primary because the question tests integrality through a monic polynomial over $\mathbb Z$ inside a quadratic extension.
- **Source status:** The question is from [S1, Ch. 13, §13.1, Ex. 1.1, printed p. 408, PDF p. 420]. The calculation is independent.
