---
title: "Exercise G55: $GL_2$ Conjugacy versus $SL_2$ Conjugacy"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - conjugation
  - matrix-groups
  - special-linear-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.6, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G55: $GL_2$ Conjugacy versus $SL_2$ Conjugacy

## Problem Statement

> [!question] Exercise 6.6
> Are
> 
> $$
> U=\begin{bmatrix}1&1\\0&1\end{bmatrix},\qquad
> L=\begin{bmatrix}1&0\\1&1\end{bmatrix}
> $$
> 
> conjugate in $GL_2(\mathbb R)$? Are they conjugate in $SL_2(\mathbb R)$?

## Hints

> [!hint]- Hint 1
> The swap matrix conjugates upper to lower.

> [!hint]- Hint 2
> Solve $PU=LP$ and inspect $\det P$.

## Solution

> [!success]- Solution
> The swap matrix $S=\begin{bmatrix}0&1\\1&0\end{bmatrix}$ satisfies $SUS^{-1}=L$, so the matrices are conjugate in $GL_2(\mathbb R)$.
> 
> If $P=\begin{bmatrix}a&b\\c&d\end{bmatrix}$ satisfies $PU=LP$, comparison of entries gives
> 
> $$
> a=0,\qquad c=b.
> $$
> 
> Thus $P=\begin{bmatrix}0&b\\b&d\end{bmatrix}$ and
> 
> $$
> \det P=-b^2<0
> $$
> 
> for every invertible solution. No such $P$ has determinant $1$. Hence $U$ and $L$ are not conjugate in $SL_2(\mathbb R)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.6, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
