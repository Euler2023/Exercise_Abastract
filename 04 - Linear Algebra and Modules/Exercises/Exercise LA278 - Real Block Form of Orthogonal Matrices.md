---
title: "Exercise LA278: Real Block Form of Orthogonal Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.12, printed p. 260, PDF p. 272"
created: 2026-08-24
---

# Exercise LA278: Real Block Form of Orthogonal Matrices

## Problem Statement

> [!question] Miscellaneous Problem M.12
> Let $P$ be a real orthogonal matrix, and let $X=R+iS$ be a complex eigenvector with complex eigenvalue $\lambda$.
>
> **(a)** Prove that $X^{\mathsf T}X=0$. Interpret this equation in terms of the real vectors $R$ and $S$, and determine the matrix of $P$ on the real plane they span.
>
> **(b)** Prove that a real orthogonal matrix is orthogonally similar over $\mathbb R$ to a block diagonal matrix whose blocks are $[1]$, $[-1]$, and two-dimensional rotation matrices.
>
> [!warning] Source issue
> As printed, part (a) says merely “complex eigenvalue,” which includes the real eigenvalues $\pm1$ and makes the conclusion false: a real eigenvector has $X^{\mathsf T}X>0$. The intended hypothesis must be that $\lambda$ is **nonreal**. The solution below uses this corrected condition.

## Hints

> [!hint]- Hint 1
> Combine $|\lambda|=1$ with $(\lambda-\lambda^{-1})X^{\mathsf T}X=0$ from M.6.

> [!hint]- Hint 2
> Write $\lambda=a+ib$ and compare real and imaginary parts of $PX=\lambda X$.

## Solution

> [!success]- Solution
> **(a)** Assume $\lambda\notin\mathbb R$. By M.6, $|\lambda|=1$, and
>
> $$
> (\lambda-\lambda^{-1})X^{\mathsf T}X=0.
> $$
>
> Since a nonreal unit complex number does not equal its inverse, $X^{\mathsf T}X=0$. Writing $X=R+iS$ gives
>
> $$
> 0=(R+iS)^{\mathsf T}(R+iS)
> =\lVert R\rVert^2-\lVert S\rVert^2+2i(R\cdot S).
> $$
>
> Thus $R\perp S$ and $\lVert R\rVert=\lVert S\rVert$. Neither vector is zero. If $\lambda=a+ib$, then $a^2+b^2=1$ and comparison of real and imaginary parts yields
>
> $$
> PR=aR-bS,
> \qquad
> PS=bR+aS.
> $$
>
> Relative to the orthonormal basis obtained by scaling $R,S$ equally, the restriction of $P$ has matrix
>
> $$
> \begin{pmatrix}a&b\\-b&a\end{pmatrix}
> =\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}.
> $$
>
> **(b)** Over $\mathbb C$, the normal matrix $P$ has an orthonormal eigenbasis. Its real eigenvalues are $1$ and $-1$, and their eigenspaces admit real orthonormal bases. Every nonreal eigenvalue occurs with its conjugate; part (a) converts a conjugate pair of eigenvectors into an invariant real two-plane with an orthonormal basis and a rotation block. Distinct complex eigenspaces are orthogonal, hence so are the resulting real invariant subspaces. Combining their bases gives a real orthonormal basis in which $P$ is block diagonal with blocks
>
> $$
> [1],\qquad[-1],\qquad
> \begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source issue:** The missing word “nonreal” is preserved rather than silently repaired.
- **Source status:** The printed wording and both parts were visually verified at [S1, Ch. 8, M.12, printed p. 260, PDF p. 272]. The corrected solution is independent.

