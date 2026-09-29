---
title: "Exercise LA450: The Spectral Theorem for Normal Endomorphisms"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - normal-operators
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 8, printed p. 597, PDF p. 612"
created: 2026-09-29
---

# Exercise LA450: The Spectral Theorem for Normal Endomorphisms

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 8
> An endomorphism $B$ of $E$ is said to be normal if $B$ commutes with $B^*$. State and prove a spectral theorem for normal endomorphisms.

> [!info] Inherited setting
> Here $E$ is a finite-dimensional complex vector space with a positive definite Hermitian form, as in Exercises 5–7, and $B^*$ denotes the adjoint for that form.

## Hints

> [!hint]- Hint 1: Compare the kernels of a normal map and its adjoint
> For normal $C$, show that $\|Cx\|^2=\|C^*x\|^2$. Apply this with $C=B-\lambda I$ to an eigenvector of $B$.

> [!hint]- Hint 2: Preserve the orthogonal complement
> An eigenvector $v$ of $B$ is also an eigenvector of $B^*$. Therefore both operators preserve $v^\perp$, where their restrictions still commute.

## Solution

> [!success]- Independent statement and proof
> **Spectral theorem.** An operator on a finite-dimensional positive definite complex Hermitian space is normal if and only if there is an orthonormal basis consisting of its eigenvectors. Equivalently, its matrix in an orthonormal basis is unitarily similar to a diagonal matrix.
>
> Suppose $B$ is normal. For any normal $C$, the adjoint identity gives
>
> $$
> \|Cx\|^2=\langle x,C^*Cx\rangle
> =\langle x,CC^*x\rangle=\|C^*x\|^2.
> $$
>
> In particular $\ker C=\ker C^*$. If $E\ne0$, choose an eigenvector $v\ne0$ of $B$ with eigenvalue $\lambda$; its existence follows from the fundamental theorem of algebra. The operator $C=B-\lambda I$ is normal, since expanding $CC^*$ and $C^*C$ shows their difference is $BB^*-B^*B$. As $Cv=0$, the norm identity yields $C^*v=0$, or $B^*v=\overline\lambda v$.
>
> For $x\perp v$, using the first-variable-linear inner product convention,
>
> $$
> \langle Bx,v\rangle=\langle x,B^*v\rangle=0,
> \qquad
> \langle B^*x,v\rangle=\langle x,Bv\rangle=0.
> $$
>
> Thus both $B$ and $B^*$ preserve $v^\perp$. The restrictions there are still adjoints of one another and commute, so $B|_{v^\perp}$ is normal. Normalize $v$ and apply induction to $v^\perp$. This gives an orthonormal eigenbasis, with the empty basis covering $E=0$.
>
> Conversely, if $B$ is diagonal in an orthonormal basis, its adjoint is diagonal with the conjugate entries. The two diagonal matrices commute, so $B$ is normal. This proves both directions.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source and proof status:** [S2, Ch. XV, Ex. 8, printed p. 597, PDF p. 612], checked visually. The exact theorem and its complete induction proof are independent exposition, not an imported normal spectral theorem.
- **Proof inputs:** The fundamental theorem of algebra, adjoint identities, and positive definite orthogonal decomposition are used. Positive definiteness is essential in deducing a zero vector from zero norm.
- **Boundary:** Over $\mathbb R$, an orthogonal rotation can be normal without a real eigenbasis; the complex field hypothesis in the stated theorem is essential.
