---
title: "Exercise LA195: Centralizers over Finite Fields"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - centralizers
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.1, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise LA195: Centralizers over Finite Fields

## Problem Statement

> [!question] Exercise 2.1
> Determine the centralizer and the order of the conjugacy class of
>
> **(a)** the matrix $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ in $GL_2(\mathbb F_3)$,
>
> **(b)** the matrix $\begin{pmatrix}1&0\\0&2\end{pmatrix}$ in $GL_2(\mathbb F_5)$.

## Hints

> [!hint]- Hint 1
> Write $P=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and solve $PA=AP$.

> [!hint]- Hint 2
> Use $|GL_2(\mathbb F_q)|=(q^2-1)(q^2-q)$ and orbit–stabilizer.

## Solution

> [!success]- Solution
> ### (a) The unipotent matrix over $\mathbb F_3$
> Let $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. The equation $PA=AP$ gives $c=0$ and $d=a$. Invertibility requires $a\ne0$, so
>
> $$
> Z_{GL_2(\mathbb F_3)}(A)
> =\left\{\begin{pmatrix}a&b\\0&a\end{pmatrix}:a\in\mathbb F_3^\times,\ b\in\mathbb F_3\right\}.
> $$
>
> Its order is $2\cdot3=6$. Since $|GL_2(\mathbb F_3)|=(9-1)(9-3)=48$,
>
> $$
> |C(A)|=48/6=8.
> $$
>
> ### (b) Distinct eigenvalues over $\mathbb F_5$
> Let $B=\operatorname{diag}(1,2)$. A commuting matrix must preserve the two distinct eigenspaces, so it is diagonal:
>
> $$
> Z_{GL_2(\mathbb F_5)}(B)
> =\left\{\begin{pmatrix}a&0\\0&d\end{pmatrix}:a,d\in\mathbb F_5^\times\right\}.
> $$
>
> This centralizer has order $4^2=16$. Since $|GL_2(\mathbb F_5)|=(25-1)(25-5)=480$,
>
> $$
> |C(B)|=480/16=30.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- **Source status:** The matrices were checked directly at [S1, Ch. 7, §2, Ex. 2.1, printed p. 221, PDF p. 233]. The calculations are independent.

