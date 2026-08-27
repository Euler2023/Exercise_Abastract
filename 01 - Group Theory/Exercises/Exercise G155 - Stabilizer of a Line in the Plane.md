---
title: "Exercise G155: Stabilizer of a Line in the Plane"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - plane-isometries
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.2, printed p. 190, PDF p. 202"
created: 2026-08-27
---

# Exercise G155: Stabilizer of a Line in the Plane

## Problem Statement

> [!question] Exercise 7.2
> The group $M$ of isometries of the plane operates on the set of lines in the plane. Determine the stabilizer of a line.

## Hints

> [!hint]- Hint 1
> Choose coordinates in which the line is the $x$-axis.

> [!hint]- Hint 2
> An isometry preserving the line must preserve its direction and its orthogonal direction, possibly reversing either one.

## Solution

> [!success]- Solution
> Put $\ell=\{(x,0):x\in\mathbb R\}$. If $m(x)=Ax+u$ preserves $\ell$ setwise, then $u=(a,0)$ lies on $\ell$, and the orthogonal matrix $A$ preserves both $\mathbb Re_1$ and $\mathbb Re_2$. Therefore
>
> $$
> A=\begin{pmatrix}\varepsilon&0\\0&\delta\end{pmatrix},
> \qquad \varepsilon,\delta\in\{1,-1\}.
> $$
>
> Conversely, every map
>
> $$
> (x,y)\longmapsto(\varepsilon x+a,\delta y)
> $$
>
> preserves $\ell$. Hence
>
> $$
> \operatorname{Stab}_M(\ell)
> =\{(x,y)\mapsto(\varepsilon x+a,\delta y):a\in\mathbb R, \varepsilon,\delta=\pm1\}.
> $$
>
> Geometrically these are translations along $\ell$, reflections or glides with axis $\ell$, reflections in lines perpendicular to $\ell$, and half-turns about points of $\ell$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]

## Notes

- Reflections in perpendicular lines must be included: they reverse the coordinate along $\ell$ but still preserve the line setwise.
- **Source status:** [S1, Ch. 6, §7, Ex. 7.2, printed p. 190, PDF p. 202]; independent complete classification.

