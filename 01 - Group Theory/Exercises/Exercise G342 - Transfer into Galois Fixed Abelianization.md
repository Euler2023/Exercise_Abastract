---
title: 'Exercise G342: Transfer into Galois Fixed Abelianization'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 5, printed p. 306, PDF p. 325
source_refs:
- S4/ch-IV/sec-6/ex-5
created: '2026-10-23'
---

# Exercise G342: Transfer into Galois Fixed Abelianization

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 5
> If $L/K$ is a finite Galois extension, then $G_L^{ab}$ is a $G(L/K)$-module in a canonical way, and the transfer from $G_K$ to $G_L$ is a homomorphism
> $$
> \operatorname{Ver}:G_K^{ab}\longrightarrow(G_L^{ab})^{G(L/K)}.
> $$

## Hints

> [!hint]- Hint 1 — first step
> Write the transfer as a product over coset representatives and compare its conjugate after permuting those representatives.

> [!hint]- Hint 2 — proof route
> Conjugation by two lifts differs by an inner automorphism of $G_L$. Transfer is equivariant under conjugation, while inner conjugation acts trivially on $G_K^{\mathrm{ab}}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $\Gamma=G_K$, $H=G_L\triangleleft\Gamma$, and $Q=\Gamma/H$. For $q\in Q$, choose a lift $\gamma\in\Gamma$ and define $q[h]=[\gamma h\gamma^{-1}]$ on $H^{\mathrm{ab}}$. Another lift has the form $\gamma h_0$, and the two conjugations differ by an inner automorphism of $H$, which acts trivially on its abelianization. The action is therefore independent of the lift and satisfies the group-action laws. Continuity follows from finite quotients and continuous conjugation.
> The finite-index transfer is defined by a product over coset representatives. Changing representatives changes the product only by commutators in $H$, giving a continuous homomorphism $\Gamma^{\mathrm{ab}}\to H^{\mathrm{ab}}$. It is natural with respect to conjugation:
> $$
> q\,\operatorname{Ver}([\delta])
> =\operatorname{Ver}([\gamma\delta\gamma^{-1}])
> =\operatorname{Ver}([\delta]).
> $$
> The last equality holds because inner conjugation acts trivially on $\Gamma^{\mathrm{ab}}$. The image therefore lies in the $Q$-invariants, as required.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

The statement was checked against the original pages rendered at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 5, printed p.306, PDF p.325]. The solution is an independent derivation using this chapter's conventions for abstract fields, continuous discrete $G$-modules, restriction, and norm.
