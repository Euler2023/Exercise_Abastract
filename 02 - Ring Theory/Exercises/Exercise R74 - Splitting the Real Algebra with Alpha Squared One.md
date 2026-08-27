---
title: "Exercise R74: Splitting the Real Algebra with Alpha Squared One"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - product-rings
  - quotient-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.5, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R74: Splitting the Real Algebra with Alpha Squared One

## Problem Statement

> [!question] Exercise 6.5
> Adjoin an element $\alpha$ satisfying $\alpha^2=1$ to $\mathbb R$. Prove that the resulting ring is isomorphic to $\mathbb R\times\mathbb R$.

## Hints

> [!hint]- Hint 1
> Factor $x^2-1$ and evaluate a polynomial at $1$ and $-1$.

## Solution

> [!success]- Solution
> The resulting ring is $\mathbb R[x]/(x^2-1)$. Since $(x-1)$ and $(x+1)$ are comaximal, the Chinese remainder theorem yields
>
> $$
> \mathbb R[x]/((x-1)(x+1))
> \cong
> \mathbb R[x]/(x-1)\times\mathbb R[x]/(x+1)
> \cong\mathbb R\times\mathbb R.
> $$
>
> Explicitly, the isomorphism sends $f(\alpha)$ to $(f(1),f(-1))$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §6, Ex. 6.5, printed p. 356, PDF p. 368]. The CRT proof is independent.

