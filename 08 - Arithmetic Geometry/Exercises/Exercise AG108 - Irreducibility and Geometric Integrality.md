---
title: "Exercise AG108: Irreducibility and Geometric Integrality"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.1, printed p. 270, PDF p. 283"
source_refs:
  - "S7/ch-7/sec-2/ex-1"
created: 2026-10-28
---

# Exercise AG108: Irreducibility and Geometric Integrality

## Problem Statement

> [!question] Original Exercise 7.2.1
> The polynomial $\varphi(x,y)=x^2-2y^2$ is irreducible over $\mathbb Q$. Does it define an algebraic curve over $\mathbb Q$? Describe its solution set in $\mathbb P^2(\overline{\mathbb Q})$.

> **Context and notation.** Definition 7.2.1 uses the coordinate domain over $\bar k$, so irreducibility over the base field alone is insufficient. Geometric points are taken over $\bar k$.

## Hints

> [!hint]- Hint 1
> Check primality after extending coefficients to $\overline{\mathbb Q}$.

> [!hint]- Hint 2
> The polynomial is already homogeneous of degree two and splits into two linear factors.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> In the book's definition the defining ideal must remain prime over the algebraic closure. Here
> $$
> x^2-2y^2=(x-\sqrt2\,y)(x+\sqrt2\,y)
> $$
> over $\overline{\mathbb Q}$, so the quotient has zero divisors. Thus this equation does not define a curve under that geometrically integral convention, although it does define an integral curve over $\mathbb Q$ under the broader scheme convention.
>
> Homogenization does not introduce a $z$ term. The projective solution set is the union of the two distinct lines
> $$
> L_+=\{[\sqrt2\,a:a:b]:(a,b)\ne(0,0)\},\qquad
> L_-=\{[-\sqrt2\,a:a:b]:(a,b)\ne(0,0)\}.
> $$
> Their intersection is the single point $[0:0:1]$: satisfying both linear equations forces $y=x=0$. Their points at infinity are $[\sqrt2:1:0]$ and $[-\sqrt2:1:0]$. For comparison, the only rational projective solution is $[0:0:1]$, because $y\ne0$ would make $(x/y)^2=2$ in $\mathbb Q$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 270 / PDF p. 283. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
