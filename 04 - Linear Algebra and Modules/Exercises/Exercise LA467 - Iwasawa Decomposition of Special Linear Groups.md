---
title: "Exercise LA467: Iwasawa Decomposition of Special Linear Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 25, printed p. 600, PDF p. 615"
created: 2026-09-29
---

# Exercise LA467: Iwasawa Decomposition of Special Linear Groups

## Problem Statement

> [!question] Lang XV.25
> Let now $G=SL_n(\mathbb R)$, and let $K,A$ be the corresponding subgroups having determinant $1$. Show that the product $U\times A\times K\to UAK$ again gives a bijection with $G$.

## Hints

> [!hint]- Hint 1
> Use the unique decomposition from Exercise 24, and take determinants.

> [!hint]- Hint 2
> The diagonal factor has positive determinant, while a real orthogonal matrix has determinant $1$ or $-1$.

## Solution

> [!success]- Independent derivation
> Here $U$ consists of real upper triangular matrices with all diagonal entries $1$, $A$ consists of positive diagonal matrices of determinant $1$, and $K=SO(n)$. By [[04 - Linear Algebra and Modules/Exercises/Exercise LA466 - Iwasawa Decomposition of General Linear Groups|Exercise LA466]], every $g\in SL_n(\mathbb R)$ has a unique factorization $g=uak$ with $u\in U$, $a$ positive diagonal, and $k$ orthogonal, initially without imposing determinant $1$ on the last two factors.
>
> Taking determinants gives
> $$
> 1=\det(g)=\det(a)\det(k).
> $$
> Since $\det(a)>0$ and $\det(k)\in\{1,-1\}$, we have $\det(k)=1$ and then $\det(a)=1$. Thus the factorization lies in the required subgroups. Conversely a product of these three factors has determinant $1$. Uniqueness follows from the uniqueness already proved in Exercise LA466.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- Source: [S2, Ch. XV, Exercise 25, printed p. 600, PDF p. 615], visually verified.
- Proof input: the reverse Gram–Schmidt decomposition, proved independently in Exercise LA466.
- The source's shared [JoL 01], Chapter I reference is not used in this proof. The statement concerns the real special linear group; the same determinant argument over $\mathbb C$ uses $|\det k|=1$ and gives $k\in SU(n)$.
