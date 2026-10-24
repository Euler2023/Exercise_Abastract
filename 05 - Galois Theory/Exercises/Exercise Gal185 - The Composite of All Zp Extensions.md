---
title: 'Exercise Gal185: The Composite of All Zp Extensions'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 5, printed p. 326, PDF p. 345
source_refs:
- S4/ch-V/sec-1/ex-5
created: '2026-10-23'
---

# Exercise Gal185: The Composite of All Zp Extensions

## Problem Statement

> [!question] Neukirch V.1.5
> Let $L/K$ be the composite of all $\mathbb Z_p$-extensions of a $p$-adic number field $K$ (i.e., extensions with Galois group isomorphic to $\mathbb Z_p$). Show that $G(L/K)$ is a free, finitely generated $\mathbb Z_p$-module and determine its rank.
>
> Hint: Use chap. II, (5.7).

## Hints

> [!hint]- Hint 1
> Compute the maximal abelian pro-$p$ quotient using local reciprocity.

> [!hint]- Hint 2
> Every map to the torsion-free group $\mathbb Z_p$ kills finite torsion. Coordinate maps detect the remaining free part.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $d=[K:\mathbb Q_p]$. The structure theorem II (5.7) gives
> $$
> K^*\cong\pi^{\mathbb Z}\times\mu_{q-1}\times T\times\mathbb Z_p^d,
> $$
> where $T$ is the finite group of $p$-power roots of unity in $K$. Local reciprocity identifies the maximal abelian pro-$p$ Galois group with the pro-$p$ completion
> $$
> G_K^{\rm ab}(p)\cong\mathbb Z_p\times T\times\mathbb Z_p^d.
> $$
> A $\mathbb Z_p$-extension corresponds to a continuous surjection from this group to $\mathbb Z_p$. Every such map kills $T$. Conversely, each of the $d+1$ coordinate projections on the free part is surjective, and the intersection of their kernels is exactly $T$. The intersection over all continuous surjections is therefore $T$ as well.
>
> The fixed field of this intersection is the composite of all the corresponding extensions. Thus
> $$
> G(L/K)\cong G_K^{\rm ab}(p)/T\cong\mathbb Z_p^{d+1}.
> $$
> Its rank is $[K:\mathbb Q_p]+1$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]

## Notes

Original statement and hint: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 5, printed p. 326, PDF p. 345]. Independent derivation from local reciprocity and the local multiplicative-group structure II (5.7).
