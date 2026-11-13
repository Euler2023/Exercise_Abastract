---
title: "Exercise LA663: The Axis of a Three Dimensional Rotation"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 14, printed p. 29, PDF p. 41"
source_refs:
  - "S10/ch-1/sec-6/ex-14"
created: 2026-11-12
---

# Exercise LA663: The Axis of a Three Dimensional Rotation

## Problem Statement

> [!question] Original Chapter 1, Exercise 14
> If $R$ is an element of $SO(3)$, show that $R$ must have an eigenvector $v$ with eigenvalue 1. Show that $R$ maps the plane orthogonal to $v$ into itself. Conclude that $R$ is a rotation by some angle $\theta$ around the “axis” $v$.
>
> *Hint:* Since $SO(3)\subset SU(3)$, every (real or complex) eigenvalue of $R$ must have absolute value 1. Since, also, $R$ is real, any nonreal eigenvalues of $R$ come in conjugate pairs.

## Hints

> [!hint]- Hint 1
> Pair the nonreal eigenvalues. What contribution does each pair make to the determinant?

> [!hint]- Hint 2
> Once $Rv=v$, use $\langle Ru,v\rangle=\langle u,R^{-1}v\rangle$ to prove that $v^\perp$ is invariant. Determine the determinant of the restriction to that plane.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation using the Fundamental Theorem of Algebra (a positive-degree complex polynomial has a root) and elementary inner product calculations.
>
> Regard $R$ as a complex matrix. If $Rz=\lambda z$ with $z\ne0$, then $R^*R=I$ gives
> $$
> \|z\|^2=\|Rz\|^2=|\lambda|^2\|z\|^2,
> $$
> so $|\lambda|=1$. Since $R$ is real, conjugating the eigenvalue equation pairs every nonreal eigenvalue $\lambda$ with $\overline\lambda$. The pair has product $|\lambda|^2=1$. Every real eigenvalue is either 1 or $-1$.
>
> The characteristic polynomial has degree three, so the number of real eigenvalues counted with algebraic multiplicity is odd. If none were 1, all those real eigenvalues would be $-1$, and their product, together with all nonreal pairs, would give $\det R=-1$. This contradicts $R\in SO(3)$. Thus 1 is an eigenvalue. Because $R-I$ has real entries, a nonzero complex vector in its kernel has a nonzero real or imaginary part in the real kernel. Choose a real unit vector $v$ with $Rv=v$.
>
> Since also $R^{-1}v=v$, for every $u\in v^\perp$,
> $$
> \langle Ru,v\rangle=\langle u,R^{-1}v\rangle
> =\langle u,v\rangle=0.
> $$
> Therefore $v^\perp$ is invariant. Choose an orthonormal basis $e_1,e_2$ of this plane such that $e_1,e_2,v$ is positively oriented. The matrix of $R$ in this basis is
> $$
> \begin{pmatrix}Q&0\\0&1\end{pmatrix},
> \qquad Q\in O(2),\qquad \det Q=\det R=1.
> $$
> Write the first column of $Q$ as $(c,s)^{\mathsf T}$, where $c^2+s^2=1$. Its second column is a unit vector perpendicular to the first. The determinant-one condition selects $(-s,c)^{\mathsf T}$. Choose $\theta\in\mathbb R$ with $c=\cos\theta$ and $s=\sin\theta$. Then
> $$
> Q=\begin{pmatrix}\cos\theta&-\sin\theta\\
> \sin\theta&\cos\theta\end{pmatrix}.
> $$
> Thus $R$ fixes the line $\mathbb Rv$ pointwise and rotates its orthogonal plane by $\theta$, as required.
>
> For example, $\operatorname{diag}(-1,-1,1)$ fixes $e_3$ and rotates the $e_1,e_2$ plane through $\pi$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations Reflections and Glide Reflections]]

## Notes

- **Source status:** The complete numbered exercise and its printed hint were checked on the original 200 dpi page image. The source assigns the argument as an exercise; the proof above is an independent derivation.
- **Boundary cases:** For $R=I$, every nonzero real vector supplies an axis and one may take $\theta=0$. The assertion does not require the axis to be unique.
- **Routing:** The eigenvalue, determinant, and invariant-plane calculations determine the Linear Algebra destination.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
