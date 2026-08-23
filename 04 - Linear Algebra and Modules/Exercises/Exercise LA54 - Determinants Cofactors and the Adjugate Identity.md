---
title: "Exercise LA54: Determinants, Cofactors, and the Adjugate Identity"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - cofactors
  - adjugate
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 6, Ex. 6.1, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise LA54: Determinants, Cofactors, and the Adjugate Identity

## Problem Statement

> [!question] Exercise 6.1
> For
> 
> $$
> A_1=\begin{bmatrix}1&2\\3&4\end{bmatrix},\quad
> A_2=\begin{bmatrix}1&1&2\\2&4&2\\0&2&1\end{bmatrix},
> $$
> 
> $$
> A_3=\begin{bmatrix}4&-1&1\\1&1&-2\\1&-1&1\end{bmatrix},\quad
> A_4=\begin{bmatrix}a&b&c\\1&0&1\\1&1&1\end{bmatrix},
> $$
> 
> **(a)** compute the determinants by expansion on the bottom row; **(b)** recompute them by the complete expansion; **(c)** compute the cofactor matrices and verify Theorem 1.6.9.

## Hints

> [!hint]- Hint 1
> Theorem 1.6.9 is the adjugate identity $A\operatorname{cof}(A)^{\mathsf T}=(\det A)I$.

## Solution

> [!success]- Solution
> Both expansion methods give
> 
> $$
> \det A_1=-2,\qquad \det A_2=6,\qquad
> \det A_3=-3,\qquad \det A_4=c-a.
> $$
> 
> The cofactor matrices are
> 
> $$
> \operatorname{cof}(A_1)=\begin{bmatrix}4&-3\\-2&1\end{bmatrix},
> $$
> 
> $$
> \operatorname{cof}(A_2)=\begin{bmatrix}0&-2&4\\3&1&-2\\-6&2&2\end{bmatrix},
> $$
> 
> $$
> \operatorname{cof}(A_3)=\begin{bmatrix}-1&-3&-2\\0&3&3\\1&9&5\end{bmatrix},
> $$
> 
> and
> 
> $$
> \operatorname{cof}(A_4)=\begin{bmatrix}-1&0&1\\c-b&a-c&b-a\\b&c-a&-b\end{bmatrix}.
> $$
> 
> Multiplying each $A_i$ by the transpose of its displayed cofactor matrix gives $(\det A_i)I$. Off-diagonal entries vanish because they are determinants with two equal rows, while a diagonal entry is the cofactor expansion of $\det A_i$. This verifies Theorem 1.6.9 uniformly, as well as by direct computation in the four cases.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §6, Ex. 6.1, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
