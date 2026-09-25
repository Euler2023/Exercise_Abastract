---
title: "Exercise LA400: Nilpotence of Strictly Upper Triangular Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - triangular-matrices
  - nilpotence
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 8, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise LA400: Nilpotence of Strictly Upper Triangular Matrices

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 8
> Let $N$ be a strictly upper triangular $n\times n$ matrix, that is $N=(a_{ij})$ and $a_{ij}=0$ if $i\ge j$. Show that $N^n=0$.

## Hints

> [!hint]- Hint 1
> A nonzero summand in an entry of $N^r$ requires a chain of $r$ strict index increases.

> [!hint]- Hint 2
> Such a chain of length $n$ would contain $n+1$ distinct indices between $1$ and $n$.

## Solution

> [!success]- Independent derivation
> For $r\ge1$, the $(i,j)$ entry of $N^r$ is a sum of products
> $$
> a_{i i_1}a_{i_1 i_2}\cdots a_{i_{r-1}j}.
> $$
> A product can be nonzero only if $i<i_1<\cdots<i_{r-1}<j$. For $r=n$ this would require $n+1$ distinct indices in $\{1,\ldots,n\}$, which is impossible. Thus every entry of $N^n$ vanishes, so $N^n=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]

## Notes

- The statement and the condition $i\ge j$ were checked against [S2, Ch. XIII, Exercise 8, printed p. 546, PDF p. 561]. The proof is independent.
- The index argument works over any associative coefficient ring; no field assumption is required.
