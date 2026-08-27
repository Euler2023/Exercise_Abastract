---
title: "Exercise G153: Exhaustion of the Seventeen Wallpaper Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - classification
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 6, Ex. 6.6, printed p. 190, PDF p. 202; Fig. 6.6.2, printed p. 174, PDF p. 186"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-fig-6.6.2.png]]"
created: 2026-08-27
---

# Exercise G153: Exhaustion of the Seventeen Wallpaper Groups

## Problem Statement

> [!question] Exercise 6.6
> Prove that the symmetry groups of the figures in Figure 6.6.2 exhaust the possibilities.

## Source Figure

![[Attachments/artin-algebra-2e-ch06-fig-6.6.2.png]]

*Direct crop of Figure 6.6.2: [S1, Ch. 6, printed p. 174, PDF p. 186].*

## Hints

> [!hint]- Hint 1
> Use the crystallographic restriction to reduce the point group to $C_n$ or $D_n$ with $n=1,2,3,4,6$.

> [!hint]- Hint 2
> For each invariant lattice, classify lifts of point-group generators modulo lattice translations and changes of origin.

## Solution

> [!success]- Solution
> Let $L$ be the translation lattice and $\overline G$ the point group. There is an exact sequence
>
> $$
> 1\longrightarrow L\longrightarrow G\longrightarrow\overline G\longrightarrow1.
> $$
>
> By the crystallographic restriction, $\overline G$ is $C_n$ or $D_n$ with $n\in\{1,2,3,4,6\}$. Choose a basis adapted to the invariant lattice: oblique for $C_1,C_2$, rectangular or centered rectangular for $D_1,D_2$, square for order $4$, and triangular for orders $3$ or $6$.
>
> A lift of an orthogonal generator has the form $t_uq$. Replacing it by a lattice translate changes $u$ modulo $L$, while translating the origin by $c$ changes it by $(I-q)c$. Solving the relations of $C_n$ or $D_n$ in these finite quotient classes gives the following complete list:
>
> | point group | affine types | number |
> |---|---|---:|
> | $C_1$ | $p1$ | 1 |
> | $C_2$ | $p2$ | 1 |
> | $C_3$ | $p3$ | 1 |
> | $C_4$ | $p4$ | 1 |
> | $C_6$ | $p6$ | 1 |
> | $D_1$ | $pm,pg,cm$ | 3 |
> | $D_2$ | $pmm,pmg,pgg,cmm$ | 4 |
> | $D_3$ | $p3m1,p31m$ | 2 |
> | $D_4$ | $p4m,p4g$ | 2 |
> | $D_6$ | $p6m$ | 1 |
>
> Here is the finite lift calculation behind the multiplicities. For $D_1$, a primitive rectangular lattice permits a mirror or a compulsory half-glide, while a centered rectangular lattice gives the third type. With two reflection directions ($D_2$), the two lifts may be mirrors or half-glides subject to their product being a half-turn, yielding four inequivalent cases. A triangular lattice has two inequivalent placements of the three mirror families for $D_3$. A square lattice has either mirrors through the order-four centers or the offset mirror/glide configuration for $D_4$. Order six forces all mirror families into one class, giving only $p6m$. Cyclic point groups have a rotational fixed point, so moving the origin there leaves one type for each $n$.
>
> The count is
>
> $$
> 1+1+1+1+1+3+4+2+2+1=17.
> $$
>
> Each row of the table is realized by the corresponding motif in Figure 6.6.2, as identified in Exercise G148. Therefore the displayed groups exhaust all plane crystallographic groups. $\square$

## Related Concepts

- [[01 - Group Theory/Exercises/Exercise G148 - Point Groups of the Seventeen Wallpaper Patterns|Exercise G148]]
- [[01 - Group Theory/Exercises/Exercise G151 - Wallpaper Groups with Point Group D1|Exercise G151]]
- [[01 - Group Theory/Exercises/Exercise G152 - Wallpaper Groups with Sixfold Point Symmetry|Exercise G152]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- The table is the algebraic classification; the source figure supplies concrete realizations.
- **Source status:** Artin states the crystallographic restriction in §6.5 and poses the full exhaustion as Exercise 6.6. The source does not print this solution. The extension-and-lift classification above is independent.
