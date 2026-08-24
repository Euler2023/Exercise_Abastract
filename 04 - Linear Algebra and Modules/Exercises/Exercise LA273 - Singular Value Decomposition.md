---
title: "Exercise LA273: Singular Value Decomposition"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - singular-value-decomposition
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.7, printed p. 259, PDF p. 271"
created: 2026-08-24
---

# Exercise LA273: Singular Value Decomposition

## Problem Statement

> [!question] Miscellaneous Problem M.7
> Let $A$ be a real $m\times n$ matrix. Prove that there are orthogonal matrices $P\in O_m$ and $Q\in O_n$ such that $PAQ$ is a rectangular diagonal matrix whose diagonal entries are nonnegative.

## Hints

> [!hint]- Hint 1
> Orthogonally diagonalize the positive semidefinite matrix $A^{\mathsf T}A$.

> [!hint]- Hint 2
> The nonzero columns of $AQ$ are mutually orthogonal. Normalize them and extend them to an orthonormal basis of $\mathbb R^m$.

## Solution

> [!success]- Solution
> By the real spectral theorem, choose $Q\in O_n$ such that
>
> $$
> Q^{\mathsf T}A^{\mathsf T}AQ=\operatorname{diag}(\sigma_1^2,\ldots,\sigma_n^2),
> \qquad \sigma_j\ge0.
> $$
>
> Let $q_j$ be the $j$th column of $Q$. Then
>
> $$
> (Aq_i)^{\mathsf T}(Aq_j)=q_i^{\mathsf T}A^{\mathsf T}Aq_j
> =\sigma_j^2\delta_{ij}.
> $$
>
> Hence the nonzero vectors $Aq_j$ are mutually orthogonal and have lengths $\sigma_j$. After reordering the $q_j$, suppose $\sigma_1,\ldots,\sigma_r>0$ and the rest are zero. Put $u_j=Aq_j/\sigma_j$ for $j\le r$ and extend $u_1,\ldots,u_r$ to an orthonormal basis $u_1,\ldots,u_m$ of $\mathbb R^m$. Let $U$ have these columns and set $P=U^{\mathsf T}$.
>
> For $j\le r$, $PAq_j=\sigma_je_j$, while for $j>r$, $Aq_j=0$. Therefore
>
> $$
> PAQ=\begin{pmatrix}
> \sigma_1&&&0\
> &\ddots&&\
> &&\sigma_r&\
> 0&&&0
> \end{pmatrix},
> $$
>
> interpreted as an $m\times n$ rectangular diagonal matrix. All diagonal entries are nonnegative.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- The numbers $\sigma_j$ are the singular values of $A$.
- **Source status:** The statement was visually verified at [S1, Ch. 8, M.7, printed p. 259, PDF p. 271]. The proof is independent and uses the real spectral theorem from Chapter 8.

