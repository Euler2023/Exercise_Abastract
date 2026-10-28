---
title: "Exercise AG115: The Invariant of the Universal Elliptic Curve"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.5, Exercise 7.5.4, printed p. 290, PDF p. 303"
source_refs:
  - "S7/ch-7/sec-5/ex-4"
created: 2026-10-28
---

# Exercise AG115: The Invariant of the Universal Elliptic Curve

## Problem Statement

> [!question] Original Exercise 7.5.4
> Show that the $j$-invariant of the universal elliptic curve $E_j$ is the variable $j$. (A hint for this exercise is at the end of the book.)

> **Context and notation.** Equation (7.12), printed p. 286 / PDF p. 299, is
> $$
> E_j:\ y^2=4x^3-\frac{27j}{j-1728}x-\frac{27j}{j-1728}.
> $$
> The discriminant convention is $g_2^3-27g_3^2$ and the invariant is $1728g_2^3/\Delta$.

## Hints

> [!hint]- Hint 1
> Both Weierstrass coefficients are $g=27j/(j-1728)$.

> [!hint]- Hint 2
> Cancel $g^2$ in the invariant formula and compute $g-27$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Treat $j$ as transcendental and put $g=27j/(j-1728)$. The universal equation is $y^2=4x^3-gx-g$, so $g_2=g_3=g$. Its discriminant is
> $$
> \Delta=g^3-27g^2=g^2(g-27).
> $$
> Now
> $$
> g-27=\frac{27j-27(j-1728)}{j-1728}
> =\frac{27\cdot1728}{j-1728}.
> $$
> All these expressions are nonzero in the rational function field. Therefore
> $$
> j(E_j)=1728\frac{g^3}{g^2(g-27)}
> =1728\frac{g}{g-27}=j.
> $$
> In particular $\Delta=27^3\cdot1728\,j^2/(j-1728)^3$. Specialization is nonsingular for complex $j\ne0,1728$. The value $0$ gives a singular specialization of this chosen equation and $1728$ is a pole in its coefficients; this universal presentation does not include those two special fibres.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 290 / PDF p. 303. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
