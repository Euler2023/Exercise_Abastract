---
title: "Exercise LA401: Triangular Basis for a Nilpotent Map"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - nilpotent-operators
  - triangular-matrices
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 9, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise LA401: Triangular Basis for a Nilpotent Map

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 9
> Let $E$ be a vector space over $k$, of dimension $n$. Let $T:E\to E$ be a linear map such that $T$ is nilpotent, that is $T^m=0$ for some positive integer $m$. Show that there exists a basis of $E$ over $k$ such that the matrix of $T$ with respect to this basis is strictly upper triangular.

## Hints

> [!hint]- Hint 1
> Consider the increasing sequence $\ker T\subseteq\ker T^2\subseteq\cdots\subseteq E$.

> [!hint]- Hint 2
> Extend a basis of each kernel to a basis of the next one, and place earlier kernel vectors first.

## Solution

> [!success]- Independent derivation
> Put $K_0=0$ and $K_j=\ker T^j$ for $j\ge1$. Since $T^m=0$, the chain reaches $K_m=E$. Choose a basis $\mathcal B_1$ of $K_1$; successively extend it to bases $\mathcal B_2,\ldots,\mathcal B_m$ of $K_2,\ldots,K_m$. Order the final basis $\mathcal B_m$ so that the vectors added at each stage occur after all vectors from the preceding stage.
>
> If a basis vector $v$ first appears in $\mathcal B_j$, then $v\in K_j$ and
> $$
> T^{j-1}(Tv)=T^jv=0,
> $$
> so $Tv\in K_{j-1}$. The latter subspace is spanned by vectors occurring strictly earlier than $v$. Hence the coordinate column of $Tv$ has nonzero entries only in rows earlier than the column of $v$. Every entry on or below the diagonal is zero, exactly saying that the matrix of $T$ is strictly upper triangular.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]

## Notes

- The statement was checked against [S2, Ch. XIII, Exercise 9, printed p. 546, PDF p. 561]. The kernel-filtration proof is independently supplied.
- This proof needs neither an algebraic closure nor Jordan canonical form.
