---
title: "Exercise Gal83: Radical Axis of Two Nonintersecting Circles"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - ruler-and-compass
  - circle-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 5, Constructions with Ruler and Compass, Ex. 5.5, printed p. 473, PDF p. 485; Proposition 15.5.5, printed pp. 452–453, PDF pp. 464–465"
created: 2026-08-28
---

# Exercise Gal83: Radical Axis of Two Nonintersecting Circles

## Problem Statement

> [!question] Exercise 5.5
> Referring to the proof of Proposition 15.5.5, suppose that the discriminant $D$ is negative. Determine the line that appears at the end of the proof geometrically.

## Hints

> [!hint]- Hint 1
> Subtract the equations of the two circles and interpret the resulting linear equation using powers of a point.

## Solution

> [!success]- Solution
> Write the circles as
>
> $$
> C_j:(x-a_j)^2+(y-b_j)^2=r_j^2
> \qquad (j=1,2).
> $$
>
> Subtracting their equations cancels $x^2+y^2$ and produces a line. Its points satisfy
>
> $$
> (x-a_1)^2+(y-b_1)^2-r_1^2
> =(x-a_2)^2+(y-b_2)^2-r_2^2.
> $$
>
> Therefore the line is the **radical axis**: the locus of points having equal power with respect to the two circles. It is perpendicular to the line joining the centers. If the center distance is $d$, its intersection with the oriented line from the first center to the second lies at directed distance
>
> $$
> \frac{d^2+r_1^2-r_2^2}{2d}
> $$
>
> from the first center.
>
> When the eliminated quadratic has negative discriminant, the two circles have no real common point, so this radical axis is not a common-chord line. It remains the geometrically determined equal-power line, possibly lying outside both circles.

## Related Concepts

- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Routing:** Galois Theory is primary in this chapter sequence because the line occurs in the proof that ruler-and-compass intersections require at most quadratic field extensions.
- **Source status:** The exercise is [S1, Ch. 15, §15.5, Ex. 5.5, printed p. 473, PDF p. 485]; the two-circle elimination is checked at [S1, Proposition 15.5.5, printed pp. 452–453, PDF pp. 464–465]. The geometric identification is independent.
