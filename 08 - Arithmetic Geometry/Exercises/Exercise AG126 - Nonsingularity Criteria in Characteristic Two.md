---
title: "Exercise AG126: Nonsingularity Criteria in Characteristic Two"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.1, Exercise 8.1.2, printed p. 320, PDF p. 333"
source_refs:
  - "S7/ch-8/sec-1/ex-2"
created: 2026-10-28
---

# Exercise AG126: Nonsingularity Criteria in Characteristic Two

## Problem Statement

> [!question] Original Exercise 8.1.2
> Show that algebraic and geometric nonsingularity are equivalent in characteristic $2$.

> **Context and notation.** The general equation (8.1) is $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$. Set $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2+4a_6$, $b_8=a_1^2a_6-a_1a_3a_4+a_2a_3^2+4a_2a_6-a_4^2$, $c_4=b_2^2-24b_4$, $c_6=-b_2^3+36b_2b_4-216b_6$, $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$, and $j=c_4^3/\Delta$ when $\Delta\ne0$. These definitions and equations (8.2)–(8.5) are on printed pp. 314–315 / PDF pp. 327–328.

## Hints

> [!hint]- Hint 1
> Compute the two partial derivatives in characteristic two, splitting according to whether $a_1$ vanishes.

> [!hint]- Hint 2
> When $a_1\ne0$, solve both derivative equations and evaluate the original equation at that point.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Use the polynomial $F=y^2+a_1xy+a_3y-x^3-a_2x^2-a_4x-a_6$. “Algebraically nonsingular” means $\Delta\ne0$; geometrically nonsingular means no geometric point of the curve has both affine partial derivatives zero. Infinity is always nonsingular, as the homogenization calculation below shows. In characteristic two,
> $$
> F_y=a_1x+a_3,\qquad F_x=a_1y+x^2+a_4.
> $$
> If $a_1\ne0$, the only possible singular point has $x=a_3/a_1$ and $y=(x^2+a_4)/a_1$. Its coordinates are already in $k$. Substitution gives $a_1^6F(x,y)=\Delta$: both sides expand as
> $$
> a_1^6a_6+a_1^5a_3a_4+a_1^4a_2a_3^2+a_1^4a_4^2+a_3^4+a_1^3a_3^3.
> $$
> Thus it lies on the curve if and only if $\Delta=0$.
>
> If $a_1=0$ and $a_3\ne0$, then $F_y=a_3$ never vanishes and $\Delta=a_3^4\ne0$. If $a_1=a_3=0$, then $\Delta=0$ and $F_y=0$ identically. Over $\bar k$ choose $x$ with $x^2=a_4$ and then $y$ satisfying $y^2=x^3+a_2x^2+a_4x+a_6$. This point satisfies both derivatives and the equation, hence is singular.
>
> Finally the only projective point at infinity is $[0,1,0]$. In the chart $y=1$ the defining polynomial has linear term $z$, so its $z$ derivative there is $1$. This proves nonsingularity at infinity in characteristic two as well. The cases prove the equivalence without assuming $k$ perfect.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 320 / PDF p. 333. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
