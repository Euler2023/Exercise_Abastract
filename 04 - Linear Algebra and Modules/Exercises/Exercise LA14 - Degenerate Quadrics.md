---
title: "Exercise LA14: Degenerate Quadrics"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - quadratic-forms
  - quadrics
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.4, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA14: Degenerate Quadrics

## Problem Statement

> [!question] Exercise 7.4
> Describe the degenerate quadrics geometrically.

## Hints

> [!hint]- Hint 1
> Diagonalize the symmetric quadratic part and then complete every square whose quadratic coefficient is nonzero.

> [!hint]- Hint 2
> Organize the answer by the rank of the quadratic part. A missing variable either remains free, producing a cylinder, or occurs linearly, producing a parabolic type.

## Solution

> [!success]- Solution
> Let
>
> $$
> f(X)=X^{\mathsf T}AX+b^{\mathsf T}X+c
> $$
>
> be a genuine quadratic polynomial on $\mathbb R^3$, so $A\ne0$. After an orthogonal change of coordinates, $A$ is diagonal. Translating the coordinates completes all available squares. The resulting geometry is determined by $\operatorname{rank}A$ and by whether the remaining linear term has a component in $\ker A$.
>
> ### Rank three
>
> There is a center and the equation becomes $q(X)=d$ with $q$ nondegenerate. The cases not appearing among Artin's five nondegenerate quadrics are:
>
> - $q$ definite and $d=0$: a single point;
> - $q$ definite with the incompatible sign of $d$: the empty set;
> - $q$ indefinite and $d=0$: an elliptic double cone.
>
> ### Rank two
>
> Choose the third coordinate along $\ker A$.
>
> - If its linear coefficient is nonzero, the equation is an elliptic or hyperbolic paraboloid; these are among the nondegenerate quadrics in Artin's classification.
> - If that coefficient is zero, the third variable is free. The locus is a cylinder over a plane conic: an elliptic cylinder, a hyperbolic cylinder, a line, a pair of intersecting planes, or the empty set.
>
> ### Rank one
>
> After completing one square, the equation has the form
>
> $$
> \varepsilon x^2+\alpha y=d,
> \qquad \varepsilon\in\{1,-1\},
> $$
>
> with the third coordinate free. If $\alpha\ne0$, this is a parabolic cylinder. If $\alpha=0$, it is a pair of parallel planes, a single double plane, or the empty set according to the sign of $d/\varepsilon$.
>
> Thus, apart from the five nondegenerate types, degenerate real quadrics consist geometrically of **cones, cylinders, pairs of planes, a double plane, a line, a point, or the empty set**. If one allows a polynomial with $A=0$, one additionally obtains a plane, all of $\mathbb R^3$, or the empty set, but such an equation is no longer genuinely quadratic. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The statement is [S1, Ch. 8, Exercises §7, Ex. 7.4, printed p. 258, PDF p. 270]. The rank-by-rank classification is an independent derivation from Artin's diagonalization and translation method.
- Artin uses “degenerate” geometrically for the types outside his listed nondegenerate conics and quadrics; it is not merely the matrix condition $\det A=0$.
- Artin's homogeneous quadratic cones are discussed at [S1, Ch. 8, §7, printed pp. 248–249, PDF pp. 260–261]; the classification here also uses the framework of Theorems 8.7.5 and 8.7.14.
