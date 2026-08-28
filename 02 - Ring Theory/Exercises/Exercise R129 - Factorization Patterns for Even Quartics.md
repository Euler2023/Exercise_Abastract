---
title: "Exercise R129: Factorization Patterns for Even Quartics"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-factorization
  - quartic-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.8, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R129: Factorization Patterns for Even Quartics

## Problem Statement

> [!question] Exercise 4.8
> How might a polynomial
>
> $$
> f(x)=x^4+bx^2+c
> $$
>
> with coefficients in a field $F$ factor in $F[x]$? Explain with reference to the particular polynomials $x^4+4x^2+4$ and $x^4+3x^2+4$.

## Hints

> [!hint]- Hint 1
> Compare coefficients in a factorization into two monic quadratics.

> [!hint]- Hint 2
> After the cubic coefficient vanishes, the linear coefficient forces either the two linear terms to vanish or the two constant terms to agree.

## Solution

> [!success]- Solution
> Any factorization into monic quadratics can be written
>
> $$
> f=(x^2+ux+v)(x^2+wx+z).
> $$
>
> Comparing the coefficient of $x^3$ gives $w=-u$. The coefficient of $x$ is then $u(z-v)$, so one of the following occurs.
>
> **Type I:** $u=0$. Then
>
> $$
> f=(x^2+v)(x^2+z),\qquad
> v+z=b,\quad vz=c.
> $$
>
> **Type II:** $z=v$. Then
>
> $$
> f=(x^2+ux+v)(x^2-ux+v),
> $$
>
> and comparison gives
>
> $$
> b=2v-u^2,\qquad c=v^2.
> $$
>
> These two patterns are exhaustive for a reducible even quartic. Indeed, a degree-two factorization is already covered. If there is a linear factor $x-a$, evenness supplies the companion root $-a$; in characteristic $2$, the derivative is zero and the root has even multiplicity. Thus a quadratic factor can again be grouped off.
>
> Over $\mathbb Q$,
>
> $$
> x^4+4x^2+4=(x^2+2)^2
> $$
>
> is Type I. For the second polynomial, take $v=2$ and $u=1$ in Type II:
>
> $$
> x^4+3x^2+4
> =(x^2+x+2)(x^2-x+2).
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because coefficient comparison classifies possible polynomial factorizations.
- **Characteristic boundary:** The root-pair argument is interpreted through repeated roots in characteristic $2$; the coefficient identities themselves remain valid in every characteristic.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.8, printed p. 380, PDF p. 392]. The classification and examples are independently derived.

