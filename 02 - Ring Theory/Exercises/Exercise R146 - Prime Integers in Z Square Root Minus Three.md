---
title: "Exercise R146: Prime Integers in Z[sqrt(-3)]"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - quotient-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.6, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R146: Prime Integers in Z[sqrt(-3)]

## Problem Statement

> [!question] Exercise 5.6
> Let $R$ be the ring $\mathbb Z[\sqrt{-3}]$. Prove that an integer prime $p$ is a prime element of $R$ if and only if the polynomial $x^2+3$ is irreducible in $\mathbb F_p[x]$.

## Hints

> [!hint]- Hint 1
> Present $R$ as $\mathbb Z[x]/(x^2+3)$ and then reduce modulo $p$.

> [!hint]- Hint 2
> An element $p$ is prime exactly when the quotient by $(p)$ is an integral domain.

## Solution

> [!success]- Solution
> Evaluation at $\sqrt{-3}$ gives
>
> $$
> R\cong\mathbb Z[x]/(x^2+3).
> $$
>
> Reducing this presentation modulo the integer prime $p$ yields
>
> $$
> R/(p)
> \cong
> \mathbb F_p[x]/(x^2+3).
> $$
>
> Since $R$ is an integral domain, $p$ is a prime element of $R$ exactly when the principal ideal $(p)$ is prime, which is equivalent to $R/(p)$ being an integral domain. Over the field $\mathbb F_p$, the quotient by a nonconstant polynomial is an integral domain exactly when that polynomial is irreducible. Therefore
>
> $$
> p\text{ is prime in }R
> \quad\Longleftrightarrow\quad
> x^2+3\text{ is irreducible in }\mathbb F_p[x].
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because a quotient-ring presentation converts prime-element status into polynomial irreducibility.
- **Boundary:** For $p=3$, the polynomial reduces to $x^2$ and is reducible, consistently showing that $3$ is not prime in this ring.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.5, Ex. 5.6, printed p. 381, PDF p. 393]. The quotient proof is independent.

