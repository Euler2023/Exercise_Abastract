---
title: "Exercise R107: Polynomial GCD over the Rationals"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-gcd
  - euclidean-algorithm
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.2, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R107: Polynomial GCD over the Rationals

## Problem Statement

> [!question] Exercise 2.2
> Compute the greatest common divisor in $\mathbb Q[x]$ of
>
> $$
> x^6+x^4+x^3+x^2+x+1
> $$
>
> and
>
> $$
> x^5+2x^3+x^2+x+1.
> $$

## Hints

> [!hint]- Hint 1
> Test the low-degree factor $x^2+1$ in both polynomials.

> [!hint]- Hint 2
> After removing $x^2+1$, show that $x^4+x+1$ and $x^3+x+1$ are relatively prime by reducing modulo $x^2-1$.

## Solution

> [!success]- Solution
> Let
>
> $$
> f=x^6+x^4+x^3+x^2+x+1,\qquad
> g=x^5+2x^3+x^2+x+1.
> $$
>
> Direct multiplication gives
>
> $$
> f=(x^2+1)(x^4+x+1),\qquad
> g=(x^2+1)(x^3+x+1).
> $$
>
> It remains to check that
>
> $$
> A=x^4+x+1,\qquad B=x^3+x+1
> $$
>
> are relatively prime. Their combination
>
> $$
> A-xB=1-x^2
> $$
>
> shows that every common divisor of $A$ and $B$ divides $x^2-1$. But $x^2-1=(x-1)(x+1)$, while
>
> $$
> B(1)=3\neq0,\qquad B(-1)=-1\neq0.
> $$
>
> Hence $\gcd(A,B)=1$. Taking the monic representative, the requested greatest common divisor is
>
> $$
> \boxed{x^2+1}.
> $$
>
> An exact symbolic factorization independently checks the two displayed products; it is not needed for the proof.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Routing:** Ring Theory is primary because the computation uses divisibility and the Euclidean algorithm in $\mathbb Q[x]$.
- **Computational verification:** Exact polynomial arithmetic was used only to cross-check the hand factorization.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.2, printed p. 379, PDF p. 391]. The proof is independent.

