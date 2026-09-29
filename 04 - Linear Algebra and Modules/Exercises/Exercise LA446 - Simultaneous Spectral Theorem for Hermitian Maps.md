---
title: "Exercise LA446: Simultaneous Spectral Theorem for Hermitian Maps"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - spectral-theorem
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 4, printed p. 596, PDF p. 611"
created: 2026-09-29
---

# Exercise LA446: Simultaneous Spectral Theorem for Hermitian Maps

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 4
> Let $E$ be a finite dimensional non-zero vector space over $\mathbb C$, with a positive definite hermitian product. Let $A,B:E\to E$ be a hermitian endomorphism. Assume that $AB=BA$. Prove that there exists a basis of $E$ consisting of common eigenvectors for $A$ and $B$.

## Hints

> [!hint]- Hint 1: Preserve the eigenspaces of one map
> If $Av=\lambda v$, commutativity implies $A(Bv)=\lambda Bv$. Thus each $A$-eigenspace is $B$-invariant.

> [!hint]- Hint 2: Diagonalize the restrictions
> Prove the Hermitian spectral theorem by splitting off an eigenline and its orthogonal complement. Apply it to $A$, then to the restriction of $B$ on each eigenspace of $A$.

## Solution

> [!success]- Independent solution
> We first prove the Hermitian spectral fact needed here. Use Lang's convention that the inner product is linear in its first variable. For a Hermitian operator $C$ on a nonzero finite-dimensional complex space, the fundamental theorem of algebra gives an eigenvector $v\ne0$, say $Cv=\lambda v$. Then
>
> $$
> \lambda\langle v,v\rangle
> =\langle Cv,v\rangle
> =\langle v,Cv\rangle
> =\overline\lambda\langle v,v\rangle.
> $$
>
> Positive definiteness implies $\lambda\in\mathbb R$. If $x\perp v$, then $\langle Cx,v\rangle=\langle x,Cv\rangle=0$, so $v^\perp$ is invariant. The restriction of $C$ there is again Hermitian. Normalize $v$ and induct on dimension to obtain an orthonormal eigenbasis. Moreover eigenvectors $v,w$ with distinct real eigenvalues $\lambda,\mu$ satisfy $(\lambda-\mu)\langle v,w\rangle=0$, so their eigenspaces are orthogonal.
>
> Applying this result to $A$ gives the orthogonal decomposition
>
> $$
> E=\bigoplus_{\lambda} E_\lambda,
> \qquad E_\lambda=\ker(A-\lambda I).
> $$
>
> For $v\in E_\lambda$, $A(Bv)=B(Av)=\lambda Bv$, so $B(E_\lambda)\subseteq E_\lambda$. The restricted inner product is positive definite, and for $x,y\in E_\lambda$ the identity $\langle Bx,y\rangle=\langle x,By\rangle$ shows that $B|_{E_\lambda}$ is Hermitian. Apply the proved spectral fact to each such restriction. The union of these orthonormal bases is an orthonormal basis of $E$, and each vector is an eigenvector for both $A$ and $B$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source and proof status:** [S2, Ch. XV, Ex. 4, printed p. 596, PDF p. 611], checked visually. Both named operators are understood to be Hermitian despite the printed singular noun. The proof is independent and establishes the one-operator spectral fact it uses.
- **Proof inputs:** The fundamental theorem of algebra and orthogonal-complement decomposition are the prior inputs. Commutativity is used to preserve the eigenspaces; the conclusion is stronger than requested because the common eigenbasis can be orthonormal.
