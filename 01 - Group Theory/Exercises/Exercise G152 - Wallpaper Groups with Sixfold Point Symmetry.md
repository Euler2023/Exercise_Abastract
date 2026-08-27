---
title: "Exercise G152: Wallpaper Groups with Sixfold Point Symmetry"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 6, Ex. 6.5, printed p. 190, PDF p. 202"
created: 2026-08-27
---

# Exercise G152: Wallpaper Groups with Sixfold Point Symmetry

## Problem Statement

> [!question] Exercise 6.5
> (a) Prove that if the point group of a two-dimensional crystallographic group $G$ is $C_6$ or $D_6$, the translation group $L$ is an equilateral triangular lattice.
>
> (b) Classify those groups.

## Hints

> [!hint]- Hint 1
> Choose a shortest nonzero $a\in L$ and rotate it through $60^\circ$ to obtain $b$. Use the fundamental parallelogram to rule out a larger lattice.

> [!hint]- Hint 2
> Move the origin to the center of a lift of the order-six rotation. For $D_6$, normalize one reflection axis through that center.

## Solution

> [!success]- Solution
> Let $\rho$ be rotation through $60^\circ$ in the point group, and choose a shortest nonzero vector $a\in L$. Then $b=\rho(a)$ also lies in $L$, has the same length, and meets $a$ at angle $60^\circ$.
>
> We claim $L=\mathbb Za+\mathbb Zb$. Otherwise a fundamental parallelogram for this sublattice would contain a lattice point not at a vertex. Subtracting a suitable vertex places a nonzero lattice vector in the regular hexagonal Voronoi cell of $0$, with length strictly smaller than $|a|$, a contradiction. Thus $L$ is equilateral triangular.
>
> Any affine isometry with nontrivial rotational part has a fixed point. Move the origin to the center of a lift of $\rho$. Then $G$ contains the linear rotation $\rho$, and all orientation-preserving elements are
>
> $$
> t_v\rho^i,qquad v\in L,quad 0\le i<6.
> $$
>
> This is the unique type with point group $C_6$, denoted $p6$.
>
> If the point group is $D_6$, choose a lift of a reflection. Compatibility with the order-six center and the triangular lattice lets us translate the origin by a lattice half-class so that this lift is an actual reflection $r$ through a lattice mirror axis. The group is then
>
> $$
> L\rtimes D_6
> =\{t_v\rho^i, t_v\rho^i r:v\in L, 0\le i<6\},
> $$
>
> the unique type $p6m$. Hence the classification is $p6$ for $C_6$ and $p6m$ for $D_6$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]

## Notes

- The argument that the reflection lift can be normalized is the absence of a nonsymmorphic sixfold wallpaper group.
- **Source status:** The multipart statement was visually checked at [S1, Ch. 6, §6, Ex. 6.5, printed p. 190, PDF p. 202]. The proof and modern type labels are independent.

