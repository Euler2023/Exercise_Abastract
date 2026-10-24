---
title: 'Exercise R404: Positive Coprime Lifts of Unit Residue Classes'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 12, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-12
created: '2026-10-23'
---

# Exercise R404: Positive Coprime Lifts of Unit Residue Classes

## Problem Statement

> [!question] Neukirch VI.1.12
> Let $\mathfrak o=\mathcal O_K$. Every class in $(\mathfrak o/\mathfrak m)^*$ can be represented by a totally positive number in $\mathfrak o$ which is prime to an arbitrary fixed ideal.

## Hints

> [!hint]- Hint
> At primes of the fixed ideal outside the modulus prescribe residue $1$; then add a sufficiently large positive rational integer in the common modulus.

> [!hint]- Stronger hint
> Use CRT modulo the finite modulus and the product of the remaining fixed primes; a positive integer in the combined modulus preserves every residue.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $\bar u$ be a unit residue class, and fix a nonzero integral ideal $\mathfrak a$. Let $\mathfrak a_0$ be the product of the prime divisors of $\mathfrak a$ that do not divide $\mathfrak m$. By the Chinese remainder theorem, choose $u_0\in\mathcal O$ such that
> $$
> u_0\equiv u\pmod{\mathfrak m},\qquad u_0\equiv1\pmod{\mathfrak a_0}.
> $$
> At primes dividing both $\mathfrak a$ and $\mathfrak m$, the unit condition on $\bar u$ ensures that $u_0$ is not divisible by the prime. The second congruence handles all other primes dividing $\mathfrak a$.
> Choose a positive integer $N\in\mathfrak m\mathfrak a_0$. For sufficiently large integers $k$, we have $\sigma(u_0)+kN>0$ for every real embedding $\sigma$. Thus $u=u_0+kN$ is totally positive, represents the original residue class, and has $(u)$ coprime to $\mathfrak a$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the source image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 12, printed p.368, PDF p.387]. The solution is independently derived.
