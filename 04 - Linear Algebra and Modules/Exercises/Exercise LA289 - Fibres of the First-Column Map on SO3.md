---
title: "Exercise LA289: Fibres of the First-Column Map on SO3"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - special-orthogonal-group
  - fibres
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.2, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA289: Fibres of the First-Column Map on SO3

## Problem Statement

> [!question] Exercise 4.2
> The rotation group $SO_3$ may be mapped to a $2$-sphere by sending a rotation matrix to its first column. Describe the fibres of this map.

## Hints

> [!hint]- Hint 1
> The first column of $P$ is $Pe_1$.

> [!hint]- Hint 2
> Compare two matrices $P,Q$ satisfying $Pe_1=Qe_1$.

## Solution

> [!success]- Solution
> Let
>
> $$
> c:SO_3\longrightarrow S^2,
> \qquad c(P)=Pe_1,
> $$
>
> and let
>
> $$
> H_1=\{R\in SO_3:Re_1=e_1\}.
> $$
>
> The group $H_1$ consists of rotations about the $x_1$-axis and is isomorphic to $SO_2$. Fix $v\in S^2$ and choose $P_0\in SO_3$ with $P_0e_1=v$. Then
>
> $$
> c(P)=v
> \iff P_0^{-1}Pe_1=e_1
> \iff P_0^{-1}P\in H_1.
> $$
>
> Hence
>
> $$
> c^{-1}(v)=P_0H_1.
> $$
>
> Every fibre is therefore a right coset of $H_1$, and topologically it is a circle. Geometrically, once the first column is fixed, the other two columns may be rotated together through any angle in the oriented plane $v^{\perp}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- This realizes $SO_3/H_1\cong S^2$.
- **Source status:** Ex. 4.2 was checked at [S1, Ch. 9, §9.4, printed p. 284, PDF p. 296]. The coset description is independently derived.

