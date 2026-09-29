---
title: "Exercise R322: The Norm Criterion for Gaussian Units"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 1, printed p. 5, PDF p. 24"
created: 2026-09-29
---

# Exercise R322: The Norm Criterion for Gaussian Units

## Problem Statement

> [!question] Neukirch I.1.1
> $\alpha\in\mathbb Z[i]$ is a unit if and only if $N(\alpha)=1$.

## Hints

> [!hint]- Hint 1
> For $\alpha=a+bi$, use $N(\alpha)=\alpha\overline\alpha=a^2+b^2$ and the multiplicativity of the norm.

> [!hint]- Hint 2
> If $\alpha\beta=1$, take norms. Conversely, when $N(\alpha)=1$, its conjugate is an inverse.

## Solution

> [!success]- Independent derivation
> For $\alpha=a+bi$ with $a,b\in\mathbb Z$, define $\overline\alpha=a-bi$. Conjugation respects products, so
> $$
> N(\alpha\beta)=\alpha\beta\overline\alpha\,\overline\beta
> =N(\alpha)N(\beta).
> $$
> Moreover, $N(\alpha)=a^2+b^2$ is a nonnegative integer and vanishes only when $\alpha=0$.
>
> If $\alpha$ is a unit, there is $\beta\in\mathbb Z[i]$ with $\alpha\beta=1$. Both elements are nonzero, and
> $$
> N(\alpha)N(\beta)=N(1)=1.
> $$
> Since the factors are positive integers, $N(\alpha)=1$.
>
> Conversely, if $N(\alpha)=1$, then $\alpha\overline\alpha=1$ and $\overline\alpha\in\mathbb Z[i]$. Thus $\alpha$ is a unit.
>
> In particular, $a^2+b^2=1$ has exactly the integer solutions $(\pm1,0)$ and $(0,\pm1)$, so
> $$
> \mathbb Z[i]^\times=\{1,-1,i,-i\}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition]]
- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]

## Notes

- **Source status:** [S4, Ch. I, §1, Ex. 1, printed p. 5, PDF p. 24]. The original page image was checked. The solution is an independent derivation; the same unit list is stated in Proposition (1.3), printed p. 3 / PDF p. 22.
- **Proof inputs:** Only conjugation and elementary arithmetic of the nonnegative integer norm are used. Unique factorization is not needed.
- **Routing:** The problem concerns units and a multiplicative norm in a concrete ring.
