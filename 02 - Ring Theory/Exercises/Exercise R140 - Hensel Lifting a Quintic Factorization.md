---
title: "Exercise R140: Hensel Lifting a Quintic Factorization"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - hensel-lifting
  - polynomial-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.19, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R140: Hensel Lifting a Quintic Factorization

## Problem Statement

> [!question] Exercise 4.19
> Factor $x^5-x^4-x^2-1$ modulo $2$, modulo $16$, and over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Modulo $2$, test the root $1$ and verify that the quartic quotient is irreducible.

> [!hint]- Hint 2
> Lift the simple root successively modulo $4$, $8$, and $16$, then divide by the lifted linear factor.

## Solution

> [!success]- Solution
> Let
>
> $$
> f=x^5-x^4-x^2-1.
> $$
>
> Modulo $2$,
>
> $$
> f=(x+1)(x^4+x+1).
> $$
>
> The quartic has no root in $\mathbb F_2$, and division by the only irreducible quadratic $x^2+x+1$ leaves remainder $1$. Hence the quartic is irreducible, and the two factors are relatively prime.
>
> The root $1$ modulo $2$ is simple because $f'(1)=1$ modulo $2$. Its unique lifts are $3$ modulo $4$, $3$ modulo $8$, and $11$ modulo $16$. Synthetic division by $x-11=x+5$ modulo $16$ gives
>
> $$
> f\equiv
> (x+5)(x^4+10x^3+14x^2+9x+3)
> \pmod{16}.
> $$
>
> Multiplication verifies the congruence coefficient by coefficient. The quartic reduces to the irreducible $x^4+x+1$ modulo $2$, so it has no further monic positive-degree factorization modulo $16$.
>
> Finally, if the monic integer polynomial $f$ factored over $\mathbb Q$, Gauss's lemma would give a monic integer factorization. Its relatively prime mod-$2$ factorization forces factor degrees $1$ and $4$, so $f$ would have an integer root. The rational root theorem leaves only $\pm1$, but
>
> $$
> f(1)=-2,\qquad f(-1)=-4.
> $$
>
> Therefore $f$ is irreducible over $\mathbb Q$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Routing:** Ring Theory is primary because finite-ring lifting and factor degrees determine the rational factorization.
- **Computational verification:** The root lifts and the mod-$16$ product are exact finite congruence calculations.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.19, printed p. 381, PDF p. 393]. The lifting argument and irreducibility proof are independent.

