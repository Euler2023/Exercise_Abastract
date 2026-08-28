---
title: "Exercise R112: Integer GCDs in the Gaussian Integers"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - greatest-common-divisors
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.7, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R112: Integer GCDs in the Gaussian Integers

## Problem Statement

> [!question] Exercise 2.7
> Let $a$ and $b$ be integers. Prove that their greatest common divisor in the ring of integers is the same as their greatest common divisor in the ring of Gauss integers.

## Hints

> [!hint]- Hint 1
> Let $d=\gcd_{\mathbb Z}(a,b)$ and use Bézout's identity in $\mathbb Z$.

> [!hint]- Hint 2
> A Gaussian common divisor of $a$ and $b$ must divide every integer linear combination of them.

## Solution

> [!success]- Solution
> Assume $a$ and $b$ are not both zero, and let
>
> $$
> d=\gcd_{\mathbb Z}(a,b)
> $$
>
> be chosen positive. Since $d$ divides $a$ and $b$ in $\mathbb Z$, it also divides them in $\mathbb Z[i]$.
>
> Conversely, let $\gamma\in\mathbb Z[i]$ divide both $a$ and $b$. Bézout's identity in $\mathbb Z$ supplies $m,n\in\mathbb Z$ such that
>
> $$
> d=ma+nb.
> $$
>
> Because $m,n$ also belong to $\mathbb Z[i]$, the element $\gamma$ divides the right-hand side and therefore divides $d$ in $\mathbb Z[i]$.
>
> Thus $d$ is a common divisor in $\mathbb Z[i]$ that is divisible by every Gaussian common divisor, so it is a greatest common divisor there. As usual in a domain, a gcd is determined only up to a unit; the Gaussian associates of $d$ are $\pm d,\pm id$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Notes

- **Routing:** Ring Theory is primary because divisibility and Bézout's identity determine the gcd.
- **Edge case:** If $a=b=0$, neither ring has a gcd in the divisibility-maximal sense unless a separate convention is imposed.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.7, printed p. 379, PDF p. 391]. The proof is independent.

