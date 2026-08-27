---
title: "Exercise G157: Nontrivial Stabilizers in Four Wallpaper Patterns"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - stabilizers
  - crystallographic-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.4, printed p. 190, PDF p. 202; source patterns in Ex. 6.3, printed p. 190, PDF p. 202"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-ex-6.3-patterns.png]]"
created: 2026-08-27
---

# Exercise G157: Nontrivial Stabilizers in Four Wallpaper Patterns

## Problem Statement

> [!question] Exercise 7.4
> In each of the figures in Exercise 6.3, find the points that have nontrivial stabilizers, and identify the stabilizers.

## Source Figure

![[Attachments/artin-algebra-2e-ch06-ex-6.3-patterns.png]]

*Direct crop of the four patterns referred to by Exercise 7.4: [S1, Ch. 6, Ex. 6.3 and Ex. 7.4, printed p. 190, PDF p. 202].*

## Hints

> [!hint]- Hint 1
> A nonidentity translation or glide reflection fixes no point. Rotation centers and points on genuine mirror axes are the only possibilities.

> [!hint]- Hint 2
> Use the point-group types found in Exercise G150: $C_4,D_4,D_6,D_1$.

## Solution

> [!success]- Solution
> For a discrete plane-isometry group, the fixed set of a nonidentity element is either a rotation center or a reflection axis. Thus the answer can be read directly from the visible centers and mirrors.
>
> - **Upper-left interlacing ($p4$, point group $C_4$).** The order-four rotation centers have stabilizer $C_4$. The secondary half-turn centers midway between neighboring order-four centers have stabilizer $C_2$. Every other point has trivial stabilizer.
> - **Upper-right basket weave ($p4g$, point group $D_4$).** The quarter-turn centers have stabilizer $C_4$; the secondary half-turn centers have stabilizer $C_2$. Points on a genuine diagonal mirror away from its intersections have stabilizer $C_2$. At an intersection of compatible mirror axes the stabilizer is the corresponding local dihedral group ($D_2$ or $D_4$, according to whether the point is a half-turn or quarter-turn center). Glide axes contribute no fixed points.
> - **Lower-left star pattern ($p6m$, point group $D_6$).** Sixfold, threefold, and twofold rotation centers have stabilizers $C_6,C_3,C_2$, respectively. A generic point on a mirror has stabilizer $C_2$; where mirrors meet a rotation center the stabilizer enlarges to $D_6,D_3$, or $D_2$.
> - **Lower-right fish pattern ($pm$, point group $D_1$).** Precisely the points on the horizontal mirror lines have nontrivial stabilizer, namely $C_2$. Points off those lines have trivial stabilizer.
>
> This lists every possibility because translations and glides are fixed-point-free. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Exercises/Exercise G150 - Point Groups of Four Wallpaper Patterns|Exercise G150]]

## Notes

- “Points on a mirror” excludes intersections, where additional rotations or reflections enlarge the stabilizer.
- **Source status:** The referring exercise and source figure were visually checked together. The fixed-set analysis is independent.

