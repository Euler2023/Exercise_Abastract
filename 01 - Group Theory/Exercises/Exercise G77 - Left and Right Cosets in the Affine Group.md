---
title: "Exercise G77: Left and Right Cosets in the Affine Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - cosets
  - matrix-groups
  - affine-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.11, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise G77: Left and Right Cosets in the Affine Group

## Problem Statement

> [!question] Exercise 8.11
> Let
> 
> $$
> G=\left\{\begin{bmatrix}x&y\\0&1\end{bmatrix}:x>0\right\},\qquad
> H=\left\{\begin{bmatrix}x&0\\0&1\end{bmatrix}:x>0\right\}.
> $$
> 
> Represent elements by points $(x,y)$ in the right half-plane and describe the left- and right-coset partitions.

## Hints

> [!hint]- Hint 1
> Multiply a general element by $\begin{bmatrix}a&0\0&1\end{bmatrix}$ on each side.

## Solution

> [!success]- Solution
> For $g=(x,y)$ and $h=(a,0)$ in matrix coordinates,
> 
> $$
> gh=(xa,y).
> $$
> 
> Thus a left coset $gH$ has fixed $y$ and arbitrary positive first coordinate: the left cosets are horizontal lines in the right half-plane.
> 
> On the other hand,
> 
> $$
> hg=(ax,ay).
> $$
> 
> Thus a right coset has fixed ratio $y/x$: the right cosets are open rays from the origin lying in the right half-plane. The two partitions differ, so $H$ is not normal.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.11, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
