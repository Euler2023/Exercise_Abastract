---
title: "Exercise AG136: A Projective Parametrization of the Circle"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.5, printed p. 350, PDF p. 363"
source_refs:
  - "S7/ch-8/sec-5/ex-5"
created: 2026-10-28
---

# Exercise AG136: A Projective Parametrization of the Circle

## Problem Statement

> [!question] Original Exercise 8.5.5
> Let $k$ be any field with $\operatorname{char}k\ne2$. Show that
> $$
> [t,u]\longmapsto[t^2-u^2,2tu,t^2+u^2]
> $$
> is an isomorphism from $\mathbb P^1(k)$ to $x^2+y^2=z^2$ in $\mathbb P^2(k)$ with inverse $[x,y,z]\mapsto[x+z,y]$, by showing that both compositions give the identity. Why does this fail if $\operatorname{char}k=2$?

> [!warning] Source issue
> The printed single inverse pair is undefined at $[-1,0,1]=L[0,1]$. It must be extended there using the pair $[y,z-x]$. The forward map and the intended global isomorphism are correct once these two inverse charts are glued.

## Hints

> [!hint]- Hint 1
> Check the printed inverse at the image of $[0,1]$.

> [!hint]- Hint 2
> Use the second inverse chart $[y,z-x]$ and the relation $(x+z)(z-x)=y^2$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $L$ be the displayed forward map. Its coordinates are homogeneous of the same degree, and
> $$
> (t^2-u^2)^2+(2tu)^2=(t^2+u^2)^2.
> $$
> They cannot all vanish: adding and subtracting the first and third would give $2t^2=2u^2=0$, hence the forbidden pair $(0,0)$. So $L$ is globally defined.
>
> On the open set where $(x+z,y)\ne(0,0)$, define $M_1=[x+z,y]$. On the complementary chart use $M_2=[y,z-x]$. The conic identity gives
> $$
> (x+z)(z-x)=y^2,
> $$
> so these two projective pairs agree where both are defined. They cover the conic: if both pairs vanished then $y=0,x+z=z-x=0$, forcing $x=z=0$. Their gluing defines a morphism $M$.
>
> For $t\ne0$,
> $$
> M_1L[t,u]=[2t^2,2tu]=[t,u].
> $$
> For $t=0$, use $M_2L[0,u]=[0,2u^2]=[0,u]$. Conversely, where $x+z\ne0$,
> $$
> L[x+z,y]
> =[(x+z)^2-y^2,\ 2(x+z)y,\ (x+z)^2+y^2]
> =[2x(x+z),2y(x+z),2z(x+z)].
> $$
> This is $[x,y,z]$. The second chart supplies the remaining point by the same calculation or direct substitution. Thus $M,L$ are inverse everywhere.
>
> In characteristic $2$, the second coordinate of $L$ is identically zero and its first and third coordinates agree. The map collapses where defined and even has a base point at $t=u\ne0$; the conic equation is the double-line equation $(x+y+z)^2=0$. The asserted smooth-conic isomorphism fails.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 350 / PDF p. 363. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
