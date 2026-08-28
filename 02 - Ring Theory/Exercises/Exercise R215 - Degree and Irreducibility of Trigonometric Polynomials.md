---
title: "Exercise R215: Degree and Irreducibility of Trigonometric Polynomials"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - trigonometric-polynomials
  - integral-domains
  - irreducible-elements
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 11, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R215: Degree and Irreducibility of Trigonometric Polynomials

## Problem Statement

> [!question] Exercise 11
> Let $R$ be the ring of trigonometric polynomials defined in the text. Show that $R$ consists of all functions $f$ on $\mathbb R$ having an expression
>
> $$
> f(x)=a_0+\sum_{m=1}^n(a_m\cos mx+b_m\sin mx),
> $$
>
> where $a_0,a_m,b_m$ are real numbers. Define the trigonometric degree $\deg_{\mathrm{tr}}(f)$ to be the maximum of the integers $r,s$ such that $a_r,b_s\ne0$. Prove that
>
> $$
> \deg_{\mathrm{tr}}(fg)
> =\deg_{\mathrm{tr}}(f)+\deg_{\mathrm{tr}}(g).
> $$
>
> Deduce that $R$ has no divisors of zero, and that $\sin x$ and $1-\cos x$ are irreducible elements of $R$.

> [!warning] Source issue
> The printed degree definition gives no value for the zero function, while the displayed product formula is stated without a nonzero qualification. The proof below establishes the formula for nonzero $f,g$; equivalently one may set $\deg_{\mathrm{tr}}(0)=-\infty$ and use the usual extended-degree convention.

## Hints

> [!hint]- Hint 1
> Put $z=e^{ix}$ and use
>
> $$
> \cos mx=\frac{z^m+z^{-m}}2,
> \qquad
> \sin mx=\frac{z^m-z^{-m}}{2i}.
> $$

> [!hint]- Hint 2
> A nonzero real trigonometric polynomial of degree $n$ has nonzero coefficients of both $z^n$ and $z^{-n}$ in its Laurent-polynomial form.

## Solution

> [!success]- Solution
> Set $z=e^{ix}$. The displayed identities express every $\cos mx$ and $\sin mx$ as a Laurent polynomial in $z$. Conversely, de Moivre's formula shows that $\cos mx$ and $\sin mx$ are polynomials in $\cos x$ and $\sin x$. Products and sums of these functions therefore have exactly the finite Fourier form in the statement.
>
> This representation is unique. Indeed, after multiplication by a large power of $z$, a vanishing Laurent polynomial becomes an ordinary complex polynomial vanishing at every point of the unit circle. A nonzero polynomial cannot have infinitely many roots.
>
> Let $f\ne0$ have trigonometric degree $m$. In Laurent form it is
>
> $$
> F(z)=\sum_{k=-m}^m c_kz^k.
> $$
>
> If $m>0$, then
>
> $$
> c_m=\frac{a_m-ib_m}{2},
> \qquad
> c_{-m}=\frac{a_m+ib_m}{2}.
> $$
>
> Since $a_m,b_m$ are real and not both zero, both extreme coefficients are nonzero. The same conclusion is immediate when $m=0$. If $g\ne0$ has degree $n$ and Laurent form $G$, the coefficient of $z^{m+n}$ in $FG$ is $c_md_n\ne0$, and no higher exponent occurs. Hence
>
> $$
> \deg_{\mathrm{tr}}(fg)=m+n.
> $$
>
> In particular, the product of two nonzero elements cannot be zero, so $R$ has no zero divisors. If $uv=1$, the degree formula gives
>
> $$
> \deg_{\mathrm{tr}}(u)+\deg_{\mathrm{tr}}(v)=0,
> $$
>
> so both factors have degree $0$ and are nonzero real constants. Thus the units of $R$ are exactly the nonzero constants.
>
> Both $\sin x$ and $1-\cos x$ have degree $1$. In any factorization of either one into nonzero factors, the two nonnegative degrees add to $1$, so one factor has degree $0$ and is a unit. Therefore both elements are irreducible.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Trigonometric Polynomials and Fourier Degree|Trigonometric Polynomials and Fourier Degree]]

## Notes

- **Source status:** The Fourier form, degree identity, and both irreducibility conclusions were visually checked at [S2, Ch. II, Ex. 11, printed p. 115, PDF p. 130]. The source's missing zero-degree convention is preserved visibly; the proof is independent.
