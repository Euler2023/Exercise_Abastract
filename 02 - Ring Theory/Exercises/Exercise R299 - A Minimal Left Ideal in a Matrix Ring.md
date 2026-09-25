---
title: "Exercise R299: A Minimal Left Ideal in a Matrix Ring"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - matrix-rings
  - minimal-ideals
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 13, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise R299: A Minimal Left Ideal in a Matrix Ring

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 13
> Let $R$ be the ring of $n\times n$ matrices over a field $k$. Let $L$ be the subset of matrices which are $0$ except on the first column.
>
> (a) Show that $L$ is a left ideal.
>
> (b) Show that $L$ is a minimal left ideal; that is, if $L'\subset L$ is a left ideal and $L'\ne0$, then $L'=L$. (For more on this situation, see Chapter VII, §5.)

## Hints

> [!hint]- Hint 1
> Write $L=R E_{11}$, where $E_{11}$ has one nonzero entry.

> [!hint]- Hint 2
> A nonzero first column is a nonzero vector $v$. Choose a matrix $B$ sending $v$ to the first standard basis vector.

## Solution

> [!success]- Independently derived solution
> **(a)** For $A\in R$, the product $AE_{11}$ has first column equal to the first column of $A$ and all other columns zero. Thus $L=RE_{11}$. It is closed under addition and additive inverses, and $B(AE_{11})=(BA)E_{11}\in L$ for every $B\in R$, so it is a left ideal.
>
> **(b)** Let $0\ne M\in L'\subseteq L$. Its first column $v\in k^n$ is nonzero. Extend $v$ to a basis of $k^n$ and choose $B\in R$ with $Bv=e_1$. Since the other columns of $M$ vanish, $BM=E_{11}$. The left ideal $L'$ contains $BM$, hence contains $RE_{11}=L$. Therefore $L'=L$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Routing:** The claim is minimality of a one-sided ideal in a noncommutative ring, so the primary toolkit is Ring Theory.
- **Source and proof status:** Parts (a), (b), and the Chapter VII pointer were checked against [S2, Ch. XIII, Ex. 13, printed p. 546, PDF p. 561]. The solution is independently derived.
