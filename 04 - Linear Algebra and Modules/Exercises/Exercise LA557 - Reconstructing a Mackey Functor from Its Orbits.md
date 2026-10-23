---
title: 'Exercise LA557: Reconstructing a Mackey Functor from Its Orbits'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 11, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-11
created: '2026-10-23'
---

# Exercise LA557: Reconstructing a Mackey Functor from Its Orbits

## Problem Statement

> [!question] Neukirch IV.6.11
> $G$-modulations are explicitly given by the following data. Let $B_0(G)$ be the category whose objects are the $G$-sets $G/U$, where $U$ varies over the open subgroups of $G$, and whose morphisms are just the projections $\pi:G/U\to G/V$ for $U\subset V$, as well as the maps $c(\sigma):G/U\to G/\sigma U\sigma^{-1}$, $\tau U\mapsto\tau U\sigma^{-1}=\tau\sigma^{-1}(\sigma U\sigma^{-1})$, for $\sigma\in G$.
>
> Let $A=(A^*,A_*):B_0(G)\to(ab)$ be a double functor and for $\pi:G/U\to G/V$ ($U\subset V$), resp. $c(\sigma):G/U\to G/\sigma U\sigma^{-1}$ ($\sigma\in G$), define
> $$
> \operatorname{Ind}_V^U=A_*(\pi):A(G/U)\longrightarrow A(G/V),\qquad
> \operatorname{Res}_U^V=A^*(\pi):A(G/V)\longrightarrow A(G/U),
> $$
> $$
> c(\sigma)_*=A_*(c(\sigma)):A(G/U)\longrightarrow A(G/\sigma U\sigma^{-1}).
> $$
> If for any three open subgroups $U,V\subset W$ of $G$, one has the induction formula
> $$
> \operatorname{Res}_U^W\circ\operatorname{Ind}_W^V
> =\sum_{\sigma\in U\backslash W/V}
> \operatorname{Ind}_U^{U\cap\sigma V\sigma^{-1}}\circ c(\sigma)_*\circ
> \operatorname{Res}_{V\cap\sigma^{-1}U\sigma}^{V},
> $$
> then $A$ extends uniquely to a $G$-modulation $A:B(G)\to(ab)$.
>
> **Printed hint:** If $X$ is an arbitrary finite $G$-set, then the disjoint union $A_X=\coprod_{x\in X}A(G/G_x)$ is again a $G$-set, because $c(\sigma)_*A(G/G_x)=A(G/G_{\sigma x})$. Define $A(X)$ to be the group $A(X)=\operatorname{Hom}_X(X,A_X)$ of all $G$-equivariant sections $X\to A_X$ of the projection $A_X\to X$.

> [!warning] Source issue
> With the explicit definition of a double functor in this section, the statement is missing $A^*(c)=A_*(c)^{-1}$. The solution gives a counterexample with $C_3$ and proves the full version with this necessary condition added.

## Hints

> [!hint]- Hint 1
> First check an isomorphism $c$: a Mackey pullback square forces $c_*c^*=1$. Is this already included in the definition of a double functor used in the statement?

> [!hint]- Hint 2
> After adding $A^*(c)=A_*(c)^{-1}$, define $A(X)$ as a finite product, choosing for each orbit the group attached to a stabilizer. For an arbitrary map, define pullback pointwise by restriction and pushforward by induction over the stabilizer orbits in each fiber.

> [!hint]- Hint 3
> Decompose a pullback square into orbits on both sides. The orbits of the fiber product $(G/U)\times_{G/W}(G/V)$ are indexed by $U\backslash W/V$, giving precisely the printed induction formula.

## Solution

> [!success]- Independent derivation
> **The statement is missing an isomorphism compatibility condition.** The definition of a double functor in this section only requires the two functors to agree on objects. The Mackey property also forces $A^*(c)=A_*(c)^{-1}$ for every isomorphism $c$. Apply it to the pullback square formed by $c$ and its inverse. The printed induction formula alone does not recover this condition.
>
> For a counterexample, let $G=C_3=\langle s\rangle$, $A(G/1)=\mathbb Z[\zeta_3]$, and $A(G/G)=0$. On automorphisms of $G/1$, let $c(s)_*$ act by multiplication by $\zeta_3$ and let every $c(s)^*$ be the identity. Set all maps between the two orbits to zero. This is a double functor: every composite involving the projection is zero. The only nontrivial induction formula is
> $$
> \operatorname{Res}_1^G\operatorname{Ind}_G^1=0=1+\zeta_3+\zeta_3^2.
> $$
> The other formulas are either zero or functorial identities. But $c(s)_*c(s)^*$ is multiplication by $\zeta_3$ rather than the identity, so this cannot extend to a Mackey functor.
>
> **Corrected version and proof.** Add inverse compatibility for orbit isomorphisms. Write $M_U=A(G/U)$. Following the hint, define $A(X)$ to consist of families $(a_x)_{x\in X}$ satisfying $a_{\sigma x}=c(\sigma)_*a_x$. When $g\in G_x$, the map $c(g):G/G_x\to G/G_x$ is the identity. Thus one may choose an arbitrary $a_x\in M_{G_x}$ for each orbit, after which all other coordinates are uniquely determined. Consequently $A(X)\simeq\prod_{G\backslash X}M_{G_x}$, independently of the choice of orbit representatives.
>
> For $f:X\to Y$, we have $G_x\subset G_{f(x)}$. Define
> $$
> (f^*b)_x=\operatorname{Res}_{G_x}^{G_{f(x)}}b_{f(x)}.
> $$
> For $y\in Y$, decompose the finite fiber $f^{-1}(y)$ into $G_y$ orbits and define
> $$
> (f_*a)_y=\sum_{x\in G_y\backslash f^{-1}(y)}\operatorname{Ind}_{G_y}^{G_x}a_x.
> $$
> Changing a fiber representative leaves each term unchanged by the naturality of conjugation. Replacing $y$ by $\sigma y$ applies $c(\sigma)_*$ to the whole expression. Both naturality relations are commutation relations between projections and $c(\sigma)$ in $B_0(G)$ and are already guaranteed by functoriality. Thus the maps are well-defined and $G$-equivariant.
>
> The composition law for pullback follows from that for restriction. For pushforward, group a composite fiber by the intermediate fiber, then use the transitivity of induction in the sums. Identity maps induce identities. Disjoint unions give finite products, which are also finite direct sums.
>
> It remains to check a pullback square. All groups and maps respect finite direct sums of orbits, so it suffices to check two maps $G/U\to G/W\leftarrow G/V$. The orbits of the fiber product are indexed by $U\backslash W/V$, and the stabilizer of the $\sigma$-th orbit is $U\cap\sigma V\sigma^{-1}$. Computing the two routes using the definitions, the left side is exactly $\operatorname{Res}_U^W\operatorname{Ind}_W^V$ and the right side is the sum printed in the statement. The hypothesis therefore gives the Mackey square. General squares are finite direct sums of these orbit squares.
>
> Conversely, any extension must take direct sums on disjoint unions and give the prescribed maps on orbit maps. Decomposition of fibers and the Mackey squares force the formulas above. Thus the extension is unique up to canonical isomorphism. If inverse compatibility is already implicit in the book's use of the term double functor, that additional convention excludes the counterexample, and the corrected proof applies directly.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Functors]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 11, printed p. 308, PDF p. 327]. The original problem and the full printed hint are retained. The independent proof explicitly adds isomorphism compatibility and does not identify an arbitrary modulation with a $G$-module.
- **Uniqueness:** Choices of models for finite direct sums give uniqueness only up to natural isomorphism, not literal equality of arbitrary chosen models.
