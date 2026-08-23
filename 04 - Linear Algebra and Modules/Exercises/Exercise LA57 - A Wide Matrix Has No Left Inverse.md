---
title: "Exercise LA57: A Wide Matrix Has No Left Inverse"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - one-sided-inverses
  - rank
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.2, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA57: A Wide Matrix Has No Left Inverse

## Problem Statement

> [!question] Exercise M.2
> Let $A$ be an $m\times n$ matrix with $m<n$. Prove that $A$ has no left inverse by comparing it with the square matrix obtained by adding $n-m$ zero rows at the bottom.

## Hints

> [!hint]- Hint 1
> A square matrix with a zero row is not invertible.

## Solution

> [!success]- Solution
> Suppose that an $n\times m$ matrix $L$ satisfied $LA=I_n$. Form
> 
> $$
> \widetilde A=\begin{bmatrix}A\\0\end{bmatrix},
> $$
> 
> an $n\times n$ matrix, and let $\widetilde L=[L\ 0]$. Then
> 
> $$
> \widetilde L\widetilde A=LA=I_n.
> $$
> 
> Thus $\widetilde A$ would have a left inverse and hence, being square, would be invertible. But $\widetilde A$ has $n-m>0$ zero rows and cannot be invertible. This contradiction proves that $A$ has no left inverse.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.2, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
