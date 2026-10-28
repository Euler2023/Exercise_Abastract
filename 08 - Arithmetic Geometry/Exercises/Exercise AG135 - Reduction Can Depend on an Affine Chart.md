---
title: "Exercise AG135: Reduction Can Depend on an Affine Chart"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.4, printed p. 350, PDF p. 363"
source_refs:
  - "S7/ch-8/sec-5/ex-4"
created: 2026-10-28
---

# Exercise AG135: Reduction Can Depend on an Affine Chart

## Problem Statement

> [!question] Original Exercise 8.5.4
> Find an ideal $I_{(0)}$ of $\mathbb Z_{(p)}[x_1,x_2]$ defining a nonsingular curve with good reduction at $p$, but such that its homogenized ideal $I$ also dehomogenizes to an ideal $I_{(2)}$ defining a nonsingular curve with bad reduction at $p$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use the appendix's example $x_1+px_2^2$.

> [!hint]- Hint 2
> Homogenize to degree two, then set the other homogeneous coordinate to $1$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Take
> $$
> I_{(0)}=(x_1+px_2^2),\qquad
> I=(x_0x_1+px_2^2).
> $$
> On the original chart $x_0=1$, the equation solves $x_1=-px_2^2$, giving an affine line over $\mathbb Q$. Its partial derivative with respect to $x_1$ is $1$, so it is nonsingular. Reduction gives $x_1=0$, again a nonsingular affine line.
>
> On the chart $x_2=1$, the same homogeneous equation becomes
> $$
> I_{(2)}=(x_0x_1+p).
> $$
> Over $\mathbb Q$ the curve is the nonsingular hyperbola $x_0x_1=-p$: its two partial derivatives $x_1,x_0$ cannot both vanish at a point of the curve. Modulo $p$ it becomes $x_0x_1=0$, the union of two axes meeting at $(0,0)$. At their intersection both partial derivatives vanish, so this chart has bad reduction.
>
> The example does not assert that a smooth proper model has both good and bad reduction. It shows why one cannot define the reduction of a projective curve from an arbitrarily chosen integral affine presentation without further hypotheses.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 350 / PDF p. 363. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
