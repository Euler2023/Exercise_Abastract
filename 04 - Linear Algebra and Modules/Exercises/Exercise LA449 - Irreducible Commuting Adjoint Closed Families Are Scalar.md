---
title: "Exercise LA449: Irreducible Commuting Adjoint Closed Families Are Scalar"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - adjoints
  - invariant-subspaces
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 7, printed pp. 596–597, PDF pp. 611–612"
created: 2026-09-29
---

# Exercise LA449: Irreducible Commuting Adjoint Closed Families Are Scalar

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 7
> Let $S$ be a commutative set of $\mathbb C$-linear endomorphisms of $E$ having no invariant subspace unequal to $0$ or $E$. Assume in addition that if $B\in S$, then $B^*\in S$. Show that each element of $S$ is of type $\alpha I$ for some complex number $\alpha$.
>
> **Printed hint.** Let $B_0\in S$. Let
>
> $$
> A=\frac12(B_0+B_0^*).
> $$
>
> Show that $A=\lambda I$ for some real $\lambda$.

> [!info] Inherited setting and hint notation
> As in Exercises 5–6, $E$ is a finite-dimensional complex space with a positive definite Hermitian form. “Commutative set” means its members commute pairwise. As in the printed hint, $B_0$ denotes a fixed chosen member of $S$.

## Hints

> [!hint]- Hint 1: Split one chosen operator
> Write $B_0=H+iK$, where $H=(B_0+B_0^*)/2$ and $K=(B_0-B_0^*)/(2i)$ are Hermitian.

> [!hint]- Hint 2: Apply the irreducible-family argument twice
> Because $B_0,B_0^*\in S$, every member of $S$ commutes with both $H$ and $K$. A nonzero eigenspace of either Hermitian map is therefore invariant under all of $S$.

## Solution

> [!success]- Independent solution
> If $E=0$, every endomorphism is zero and the conclusion holds. Otherwise fix $B_0\in S$ and define $H,K$ as in Hint 1. The adjoint calculation in LA448 gives $H^*=H$, $K^*=K$, and $B_0=H+iK$.
>
> For every $C\in S$, the hypotheses give $CB_0=B_0C$ and $CB_0^*=B_0^*C$. Taking the corresponding linear combinations shows $CH=HC$ and $CK=KC$.
>
> Choose a nonzero eigenvector of $H$ over $\mathbb C$. Its eigenvalue $\lambda$ is real, because $\langle Hv,v\rangle=\langle v,Hv\rangle$ and $\langle v,v\rangle>0$. The nonzero space $\ker(H-\lambda I)$ is preserved by every $C\in S$, since $(H-\lambda I)C=C(H-\lambda I)$. Irreducibility forces this kernel to be $E$, so $H=\lambda I$.
>
> Apply exactly the same reasoning to $K$: a nonzero eigenvector exists, its eigenvalue $\mu$ is real, and its eigenspace must be all of $E$. Hence $K=\mu I$. Therefore
>
> $$
> B_0=(\lambda+i\mu)I.
> $$
>
> Since $B_0$ was arbitrary, every member of $S$ is scalar. The argument remains valid when $S$ is empty, in which case the conclusion about its members is vacuous.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA447 - Hermitian Maps Commuting with an Irreducible Family|Exercise LA447]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA448 - Real and Imaginary Hermitian Parts of an Operator|Exercise LA448]]

## Notes

- **Source and proof status:** The complete statement and continued hint were checked at [S2, Ch. XV, Ex. 7, printed pp. 596–597, PDF pp. 611–612]. The printed hint consistently uses $B_0$ for the chosen member. The Hermitian-part argument is independent.
- **Proof inputs:** Existence of a complex eigenvalue follows from the fundamental theorem of algebra. Reality and the invariant-eigenspace step are proved above.
- **Consequence:** If $E\ne0$, the hypotheses in fact force $\dim_{\mathbb C}E=1$: after scalarity is established, every subspace is $S$-invariant, and a higher-dimensional space has a nonzero proper line.
