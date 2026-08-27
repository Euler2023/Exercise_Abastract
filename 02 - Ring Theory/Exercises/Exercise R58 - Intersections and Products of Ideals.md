---
title: "Exercise R58: Intersections and Products of Ideals"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.13, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R58: Intersections and Products of Ideals

## Problem Statement

> [!question] Exercise 3.13
> Let $I,J$ be ideals of a ring $R$. Prove that $I\cap J$ is an ideal. Show by example that $\{xy:x\in I,y\in J\}$ need not be an ideal, but that the finite sums $\sum_ν x_νy_ν$ form an ideal $IJ$. Is there a relation between $IJ$ and $I\cap J$?

## Hints

> [!hint]- Hint 1
> For failure of closure under addition, take $I=J=(x,y)$ in $\mathbb Q[x,y]$.

## Solution

> [!success]- Solution
> Intersections preserve additive closure, inverses, and absorption, so $I\cap J$ is an ideal.
>
> In $R=\mathbb Q[x,y]$ with $I=J=(x,y)$, both $x^2$ and $y^2$ are single products of elements of $I$ and $J$, but $x^2+y^2$ is irreducible over $\mathbb Q$ and cannot be one such product. Hence the set of single products is not additively closed.
>
> Finite sums of products are closed under addition and negatives, and
>
> $$
> r\sum_ν x_νy_ν=\sum_ν(rx_ν)y_ν,
> $$
>
> so they form the ideal $IJ$. Every product $xy$ lies in both $I$ and $J$, hence
>
> $$
> IJ\subseteq I\cap J.
> $$
>
> Equality need not hold: for $I=J=(x)$, one has $IJ=(x^2)\subsetneq(x)=I\cap J$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.13, printed p. 355, PDF p. 367]. The example and proof are independent.

