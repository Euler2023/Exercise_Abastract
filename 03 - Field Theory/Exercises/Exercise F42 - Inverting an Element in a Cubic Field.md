---
title: "Exercise F42: Inverting an Element in a Cubic Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-elements
  - inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 2, Algebraic and Transcendental Elements, Ex. 2.1, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F42: Inverting an Element in a Cubic Field

## Problem Statement

> [!question] Exercise 2.1
> Let $\alpha$ be a complex root of the polynomial $x^3-3x+4$. Find the inverse of $\alpha^2+\alpha+1$ in the form $a+b\alpha+c\alpha^2$, with $a,b,c$ in $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Reduce every power $\alpha^m$ with $m\ge3$ using $\alpha^3=3\alpha-4$.

## Solution

> [!success]- Solution
> Write the inverse as $a+b\alpha+c\alpha^2$. Using $\alpha^3=3\alpha-4$ and $\alpha^4=3\alpha^2-4\alpha$, multiplication gives
>
> $$
> (\alpha^2+\alpha+1)(a+b\alpha+c\alpha^2)
> =(a-4b-4c)+(a+4b-c)\alpha+(a+b+4c)\alpha^2.
> $$
>
> Equating this with $1$ yields
>
> $$
> a-4b-4c=1,
> \qquad a+4b-c=0,
> \qquad a+b+4c=0.
> $$
>
> Solving gives $a=17/49$, $b=-5/49$, and $c=-3/49$. Therefore
>
> $$
> \boxed{(\alpha^2+\alpha+1)^{-1}=\frac{17-5\alpha-3\alpha^2}{49}.}
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Field Theory is primary because the computation takes place in the simple algebraic extension $\mathbb Q(\alpha)$.
- **Computational verification:** Direct multiplication modulo $\alpha^3-3\alpha+4$ gives $1$.
- **Source status:** [S1, Ch. 15, §15.2, Ex. 2.1, printed p. 472, PDF p. 484]. The calculation is independent.
