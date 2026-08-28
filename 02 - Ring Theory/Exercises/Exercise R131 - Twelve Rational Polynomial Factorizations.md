---
title: "Exercise R131: Twelve Rational Polynomial Factorizations"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-factorization
  - irreducibility-tests
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.10, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R131: Twelve Rational Polynomial Factorizations

## Problem Statement

> [!question] Exercise 4.10
> Factor the following polynomials in $\mathbb Q[x]$:
>
> **(a)** $x^2+2351x+125$;
>
> **(b)** $x^3+2x^2+3x+1$;
>
> **(c)** $x^4+2x^3+2x^2+2x+2$;
>
> **(d)** $x^4+2x^3+3x^2+2x+1$;
>
> **(e)** $x^4+2x^3+x^2+2x+1$;
>
> **(f)** $x^4+2x^2+x+1$;
>
> **(g)** $x^8+x^6+x^4+x^2+1$;
>
> **(h)** $x^6-2x^5-3x^2+9x-3$;
>
> **(j)** $x^4+x^2+1$;
>
> **(k)** $3x^5+6x^4+9x^3+3x^2-1$;
>
> **(l)** $x^5+x^4+x^2+x+2$.

## Hints

> [!hint]- Hint 1
> Use a mixture of reduction modulo a prime, Eisenstein's criterion, reciprocal polynomials, and cyclotomic identities.

> [!hint]- Hint 2
> For part (h), an exact irreducibility certificate modulo $7$ avoids searching for rational factors of several possible degrees.

## Solution

> [!success]- Solution
> The irreducible factorizations are as follows.
>
> **(a)** The polynomial is irreducible. Modulo $2$ it becomes $x^2+x+1$, which has no root in $\mathbb F_2$.
>
> **(b)** The polynomial is irreducible. Modulo $2$ it becomes $x^3+x+1$, which has no root in $\mathbb F_2$.
>
> **(c)** The polynomial is Eisenstein at $2$, so it is irreducible.
>
> **(d)** Direct multiplication gives
>
> $$
> x^4+2x^3+3x^2+2x+1=(x^2+x+1)^2.
> $$
>
> The quadratic factor has discriminant $-3$ and is irreducible over $\mathbb Q$.
>
> **(e)** The reduction modulo $3$ is
>
> $$
> x^4-x^3+x^2-x+1.
> $$
>
> It has no root in $\mathbb F_3$. The three monic irreducible quadratics over $\mathbb F_3$ are $x^2+1$, $x^2+x+2$, and $x^2-x+2$; the respective remainders are $1$, $-x-1$, and $x$. Thus no quadratic divides it, so the quartic and hence the original polynomial are irreducible.
>
> **(f)** Modulo $2$ the polynomial becomes $x^4+x+1$. It has no root in $\mathbb F_2$, and division by the only monic irreducible quadratic $x^2+x+1$ leaves remainder $1$. Hence it is irreducible modulo $2$ and therefore over $\mathbb Q$.
>
> **(g)** A difference-of-squares calculation gives
>
> $$
> \begin{aligned}
> x^8+x^6+x^4+x^2+1
> ={}&(x^4-x^3+x^2-x+1)\\
> &\cdot(x^4+x^3+x^2+x+1).
> \end{aligned}
> $$
>
> These are the cyclotomic polynomials $\Phi_{10}$ and $\Phi_5$, respectively, so both are irreducible over $\mathbb Q$.
>
> **(h)** Let $\overline h=x^6-2x^5-3x^2+2x-3$ be the reduction modulo $7$. The finite-field irreducibility criterion for degree $6$ requires
>
> $$
> x^{7^6}-x\equiv0\pmod{\overline h}
> $$
>
> and coprimality with $x^{7^2}-x$ and $x^{7^3}-x$. Exact repeated-squaring and Euclidean calculations give
>
> $$
> \begin{aligned}
> x^{7^2}-x&\equiv
> x^5-2x^4-3x^3+x^2-2x
> \pmod{\overline h},\\
> x^{7^3}-x&\equiv
> 3x^4+x^3-3x^2+x-2
> \pmod{\overline h},
> \end{aligned}
> $$
>
> and the gcd of $\overline h$ with each displayed remainder is $1$; also $x^{7^6}-x$ has remainder $0$. Thus $\overline h$ is irreducible over $\mathbb F_7$, proving that $h$ is irreducible over $\mathbb Q$.
>
> **(j)** We have
>
> $$
> x^4+x^2+1=(x^2-x+1)(x^2+x+1),
> $$
>
> and both quadratics have discriminant $-3$, so both are irreducible over $\mathbb Q$.
>
> **(k)** Form the reciprocal and change its sign:
>
> $$
> -x^5f(1/x)=x^5-3x^3-9x^2-6x-3.
> $$
>
> This polynomial is Eisenstein at $3$. Reducibility is preserved by taking reciprocals when the constant term is nonzero, so the original polynomial is irreducible.
>
> **(l)** Direct multiplication gives
>
> $$
> x^5+x^4+x^2+x+2
> =(x^2+x+1)(x^3-x+2).
> $$
>
> The quadratic has discriminant $-3$. The cubic has no rational root among $\pm1,\pm2$, so both factors are irreducible over $\mathbb Q$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Routing:** Ring Theory is primary because the exercise assembles factorization and irreducibility techniques in $\mathbb Q[x]$.
- **Computational verification:** All displayed products were multiplied exactly. The part (h) certificate records the precise finite-field modulus, remainders, and gcd conditions; it is an exhaustive finite calculation, not a numerical heuristic.
- **Source status:** The twelve-item problem is from [S1, Ch. 12, §12.4, Ex. 4.10, printed p. 380, PDF p. 392]. The factorizations and proofs are independent.
