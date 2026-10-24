---
title: 'Exercise ST17: The Abelian Category of G Modulations'
topic: set-theory
difficulty: advanced
status: not-started
tags:
- exercise
- set-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 9, printed p. 307, PDF p. 326
source_refs:
- S4/ch-IV/sec-6/ex-9
created: '2026-10-23'
---

# Exercise ST17: The Abelian Category of G Modulations

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 9
> $G$-modulations form an abelian category.

## Hints

> [!hint]- Hint 1 — first step
> Try defining the kernel and cokernel of a modulation morphism separately at every finite $G$-set.

> [!hint]- Hint 2 — proof route
> Compute kernels and cokernels object by object. The finite-product and base-change identities descend to these groups because all structure maps commute with the original morphism.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $\eta:A\to B$ be a homomorphism of $G$-modulations. Define $K(X)=\ker\eta_X$ and $C(X)=\operatorname{coker}\eta_X$ object by object. Since $\eta$ commutes with both $f^*,f_*$, every restriction and transfer preserves the kernels and induces a map on the quotients. Thus both $K,C$ have double-functor structures.
> Kernels and cokernels of finite products are computed componentwise, giving $K(X\sqcup Y)=K(X)\times K(Y)$ and $C(X\sqcup Y)=C(X)\times C(Y)$. The Mackey identity for every pullback square holds in $A,B$ and remains valid after restriction to the kernels or projection to the cokernels. Hence $K,C$ are again $G$-modulations and satisfy the universal properties of kernels and cokernels object by object.
> The zero functor is a zero object, and objectwise direct sums give finite biproducts. Addition in the homomorphism groups makes the category additive. Images and coimages are also computed objectwise. The map $\operatorname{coim}\eta_X\to\operatorname{im}\eta_X$ is an isomorphism in the category of abelian groups and is compatible with all structure maps, so the coimage-to-image map of the entire functor is an isomorphism. Additivity, existence of kernels and cokernels, and equality of coimage and image give the axioms of an abelian category.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

The statement was checked against a 200 dpi image of the original page [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 9, printed p.307, PDF p.326]. The solution is an independent derivation. Galois descent is not part of the definition of a general modulation and is not imposed in this exercise.
