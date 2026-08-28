---
title: "Exercise R132: Sieve of Eratosthenes below One Hundred"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-numbers
  - sieve
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.11, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R132: Sieve of Eratosthenes below One Hundred

## Problem Statement

> [!question] Exercise 4.11
> Use the sieve method to determine the primes $<100$, and discuss the efficiency of the sieve: How quickly are the nonprimes filtered out?

## Hints

> [!hint]- Hint 1
> It is enough to cross out multiples of primes not exceeding $\sqrt{99}$.

> [!hint]- Hint 2
> Count only newly removed composites at the stages $2,3,5,7$.

## Solution

> [!success]- Solution
> Start with the integers $2,\ldots,99$. Cross out proper multiples successively of $2,3,5$, and $7$. No larger sieving prime is needed: every composite below $100$ has a prime factor at most its square root, and $\sqrt{99}<10$.
>
> The remaining numbers are
>
> $$
> \begin{aligned}
> &2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,\\
> &53,59,61,67,71,73,79,83,89,97.
> \end{aligned}
> $$
>
> These are the $25$ primes below $100$.
>
> There are initially $98$ candidates. The stages remove the following numbers for the first time:
>
> - multiples of $2$ greater than $2$: $48$;
> - odd multiples of $3$ greater than $3$: $16$;
> - multiples of $5$ not already removed: $6$;
> - multiples of $7$ not already removed: $3$.
>
> Thus the candidate counts are
>
> $$
> 98\longrightarrow50\longrightarrow34\longrightarrow28
> \longrightarrow25.
> $$
>
> Of the $73$ composites, $64$ are removed after the first two primes, about $87.7\%$, and $70$ are removed after including $5$, about $95.9\%$. Only $49,77,91$ wait for the final sieving prime $7$. The sieve therefore removes most composites very early.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because prime factorization and divisibility drive the sieve.
- **Computational verification:** The finite list and stage counts exhaust all integers from $2$ through $99$.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.11, printed p. 380, PDF p. 392]. The sieve and efficiency counts are independent.

