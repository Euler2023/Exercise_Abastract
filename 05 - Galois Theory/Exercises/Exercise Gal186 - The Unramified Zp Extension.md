---
title: 'Exercise Gal186: The Unramified Zp Extension'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 6, printed p. 326, PDF p. 345
source_refs:
- S4/ch-V/sec-1/ex-6
created: '2026-10-23'
---

# Exercise Gal186: The Unramified Zp Extension

## Problem Statement

> [!question] Neukirch V.1.6
> There is only one unramified $\mathbb Z_p$-extension of $K$. Generate it by roots of unity.

## Hints

> [!hint]- Hint 1
> The unramified Galois group is $\widehat{\mathbb Z}$.

> [!hint]- Hint 2
> If the residue field has $q$ elements, the degree-$r$ unramified extension contains all $(q^r-1)$-th roots of unity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Finite unramified extensions correspond to finite residue-field extensions and are unique of each degree. Since $\widehat{\mathbb Z}$ has a unique quotient isomorphic to $\mathbb Z_p$ (the projection onto its $p$-factor), its fixed-field correspondence gives a unique unramified $\mathbb Z_p$-extension, namely
> $$
> K_\infty^{\rm nr}=\bigcup_{m\ge0}K_{p^m},
> $$
> where $K_r/K$ is unramified of degree $r$.
>
> The integer $q^r-1$ is prime to $p$. Reduction identifies its roots of unity in $K_r$ with $\mathbb F_{q^r}^*$ by Hensel's lemma, so $K(\mu_{q^r-1})\subseteq K_r$. A primitive $(q^r-1)$-th root has residue of that exact order. Its residue field cannot have degree $s<r$: that would require $q^r-1\mid q^s-1$, impossible by size. Hence $K(\mu_{q^r-1})=K_r$. Therefore
> $$
> K_\infty^{\rm nr}=\bigcup_{m\ge0}K(\mu_{q^{p^m}-1}).
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Finite-field Galois theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 6, printed p. 326, PDF p. 345]. Independent derivation using the unramified classification of II §9 and the arithmetic Frobenius convention in V §1, printed p. 320, PDF p. 339.
