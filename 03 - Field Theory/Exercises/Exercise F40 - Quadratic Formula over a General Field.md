---
title: "Exercise F40: Quadratic Formula over a General Field"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - quadratic-equations
  - discriminants
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 1, Examples of Fields, Ex. 1.2, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F40: Quadratic Formula over a General Field

## Problem Statement

> [!question] Exercise 1.2
> Let $F$ be a field, not of characteristic $2$, and let $x^2+bx+c=0$ be a quadratic equation with coefficients in $F$. Prove that if $\delta$ is an element of $F$ such that $\delta^2=b^2-4c$, $x=(-b+\delta)/2$ solves the quadratic equation in $F$. Prove also that if the discriminant $b^2-4c$ is not a square, the polynomial has no root in $F$.

## Hints

> [!hint]- Hint 1
> Complete the square by multiplying the equation by $4$.

## Solution

> [!success]- Solution
> Because $\operatorname{char}F\ne2$, the element $2$ is invertible. If $\delta^2=b^2-4c$ and $r=(-b+\delta)/2$, then
>
> $$
> 4(r^2+br+c)=(2r+b)^2-(b^2-4c)=\delta^2-\delta^2=0.
> $$
>
> Hence $r^2+br+c=0$.
>
> Conversely, if $r\in F$ is a root, then
>
> $$
> (2r+b)^2=4r^2+4br+b^2=b^2-4c.
> $$
>
> Thus the discriminant is the square of the element $2r+b\in F$. Therefore a nonsquare discriminant rules out every root in $F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Routing:** Field Theory is primary because the argument isolates exactly which field operations the quadratic formula requires.
- **Hypothesis boundary:** In characteristic $2$, division by $2$ and this discriminant criterion are unavailable in this form.
- **Source status:** [S1, Ch. 15, §15.1, Ex. 1.2, printed p. 472, PDF p. 484]. The proof is independent.
