---
title: 'Exercise R392: The Kernel of Witt Frobenius Minus One'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 3, printed p. 340, PDF p. 359
source_refs:
- S4/ch-V/sec-3/ex-3
created: '2026-10-23'
---

# Exercise R392: The Kernel of Witt Frobenius Minus One

## Problem Statement

> [!question] Neukirch V.3.3
> Let $K$ be a local field of characteristic $p$, let $\overline K$ be its separable closure, and let $W_n(\overline K)$ be the ring of Witt vectors of length $n$, with the operator
> $$
> \wp:W_n(\overline K)\longrightarrow W_n(\overline K),\qquad\wp a=Fa-a
> $$
> (see chap. IV, §3, exercises 2 and 3). Show that one has $\ker(\wp)=W_n(\mathbb F_p)$.

## Hints

> [!hint]- Hint 1
> Over a ring of characteristic $p$, Frobenius on Witt coordinates is coordinatewise $p$-th power.

> [!hint]- Hint 2
> $\wp a=0$ means equality $Fa=a$ of Witt vectors, hence equality of all coordinates.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> For $a=(a_0,\ldots,a_{n-1})\in W_n(\overline K)$, the Witt Frobenius is
> $$
> Fa=(a_0^p,\ldots,a_{n-1}^p),
> $$
> because the underlying coefficient field has characteristic $p$. Although Witt subtraction is not coordinatewise, the equality $Fa-a=0$ is equivalent in its additive group to $Fa=a$, which **is** coordinatewise equality. Thus $a\in\ker\wp$ if and only if $a_i^p=a_i$ for every $i$.
>
> The roots of $X^p-X$ in any field of characteristic $p$ are exactly $\mathbb F_p$: they contain those $p$ elements, and the polynomial has degree $p$. Hence each coordinate belongs to $\mathbb F_p$. Conversely a vector with all coordinates in $\mathbb F_p$ is fixed by $F$. This proves $\ker\wp=W_n(\mathbb F_p)$ as an additive subgroup (indeed as the Frobenius-fixed subring).

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin-Schreier extensions]]
- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt vectors and Artin-Schreier-Witt theory]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 3, printed p. 340, PDF p. 359]. Independent Witt-coordinate computation. It does not replace Witt subtraction by ordinary coordinatewise subtraction.
