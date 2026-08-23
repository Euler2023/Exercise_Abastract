---
title: "Exercise LA176: Five Explicit Matrix Exponentials"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-exponential
  - nilpotent-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.1, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA176: Five Explicit Matrix Exponentials

## Problem Statement

> [!question] Exercise 4.1
> Compute $e^A$ for
>
> $$
> \text{(a) }\begin{pmatrix}a&0\\0&b\end{pmatrix},\quad
> \text{(b) }\begin{pmatrix}2\pi i&2\pi i\\0&2\pi i\end{pmatrix},\quad
> \text{(c) }\begin{pmatrix}0&-b\\b&0\end{pmatrix},
> $$
>
> $$
> \text{(d) }\begin{pmatrix}1&0\\1&1\end{pmatrix},\quad
> \text{(e) }\begin{pmatrix}0&0&0\\1&0&0\\0&1&0\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Split each matrix into a scalar matrix and a nilpotent part, or recognize the rotation generator in (c).

## Solution

> [!success]- Solution
> Directly from the power series,
>
> $$
> \text{(a) }e^A=\begin{pmatrix}e^a&0\\0&e^b\end{pmatrix}.
> $$
>
> In (b), $A=2\pi iI+N$ with $N^2=0$, so
>
> $$
> \text{(b) }e^A=e^{2\pi i}(I+N)=\begin{pmatrix}1&2\pi i\\0&1\end{pmatrix}.
> $$
>
> For (c), $A^2=-b^2I$, hence
>
> $$
> \text{(c) }e^A=\begin{pmatrix}\cos b&-\sin b\\\sin b&\cos b\end{pmatrix}.
> $$
>
> In (d), $A=I+N$ with $N^2=0$:
>
> $$
> \text{(d) }e^A=e\begin{pmatrix}1&0\\1&1\end{pmatrix}.
> $$
>
> In (e), $A^3=0$, so
>
> $$
> \text{(e) }e^A=I+A+\frac12A^2
> =\begin{pmatrix}1&0&0\\1&1&0\\\frac12&1&1\end{pmatrix}.
> $$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source status:** All five matrices were visually checked at [S1, Ch. 5, §4, Ex. 4.1, printed p. 151, PDF p. 163]. The exponentials are independently computed.

