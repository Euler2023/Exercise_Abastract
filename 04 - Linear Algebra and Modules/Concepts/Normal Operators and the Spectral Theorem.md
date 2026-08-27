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

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The adjoint characterizations are Proposition 8.6.3; the normal, Hermitian, unitary, and real symmetric spectral theorems are Theorems 8.6.6–8.6.10 in [S1, Ch. 8, §8.6, printed pp. 242–245, PDF pp. 254–257].
- The consequences above are independently derived in Exercises LA237–LA258.
