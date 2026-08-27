---
title: "Exercise R61: Five Explicit Quotient Rings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - finite-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §4, Ex. 4.3, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R61: Five Explicit Quotient Rings

## Problem Statement

> [!question] Exercise 4.3
> Identify: **(a)** $\mathbb Z[x]/(x^2-3,2x+4)$, **(b)** $\mathbb Z[i]/(2+i)$, **(c)** $\mathbb Z[x]/(6,2x-1)$, **(d)** $\mathbb Z[x]/(2x^2-4,4x-5)$, **(e)** $\mathbb Z[x]/(x^2+3,5)$.

## Hints

> [!hint]- Hint 1
> Derive the characteristic forced by each pair of relations, then simplify the residue of $x$.

## Solution

> [!success]- Solution
> **(a)** Multiply $2x+4=0$ by $2x-4$. Using $x^2=3$ gives
>
> $$
> 0=(2x+4)(2x-4)=4x^2-16=12-16=-4,
> $$
>
> so $4=0$ and hence $2x=0$. Multiplying $2x=0$ by $x$ gives $2x^2=6=0$; together with $4=0$, this yields $2=0$. The remaining relation is $x^2=1$, equivalently $(x+1)^2=0$ over $\mathbb F_2$. Therefore the ring is
>
> $$
> \mathbb F_2[x]/((x+1)^2),
> $$
>
> the four-element dual-number ring over $\mathbb F_2$.
>
> **(b)** Since $i=-2$ and $i^2=-1$, one obtains $5=0$, so the quotient is $\mathbb F_5$.
>
> **(c)** From $6=0$ and $2x=1$, multiplication by $3$ gives $3=0$; then $x=2$ in $\mathbb F_3$. The quotient is $\mathbb F_3$.
>
> **(d)** Squaring $4x=5$ and using $2x^2=4$ gives $25=32$, hence $7=0$. In $\mathbb F_7$, $x=3$, and both relations hold. The quotient is $\mathbb F_7$.
>
> **(e)** This is
>
> $$
> \mathbb F_5[x]/(x^2-2).
> $$
>
> Since $2$ is not a square modulo $5$, the polynomial is irreducible, so the quotient is the field $\mathbb F_{25}$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The five quotients are transcribed from [S1, Ch. 11, §4, Ex. 4.3, printed p. 355, PDF p. 367]. All identifications are independent computations.
