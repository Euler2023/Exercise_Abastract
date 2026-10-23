---
title: 'Exercise Gal201: Maximal Abelian Reciprocity and the Connected Component'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 1, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-1
created: '2026-10-23'
---

# Exercise Gal201: Maximal Abelian Reciprocity and the Connected Component

## Problem Statement

> [!question] Neukirch VI.5.1
> If $D_K$ is the connected component of the unit element of $C_K$, and if $K^{ab}|K$ is the maximal abelian extension of $K$, then $C_K/D_K\simeq G(K^{ab}|K)$.

## Hints

> [!hint]- Hint
> Take the inverse limit of finite reciprocity maps. The norm-one factor is compact and the remaining positive-real factor is connected.

> [!hint]- Stronger hint
> The compact norm-one factor maps onto the inverse limit of finite reciprocity quotients; the common kernel is the connected component.

## Solution

> [!success]- Independent derivation
> For every finite abelian $L/K$, reciprocity gives a continuous surjective homomorphism $C_K\to G(L/K)$. These maps are compatible with restriction and give $\theta:C_K\to G(K^{\mathrm{ab}}/K)$. Each finite target is discrete, so the map kills $D_K$.
> Splitting the norm gives $C_K=C_K^0\times\mathbb R_{>0}$, and $\theta$ kills the second factor. The group $C_K^0$ is compact, so its image is closed. The image surjects onto every finite quotient and is therefore dense in the inverse limit. Hence $\theta$ is surjective.
> Its kernel is the intersection of all finite abelian norm groups. The global existence theorem (VI.(6.1), printed pp.395–396/PDF414–415) identifies these with all closed finite-index subgroups of $C_K$. Exercises 9–10 of VI.§1 identify their intersection as $D_K$. The induced continuous bijection $C_K^0/D_K^0\to G(K^{\mathrm{ab}}/K)$ is a homeomorphism from a compact space to a Hausdorff space. Removing the positive-real factor gives the stated topological isomorphism.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 1, printed p.394, PDF p.413]. The solution is independently derived.
