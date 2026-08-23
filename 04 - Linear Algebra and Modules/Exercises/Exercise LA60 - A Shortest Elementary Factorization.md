---
title: "Exercise LA60: A Shortest Elementary Factorization"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - elementary-matrices
  - factorization
  - row-reduction
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.5, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA60: A Shortest Elementary Factorization

## Problem Statement

> [!question] Exercise M.5
> Write
> 
> $$
> \begin{bmatrix}1&2\\3&4\end{bmatrix}
> $$
> 
> as a product of elementary matrices, using as few as possible, and prove minimality.

## Hints

> [!hint]- Hint 1
> An $LDU$ factorization gives three factors.

> [!hint]- Hint 2
> Classify products of two elementary $2\times2$ matrices by their zero patterns.

## Solution

> [!success]- Solution
> A factorization into three elementary matrices is
> 
> $$
> \begin{bmatrix}1&2\\3&4\end{bmatrix}
> =\begin{bmatrix}1&0\\3&1\end{bmatrix}
> \begin{bmatrix}1&0\\0&-2\end{bmatrix}
> \begin{bmatrix}1&2\\0&1\end{bmatrix}.
> $$
> 
> It cannot be one elementary matrix because all four entries are nonzero and it is not of any of the three elementary types.
> 
> For two factors, a dense product can only come from one upper and one lower shear; products involving only diagonal or swap types retain a zero entry. The two possible shear products are
> 
> $$
> \begin{bmatrix}1&a\\0&1\end{bmatrix}
> \begin{bmatrix}1&0\\b&1\end{bmatrix}
> =\begin{bmatrix}1+ab&a\\b&1\end{bmatrix}
> $$
> 
> and the reverse product, which has upper-left entry $1$. Neither equals the target: the first has lower-right entry $1$, while in the reverse product the upper-left entry is $1$ but its lower-right entry would be $1+3\cdot2=7$, not $4$. Thus two factors are impossible, and three is minimal.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.5, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
