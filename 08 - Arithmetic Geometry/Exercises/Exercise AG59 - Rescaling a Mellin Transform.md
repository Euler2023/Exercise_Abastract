---
title: 'Exercise AG59: Rescaling a Mellin Transform'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 1, printed p. 433, PDF p. 452
source_refs:
- S4/ch-VII/sec-1/ex-1
created: '2026-10-23'
---

# Exercise AG59: Rescaling a Mellin Transform

## Problem Statement

> [!question] Neukirch VII.1.1
> Let $a,b$ be positive real numbers. Then the Mellin transforms of the functions $f(y)$ and $g(y)=f(ay^b)$ satisfy:
> $$
> L(f,s/b)=ba^{s/b}L(g,s).
> $$

## Hints

> [!hint]- Hint 1
> Use the definition with the subtracted limit $f(\infty)$, rather than forgetting the constant term.

> [!hint]- Hint 2
> Set $u=ay^b$. Then $dy/y=du/(bu)$ and $y^s=a^{-s/b}u^{s/b}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The source defines
> $$
> L(f,w)=\int_0^\infty(f(u)-f(\infty))u^w\frac{du}{u},
> $$
> whenever the limit and improper integral exist. Because $a,b>0$, $ay^b\to\infty$ with $y$, so $g(\infty)=f(\infty)$. On a finite interval $0<r<R$ the ordinary substitution $u=ay^b$ gives
> $$
> \int_r^R(g(y)-g(\infty))y^s\frac{dy}{y}
> =\frac{a^{-s/b}}{b}\int_{ar^b}^{aR^b}(f(u)-f(\infty))u^{s/b}\frac{du}{u}.
> $$
> Both lower endpoints tend to zero and both upper endpoints to infinity. Passing to the limits proves
> $$
> L(g,s)=b^{-1}a^{-s/b}L(f,s/b),
> $$
> and rearrangement proves the statement. This also proves equivalence of convergence for the corresponding one-sided improper integrals; absolute convergence is preserved by the positive change of variable. Here $a^{s/b}=\exp((s/b)\log a)$ with the real logarithm. If the transforms have meromorphic continuations, the identity continues from their common domain by uniqueness.
>
> For example, $f(y)=e^{-y}$ gives $L(f,w)=\Gamma(w)$ for $\operatorname{Re}w>0$, and the substitution yields $L(g,s)=b^{-1}a^{-s/b}\Gamma(s/b)$.

## Related Concepts

- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]

## Notes

- **Source status:** The complete exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 1, printed p. 433, PDF p. 452]. The Mellin definition, including subtraction of the limit, was checked at [printed p. 422, PDF p. 441]. No source figure is needed.
- **Proof scope:** Independent change-of-variable proof. The identity is asserted where the defining transforms exist; it does not assert convergence for every complex $s$.
