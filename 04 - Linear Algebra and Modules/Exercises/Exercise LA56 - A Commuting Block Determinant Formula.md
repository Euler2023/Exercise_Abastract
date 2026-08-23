---
title: "Exercise LA56: A Commuting Block-Determinant Formula"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - block-matrices
  - commuting-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.1, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA56: A Commuting Block-Determinant Formula

## Problem Statement

> [!question] Exercise M.1
> Let
> 
> $$
> M=\begin{bmatrix}A&B\\C&D\end{bmatrix}
> $$
> 
> be a $2n\times2n$ block matrix with $n\times n$ blocks. Suppose $A$ is invertible and $AC=CA$. Prove
> 
> $$
> \det M=\det(AD-CB).
> $$
> 
> Give an example showing that the formula can fail when $AC\ne CA$.

## Hints

> [!hint]- Hint 1
> Use block elimination to obtain a Schur complement.

> [!hint]- Hint 2
> Use $AC=CA$ to move $A$ past $C$.

## Solution

> [!success]- Solution
> Left block elimination gives
> 
> $$
> \begin{bmatrix}I&0\\-CA^{-1}&I\end{bmatrix}
> \begin{bmatrix}A&B\\C&D\end{bmatrix}
> =\begin{bmatrix}A&B\\0&D-CA^{-1}B\end{bmatrix}.
> $$
> 
> The eliminating matrix has determinant $1$, so
> 
> $$
> \det M=\det A\det(D-CA^{-1}B).
> $$
> 
> Because $AC=CA$, also $ACA^{-1}=C$, and hence
> 
> $$
> A(D-CA^{-1}B)=AD-CB.
> $$
> 
> Taking determinants proves the formula.
> 
> For failure without commutation, take
> 
> $$
> A=\begin{bmatrix}1&0\\0&2\end{bmatrix},\quad B=I_2,\quad
> C=\begin{bmatrix}0&1\\0&0\end{bmatrix},\quad
> D=\begin{bmatrix}0&0\\1&0\end{bmatrix}.
> $$
> 
> Here $AC\ne CA$. Direct calculation gives $\det M=1$, whereas
> 
> $$
> \det(AD-CB)=2.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.1, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
