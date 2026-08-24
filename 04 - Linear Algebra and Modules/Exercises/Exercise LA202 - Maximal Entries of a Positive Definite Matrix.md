---
title: "Exercise LA202: Maximal Entries of a Positive Definite Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - positive-definite-matrices
  - symmetric-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 2, Ex. 2.1, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA202: Maximal Entries of a Positive Definite Matrix

## Problem Statement

> [!question] Exercise 2.1
> Prove that the maximal entries of a positive definite, symmetric, real matrix are on the diagonal.

## Hints

> [!hint]- Hint 1
> Restrict the quadratic form to the coordinate plane spanned by $e_i$ and $e_j$.

> [!hint]- Hint 2
> Positivity of the resulting $2\times2$ principal submatrix gives $a_{ij}^2<a_{ii}a_{jj}$.

## Solution

> [!success]- Solution
> Let $A=(a_{ij})$ be positive definite and symmetric. For every $i$, evaluating the quadratic form on $e_i$ gives
>
> $$
> a_{ii}=e_i^{\mathsf T}Ae_i>0.
> $$
>
> For $i\ne j$, the restriction of the form to $\operatorname{span}(e_i,e_j)$ is positive definite, so its matrix
>
> $$
> \begin{pmatrix}
> a_{ii}&a_{ij}\\
> a_{ij}&a_{jj}
> \end{pmatrix}
> $$
>
> has positive determinant. Hence
>
> $$
> a_{ii}a_{jj}-a_{ij}^2>0,
> \qquad
> |a_{ij}|<\sqrt{a_{ii}a_{jj}}\le \max\{a_{ii},a_{jj}\}.
> $$
>
> Therefore no off-diagonal entry can have absolute value as large as the largest diagonal entry. In particular, every entry of maximal absolute value—and hence every maximal entry in the usual order—is on the diagonal.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- The proof gives the sharper estimate $|a_{ij}|<\sqrt{a_{ii}a_{jj}}$ for $i\ne j$.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §2, Ex. 2.1, printed p. 254, PDF p. 266]. The solution is an independent derivation.

