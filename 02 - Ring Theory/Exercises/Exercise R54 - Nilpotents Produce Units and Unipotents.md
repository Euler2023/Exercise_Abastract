---
title: "Exercise R54: Nilpotents Produce Units and Unipotents"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - nilpotents
  - units
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.9, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R54: Nilpotents Produce Units and Unipotents

## Problem Statement

> [!question] Exercise 3.9
> **(a)** An element $x$ of a ring $R$ is nilpotent if some power is zero. Prove that if $x$ is nilpotent, then $1+x$ is a unit.
>
> **(b)** Suppose that $R$ has prime characteristic $p\ne0$. Prove that if $a$ is nilpotent, then $1+a$ is unipotent, meaning that some power of $1+a$ equals $1$.

## Hints

> [!hint]- Hint 1
> Use a finite geometric series in (a) and a sufficiently large power $p^r$ in (b).

## Solution

> [!success]- Solution
> **(a)** If $x^m=0$, then
>
> $$
> (1+x)(1-x+x^2-\cdots+(-x)^{m-1})=1-(-x)^m=1.
> $$
>
> Thus $1+x$ is a unit.
>
> **(b)** Choose $r$ with $p^r\ge m$. Iterating the Frobenius identity gives
>
> $$
> (1+a)^{p^r}=1+a^{p^r}=1,
> $$
>
> because $a^{p^r}=0$. Hence $1+a$ is unipotent.

## Related Concepts

- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Exercises/Exercise R53 - The Frobenius Endomorphism|Exercise R53]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.9, printed p. 355, PDF p. 367]. The solution is independent.

