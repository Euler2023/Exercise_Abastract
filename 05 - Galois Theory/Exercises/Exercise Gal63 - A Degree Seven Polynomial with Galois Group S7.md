---
title: "Exercise Gal63: A Degree-Seven Polynomial with Galois Group S7"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, explicit-galois-groups]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 12, Ex. 12.7, printed p. 511, PDF p. 523"
created: 2026-08-12
---

# Exercise Gal63: A Degree-Seven Polynomial with Galois Group $S_7$

## Problem Statement

> [!question] Exercise 12.7
> Find a polynomial of degree $7$ over $\mathbb Q$ whose Galois group is $S_7$.

## Hints

> [!hint]- Hint 1
> Use an irreducible polynomial with exactly five real roots, or certify cycle types modulo primes.

## Solution

> [!success]- Solution
> Take
> $$
> f(x)=x^7-x-1.
> $$
> Modulo $2$, this polynomial is irreducible (the finite-field criterion gives $x^{2^7}\equiv x\pmod f$ and $\gcd(f,x^2-x)=1$), so $f$ is irreducible over $\mathbb Q$ and its Galois group contains a 7-cycle. Modulo $3$,
> $$
> f(x)\equiv(x^2+x-1)(x^5-x^4-x^3-x+1),
> $$
> with both factors irreducible, so the group contains an element of cycle type $(2)(5)$. Its fifth power is a transposition. A 7-cycle together with any transposition generates $S_7$; hence $\operatorname{Gal}(f/\mathbb Q)\cong S_7$.

## Related Concepts

- [[01 - Group Theory/Exercises/Exercise G27 - A p Cycle and a Transposition Generate Sp|A p-Cycle and a Transposition Generate Sp]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

The modular factorizations were checked by exact finite-field arithmetic. Passing from factor degrees modulo an unramified prime to cycle types uses the standard Frobenius–Dedekind factorization theorem as an external input. The discriminant is $-776887$, so neither $2$ nor $3$ is ramified.
