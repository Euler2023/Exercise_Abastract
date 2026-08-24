---
title: "Exercise Rep44: Adjoint Map from SL2R to the Lorentz Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - adjoint-representation
  - lorentz-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.8, printed p. 288, PDF p. 300"
created: 2026-08-24
---

# Exercise Rep44: Adjoint Map from SL2R to the Lorentz Group

## Problem Statement

> [!question] Miscellaneous Exercise M.8
> Two-dimensional space-time is the space of real three-dimensional column vectors, with Lorentz form $(Y,Y')=Y^{\mathsf T}I_{2,1}Y'=y_1y'_1+y_2y'_2-y_3y'_3$. The space $W$ of real trace-zero $2\times2$ matrices has basis $B=(w_1,w_2,w_3)$, where
>
> $$
> w_1=\begin{pmatrix}1&0\\0&-1\end{pmatrix},
> \quad
> w_2=\begin{pmatrix}0&1\\1&0\end{pmatrix},
> \quad
> w_3=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
> $$
>
> (a) Show that if $A=BY$ and $A'=BY'$ are trace-zero matrices, the Lorentz form carries over to $(A,A')=y_1y'_1+y_2y'_2-y_3y'_3=\frac12\operatorname{trace}(AA')$.
>
> (b) The group $SL_2$ operates by conjugation on $W$. Use this operation to define a homomorphism $\varphi:SL_2\to O_{2,1}$ whose kernel is $\{\pm I\}$.
>
> (c) Prove that $O_{2,1}$ has four connected components and that the image of $\varphi$ is the component containing the identity.

## Hints

> [!hint]- Hint 1
> Use cyclicity of trace for invariance and the signs of determinant and the last time coordinate for components.

## Solution

> [!success]- Solution
> **(a)** For
>
> $$
> A=\begin{pmatrix}y_1&y_2+y_3\\y_2-y_3&-y_1\end{pmatrix},
> $$
>
> direct multiplication gives
>
> $$
> \frac12\operatorname{tr}(AA')=y_1y'_1+y_2y'_2-y_3y'_3.
> $$
>
> **(b)** Conjugation preserves trace and satisfies
>
> $$
> \operatorname{tr}\bigl((PAP^{-1})(PA'P^{-1})\bigr)=\operatorname{tr}(AA'),
> $$
>
> so it defines $\varphi:SL_2(\mathbb R)\to O_{2,1}$. Its kernel consists of matrices commuting with all trace-zero matrices, hence of scalars; determinant one leaves $\{\pm I\}$.
>
> **(c)** For $Q\in O_{2,1}$, both $\det Q\in\{\pm1\}$ and the sign of the third coordinate of $Qe_3$ are locally constant. The latter is defined because
>
> $$
> q_{33}^2=1+q_{13}^2+q_{23}^2.
> $$
>
> The two sheets of the unit timelike hyperboloid are connected, and over each sheet fixing the determinant leaves a connected $SO_2$ fibre. Thus these two signs label exactly four connected components.
>
> The group $SL_2(\mathbb R)$ is connected, so $\operatorname{im}\varphi$ lies in the identity component. The differential is the injective adjoint map between two three-dimensional Lie algebras, so the image contains a neighborhood of the identity and is open in that component. An open subgroup of a connected group is the whole group. Hence $\operatorname{im}\varphi$ is exactly the identity component of $O_{2,1}$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- This is the real split analogue of the spin map $SU_2\to SO_3$.
- **Source status:** The basis, form, and all three parts of M.8 were visually checked at [S1, Ch. 9, Misc. Ex. M.8, printed p. 288, PDF p. 300]. The trace calculation, kernel, and component proof are independent.
