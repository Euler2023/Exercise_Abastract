---
title: 'Exercise Gal202: Local Abelian Closures inside a Global Abelian Closure'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 2, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-2
created: '2026-10-23'
---

# Exercise Gal202: Local Abelian Closures inside a Global Abelian Closure

## Problem Statement

> [!question] Neukirch VI.5.2
> For every place $\mathfrak p$ of $K$ one has $K_{\mathfrak p}^{ab}=K^{ab}K_{\mathfrak p}$.
> **Printed hint:** Use (5.6) and (5.8).

## Hints

> [!hint]- Hint
> One inclusion follows because completions of global abelian extensions are abelian. For the other, realize a local cyclic character globally, allowing a larger global order when necessary.

> [!hint]- Stronger hint
> Use the weak Grunwald form allowing a larger global cyclic degree for each cyclic local subextension, then take their compositum.

## Solution

> [!success]- Independent derivation
> Place all fields in one chosen local algebraic closure. The right side means the local compositum of all finite global abelian subextensions. If $L/K$ is finite abelian, the Galois group of $L_w/K_v$ is a decomposition subgroup of $G(L/K)$ and remains abelian. Hence $K^{\mathrm{ab}}K_v\subseteq K_v^{\mathrm{ab}}$.
> For the reverse inclusion, use the following **external standard input: the weak Grunwald existence theorem, allowing the global degree to increase**. Given cyclic local extensions at finitely many places of a number field, each can be embedded in the corresponding completion of some global cyclic extension. The global degree need not equal the local degrees. Here only the single place $v$ is used. This version, which allows a larger degree, is not obstructed by the exceptional Grunwald–Wang cases for prescribed exact degree.
> The Galois group of any finite abelian $F/K_v$ embeds in a product of finitely many cyclic quotients. Thus $F$ is the compositum of finitely many cyclic subextensions. Apply the input above to each cyclic subextension to obtain a global cyclic extension $L_i/K$ whose chosen completion contains that local extension. Put $L=\prod_iL_i$. Then $L/K$ is abelian and $LK_v\supseteq F$. Taking the union over all $F$ proves the reverse inclusion.
> Infinite places do not require this input: $\mathbb C$ has no nontrivial finite extension, and $\mathbb C/\mathbb R$ at a real place is realized by adjoining a square root of any element negative under that real embedding.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 2, printed p.394, PDF p.413]. The solution is independently derived. It explicitly depends on a global realization theorem that permits an increased degree. It does not claim to follow the original hint using only (5.6)/(5.8), or to assert an exception-free Grunwald theorem with prescribed exact degree.
