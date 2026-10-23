---
title: 'Exercise Gal200: The Hasse Principle for a Quadratic Norm Equation'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 3, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-3
created: '2026-10-23'
---

# Exercise Gal200: The Hasse Principle for a Quadratic Norm Equation

## Problem Statement

> [!question] Neukirch VI.4.3
> An equation $x^2-ay^2=b$, $a,b\in K^*$, has a solution in $K$ if and only if it is solvable everywhere locally, i.e., in each completion $K_{\mathfrak p}$.
> **Printed hint:** $x^2-ay^2=N_{K(\sqrt a)|K}(x-\sqrt a\,y)$ if $a\notin K^{*2}$.

## Hints

> [!hint]- Hint
> Separate the split case $a\in K^{\times2}$ from a quadratic cyclic extension.

> [!hint]- Stronger hint
> When a is not a square, the equation is the norm equation from K(sqrt(a)); apply the cyclic Hasse norm theorem.

## Solution

> [!success]- Independent derivation
> Here $K$ is the number field of this chapter. A global solution gives local solutions by embedding into every $K_v$. Conversely, if $a=c^2\in K^{\times2}$, take
> $$
> x=\frac{b+1}{2},\qquad y=\frac{1-b}{2c};
> $$
> Then $(x-cy)(x+cy)=b$, so a solution always exists in this case.
> If $a$ is not a square, put $L=K(\sqrt a)$, a cyclic quadratic extension. The local solutions say that $b$ is a local norm in every $K_v$. At a place where $a$ becomes a square, the local algebra is $K_v\times K_v$, whose norm is multiplication, so there is still no obstruction.
> **Cited Hasse norm theorem proved in the book: VI.(4.5), printed p.384/PDF403.** In a cyclic extension, a global element that is a local norm everywhere is a global norm. Thus there exists $z=x-\sqrt a\,y\in L^\times$ with $N(z)=b$, and expanding this equality gives the required equation.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 3, printed p.385, PDF p.404]. The solution is independently derived.
