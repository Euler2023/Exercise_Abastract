---
title: "Exercise R73: Three Quadratic Algebras over F2"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-rings
  - quotient-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.4, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R73: Three Quadratic Algebras over F2

## Problem Statement

> [!question] Exercise 6.4
> Describe the ring obtained from $\mathbb F_2$ by adjoining $\alpha$ satisfying: **(a)** $\alpha^2+\alpha+1=0$, **(b)** $\alpha^2+1=0$, **(c)** $\alpha^2+\alpha=0$.

## Hints

> [!hint]- Hint 1
> Factor each polynomial over $\mathbb F_2$, paying attention to repeated factors.

## Solution

> [!success]- Solution
> **(a)** $x^2+x+1$ has no root in $\mathbb F_2$, so it is irreducible and the quotient is the field $\mathbb F_4$.
>
> **(b)** In characteristic $2$, $x^2+1=(x+1)^2$. With $\varepsilon=\alpha+1$, the quotient is the dual-number ring
>
> $$
> \mathbb F_2[\varepsilon]/(\varepsilon^2).
> $$
>
> **(c)** $x^2+x=x(x+1)$ with coprime factors. The Chinese remainder theorem gives
>
> $$
> \mathbb F_2[x]/(x^2+x)\cong\mathbb F_2\times\mathbb F_2.
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The three relations are from [S1, Ch. 11, §6, Ex. 6.4, printed p. 356, PDF p. 368]. The identifications are independent.

