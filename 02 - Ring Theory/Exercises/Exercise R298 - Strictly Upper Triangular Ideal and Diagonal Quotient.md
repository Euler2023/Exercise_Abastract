---
title: "Exercise R298: Strictly Upper Triangular Ideal and Diagonal Quotient"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - matrix-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 11, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise R298: Strictly Upper Triangular Ideal and Diagonal Quotient

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 11
> Let $R$ be the set of all upper triangular $n\times n$ matrices $(a_{ij})$ with $a_{ij}$ in some field $k$, so $a_{ij}=0$ if $i>j$. Let $J$ be the set of all strictly upper triangular matrices. Show that $J$ is a two-sided ideal in $R$. How would you describe the factor ring $R/J$?

## Hints

> [!hint]- Hint 1
> The diagonal entries of a product of two upper triangular matrices depend only on their diagonal entries.

> [!hint]- Hint 2
> Send a matrix to its ordered list of diagonal entries and identify the kernel and image.

## Solution

> [!success]- Independently derived solution
> Define $\delta:R\to k^n$ by $\delta(A)=(a_{11},\ldots,a_{nn})$, with coordinatewise operations on $k^n$. For upper triangular $A,B$,
>
> $$
> (AB)_{ii}=\sum_{j=1}^n a_{ij}b_{ji}=a_{ii}b_{ii},
> $$
>
> because a nonzero summand requires both $i\le j$ and $j\le i$. Thus $\delta(A+B)=\delta(A)+\delta(B)$, $\delta(AB)=\delta(A)\delta(B)$, and $\delta(I_n)=(1,\ldots,1)$.
>
> Every tuple in $k^n$ is the image of its diagonal matrix, so $\delta$ is surjective. Its kernel is exactly the upper triangular matrices with zero diagonal, namely $J$. A kernel of a ring homomorphism is a two-sided ideal: if $A\in R$ and $N\in J$, then $\delta(AN)=\delta(A)\delta(N)=0$ and $\delta(NA)=\delta(N)\delta(A)=0$. The first isomorphism theorem gives
>
> $$
> R/J\cong k^n.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Routing:** The essential object is the two-sided ideal and the quotient of a matrix ring, so this note belongs to Ring Theory.
- **Source and proof status:** The statement was checked against [S2, Ch. XIII, Ex. 11, printed p. 546, PDF p. 561]. The solution is independently derived.
