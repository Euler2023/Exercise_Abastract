---
title: "Exercise AG127: The Infinite Point on a General Weierstrass Cubic"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.1, Exercise 8.1.3, printed p. 320, PDF p. 333"
source_refs:
  - "S7/ch-8/sec-1/ex-3"
created: 2026-10-28
---

# Exercise AG127: The Infinite Point on a General Weierstrass Cubic

## Problem Statement

> [!question] Original Exercise 8.1.3
> (a) Homogenize the general Weierstrass polynomial:
> $$
> E_{\mathrm{hom}}=y^2z+a_1xyz+a_3yz^2-x^3-a_2x^2z-a_4xz^2-a_6z^3.
> $$
> Show that $[0,1,0]$ satisfies it and no other $[x,y,0]$ does.
>
> (b) Set $y=1$ to obtain
> $$
> \widetilde E(x,z)=z+a_1xz+a_3z^2-x^3-a_2x^2z-a_4xz^2-a_6z^3.
> $$
> The infinite point $0_E$ has coordinates $(0,0)$ in this chart. Show that $E$ is geometrically nonsingular there.

## Hints

> [!hint]- Hint 1
> First set $z=0$ in the homogeneous polynomial.

> [!hint]- Hint 2
> One partial derivative at the point is the constant $1$, independently of the coefficients and the characteristic.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) At $z=0$ the polynomial is $-x^3$. Its vanishing over a field forces $x=0$. A projective point cannot have all coordinates zero, so $y\ne0$, and rescaling gives the unique point $[0,1,0]$.
>
> (b) In the affine chart $y\ne0$, differentiate the displayed polynomial:
> $$
> \frac{\partial\widetilde E}{\partial z}=1+a_1x+2a_3z-a_2x^2-2a_4xz-3a_6z^2.
> $$
> At $(0,0)$ its value is $1$, in every characteristic and over every field extension. The Jacobian criterion for a plane curve therefore proves that this point is geometrically nonsingular. Equivalently its cotangent space has dimension one, since the local equation has nonzero linear part $z$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 320 / PDF p. 333. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
