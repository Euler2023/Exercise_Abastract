---
title: "Exercise R125: Factoring a Quintic Modulo Two, Three, and over Q"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-factorization
  - reduction-modulo-primes
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.4, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R125: Factoring a Quintic Modulo Two, Three, and over Q

## Problem Statement

> [!question] Exercise 4.4
> Factor the integer polynomial
>
> $$
> x^5+2x^4+3x^3+3x+5
> $$
>
> modulo $2$, modulo $3$, and in $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Test $x=-1$ first over each coefficient field.

> [!hint]- Hint 2
> The quartic quotient over $\mathbb Q$ reduces to an irreducible quartic modulo $2$.

## Solution

> [!success]- Solution
> Let
>
> $$
> f=x^5+2x^4+3x^3+3x+5.
> $$
>
> Modulo $2$,
>
> $$
> f=x^5+x^3+x+1
> =(x+1)(x^4+x^3+1).
> $$
>
> The quartic has no linear factor over $\mathbb F_2$, and its only possible irreducible quadratic divisor is $x^2+x+1$. Reducing the quartic modulo that quadratic, where $x^3=1$, gives $x+1\neq0$. Hence the quartic is irreducible, so this is the irreducible factorization in $\mathbb F_2[x]$.
>
> Modulo $3$,
>
> $$
> f=x^5-x^4-1
> =(x+1)^2(x^3-x-1).
> $$
>
> The cubic takes the nonzero value $-1$ at each of $0,1,-1$, so it has no root and is irreducible over $\mathbb F_3$.
>
> Over $\mathbb Q$, $f(-1)=0$, and division gives
>
> $$
> f=(x+1)(x^4+x^3+2x^2-2x+5).
> $$
>
> The quartic is primitive and reduces modulo $2$ to the irreducible polynomial $x^4+x^3+1$ found above. Therefore it is irreducible over $\mathbb Q$ by Gauss's lemma. This is the required factorization.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because the proof compares irreducible factorizations under reduction modulo primes.
- **Computational verification:** Exact polynomial multiplication and finite-field remainders were used to cross-check the displayed factors.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.4, printed p. 380, PDF p. 392]. The solution is independent.
