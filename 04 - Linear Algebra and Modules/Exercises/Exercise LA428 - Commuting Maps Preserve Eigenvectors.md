---
title: "Exercise LA428: Commuting Maps Preserve Eigenvectors"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
  - commuting-operators
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Representation of One Endomorphism, Exercise 12, printed p. 568, PDF p. 583"
created: 2026-09-29
---

# Exercise LA428: Commuting Maps Preserve Eigenvectors

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 12
> Let $E$ be finite dimensional over the field $k$. Let $A\in\operatorname{End}_k(E)$. Let $v$ be an eigenvector for $A$. Let $B\in\operatorname{End}_k(E)$ be such that $AB=BA$. Show that $Bv$ is also an eigenvector for $A$ (if $Bv\ne0$) with the same eigenvalue.

## Hints

> [!hint]- Hint 1
> Write $Av=\alpha v$ and compute $A(Bv)$.

> [!hint]- Hint 2
> Use $AB=BA$ first, then the $k$-linearity of $B$ to move the scalar $\alpha$ outside $B$.

## Solution

> [!success]- Independent derivation
> Since $v$ is an eigenvector, $v\ne0$ and $Av=\alpha v$ for some $\alpha\in k$. The commutation relation and linearity imply
>
> $$
> A(Bv)=(AB)v=(BA)v=B(Av)=B(\alpha v)=\alpha Bv.
> $$
>
> Thus, whenever $Bv\ne0$, the vector $Bv$ is an eigenvector for $A$ with eigenvalue $\alpha$.
>
> Including zero gives the invariant-subspace formulation
>
> $$
> B\bigl(\ker(A-\alpha I)\bigr)\subseteq\ker(A-\alpha I).
> $$
>
> Indeed, the same computation applies to every element of this kernel, including zero. This formulation allows $B$ to kill some eigenvectors and will be used for simultaneous diagonalization.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA427 - Eigenspaces Are Linear Subspaces|Exercise LA427]]

## Notes

- **Source and proof status:** The statement, including the qualification $Bv\ne0$, was checked against [S2, Ch. XIV, Ex. 12, printed p. 568, PDF p. 583]. The proof and invariant-subspace formulation are independent derivations.
- **Boundary:** The nonzero qualification is essential: take $B=0$. Commutation preserves each eigenspace, but it does not say that $Bv$ is a scalar multiple of $v$ unless that eigenspace has dimension one. Finite dimensionality is not needed for this argument.
