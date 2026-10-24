---
title: 'Exercise Gal204: Big and Small Hilbert Class Fields'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 1, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-1
created: '2026-10-23'
---

# Exercise Gal204: Big and Small Hilbert Class Fields

## Problem Statement

> [!question] Neukirch VI.6.1
> Let $K^1|K$ be the big, and $H|K$ the small Hilbert class field. Then $G(K^1|H)\simeq(\mathbb Z/2\mathbb Z)^{r-t}$, where $r$ is the number of real places, and $2^t=(\mathfrak o^*:\mathfrak o_+^*)$.

## Hints

> [!hint]- Hint
> The big and small class fields correspond to the narrow and ordinary class groups. Apply the sign exact sequence.

> [!hint]- Stronger hint
> The kernel of the narrow-to-ordinary class map is the real sign group divided by the signs of units.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The book's big Hilbert class field permits real places to become complex and has Galois group the narrow class group $\mathrm{Cl}_K^1$. The small Hilbert class field requires real places to split completely and corresponds to the ordinary class group $\mathrm{Cl}_K$. Their inclusion is $H\subseteq K^1$.
> The exact sequence VI.(1.11), printed p.366/PDF385, is
> $$
> 1\to E/E_+\to\{\pm1\}^r\to\mathrm{Cl}_K^1\to\mathrm{Cl}_K\to1.
> $$
> Thus the kernel of restriction, namely $G(K^1/H)$, is $\{\pm1\}^r/\operatorname{sgn}E$. It is a vector space over $\mathbb F_2$ of dimension $r-t$, giving the required isomorphism. When $r=0$, we have $t=0$ and the two Hilbert class fields coincide.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 1, printed p.404, PDF p.423]. The solution is independently derived; external inputs are distinguished from deductions specific to this exercise.
