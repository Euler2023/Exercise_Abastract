---
title: "Exercise AG129: Fields of Definition of Singular Points"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.1, Exercise 8.1.5, printed p. 320, PDF p. 333"
source_refs:
  - "S7/ch-8/sec-1/ex-5"
created: 2026-10-28
---

# Exercise AG129: Fields of Definition of Singular Points

## Problem Statement

> [!question] Original Exercise 8.1.5
> (a) Let $P$ be a singular point of a Weierstrass equation $E/k$. Show that its coordinates lie in $k$. For characteristic $2$, assume every element of $k$ is a square. (A hint is at the end of the book.)
>
> (b) Show that in characteristic $2$, $(0,0)$ is the only singular point satisfying (8.9), and in characteristic different from $2$, $(0,0)$ is the only singular point satisfying (8.10).
>
> (c) Show that $c_4=(m_1-m_2)^4$ in the context of (8.9),(8.11).

> **Context and notation.** The general equation (8.1) is $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$. Set $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2+4a_6$, $b_8=a_1^2a_6-a_1a_3a_4+a_2a_3^2+4a_2a_6-a_4^2$, $c_4=b_2^2-24b_4$, $c_6=-b_2^3+36b_2b_4-216b_6$, $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$, and $j=c_4^3/\Delta$ when $\Delta\ne0$. These definitions and equations (8.2)–(8.5) are on printed pp. 314–315 / PDF pp. 327–328. After translating the singular point to the origin, (8.9) is $y^2+a_1xy-x^3-a_2x^2=0$. In odd characteristic completing the square gives (8.10), $Y^2-x^3-a_2' x^2=0$. Equation (8.11) is $(y-m_1x)(y-m_2x)-x^3=0$, with $m_i$ roots of $T^2+a_1T-a_2$.

> [!warning] Source issue
> Part (a) is false over an imperfect field of characteristic three. Over $k=\mathbb F_3(t)$, the equation $y^2=x^3-t$ has its unique geometric singularity at $(t^{1/3},0)$, which is not $k$-rational. Add perfectness in characteristic three (or require the relevant cube root to lie in $k$). The proof establishes the corrected statement, as well as the originally stated characteristic-two case.

## Hints

> [!hint]- Hint 1
> After completing the square in odd characteristic, singularities correspond to repeated roots of a cubic.

> [!hint]- Hint 2
> Check characteristic three separately. In characteristic two solve the derivative equations directly.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) First suppose the characteristic is not two. Complete the square to write $Y^2=f(x)$, a monic cubic. Singular points have $Y=0$ and $f(x)=f'(x)=0$. If the cubic has one double root and one distinct simple root, the monic gcd of $f,f'$ is linear, so the repeated root belongs to $k$. The other multiplicity pattern is a triple root. For a triple root and characteristic not three, comparing the quadratic coefficient gives $x=-a_2/3\in k$. In characteristic three a triple root need not lie in $k$; under the added perfectness assumption it does, since cubing is surjective. The original $y$ coordinate is $Y-(a_1x+a_3)/2\in k$.
>
> In characteristic two, if $a_1\ne0$, the derivative equations give $x=a_3/a_1$ and $y=(x^2+a_4)/a_1$, both in $k$. If $a_1=0$, singularity requires $a_3=0$ and $x^2=a_4$. The assumed surjectivity of squaring gives $x\in k$; the curve equation then determines $y^2\in k$, so $y\in k$ as well. Infinity is nonsingular by the homogenization calculation.
>
> (b) In characteristic two the polynomial $F=y^2+a_1xy-x^3-a_2x^2$ has derivatives $F_y=a_1x$ and $F_x=a_1y+x^2$. If $a_1\ne0$ these force $x=y=0$. If $a_1=0$, the second forces $x=0$ and $F=0$ then forces $y=0$. In characteristic different from two use $F=Y^2-x^3-a_2' x^2$. Singularity gives $Y=0$, $x^2(x+a_2')=0$, $x(3x+2a_2')=0$. A nonzero solution would have $x=-a_2'$ and then $3x+2a_2'=-a_2'=x\ne0$, contradiction. Thus again only the origin is singular.
>
> (c) In (8.9), $a_3=a_4=a_6=0$, so $b_4=0$ and $c_4=(a_1^2+4a_2)^2$. Factoring its quadratic tangent cone gives $m_1+m_2=-a_1$, $m_1m_2=-a_2$. Therefore $(m_1-m_2)^2=(m_1+m_2)^2-4m_1m_2=a_1^2+4a_2$, proving the fourth-power identity in every characteristic. It vanishes exactly when the two tangent directions coincide.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 320 / PDF p. 333. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
