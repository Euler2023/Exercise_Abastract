---
title: "Exercise G133: Euler Decomposition and Double Cosets in SO3"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - double-cosets
  - special-orthogonal-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.9, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise G133: Euler Decomposition and Double Cosets in SO3

## Problem Statement

> [!question] Exercise 4.9
> (a) Let $H_i$ be the subgroup of $SO_3$ of rotations about the $x_i$-axis, $i=1,2,3$. Prove that every element of $SO_3$ can be written as a product $ABA'$, where $A$ and $A'$ are in $H_1$ and $B$ is in $H_2$. Prove that this representation is unique unless $B=I$.
>
> (b) Describe the double cosets $H_1QH_1$ geometrically (see Chapter 2, Exercise M.9).
>
> [!warning] Source issue
> The printed uniqueness claim misses a second degenerate case: nonuniqueness also occurs when $B$ is rotation through $\pi$. Uniqueness holds after fixing the middle angle $0<\beta<\pi$; both endpoints require separate treatment.

## Hints

> [!hint]- Hint 1
> For $Q\in SO_3$, first use a rotation $B\in H_2$ to match the $x_1$-coordinate of $Qe_1$.

> [!hint]- Hint 2
> The scalar $e_1^{\mathsf T}Qe_1$ is invariant under multiplication by $H_1$ on either side.

## Solution

> [!success]- Solution
> **(a)** Let $v=Qe_1$. Choose the unique $\beta\in[0,\pi]$ such that
>
> $$
> \cos\beta=e_1^{\mathsf T}v.
> $$
>
> Let $B\in H_2$ be rotation through $\beta$, choosing its orientation so that $Be_1$ has the same first coordinate as $v$. The subgroup $H_1$ rotates every latitude about the $x_1$-axis transitively, so there is $A\in H_1$ such that $ABe_1=v$. Then
>
> $$
> A'=(AB)^{-1}Q
> $$
>
> fixes $e_1$, hence $A'\in H_1$, and $Q=ABA'$.
>
> When $0<\beta<\pi$, the point $Be_1$ is not on the $x_1$-axis, so $A$ is uniquely determined by $v$, and then so is $A'$. At $\beta=0$, one may transfer an arbitrary factor of $H_1$ between $A$ and $A'$. At $\beta=\pi$, $Be_1=-e_1$ is again fixed by $H_1$, and the same kind of nonuniqueness occurs.
>
> **(b)** If $A,A'\in H_1$, then
>
> $$
> e_1^{\mathsf T}(AQA')e_1=e_1^{\mathsf T}Qe_1.
> $$
>
> Conversely, part (a) shows that two matrices with the same value of this scalar have the same middle angle $\beta$ and lie in the same double coset. Therefore
>
> $$
> H_1\backslash SO_3/H_1\ \longleftrightarrow\ [-1,1],
> \qquad
> H_1QH_1\longmapsto e_1^{\mathsf T}Qe_1=\cos\beta.
> $$
>
> Geometrically, the double coset records the latitude of the first column $Qe_1$ relative to the $x_1$-axis.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- This is an Euler-angle decomposition adapted to the axes $x_1,x_2,x_1$.
- **Source issue:** The additional $\beta=\pi$ degeneracy follows because a half-turn in $H_2$ sends $e_1$ to $-e_1$, which is fixed by all of $H_1$.
- **Source status:** Ex. 4.9 was checked at [S1, Ch. 9, §9.4, printed p. 285, PDF p. 297]. The decomposition, double-coset invariant, and correction to the uniqueness claim are independent.
