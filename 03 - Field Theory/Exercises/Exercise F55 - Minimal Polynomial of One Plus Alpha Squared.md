---
title: "Exercise F55: Minimal Polynomial of One Plus Alpha Squared"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - minimal-polynomials
  - simple-extensions
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 4, Finding the Irreducible Polynomial, Ex. 4.1, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F55: Minimal Polynomial of One Plus Alpha Squared

## Problem Statement

> [!question] Exercise 4.1
> Let $K=\mathbb Q(\alpha)$, where $\alpha$ is a root of $x^3-x-1$. Determine the irreducible polynomial for $\gamma=1+\alpha^2$ over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Use $\alpha^3=\alpha+1$ to express $\alpha$ rationally in terms of $\gamma$.

## Solution

> [!success]- Solution
> Since $\gamma-1=\alpha^2$ and $\alpha^3=\alpha+1$,
>
> $$
> \alpha(\gamma-1)=\alpha+1,
> $$
>
> so $\alpha(\gamma-2)=1$. Consequently
>
> $$
> (\gamma-1)(\gamma-2)^2=\alpha^2\alpha^{-2}=1.
> $$
>
> Expanding gives
>
> $$
> \gamma^3-5\gamma^2+8\gamma-5=0.
> $$
>
> Thus $\gamma$ is a root of $h(x)=x^3-5x^2+8x-5$. The possible rational roots are $\pm1,\pm5$, and none is a root. Hence the cubic $h$ is irreducible over $\mathbb Q$. Therefore
>
> $$
> \boxed{m_\gamma(x)=x^3-5x^2+8x-5.}
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Routing:** Field Theory is primary because the task eliminates a primitive generator to obtain a minimal polynomial.
- **Computational verification:** The relation is equivalently the resultant of $x^3-x-1$ and $y-1-x^2$ with respect to $x$.
- **Source status:** [S1, Ch. 15, §15.4, Ex. 4.1, printed p. 473, PDF p. 485]. The calculation is independent.
