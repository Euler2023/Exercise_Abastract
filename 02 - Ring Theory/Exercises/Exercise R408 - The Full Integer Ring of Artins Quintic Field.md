---
title: 'Exercise R408: The Full Integer Ring of Artins Quintic Field'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 3, printed p. 413, PDF p. 432
source_refs:
- S4/ch-VI/sec-7/ex-3
created: '2026-10-23'
---

# Exercise R408: The Full Integer Ring of Artins Quintic Field

## Problem Statement

> [!question] Neukirch VI.7.3
> Let $k=\mathbb Q(\alpha)$. Then $\mathbb Z[\alpha]$ is the ring $\mathcal O_k$ of integers of $k$.
> **Printed hint:** The discriminant of $\mathbb Z[\alpha]$ equals the discriminant of $\mathcal O_k$ because on the one hand, both differ only by a square, and on the other hand, it is squarefree. The transition matrix from $1,\alpha,\ldots,\alpha^{n-1}$ to an integral basis $\omega_1,\ldots,\omega_n$ of $\mathcal O_k$ is therefore invertible over $\mathbb Z$.

## Hints

> [!hint]- Hint
> Use the index–discriminant formula; do not reverse the basis-change divisibility.

> [!hint]- Stronger hint
> The square of the order index divides the squarefree integer 2869.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Since $\alpha$ is a root of a monic integer polynomial, it is an algebraic integer, and $\mathbb Z[\alpha]\subseteq\mathcal O_k$ is a full-rank sublattice. Put $I=[\mathcal O_k:\mathbb Z[\alpha]]$. The change-of-basis formula for lattices gives
> $$
> \operatorname{disc}(1,\alpha,\ldots,\alpha^4)
> =I^2\,d_k.
> $$
> The preceding exercise identifies the left side as the squarefree integer $2869$. Since $I^2$ is a positive integer square dividing $2869$, we must have $I=1$. Thus $\mathbb Z[\alpha]=\mathcal O_k$ and $d_k=2869$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Different and Discriminant Ideals|Discriminants of Orders]]

## Notes

The statement was checked against the original PDF rendered at 200 dpi [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 3, printed p.413, PDF p.432]. The solution is independently derived.
