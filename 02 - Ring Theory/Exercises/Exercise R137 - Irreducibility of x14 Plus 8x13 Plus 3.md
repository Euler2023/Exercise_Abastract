---
title: "Exercise R137: Irreducibility of x^14+8x^13+3"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - irreducible-polynomials
  - reduction-modulo-primes
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.16, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R137: Irreducibility of x^14+8x^13+3

## Problem Statement

> [!question] Exercise 4.16
> Factor $x^{14}+8x^{13}+3$ in $\mathbb Q[x]$, using reduction modulo $3$ as a guide.

## Hints

> [!hint]- Hint 1
> Modulo $3$, the polynomial is $x^{13}(x-1)$.

> [!hint]- Hint 2
> The near-Eisenstein argument shows that any proper factorization would have a linear factor; then use the rational root theorem.

## Solution

> [!success]- Solution
> Let
>
> $$
> f=x^{14}+8x^{13}+3.
> $$
>
> Modulo $3$,
>
> $$
> \overline f=x^{14}-x^{13}=x^{13}(x-1).
> $$
>
> The constant coefficient $3$ is divisible by $3$ but not by $9$. By the near-Eisenstein argument of Exercise 4.15(b), any proper factorization of $f$ over $\mathbb Q$ would contain a linear factor.
>
> Since $f$ is monic, a rational root would be an integer divisor of $3$, hence one of $\pm1,\pm3$. Direct evaluation gives
>
> $$
> f(1)=12,\qquad f(-1)=-4,
> $$
>
> and
>
> $$
> f(3)=11\cdot3^{13}+3,\qquad
> f(-3)=-5\cdot3^{13}+3,
> $$
>
> none of which is zero. Therefore $f$ has no linear factor and must be irreducible.
>
> Its irreducible factorization in $\mathbb Q[x]$ is therefore the polynomial itself.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because a modular factor pattern and the rational root theorem prove irreducibility.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.16, printed p. 380, PDF p. 392]. The proof is independent.

