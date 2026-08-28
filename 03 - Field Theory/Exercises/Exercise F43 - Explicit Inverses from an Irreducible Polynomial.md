---
title: "Exercise F43: Explicit Inverses from an Irreducible Polynomial"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - irreducible-polynomials
  - inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 2, Algebraic and Transcendental Elements, Ex. 2.2, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F43: Explicit Inverses from an Irreducible Polynomial

## Problem Statement

> [!question] Exercise 2.2
> Let $f(x)=x^n-a_{n-1}x^{n-1}+\cdots\pm a_0$ be an irreducible polynomial over $F$, and let $\alpha$ be a root of $f$ in an extension field $K$. Determine the element $\alpha^{-1}$ explicitly in terms of $\alpha$ and of the coefficients $a_i$.

## Hints

> [!hint]- Hint 1
> First note that the constant term is nonzero, and then divide the equation $f(\alpha)=0$ by $\alpha$.

## Solution

> [!success]- Solution
> To make the signs unambiguous, write
>
> $$
> f(x)=x^n+c_{n-1}x^{n-1}+\cdots+c_1x+c_0,
> $$
>
> where the $c_i$ are the signed coefficients displayed in the source. Since $f$ is irreducible of positive degree, $c_0\ne0$; otherwise $x$ would divide $f$. Also $\alpha\ne0$. Dividing $f(\alpha)=0$ by $\alpha$ gives
>
> $$
> \alpha^{n-1}+c_{n-1}\alpha^{n-2}+\cdots+c_1+c_0\alpha^{-1}=0.
> $$
>
> Hence
>
> $$
> \boxed{\alpha^{-1}=-\frac{\alpha^{n-1}+c_{n-1}\alpha^{n-2}+\cdots+c_1}{c_0}.}
> $$
>
> Replacing each $c_i$ by its signed $a_i$ gives the requested alternating-sign expression in the notation of the problem.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

- **Routing:** Field Theory is primary because irreducibility turns the quotient by $(f)$ into a field and the defining relation supplies the inverse.
- **Notation:** The source prints the coefficients with alternating-sign shorthand; the solution temporarily uses signed coefficients $c_i$ to avoid a parity-dependent final sign.
- **Source status:** [S1, Ch. 15, §15.2, Ex. 2.2, printed p. 472, PDF p. 484]. The derivation is independent.
