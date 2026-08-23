---
title: "Exercise LA163: Rotation Matrices from Axis and Angle"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-matrices
  - rotations
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §1, Ex. 1.1, printed p. 150, PDF p. 162"
created: 2026-08-24
---

# Exercise LA163: Rotation Matrices from Axis and Angle

## Problem Statement

> [!question] Exercise 1.1
> Determine the matrices that represent the following rotations of $\mathbb R^3$:
>
> (a) angle $\theta$, the axis $e_2$;
>
> (b) angle $2\pi/3$, axis contains the vector $(1,1,1)^t$;
>
> (c) angle $\pi/2$, axis contains the vector $(1,1,0)^t$.

## Hints

> [!hint]- Hint 1
> Normalize the axis vector to a pole $u$ and use Rodrigues' formula
>
> $$
> R=cI+(1-c)uu^t+s[u]_\times,\qquad c=\cos\theta,\quad s=\sin\theta,
> $$
>
> where $[u]_\times x=u\times x$.

## Solution

> [!success]- Solution
> We use the right-hand-rule orientation fixed by the pole.
>
> (a) For $u=e_2$,
>
> $$
> R=\begin{pmatrix}
> \cos\theta&0&\sin\theta\\
> 0&1&0\\
> -\sin\theta&0&\cos\theta
> \end{pmatrix}.
> $$
>
> (b) Take $u=(1,1,1)^t/\sqrt3$. Substitution of $c=-1/2$ and $s=\sqrt3/2$ gives
>
> $$
> R=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}.
> $$
>
> It cyclically sends $e_1\mapsto e_2\mapsto e_3\mapsto e_1$ and fixes $(1,1,1)^t$.
>
> (c) Take $u=(1,1,0)^t/\sqrt2$. Since $c=0$ and $s=1$,
>
> $$
> R=\begin{pmatrix}
> \frac12&\frac12&\frac1{\sqrt2}\\
> \frac12&\frac12&-\frac1{\sqrt2}\\
> -\frac1{\sqrt2}&\frac1{\sqrt2}&0
> \end{pmatrix}.
> $$
>
> Each displayed matrix is orthogonal, has determinant $1$, and fixes its stated axis vector.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The axes and angles were visually checked at [S1, Ch. 5, §1, Ex. 1.1, printed p. 150, PDF p. 162]. The matrices are independently derived.
