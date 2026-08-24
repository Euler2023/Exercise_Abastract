---
title: "Exercise LA290: Matrix of the Spin Rotation"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - rotations
  - spin-representation
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.4, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA290: Matrix of the Spin Rotation

## Problem Statement

> [!question] Exercise 4.4
> (a) With notation as in (9.4.1), compute the matrix of the rotation $\gamma_P$, and show that its trace is $1+2\cos 2\theta$.
>
> (b) Prove directly that the matrix is orthogonal.

## Hints

> [!hint]- Hint 1
> Write $P=\cos\theta+\sin\theta\,(a_1i+a_2j+a_3k)$ with $a_1^2+a_2^2+a_3^2=1$.

> [!hint]- Hint 2
> Use Rodrigues' form $R=cI+(1-c)aa^{\mathsf T}+s[a]_{\times}$, where $c=\cos2\theta$ and $s=\sin2\theta$.

## Solution

> [!success]- Solution
> Put $a=(a_1,a_2,a_3)^{\mathsf T}$, $c=\cos2\theta$, and $s=\sin2\theta$. Conjugating a pure imaginary quaternion by $P$ gives Rodrigues' rotation about the axis $a$ through angle $2\theta$. Therefore
>
> $$
> [\gamma_P]=
> \begin{pmatrix}
> c+(1-c)a_1^2&(1-c)a_1a_2-sa_3&(1-c)a_1a_3+sa_2\\
> (1-c)a_2a_1+sa_3&c+(1-c)a_2^2&(1-c)a_2a_3-sa_1\\
> (1-c)a_3a_1-sa_2&(1-c)a_3a_2+sa_1&c+(1-c)a_3^2
> \end{pmatrix}.
> $$
>
> Its trace is
>
> $$
> 3c+(1-c)(a_1^2+a_2^2+a_3^2)=1+2c=1+2\cos2\theta.
> $$
>
> For a direct orthogonality check, set $K=[a]_{\times}$ and $E=aa^{\mathsf T}$. Then
>
> $$
> K^{\mathsf T}=-K,
> \qquad K^2=E-I,
> \qquad EK=KE=0,
> \qquad E^2=E.
> $$
>
> Since $R=cI+(1-c)E+sK$, these identities and $c^2+s^2=1$ give
>
> $$
> RR^{\mathsf T}
> =\bigl(cI+(1-c)E\bigr)^2-s^2K^2
> =I.
> $$
>
> Hence the computed matrix is orthogonal.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- The angle doubles under the spin map $SU_2\to SO_3$.
- **Source status:** Formula (9.4.1), the spin representation, and Ex. 4.4 were checked at [S1, Ch. 9, §9.4, printed pp. 269–271 and 284, PDF pp. 281–283 and 296]. The matrix computation and orthogonality proof are independent.
