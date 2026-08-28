---
title: "Exercise R119: Irreducibility of a Generic Two-by-Two Determinant"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - irreducible-polynomials
  - multivariable-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 3, Gauss's Lemma, Ex. 3.4, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R119: Irreducibility of a Generic Two-by-Two Determinant

## Problem Statement

> [!question] Exercise 3.4
> Let $x,y,z,w$ be variables. Prove that $xy-zw$, the determinant of a variable $2\times2$ matrix, is an irreducible element of the polynomial ring $\mathbb C[x,y,z,w]$.

## Hints

> [!hint]- Hint 1
> Regard the polynomial as $yx-zw$, a polynomial of degree one in $x$ with coefficients in $\mathbb C[y,z,w]$.

> [!hint]- Hint 2
> Its two coefficients $y$ and $-zw$ are relatively prime, so Gauss's lemma allows passage to the fraction field.

## Solution

> [!success]- Solution
> Put
>
> $$
> R=\mathbb C[y,z,w],\qquad K=\mathbb C(y,z,w).
> $$
>
> The ring $R$ is a UFD. Viewed as a polynomial in $x$,
>
> $$
> f(x)=yx-zw\in R[x].
> $$
>
> Its coefficients are relatively prime: the irreducible $y$ divides neither $z$ nor $w$, so $\gcd(y,zw)=1$. Thus $f$ is primitive in $R[x]$.
>
> In $K[x]$, the polynomial $f$ has degree one and is therefore irreducible. Gauss's lemma for the UFD $R$ now implies that the primitive polynomial $f$ is irreducible in $R[x]$. Since
>
> $$
> R[x]=\mathbb C[x,y,z,w],
> $$
>
> the determinant $xy-zw$ is irreducible in the required ring.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Ring Theory is primary because primitivity and Gauss's lemma prove irreducibility; the determinant interpretation is contextual.
- **Alternative boundary:** Irreducibility is being proved in the polynomial ring, not merely as a statement about nonsingular numerical matrices.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.3, Ex. 3.4, printed p. 379, PDF p. 391]. The proof is independent.
