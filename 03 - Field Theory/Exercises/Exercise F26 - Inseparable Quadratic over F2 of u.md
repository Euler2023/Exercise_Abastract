---
title: "Exercise F26: An Inseparable Quadratic over F2(u)"
topic: field-theory
difficulty: intermediate
status: not-started
tags: [exercise, field-theory, inseparable-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 3, Ex. 3.3, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise F26: An Inseparable Quadratic over $\mathbb F_2(u)$

## Problem Statement

> [!question] Exercise 3.3
> Let $F=\mathbb F_2(u)$. Prove $x^2-u$ is irreducible over $F$, and that it has a double root in a splitting field.

## Hints

> [!hint]- Hint 1
> Use the $u$-adic valuation to show $u$ is not a square.

## Solution

> [!success]- Solution
> If $u=(a/b)^2$ with coprime $a,b\in\mathbb F_2[u]$, then $a^2=ub^2$. The $u$-adic valuation of the left side is even and that of the right side is odd, a contradiction. Hence $u\notin F^2$, so the quadratic has no root and is irreducible.
>
> In a splitting field choose $\alpha^2=u$. Characteristic $2$ gives
> $$
> x^2-u=x^2-\alpha^2=(x-\alpha)^2,
> $$
> so $\alpha$ is a double root. Equivalently the derivative is identically zero. This is a purely inseparable degree-two extension.

## Related Concepts

- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The valuation parity argument supplies the irreducibility step explicitly.
