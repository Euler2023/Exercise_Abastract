---
title: "Exercise LA138: Three Complex Diagonalizations"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - diagonalization
  - roots-of-unity
  - rotations
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.5, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA138: Three Complex Diagonalizations

## Problem Statement

> [!question] Exercise 6.5
> Find a complex $P$ diagonalizing each matrix:
>
> $$
> \text{(a) }\begin{pmatrix}1&i\\-i&1\end{pmatrix},\quad
> \text{(b) }\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix},\quad
> \text{(c) }\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Place independent eigenvectors in the columns of $P$.

## Solution

> [!success]- Solution
> (a) $P=\begin{pmatrix}1&1\\i&-i\end{pmatrix}$ gives $P^{-1}AP=\operatorname{diag}(0,2)$.
>
> (b) Let $\omega=e^{2\pi i/3}$. With
>
> $$
> P=\begin{pmatrix}1&1&1\\1&\omega^2&\omega\\1&\omega&\omega^2\end{pmatrix},
> $$
>
> one obtains $P^{-1}AP=\operatorname{diag}(1,\omega,\omega^2)$.
>
> (c) $P=\begin{pmatrix}1&1\\-i&i\end{pmatrix}$ gives $P^{-1}AP=\operatorname{diag}(e^{i\theta},e^{-i\theta})$; this remains valid when $\sin\theta=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** All matrices were visually checked at [S1, Ch. 4, §6, Ex. 6.5, printed p. 128, PDF p. 140]. The diagonalizations are independently computed.

