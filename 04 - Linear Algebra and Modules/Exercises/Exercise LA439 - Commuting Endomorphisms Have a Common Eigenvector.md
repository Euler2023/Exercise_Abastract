---
title: "Exercise LA439: Commuting Endomorphisms Have a Common Eigenvector"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvectors
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 23, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA439: Commuting Endomorphisms Have a Common Eigenvector

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 23
> Let $E$ be a finite-dimensional vector space over an algebraically closed field $k$. Let $A,B$ be $k$-endomorphisms of $E$ which commute, i.e. $AB=BA$. Show that $A$ and $B$ have a common eigenvector. [Hint: Consider a subspace consisting of all vectors having a fixed element of $k$ as eigenvalue.]

> [!warning] Source convention: zero and nonzero eigenvectors
> Lang's definition on printed p. 562 / PDF p. 577 permits the zero vector to be called an eigenvector; the subsequent definition of an eigenvalue requires a nonzero vector. The present vault uses the usual convention that an eigenvector is nonzero. For the meaningful conclusion under that convention, assume $E\ne0$. If $E=0$, there is no nonzero common eigenvector, although the printed statement is trivially satisfied by $0$ under Lang's broader terminology. The argument below proves the nonzero conclusion when $E\ne0$.

## Hints

> [!hint]- Hint 1: Preserve an eigenspace
> Choose an eigenvalue $\lambda$ of $A$ and let $E_\lambda=\ker(A-\lambda I)$. Commutativity implies $B(E_\lambda)\subseteq E_\lambda$.

> [!hint]- Hint 2: Apply algebraic closure a second time
> The restriction $B|_{E_\lambda}$ is an endomorphism of a nonzero finite-dimensional space. Find an eigenvector of that restriction.

## Solution

> [!success]- Independent solution of the nonzero version
> Assume $E\ne0$. Its characteristic polynomial $\det(tI-A)$ has positive degree and hence has a root $\lambda\in k$, since $k$ is algebraically closed. Thus $A-\lambda I$ is singular and $E_\lambda=\ker(A-\lambda I)$ is nonzero.
>
> If $v\in E_\lambda$, then
>
> $$
> (A-\lambda I)Bv=B(A-\lambda I)v=0,
> $$
>
> so $E_\lambda$ is invariant under $B$. The characteristic polynomial of $B|_{E_\lambda}$ also has positive degree and a root $\mu\in k$. Its kernel at that root contains a nonzero vector $w$; equivalently, $Bw=\mu w$ with $w\in E_\lambda\setminus\{0\}$. By the definition of $E_\lambda$, also $Aw=\lambda w$. Hence $w$ is a common nonzero eigenvector.
>
> If $E=0$, the only vector is $0$. It satisfies $A0=\lambda0$ and $B0=\mu0$ for every $\lambda,\mu\in k$, explaining the zero-space case in the source's terminology without treating $0$ as a nonzero eigenvector in this vault.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]

## Notes

- **Source and proof status:** The statement and printed hint were checked on [S2, Ch. XIV, Ex. 23, printed p. 570, PDF p. 585]. The hint is expanded into an independent proof.
- **Verified notation:** The permissive source definition of eigenvector is on [S2, Ch. XIV, §3, immediately before Theorem 3.2, printed p. 562, PDF p. 577], checked on the page image. The nonzero convention is made explicit rather than silently changing the source statement.
- **Boundary:** Algebraic closure is sufficient for both successive eigenvalue choices. Without it the conclusion may fail: over $\mathbb R$, a rotation with matrix $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ commutes with the identity but has no nonzero real eigenvector.
- **Proof inputs:** The determinant criterion for invertibility, existence of a root over an algebraically closed field, and the characteristic-polynomial criterion for an eigenvalue are used; the latter criterion is also proved in the source's Theorem 3.2 on the verified definition page.
