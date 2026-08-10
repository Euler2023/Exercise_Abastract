---
title: "Exercise G16: Symmetries of Plane Figures"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry
  - plane-isometries
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 1, Ex. 1.1, printed p. 188, PDF p. 200"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-fig-6.1.4.png]]"
  - "[[Attachments/artin-algebra-2e-ch06-fig-6.1.6.png]]"
  - "[[Attachments/artin-algebra-2e-ch06-fig-6.1.7.png]]"
created: 2026-08-10
---

# Exercise G16: Symmetries of Plane Figures

## Problem Statement

> [!question] Exercise
> Determine all symmetries of Artin's Figures 6.1.4, 6.1.6, and 6.1.7.
>
> The figures themselves occur on printed p. 155 (PDF p. 167). They are understood to extend indefinitely in both horizontal directions.

## Source Figures

### Figure 6.1.4

![[Attachments/artin-algebra-2e-ch06-fig-6.1.4.png]]

*Glide-symmetry pattern. Source: [S1, Ch. 6, Figure 6.1.4, printed p. 155, PDF p. 167].*

### Figure 6.1.6

![[Attachments/artin-algebra-2e-ch06-fig-6.1.6.png]]

*Pattern combining translation and half-turn symmetry. Source: [S1, Ch. 6, Figure 6.1.6, printed p. 155, PDF p. 167].*

### Figure 6.1.7

![[Attachments/artin-algebra-2e-ch06-fig-6.1.7.png]]

*Alternating upright and inverted figures. Source: [S1, Ch. 6, Figure 6.1.7, printed p. 155, PDF p. 167].*

## Hints

> [!hint]- Hint 1
> First identify the smallest horizontal shift that takes a repeated motif to the next compatible motif. A glide reflection may have a smaller step than a pure translation.

> [!hint]- Hint 2
> Once one motif and its orientation are fixed, an isometry of the entire strip is determined by where that motif goes. Use this to prove that the listed symmetries are exhaustive.

> [!hint]- Hint 3
> Figures 6.1.6 and 6.1.7 have isomorphic abstract symmetry groups, even though their nontranslation symmetries have different geometric forms.

## Solution

> [!success]- Solution
> Let the horizontal spacing between adjacent basic positions be denoted by $a>0$. The symbol $t_c$ denotes horizontal translation by distance $c$.
>
> ### Figure 6.1.4
> Let $g$ be the glide reflection obtained by reflecting in the horizontal baseline and then translating by $a$. It takes each upper leaf to the next lower leaf and each lower leaf to the next upper leaf. Its square is
> $$g^2=t_{2a}.$$
> Thus every power of $g$ is a symmetry:
> $$\langle g\rangle=\{g^n:n\in\mathbb Z\}.$$
> The even powers are translations $t_{2ka}$, and the odd powers are glide reflections.
>
> There are no others. Any symmetry must preserve the unique horizontal baseline and must send an attachment point to an attachment point. The alternating upper/lower orientation then determines whether the shift is an even or odd multiple of $a$, giving respectively an even or odd power of $g$. Hence
> $$\operatorname{Sym}(6.1.4)=\langle g\rangle\cong\mathbb Z.$$
>
> ### Figure 6.1.6
> Let $t$ be translation by one complete repeated calligraphic motif, and let $s$ be a half-turn about one of the visible centers of rotational symmetry. Then
> $$s^2=1,\qquad sts=t^{-1}.$$
> All maps
> $$t^n\quad\text{and}\quad t^ns,\qquad n\in\mathbb Z,$$
> are symmetries. The first family consists of translations, while the second consists of half-turns about the periodically spaced rotation centers.
>
> A symmetry must carry one complete motif to another copy. Its action is then determined by whether it preserves the horizontal direction of the motif or reverses it. These two possibilities give $t^n$ and $t^ns$, respectively. Therefore
> $$\operatorname{Sym}(6.1.6)=\langle t,s\mid s^2=1,\ sts=t^{-1}\rangle\cong D_\infty.$$
>
> ### Figure 6.1.7
> Let $g$ be the horizontal glide reflection that sends one upright figure to the adjacent inverted figure, and let $v$ be reflection in a vertical line through one figure. Then
> $$v^2=1,\qquad vgv=g^{-1},\qquad g^2=t_{2a}.$$
> Every symmetry is of one of the forms
> $$g^n\quad\text{or}\quad g^nv,\qquad n\in\mathbb Z.$$
> More explicitly:
>
> - $g^{2k}$ is a translation;
> - $g^{2k+1}$ is a horizontal glide reflection;
> - $g^{2k}v$ is a reflection in a vertical line through a figure;
> - $g^{2k+1}v$ is a half-turn about a point midway between adjacent figures.
>
> As in the preceding cases, the image and orientation of one figure determine the entire symmetry, so this list is exhaustive. Hence
> $$\operatorname{Sym}(6.1.7)=\langle g,v\mid v^2=1,\ vgv=g^{-1}\rangle\cong D_\infty.$$
>
> Thus Figure 6.1.4 has an infinite cyclic symmetry group, while Figures 6.1.6 and 6.1.7 both have infinite dihedral symmetry groups. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

The two occurrences of $D_\infty$ are geometrically different: Figure 6.1.6 realizes its involutions as half-turns, whereas Figure 6.1.7 also exhibits vertical reflections and glide reflections. The three embedded assets are direct crops from the verified source page rather than redrawings.

**Source status:** The figure and exercise statement are from [S1, Ch. 6, Section 1, printed pp. 155 and 188, PDF pp. 167 and 200]. The classification above is a complete derivation from the displayed motifs, not a solution printed in the source.
