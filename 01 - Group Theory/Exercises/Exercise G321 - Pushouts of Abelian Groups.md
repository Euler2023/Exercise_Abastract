---
title: "Exercise G321: Pushouts of Abelian Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
  - pushouts
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 52, printed p. 81, PDF p. 96"
created: 2026-08-28
---

# Exercise G321: Pushouts of Abelian Groups

## Problem Statement

> [!question] Exercise 52 — printed statement
> Show that pushouts exist in the category of abelian groups. The source calls the maps $f,g$ “as above” and gives
>
> $$
> X\oplus_ZY=(X\oplus Y)/W,
> \qquad
> W=\{(f(z),-g(z)):z\in Z\}.
> $$
>
> Show also that a pushout of an injective homomorphism is injective.

> [!warning] Source issue
> “As above” refers literally to Exercise 50, where $f:X\to Z$ and $g:Y\to Z$; those arrows define a pullback, not the displayed pushout. The formula itself shows the intended arrows are $f:Z\to X$ and $g:Z\to Y$. The solution uses this corrected orientation.

## Hints

> [!hint]- Hint 1
> Quotient $X\oplus Y$ by the relations identifying $f(z)$ with $g(z)$.

## Solution

> [!success]- Solution for the corrected arrows
> Let $P=(X\oplus Y)/W$ and define $i_X(x)=[(x,0)]$, $i_Y(y)=[(0,y)]$. Since $(f(z),-g(z))$ vanishes in $P$, one has $i_Xf=i_Yg$. If homomorphisms $u:X\to Q$ and $v:Y\to Q$ satisfy $uf=vg$, then
>
> $$
> (x,y)\longmapsto u(x)+v(y)
> $$
>
> kills $W$ and hence factors uniquely through $P$. This proves the pushout universal property.
>
> Now assume $f$ is injective. Its pushout along $g$ is $i_Y:Y\to P$. If $i_Y(y)=0$, then $(0,y)=(f(z),-g(z))$ for some $z\in Z$. Thus $f(z)=0$, so $z=0$ and then $y=0$. Hence $i_Y$ is injective.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[01 - Group Theory/Exercises/Exercise G319 - Pullbacks of Abelian Groups|Exercise G319]]

## Notes

- **Source issue:** The arrow mismatch is recorded explicitly and not silently repaired.
- **Method boundary:** The construction and injectivity statement also hold for modules over a ring.
- **Source status:** [S2, Ch. I, Ex. 52, printed p. 81, PDF p. 96]. The corrected universal-property proof is independent.
