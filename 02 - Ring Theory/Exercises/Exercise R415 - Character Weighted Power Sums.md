---
title: 'Exercise R415: Character Weighted Power Sums'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §2, Exercise 3, printed p. 443, PDF p. 462
source_refs:
- S4/ch-VII/sec-2/ex-3
created: '2026-10-23'
---

# Exercise R415: Character Weighted Power Sums

## Problem Statement

> [!question] Neukirch VII.2.3
> For the numbers $S_{k,\chi}(\nu)=\sum_{a=1}^{\nu}\chi(a)a^k$, $k\ge0$, one has
> $$
> S_{k,\chi}(\nu m)=\frac1{k+1}\bigl(B_{k+1,\chi}(\nu m)-B_{k+1,\chi}(0)\bigr).
> $$

## Hints

> [!hint]- Hint 1
> Partition the integers from $1$ to $\nu m$ into blocks of length $m$.

> [!hint]- Hint 2
> Apply the preceding difference identity at $x=jm$ and telescope over $j=1,\ldots,\nu$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $k,\nu\ge0$ be integers. Use the positive index $k+1$ in the generalized difference formula:
> $$
> B_{k+1,\chi}(jm)-B_{k+1,\chi}((j-1)m)
> =(k+1)\sum_{a=1}^m\chi(a)(a+(j-1)m)^k.
> $$
> Periodicity of the character gives $\chi(a+(j-1)m)=\chi(a)$, including the zero values on nonunits. Summing for $j=1,\ldots,\nu$, the left side telescopes, and the right side enumerates each integer $r$ from $1$ to $\nu m$ once. Hence
> $$
> B_{k+1,\chi}(\nu m)-B_{k+1,\chi}(0)
> =(k+1)\sum_{r=1}^{\nu m}\chi(r)r^k.
> $$
> Division by $k+1$ proves the result. The empty-sum case $\nu=0$ is included.
>
> For the odd character modulo $3$ and $k=1$, one block contributes $(3j+1)-(3j+2)=-1$, so $S_{1,\chi}(3\nu)=-\nu$. The coefficient formula gives $B_{2,\chi}(x)=B_{2,\chi}-(2/3)x$, and the claimed right side is also $-\nu$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** The full statement, including the argument $\nu m$ on both sides, was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §2, Exercise 3, printed p. 443, PDF p. 462]. No figure is required.
- **Proof scope:** Independent finite telescoping argument; the identity holds for every Dirichlet character modulo $m$, without a primitivity assumption.
