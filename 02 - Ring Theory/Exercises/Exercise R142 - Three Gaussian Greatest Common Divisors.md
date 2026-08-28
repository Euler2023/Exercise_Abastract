---
title: "Exercise R142: Three Gaussian Greatest Common Divisors"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - euclidean-algorithm
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.2, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R142: Three Gaussian Greatest Common Divisors

## Problem Statement

> [!question] Exercise 5.2
> Find the greatest common divisor in $\mathbb Z[i]$ of
>
> **(a)** $11+7i$ and $4+7i$;
>
> **(b)** $11+7i$ and $8+i$;
>
> **(c)** $3+4i$ and $18-i$.

## Hints

> [!hint]- Hint 1
> Apply the Gaussian Euclidean algorithm, choosing each quotient by rounding the complex quotient to the nearest lattice point.

> [!hint]- Hint 2
> A last nonzero remainder is determined only up to multiplication by a Gaussian unit.

## Solution

> [!success]- Solution
> **(a)** Euclidean division gives
>
> $$
> \begin{aligned}
> 11+7i&=(1-i)(4+7i)+4i,\\
> 4+7i&=(2-i)(4i)-i,\\
> 4i&=(-4)(-i).
> \end{aligned}
> $$
>
> The last nonzero remainder $-i$ is a unit, so
>
> $$
> \gcd(11+7i,4+7i)=1
> $$
>
> up to association.
>
> **(b)** We obtain
>
> $$
> \begin{aligned}
> 11+7i&=(1+i)(8+i)+(4-2i),\\
> 8+i&=(2+i)(4-2i)+(-2+i),\\
> 4-2i&=(-2)(-2+i).
> \end{aligned}
> $$
>
> Thus a convenient associate of the gcd is
>
> $$
> \gcd(11+7i,8+i)=2-i.
> $$
>
> Indeed, the two quotients are $3+5i$ and $3+2i$.
>
> **(c)** Directly,
>
> $$
> 18-i=(2-3i)(3+4i).
> $$
>
> Hence
>
> $$
> \gcd(3+4i,18-i)=3+4i
> $$
>
> up to a unit.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Notes

- **Routing:** Ring Theory is primary because Euclidean division computes gcds in $\mathbb Z[i]$.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.5, Ex. 5.2, printed p. 381, PDF p. 393]. The divisions were independently derived and exactly checked.

