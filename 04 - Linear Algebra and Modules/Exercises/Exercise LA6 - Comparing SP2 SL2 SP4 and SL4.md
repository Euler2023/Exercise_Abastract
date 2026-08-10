---
title: "Exercise LA6: Comparing SP2, SL2, SP4, and SL4"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - symplectic-groups
  - special-linear-groups
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, Ex. 1.5, printed p. 283, PDF p. 295"
created: 2026-08-10
---

# Exercise LA6: Comparing SP2, SL2, SP4, and SL4

## Problem Statement

> [!question] Exercise
> Prove that $SP_2=SL_2$, but that $SP_4\ne SL_4$.

## Hints

> [!hint]- Hint 1
> For $P=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, compute $P^{\mathsf T}JP$ directly, where $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.

> [!hint]- Hint 2
> In dimension four, test a diagonal matrix of determinant $1$ against $J=\begin{pmatrix}0&I_2\\-I_2&0\end{pmatrix}$.

## Solution

> [!success]- Solution
> ### The equality $SP_2=SL_2$
> Let
> $$
> P=\begin{pmatrix}a&b\\c&d\end{pmatrix},
> \qquad
> J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
> $$
> Direct multiplication gives
> $$
> \begin{aligned}
> P^{\mathsf T}JP
> &=\begin{pmatrix}a&c\\b&d\end{pmatrix}
> \begin{pmatrix}0&1\\-1&0\end{pmatrix}
> \begin{pmatrix}a&b\\c&d\end{pmatrix}\\
> &=(ad-bc)J\\
> &=(\det P)J.
> \end{aligned}
> $$
> Therefore
> $$
> P^{\mathsf T}JP=J
> \quad\Longleftrightarrow\quad
> \det P=1,
> $$
> proving $SP_2=SL_2$.
>
> ### The inequality $SP_4\ne SL_4$
> Take
> $$
> D=\operatorname{diag}\left(2,\frac12,1,1\right).
> $$
> Its determinant is $1$, so $D\in SL_4$. With
> $$
> J=\begin{pmatrix}0&I_2\\-I_2&0\end{pmatrix},
> $$
> write $D=\operatorname{diag}(D_1,I_2)$, where $D_1=\operatorname{diag}(2,\tfrac12)$. Then
> $$
> D^{\mathsf T}JD
> =\begin{pmatrix}0&D_1\\-D_1&0\end{pmatrix}
> \ne J.
> $$
> Hence $D\notin SP_4$, even though $D\in SL_4$. Thus
> $$
> SP_4\ne SL_4.
> $$
> In fact every symplectic matrix has determinant $1$, so $SP_4$ is a proper subgroup of $SL_4$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

The identity $P^{\mathsf T}JP=(\det P)J$ is special to $2\times2$ matrices. In higher dimension, determinant $1$ is necessary but not sufficient for preserving the symplectic form.

**Source status:** The exercise is stated in [S1, Ch. 9, Exercises §1, Ex. 1.5, printed p. 283, PDF p. 295]. The equality and explicit counterexample are complete independent derivations.

