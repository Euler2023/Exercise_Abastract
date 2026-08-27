---
title: "Exercise R40: Two Tests for Subrings"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - subrings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.6, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R40: Two Tests for Subrings

## Problem Statement

> [!question] Exercise 1.6
> Decide whether or not $S$ is a subring of $R$, when:
>
> **(a)** $S$ is the set of all rational numbers $a/b$, where $b$ is not divisible by $3$, and $R=\mathbb{Q}$;
>
> **(b)** $S$ is the set of functions which are linear combinations with integer coefficients of the functions $\{1,\cos nt,\sin nt\}$, $n\in\mathbb{Z}$, and $R$ is the set of all real-valued functions of $t$.

## Hints

> [!hint]- Hint 1
> In (a), reduce sums and products to a denominator not divisible by $3$.

> [!hint]- Hint 2
> In (b), examine $\cos t\cos 2t$ and use uniqueness of finite Fourier expansions.

## Solution

> [!success]- Solution
> **(a)** The set contains $0$ and $1$, is closed under negatives, and
>
> $$
> \frac ab+\frac cd=\frac{ad+bc}{bd},
> \qquad
> \frac ab\frac cd=\frac{ac}{bd}.
> $$
>
> If neither $b$ nor $d$ is divisible by $3$, neither is $bd$. Thus $S$ is a subring of $\mathbb{Q}$.
>
> **(b)** This set is closed under addition and negatives but not under multiplication. Indeed,
>
> $$
> \cos t\cos 2t=\frac12(\cos3t+\cos t).
> $$
>
> Uniqueness of finite Fourier coefficients shows that this function cannot be expressed with integer coefficients in the specified generators. Hence $S$ is not a subring.

## Related Concepts

- [[02 - Ring Theory/Concepts/Subrings|Subrings]]

## Notes

- **External standard input:** Uniqueness of finite trigonometric/Fourier expansions is used in part (b).
- **Source status:** The problem is from [S1, Ch. 11, §1, Ex. 1.6, printed p. 354, PDF p. 366]. The solution is independent.

