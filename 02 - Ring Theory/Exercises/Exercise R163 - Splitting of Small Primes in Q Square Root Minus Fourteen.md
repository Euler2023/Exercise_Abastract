---
title: "Exercise R163: Splitting of Small Primes in Q[sqrt(-14)]"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-splitting
  - quadratic-integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 6, Prime Ideals and Prime Integers, Ex. 6.1, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R163: Splitting of Small Primes in Q[sqrt(-14)]

## Problem Statement

> [!question] Exercise 6.1
> Let $d=-14$. For each of the primes $p=2,3,5,7,11$, and $13$, decide whether or not $p$ splits or ramifies in $R$, and if so, find a lattice basis for a prime ideal factor of $(p)$.

## Hints

> [!hint]- Hint 1
> Here $R=\mathbb Z[\delta]$ with $\delta^2=-14$. For odd $p$, inspect whether $-14$ is zero, a nonzero square, or a nonsquare modulo $p$.

## Solution

> [!success]- Solution
> The complete table is:
>
> | $p$ | $-14\pmod p$ | Behavior | A lattice basis for a prime factor |
> |---:|---:|---|---|
> | $2$ | $0$ | ramified | $P_2=(2,\delta)$ |
> | $3$ | $1$ | split | $P_3=(3,\delta-1)$ |
> | $5$ | $1$ | split | $P_5=(5,\delta-1)$ |
> | $7$ | $0$ | ramified | $P_7=(7,\delta)$ |
> | $11$ | $8$ | inert | $(11)$ itself is prime |
> | $13$ | $12=5^2$ | split | $P_{13}=(13,\delta-5)$ |
>
> For an odd prime, the quotient is
>
> $$
> R/(p)\cong\mathbb F_p[x]/(x^2+14).
> $$
>
> A nonzero square gives two distinct roots and therefore a split prime; zero gives a repeated root and ramification; a nonsquare gives an irreducible quadratic and an inert prime. The square sets confirm that $8$ is not a square modulo $11$, whereas $12\equiv5^2$ modulo $13$.
>
> Explicitly,
>
> $$
> (2)=P_2^2,
> \qquad
> (7)=P_7^2,
> $$
>
> and the split factorizations pair each displayed ideal with its conjugate:
>
> $$
> \begin{aligned}
> (3)&=(3,\delta-1)(3,\delta+1),\\
> (5)&=(5,\delta-1)(5,\delta+1),\\
> (13)&=(13,\delta-5)(13,\delta+5).
> \end{aligned}
> $$
>
> Each displayed pair is a genuine lattice basis because its coefficient determinant in $(1,\delta)$ has absolute value $p$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because the residue-polynomial test is used to factor rational-prime ideals.
- **Source status:** The problem is from [S1, Ch. 13, §13.6, Ex. 6.1, printed p. 409, PDF p. 421]. All residue and ideal-basis computations are independent.
