---
title: 'Exercise Gal183: Restriction and Norm in Local Duality'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 3, printed p. 326, PDF p. 345
source_refs:
- S4/ch-V/sec-1/ex-3
created: '2026-10-23'
---

# Exercise Gal183: Restriction and Norm in Local Duality

## Problem Statement

> [!question] Neukirch V.1.3
> If $L/K$ is a finite extension of $p$-adic number fields, then one has a commutative diagram
> $$
> \begin{array}{ccccc}
> H^1(L,\mathbb Z/n\mathbb Z)&\times&H^1(L,\mu_n)&\longrightarrow&\mathbb Z/n\mathbb Z\\
> \uparrow\scriptstyle{\mathrm{Res}}&&\downarrow\scriptstyle{N_{L/K}}&&\Vert\\
> H^1(K,\mathbb Z/n\mathbb Z)&\times&H^1(K,\mu_n)&\longrightarrow&\mathbb Z/n\mathbb Z.
> \end{array}
> $$

## Hints

> [!hint]- Hint 1
> Write out the pairing as character evaluation.

> [!hint]- Hint 2
> Use $\operatorname{rec}_K(N_{L/K}b)=\iota(\operatorname{rec}_L(b))$ in the abelianized absolute Galois groups.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Under Kummer theory the indicated map on the second factor sends the class of $b\in L^*$ to that of $N_{L/K}b$. This is also the corestriction map: choosing a root $\beta^n=b$, multiplying its conjugates over representatives of $G_K/G_L$ gives an $n$-th root of $N_{L/K}b$, and the associated Kummer cocycle is the product defining corestriction.
>
> The norm compatibility of local reciprocity gives
> $$
> \iota(\operatorname{rec}_L(b))=\operatorname{rec}_K(N_{L/K}b),
> $$
> where $\iota:G_L^{\rm ab}\to G_K^{\rm ab}$ is induced by inclusion. Therefore for every $\chi\in H^1(K,\mathbb Z/n\mathbb Z)$,
> $$
> \langle\operatorname{Res}\chi,b\rangle_L=(\chi|_{G_L})(\operatorname{rec}_L(b))=\chi(\operatorname{rec}_K(N_{L/K}b))=\langle\chi,N_{L/K}b\rangle_K.
> $$
> This equality is precisely the meaning of the diagram, whose two vertical arrows point in opposite directions.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer theory]]

## Notes

Original diagram: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 3, printed p. 326, PDF p. 345]. Independent derivation using norm compatibility of reciprocity (IV §6), rather than general Tate duality.
