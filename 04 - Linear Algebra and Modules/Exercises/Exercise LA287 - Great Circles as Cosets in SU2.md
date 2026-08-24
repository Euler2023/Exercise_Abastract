---
title: "Exercise LA287: Great Circles as Cosets in SU2"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - special-unitary-group
  - matrix-topology
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 3, Ex. 3.3, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA287: Great Circles as Cosets in SU2

## Problem Statement

> [!question] Exercise 3.3
> Prove that every great circle in $SU_2$ (circle of radius $1$) is a coset of one of the longitudes.

## Hints

> [!hint]- Hint 1
> Choose a point $P$ on the great circle and left-translate the circle by $P^{-1}$.

> [!hint]- Hint 2
> Left multiplication by a unit quaternion is an orthogonal transformation of $\mathbb R^4$.

## Solution

> [!success]- Solution
> Identify $SU_2$ with the unit sphere $S^3$ in the quaternion algebra. Let $C=S^3\cap W$ be a great circle, where $W$ is a two-dimensional real subspace of $\mathbb R^4$, and choose $P\in C$.
>
> Quaternion norm is multiplicative, so left multiplication
>
> $$
> L_{P^{-1}}:X\longmapsto P^{-1}X
> $$
>
> preserves Euclidean norm. It is therefore an orthogonal linear map of $\mathbb R^4$. Hence
>
> $$
> L=P^{-1}C=S^3\cap P^{-1}W
> $$
>
> is again a great circle. Since $P^{-1}P=I$, this circle contains the north pole $I$ and is therefore a longitude in Artin's terminology. Consequently,
>
> $$
> C=PL,
> $$
>
> a left coset of a longitude. Conversely, an orthogonal left translate of a longitude is a great circle, so these are exactly all great circles in $SU_2$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- Artin proves that the longitudes themselves are conjugate circle subgroups in Proposition 9.3.9.
- **Source status:** The definition of longitudes and the exercise were checked at [S1, Ch. 9, §§9.2–9.3 and Ex. 3.3, printed pp. 265–268 and 284, PDF pp. 277–280 and 296]. The coset proof is independent.
