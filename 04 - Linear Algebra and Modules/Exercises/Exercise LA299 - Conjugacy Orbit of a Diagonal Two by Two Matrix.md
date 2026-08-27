---
title: "Exercise LA299: Conjugacy Orbit of a Diagonal Two by Two Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-centralizers
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.10, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise LA299: Conjugacy Orbit of a Diagonal Two by Two Matrix

## Problem Statement

> [!question] Exercise 7.10
> (a) Describe the orbit and the stabilizer of the matrix $\begin{pmatrix}1&0\\0&2\end{pmatrix}$ under conjugation in the general linear group $GL_n(\mathbb R)$.
>
> (b) Interpreting the matrix in $GL_2(\mathbb F_5)$, find the order of the orbit.

> [!warning] Source issue
> The displayed matrix is $2\times2$, while part (a) prints $GL_n(\mathbb R)$. Without an embedding convention the action is undefined for $n\ne2$. The intended group is $GL_2(\mathbb R)$, consistent with part (b).

## Hints

> [!hint]- Hint 1
> The stabilizer is the centralizer. Distinct eigenvalues force a commuting matrix to preserve both eigenspaces.

> [!hint]- Hint 2
> Over $\mathbb F_5$, divide $|GL_2(\mathbb F_5)|$ by the order of the diagonal centralizer.

## Solution

> [!success]- Solution
> Let $A=\operatorname{diag}(1,2)$ and interpret part (a) in $GL_2(\mathbb R)$. Its orbit consists of all real matrices similar to $A$, equivalently all diagonalizable $2\times2$ matrices with eigenvalues $1$ and $2$. Since the eigenvalues are distinct, this is also
>
> $$
> \{B\in M_2(\mathbb R):\operatorname{tr}B=3, \det B=2\}.
> $$
>
> Solving $PA=AP$ gives
>
> $$
> Z_{GL_2(\mathbb R)}(A)
> =\left\{\begin{pmatrix}a&0\\0&d\end{pmatrix}:a,d\in\mathbb R^\times\right\}.
> $$
>
> The same calculation over $\mathbb F_5$ gives a centralizer of order $(5-1)^2=16$. Since
>
> $$
> |GL_2(\mathbb F_5)|=(5^2-1)(5^2-5)=480,
> $$
>
> orbit–stabilizer yields
>
> $$
> |\operatorname{Orb}(A)|=\frac{480}{16}=30.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[01 - Group Theory/Concepts/Group Actions|Orbit–stabilizer in group actions]]

## Notes

- The source mismatch is preserved rather than silently repaired; the solution states the intended correction explicitly.
- **Source status:** The matrix, $GL_n(\mathbb R)$ wording, and finite-field part were visually checked at [S1, Ch. 6, §7, Ex. 7.10, printed p. 191, PDF p. 203]. The calculation is independent.
