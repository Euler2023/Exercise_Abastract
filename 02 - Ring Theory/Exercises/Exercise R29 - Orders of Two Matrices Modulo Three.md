---
title: "Exercise R29: Orders of Two Matrices Modulo 3"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - matrix-groups
  - orders
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 9, Ex. 9.7, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise R29: Orders of Two Matrices Modulo 3

## Problem Statement

> [!question] Exercise 9.7
> Over $\mathbb F_3$, determine the orders of
> 
> $$
> A=\begin{bmatrix}1&1\\0&1\end{bmatrix},\qquad
> B=\begin{bmatrix}1&1\\1&0\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Write $A=I+N$ with $N^2=0$.

> [!hint]- Hint 2
> Compute powers of $B$ until a scalar matrix appears.

## Solution

> [!success]- Solution
> Since $A=I+N$ with $N^2=0$, in characteristic $3$,
> 
> $$
> A^3=I+3N=I,
> $$
> 
> and $A\ne I$, so $|A|=3$.
> 
> For $B$,
> 
> $$
> B^2=\begin{bmatrix}2&1\\1&1\end{bmatrix},\quad
> B^3=\begin{bmatrix}0&2\\2&1\end{bmatrix},\quad
> B^4=2I=-I.
> $$
> 
> Therefore $B^8=I$, while none of $B,B^2,B^4$ is $I$. Hence $|B|=8$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §9, Ex. 9.7, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
