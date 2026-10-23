---
title: 'Exercise Rep151: Discrete G Modules and Modulations with Galois Descent'
topic: representation-theory
difficulty: advanced
status: not-started
tags:
- exercise
- representation-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 10, printed pp. 307–308, PDF pp. 326–327
source_refs:
- S4/ch-IV/sec-6/ex-10
created: '2026-10-23'
---

# Exercise Rep151: Discrete G Modules and Modulations with Galois Descent

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 10
> If $A$ is a $G$-module, then the function $A(G/G_K)=A^{G_K}$ extends to a $G$-modulation $A$ in such a way that, for an extension $L/K$, the map $f^*:A_K\to A_L$, resp. $f_*:A_L\to A_K$, induced by $f:G/G_L\to G/G_K$, is the inclusion, resp. the norm $N_{L/K}$.
> The rule $A\mapsto A$ is an equivalence between the category of $G$-modules and the category of $G$-modulations with “Galois descent”, i.e., of those $G$-modulations $A$ such that
> $$
> f^*:A(Y)\longrightarrow A(X)^{G(X\mid Y)},
> $$
> for every Galois mapping $f:X\to Y$, is an isomorphism.

## Hints

> [!hint]- Hint 1 — first step
> On an arbitrary finite $G$-set $X$, consider the group of equivariant functions $X\to A$. Restriction should be composition.

> [!hint]- Hint 2 — proof route
> Use equivariant maps $X\to M$, with pullback and summation over fibers. Conversely reconstruct $M$ as the direct limit of $A(G/N)$ over open normal $N$.

## Solution

> [!success]- Independent derivation
> Use additive notation in the solution; in multiplicative notation, the fiber sum is the norm product. For any finite $G$-set, define
> $$
> A_M(X)=\operatorname{Map}_G(X,M),\quad
> f^*u=u\circ f,\quad
> (f_*u)(y)=\sum_{x\in f^{-1}(y)}u(x).
> $$
> The fibers are finite, so transfer is defined. The action of $G$ bijects a fiber with its corresponding fiber, so the sum remains equivariant. The contravariant composition law for restriction and the covariant composition law for transfer follow respectively from composition of functions and finite iterated sums. Disjoint unions give products. In a pullback square, corresponding fibers are in bijection, so $g^*f_*=f'_*g'^*$, the Mackey identity.
> Evaluation at the base point $H$ of $G/H$ gives $A_M(G/H)\cong M^H$. Transfer for the projection $G/H\to G/J$ is $\sum_{j\in J/H}j m$, and restriction is inclusion of invariants. If $H\triangleleft J$, equivariant functions fixed by the deck group are precisely those constant on the projection fibers. They therefore descend uniquely to $G/J$, proving Galois descent.
> Conversely, given a modulation $A$ satisfying descent, take
> $$
> M_A=\varinjlim_{N\triangleleft_{\rm open}G}A(G/N)
> $$
> with restriction as the transition maps. Descent makes these transitions injective. The automorphisms of $G/N$ give an action of $G$; compatibility makes $M_A$ a discrete continuous module, since every element at a finite level is fixed by $N$.
> For any open $H$, choose a normal open subgroup $N\subseteq H$. Descent gives $A(G/H)\cong A(G/N)^{H/N}$. Passing to the direct limit, every $H$-fixed element is represented at some finite level. Injectivity of the transition maps makes it already fixed at that finite level. Thus
> $$
> A(G/H)\cong M_A^H.
> $$
> Finite $G$-sets decompose into orbits, so these isomorphisms extend to all objects. Restriction maps are compatible by construction. The Mackey identity turns transfer, after restriction to a sufficiently small normal level, into a finite fiber sum. Since restriction to that level is injective, transfer is also uniquely determined and compatible.
> Taking homomorphisms level by level to the limit gives module homomorphisms, while module homomorphisms give homomorphisms of modulations object by object. The two constructions are inverse: for a discrete continuous module, $M=\bigcup_NM^N$. This gives the equivalence of categories.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

The statement was checked against a 200 dpi image of the original page [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 10, printed p.307, PDF p.326]. The solution is an independent derivation. Only modulations satisfying Galois descent arise from a single discrete $G$-module; general Mackey functors must not be confused with $G$-modules. The source exercise spans printed pp.307–308 / PDF pp.326–327.
