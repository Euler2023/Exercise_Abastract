---
title: "Exercise G112: Classification of Frieze Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - frieze-groups
  - discrete-groups
  - classification
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.8, printed p. 189, PDF p. 201"
created: 2026-08-24
---

# Exercise G112: Classification of Frieze Groups

## Problem Statement

> [!question] Exercise 5.8
> Let $N'$ be the group of isometries of the infinite ribbon
>
> $$
> R=\{(x,y)\mid -1\le y\le1\}.
> $$
>
> It can be viewed as a subgroup of the group $M$. The following elements are in $N'$:
>
> $$
> \begin{aligned}
> t_a(x,y)&=(x+a,y),\\
> s(x,y)&=(-x,y),\\
> r(x,y)&=(x,-y),\\
> \rho(x,y)&=(-x,-y).
> \end{aligned}
> $$
>
> **(a)** State and prove analogues of (6.3.3) for these isometries.
>
> **(b)** A frieze pattern is a pattern on the ribbon that is periodic and whose group of symmetries is discrete. Classify the corresponding symmetry groups, identifying those that differ in the choice of origin and unit length on the ribbon. Begin by making some patterns with different symmetries. Make a careful case analysis when proving your results.

## Hints

> [!hint]- Hint 1
> Every element of $N'$ is one of $t_a$, $t_as$, $t_ar$, or $t_a\rho$. Compute how $s,r,\rho$ conjugate $t_a$.

> [!hint]- Hint 2
> Normalize the least positive translation to $t=t_1$. The point group is a subgroup of $\{1,s,r,\rho\}\cong C_2\times C_2$.

> [!hint]- Hint 3
> A lift with orthogonal part $r$ is either the horizontal reflection $r$ or, modulo translations, the half-step glide $t_{1/2}r$. Distinguishing these produces the seventh case.

## Solution

> [!success]- Solution
> ### (a) Relations in $N'$
> Direct substitution gives
>
> $$
> \begin{aligned}
> t_at_b&=t_{a+b},&t_a^{-1}&=t_{-a},\\
> s^2&=r^2=\rho^2=1,&sr&=rs=\rho,\\
> st_as&=t_{-a},&rt_ar&=t_a,\\
> \rho t_a\rho&=t_{-a}.&&
> \end{aligned}
> $$
>
> Equivalently,
>
> $$
> st_a=t_{-a}s,\qquad rt_a=t_ar,\qquad \rho t_a=t_{-a}\rho.
> $$
>
> Every ribbon isometry has one of the four forms $t_a,t_as,t_ar,t_a\rho$: its orthogonal part must preserve the horizontal and vertical axes as unoriented lines, so it is one of $1,s,r,\rho$.
>
> ### (b) Classification
> Let $G$ be a periodic discrete subgroup. Its translation subgroup is $\langle t_c\rangle$ for some least $c>0$. Rescale the horizontal unit so that $c=1$ and write $t=t_1$. The orthogonal-part map has kernel $\langle t\rangle$ and image in $\{1,s,r,\rho\}$.
>
> If an element has orthogonal part $s$, it is $t_as$, reflection in the vertical line $x=a/2$; translating the origin makes it $s$. The same argument centers an element $t_a\rho$ to $\rho$. An element $t_ar$ squares to $t_{2a}$. Modulo integral translations, discreteness and minimality of $t$ force either $a\equiv0$ or $a\equiv1/2\pmod{\mathbb Z}$; these give a horizontal reflection or a half-step glide.
>
> The resulting seven groups are:
>
> $$
> \begin{array}{c|l|l}
> \text{type}&\text{generators}&\text{geometric features}\\ \hline
> 1&\langle t\rangle&\text{translations only}\\
> 2&\langle g=t_{1/2}r\rangle,\ g^2=t&\text{glide only}\\
> 3&\langle t,s\rangle&\text{vertical reflections}\\
> 4&\langle t,r\rangle&\text{horizontal reflection}\\
> 5&\langle t,\rho\rangle&\text{half-turns}\\
> 6&\langle t,s,r\rangle&\text{both mirror families and half-turns}\\
> 7&\langle t,s,t_{1/2}r\rangle&\text{vertical mirrors, glides, and half-turns}
> \end{array}
> $$
>
> Each displayed group is discrete and contains $\langle t\rangle$ with finite index. Conversely, every possible subgroup of the four-element point group and every possible lift has been covered: one nontrivial point-group element yields types 2–5, the full point group yields type 6 or 7 according to whether the $r$-lift is a reflection or a glide, and a two-element point group cannot produce another case after shifting the origin. Hence there are exactly seven frieze-group types up to origin and unit length. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- The seven rows are the classical seven frieze groups; the proof classifies groups, not decorative motifs.
- The phrase “make some patterns” is exploratory guidance in the source. The classification proof does not depend on retaining additional hand-drawn examples.
- **Source status:** The full multipart statement and formulas were checked at [S1, Ch. 6, §5, Ex. 5.8, printed p. 189, PDF p. 201]. The classification above is an independent derivation.

