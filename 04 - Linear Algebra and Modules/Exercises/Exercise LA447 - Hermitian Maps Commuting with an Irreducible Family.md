---
title: "Exercise LA447: Hermitian Maps Commuting with an Irreducible Family"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - invariant-subspaces
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 5, printed p. 596, PDF p. 611"
created: 2026-09-29
---

# Exercise LA447: Hermitian Maps Commuting with an Irreducible Family

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 5
> Let $E$ be a finite-dimensional space over the complex, with a positive definite hermitian form. Let $S$ be a set of ($\mathbb C$-linear) endomorphisms of $E$ having no invariant subspace except $0$ and $E$. (This means that if $F$ is a subspace of $E$ and $BF\subseteq F$ for all $B\in S$, then $F=0$ or $F=E$.) Let $A$ be a hermitian map of $E$ into itself such that $AB=BA$ for all $B\in S$. Show that $A=\lambda I$ for some real number $\lambda$.
>
> **Printed hint.** Show that there exists exactly one eigenvalue of $A$. If there were two eigenvalues, say $\lambda_1\ne\lambda_2$, one could find two polynomials $f$ and $g$ with real coefficients such that $f(A)\ne0$, $g(A)\ne0$ but $f(A)g(A)=0$. Let $F$ be the kernel of $g(A)$ and get a contradiction.

## Hints

> [!hint]- Hint 1: Use one eigenspace directly
> A nonzero eigenspace of $A$ is invariant under every operator commuting with $A$.

> [!hint]- Hint 2: Apply the irreducibility hypothesis
> The eigenspace must equal $E$. Hermitian self-adjointness makes its eigenvalue real.

## Solution

> [!success]- Independent solution
> If $E=0$, take $\lambda=0$. Suppose $E\ne0$. The characteristic polynomial of $A$ has a complex root, so choose $v\ne0$ with $Av=\lambda v$. The Hermitian condition, with the inner product linear in its first variable, gives
>
> $$
> \lambda\langle v,v\rangle=\langle Av,v\rangle
> =\langle v,Av\rangle=\overline\lambda\langle v,v\rangle.
> $$
>
> Thus $\lambda$ is real. Let $F=\ker(A-\lambda I)$, which contains $v$ and is nonzero. For $B\in S$ and $x\in F$,
>
> $$
> (A-\lambda I)Bx=B(A-\lambda I)x=0.
> $$
>
> Hence $F$ is invariant under every $B\in S$. The assumption forces $F=E$, so $Ax=\lambda x$ for every $x\in E$, proving $A=\lambda I$.
>
> To connect this with the printed hint, use the Hermitian eigenbasis proved in LA446 and let $\lambda_1,\ldots,\lambda_r$ be the distinct real eigenvalues. If $r\geq2$, set $g(t)=t-\lambda_1$ and $f(t)=\prod_{j=2}^r(t-\lambda_j)$. Both $f(A)$ and $g(A)$ are nonzero on appropriate eigenvectors, but $f(A)g(A)=0$ on an eigenbasis. Then $\ker g(A)$ is nonzero, proper, and invariant under every $B\in S$, the same contradiction.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA446 - Simultaneous Spectral Theorem for Hermitian Maps|Exercise LA446]]

## Notes

- **Source and proof status:** The complete statement and printed hint were checked at [S2, Ch. XV, Ex. 5, printed p. 596, PDF p. 611]. The eigenspace argument is an independent proof; the optional polynomial-hint expansion invokes the Hermitian eigenbasis already proved in LA446.
- **Boundary:** For $E=0$ the conclusion holds but there is no eigenvalue belonging to a nonzero eigenvector; thus the printed hint's “exactly one eigenvalue” applies to the nonzero case. The family $S$ need not itself consist of Hermitian operators.
