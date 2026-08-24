---
title: "Exercise LA285: Quaternion Product Coordinates in SU2"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - special-unitary-group
  - quaternions
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 3, Ex. 3.1, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA285: Quaternion Product Coordinates in SU2

## Problem Statement

> [!question] Exercise 3.1
> Let $P$ and $Q$ be elements of $SU_2$, represented by the real vectors $(x_0,x_1,x_2,x_3)$ and $(y_0,y_1,y_2,y_3)$, respectively. Compute the real vector that corresponds to the product $PQ$.

## Hints

> [!hint]- Hint 1
> Use the quaternion basis $(1,i,j,k)$ with $ij=k$, $jk=i$, and $ki=j$.

> [!hint]- Hint 2
> Separate the scalar and vector parts of the product.

## Solution

> [!success]- Solution
> Write
>
> $$
> P=x_0+x_1i+x_2j+x_3k,
> \qquad
> Q=y_0+y_1i+y_2j+y_3k.
> $$
>
> With $x=(x_1,x_2,x_3)$ and $y=(y_1,y_2,y_3)$, quaternion multiplication gives
>
> $$
> PQ=(x_0y_0-x\cdot y)+(x_0y+y_0x+x\times y)_1i
> +(x_0y+y_0x+x\times y)_2j
> +(x_0y+y_0x+x\times y)_3k.
> $$
>
> Thus the required vector is
>
> $$
> \begin{pmatrix}
> x_0y_0-x_1y_1-x_2y_2-x_3y_3\\
> x_0y_1+x_1y_0+x_2y_3-x_3y_2\\
> x_0y_2-x_1y_3+x_2y_0+x_3y_1\\
> x_0y_3+x_1y_2-x_2y_1+x_3y_0
> \end{pmatrix}.
> $$
>
> Since quaternion norms multiply, the product again has Euclidean norm $1$, as required for an element of $SU_2$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The compact formula is $(x_0,x)(y_0,y)=(x_0y_0-x\cdot y,\ x_0y+y_0x+x\times y)$.
- **Source status:** Artin's coordinate model (9.3.2), quaternion basis (9.3.3), and Ex. 3.1 were checked at [S1, Ch. 9, §9.3, printed pp. 266–267 and 284, PDF pp. 278–279 and 296]. The multiplication is independently expanded.
