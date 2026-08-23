---
title: "Exercise LA80: A Nullspace Basis in $\\mathbb R^4$"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - nullspaces
  - bases
  - linear-systems
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.2, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA80: A Nullspace Basis in $\mathbb R^4$

## Problem Statement

> [!question] Exercise 3.2
> Let $W\subset\mathbb R^4$ be the solution space of $AX=0$, where
> 
> $$
> A=\begin{pmatrix}2&1&2&3\\1&1&3&0\end{pmatrix}.
> $$
> 
> Find a basis for $W$.

## Hints

> [!hint]- Hint 1
> Take $x_3$ and $x_4$ as free variables.

## Solution

> [!success]- Solution
> The equations give
> 
> $$
> x_2=-4x_3+3x_4,
> \qquad x_1=x_3-3x_4.
> $$
> 
> Therefore
> 
> $$
> X=x_3\begin{pmatrix}1\\-4\\1\\0\end{pmatrix}
> +x_4\begin{pmatrix}-3\\3\\0\\1\end{pmatrix}.
> $$
> 
> The two displayed vectors are independent and span the nullspace, so they form a basis of $W$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.2, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
