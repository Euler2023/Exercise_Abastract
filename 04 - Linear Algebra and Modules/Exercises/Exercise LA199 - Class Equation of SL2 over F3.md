---
title: "Exercise LA199: Class Equation of $SL_2(\mathbb F_3)$"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - finite-fields
  - class-equation
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.15, printed p. 222, PDF p. 234"
created: 2026-08-24
---

# Exercise LA199: Class Equation of $SL_2(\mathbb F_3)$

## Problem Statement

> [!question] Exercise 2.15
> Verify the class equation (7.2.10) of $SL_2(\mathbb F_3)$.

## Hints

> [!hint]- Hint 1
> Use the central elements $\pm I$, two square classes of nonzero unipotent parameters, their negatives, and a trace-zero element.

> [!hint]- Hint 2
> Compute centralizers of $U=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

## Solution

> [!success]- Solution
> The group has order
>
> $$
> |SL_2(\mathbb F_3)|=3(3^2-1)=24.
> $$
>
> The matrices $I$ and $-I$ are central, giving two singleton classes.
>
> Let $U_a=\begin{pmatrix}1&a\\0&1\end{pmatrix}$ for $a\in\mathbb F_3^\times$. Its centralizer in $SL_2(\mathbb F_3)$ is
>
> $$
> \left\{\begin{pmatrix}s&t\\0&s\end{pmatrix}:s=\pm1,\ t\in\mathbb F_3\right\},
> $$
>
> of order $6$, so its class has order $4$. The two matrices $U_1$ and $U_{-1}$ are not conjugate in $SL_2$: a conjugator preserving their common eigenline would scale the nilpotent entry by a nonzero square, and the only nonzero square in $\mathbb F_3$ is $1$. Their negatives likewise form two distinct classes of order $4$. Trace separates the positive and negative pairs.
>
> Finally, for $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, solving $PA=AP$ inside $SL_2(\mathbb F_3)$ gives the four-element centralizer $\{\pm I,\pm A\}$. Hence $C(A)$ has order $24/4=6$.
>
> The seven disjoint classes account for every element:
>
> $$
> 24=1+1+4+4+4+4+6.
> $$
>
> This is (7.2.10). $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- **Source status:** Artin states (7.2.10) and computes one representative centralizer at [S1, Ch. 7, §2, printed p. 197, PDF p. 209]. The complete verification above is independent.

