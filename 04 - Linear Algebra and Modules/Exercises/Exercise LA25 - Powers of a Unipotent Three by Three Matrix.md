---
title: "Exercise LA25: Powers of a Unipotent Three-by-Three Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - nilpotent-matrices
  - induction
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.7, printed p. 31, PDF p. 43"
created: 2026-08-23
---

# Exercise LA25: Powers of a Unipotent Three-by-Three Matrix

## Problem Statement

> [!question] Exercise 1.7
> Find a formula for
> 
> $$
> \begin{bmatrix}1&1&1\\0&1&1\\0&0&1\end{bmatrix}^{n}
> $$
> 
> and prove it by induction.

## Hints

> [!hint]- Hint 1
> Write the matrix as $I+N$ and compute $N^2,N^3$.

## Solution

> [!success]- Solution
> Let
> 
> $$
> N=\begin{bmatrix}0&1&1\\0&0&1\\0&0&0\end{bmatrix}.
> $$
> 
> Then $N^2=e_{13}$ and $N^3=0$. The binomial formula is valid because $I$ commutes with $N$, so
> 
> $$
> (I+N)^n=I+nN+\binom n2N^2.
> $$
> 
> Consequently
> 
> $$
> \begin{bmatrix}1&1&1\\0&1&1\\0&0&1\end{bmatrix}^{n}
> =\begin{bmatrix}
> 1&n&\frac{n(n+1)}2\\
> 0&1&n\\
> 0&0&1
> \end{bmatrix}.
> $$
> 
> Multiplying the displayed formula for $n$ by the original matrix produces the formula for $n+1$, since $\frac{n(n+1)}2+n+1=\frac{(n+1)(n+2)}2$; this also supplies the requested induction proof.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.7, printed p. 31, PDF p. 43]. The solution is an independent derivation for this vault, not a solution printed in Artin.
