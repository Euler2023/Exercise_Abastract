---
title: "Exercise LA18: Determinant of an Integral Skew-Symmetric Matrix"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - determinants
  - pfaffians
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.4, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA18: Determinant of an Integral Skew-Symmetric Matrix

## Problem Statement

> [!question] Exercise 8.4
> Let $A$ be a real skew-symmetric matrix.
>
> **(a)** Prove that $\det A\geq0$.
>
> **(b)** Prove that if $A$ has integer entries, then $\det A$ is the square of an integer.

## Hints

> [!hint]- Hint 1
> Use the real skew-symmetric normal form: orthogonally, $A$ is a direct sum of blocks $\begin{pmatrix}0&\lambda\\-\lambda&0\end{pmatrix}$ and possibly a zero block.

> [!hint]- Hint 2
> For part (b), define the Pfaffian as a signed sum over perfect matchings. Show by exterior algebra that its square is the determinant.

## Solution

> [!success]- Solution
> ### (a) Nonnegativity
>
> A real skew-symmetric matrix has an orthogonal normal form consisting of $2\times2$ blocks
>
> $$
> J(\lambda_i)=\begin{pmatrix}0&\lambda_i\\-\lambda_i&0\end{pmatrix}
> $$
>
> and, in odd dimension or in the singular case, zero blocks. Each nonzero block has determinant $\lambda_i^2$. Hence
>
> $$
> \det A=\prod_i\lambda_i^2\geq0,
> $$
>
> with value zero when a zero block occurs.
>
> ### (b) Integrality and the square
>
> If the size of $A$ is odd, then
>
> $$
> \det A=\det A^{\mathsf T}=\det(-A)=(-1)^n\det A=-\det A,
> $$
>
> so $\det A=0=0^2$. Now suppose $A=(a_{ij})$ has size $2m$.
>
> Define its Pfaffian by
>
> $$
> \operatorname{Pf}(A)
> =\frac{1}{2^m m!}
> \sum_{\sigma\in S_{2m}}
> \operatorname{sgn}(\sigma)
> \prod_{k=1}^m a_{\sigma(2k-1),\sigma(2k)}.
> $$
>
> Grouping the permutations that determine the same perfect matching cancels the denominator and expresses $\operatorname{Pf}(A)$ as a signed sum of products of entries. Thus $\operatorname{Pf}(A)\in\mathbb Z$ when all $a_{ij}$ are integers.
>
> It remains to justify the determinant identity. Let $e_1,\ldots,e_{2m}$ be a basis and set
>
> $$
> \omega=\sum_{i<j}a_{ij}e_i\wedge e_j.
> $$
>
> Expanding the $m$-fold exterior product gives
>
> $$
> \frac{\omega^m}{m!}
> =\operatorname{Pf}(A)e_1\wedge\cdots\wedge e_{2m}.
> $$
>
> Under a change of basis with matrix $P$, the representing matrix becomes $P^{\mathsf T}AP$, while the top exterior product is multiplied by $\det P$. Therefore
>
> $$
> \operatorname{Pf}(P^{\mathsf T}AP)=\det(P)\operatorname{Pf}(A).
> $$
>
> Over $\mathbb R$, apply the skew-symmetric normal form from part (a). For one block, $\operatorname{Pf}(J(\lambda))=\lambda$; for a block diagonal sum, the exterior-product definition makes Pfaffians multiply. Hence for the normal form $D$,
>
> $$
> \operatorname{Pf}(D)^2=\det D.
> $$
>
> Congruence covariance then gives the same identity for $A$:
>
> $$
> \det A=\operatorname{Pf}(A)^2.
> $$
>
> Since $\operatorname{Pf}(A)$ is an integer, $\det A$ is the square of an integer. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]

## Notes

- **Source status:** The statement is [S1, Ch. 8, Exercises §8, Ex. 8.4, printed p. 258, PDF p. 270]. Artin marks the exercise with an asterisk. The solution is independently derived.
- **Proof boundary:** The real skew-symmetric normal form is the spectral-theorem version of Artin's standard-form result. The Pfaffian identity is proved in the note through its exterior-algebra definition rather than merely imported.
