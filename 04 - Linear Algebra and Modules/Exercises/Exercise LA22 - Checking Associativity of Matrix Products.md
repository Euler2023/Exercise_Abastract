---
title: "Exercise LA22: Checking Associativity of Matrix Products"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - associativity
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.4, printed p. 31, PDF p. 43"
created: 2026-08-23
---

# Exercise LA22: Checking Associativity of Matrix Products

## Problem Statement

> [!question] Exercise 1.4
> Verify associativity for
> 
> $$
> \begin{bmatrix}1&2\\0&1\end{bmatrix}
> \begin{bmatrix}0&1&2\\1&1&3\end{bmatrix}
> \begin{bmatrix}1\\4\\3\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Compute the product of the last two factors first, then the first two.

## Solution

> [!success]- Solution
> Let the three factors be $X,Y,Z$. First,
> 
> $$
> YZ=\begin{bmatrix}10\\14\end{bmatrix},\qquad
> X(YZ)=\begin{bmatrix}38\\14\end{bmatrix}.
> $$
> 
> On the other hand,
> 
> $$
> XY=\begin{bmatrix}2&3&8\\1&1&3\end{bmatrix},
> $$
> 
> and therefore
> 
> $$
> (XY)Z=\begin{bmatrix}38\\14\end{bmatrix}.
> $$
> 
> Both parenthesizations agree.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.4, printed p. 31, PDF p. 43]. The solution is an independent derivation for this vault, not a solution printed in Artin.
