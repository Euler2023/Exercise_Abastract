---
title: "Exercise AG117: Weierstrass Equations from Genus One Curves"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.8, Exercise 7.8.1, printed pp. 302\u2013303, PDF pp. 315\u2013316"
source_refs:
  - "S7/ch-7/sec-8/ex-1"
created: 2026-10-28
---

# Exercise AG117: Weierstrass Equations from Genus One Curves

## Problem Statement

> [!question] Original Exercise 7.8.1
> (a) Consider $C:x^3+y^3=1$ and $P=(0,1)$. Homogenize to $C:x^3+y^3=z^3$ and $P=[0,1,1]$. Show that replacing $z$ by $y+z/3$ and then dehomogenizing back to $z=1$ puts the curve into Weierstrass form $E$ and takes $P$ to $0_E$.
>
> (b) Let $E'$ be a nonsingular algebraic curve over $k$ of genus $1$ with a distinguished point $P$. Let $t$ be a uniformizer at $P$. Use Corollary 3.4.2(d) of the Riemann–Roch Theorem, now interpreted for algebraic curves, to show that $\ell([d]P)=d$ for every $d\in\mathbb Z^+$. Show that $L(P)=k$; that $L([2]P)$ has basis $\{1,X\}$ with $X$ having a double pole at $P$; that $L([3]P)$ has basis $\{1,X,Y\}$ with $Y$ having a triple pole at $P$; that $L([4]P)$ has basis $\{1,X,Y,X^2\}$; that $L([5]P)$ has basis $\{1,X,Y,X^2,XY\}$; and that $L([6]P)$ contains $\{1,X,Y,X^2,XY,X^3,Y^2\}$. Explain why any linear relation on these seven elements necessarily involves both $X^3$ and $Y^2$, so that after rescaling over $k$ it takes the form
> $$
> Y^2+a_1XY+a_3Y=X^3+a_2X^2+a_4X+a_6.
> $$
> The source then notes that easy changes of variables reduce this to $(Y')^2=4(X')^3-g_2X'-g_3$, giving $(E',P)$ a planar Weierstrass model. (A hint is at the end of the book.)

> [!warning] Source issue
> The degree-one divisor argument over $k$ requires $P\in E'(k)$ (or an algebraically closed ground field). For a nonrational closed point, $\deg P$ need not be one and the dimension claim is different. Reduction to a short Weierstrass equation also requires characteristic different from $2,3$. These hypotheses hold in the characteristic-zero setting of this chapter.

## Hints

> [!hint]- Hint 1
> For (a), expand the cube before dehomogenizing. For (b), apply Riemann–Roch to a divisor of positive degree on a genus-one curve.

> [!hint]- Hint 2
> Pole orders distinguish the first five functions. In a relation at pole order six, the two terms of that order must cancel each other.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) Use new coordinates $[X,Y,Z]$ with old coordinates $[x,y,z]=[X,Y,Y+Z/3]$. Expansion and cancellation give
> $$
> X^3=Y^2Z+YZ^2/3+Z^3/27.
> $$
> On $Z=1$ this is $Y^2+Y/3=X^3-1/27$. The old point $[0,1,1]$ becomes $[0,1,0]$, the point at infinity of this cubic. Completing the square, $V=Y+1/6$, gives $V^2=X^3-1/108$. Multiplying $V$ by $2$ puts it in the short convention used earlier in the chapter.
>
> (b) Take $P\in E'(k)$ and regard $E'$ as the nonsingular projective curve. Riemann–Roch says $\ell(D)-\ell(K-D)=\deg D+1-g$. Here $g=1$, $\deg K=0$, and $\deg(K-dP)=-d<0$. A divisor of negative degree has no nonzero section, since a principal divisor has degree zero. Thus $\ell(dP)=d$ for $d>0$.
>
> Constants lie in $L(P)$, whose dimension is one, so $L(P)=k$. Choose $X\in L(2P)\setminus L(P)$ and $Y\in L(3P)\setminus L(2P)$. Their pole orders at $P$ are exactly two and three, and they have no other poles. The pole orders of $1,X,Y,X^2,XY$ are $0,2,3,4,5$, respectively. Distinct pole orders imply linear independence: the term with the largest pole order in a relation cannot cancel. Comparing dimensions proves the asserted bases through $5P$.
>
> Both $X^3$ and $Y^2$ have pole order six. Seven elements in the six-dimensional space $L(6P)$ satisfy a relation. If either of the coefficients of $X^3,Y^2$ were zero, the remaining terms would have distinct pole orders, so every coefficient would vanish. Dividing by the nonzero coefficient of $Y^2$ produces
> $$
> Y^2+b_1XY+b_3Y=aX^3+b_2X^2+b_4X+b_6,\qquad a\in k^*.
> $$
> Put $X_1=aX$, $Y_1=aY$ and multiply this relation by $a^2$. The coefficients of $X_1^3$ and $Y_1^2$ are now both one, yielding the required equation over $k$ without extracting a root of $a$.
>
> For completeness this equation is a model of the original function field: the map $X:E'\to\mathbb P^1$ has degree two, its pole divisor being $2P$. The function $Y$ cannot belong to $k(X)$ because a rational function of $X$ with no other poles has even pole order at $P$. Hence $[k(X,Y):k(X)]=2=[k(E'):k(X)]$, and $k(E')=k(X,Y)$. The resulting birational map identifies the nonsingular projective model with $E'$, carrying $P$ to infinity. In characteristic different from $2,3$, completing the square and translating $X$ eliminate the mixed and quadratic terms; the short equation follows. In characteristics $2,3$ the generalized equation is retained.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 302–303 / PDF pp. 315–316. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
