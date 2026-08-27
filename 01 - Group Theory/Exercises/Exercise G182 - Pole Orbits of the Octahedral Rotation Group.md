---
title: "Exercise G182: Pole Orbits of the Octahedral Rotation Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - rotation-groups
  - group-actions
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 12, Ex. 12.2, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise G182: Pole Orbits of the Octahedral Rotation Group

## Problem Statement

> [!question] Exercise 12.2
> Describe the orbits of poles for the group of rotations of an octahedron.

## Hints

> [!hint]- Hint 1
> Poles are intersections of nontrivial rotation axes with the unit sphere.

> [!hint]- Hint 2
> Separate axes through opposite vertices, opposite face centers, and opposite edge midpoints.

## Solution

> [!success]- Solution
> The octahedral rotation group $O$ has order $24$. Its poles fall into three geometric types:
>
> - the $6$ directions through the vertices, with stabilizer order $4$;
> - the $8$ directions through face centers, with stabilizer order $3$;
> - the $12$ directions through edge midpoints, with stabilizer order $2$.
>
> Rotations preserve the type, and the group is transitive on each type. Orbit–stabilizer confirms the sizes:
>
> $$
> \frac{24}{4}=6,qquad \frac{24}{3}=8,qquad \frac{24}{2}=12.
> $$
>
> Thus the pole set is the disjoint union of exactly three orbits of sizes $6,8,12$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G164 - Rotation Groups of the Cube and Tetrahedron|Exercise G164]]

## Notes

- These are the $(r_i,n_i)=(4,6),(3,8),(2,12)$ data in Artin's finite-rotation-group classification.
- **Source status:** The definition of poles and the octahedral orbit data were checked at [S1, Ch. 6, §12, printed pp. 184–186, PDF pp. 196–198], and the exercise at printed p. 193/PDF p. 205. The description is independently organized.

