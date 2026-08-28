---
title: "Exercise R138: A Quartic Irreducible by Congruence Modulo Four"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-factorization
  - congruences
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.17, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R138: A Quartic Irreducible by Congruence Modulo Four

## Problem Statement

> [!question] Exercise 4.17
> Using congruence modulo $4$ as an aid, factor
>
> $$
> x^4+6x^3+7x^2+8x+9
> $$
>
> in $\mathbb Q[x]$.

## Hints

> [!hint]- Hint 1
> Modulo $2$, the polynomial is $(x^2+x+1)^2$, so any proper monic factorization over the integers would have two quadratic factors reducing to $x^2+x+1$.

> [!hint]- Hint 2
> Write those factors as $(x^2+ax+b)(x^2+cx+d)$ and compare the four coefficients modulo $4$.

## Solution

> [!success]- Solution
> Let
>
> $$
> f=x^4+6x^3+7x^2+8x+9.
> $$
>
> Modulo $2$,
>
> $$
> \overline f=x^4+x^2+1=(x^2+x+1)^2,
> $$
>
> and $x^2+x+1$ is irreducible over $\mathbb F_2$. Since $f$ is monic, any proper factorization over $\mathbb Z$ would therefore have the form
>
> $$
> f=(x^2+ax+b)(x^2+cx+d)
> $$
>
> with $a,b,c,d$ all odd.
>
> Comparing coefficients modulo $4$ gives
>
> $$
> a+c\equiv2,\qquad
> ac+b+d\equiv3,\qquad
> ad+bc\equiv0,\qquad
> bd\equiv1.
> $$
>
> Because $a,c$ are odd and sum to $2$ modulo $4$, they are congruent to each other; hence $ac\equiv1$. Similarly, $bd\equiv1$ forces $b\equiv d$, and the $x^2$ congruence then gives $b+d\equiv2$, as expected. But now
>
> $$
> ad+bc\equiv d(a+c)\equiv2\pmod4,
> $$
>
> contradicting the required value $0$.
>
> Thus no proper factorization exists in $\mathbb Z[x]$, and Gauss's lemma gives irreducibility in $\mathbb Q[x]$. The requested irreducible factorization is $f$ itself.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Routing:** Ring Theory is primary because congruence constraints rule out all possible polynomial factors.
- **Why modulo $4$ matters:** Reduction modulo $2$ identifies only the possible degrees; the next lift detects the coefficient contradiction.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.17, printed p. 380, PDF p. 392]. The proof is independent.

