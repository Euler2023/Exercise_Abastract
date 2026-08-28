---
title: "Exercise R141: Factoring Four Gaussian Integers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - prime-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.1, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R141: Factoring Four Gaussian Integers

## Problem Statement

> [!question] Exercise 5.1
> Factor the following into primes in $\mathbb Z[i]$:
>
> **(a)** $1-3i$;
>
> **(b)** $10$;
>
> **(c)** $6+9i$;
>
> **(d)** $7+i$.

## Hints

> [!hint]- Hint 1
> Use the multiplicative norm $N(a+bi)=a^2+b^2$ to predict the possible norms of prime factors.

> [!hint]- Hint 2
> Elements of norm $2$, $5$, or $13$ are Gaussian primes; an integer prime congruent to $3$ modulo $4$ remains Gaussian prime.

## Solution

> [!success]- Solution
> The factorizations, up to units and order, are
>
> $$
> \begin{aligned}
> \text{(a)}\quad 1-3i&=(1-i)(2-i),\\
> \text{(b)}\quad 10&=(1+i)(1-i)(2+i)(2-i),\\
> \text{(c)}\quad 6+9i&=3(2+3i),\\
> \text{(d)}\quad 7+i&=(1+i)(2+i)(1-2i).
> \end{aligned}
> $$
>
> Each identity follows by direct multiplication. The factors $1\pm i$ have norm $2$; the factors $2\pm i$ and $1-2i$ have norm $5$; and $2+3i$ has norm $13$. An element whose norm is an ordinary prime is irreducible in $\mathbb Z[i]$. Finally, the integer $3$ is a Gaussian prime because $3\equiv3\pmod4$. Hence every displayed factor is prime.
>
> The norm checks also certify completeness:
>
> $$
> 10=2\cdot5,\quad
> 100=2\cdot2\cdot5\cdot5,\quad
> 117=9\cdot13,\quad
> 50=2\cdot5\cdot5.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Routing:** Ring Theory is primary because norms and unique factorization determine prime decompositions in $\mathbb Z[i]$.
- **Association boundary:** Multiplying factors by units $\pm1,\pm i$ gives equivalent prime factorizations.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.5, Ex. 5.1, printed p. 381, PDF p. 393]. The computations are independent.

