---
title: "Exercise F57: Minimal Polynomial of a Sum of Two Cube Roots of Two"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - minimal-polynomials
  - conjugates
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 4, Finding the Irreducible Polynomial, Ex. 4.3, printed p. 473, PDF p. 485; Example 15.4.4(b), printed p. 450, PDF p. 462"
created: 2026-08-28
---

# Exercise F57: Minimal Polynomial of a Sum of Two Cube Roots of Two

## Problem Statement

> [!question] Exercise 4.3
> With reference to Example 15.4.4(b), determine the irreducible polynomial for $\gamma=\alpha_1+\alpha_2$ over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> In the referenced example, $\alpha_1=\alpha$, $\alpha_2=\omega\alpha$, and $\alpha_3=\omega^2\alpha$, where $\alpha^3=2$ and $1+\omega+\omega^2=0$.

## Solution

> [!success]- Solution
> The referenced labeling gives
>
> $$
> \gamma=\alpha+\omega\alpha=(1+\omega)\alpha=-\omega^2\alpha=-\alpha_3.
> $$
>
> Since $\alpha_3^3=2$, it follows that $\gamma^3=-2$. Hence $\gamma$ is a root of $x^3+2$.
>
> The polynomial $x^3+2$ is Eisenstein at $2$ and is therefore irreducible over $\mathbb Q$. Thus
>
> $$
> \boxed{m_\gamma(x)=x^3+2.}
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

- **Routing:** Field Theory is primary because the referenced ordering of the conjugate roots immediately determines the minimal polynomial.
- **Source status:** The exercise is [S1, Ch. 15, §15.4, Ex. 4.3, printed p. 473, PDF p. 485]; the root labeling is checked at [S1, Example 15.4.4(b), printed p. 450, PDF p. 462]. The solution is independent.
