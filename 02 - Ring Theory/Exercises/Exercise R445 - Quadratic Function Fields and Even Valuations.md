---
title: "Exercise R445: Quadratic Function Fields and Even Valuations"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.3, Exercise 7.3.4, printed p. 279, PDF p. 292"
source_refs:
  - "S7/ch-7/sec-3/ex-4"
created: 2026-10-28
---

# Exercise R445: Quadratic Function Fields and Even Valuations

## Problem Statement

> [!question] Original Exercise 7.3.4
> (a) Letting $E$ be defined by a Weierstrass equation (7.1), show that every rational function $F\in\bar k(E)$ takes the form (7.6). (A hint for this exercise is at the end of the book.)
>
> (b) Show that if $\nu_P(x)$ is even and nonzero, or if $\nu_P(x)=0$ and $\nu_P(y)\ne0$, then $\nu_P(F(x))$ is even for any rational function $F$.

> **Context and notation.** Equation (7.6) is the quadratic-field expression $F=yF_1(x)+F_2(x)$ with $F_1,F_2\in\bar k(x)$. The curve is nonsingular and has characteristic zero.

> [!warning] Source issue
> The valuation conclusion in (b) concerns nonzero rational functions. The zero function has valuation $+\infty$ by definition and is excluded from the statement that an integer valuation is even.

## Hints

> [!hint]- Hint 1
> Use the basis $1,y$ of the quadratic extension $K(E)/K(x)$.

> [!hint]- Hint 2
> Factor $F(x)$ into powers of $x-a$ and examine which factors can vanish at $P$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> **(a)** Write $K=\bar k$. Since $y^2=4x^3-g_2x-g_3$ is an irreducible quadratic relation over $K(x)$, the extension $K(E)/K(x)$ has basis $1,y$. Therefore every function has a unique form
> $$
> F=A(x)+yB(x),\qquad A,B\in K(x).
> $$
> One can see existence directly by reducing polynomials to degree at most one in $y$ and rationalizing a denominator $a(x)+b(x)y$ with its conjugate $a(x)-b(x)y$. The denominator norm is nonzero in the field. Uniqueness follows because otherwise $y\in K(x)$ would make the cubic a rational square, impossible at one of its simple roots.
>
> The appendix's formulas give the same decomposition explicitly:
> $$
> A=\frac{F(x,y)+F(x,-y)}2,\qquad
> B=\frac{F(x,y)-F(x,-y)}{2y}.
> $$
> Both are invariant under the quadratic involution and hence belong to $K(x)$.
>
> **(b)** Exclude the identically zero $F$, whose valuation is $+\infty$ rather than a finite even integer. Factor a nonzero rational function over the algebraically closed constants:
> $$
> F(x)=c\prod_a(x-a)^{n_a},\qquad c\ne0,\quad n_a\in\mathbb Z,
> $$
> with finitely many factors. If $\nu_P(x)<0$, each $x-a$ has the same valuation as $x$, which is even by hypothesis. If $\nu_P(x)>0$, the factor $x$ has even valuation and every $x-a$ for $a\ne0$ is a unit. Thus in both cases the valuation of the product is even.
>
> Now suppose $\nu_P(x)=0$ and $\nu_P(y)\ne0$. The curve equation makes $\nu_P(y)\ge0$, hence it is positive. Write $a=x(P)$; then $4a^3-g_2a-g_3=0$. Nonsingularity makes this a simple root, so
> $$
> y^2=(x-a)q(x),\qquad q(a)\ne0.
> $$
> Thus $\nu_P(x-a)=2\nu_P(y)$ is even. For $b\ne a$, $x-b$ is a unit. The factorization of $F$ again has even valuation.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 279 / PDF p. 292. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
