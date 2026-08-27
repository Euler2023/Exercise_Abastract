---
title: Matrix Centralizers and Similarity
aliases:
  - Matrix Centralizers
  - Similar Matrices
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - matrix-groups
  - centralizers
  - matrix-similarity
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, printed p. 197, PDF p. 209; exercise applications printed pp. 221–222, PDF pp. 233–234"
source_status: partially-verified
status: not-started
---

# Matrix Centralizers and Similarity

## Definition

> [!info] Similarity
> Matrices $A,B\in M_n(F)$ are **similar** if there is a $P\in GL_n(F)$ such that
>
> $$
> B=PAP^{-1}.
> $$

> [!info] Matrix centralizer
> The centralizer of $A$ in $GL_n(F)$ is
>
> $$
> Z_{GL_n(F)}(A)=\{P\in GL_n(F):PA=AP\}.
> $$

Similarity is conjugacy in the general linear group. It represents the same linear operator written in two different bases.

## Computational Principle

The equation $PAP^{-1}=A$ is equivalent to the linear system $PA=AP$. One first solves this system inside the vector space $M_n(F)$, then keeps only the invertible solutions.

For a finite field,

$$
|C(A)|=\frac{|GL_n(F)|}{|Z_{GL_n(F)}(A)|}.
$$

## Key Properties

1. A commuting matrix preserves every eigenspace and generalized eigenspace of $A$.
2. If $A$ has distinct eigenvalues and one-dimensional eigenspaces, its centralizer is diagonal in an eigenbasis.
3. If an eigenspace has dimension greater than one, the centralizer can act by an arbitrary invertible operator on that eigenspace.
4. The centralizer of a single Jordan block consists of invertible polynomials in its nilpotent part; in matrix form these are upper triangular Toeplitz matrices.
5. Similar matrices have the same characteristic polynomial, minimal polynomial, determinant, trace, rank data, and Jordan type.
6. Conjugacy in $SL_n(F)$ can be finer than conjugacy in $GL_n(F)$ because the determinant of a conjugating matrix cannot always be adjusted to $1$.

## Examples

> [!example] Distinct eigenvalues
> The centralizer of $\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ with distinct $\lambda_i$ consists of invertible diagonal matrices in that eigenbasis.

> [!example] One Jordan block
> The centralizer of $J_3(1)$ in $GL_3(F)$ is
>
> $$
> \left\{\begin{pmatrix}a&b&c\\0&a&b\\0&0&a\end{pmatrix}:a\ne0\right\}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Exercises

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA195 - Centralizers over Finite Fields|Exercise LA195]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA196 - Conjugacy Classes in the Positive Affine Group|Exercise LA196]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA197 - Centralizers of a Half-Turn and a Reflection|Exercise LA197]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA198 - Centralizers of Five Real Three by Three Matrices|Exercise LA198]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA199 - Class Equation of SL2 over F3|Exercise LA199]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA200 - Conjugacy of Two Companion-Type Matrices|Exercise LA200]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA297 - Matrix Orbits under Left Multiplication and Conjugation|Exercise LA297]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA299 - Conjugacy Orbit of a Diagonal Two by Two Matrix|Exercise LA299]]

## Source and Proof Status

Artin explicitly recommends solving $PA=AP$ to compute a matrix centralizer and demonstrates the method in $SL_2(\mathbb F_3)$. [S1, Ch. 7, §2, printed p. 197, PDF p. 209] The general eigenspace and Jordan-block descriptions are standard linear-algebra extensions and are verified in the linked concrete exercises; therefore the overall note is marked `partially-verified` rather than fully source-contained.
