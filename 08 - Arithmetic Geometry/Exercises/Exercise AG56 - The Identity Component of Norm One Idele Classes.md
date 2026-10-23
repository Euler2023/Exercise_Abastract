---
title: 'Exercise AG56: The Identity Component of Norm One Idele Classes'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 9, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-9
created: '2026-10-23'
---

# Exercise AG56: The Identity Component of Norm One Idele Classes

## Problem Statement

> [!question] Neukirch VI.1.9
> The group $D_K^0$ is the intersection of all closed subgroups of finite index in $C_K^0$, and it is the connected component of $1$ in $C_K^0$.

> [!note] Root-of-unity convention from the preceding exercise
> If $K$ is totally imaginary, retain the visible correction from Exercise 6: the $\epsilon_i$ are lifts of a free basis of the totally positive units modulo roots of unity. Finite roots of unity are handled by complex phases, without additional profinite parameters.

## Hints

> [!hint]- Hint 1 — first step
> Look at the image of idèles which equal $1$ at every finite place and are positive at all real places.

> [!hint]- Hint 2 — proof route
> Identify $D_K^0$ with the closure of the image of the connected archimedean norm-one subgroup. The remaining quotient is profinite.

## Solution

> [!success]- Independent derivation
> Let $H_\infty$ be the subgroup of infinite idèles which equal $1$ at all finite places, are positive at the real places, and have norm $1$. Their logarithmic absolute values lie in the hyperplane $\sum_v\log|a_v|_v=0$, and their complex phases form circles; hence $H_\infty\cong\mathbb R^t\times(S^1)^s$ is connected. The logarithmic basis from the unit theorem shows that this is exactly the image of the parameters in the preceding exercise with all profinite coordinates zero. Its closure in $C_K^0$ is therefore $D_K^0$: since the integers are dense in $\widehat{\mathbb Z}$, the diagonal unit relations allow us to approximate every profinite coordinate.
> The book has proved that $C_K^0$ is compact (VI.(1.6), printed p.362/PDF381). The quotient $C_K^0/D_K^0$ is profinite: decompose idèles using finitely many ideal-class representatives; after removing $H_\infty$, what remains is the compact group of finite units $\prod_{v\nmid\infty}U_v$ and finitely many ideal-class cosets. Quotienting further by the closure of the units gives a compact, totally disconnected group. The open congruence subgroups of the finite unit group give a basis of open subgroups in this quotient.
> To make this profiniteness argument precise, put $Q=C_K^0/D_K^0$. The valuation ideal of the finite part defines a continuous map $Q\to\operatorname{Cl}_K$; it is well defined because representatives of $D_K^0$ are units at all finite places. If the ideal class is zero, a principal idèle removes all finite valuations, leaving finite units and an infinite part of norm one. After quotienting by $H_\infty\subseteq D_K^0$, only the signs at the real places remain in the infinite part. Thus the kernel of this map is the continuous image in $Q$ of the profinite group
> $$
> P=\left(\prod_{v\nmid\infty}\mathcal O_v^\times\right)\times\{\pm1\}^{r_1}
> $$
> Since $P$ is compact and $Q$ is Hausdorff, this image is a quotient of $P$ by a closed subgroup and is again profinite. It is open in $Q$ because the ideal class group is finite. A compact group with an open profinite subgroup is itself profinite: take arbitrarily small open subgroups of that subgroup and intersect their finitely many conjugates to obtain arbitrarily small open normal subgroups of the original group. Here the group is abelian, so even the conjugation step is unnecessary. This also accounts for the finite group of real signs, without incorrectly treating the continuous image of a general totally disconnected space as totally disconnected.
> Thus the identity component of $C_K^0/D_K^0$ is trivial, and the identity component of the original group is exactly $D_K^0$. Every closed subgroup of finite index gives a finite discrete quotient and must contain the connected group $D_K^0$. Conversely, every nonidentity element of the profinite quotient is separated by some finite quotient. Pulling back its kernel gives a closed subgroup of finite index which excludes that element. The required intersection is therefore exactly $D_K^0$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness]]

## Notes

The statement was checked against images of the original book. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 9, printed p.368, PDF p.387]. The solution is an independent derivation. The quotient argument using finite units and finitely many ideal classes uses the restricted product topology. Connectedness of $I_K/K^\times$ cannot be determined by simply taking the product of the connected components of its local factors.
