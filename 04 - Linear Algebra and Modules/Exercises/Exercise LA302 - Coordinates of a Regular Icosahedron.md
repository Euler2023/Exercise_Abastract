---
title: "Exercise LA302: Coordinates of a Regular Icosahedron"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - euclidean-geometry
  - golden-ratio
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 12, Ex. 12.7, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise LA302: Coordinates of a Regular Icosahedron

## Problem Statement

> [!question] Exercise 12.7
> The $12$ points $(\pm1,\pm a,0)^{\mathsf T}$, $(0,\pm1,\pm a)^{\mathsf T}$, $(\pm a,0,\pm1)^{\mathsf T}$ form the vertices of a regular icosahedron if $a>1$ is chosen suitably. Verify this, and determine $a$.

## Hints

> [!hint]- Hint 1
> Two vertices in the first family, $(1,a,0)$ and $(-1,a,0)$, are distance $2$ apart.

> [!hint]- Hint 2
> Force $(1,a,0)$ and $(0,1,a)$ to have the same distance.

## Solution

> [!success]- Solution
> All twelve points lie on the sphere of radius $\sqrt{1+a^2}$. Within one coordinate family, a candidate edge has length $2$. Requiring the cross-family pair $(1,a,0)$ and $(0,1,a)$ also to be an edge gives
>
> $$
> 1+(a-1)^2+a^2=4.
> $$
>
> Therefore
>
> $$
> a^2-a-1=0.
> $$
>
> Since $a>1$,
>
> $$
> a=\frac{1+\sqrt5}{2}.
> $$
>
> For this value, $a^2=a+1$ and $(a-1)^2=2-a$. Direct substitution shows that each vertex has exactly five other vertices at squared distance $4$; all remaining squared distances are larger. The resulting edge graph has $12$ vertices of degree $5$, $30$ equal edges, and $20$ equilateral triangular faces. Hence its convex hull is a regular icosahedron. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- The two roots are $(1\pm\sqrt5)/2$; the hypothesis $a>1$ selects the golden ratio.
- **Source status:** The coordinate signs and transpose notation were visually checked at [S1, Ch. 6, §12, Ex. 12.7, printed p. 193, PDF p. 205]. The distance verification is independent.

