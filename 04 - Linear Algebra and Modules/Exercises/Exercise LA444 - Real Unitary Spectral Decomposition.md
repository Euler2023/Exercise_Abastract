---
title: "Exercise LA444: Real Unitary Spectral Decomposition"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - spectral-theorem
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 2, printed p. 596, PDF p. 611"
created: 2026-09-29
---

# Exercise LA444: Real Unitary Spectral Decomposition

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 2
> Prove the real case of the unitary spectral theorem: If $E$ is a non-zero finite dimensional space over $\mathbb R$, with a positive definite symmetric form, and $U:E\to E$ is a unitary linear map, then $E$ has an orthogonal decomposition into subspaces of dimension $1$ or $2$, invariant under $U$. If $\dim E=2$, then the matrix of $U$ with respect to any orthonormal basis is of the form
>
> $$
> \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}
> \quad\text{or}\quad
> \begin{pmatrix}-1&0\\0&1\end{pmatrix}
> \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},
> $$
>
> depending on whether $\det(U)=1$ or $-1$. Thus $U$ is a rotation, or a rotation followed by a reflection.

## Hints

> [!hint]- Hint 1: Complexify and take real and imaginary parts
> A complex eigenvector $z=x+iy$ gives a real invariant subspace spanned by $x,y$, of dimension at most two.

> [!hint]- Hint 2: Split off its orthogonal complement
> If $W$ is invariant under the orthogonal map $U$, then $U(W)=W$ and $\langle Uv,w\rangle=\langle v,U^{-1}w\rangle$ proves invariance of $W^\perp$.

## Solution

> [!success]- Independent solution
> In this real setting, “unitary” means orthogonal: $U$ preserves the given positive definite form. It is injective because $\langle Uv,Uv\rangle=\langle v,v\rangle$, and hence invertible in finite dimension.
>
> Complexify its matrix. The fundamental theorem of algebra supplies a nonzero complex eigenvector $z=x+iy$ with eigenvalue $\lambda=a+ib$. Comparing real and imaginary parts gives
>
> $$
> Ux=ax-by,\qquad Uy=bx+ay.
> $$
>
> Thus the real subspace $W=\mathbb Rx+\mathbb Ry$ is nonzero, has dimension $1$ or $2$, and is $U$-invariant. Since $U$ is injective, $U(W)=W$. For $v\in W^\perp$ and $w\in W$,
>
> $$
> \langle Uv,w\rangle=\langle v,U^{-1}w\rangle=0.
> $$
>
> Positive definiteness gives $E=W\oplus W^\perp$ as an orthogonal direct sum. The restriction of $U$ to $W^\perp$ is again orthogonal. Induction on dimension, terminating with the zero complement, yields the desired decomposition.
>
> Now suppose $\dim E=2$ and take any orthonormal basis. The matrix $Q$ of $U$ satisfies $Q^{\mathsf T}Q=I$. If $\det Q=1$, write its first column as $(\cos\theta,\sin\theta)^{\mathsf T}$. Orthogonality and the determinant sign force its second column to be $(-\sin\theta,\cos\theta)^{\mathsf T}$, giving the first displayed form.
>
> If $\det Q=-1$, put $D=\operatorname{diag}(-1,1)$. Then $DQ$ is orthogonal with determinant $1$, so the preceding argument gives $DQ=R_\theta$, where $R_\theta$ is the displayed rotation matrix. Since $D^2=I$, $Q=DR_\theta$, the second displayed form. The angle may depend on the chosen orthonormal basis.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source and proof status:** [S2, Ch. XV, Ex. 2, printed p. 596, PDF p. 611], including the order of the reflection and rotation matrices, was checked visually. The real invariant-subspace construction and classification are independent derivations.
- **Proof inputs:** The fundamental theorem of algebra and orthogonal-complement decomposition in a finite-dimensional positive definite space are used. The real unitary spectral theorem requested by the exercise is proved, not assumed.
- **Terminology:** A real unitary map is an orthogonal map. Real eigenvalues of such a map are $\pm1$, but a two-dimensional rotation need not have a nonzero real eigenvector.
