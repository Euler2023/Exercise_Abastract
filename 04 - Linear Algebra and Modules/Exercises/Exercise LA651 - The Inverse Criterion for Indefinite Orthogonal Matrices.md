---
title: "Exercise LA651: The Inverse Criterion for Indefinite Orthogonal Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 1, printed p. 26, PDF p. 38"
source_refs:
  - "S10/ch-1/sec-6/ex-1"
created: 2026-11-12
---

# Exercise LA651: The Inverse Criterion for Indefinite Orthogonal Matrices

## Problem Statement

> [!question] Original Chapter 1, Exercise 1
> Let $[\cdot,\cdot]_{n,k}$ be the symmetric bilinear form on $\mathbb R^{n+k}$ defined in (1.5). Let $g$ be the $(n+k)\times(n+k)$ diagonal matrix with first $n$ diagonal entries equal to one and last $k$ diagonal entries equal to minus one:
> $$
> g=\begin{pmatrix}I_n&0\\0&-I_k\end{pmatrix}.
> $$
> Show that for all $x,y\in\mathbb R^{n+k}$,
> $$
> [x,y]_{n,k}=\langle x,gy\rangle.
> $$
> Show that a $(n+k)\times(n+k)$ real matrix $A$ belongs to $O(n;k)$ if and only if $gA^{\mathrm{tr}}g=A^{-1}$.

## Hints

> [!hint]- Hint 1
> Write both forms as coordinate sums.

> [!hint]- Hint 2
> Translate preservation of the form into $A^{\mathrm{tr}}gA=g$ and use $g^2=I$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> By Hall's definition,
> $$
> [x,y]_{n,k}=\sum_{j=1}^{n}x_jy_j-\sum_{j=n+1}^{n+k}x_jy_j=x^{\mathrm{tr}}gy=\langle x,gy\rangle.
> $$
> For all $x,y$,
> $$
> [Ax,Ay]_{n,k}=x^{\mathrm{tr}}A^{\mathrm{tr}}gAy.
> $$
> Equality with $[x,y]_{n,k}$ for every pair of coordinate vectors is equivalent to $A^{\mathrm{tr}}gA=g$. Taking determinants gives $(\det A)^2=1$, so form preservation itself forces invertibility. Multiplying the identity on the left by $g$ gives
> $$
> (gA^{\mathrm{tr}}g)A=I,
> $$
> hence $gA^{\mathrm{tr}}g=A^{-1}$. Conversely, the inverse identity implies $A^{\mathrm{tr}}gA=g$ after multiplication by $g$ on the left and $A$ on the right. Thus it implies preservation of the form and membership in $O(n;k)$.
>
> For example, when $n=k=1$, the matrix $A=\begin{pmatrix}\cosh t&\sinh t\\\sinh t&\cosh t\end{pmatrix}$ satisfies $gA^{\mathrm{tr}}g=\begin{pmatrix}\cosh t&-\sinh t\\-\sinh t&\cosh t\end{pmatrix}=A^{-1}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The complete numbered exercise and printed hints were checked on the original 200 dpi page image. The solution is independently supplied; the exercise statement is not a source-written proof.
- **Notation:** Hall writes $O(n;k)$ for the real group preserving a form of signature $(n,k)$. The transpose is denoted by $A^{\mathrm{tr}}$; no conjugation is involved.
- **Routing:** Bilinear-form and matrix-inverse calculations determine the Linear Algebra placement.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
