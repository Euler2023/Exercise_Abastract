---
title: "Exercise R10: The Discriminant Is Symmetric"
topic: ring-theory
difficulty: beginner
status: not-started
tags: [exercise, ring-theory, discriminant]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 2, Ex. 2.1, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise R10: The Discriminant Is Symmetric

## Problem Statement

> [!question] Exercise 2.1
> Prove that the discriminant is a symmetric function.

## Hints

> [!hint]- Hint 1
> A permutation only permutes the unordered pairs $\{i,j\}$.

## Solution

> [!success]- Solution
> For roots $u_1,\ldots,u_n$,
> $$
> D(u)=\prod_{i<j}(u_i-u_j)^2.
> $$
> A permutation preserves the set of unordered pairs, and the squares remove orientations. Hence $D(u_{\sigma(1)},\ldots,u_{\sigma(n)})=D(u)$, so $D$ is symmetric and is a polynomial in the elementary symmetric functions.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

Independent proof of [S1, printed p. 506, PDF p. 518].
