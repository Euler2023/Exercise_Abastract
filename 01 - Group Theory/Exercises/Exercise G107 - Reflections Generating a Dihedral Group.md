---
title: "Exercise G107: Reflections Generating a Dihedral Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - dihedral-groups
  - reflections
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.1, printed p. 188, PDF p. 200"
created: 2026-08-24
---

# Exercise G107: Reflections Generating a Dihedral Group

## Problem Statement

> [!question] Exercise 5.1
> Let $\ell_1$ and $\ell_2$ be lines through the origin in $\mathbb R^2$ that intersect in an angle $\pi/n$, and let $r_i$ be reflection about $\ell_i$. Prove that $r_1$ and $r_2$ generate a dihedral group $D_n$.

## Hints

> [!hint]- Hint 1
> The product of reflections in two intersecting lines is a rotation through twice the oriented angle between the lines.

> [!hint]- Hint 2
> Put $x=r_1r_2$ and $y=r_1$. Verify $x^n=y^2=1$ and $yxy=x^{-1}$, then prove that the resulting $2n$ normal forms are distinct.

## Solution

> [!success]- Solution
> Choose the orientation so that $x=r_1r_2$ is rotation through $2\pi/n$. Hence $x$ has order exactly $n$. Put $y=r_1$. Since a reflection is an involution, $y^2=1$, and
>
> $$
> yxy=r_1(r_1r_2)r_1=r_2r_1=(r_1r_2)^{-1}=x^{-1}.
> $$
>
> Also $r_2=r_1x=yx$, so $\langle r_1,r_2\rangle=\langle x,y\rangle$. The relation $yx=x^{-1}y$ reduces every word to one of
>
> $$
> 1,x,\ldots,x^{n-1},\qquad y,yx,\ldots,yx^{n-1}.
> $$
>
> The first $n$ maps preserve orientation and are distinct rotations. The last $n$ reverse orientation and are distinct because $yx^i=yx^j$ implies $x^i=x^j$. No element in the two rows can coincide because orientation is different. Thus the generated group has $2n$ elements and presentation
>
> $$
> \langle x,y\mid x^n=1,\ y^2=1,\ yxy=x^{-1}\rangle,
> $$
>
> so it is the dihedral group $D_n$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]

## Notes

- The conclusion uses Artin's convention $|D_n|=2n$.
- **Source status:** The problem is from [S1, Ch. 6, §5, Ex. 5.1, printed p. 188, PDF p. 200]. The proof above is an independent derivation.

