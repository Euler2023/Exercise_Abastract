---
title: "Exercise AG107: Explicit Two and Three Torsion"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.1, Exercise 7.1.5, printed p. 261, PDF p. 274"
source_refs:
  - "S7/ch-7/sec-1/ex-5"
created: 2026-10-28
---

# Exercise AG107: Explicit Two and Three Torsion

## Problem Statement

> [!question] Original Exercise 7.1.5
> (a) Confirm that the condition $x([2]P)=x_P$ works out to the polynomial condition given in the section.
>
> (b) Compute $E[2]$ and $E[3]$ for the elliptic curve with Weierstrass equation $y^2=4x^3-4x$.

> **Context and notation.** The source polynomial, printed p. 258 / PDF p. 271, is $48x_P^4-24g_2x_P^2-48g_3x_P-g_2^2=0$. The group $E[N]$ consists of all geometric points killed by $N$, including $0_E$.

## Hints

> [!hint]- Hint 1
> For two-torsion use $P=-P$. For three-torsion use $[2]P=-P$.

> [!hint]- Hint 2
> Substitute $g_2=4,g_3=0$ and solve the resulting quadratic in $x^2$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> **(a)** For $P=(x,y)$ with $y\ne0$, the tangent slope is $\lambda=(12x^2-g_2)/(2y)$ and
> $$
> x([2]P)=\lambda^2/4-2x.
> $$
> Setting this equal to $x$ is equivalent to
> $$
> (12x^2-g_2)^2=48xy^2
> =48x(4x^3-g_2x-g_3).
> $$
> Expanding and moving all terms to one side gives the source polynomial
> $$
> 48x^4-24g_2x^2-48g_3x-g_2^2=0.
> $$
> Equal $x$-coordinates mean $[2]P=P$ or $[2]P=-P$. For an affine nonzero $P$, the former would force $P=0_E$ by cancellation, so the equality characterizes nonzero three-torsion. A point with $y=0$ has order $2$, hence cannot be nonzero three-torsion.
>
> **(b)** The inverse of $(x,y)$ is $(x,-y)$, so
> $$
> E[2]=\{0_E,(0,0),(1,0),(-1,0)\}.
> $$
> For $g_2=4,g_3=0$, the three-torsion polynomial is
> $$
> 3x^4-6x^2-1=0,\qquad
> x^2=1\pm\frac{2}{\sqrt3}.
> $$
> Let $A$ be the four complex roots of this quartic. None is $0,1$, or $-1$, because substitution into the quartic gives respectively $-1,-4,-4$. Thus $4x^3-4x\ne0$ for $x\in A$, and each $x$ gives two distinct points. Explicitly,
> $$
> E[3]=\{0_E\}\cup
> \{(x,\ \pm2\sqrt{x^3-x}):\ x=\pm\sqrt{1+2/\sqrt3}
> \text{ or }x=\pm\sqrt{1-2/\sqrt3}\}.
> $$
> The sign choices for each nonzero square root give exactly eight affine points. The derivation in (a) proves that every one is killed by $3$ and that no other affine point is. The coordinates are taken over an algebraic closure, not restricted to real or rational points.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 261 / PDF p. 274. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
