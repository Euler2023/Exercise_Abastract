---
title: "Exercise LA677: Every Invertible Complex Matrix Has a Logarithm"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 10, printed p. 48, PDF p. 60"
source_refs:
  - "S10/ch-2/sec-6/ex-10"
created: 2026-11-17
---

# Exercise LA677: Every Invertible Complex Matrix Has a Logarithm

## Problem Statement

> [!question] Original Chapter 2, Exercise 10
> Show that every invertible $n\times n$ matrix $A$ can be written as $A=e^X$ for some $X\in M_n(\mathbb C)$.
>
> *Hint:* Theorem A.5 implies that $A$ is similar to a block-diagonal matrix in which each block is of the form $\lambda I+N_\lambda$, with $N_\lambda$ being nilpotent. Use this result and Exercise 9.

The ambient field is $\mathbb C$, as in the chapter and Theorem A.5. The logarithm sought here is any matrix $X$ with $e^X=A$; it need not be given by the series centered at $I$.

## Hints

> [!hint]- Hint 1
> Invertibility forces each eigenvalue $\lambda$ to be nonzero. Factor $\lambda I+N_\lambda$ as $\lambda(I+\lambda^{-1}N_\lambda)$.

> [!hint]- Hint 2
> Choose a scalar logarithm $\ell_\lambda$ of each $\lambda$, and add $\ell_\lambda I$ to the finite logarithm of the unipotent factor.

> [!hint]- Hint 3
> Combine the block logarithms into one block-diagonal matrix, then conjugate it by the same change-of-basis matrix as for $A$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent construction using the generalized-eigenspace decomposition stated in Hall's Theorem A.5 and the nilpotent–unipotent inverse identities proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA676 - Exponential and Logarithm on Nilpotent and Unipotent Matrices|Chapter 2, Exercise 9]].
>
> **1. Decompose into generalized eigenspaces.** Theorem A.5 states that a complex finite-dimensional vector space is the direct sum of the generalized eigenspaces of $A$, each invariant under $A$. On the generalized eigenspace for $\lambda$, the restriction of $A$ has the form $\lambda I+N_\lambda$, where $N_\lambda$ is nilpotent. Consequently, for an invertible change-of-basis matrix $S$,
> $$
> A=SDS^{-1},\qquad
> D=\bigoplus_\lambda(\lambda I+N_\lambda).
> $$
> This is a named linear-algebra input; it is stated and discussed in [S10, Appendix A, §A.3, Theorem A.5, printed p. 412, PDF p. 416].
>
> Since $A$ is invertible, none of its eigenvalues is zero. For each $\lambda$, choose $\theta_\lambda\in\mathbb R$ with $\lambda=|\lambda|e^{i\theta_\lambda}$ and let
> $$
> \ell_\lambda=\log|\lambda|+i\theta_\lambda,
> \qquad e^{\ell_\lambda}=\lambda.
> $$
>
> **2. Construct a logarithm on each block.** Choose a positive integer $r_\lambda$ with $N_\lambda^{r_\lambda}=0$, and set
> $$
> M_\lambda=\lambda^{-1}N_\lambda,\qquad
> K_\lambda=\sum_{j=1}^{r_\lambda-1}
> \frac{(-1)^{j+1}}{j}M_\lambda^j,
> \qquad L_\lambda=\ell_\lambda I+K_\lambda.
> $$
> The matrix $I+M_\lambda$ is unipotent. Exercise 9 gives
> $$
> e^{K_\lambda}=I+M_\lambda.
> $$
> Since the scalar matrix $\ell_\lambda I$ commutes with $K_\lambda$, the commuting-exponentials identity yields
> $$
> e^{L_\lambda}
> =e^{\ell_\lambda I}e^{K_\lambda}
> =\lambda(I+\lambda^{-1}N_\lambda)
> =\lambda I+N_\lambda.
> $$
> The commuting-exponentials identity is Proposition 2.3(5) [S10, §2.1, printed p. 32, PDF p. 44].
>
> **3. Reassemble.** Let $L=\bigoplus_\lambda L_\lambda$ and define $X=SLS^{-1}$. For every nonnegative integer $k$, $(SLS^{-1})^k=SL^kS^{-1}$, and powers of a block-diagonal matrix are taken block by block. Applying these facts termwise to the convergent exponential series gives
> $$
> e^X=S\left(\bigoplus_\lambda e^{L_\lambda}\right)S^{-1}
> =SDS^{-1}=A.
> $$
> This constructs the required complex matrix logarithm.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete exercise and printed hint were checked on a 200 dpi image of printed p. 48 / PDF p. 60. The cited Theorem A.5 was checked on the original image of printed p. 412 / PDF p. 416. It is an imported decomposition theorem, not reproved in this note.
- **Proof provenance:** Hall states the conclusion as Theorem 2.10, printed p. 39 / PDF p. 51, and assigns its proof through Exercises 9 and 10. The block construction above is the vault's independent derivation.
- **Field boundary:** The conclusion concerns complex logarithms. A real invertible matrix need not have a real logarithm: the $1\times1$ matrix $[-1]$ cannot be $[e^x]$ for real $x$, whereas $[-1]=e^{[i\pi]}$ over $\mathbb C$.
- **Nonuniqueness:** If $e^X=A$, then $e^{X+2\pi ikI}=A$ for every integer $k$, since $X$ commutes with $2\pi ikI$. For $n\ge1$ these give distinct logarithms. The construction does not select a globally continuous branch on all of $\mathrm{GL}(n;\mathbb C)$.
- **Concrete verification:** For $A=\begin{pmatrix}-1&1\\0&-1\end{pmatrix}=-I+N$ with $N^2=0$, the construction gives $X=i\pi I-N$. Then $e^X=-(I-N)=A$.
- **Routing:** The principal tools are generalized eigenspaces, nilpotent blocks, and matrix exponentials.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
