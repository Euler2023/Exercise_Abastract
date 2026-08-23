---
title: "Exercise LA61: Four Elementary Matrices Suffice in Dimension Two"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - elementary-matrices
  - factorization
  - general-linear-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.6, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA61: Four Elementary Matrices Suffice in Dimension Two

## Problem Statement

> [!question] Exercise M.6
> Determine the smallest integer $n$ such that every invertible $2\times2$ matrix is a product of at most $n$ elementary matrices.

## Hints

> [!hint]- Hint 1
> Use an $LDU$ factorization when the upper-left entry is nonzero.

> [!hint]- Hint 2
> Find a dense determinant-$-1$ matrix with no entry $\pm1$ for the lower bound.

## Solution

> [!success]- Solution
> The answer is
> 
> $$
> n=4.
> $$
> 
> Let $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$ and $\Delta=ad-bc\ne0$. If $a\ne0$, then
> 
> $$
> A=
> \begin{bmatrix}1&0\\c/a&1\end{bmatrix}
> \begin{bmatrix}a&0\\0&1\end{bmatrix}
> \begin{bmatrix}1&0\\0&\Delta/a\end{bmatrix}
> \begin{bmatrix}1&b/a\\0&1\end{bmatrix}.
> $$
> 
> If $a=0$, then $b,c\ne0$ and
> 
> $$
> A=
> \begin{bmatrix}0&1\\1&0\end{bmatrix}
> \begin{bmatrix}c&0\\0&1\end{bmatrix}
> \begin{bmatrix}1&0\\0&b\end{bmatrix}
> \begin{bmatrix}1&d/c\\0&1\end{bmatrix}.
> $$
> 
> Thus four always suffice.
> 
> For necessity, consider
> 
> $$
> A_0=\begin{bmatrix}2&3\\5&7\end{bmatrix},\qquad \det A_0=-1.
> $$
> 
> A direct classification of products of at most three elementary $2\times2$ matrices gives the obstruction: a dense determinant-$-1$ product of that length must contain exactly one swap or one sign scaling together with two shears, and consequently has at least one entry equal to $1$ or $-1$. Products with two diagonal scalings and one shear are triangular, and all remaining type patterns have a zero entry. Since $A_0$ is dense and has no entry $\pm1$, it needs at least four factors.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.6, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
