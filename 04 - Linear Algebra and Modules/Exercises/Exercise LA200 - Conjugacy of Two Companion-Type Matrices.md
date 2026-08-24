---
title: "Exercise LA200: Conjugacy of Two Companion-Type Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-similarity
  - special-linear-groups
  - source-issue
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.18, printed p. 222, PDF p. 234"
created: 2026-08-24
---

# Exercise LA200: Conjugacy of Two Companion-Type Matrices

## Problem Statement

> [!question] Exercise 2.18 — printed statement
> Which pairs of matrices
>
> $$
> A_d=\begin{pmatrix}0&1\\-1&d\end{pmatrix},\qquad
> B_d=\begin{pmatrix}0&-1\\1&d\end{pmatrix}
> $$
>
> are conjugate elements of **(a)** $GL_n(\mathbb R)$, **(b)** $SL_n(\mathbb R)$?

> [!warning] Source issue
> The printed matrices are $2\times2$, but the ambient groups are printed as $GL_n(\mathbb R)$ and $SL_n(\mathbb R)$. The dimension is incompatible unless $n=2$. The solution below preserves the printed wording above and then solves the evident intended problem in $GL_2(\mathbb R)$ and $SL_2(\mathbb R)$.

## Hints

> [!hint]- Hint 1
> Solve $PA_d=B_dP$ for $P=\begin{pmatrix}a&b\\c&e\end{pmatrix}$.

> [!hint]- Hint 2
> For $SL_2$, determine when the quadratic form $a^2+dab+b^2$ represents $-1$ over $\mathbb R$.

## Solution

> [!success]- Solution
> The equation $PA_d=B_dP$ gives
>
> $$
> c=b,\qquad e=-a-db.
> $$
>
> Thus every intertwiner has the form
>
> $$
> P=\begin{pmatrix}a&b\\b&-a-db\end{pmatrix},
> \qquad
> \det P=-\bigl(a^2+dab+b^2\bigr).
> $$
>
> ### (a) Conjugacy in $GL_2(\mathbb R)$
> Taking $(a,b)=(1,0)$ gives $P=\operatorname{diag}(1,-1)$ with determinant $-1$. Hence $A_d$ and $B_d$ are conjugate in $GL_2(\mathbb R)$ for every real $d$.
>
> ### (b) Conjugacy in $SL_2(\mathbb R)$
> We need $\det P=1$, equivalently
>
> $$
> a^2+dab+b^2=-1.
> $$
>
> The quadratic form on the left has discriminant $d^2-4$. If $|d|\le2$, it is positive semidefinite and cannot represent $-1$. If $|d|>2$, it is indefinite and therefore represents every real number after scaling a vector on which it is negative. Hence
>
> $$
> A_d\sim_{SL_2(\mathbb R)}B_d
> \quad\Longleftrightarrow\quad |d|>2.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- This note does not silently repair the ambient dimension; it records the source mismatch before applying the intended $n=2$ interpretation.
- **Source status:** The mismatch was visually verified at [S1, Ch. 7, §2, Ex. 2.18, printed p. 222, PDF p. 234]. The $GL_2/SL_2$ classification is independent.

