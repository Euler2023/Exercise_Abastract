---
title: "Exercise G148: Point Groups of the Seventeen Wallpaper Patterns"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - point-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 6, Ex. 6.1, printed p. 189, PDF p. 201; Fig. 6.6.2, printed p. 174, PDF p. 186"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-fig-6.6.2.png]]"
created: 2026-08-27
---

# Exercise G148: Point Groups of the Seventeen Wallpaper Patterns

## Problem Statement

> [!question] Exercise 6.1
> (a) Determine the point group $\overline G$ for each of the patterns depicted in Figure 6.6.2.
>
> (b) For which of the patterns can coordinates be chosen so that the group $G$ operates on the lattice $L$?

## Source Figure

![[Attachments/artin-algebra-2e-ch06-fig-6.6.2.png]]

*Direct crop of Figure 6.6.2. Source: [S1, Ch. 6, Fig. 6.6.2, printed p. 174, PDF p. 186]. Numbering below runs left-to-right within each row, from top to bottom.*

## Hints

> [!hint]- Hint 1
> First find the largest rotation order $n$; then decide whether any reflection or glide reflection occurs. The point group is $C_n$ or $D_n$ accordingly.

> [!hint]- Hint 2
> For part (b), a crystallographic group can preserve a translate of its translation lattice exactly when its affine extension by the point group is symmorphic. A compulsory half-glide is the obstruction.

## Solution

> [!success]- Solution
> The patterns are arranged according to the standard seventeen wallpaper types. Reading by rows gives:
>
> | row | wallpaper types | point groups |
> |---|---|---|
> | 1 | $p1, p2$ | $C_1, C_2$ |
> | 2 | $p3, p4, p6$ | $C_3, C_4, C_6$ |
> | 3 | $pm, pg, cm, pmm, pmg$ | $D_1, D_1, D_1, D_2, D_2$ |
> | 4 | $pgg, cmm, p4m, p4g$ | $D_2, D_2, D_4, D_4$ |
> | 5 | $p3m1, p31m, p6m$ | $D_3, D_3, D_6$ |
>
> For example, the second-row patterns have rotations of orders $3,4,6$ and no orientation-reversing symmetry, while the last pattern also has mirror axes, changing $C_6$ to $D_6$.
>
> A choice of origin makes $G$ operate on $L$ for the thirteen symmorphic types
>
> $$
> p1,p2,pm,cm,pmm,cmm,p3,p3m1,p31m,p4,p4m,p6,p6m.
> $$
>
> It is impossible for the four nonsymmorphic types
>
> $$
> pg,qquad pmg,qquad pgg,qquad p4g.
> $$
>
> In each of these four cases, at least one point-group reflection is represented only by a glide whose translational component is a nonzero half-lattice class. Translating the origin changes that component by $(I-r)c$ but cannot remove its class modulo $L$. Hence no translate of $L$ is invariant under the full group. For every other type, the displayed rotations and reflections can be centered at lattice points, so $G$ preserves the resulting lattice. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- The wallpaper symbols are supplied as useful modern labels; Artin's exercise asks only for the point groups and the lattice-preservation test.
- **Source status:** The exercise and all seventeen source motifs were visually checked at the anchors above. The classification table and symmorphic test are independent derivations, cross-checked against the standard seventeen wallpaper-group list.

