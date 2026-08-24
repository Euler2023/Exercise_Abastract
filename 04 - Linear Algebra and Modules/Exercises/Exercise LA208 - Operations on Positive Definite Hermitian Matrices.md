---
title: "Exercise LA208: Operations on Positive Definite Hermitian Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-matrices
  - positive-definite-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 3, Ex. 3.5, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA208: Operations on Positive Definite Hermitian Matrices

## Problem Statement

> [!question] Exercise 3.5
> Let $A$ and $B$ be positive definite Hermitian matrices. Decide which of the following matrices are necessarily positive definite Hermitian: $A^2$, $A^{-1}$, $AB$, $A+B$.

## Hints

> [!hint]- Hint 1
> Treat the four matrices separately. Positive definite matrices are invertible.

> [!hint]- Hint 2
> For the product $AB$, first ask when $(AB)^*=AB$; try two positive definite real symmetric matrices that do not commute.

## Solution

> [!success]- Solution
> The matrices $A^2$, $A^{-1}$, and $A+B$ are necessarily positive definite Hermitian. The product $AB$ is not necessarily Hermitian.
>
> Since $A^*=A$,
>
> $$
> A^2=A^*A.
> $$
>
> Positive definiteness makes $A$ invertible, so Exercise 3.4 implies that $A^2$ is positive definite Hermitian.
>
> Next,
>
> $$
> (A^{-1})^*=(A^*)^{-1}=A^{-1},
> $$
>
> so $A^{-1}$ is Hermitian. Given $X\ne0$, write $X=AY$ with $Y\ne0$. Then
>
> $$
> X^*A^{-1}X=(AY)^*A^{-1}(AY)=Y^*AY>0.
> $$
>
> Thus $A^{-1}$ is positive definite.
>
> Also,
>
> $$
> (A+B)^*=A+B,
> \qquad
> X^*(A+B)X=X^*AX+X^*BX>0
> $$
>
> for every $X\ne0$. Hence $A+B$ is positive definite Hermitian.
>
> Finally,
>
> $$
> (AB)^*=BA,
> $$
>
> so $AB$ is Hermitian exactly when $A$ and $B$ commute. For a counterexample, take
>
> $$
> A=\begin{pmatrix}1&0\\0&2\end{pmatrix},
> \qquad
> B=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
> $$
>
> Both are positive definite real symmetric matrices: $A$ has eigenvalues $1,2$, and $B$ has eigenvalues $1,3$. But
>
> $$
> AB=\begin{pmatrix}2&1\\2&4\end{pmatrix}
> $$
>
> is not symmetric and therefore not Hermitian. So $AB$ is not necessarily positive definite Hermitian.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- If $A$ and $B$ commute, then $AB$ is Hermitian and is positive definite; simultaneous unitary diagonalization reduces the claim to products of positive eigenvalues.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §3, Ex. 3.5, printed p. 254, PDF p. 266]. The solution and counterexample are independent.

