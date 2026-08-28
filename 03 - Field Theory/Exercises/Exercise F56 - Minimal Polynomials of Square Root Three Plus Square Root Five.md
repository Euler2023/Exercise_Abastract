---
title: "Exercise F56: Minimal Polynomials of Square Root Three Plus Square Root Five"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - minimal-polynomials
  - quadratic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 4, Finding the Irreducible Polynomial, Ex. 4.2, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F56: Minimal Polynomials of Square Root Three Plus Square Root Five

## Problem Statement

> [!question] Exercise 4.2
> Determine the irreducible polynomial for $\alpha=\sqrt3+\sqrt5$ over the following fields.
>
> **(a)** $\mathbb Q$, **(b)** $\mathbb Q(\sqrt5)$, **(c)** $\mathbb Q(\sqrt{10})$, **(d)** $\mathbb Q(\sqrt{15})$.

## Hints

> [!hint]- Hint 1
> Begin with $\alpha^2=8+2\sqrt{15}$.

## Solution

> [!success]- Solution
> From $\alpha^2=8+2\sqrt{15}$ we obtain
>
> $$
> (\alpha^2-8)^2=60,
> $$
>
> so $\alpha$ is a root of $x^4-16x^2+4$.
>
> **(a)** Since $\alpha^{-1}=(\sqrt5-\sqrt3)/2$, the two equations
>
> $$
> \sqrt5=\frac{\alpha+2\alpha^{-1}}2,
> \qquad
> \sqrt3=\frac{\alpha-2\alpha^{-1}}2
> $$
>
> show that $\mathbb Q(\alpha)=\mathbb Q(\sqrt3,\sqrt5)$, which has degree $4$. Hence
>
> $$
> m_{\alpha,\mathbb Q}(x)=x^4-16x^2+4.
> $$
>
> **(b)** Over $\mathbb Q(\sqrt5)$, the element $\alpha-\sqrt5=\sqrt3$ is quadratic, so
>
> $$
> m_{\alpha,\mathbb Q(\sqrt5)}(x)=(x-\sqrt5)^2-3=x^2-2\sqrt5x+2.
> $$
>
> **(c)** The quadratic field $\mathbb Q(\sqrt{10})$ is not one of the three quadratic subfields $\mathbb Q(\sqrt3)$, $\mathbb Q(\sqrt5)$, $\mathbb Q(\sqrt{15})$ of $\mathbb Q(\sqrt3,\sqrt5)$. Their intersection is therefore $\mathbb Q$, so $\alpha$ still has degree $4$ and
>
> $$
> m_{\alpha,\mathbb Q(\sqrt{10})}(x)=x^4-16x^2+4.
> $$
>
> **(d)** Since $\alpha^2=8+2\sqrt{15}$ lies in the base field,
>
> $$
> m_{\alpha,\mathbb Q(\sqrt{15})}(x)=x^2-(8+2\sqrt{15}).
> $$
>
> This quadratic is irreducible: if $8+2\sqrt{15}=(r+s\sqrt{15})^2$ with $r,s\in\mathbb Q$, then $rs=1$ and $r^2+15s^2=8$, forcing $r^2\in\{3,5\}$, impossible for rational $r$.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[05 - Galois Theory/Concepts/Square Classes and Multiquadratic Extensions|Square Classes and Multiquadratic Extensions]]

## Notes

- **Routing:** Field Theory is primary because changing the base field changes the degree and minimal polynomial.
- **Source status:** [S1, Ch. 15, §15.4, Ex. 4.2, printed p. 473, PDF p. 485]. All four calculations are independent.
