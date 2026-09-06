---
title: "Exercise F63: Arithmetic in a Cubic Extension"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 1, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F63: Arithmetic in a Cubic Extension

## Problem Statement

> [!question] Lang, Chapter V, Exercise 1
> Let $E=\mathbb Q(\alpha)$, where $\alpha$ is a root of the equation
> $$
> \alpha^3+\alpha^2+\alpha+2=0.
> $$
> Express $(\alpha^2+\alpha+1)(\alpha^2+\alpha)$ and $(\alpha-1)^{-1}$ in the form
> $$
> a\alpha^2+b\alpha+c
> $$
> with $a,b,c\in\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Reduce every power of $\alpha$ of degree at least three.

> [!hint]- Hint 2
> For the inverse, divide $f(X)-f(1)$ by $X-1$.

## Solution

> [!success]- Solution and proof status
> Put $f(X)=X^3+X^2+X+2$. Its possible rational roots are $\pm1,\pm2$, and direct substitution excludes all four. Thus $f$ is irreducible and $1,\alpha,\alpha^2$ is a basis of $E/\mathbb Q$.
>
> Since $\alpha^3=-\alpha^2-\alpha-2$, multiplication by $\alpha$ gives $\alpha^4=2-\alpha$. Consequently
> $$
> (\alpha^2+\alpha+1)(\alpha^2+\alpha)
> =\alpha^4+2\alpha^3+2\alpha^2+\alpha=-2\alpha-2.
> $$
> Also
> $$
> f(X)-5=(X-1)(X^2+2X+3).
> $$
> Substituting $\alpha$ gives
> $$
> (\alpha-1)^{-1}=-\frac{\alpha^2+2\alpha+3}{5}.
> $$
> The coefficients $(a,b,c)$ are respectively $(0,-2,-2)$ and $(-1/5,-2/5,-3/5)$.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Imported input:** The rational-root test for a monic integer polynomial [S2, Ch. IV, Prop. 3.3, printed p. 185, PDF p. 200].

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 1, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
