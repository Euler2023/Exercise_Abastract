---
title: "Exercise G109: Symmetry Group of a Triangular Frieze"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - frieze-groups
  - direct-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.5, printed p. 188, PDF p. 200"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-ex-5.5-frieze.png]]"
created: 2026-08-24
---

# Exercise G109: Symmetry Group of a Triangular Frieze

## Problem Statement

> [!question] Exercise 5.5
> Prove that the group of symmetries of the following frieze pattern is isomorphic to the direct product $C_2\times C_\infty$ of a cyclic group of order $2$ and an infinite cyclic group.

## Source Figure

![[Attachments/artin-algebra-2e-ch06-ex-5.5-frieze.png]]

*Direct crop of the pattern printed inside Exercise 5.5. Source: [S1, Ch. 6, §5, Ex. 5.5, printed p. 188, PDF p. 200].*

## Hints

> [!hint]- Hint 1
> Use the least horizontal translation $t$ and reflection $r$ in the horizontal axis of the frieze.

> [!hint]- Hint 2
> Prove that $r^2=1$ and $rt=tr$, then use the position and orientation of one triangle to show that there are no further symmetries.

## Solution

> [!success]- Solution
> Let $t$ be translation by the distance between adjacent triangles, and let $r$ be reflection in the horizontal line through their vertices and centers. Each triangle is symmetric about this horizontal line, so both $t$ and $r$ preserve the pattern. They satisfy
>
> $$
> r^2=1,\qquad rt=tr.
> $$
>
> Hence every map $t^k$ and $rt^k$, with $k\in\mathbb Z$, is a symmetry.
>
> Conversely, a symmetry must preserve the unique horizontal axis occupied by the pattern and must send vertices of triangles to vertices in the same periodic set. Thus the image of one chosen triangle differs from it by an integral power of $t$. Once that translation is removed, the remaining symmetry fixes the chosen triangle and the horizontal axis; it is either the identity or $r$. Therefore every symmetry is uniquely $t^k$ or $rt^k$.
>
> The subgroups $\langle r\rangle$ and $\langle t\rangle$ commute, have trivial intersection, and generate the whole symmetry group. Since $\langle r\rangle\cong C_2$ and $\langle t\rangle\cong C_\infty$, we obtain
>
> $$
> G\cong C_2\times C_\infty.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]

## Notes

- The two factors have clear geometric types: horizontal reflection and translation.
- **Source status:** The problem and embedded asset were checked directly on [S1, Ch. 6, §5, Ex. 5.5, printed p. 188, PDF p. 200]. The classification proof is independent.

