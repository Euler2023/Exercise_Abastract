---
title: "Exercise Rep90: Averaging an Intertwiner from the Sign Representation"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 7, Ex. 7.3, printed p. 319, PDF p. 331"
created: 2026-08-27
---

# Exercise Rep90: Averaging an Intertwiner from the Sign Representation

## Problem Statement

> [!question] Exercise 7.3
> The matrices
>
> $$
> R_x=\begin{pmatrix}1&1&-1\\0&0&1\\1&0&-1\end{pmatrix},\qquad
> R_y=\begin{pmatrix}0&-1&-1\\-1&0&1\\0&0&-1\end{pmatrix}
> $$
>
> define a representation $R$ of $S_3$. Let $\varphi:\mathbb C\to\mathbb C^3$ have matrix $(1,0,0)^{\mathsf T}$. Use averaging to produce a $G$-invariant map from $\varphi$, using the sign representation on $\mathbb C$ and $R$ on $\mathbb C^3$.

## Hints

> [!hint]- Hint 1
> Sum $\operatorname{sign}(g)R_g e_1$ over $S_3$.

## Solution

> [!success]- Solution
> With $x$ a $3$-cycle and $y$ a transposition, the averaged map sends $1$ to
>
> $$
> \frac16\sum_{g\in S_3}\operatorname{sign}(g)R_ge_1
> =\frac16(I+R_x+R_x^2)(I-R_y)e_1
> =\begin{pmatrix}2/3\\1/3\\1/3\end{pmatrix}.
> $$
>
> Direct multiplication gives $R_xv=v$ and $R_yv=-v$, so $z\mapsto zv$ intertwines the sign representation with $R$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The sparse matrices were visually checked at [S1, Ch. 10, §7, Ex. 7.3, printed p. 319, PDF p. 331]; the finite sum was explicitly evaluated.

