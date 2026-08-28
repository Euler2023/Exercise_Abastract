---
title: "Exercise R212: Principal-Ideal Generators Are Greatest Common Divisors"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - principal-ideal-domains
  - greatest-common-divisors
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 7, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R212: Principal-Ideal Generators Are Greatest Common Divisors

## Problem Statement

> [!question] Exercise 7
> Let $A$ be a principal ring and $a_1,\ldots,a_n$ nonzero elements of $A$. Let
>
> $$
> (a_1,\ldots,a_n)=(d).
> $$
>
> Show that $d$ is a greatest common divisor for the $a_i$ $(i=1,\ldots,n)$.

## Hints

> [!hint]- Hint 1
> Use both inclusions encoded by $(a_1,\ldots,a_n)=(d)$.

## Solution

> [!success]- Solution
> Since $a_i\in(d)$ for every $i$, there is $b_i\in A$ with
>
> $$
> a_i=db_i.
> $$
>
> Thus $d$ divides every $a_i$.
>
> Conversely, suppose $e$ divides every $a_i$. Then $a_i=ec_i$ for suitable $c_i\in A$, so each generator $a_i$ belongs to $(e)$. Hence
>
> $$
> (d)=(a_1,\ldots,a_n)\subseteq(e).
> $$
>
> In particular $d\in(e)$, which means $e\mid d$. Therefore $d$ is a common divisor divisible by every common divisor, exactly the required greatest common divisor. As usual in a domain, it is determined only up to multiplication by a unit.

## Related Concepts

- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Terminology:** “Greatest” refers to the divisibility order, not to an external numerical ordering.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 7, printed p. 115, PDF p. 130]. The proof is independent.

