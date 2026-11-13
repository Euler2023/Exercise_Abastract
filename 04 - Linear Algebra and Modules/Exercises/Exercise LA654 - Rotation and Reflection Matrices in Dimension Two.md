---
title: "Exercise LA654: Rotation and Reflection Matrices in Dimension Two"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 4, printed p. 27, PDF p. 39"
source_refs:
  - "S10/ch-1/sec-6/ex-4"
created: 2026-11-12
---

# Exercise LA654: Rotation and Reflection Matrices in Dimension Two

## Problem Statement

> [!question] Original Chapter 1, Exercise 4
> Show that a matrix $R$ belongs to $SO(2)$ if and only if it can be expressed in the form
> $$
> \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}
> $$
> for some $\theta\in\mathbb R$. Show that a matrix $R$ belongs to $O(2)$ if and only if it is of one of the two forms:
> $$
> A=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}
> \quad\text{or}\quad
> A=\begin{pmatrix}\cos\theta&\sin\theta\\\sin\theta&-\cos\theta\end{pmatrix}.
> $$
> Hint: Recall that for $A$ to be in $O(2)$, the columns of $A$ must be orthonormal.

## Hints

> [!hint]- Hint 1
> Parametrize the first unit column by $(\cos\theta,\sin\theta)$.

> [!hint]- Hint 2
> There are exactly two unit vectors perpendicular to this column; their determinant signs distinguish the cases.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let the columns be $u,v$. Orthogonality says $\|u\|=\|v\|=1$ and $u^{\mathrm{tr}}v=0$. Write $u=(\cos\theta,\sin\theta)^{\mathrm{tr}}$. The perpendicular space is one-dimensional, spanned by $(-\sin\theta,\cos\theta)^{\mathrm{tr}}$, so its only unit vectors are this vector and its negative. Hence the two displayed matrices exhaust $O(2)$.
>
> The determinant in the first case is $\cos^2\theta+\sin^2\theta=1$, while in the second case it is $-\cos^2\theta-\sin^2\theta=-1$. Thus precisely the first family belongs to $SO(2)$. Conversely, each displayed matrix has orthonormal columns, so each belongs to $O(2)$, and the first belongs to $SO(2)$.
>
> At $\theta=0$, the two families give $I$ and $\operatorname{diag}(1,-1)$, exhibiting both determinant signs.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The complete numbered exercise and printed hints were checked on the original 200 dpi page image. The solution is independently supplied; the exercise statement is not a source-written proof.
- **Source wording:** The original uses $R$ in the question and $A$ in the final displayed alternatives; these refer to the same arbitrary matrix.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
