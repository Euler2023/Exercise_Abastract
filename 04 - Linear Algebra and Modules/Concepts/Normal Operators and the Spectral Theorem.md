---
title: Normal Operators and the Spectral Theorem
aliases:
  - Spectral Theorem
  - Normal Matrices
topic: linear-algebra
tags:
  - concept
  - theorem
  - linear-algebra
  - normal-operators
  - spectral-theorem
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §8.6, printed pp. 242–245, PDF pp. 254–257"
source_status: verified
status: not-started
---

# Normal Operators and the Spectral Theorem

## Definitions

Let $T$ be an operator on a finite-dimensional Hermitian space. Its adjoint $T^*$ is characterized by

$$
(Tv,w)=(v,T^*w).
$$

The operator is **normal** if $T^*T=TT^*$, **Hermitian** if $T^*=T$, and **unitary** if $T^*T=I$. Real analogues are symmetric and orthogonal operators.

## Spectral Theorem

> [!abstract] Normal spectral theorem
> A normal operator on a finite-dimensional complex Hermitian space has an orthonormal basis of eigenvectors. Equivalently, a normal matrix $A$ admits
>
> $$
> U^*AU=D
> $$
>
> with $U$ unitary and $D$ diagonal.

> [!abstract] Hermitian and real symmetric cases
> Hermitian matrices are unitarily diagonalizable with real diagonal entries. Real symmetric matrices are orthogonally diagonalizable over $\mathbb R$.

## Characterizations

For an operator on a Hermitian space:

$$
\begin{aligned}
T\text{ Hermitian}
&\iff (Tv,w)=(v,Tw),\\
T\text{ unitary}
&\iff (Tv,Tw)=(v,w),\\
T\text{ normal}
&\iff (Tv,Tw)=(T^*v,T^*w).
\end{aligned}
$$

If $A=UDU^*$ is normal, then its additional structure is read from the eigenvalues:

$$
A\text{ Hermitian}\iff\lambda_i\in\mathbb R,
\qquad
A\text{ unitary}\iff|\lambda_i|=1.
$$

## Main Consequences

1. Eigenvectors of a Hermitian operator belonging to distinct eigenvalues are orthogonal.
2. A real symmetric matrix is positive definite exactly when all its eigenvalues are positive.
3. Commuting Hermitian matrices can be simultaneously unitarily diagonalized.
4. Fourier bases diagonalize cyclic shifts and circulant matrices.
5. A positive definite symmetric matrix has a positive square root and a factorization $A=P^{\mathsf T}P$.

## Examples

> [!example] Cyclic shift
> The cyclic shift is diagonalized by the discrete Fourier basis; its eigenvalues are the roots of unity.

> [!example] Real skew-symmetric matrix
> If $A^{\mathsf T}=-A$, then $iA$ is Hermitian. Thus $A$ is normal and its complex eigenvalues are purely imaginary.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Exercises

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA237 - Intrinsic Tests for Hermitian and Unitary Operators|LA237]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA238 - Vanishing under a Symmetric Square|LA238]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA239 - Symmetric Orthogonal Matrices in Dimension Three|LA239]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA240 - Matrices with Diagonal Gram Matrix|LA240]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA241 - Spectral Structure of Real Skew-Symmetric Matrices|LA241]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA242 - A Normality Test using A Star A Inverse|LA242]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA243 - Real Normal Matrices with Real Spectrum|LA243]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA244 - Fourier Modes on the Unit Circle|LA244]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA245 - Diagonalizing the Exchange Matrix|LA245]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA246 - A Hermitian Form Induced by an Operator|LA246]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA247 - Orthogonality of Hermitian Eigenspaces|LA247]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA248 - Unitary Diagonalization of a Two by Two Hermitian Matrix|LA248]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA249 - Orthogonal Diagonalization of Three Real Matrices|LA249]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA250 - Positive Eigenvalues and Positive Definiteness|LA250]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA251 - Kernels and Orthogonal Images|LA251]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA252 - Unitarity of the Fourier Matrix|LA252]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA253 - Simultaneous Diagonalization of Commuting Hermitian Matrices|LA253]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA254 - Square Root Factorization of a Positive Matrix|LA254]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA255 - Diagonalization of the Cyclic Shift|LA255]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA256 - Normality of Circulant Matrices|LA256]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA257 - Spectral Tests for Hermitian and Unitary Matrices|LA257]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA258 - Spectral Theorem for Symmetric Operators|LA258]]

## Source and Proof Status

- The adjoint characterizations are Proposition 8.6.3; the normal, Hermitian, unitary, and real symmetric spectral theorems are Theorems 8.6.6–8.6.10 in [S1, Ch. 8, §8.6, printed pp. 242–245, PDF pp. 254–257].
- The consequences above are independently derived in Exercises LA237–LA258.

