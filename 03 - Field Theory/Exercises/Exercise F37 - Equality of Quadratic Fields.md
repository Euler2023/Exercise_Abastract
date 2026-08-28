---
title: "Exercise F37: Equality of Quadratic Fields"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - quadratic-fields
  - field-extensions
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 1, Algebraic Integers, Ex. 1.4, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise F37: Equality of Quadratic Fields

## Problem Statement

> [!question] Exercise 1.4
> Let $d$ and $d'$ be integers. When are the fields $\mathbb Q(\sqrt d)$ and $\mathbb Q(\sqrt{d'})$ distinct?

## Hints

> [!hint]- Hint 1
> If the fields are equal and both are genuinely quadratic, write $\sqrt d=a+b\sqrt{d'}$ with $a,b\in\mathbb Q$ and square this equation.

## Solution

> [!success]- Solution
> Assume first that neither $d$ nor $d'$ is a square in $\mathbb Q$. Then
>
> $$
> \boxed{\mathbb Q(\sqrt d)=\mathbb Q(\sqrt{d'})
> \iff \frac{d}{d'}\in(\mathbb Q^\times)^2.}
> $$
>
> If $d/d'=r^2$ with $r\in\mathbb Q^\times$, then $\sqrt d=r\sqrt{d'}$, so the fields are equal.
>
> Conversely, suppose the fields are equal. Write
>
> $$
> \sqrt d=a+b\sqrt{d'},
> \qquad a,b\in\mathbb Q.
> $$
>
> Squaring gives
>
> $$
> d=a^2+b^2d'+2ab\sqrt{d'}.
> $$
>
> Since $1$ and $\sqrt{d'}$ are linearly independent over $\mathbb Q$, $ab=0$. We cannot have $b=0$, because then $\sqrt d$ would be rational. Thus $a=0$ and $d=b^2d'$, proving the criterion.
>
> Therefore the two genuinely quadratic fields are distinct exactly when $d/d'$ is not a rational square. Equivalently, they are distinct when the square-free parts of $d$ and $d'$ differ.
>
> If square radicands are allowed, then $\mathbb Q(\sqrt d)=\mathbb Q$ when $d$ is a rational square. Hence two square radicands give the same field $\mathbb Q$, while a square and a nonsquare radicand give distinct fields.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Routing:** Field Theory is primary because equality is decided by the two-dimensional $\mathbb Q$-basis of a quadratic extension.
- **Source status:** The problem is from [S1, Ch. 13, §13.1, Ex. 1.4, printed p. 408, PDF p. 420]. The square-ratio classification and degenerate square-radicand boundary are independent.
