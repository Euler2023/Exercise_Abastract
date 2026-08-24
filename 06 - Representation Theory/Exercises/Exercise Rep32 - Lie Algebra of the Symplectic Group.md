---
title: "Exercise Rep32: Lie Algebra of the Symplectic Group"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - symplectic-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.8, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep32: Lie Algebra of the Symplectic Group

## Problem Statement

> [!question] Exercise 6.8
> Determine the Lie algebra of $SP_{2n}$, using block form $M=\begin{pmatrix}A&B\\C&D\end{pmatrix}$.

## Hints

> [!hint]- Hint 1
> Differentiate $P^{\mathsf T}JP=J$ and multiply out the resulting block equation.

## Solution

> [!success]- Solution
> The infinitesimal symplectic condition is
>
> $$
> M^{\mathsf T}J+JM=0,
> \qquad
> J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}.
> $$
>
> Block multiplication gives
>
> $$
> C=C^{\mathsf T},
> \qquad B=B^{\mathsf T},
> \qquad D=-A^{\mathsf T}.
> $$
>
> Hence
>
> $$
> \mathfrak{sp}_{2n}(\mathbb R)
> =\left\{\begin{pmatrix}A&B\\C&-A^{\mathsf T}\end{pmatrix}:B=B^{\mathsf T},\ C=C^{\mathsf T}\right\}.
> $$
>
> The converse follows because this condition makes $(e^{tM})^{\mathsf T}Je^{tM}$ constant. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]

## Notes

- Counting parameters gives dimension $n^2+2\cdot n(n+1)/2=n(2n+1)$.
- **Source status:** The block form and Ex. 6.8 were visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The calculation is independent.
