---
title: "Exercise R126: Four Irreducible Polynomials over Q"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - irreducible-polynomials
  - eisenstein-criterion
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.5, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R126: Four Irreducible Polynomials over Q

## Problem Statement

> [!question] Exercise 4.5
> Which of the following polynomials are irreducible in $\mathbb Q[x]$?
>
> **(a)** $x^2+27x+213$;
>
> **(b)** $8x^3-6x+1$;
>
> **(c)** $x^3+6x^2+1$;
>
> **(d)** $x^5-3x^4+3$.

## Hints

> [!hint]- Hint 1
> For the first three polynomials, a suitable small-prime reduction or a root test is enough.

> [!hint]- Hint 2
> Part (d) is Eisenstein at $3$.

## Solution

> [!success]- Solution
> All four polynomials are irreducible.
>
> **(a)** Modulo $2$ the polynomial becomes
>
> $$
> x^2+x+1,
> $$
>
> which has no root in $\mathbb F_2$ and is irreducible. Hence the original primitive polynomial is irreducible over $\mathbb Q$.
>
> **(b)** Modulo $5$, multiplication by the nonzero scalar $2$ changes the reduction into
>
> $$
> x^3-2x+2.
> $$
>
> Its values at $0,1,2,3,4$ are $2,1,1,3,3$, so it has no root in $\mathbb F_5$. It is an irreducible cubic, and the original polynomial is irreducible over $\mathbb Q$.
>
> **(c)** Modulo $5$ the reduction is $x^3+x^2+1$. Its values at $0,1,2,3,4$ are $1,3,3,2,1$, so it has no root and is irreducible. Thus the integer polynomial is irreducible over $\mathbb Q$.
>
> **(d)** The prime $3$ divides every nonleading coefficient of
>
> $$
> x^5-3x^4+0x^3+0x^2+0x+3,
> $$
>
> while $9$ does not divide its constant coefficient. Eisenstein's criterion at $3$ proves irreducibility.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because reduction, roots, and Eisenstein's criterion decide polynomial irreducibility.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.5, printed p. 380, PDF p. 392]. The proof is independent.

