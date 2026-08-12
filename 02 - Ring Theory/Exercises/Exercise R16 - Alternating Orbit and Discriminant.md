---
title: "Exercise R16: An Alternating Orbit and the Discriminant"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, discriminant, symmetric-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 2, Ex. 2.7, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise R16: An Alternating Orbit and the Discriminant

## Problem Statement

> [!question] Exercise 2.7
> Let $m=u_1u_2^2u_3^3\cdots u_{n-1}^{n-1}$, $p=\sum_{\sigma\in A_n}\sigma(m)$, and let the other point of its $S_n$-orbit be $q$. Prove $(p-q)^2=D(u)$.

## Hints

> [!hint]- Hint 1
> The difference $p-q$ is alternating and has the same degree as the Vandermonde polynomial.

## Solution

> [!success]- Solution
> Even permutations fix $p-q$, while odd permutations negate it. Thus every $u_i-u_j$ divides $p-q$, so
> $$
> \delta=\prod_{i<j}(u_i-u_j)\mid p-q.
> $$
> Both polynomials have degree $1+\cdots+(n-1)$, hence $p-q=c\delta$. Comparing the unique extremal monomial $m$ gives $c=\pm1$. Squaring yields $(p-q)^2=\delta^2=D(u)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

The sign depends on ordering and disappears after squaring.
