---
title: "Exercise R7: Orbits and Symmetric Polynomials"
topic: ring-theory
difficulty: intermediate
status: not-started
tags: [exercise, ring-theory, symmetric-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 1, Ex. 1.1, printed p. 505, PDF p. 517"
created: 2026-08-12
---

# Exercise R7: Orbits and Symmetric Polynomials

## Problem Statement

> [!question] Exercise 1.1
> Determine the orbit of each polynomial. If it is symmetric, express it in the elementary symmetric functions $s_1,s_2,s_3$:
> (a) $u_1^2u_2+u_2^2u_3+u_3^2u_1$;
> (b) $(u_1+u_2)(u_2+u_3)(u_1+u_3)$;
> (c) $(u_1-u_2)(u_2-u_3)(u_1-u_3)$;
> (d) $u_1^3u_2+u_2^3u_3+u_3^3u_1-u_1u_2^3-u_2u_3^3-u_3u_1^3$;
> (e) $u_1^3+\cdots+u_n^3$.

## Hints

> [!hint]- Hint 1
> Apply a transposition and a 3-cycle; use Newton's identity for (e).

## Solution

> [!success]- Solution
> Put $A=u_1^2u_2+u_2^2u_3+u_3^2u_1$ and $A'=u_1^2u_3+u_3^2u_2+u_2^2u_1$. Even permutations fix $A$, while odd permutations exchange $A,A'$; thus (a) has orbit $\{A,A'\}$.
>
> Expansion gives (b) $s_1s_2-s_3$, so its orbit is a singleton. Polynomial (c) is alternating and has orbit $\{C,-C\}$. Polynomial (d) factors as
> $$
> (u_1-u_2)(u_2-u_3)(u_3-u_1)s_1,
> $$
> so its orbit is $\{D,-D\}$. Finally (e) is symmetric and
> $$
> \sum_i u_i^3=s_1^3-3s_1s_2+3s_3.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

The statement is source material from [S1, Ch. 16, §1, Ex. 1.1, printed p. 505, PDF p. 517]. The computations are independent.
