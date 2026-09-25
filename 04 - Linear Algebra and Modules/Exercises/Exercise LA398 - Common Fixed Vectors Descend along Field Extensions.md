---
title: "Exercise LA398: Common Fixed Vectors Descend along Field Extensions"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-actions
  - field-extensions
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 6, printed p. 545, PDF p. 560"
created: 2026-09-26
---

# Exercise LA398: Common Fixed Vectors Descend along Field Extensions

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 6
> Let $S$ be a set of $n\times n$ matrices over a field $k$. Show that there exists a column vector $X\ne0$ of dimension $n$ in $k$ such that $MX=X$ for all $M\in S$ if and only if there exists such a vector in some extension field $k'$ of $k$.

## Hints

> [!hint]- Hint 1
> The fixed-vector condition is a homogeneous linear system: $(M-I)X=0$ for every $M\in S$.

> [!hint]- Hint 2
> Even if $S$ is infinite, its equations span a finite-dimensional space of linear forms. Their rank cannot change after extending scalars.

## Solution

> [!success]- Independent derivation
> A common fixed vector is an element of
> $$
> U_k=\bigcap_{M\in S}\ker(M-I:k^n\to k^n).
> $$
> The forward implication holds by regarding a vector in $k^n$ as one in $(k')^n$.
>
> For the converse, collect every row of every matrix $M-I$ into a family of linear forms on $k^n$. Their $k$-span has finite dimension $r\le n$; choose a basis of this span consisting of $r$ forms from that family, and let $B$ be the corresponding $r\times n$ matrix. A vector is fixed by every $M\in S$ exactly when $BX=0$, because the chosen forms span all equations.
>
> Row reduction over $k$ gives the same rank $r$ for $B$ after extending scalars to $k'$. A nonzero common fixed vector in $(k')^n$ means $\operatorname{rank}_{k'}B<n$; thus $r<n$. Rank-nullity over $k$ then gives a nonzero vector in $\ker(B:k^n\to k^r)=U_k$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- The problem statement was checked against [S2, Ch. XIII, Exercise 6, printed p. 545, PDF p. 560]. The proof is independently supplied.
- No finiteness assumption on $S$ is needed: the space of linear forms on $k^n$ has dimension $n$. This is the simultaneous version of Exercise 4(b).
