---
title: "Exercise Gal139: Invariant Bases for Semilinear Galois Actions"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - galois-descent
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 32, printed p. 550, PDF p. 565"
created: 2026-09-26
---

# Exercise Gal139: Invariant Bases for Semilinear Galois Actions

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 32 (Invariant bases)
> (Kolchin–Lang, *Proc. AMS* 11, no. 1, 1960.) Let $K/k$ be a finite Galois extension with $G=\operatorname{Gal}(K/k)$. Let $V$ be a finite-dimensional vector space over $K$, with an action of $G$ satisfying $\sigma(av)=\sigma(a)\sigma(v)$ for $a\in K$ and $v\in V$. Prove that $V$ has a $K$-basis $w_1,\ldots,w_n$ with $\sigma(w_i)=w_i$ for every $i$ and $\sigma\in G$. *Hint (source):* Relative to any basis $v_1,\ldots,v_n$, write the action by matrices $A(\sigma)$, solve a matrix cocycle equation for a change-of-basis matrix $B$, and set $(w_i)=B(v_i)$.

## Hints

> [!hint]- Hint 1: Apply Exercise 31
> Choose coordinates $V\simeq K^n$. The semilinear action becomes $T_\sigma(x)=A(\sigma)\sigma(x)$ for matrices satisfying the cocycle identity.

> [!hint]- Hint 2: Choose fixed vectors as columns
> The proof of Exercise 31 constructs a matrix $C$ whose columns are fixed by the semilinear action.

## Solution

> [!success]- Solution
> Choose any $K$-basis $v_1,\ldots,v_n$ and identify $V$ with $K^n$ by coordinates. For each $\sigma\in G$, semilinearity gives a unique matrix $A(\sigma)\in GL_n(K)$ such that the coordinate column of $\sigma(v)$ is $A(\sigma)\sigma(x)$ when the coordinate column of $v$ is $x$. The group-action law implies
>
> $$
> A(\sigma\tau)=A(\sigma)\sigma(A(\tau)).
> $$
>
> Thus $A$ is the noncommutative cocycle of Exercise 31. Its proof supplies a matrix $C\in GL_n(K)$ satisfying $A(\sigma)\sigma(C)=C$ for every $\sigma$. Let $w_j\in V$ be the vector whose coordinate column is the $j$-th column of $C$. Then
>
> $$
> [\sigma(w_j)]_v=A(\sigma)\sigma(Ce_j)=Ce_j=[w_j]_v,
> $$
>
> so each $w_j$ is $G$-fixed. Since $C$ is invertible, its columns form a $K$-basis, and hence so do the $w_j$. This works for arbitrary finite Galois $K/k$, including finite $k$.

## Related Concepts

- [[05 - Galois Theory/Exercises/Exercise Gal138 - Noncommutative Hilbert Ninety for General Linear Groups|Exercise Gal138]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Source and proof status:** [S2, Ch. XIII, Ex. 32, printed p. 550, PDF p. 565]. The semilinearity condition, invariant-basis conclusion, and source hint were checked on the original image. The proof applies the independently derived cocycle result in Exercise 31.
- **Convention:** The source's displayed equation $(\sigma B)A(\sigma)=B$ treats the basis vectors as a column and lets coefficient matrices act on that column. Here $A(\sigma)\sigma(C)=C$ uses coordinate columns; the two forms encode the same change of basis with the corresponding order of multiplication.

