---
title: 'Exercise R407: An Irreducible Quintic of Squarefree Discriminant'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 2, printed p. 413, PDF p. 432
source_refs:
- S4/ch-VI/sec-7/ex-2
created: '2026-10-23'
---

# Exercise R407: An Irreducible Quintic of Squarefree Discriminant

## Problem Statement

> [!question] Neukirch VI.7.2
> **Source setup for Exercises 2–6:** The following exercises 2–6 concern a non-abelian example of E. Artin.
> The polynomial $f(X)=X^5-X+1$ is irreducible. The discriminant of a root $\alpha$ (i.e., the discriminant of $\mathbb Z[\alpha]$) is $d=19\cdot151$.
> **Printed hint:** The discriminant of a root of $X^5+aX+b$ is $5^5b^4+2^8a^5$.

## Hints

> [!hint]- Hint
> Reduce modulo $3$ and test the three irreducible quadratics. Compute the discriminant as a resultant with the derivative.

> [!hint]- Stronger hint
> No roots or irreducible quadratic divisors modulo 3 prove irreducibility; evaluate the resultant against 5X^4+a for the discriminant.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Modulo $3$, we have $f(0)=f(1)=f(2)=1$, so there is no linear factor. The only monic irreducible quadratic polynomials in $\mathbb F_3[X]$ are
> $$
> X^2+1,\quad X^2+X+2,\quad X^2+2X+2.
> $$
> Dividing $X^5-X+1$ by these gives remainders $1,X+1,X+1$, all nonzero. A reducible quintic must have an irreducible factor of degree one or two. Hence the polynomial is irreducible modulo $3$, and Gauss lemma gives irreducibility over $\mathbb Q$.
> Set $F=X^5+aX+b$, so $F'=5X^4+a$. At each of the four roots $\rho$ of $F'$, we have $F(\rho)=b+(4a/5)\rho$. Therefore
> $$
> \operatorname{disc}F
> =\operatorname{Res}(F,F')
> =5^5\prod_{\rho^4=-a/5}\left(b+\frac{4a}{5}\rho\right)
> =5^5b^4+4^4a^5.
> $$
> Setting $a=-1,b=1$ gives $3125-256=2869=19\cdot151$. Both factors are prime, so the discriminant is squarefree.
> Independent symbolic calculations checked the three quadratic remainders, the discriminant, and the prime factorization of $2869$, agreeing with these hand calculations.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[02 - Ring Theory/Concepts/Irreducible Polynomials|Irreducibility]]

## Notes

The statement was checked against the original PDF rendered at 200 dpi [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 2, printed p.413, PDF p.432]. The solution is independently derived. Computation checks only these finite algebraic data; irreducibility is proved by the finite-field factor test above.
