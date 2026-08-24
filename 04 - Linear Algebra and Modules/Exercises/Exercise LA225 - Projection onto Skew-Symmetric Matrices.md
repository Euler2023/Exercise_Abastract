---
title: "Exercise LA225: Projection onto Skew-Symmetric Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-projection
  - skew-symmetric-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.16, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA225: Projection onto Skew-Symmetric Matrices

## Problem Statement

> [!question] Exercise 4.16
> Let $V$ be the real vector space of $3\times3$ matrices with the bilinear form $(A,B)=\operatorname{trace}(A^{\mathsf T}B)$, and let $W$ be the subspace of skew-symmetric matrices. Compute the orthogonal projection to $W$ of the matrix
>
> $$
> M=\begin{pmatrix}1&2&0\\0&0&1\\1&3&0\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Decompose every real square matrix into symmetric and skew-symmetric parts.

> [!hint]- Hint 2
> Symmetric matrices are Frobenius-orthogonal to skew-symmetric matrices.

## Solution

> [!success]- Solution
> Every real square matrix has the orthogonal decomposition
>
> $$
> M=\frac{M+M^{\mathsf T}}2+\frac{M-M^{\mathsf T}}2.
> $$
>
> The first summand is symmetric and the second is skew-symmetric. If $S^{\mathsf T}=S$ and $K^{\mathsf T}=-K$, then
>
> $$
> \operatorname{trace}(S^{\mathsf T}K)
> =\operatorname{trace}(SK)
> =\operatorname{trace}((SK)^{\mathsf T})
> =-\operatorname{trace}(KS)
> =-\operatorname{trace}(SK),
> $$
>
> so the two subspaces are orthogonal. Therefore
>
> $$
> \pi_W(M)=\frac{M-M^{\mathsf T}}2
> =\boxed{\begin{pmatrix}
> 0&1&-1/2\\
> -1&0&-1\\
> 1/2&1&0
> \end{pmatrix}}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The complementary projection onto symmetric matrices is $(M+M^{\mathsf T})/2$.
- **Source status:** The form and displayed matrix were visually verified at [S1, Ch. 8, §4, Ex. 4.16, printed p. 255, PDF p. 267]. The computation is independent.

