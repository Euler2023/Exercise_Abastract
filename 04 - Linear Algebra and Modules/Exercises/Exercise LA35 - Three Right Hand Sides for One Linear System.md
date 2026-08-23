---
title: "Exercise LA35: Three Right-Hand Sides for One Linear System"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-systems
  - row-reduction
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.2, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA35: Three Right-Hand Sides for One Linear System

## Problem Statement

> [!question] Exercise 2.2
> Find all solutions of $AX=B$ for
> 
> $$
> A=\begin{bmatrix}1&2&1&1\\3&0&0&4\\1&-4&-2&2\end{bmatrix}
> $$
> 
> and $B=(0,0,0)^{\mathsf T}$, $(1,1,0)^{\mathsf T}$, or $(0,2,2)^{\mathsf T}$.

## Hints

> [!hint]- Hint 1
> Elimination shows that consistency requires $b_2=2b_1+b_3$.

## Solution

> [!success]- Solution
> For a general $B=(b_1,b_2,b_3)^{\mathsf T}$, consistency is equivalent to
> 
> $$
> b_2=2b_1+b_3.
> $$
> 
> When this holds, taking $x_3=s$ and $x_4=t$ gives
> 
> $$
> x_1=\frac{b_2-4t}{3},\qquad
> x_2=\frac{3b_1-b_2-3s+t}{6}.
> $$
> 
> Therefore:
> 
> **(a)** For $B=0$,
> 
> $$
> X=\begin{bmatrix}-\frac43t\\-\frac12s+\frac16t\\s\\t\end{bmatrix}.
> $$
> 
> **(b)** For $B=(1,1,0)^{\mathsf T}$, the consistency equation fails, so there is no solution.
> 
> **(c)** For $B=(0,2,2)^{\mathsf T}$,
> 
> $$
> X=\begin{bmatrix}\frac23-\frac43t\\-\frac13-\frac12s+\frac16t\\s\\t\end{bmatrix}.
> $$
> 
> Here $s,t$ are arbitrary scalars.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.2, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
