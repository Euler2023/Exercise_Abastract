---
title: "Exercise R69: Laurent Polynomials by Inverting t"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - laurent-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §5, Ex. 5.7, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R69: Laurent Polynomials by Inverting t

## Problem Statement

> [!question] Exercise 5.7
> Let $F$ be a field, $R=F[t]$, and $R'=R[x]/(tx-1)$. Prove that $R'$ is the ring of Laurent polynomials: finite linear combinations of powers of $t$, including negative exponents.

## Hints

> [!hint]- Hint 1
> Send the residue of $x$ to $t^{-1}$ and construct the inverse map.

## Solution

> [!success]- Solution
> Let $F[t,t^{-1}]$ denote finite sums $\sum_{k=m}^n a_k t^k$ with $m\in\mathbb Z$. The homomorphism
>
> $$
> F[t,x]\to F[t,t^{-1}],
> \qquad t\mapsto t,\quad x\mapsto t^{-1},
> $$
>
> kills $tx-1$, so it induces $R'\to F[t,t^{-1}]$. Conversely, sending $t^{-1}$ to the residue $\alpha$ of $x$ gives a homomorphism back because $t\alpha=1$. Both compositions fix the generators $t$ and $t^{-1}$, so they are inverse. Hence
>
> $$
> R'\cong F[t,t^{-1}].
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §5, Ex. 5.7, printed p. 356, PDF p. 368]. The universal-map proof is independent.
