---
title: "Exercise LA417: Strictly Upper Triangular Matrices Are Nilpotent"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - nilpotent-matrices
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 1, printed p. 567, PDF p. 582"
created: 2026-09-29
---

# Exercise LA417: Strictly Upper Triangular Matrices Are Nilpotent

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 1
> Let $T$ be an upper triangular square matrix over a commutative ring (i.e. all the elements below and on the diagonal are $0$). Show that $T$ is nilpotent.

> [!warning] Source issue: triangular terminology
> The printed phrase is “upper triangular,” but its parenthetical condition includes the diagonal and therefore means **strictly upper triangular**. The proof uses that explicit condition. Without it the assertion is false: the identity matrix over a nonzero ring is upper triangular and is not nilpotent.

## Hints

> [!hint]- Hint 1: Follow the indices
> In a product $t_{i_0i_1}t_{i_1i_2}\cdots t_{i_{m-1}i_m}$, a factor vanishes whenever its first index is at least its second.

> [!hint]- Hint 2: Count a strictly increasing chain
> A potentially nonzero entry of $T^m$ requires $m+1$ strictly increasing indices in $\{1,\ldots,n\}$.

## Solution

> [!success]- Solution
> Let $T=(t_{ij})$ have size $n\geq1$, with $t_{ij}=0$ for $i\geq j$. Matrix multiplication gives
>
> $$
> (T^m)_{ij}=\sum_{i_1,\ldots,i_{m-1}=1}^n
> t_{ii_1}t_{i_1i_2}\cdots t_{i_{m-1}j}.
> $$
>
> Every summand is zero unless $i<i_1<\cdots<i_{m-1}<j$. For $m=n$ this would be a strictly increasing list of $n+1$ elements of an $n$-element set, which cannot exist. Thus every entry of $T^n$ is zero, so $T$ is nilpotent, with nilpotence index at most $n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 1, printed p. 567, PDF p. 582]. The statement and its parenthesis were checked on the original page image. The index-counting proof is an independent derivation.
- **Boundary:** No division or cancellation is used. The same proof works over a noncommutative ring, although the exercise assumes commutativity. For the zero-dimensional module its sole endomorphism is already zero.
