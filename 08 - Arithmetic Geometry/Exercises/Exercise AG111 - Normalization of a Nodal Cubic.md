---
title: "Exercise AG111: Normalization of a Nodal Cubic"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.11, printed pp. 271\u2013272, PDF pp. 284\u2013285"
source_refs:
  - "S7/ch-7/sec-2/ex-11"
created: 2026-10-28
---

# Exercise AG111: Normalization of a Nodal Cubic

## Problem Statement

> [!question] Original Exercise 7.2.11
> Let $\varphi(x,y)=y^2-x^3-x^2$, and let $C$ be the corresponding curve. Show that $C$ is an algebraic curve in the sense of Definition 7.2.1 but has a singular point at $(0,0)$. Let
> $$
> F(x,y)=y/x,\qquad (G,H)(t)=(t^2-1,t^3-t).
> $$
> Show that these are birational equivalences between $C$ and $\bar k$, but not isomorphisms.

## Hints

> [!hint]- Hint 1
> Use the order at $x=-1$ to exclude a square in $\bar k(x)$.

> [!hint]- Hint 2
> On $x\ne0$, divide the equation by $x^2$ and set $t=y/x$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Work in characteristic zero. The polynomial $x^2(x+1)$ is not a square in $\bar k(x)$, because its zero at $x=-1$ has odd order. Hence $y^2-x^2(x+1)$ is irreducible over $\bar k(x)$ and, by Gauss's lemma, over $\bar k[x,y]$. The coordinate ring is a domain and its fraction field is a quadratic extension of $\bar k(x)$, so it has the required transcendence degree one.
>
> The partial derivatives are $-3x^2-2x$ and $2y$, both zero at $(0,0)$, which is on the curve. Thus that point is singular.
>
> For $x\ne0$, set $t=y/x$. The equation gives $t^2=x+1$, hence
> $$
> x=t^2-1,\qquad y=t(t^2-1)=t^3-t.
> $$
> Conversely these polynomials satisfy
> $$
> (t^3-t)^2=(t^2-1)^2t^2=(t^2-1)^3+(t^2-1)^2.
> $$
> For $t\ne\pm1$, their composite with $F$ equals $t$; for $x\ne0$, the other composite equals $(x,y)$. They are therefore mutually inverse rational maps.
>
> They are not isomorphisms: the polynomial map sends both $t=1$ and $t=-1$ to $(0,0)$, so it is not injective. Moreover $F$ cannot extend regularly at the node. If it did, its pullback along the polynomial map would be a regular function equal to $t$ on a dense open set, hence everywhere; at $t=\pm1$ it would then give two different values at the same image point. The function fields are isomorphic while the singular affine models are not.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 271–272 / PDF pp. 284–285. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
