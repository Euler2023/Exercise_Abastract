---
title: "Exercise Gal80: Constructing the Regular Pentagon"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - ruler-and-compass
  - cyclotomic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 5, Constructions with Ruler and Compass, Ex. 5.2, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise Gal80: Constructing the Regular Pentagon

## Problem Statement

> [!question] Exercise 5.2
> Prove that the regular pentagon can be constructed by ruler and compass
>
> **(a)** by field theory, **(b)** by finding an explicit construction.

## Hints

> [!hint]- Hint 1
> Compute $\cos72^\circ$ and $\sin72^\circ$ in a tower of quadratic extensions.

## Solution

> [!success]- Solution
> **(a) Field-theoretic proof.** If $\zeta=e^{2\pi i/5}$ and $u=\zeta+\zeta^{-1}=2\cos72^\circ$, then dividing
>
> $$
> 1+\zeta+\zeta^2+\zeta^3+\zeta^4=0
> $$
>
> by $\zeta^2$ gives $u^2+u-1=0$. Therefore
>
> $$
> \cos72^\circ=\frac{\sqrt5-1}{4},
> \qquad
> \sin72^\circ=\frac{\sqrt{10+2\sqrt5}}{4}.
> $$
>
> Both coordinates belong to a tower obtained by adjoining real square roots to $\mathbb Q$, so the point $(\cos72^\circ,\sin72^\circ)$ on the unit circle is constructible. Repeatedly transferring the corresponding chord constructs all five vertices.
>
> **(b) Explicit construction.** Starting with a unit segment, construct a right triangle with legs $1$ and $2$; its hypotenuse has length $\sqrt5$. By marking off lengths and bisecting, construct
>
> $$
> c=\frac{\sqrt5-1}{4}.
> $$
>
> On the unit circle, erect the perpendicular at the point with horizontal coordinate $c$. Its upper intersection has vertical coordinate $\sqrt{1-c^2}=\sqrt{10+2\sqrt5}/4$. The radius to this point makes an angle of $72^\circ$ with the positive horizontal radius. Transfer the chord between these two radius endpoints successively around the circle; five equal chords close up and form the regular pentagon.

## Related Concepts

- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Routing:** Galois Theory is primary because constructibility is certified by a quadratic field tower, with an explicit Euclidean realization supplied in part (b).
- **Source status:** [S1, Ch. 15, §15.5, Ex. 5.2, printed p. 473, PDF p. 485]. Both constructions are independent.
