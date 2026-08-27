---
title: "Exercise G208: Adjacent Transpositions Generate the Symmetric Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.1, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G208: Adjacent Transpositions Generate the Symmetric Group

## Problem Statement

> [!question] Exercise 5.1
> **(a)** Prove that $(12),(23),\ldots,(n-1,n)$ generate $S_n$. **(b)** How many transpositions are needed to write $(12\cdots n)$? **(c)** Prove that $(12\cdots n)$ and $(12)$ generate $S_n$.

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

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.1, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.
