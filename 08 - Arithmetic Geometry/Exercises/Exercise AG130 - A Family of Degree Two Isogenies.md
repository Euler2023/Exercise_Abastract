---
title: "Exercise AG130: A Family of Degree Two Isogenies"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.1, Exercise 8.1.6, printed p. 320, PDF p. 333"
source_refs:
  - "S7/ch-8/sec-1/ex-6"
created: 2026-10-28
---

# Exercise AG130: A Family of Degree Two Isogenies

## Problem Statement

> [!question] Original Exercise 8.1.6
> (a) For what $a,b\in\mathbb Q$ do the equations $y^2=x^3+ax^2+bx$ and $y^2=x^3-2ax^2+(a^2-4b)x$ both define elliptic curves $E,E'/\mathbb Q$?
>
> (b) For these values show that $(x,y)\mapsto(y^2/x^2,y(b-x^2)/x^2)$ defines a map $\varphi:E\to E'$ taking origins to origins.
>
> (c) Compute $\ker\varphi$ and $\varphi^{-1}(0,0)$.
>
> (d) Find the dual $\psi:E'\to E$, verifying $\psi\varphi=[2]_E$ and $\varphi\psi=[2]_{E'}$.

## Hints

> [!hint]- Hint 1
> Check repeated roots of the two cubics. For the map use $u=x+a+b/x$.

> [!hint]- Hint 2
> Apply the same map a second time with parameters $(-2a,a^2-4b)$ and scale the resulting curve back by $(X,Y)\mapsto(X/4,Y/8)$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) The first cubic factors as $x(x^2+ax+b)$, so it has distinct roots exactly when $b(a^2-4b)\ne0$. Its discriminant is $16b^2(a^2-4b)$. For the second replace $(a,b)$ by $(A,B)=(-2a,a^2-4b)$; its discriminant is $256b(a^2-4b)^2$. Thus both are nonsingular under the same condition.
>
> (b) Set $u=x+a+b/x$ and $v=y(b-x^2)/x^2$. Then
> $$
> u^2-2au+(a^2-4b)=(x-b/x)^2,
> $$
> so $u(u^2-2au+a^2-4b)=y^2(x^2-b)^2/x^4=v^2$. This proves the target equation. The rational map extends on the nonsingular projective curves. At infinity $u\sim x$, $v\sim-y$ have poles of orders two and three, so infinity maps to infinity. An origin-preserving morphism of elliptic curves is a homomorphism.
>
> (c) At $(0,0)$, nonsingularity and $b\ne0$ give $x\sim y^2/b$, so $u$ has a pole of order two and $v$ one of order three. These and infinity are its only poles. Hence $\ker\varphi=\{0_E,(0,0)\}$ and $\deg\varphi=2$. Equivalently $x$ satisfies $x^2+(a-u)x+b=0$ over $\mathbb Q(u,v)$; translation by $(0,0)$ is the nontrivial involution interchanging $x$ with $b/x$. A finite point maps to $(0,0)$ exactly when $x^2+ax+b=0$ and $y=0$. Both roots are distinct and nonzero. Thus the geometric fiber consists of these two nonidentity two-torsion points, even when their coordinates are not rational.
>
> (d) Apply the same construction to $(A,B)$ to obtain $E''$ with parameters $(4a,16b)$. The isomorphism $E''\to E$ is $(X,Y)\mapsto(X/4,Y/8)$. Their composite gives
> $$
> \psi(u,v)=\left(\frac{u-2a+(a^2-4b)/u}{4},\frac{v(a^2-4b-u^2)}{8u^2}\right).
> $$
> The preceding equation verification proves that it maps to $E$ and preserves infinity. Put $F=x^3+ax^2+bx$, $F'=3x^2+2ax+b$, and $X_2=F'^2/(4F)-a-2x$. Substituting $u=x+a+b/x$, $v=y(b-x^2)/x^2$ in $\psi$ and using $y^2=F$ yields
> $$
> x(\psi\varphi)=\frac{(x^2-b)^2}{4x(x^2+ax+b)}=X_2,\qquad
> y(\psi\varphi)=-y+\frac{F'}{2y}(x-X_2).
> $$
> These are the chord–tangent doubling formulas on $E$, so $\psi\varphi=[2]$. Surjectivity of $\varphi$ and the homomorphism property then give $(\varphi\psi)\varphi=\varphi[2]=[2]\varphi$, hence $\varphi\psi=[2]$. Thus $\psi$ is the dual isogeny, including its sign as printed for $\varphi$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 320 / PDF p. 333. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
