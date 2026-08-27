---
title: "Exercise F32: Two Explicit Algebraic Numbers"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-elements
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.1, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise F32: Two Explicit Algebraic Numbers

## Problem Statement

> [!question] Exercise 1.1
> Prove that $7+\sqrt[3]{2}$ and $\sqrt{3}+\sqrt{-5}$ are algebraic numbers.

## Hints

> [!hint]- Hint 1
> Produce a nonzero polynomial in $\mathbb{Q}[x]$ that each number satisfies.

> [!hint]- Hint 2
> For the second number, square first and isolate $\sqrt{-15}$.

## Solution

> [!success]- Solution
> If $u=7+\sqrt[3]{2}$, then $(u-7)^3=2$, so $u$ is a root of the nonzero polynomial
>
> $$
> (x-7)^3-2\in\mathbb{Q}[x].
> $$
>
> If $v=\sqrt3+\sqrt{-5}$, then
>
> $$
> v^2=-2+2\sqrt{-15}.
> $$
>
> Hence $(v^2+2)^2=-60$, and therefore
>
> $$
> v^4+4v^2+64=0.
> $$
>
> Thus both numbers are algebraic over $\mathbb{Q}$.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Source status:** The problem is transcribed from [S1, Ch. 11, §1, Ex. 1.1, printed p. 354, PDF p. 366]. The solution is an independent derivation for this vault.

