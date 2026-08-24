---
title: "Exercise Rep28: Lie Algebra of a Quadratic Diagonal Matrix Group"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - matrix-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.4, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep28: Lie Algebra of a Quadratic Diagonal Matrix Group

## Problem Statement

> [!question] Exercise 6.4
> Let $G$ be the group of invertible real matrices of the form $\begin{pmatrix}a&b\\0&a^2\end{pmatrix}$. Determine the Lie algebra $L$ of $G$, and compute the bracket on $L$.

## Hints

> [!hint]- Hint 1
> Differentiate $a(t)^2$ at $a(0)=1$.

## Solution

> [!success]- Solution
> Differentiating a path through the identity gives
>
> $$
> L=\left\{X(x,y)=\begin{pmatrix}x&y\\0&2x\end{pmatrix}:x,y\in\mathbb R\right\}.
> $$
>
> Direct multiplication yields
>
> $$
> [X(x,y),X(u,v)]=X(0,uy-xv).
> $$
>
> Thus, for $H=X(1,0)$ and $E=X(0,1)$, one has $[H,E]=-E$. This is the nonabelian two-dimensional Lie algebra. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- **Source status:** The matrix shape and Ex. 6.4 were visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The tangent and bracket computations are independent.
