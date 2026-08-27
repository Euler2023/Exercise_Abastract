---
title: "Exercise LA297: Matrix Orbits under Left Multiplication and Conjugation"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-orbits
  - jordan-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.8, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise LA297: Matrix Orbits under Left Multiplication and Conjugation

## Problem Statement

> [!question] Exercise 7.8
> Decompose the set $\mathbb C^{2\times2}$ of $2\times2$ complex matrices into orbits for the following operations of $GL_2(\mathbb C)$: (a) left multiplication, (b) conjugation.

## Hints

> [!hint]- Hint 1
> Left multiplication performs invertible row operations, so it preserves the row space.

> [!hint]- Hint 2
> Conjugation orbits are similarity classes; use the $2\times2$ Jordan forms.

## Solution

> [!success]- Solution
> **(a)** Two matrices are related by invertible left multiplication exactly when they have the same row space. Thus there is one zero orbit, one full-rank orbit, and one rank-one orbit for every line in $\mathbb C^2$. Representatives may be chosen as
>
> $$
> 0,qquad I_2,qquad
> \begin{pmatrix}1&a\\0&0\end{pmatrix} (a\in\mathbb C),qquad
> \begin{pmatrix}0&1\\0&0\end{pmatrix}.
> $$
>
> The last two families parametrize $\mathbb P^1(\mathbb C)$.
>
> **(b)** Conjugation orbits are the similarity classes. Every complex $2\times2$ matrix is similar to exactly one of the following types, with the eigenvalues in the last family regarded as an unordered pair:
>
> $$
> \lambda I_2,qquad
> \begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix},qquad
> \begin{pmatrix}\lambda&0\\0&\mu\end{pmatrix}\quad(\lambda\ne\mu).
> $$
>
> The minimal polynomial distinguishes the scalar and nontrivial Jordan cases; the unordered eigenvalue multiset distinguishes the remaining orbits. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization and Jordan-type distinctions]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and row spaces]]

## Notes

- Rank alone does not classify left-multiplication orbits: every rank-one row space gives a different orbit.
- **Source status:** The exact statement was visually checked at [S1, Ch. 6, §7, Ex. 7.8, printed p. 191, PDF p. 203]. The orbit classification is independent and agrees with a selected-solutions comparison.
