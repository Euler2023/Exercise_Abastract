---
title: "Exercise AG105: Projective Charts and the Point at Infinity"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.1, Exercise 7.1.3, printed pp. 259\u2013260, PDF pp. 272\u2013273"
source_refs:
  - "S7/ch-7/sec-1/ex-3"
created: 2026-10-28
---

# Exercise AG105: Projective Charts and the Point at Infinity

## Problem Statement

> [!question] Original Exercise 7.1.3
> For any positive integer $n$ and any field $K$, $n$-dimensional projective space over $K$ is the set of equivalence classes of nonzero $(n+1)$-tuples modulo scalar multiplication,
> $$
> \mathbb P^n(K)=(K^{n+1}-\{0\})/\sim,
> \qquad v\sim v'\ \text{if }v'=cv,\quad c\in K^*.
> $$
> Let $[v]$ denote the class of $v$.
>
> (a) Show that
> $$
> \mathbb P^1(K)=\{[x,1]:x\in K\}\cup\{[1,y]:y\in K\}
> =\{[x,1]:x\in K\}\cup\{[1,0]\},
> $$
> so the first presentation is an overlapping union of two affine lines and the second a disjoint union of a line and a point at infinity. In particular $\mathbb P^1(\mathbb C)$ is the Riemann sphere $\widehat{\mathbb C}$.
>
> (b) Show that
> $$
> \mathbb P^2(K)=\{[x,y,1]\}\cup\{[x,1,z]\}\cup\{[1,y,z]\},
> $$
> where the free coordinates range over $K$, and also
> $$
> \mathbb P^2(K)=\{[x,y,1]:x,y\in K\}\cup\{[x,1,0]:x\in K\}\cup\{[1,0,0]\}
> =\{[x,y,1]\}\cup(\mathbb P^1(K)\times\{0\}).
> $$
> Thus it is a union of three affine planes, or a disjoint union of an affine plane and a projective line at infinity.
>
> (c) Homogenize the Weierstrass polynomial:
> $$
> E_{\rm hom}(x,y,z)=y^2z-4x^3+g_2xz^2+g_3z^3.
> $$
> Show that either all points or no points in each class $[x,y,z]\in\mathbb P^2(\bar k)$ satisfy $E_{\rm hom}$. Show that $[0,1,0]$ satisfies it and no other $[x,y,0]$ does.
>
> (d) Dehomogenize by setting $y=1$:
> $$
> E'(x,z)=z-4x^3+g_2xz^2+g_3z^3.
> $$
> Here $0_E=(0,0)$. Show that the curve is geometrically nonsingular there. Is this affine piece all of $E$?
>
> (e) For an affine point $P=(x_P,y_P)$, homogenize to $[x_P,y_P,1]$. Show that the homogeneous line $x-x_Pz=0$ contains $P$ and $0_E$. Dehomogenize to a vertical line, so that $0_E$ is infinitely far in the vertical direction.

## Hints

> [!hint]- Hint 1
> Normalize one nonzero homogeneous coordinate to $1$ and separate disjoint cases.

> [!hint]- Hint 2
> For (d), compute the derivative in the new $z$ direction at the origin.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> **(a)** A nonzero pair $(a,b)$ has $a\ne0$ or $b\ne0$. When $b\ne0$, its unique representative with last coordinate $1$ is $(a/b,1)$; when $a\ne0$, it has representative $(1,b/a)$. The charts overlap precisely when both coordinates are nonzero, with transition $x\mapsto1/x$. If $b=0$, the class is $[1,0]$, which never belongs to the first chart. Over $\mathbb C$, the two complex charts with transition $z\mapsto1/z$ give the usual Riemann sphere.
>
> **(b)** A nonzero triple has at least one nonzero coordinate; divide by that coordinate to obtain one of the three displayed charts. If the last coordinate is nonzero, normalization to $1$ is unique. If it is zero and the middle coordinate is nonzero, normalize to $[x,1,0]$. If both are zero, the class is $[1,0,0]$. These three alternatives are disjoint. The last two sets together form the projective line of directions $[x:y:0]$.
>
> **(c)** Homogeneity gives $E_{\rm hom}(cx,cy,cz)=c^3E_{\rm hom}(x,y,z)$. Since $c\ne0$, vanishing is independent of representative. At $z=0$ the equation is $-4x^3=0$. In the chapter's characteristic-zero setting this forces $x=0$. The nonzero triple then has $y\ne0$, yielding exactly $[0:1:0]$.
>
> **(d)** The partial derivative with respect to $z$ is
> $$
> \frac{\partial E'}{\partial z}=1+2g_2xz+3g_3z^2,
> $$
> which equals $1$ at $(0,0)$. Hence the point is nonsingular, over any extension of $k$. This chart consists of points with projective $y\ne0$. It omits affine points with $y=0$, namely the three points above the roots of $4x^3-g_2x-g_3$ over $\bar k$. Those roots are distinct because the elliptic equation is nonsingular. Thus the chart is not all of $E$.
>
> **(e)** Substitution of either $[x_P:y_P:1]$ or $[0:1:0]$ into $x-x_Pz$ gives zero. The equation is homogeneous, hence defines a projective line. On $z=1$ it becomes $x=x_P$, the vertical affine line through $P$. Its unique point at infinity is $[0:1:0]$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 259–260 / PDF pp. 272–273. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
