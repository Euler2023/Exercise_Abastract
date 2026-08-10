---
title: "Exercise G23: Word Reduction in Dihedral Groups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - dihedral-groups
  - group-presentations
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 4, Ex. 4.1, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G23: Word Reduction in Dihedral Groups

## Problem Statement

> [!question] Exercise
> In the dihedral group
> $$D_n=\langle x,y\mid x^n=1,\ y^2=1,\ yx=x^{-1}y\rangle,$$
> write
> $$x^2yx^{-1}y^{-1}x^3y^3$$
> in the form $x^iy^j$.

## Hints

> [!hint]- Hint 1
> Use $y^{-1}=y$ and $y^3=y$.

> [!hint]- Hint 2
> The relation $yx^k=x^{-k}y$ is valid for every integer $k$.

## Solution

> [!success]- Solution
> Since $y^2=1$, we have
> $$y^{-1}=y,\qquad y^3=y.$$
> Also, substituting $k=-1$ into $yx^k=x^{-k}y$ gives
> $$yx^{-1}=xy.$$
> Therefore
> $$
> \begin{aligned}
> x^2yx^{-1}y^{-1}x^3y^3
> &=x^2(yx^{-1})yx^3y\\
> &=x^2(xy)yx^3y\\
> &=x^3x^3y\\
> &=x^6y.
> \end{aligned}
> $$
> Thus the requested normal form is
> $$x^6y,$$
> with the exponent $6$ reduced modulo $n$ if desired. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Binary Operations and Associativity|Binary Operations and Associativity]]

## Notes

The normal forms $x^i$ and $x^iy$ separate rotations from reflections. The rule $yx^k=x^{-k}y$ is the basic rewriting rule that moves every occurrence of $y$ to the right.

**Source status:** The presentation and normal forms are proved in [S1, Ch. 6, Prop. 6.4.3, printed p. 164, PDF p. 176]. The word reduction is carried out completely above.

