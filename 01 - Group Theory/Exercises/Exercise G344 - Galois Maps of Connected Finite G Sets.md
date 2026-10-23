---
title: 'Exercise G344: Galois Maps of Connected Finite G Sets'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 8, printed p. 307, PDF p. 326
source_refs:
- S4/ch-IV/sec-6/ex-8
created: '2026-10-23'
---

# Exercise G344: Galois Maps of Connected Finite G Sets

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 8
> Let $f:X\to Y$ be a map of connected finite $G$-sets, and let $x\in X$, $y=f(x)\in Y$. Show that $f$ is Galois if and only if $\pi_1(X,x)$ is a normal subgroup of $\pi_1(Y,y)$. In this case, one has a canonical isomorphism
> $$
> G(X\mid Y)\cong\pi_1(Y,y)/\pi_1(X,x).
> $$

## Hints

> [!hint]- Hint 1 — first step
> After choosing $x$ and $y$, replace the map by $G/H\to G/J$ with $H\subseteq J$ and inspect its fiber over $J$.

> [!hint]- Hint 2 — proof route
> Write $X=G/H$, $Y=G/J$ with $H\le J$. The automorphism group over $Y$ is the normalizer quotient $N_J(H)/H$.

## Solution

> [!success]- Independent derivation
> Using the chosen base points, identify $X=G/H,Y=G/J$, where $H=G_x\subseteq J=G_y$ and $f(gH)=gJ$. The fiber over $y$ is $J/H$. A $G$-equivariant automorphism is uniquely determined by the image of $H$, which must be $aH$ with $a\in J$ to lie over $Y$. Being well defined and bijective requires $a\in N_J(H)$. Thus, using inverses to remove the antihomomorphism arising from right multiplication,
> $$
> \operatorname{Aut}_Y(X)\cong N_J(H)/H.
> $$
> This group acts transitively on $J/H$ if and only if $N_J(H)=J$, equivalently $H\triangleleft J$. All other fibers are $G$-translates of this one, so the condition is equivalent to transitivity on every fiber. In the normal case the isomorphism becomes $G(X/Y)\cong J/H$.
> Explicitly, associate $aH$ with $gH\mapsto ga^{-1}H$. Then $\tau_a\circ\tau_b=\tau_{ab}$, giving a group isomorphism rather than an unspecified anti-isomorphism.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

The statement was checked against the original pages rendered at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 8, printed p.307, PDF p.326]. The solution is an independent derivation.
