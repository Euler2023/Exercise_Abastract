---
title: "Exercise LA453: Exponentials and Logarithms of Symmetric and Skew Adjoint Maps"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-exponential
  - matrix-logarithm
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 11, printed pp. 597–598, PDF pp. 612–613"
created: 2026-09-29
---

# Exercise LA453: Exponentials and Logarithms of Symmetric and Skew Adjoint Maps

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 11
> Again, let $E$ be non-zero finite dimensional over $\mathbb R$, and with a positive definite symmetric form. Let $A:E\to E$ be a linear map. Prove:
>
> (a) If $A$ is symmetric (resp. alternating), then $\exp(A)$ is symmetric positive definite (resp. real unitary).
>
> (b) If $A$ is a linear automorphism of $E$ sufficiently close to $I$, and is symmetric positive definite (resp. real unitary), then $\log A$ is symmetric (resp. alternating).
>
> (c) More generally, if $A$ is positive definite, then $\log A$ is symmetric.

> [!info] Terminology and logarithm branch
> For an operator, “alternating” here means $A^*=-A$, equivalently the real bilinear form $(x,y)\mapsto\langle Ax,y\rangle$ is alternating. “Real unitary” means orthogonal, and positive definite includes symmetry. In (b), use the power-series logarithm of LA452; the explicit condition $\|A-I\|<1/4$ is sufficient. In (c), use the spectral logarithm of a positive definite operator.

## Hints

> [!hint]- Hint 1: Take adjoints term by term
> Convergence of the operator series gives $(\exp A)^*=\exp(A^*)$ and, near $I$, $(\log A)^*=\log(A^*)$.

> [!hint]- Hint 2: Separate the symmetric and orthogonal cases
> For symmetric maps, use real eigenvalues and scalar exponentials or logarithms. For an orthogonal $A$ near $I$, combine $A^*=A^{-1}$ with the local identity $\log A+\log(A^{-1})=0$.

## Solution

> [!success]- Independent derivation from the convergent series
> Denote by $A^*$ the adjoint for the real positive definite scalar product. The adjoint is a continuous real-linear map on the finite-dimensional operator space, with $(A^m)^*=(A^*)^m$. Thus taking adjoints commutes with the convergent exponential series and with any convergent logarithm series.
>
> **(a), symmetric case.** The real symmetric spectral theorem gives an orthonormal basis in which $A=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ with $\lambda_i\in\mathbb R$. Evaluation of the exponential series gives $\exp A=\operatorname{diag}(e^{\lambda_1},\ldots,e^{\lambda_n})$ in the same basis. This is symmetric and all its eigenvalues are strictly positive. Explicitly, its quadratic form is $\sum_i e^{\lambda_i}x_i^2>0$ for $x\ne0$.
>
> **(a), alternating case.** If $A^*=-A$, then
>
> $$
> (\exp A)^*\exp A
> =\exp(A^*)\exp A
> =\exp(-A)\exp A=I.
> $$
>
> The last equality is the commuting exponential law proved in LA452. Hence $\exp A$ is real unitary.
>
> **(b), symmetric case.** If $A^*=A$ and $\|A-I\|<1/4$, then the logarithm series converges and each of its terms is symmetric. Taking adjoints of its limit gives
>
> $$
> (\log A)^*=\log(A^*)=\log A.
> $$
>
> This proves symmetry of $\log A$ in the stated positive definite case.
>
> **(b), real unitary case.** Suppose $A^*A=I$ and $\|A-I\|<1/4$. An orthogonal map and its inverse preserve norms, so left multiplication by $A^{-1}$ preserves operator norms. Thus
>
> $$
> \|A^{-1}-I\|=\|-A^{-1}(A-I)\|=\|A-I\|<1/4.
> $$
>
> The operators $A,A^{-1}$ commute and satisfy the common neighborhood bounds established in LA452. Its local product law therefore yields
>
> $$
> 0=\log I=\log(AA^{-1})=\log A+\log(A^{-1}).
> $$
>
> Since $A^*=A^{-1}$ and both series converge, we conclude
>
> $$
> (\log A)^*=\log(A^*)=\log(A^{-1})=-\log A.
> $$
>
> This is the required alternating, or skew-adjoint, property.
>
> **(c).** For arbitrary symmetric positive definite $A$, its spectral logarithm acts as the real scalar $\log\lambda$ on each orthogonal eigenspace with eigenvalue $\lambda>0$. Its matrix in an orthonormal eigenbasis is real diagonal, hence symmetric. This removes the closeness condition for the positive definite case.
>
> Finally, the terminology equivalence in the information box follows from polarization: $A^*=-A$ gives $\langle Ax,x\rangle=-\langle x,Ax\rangle$, hence $\langle Ax,x\rangle=0$ over $\mathbb R$. Conversely, if this quadratic expression vanishes for every $x$, evaluation at $x+y$ gives $\langle Ax,y\rangle+\langle Ay,x\rangle=0$, which is precisely $A^*=-A$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA452 - Operator Norm Exponential and Local Logarithm|Exercise LA452]]

## Notes

- **Source and proof status:** The complete three-part statement, including the page continuation, was checked at [S2, Ch. XV, Ex. 11, printed pp. 597–598, PDF pp. 612–613]. The derivation is independent; it uses the convergent series and product laws proved in LA452 and [S2, Ch. XV, §7, Theorem 7.1 and Corollary 7.2, printed p. 585, PDF p. 600], checked visually.
- **Boundary:** The exponential statement is global, while the series logarithm statement for orthogonal maps uses a neighborhood of $I$. Part (c) uses the separate spectral definition for positive definite operators. It does not assert that every real matrix has a real logarithm.
