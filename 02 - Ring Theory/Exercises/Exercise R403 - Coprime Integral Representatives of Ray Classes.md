---
title: 'Exercise R403: Coprime Integral Representatives of Ray Classes'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 11, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-11
created: '2026-10-23'
---

# Exercise R403: Coprime Integral Representatives of Ray Classes

## Problem Statement

> [!question] Neukirch VI.1.11
> Every ideal class of the ray class group $Cl_K^{\mathfrak m}$ can be represented by an integral ideal which is prime to an arbitrary fixed ideal.

## Hints

> [!hint]- Hint
> Multiply a given ideal by a totally positive principal ideal congruent to $1$ modulo the modulus. Choose the generator inside the inverse ideal using the Chinese remainder theorem.

> [!hint]- Stronger hint
> Take x in the inverse fractional ideal, prescribe nonzero classes at the fixed primes, then add a large positive rational integer in the homogeneous ideal.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Represent the given ray class by a fractional ideal $\mathfrak b$ coprime to $\mathfrak m$. Let $\mathfrak a$ be the fixed nonzero integral ideal. We seek $x\in K^\times$ with $x\equiv1\pmod{\mathfrak m}$, with $x>0$ under every real embedding, and such that $(x)\mathfrak b$ is integral and coprime to $\mathfrak a$.
> Take the lattice ideal $L=\mathfrak b^{-1}$. At each $\mathfrak p\mid\mathfrak a$, require $x$ to be nonzero in $L_\mathfrak p/\mathfrak pL_\mathfrak p$; equivalently, $v_\mathfrak p(x)=-v_\mathfrak p(\mathfrak b)$. At $\mathfrak p\mid\mathfrak m$, we have $\mathfrak b_\mathfrak p=\mathcal O_\mathfrak p$, so we may require $x\equiv1$. These finitely many residue conditions are compatible, and the Chinese remainder theorem for ideals supplies $x_0\in L$.
> The homogeneous solutions contain a nonzero integral ideal $\mathfrak c\subseteq L$. Choose a positive integer $N\in\mathfrak c$. Then $x_0+kN$ becomes positive at every real embedding as $k\to+\infty$, while preserving all finite congruences. Choose such an $x$. The ideal $(x)\mathfrak b$ is then integral, coprime to $\mathfrak a$, and in the same ray class as $\mathfrak b$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the source image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 11, printed p.368, PDF p.387]. The solution is independently derived.
