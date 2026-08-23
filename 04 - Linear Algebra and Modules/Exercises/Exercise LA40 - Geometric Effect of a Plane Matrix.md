---
title: "Exercise LA40: Geometric Effect of a Plane Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-transformations
  - geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.7, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA40: Geometric Effect of a Plane Matrix

## Problem Statement

> [!question] Exercise 2.7
> Sketch the effect on $\mathbb R^2$ of multiplication by
> 
> $$
> A=\begin{bmatrix}2&-1\\2&3\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Plot the images of the standard basis vectors and of the unit square.

## Solution

> [!success]- Solution
> The standard basis vectors go to the columns of $A$:
> 
> $$
> e_1\longmapsto(2,2),\qquad e_2\longmapsto(-1,3).
> $$
> 
> Hence the unit square becomes the parallelogram with vertices
> 
> $$
> (0,0),\ (2,2),\ (-1,3),\ (1,5).
> $$
> 
> Since $\det A=2\cdot3-(-1)\cdot2=8>0$, the map preserves orientation and multiplies area by $8$. A sketch is obtained by drawing these two image vectors and completing their parallelogram.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.7, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
