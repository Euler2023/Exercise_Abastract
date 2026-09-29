---
title: "Exercise LA451: Positivity Square Roots and Real Polar Decomposition"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - positive-definite
  - polar-decomposition
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 9, printed p. 597, PDF p. 612"
created: 2026-09-29
---

# Exercise LA451: Positivity Square Roots and Real Polar Decomposition

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 9
> **Shared setting for Exercises 9–11.** Let $E$ be a non-zero finite dimensional vector space over $\mathbb R$, with a symmetric positive definite scalar product $g$, which gives rise to a norm $|\ |$ on $E$. Let $A:E\to E$ be a symmetric endomorphism of $E$ with respect to $g$. Define $A\geq0$ to mean $\langle Ax,x\rangle\geq0$ for all $x\in E$.
>
> (a) Show that $A\geq0$ if and only if all eigenvalues of $A$ belonging to non-zero eigenvectors are $\geq0$. Both in the hermitian case and the symmetric case, one says that $A$ is **semipositive** if $A\geq0$, and **positive definite** if $\langle Ax,x\rangle>0$ for all $x\ne0$.
>
> (b) Show that an automorphism $A$ of $E$ can be written in a unique way as a product $A=UP$ where $U$ is real unitary (that is, $U^{\mathsf T}U=I$), and $P$ is symmetric positive definite. For two hermitian or symmetric endomorphisms $A,B$, define $A\geq B$ to mean $A-B\geq0$, and similarly for $A>B$. Suppose $A>0$. Show that there are two real numbers $\alpha>0$ and $\beta>0$ such that $\alpha I\leq A\leq\beta I$.

## Hints

> [!hint]- Hint 1: Use an orthonormal eigenbasis
> For a symmetric operator with eigenvalues $\lambda_i$, its quadratic form is $\sum_i\lambda_i x_i^2$. Define a positive square root by taking positive square roots of the eigenvalues.

> [!hint]- Hint 2: Prove uniqueness on the eigenspaces of the square
> Any symmetric positive square root $Q$ of $S$ commutes with $S$, hence preserves its eigenspaces. On the $\lambda$-eigenspace its own eigenvalues must be $\sqrt\lambda$. For polar decomposition use $S=A^*A$.

## Solution

> [!success]- Independent derivation using the real symmetric spectral theorem
> Write $A^*$ for the adjoint relative to the given real scalar product; its matrix in an orthonormal basis is the transpose. We use Lang's real symmetric spectral theorem, Theorem XV.7.1 and Corollary 7.2: every symmetric operator on this finite-dimensional positive definite space has an orthonormal eigenbasis.
>
> **(a).** If $A\geq0$ and $Av=\lambda v$ with $v\ne0$, then $0\leq\langle Av,v\rangle=\lambda\|v\|^2$, so $\lambda\geq0$. Conversely, take an orthonormal eigenbasis $e_i$ and write $x=\sum_i x_ie_i$. Then
>
> $$
> \langle Ax,x\rangle=\sum_i\lambda_i x_i^2.
> $$
>
> If all $\lambda_i\geq0$, this expression is nonnegative. It is positive for every $x\ne0$ exactly when all $\lambda_i>0$. In the complex Hermitian case the same proof uses the eigenbasis proved in LA446 and replaces $x_i^2$ by $|x_i|^2$.
>
> **Square-root lemma, including uniqueness.** Let $S$ be any symmetric semipositive operator. On each orthogonal eigenspace $E_\lambda(S)$, define $S^{1/2}$ to be $\sqrt\lambda I$. This is basis independent, symmetric, semipositive, and its square is $S$; it is positive definite if $S$ is positive definite.
>
> If $Q$ is another symmetric semipositive operator with $Q^2=S$, then $QS=Q^3=SQ$. Therefore each $E_\lambda(S)$ is $Q$-invariant. The restriction of $Q$ there is symmetric and semipositive, so the real spectral theorem gives an orthonormal eigenbasis for that restriction. Every corresponding eigenvalue $\mu$ satisfies $\mu\geq0$ and $\mu^2=\lambda$, hence $\mu=\sqrt\lambda$. Consequently $Q=\sqrt\lambda I$ on the entire eigenspace, even when that eigenspace has dimension greater than one. This proves $Q=S^{1/2}$ and establishes uniqueness.
>
> **(b), polar decomposition.** In this part let $A$ be an arbitrary automorphism, without assuming that it is symmetric. The operator $S=A^*A$ is symmetric, and
>
> $$
> \langle Sx,x\rangle=\langle Ax,Ax\rangle>0
> \qquad(x\ne0),
> $$
>
> because $A$ is injective. Let $P=S^{1/2}$, which is symmetric positive definite and invertible, and set $U=AP^{-1}$. Then
>
> $$
> U^*U=P^{-1}A^*AP^{-1}=P^{-1}P^2P^{-1}=I.
> $$
>
> Thus $U$ is orthogonal and $A=UP$. If $A=VQ$ is another such decomposition, then
>
> $$
> A^*A=Q^*V^*VQ=Q^2.
> $$
>
> By the proved square-root uniqueness, $Q=P$, and then $V=AP^{-1}=U$.
>
> **(b), positive bounds.** Now let $A$ again be symmetric positive definite, with eigenvalues $\lambda_1,\ldots,\lambda_n>0$. Set $\alpha=\min_i\lambda_i$ and $\beta=\max_i\lambda_i$. These are positive because $n\geq1$. The eigenbasis calculation gives
>
> $$
> \alpha\|x\|^2\leq\langle Ax,x\rangle\leq\beta\|x\|^2
> \qquad\text{for every }x\in E,
> $$
>
> which is exactly $\alpha I\leq A\leq\beta I$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA446 - Simultaneous Spectral Theorem for Hermitian Maps|Exercise LA446]]

## Notes

- **Source and proof status:** The shared setting and all parts were checked at [S2, Ch. XV, Ex. 9, printed p. 597, PDF p. 612]. The imported real spectral theorem was checked at [S2, Ch. XV, §7, Theorem 7.1 and Corollary 7.2, printed p. 585, PDF p. 600]. The positivity criterion, square-root uniqueness, real polar decomposition, and bounds are independently derived above.
- **Uniqueness boundary:** Commutation of $Q$ with $S$ only guarantees invariance of the eigenspaces of $S$; it does not by itself make an arbitrarily chosen eigenvector of $S$ an eigenvector of $Q$. The proof restricts and diagonalizes on each eigenspace before using the nonnegative square root.
- **Terminology:** Positive definite and semipositive here include self-adjointness. “Real unitary” means orthogonal. The product order $A=UP$ is fixed in the uniqueness assertion.
