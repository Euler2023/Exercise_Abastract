---
title: "Exercise G208: Adjacent Transpositions Generate the Symmetric Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.1, printed p. 223, PDF p. 235; Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 38, printed pp. 78-79, PDF pp. 93-94"
created: 2026-08-27
---

# Exercise G208: Adjacent Transpositions Generate the Symmetric Group

## Problem Statement

> [!question] Exercise 5.1
> **(a)** Prove that $(12),(23),\ldots,(n-1,n)$ generate $S_n$. **(b)** How many transpositions are needed to write $(12\cdots n)$? **(c)** Prove that $(12\cdots n)$ and $(12)$ generate $S_n$.

> [!question] Lang Exercise 38
> (a) Show that $(12),(13),\ldots,(1n)$ generate $S_n$.
>
> (b) Show that $(12),(23),\ldots,(n-1,n)$ generate $S_n$.
>
> (c) Show that $(12)$ and $(1\,2\,\ldots\,n)$ generate $S_n$.
>
> (d) If $n$ is prime, show that $(1\,2\,\ldots\,n)$ together with any transposition $(rs)$ generates $S_n$.

## Hints

> [!hint]- Hint 1
> Express $(ij)$ through adjacent transpositions and conjugate $(12)$ by the long cycle.

## Solution

> [!success]- Solution
> For $i<j$,
>
> $$
> (ij)=(i,i+1)\cdots(j-1,j)\cdots(i,i+1),
> $$
>
> so adjacent transpositions generate every transposition and hence $S_n$. The long cycle equals a product of $n-1$ adjacent transpositions; $n-1$ is minimal because each transposition changes the number of cycles by at most one. If $c=(12\cdots n)$, then the conjugates $c^{i-1}(12)c^{-(i-1)}=(i,i+1)$ generate $S_n$. $\square$
>
> For Lang (a), every transposition not involving $1$ satisfies
>
> $$
> (ij)=(1i)(1j)(1i),
> $$
>
> so the star transpositions generate all transpositions. For Lang (d), identify the letters with $\mathbb Z/n\mathbb Z$ and put $c=(1\,2\,\ldots\,n)$. The conjugates $c^k(rs)c^{-k}$ are the transpositions joining vertices whose difference is $s-r$. Because $n$ is prime and $s-r\ne0$, repeated addition of this difference reaches every vertex. These edges form a connected graph, and transpositions along the edges of a connected graph generate the full symmetric group. Hence $c$ and $(rs)$ generate $S_n$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.1, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.
- **Additional source:** [S2, Ch. I, Ex. 38, printed pp. 78-79, PDF pp. 93-94]; all four parts, including the prime-degree arbitrary-transposition case, were checked and added.
