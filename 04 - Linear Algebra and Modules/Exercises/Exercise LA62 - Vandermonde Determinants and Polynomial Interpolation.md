---
title: "Exercise LA62: Vandermonde Determinants and Polynomial Interpolation"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - vandermonde
  - polynomial-interpolation
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.7, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA62: Vandermonde Determinants and Polynomial Interpolation

## Problem Statement

> [!question] Exercise M.7
> **(a)** Prove
> 
> $$
> \det\begin{bmatrix}1&1&1\\a&b&c\\a^2&b^2&c^2\end{bmatrix}
> =(a-b)(b-c)(c-a).
> $$
> 
> **(b)** Prove the analogous $n\times n$ formula using row operations to clear the first column.
> 
> **(c)** Use it to prove that there is a unique polynomial $p(t)$ of degree $n$ taking arbitrary prescribed values at $n+1$ distinct points $t_0,\ldots,t_n$.

## Hints

> [!hint]- Hint 1
> Subtract the first column from the remaining columns and factor the differences.

> [!hint]- Hint 2
> The interpolation equations have a Vandermonde coefficient matrix.

## Solution

> [!success]- Solution
> Subtracting the first column from the other two gives factors $b-a$ and $c-a$; expansion of the remaining $2\times2$ determinant gives the third factor. Hence
> 
> $$
> \det\begin{bmatrix}1&1&1\\a&b&c\\a^2&b^2&c^2\end{bmatrix}
> =(b-a)(c-a)(c-b)=(a-b)(b-c)(c-a).
> $$
> 
> The same subtraction in the $n\times n$ case, followed by factoring $x_j-x_1$ from column $j$, reduces inductively to
> 
> $$
> \det(x_j^{i-1})_{1\le i,j\le n}=\prod_{1\le i<j\le n}(x_j-x_i).
> $$
> 
> For interpolation, write $p(t)=c_0+c_1t+\cdots+c_nt^n$. The conditions $p(t_i)=y_i$ form a linear system whose determinant is
> 
> $$
> \prod_{0\le i<j\le n}(t_j-t_i)\ne0.
> $$
> 
> Therefore the coefficient vector $(c_0,\ldots,c_n)$ exists and is unique. The conclusion is correctly read as degree **at most** $n$; it has exact degree $n$ only when $c_n\ne0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA9 - Vandermonde Determinant|Exercise LA9: Vandermonde Determinant]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.7, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Source issue:** The printed phrase “of degree $n$” is too strong for arbitrary prescribed values (for example, constant data). The intended and proved statement is “of degree at most $n$”; the printed wording is preserved above and corrected visibly here.
