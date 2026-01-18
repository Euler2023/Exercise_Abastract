---
title: "Exercise R1: Zero Divisors in Z/nZ"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - zero-divisors
source: "Dummit & Foote, Ch. 7"
created: 2025-01-19
---

# Exercise R1: Zero Divisors in Z/nZ

## Problem Statement

> [!question] Exercise
> Characterize the zero divisors in $\mathbb{Z}/n\mathbb{Z}$.
>
> Prove that $\bar{a} \in \mathbb{Z}/n\mathbb{Z}$ is a zero divisor if and only if $\gcd(a, n) > 1$.

## Hints

> [!hint]- Hint 1
> Recall that $\bar{a}$ is a zero divisor if there exists $\bar{b} \neq \bar{0}$ such that $\bar{a} \cdot \bar{b} = \bar{0}$.

> [!hint]- Hint 2
> $\bar{a} \cdot \bar{b} = \bar{0}$ means $n | ab$.

> [!hint]- Hint 3
> Use the fact that $n | ab$ and properties of gcd.

## Solution

> [!success]- Solution
> ### Proof
> **($\Rightarrow$)** Suppose $\bar{a}$ is a zero divisor, so $\bar{a} \cdot \bar{b} = \bar{0}$ for some $\bar{b} \neq \bar{0}$.
>
> This means $n | ab$ but $n \nmid b$.
>
> Let $d = \gcd(a, n)$. If $d = 1$, then $\gcd(a, n) = 1$ implies $n | b$ (since $n | ab$), contradicting $\bar{b} \neq \bar{0}$.
>
> Therefore $d = \gcd(a, n) > 1$.
>
> **($\Leftarrow$)** Suppose $d = \gcd(a, n) > 1$.
>
> Let $b = n/d$. Then $1 \leq b < n$, so $\bar{b} \neq \bar{0}$.
>
> Compute: $ab = a \cdot (n/d) = (a/d) \cdot n$
>
> Since $d | a$, we have $a/d \in \mathbb{Z}$, so $n | ab$, meaning $\bar{a} \cdot \bar{b} = \bar{0}$.
>
> Therefore $\bar{a}$ is a zero divisor. $\square$

## Corollary

> [!abstract] Corollary
> $\mathbb{Z}/n\mathbb{Z}$ is an integral domain (has no zero divisors) if and only if $n$ is prime.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

This explains why $\mathbb{Z}/n\mathbb{Z}$ is a field exactly when $n$ is prime: it has no zero divisors, and every non-zero element is a unit.
