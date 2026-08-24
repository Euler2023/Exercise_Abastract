---
title: "Exercise G110: Point Group of a Step Frieze"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - frieze-groups
  - point-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.6, printed p. 188, PDF p. 200"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-ex-5.6-frieze.png]]"
created: 2026-08-24
---

# Exercise G110: Point Group of a Step Frieze

## Problem Statement

> [!question] Exercise 5.6
> Let $G$ be the group of symmetries of the following frieze pattern. Determine the point group $\overline G$ of $G$, and the index in $G$ of its subgroup of translations.

## Source Figure

![[Attachments/artin-algebra-2e-ch06-ex-5.6-frieze.png]]

*Direct crop of the pattern printed inside Exercise 5.6. Source: [S1, Ch. 6, §5, Ex. 5.6, printed p. 188, PDF p. 200].*

## Hints

> [!hint]- Hint 1
> Reflection in a vertical line midway between adjacent step motifs exchanges them.

> [!hint]- Hint 2
> Horizontal reflection alone does not preserve the pattern, but horizontal reflection followed by a shift through one motif does.

## Solution

> [!success]- Solution
> Let $t$ be the least translation carrying the pattern to itself; its length is the distance between every second step motif. Reflection $s$ in a suitable vertical line between adjacent motifs preserves the pattern. If $u$ denotes the horizontal displacement from one motif to the next, then $g=t_ur$—horizontal reflection followed by that displacement—is a glide reflection preserving the pattern. Its square is $t$.
>
> The product $sg$ has orthogonal part $sr=-I$, so it is a half-turn. Consequently the point group contains
>
> $$
> I,\quad s,\quad r,\quad -I.
> $$
>
> These are all orthogonal operators that preserve the horizontal direction as an unoriented line, so
>
> $$
> \overline G=\{I,s,r,-I\}\cong D_2\cong C_2\times C_2.
> $$
>
> More concretely, the position and orientation of one step motif show that every symmetry belongs to exactly one of the four families $t^k$, $t^ks$, $t^kg$, or $t^ksg$. Thus the kernel of $G\to\overline G$ is precisely the translation subgroup $L=\langle t\rangle$, and
>
> $$
> [G:L]=|\overline G|=4.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]

## Notes

- The horizontal-reflection element of the point group is lifted in $G$ by a glide reflection, not by a horizontal mirror. This is one of the two full-point-group frieze types.
- **Source status:** The problem and crop are from [S1, Ch. 6, §5, Ex. 5.6, printed p. 188, PDF p. 200]. The symmetry exhaustion is an independent visual derivation from the printed motif.
