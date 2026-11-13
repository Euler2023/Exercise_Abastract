---
title: "Exercise LA655: The Two Complex Coordinate Description of SU2"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 5, printed p. 27, PDF p. 39"
source_refs:
  - "S10/ch-1/sec-6/ex-5"
created: 2026-11-12
---

# Exercise LA655: The Two Complex Coordinate Description of SU2

## Problem Statement

> [!question] Original Chapter 1, Exercise 5
> Show that if $\alpha$ and $\beta$ are arbitrary complex numbers satisfying $|\alpha|^2+|\beta|^2=1$, then the matrix
> $$
> A=\begin{pmatrix}\alpha&-\overline\beta\\\beta&\overline\alpha\end{pmatrix}
> $$
> is in $SU(2)$. Show that every $A\in SU(2)$ can be expressed in this form for a unique pair $(\alpha,\beta)$ satisfying $|\alpha|^2+|\beta|^2=1$.

## Hints

> [!hint]- Hint 1
> Check the inner products of the columns and compute the determinant.

> [!hint]- Hint 2
> For the converse, compare the adjugate formula for $A^{-1}$ with $A^{-1}=A^*$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The columns of the displayed matrix have squared norm $|\alpha|^2+|\beta|^2=1$, and their Hermitian inner product is
> $$
> \overline\alpha(-\overline\beta)+\overline\beta\,\overline\alpha=0.
> $$
> Thus $A^*A=I$. Also $\det A=\alpha\overline\alpha+\beta\overline\beta=1$, so $A\in SU(2)$.
>
> Conversely, write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SU(2)$. Since $\det A=1$ and $A$ is unitary,
> $$
> \begin{pmatrix}d&-b\\-c&a\end{pmatrix}
> =A^{-1}=A^*=\begin{pmatrix}\overline a&\overline c\\\overline b&\overline d\end{pmatrix}.
> $$
> It follows that $d=\overline a$ and $b=-\overline c$. The first column has norm one, so $|a|^2+|c|^2=1$. Taking $\alpha=a$ and $\beta=c$ gives the required form. Uniqueness follows because this pair is exactly the first column.
>
> For example, $(\alpha,\beta)=(0,1)$ gives $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, whose inverse is its negative and whose determinant is 1.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2 Quaternions and the Spin Cover]]

## Notes

- **Source status:** The complete numbered exercise and printed hints were checked on the original 200 dpi page image. The solution is independently supplied; the exercise statement is not a source-written proof.
- **Consequence:** The parametrization is a homeomorphism from the unit sphere in $\mathbb C^2$ to $SU(2)$, since the formula and its inverse (taking the first column) are continuous. This consequence uses only the subspace topologies.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
