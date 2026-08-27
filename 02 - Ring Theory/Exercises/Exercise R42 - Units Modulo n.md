---
title: "Exercise R42: Units Modulo n"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - units
  - modular-arithmetic
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.8, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R42: Units Modulo n

## Problem Statement

> [!question] Exercise 1.8
> Determine the units in: **(a)** $\mathbb{Z}/12\mathbb{Z}$, **(b)** $\mathbb{Z}/8\mathbb{Z}$, **(c)** $\mathbb{Z}/n\mathbb{Z}$.

## Hints

> [!hint]- Hint 1
> Apply Bézout's identity to a representative $a$ and the modulus $n$.

## Solution

> [!success]- Solution
> The residue class $[a]$ is a unit modulo $n$ exactly when there are integers $b,k$ with $ab+nk=1$, equivalently when $\gcd(a,n)=1$. Therefore
>
> $$
> (\mathbb Z/12\mathbb Z)^\times=\{[1],[5],[7],[11]\},
> $$
>
> $$
> (\mathbb Z/8\mathbb Z)^\times=\{[1],[3],[5],[7]\},
> $$
>
> and in general
>
> $$
> (\mathbb Z/n\mathbb Z)^\times
> =\{[a]:\gcd(a,n)=1\}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §1, Ex. 1.8, printed p. 354, PDF p. 366]. The Bézout argument is independently supplied.

