---
title: "Exercise F36: Three Integrality Criteria"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-integers
  - minimal-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 1, Algebraic Integers, Ex. 1.3, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise F36: Three Integrality Criteria

## Problem Statement

> [!question] Exercise 1.3
> **(a)** Let $\alpha$ be a complex number that is the root of a monic integer polynomial, not necessarily an irreducible polynomial. Prove that $\alpha$ is an algebraic integer.
>
> **(b)** Let $\alpha$ be an algebraic number that is the root of an integer polynomial
>
> $$
> f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_0.
> $$
>
> Prove that $a_n\alpha$ is an algebraic integer.
>
> **(c)** Let $\alpha$ be an algebraic integer that is the root of a monic integer polynomial
>
> $$
> x^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0.
> $$
>
> Prove that $\alpha^{-1}$ is an algebraic integer if and only if $a_0=\pm1$.

> [!warning] Source issue in part (c)
> The converse is false for an arbitrary monic annihilating polynomial: $\alpha=1$ is integral and $\alpha^{-1}=1$ is integral, but $1$ is also a root of $(x-1)(x-2)=x^2-3x+2$, whose constant term is $2$. The stated equivalence is correct when the displayed polynomial is the monic irreducible polynomial of $\alpha$. The proof below records both the unconditional forward implication and that corrected equivalence.

## Hints

> [!hint]- Hint 1
> For part (a), apply Gauss's lemma to the monic irreducible polynomial of $\alpha$, which divides the given monic polynomial over $\mathbb Q$.

> [!hint]- Hint 2
> In part (b), substitute $\beta=a_n\alpha$ and clear exactly $a_n^{n-1}$. In part (c), reverse the coefficients and use the field norm for the corrected converse.

## Solution

> [!success]- Solution
> **(a)** Let $m_\alpha(x)$ be the monic irreducible polynomial of $\alpha$ over $\mathbb Q$. It divides the given monic polynomial in $\mathbb Q[x]$. By the monic-factor form of Gauss's lemma, a monic rational factor of a monic integer polynomial has integer coefficients. Hence $m_\alpha(x)\in\mathbb Z[x]$, and $\alpha$ is an algebraic integer.
>
> **(b)** Set $\beta=a_n\alpha$. Substituting $\alpha=\beta/a_n$ into $f(\alpha)=0$ and multiplying by $a_n^{n-1}$ gives
>
> $$
> \beta^n+a_{n-1}\beta^{n-1}
> +a_{n-2}a_n\beta^{n-2}
> +\cdots+a_1a_n^{n-2}\beta
> +a_0a_n^{n-1}=0.
> $$
>
> This is a monic polynomial with integer coefficients, so part (a) shows that $a_n\alpha=\beta$ is an algebraic integer.
>
> **(c), forward implication for the printed polynomial.** Assume $a_0=\pm1$ and put $y=\alpha^{-1}$. Dividing the displayed equation by $\alpha^n$ gives
>
> $$
> a_0y^n+a_1y^{n-1}+\cdots+a_{n-1}y+1=0.
> $$
>
> Multiplication by $a_0$ if necessary makes this polynomial monic with integer coefficients. Thus $\alpha^{-1}$ is integral.
>
> **Corrected converse.** Now suppose the displayed polynomial is the monic irreducible polynomial of the nonzero algebraic integer $\alpha$. If $\alpha^{-1}$ is also integral, then both field norms
>
> $$
> N_{\mathbb Q(\alpha)/\mathbb Q}(\alpha)
> \quad\text{and}\quad
> N_{\mathbb Q(\alpha)/\mathbb Q}(\alpha^{-1})
> $$
>
> are rational integers whose product is $1$. Hence each is $\pm1$. For a monic irreducible polynomial of degree $n$,
>
> $$
> N_{\mathbb Q(\alpha)/\mathbb Q}(\alpha)=(-1)^n a_0,
> $$
>
> so $a_0=\pm1$. This proves the intended equivalence.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Field Theory is primary because minimal polynomials, integrality, and field norms carry the argument.
- **External input:** The monic-factor form of Gauss's lemma is the named standard input in part (a).
- **Source status:** The three printed parts are from [S1, Ch. 13, §13.1, Ex. 1.3, printed p. 408, PDF p. 420]. The counterexample and repaired statement in part (c) are independent and are not attributed to the source.
