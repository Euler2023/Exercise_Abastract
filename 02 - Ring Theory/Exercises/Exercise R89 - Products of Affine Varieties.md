---
title: "Exercise R89: Products of Affine Varieties"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - algebraic-geometry
  - varieties
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.3, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R89: Products of Affine Varieties

## Problem Statement

> [!question] Exercise 9.3
> Let $U=\{f_i(x_1,\ldots,x_m)=0\}$ and $V=\{g_j(y_1,\ldots,y_n)=0\}$ be varieties in $\mathbb C^m$ and $\mathbb C^n$. Show that the variety in $\mathbb C^{m+n}$ defined by all equations $f_i(x)=0$, $g_j(y)=0$ is the product set $U\times V$.

## Hints

> [!hint]- Hint 1
> Check membership coordinate by coordinate in both directions.

## Solution

> [!success]- Solution
> A point $(x,y)\in\mathbb C^m\times\mathbb C^n$ satisfies all the displayed equations exactly when $f_i(x)=0$ for every $i$ and $g_j(y)=0$ for every $j$. The first condition says $x\in U$ and the second says $y\in V$. Therefore the common zero set is precisely $U\times V$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.3, printed p. 357, PDF p. 369]. The set-theoretic proof is independent.

