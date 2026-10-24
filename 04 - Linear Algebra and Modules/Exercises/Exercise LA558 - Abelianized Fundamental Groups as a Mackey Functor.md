---
title: 'Exercise LA558: Abelianized Fundamental Groups as a Mackey Functor'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 12, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-12
created: '2026-10-23'
---

# Exercise LA558: Abelianized Fundamental Groups as a Mackey Functor

## Problem Statement

> [!question] Neukirch IV.6.12
> The function $\pi_{\rm ab}(G/G_K)=G_K^{\rm ab}$ extends to a $G$-modulation
> $$
> \pi_{\rm ab}:B(G)\longrightarrow(pro\text{-}ab)
> $$
> into the category of pro-abelian groups. Thus, for an extension $L|K$, the maps $f^*:G_K^{\rm ab}\to G_L^{\rm ab}$, resp. $f_*:G_L^{\rm ab}\to G_K^{\rm ab}$, induced by $f:G/G_L\to G/G_K$ are given by the transfer, resp. the inclusion $G_L\to G_K$.

## Hints

> [!hint]- Hint 1
> For an open subgroup $U\subset V$, the covariant map comes from inclusion, and the contravariant map is the transfer $V^{ab}\to U^{ab}$.

> [!hint]- Hint 2
> Use the coset-representative formula for transfer. Group the representatives of $W/V$ into $U$ orbits to obtain the double-coset formula. Continuity can be checked level by level in finite quotients.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> For each open subgroup $U$, define $M_U=U/\overline{[U,U]}$ with its profinite quotient topology. Inclusion gives a continuous map $i_U^V:U^{ab}\to V^{ab}$, and transfer gives $t_U^V:V^{ab}\to U^{ab}$. Specifically, choose representatives $R$ for the left cosets of $V/U$ and write $vr=r' u(v,r)$. Then
> $$
> t_U^V(\bar v)=\prod_{r\in R}\overline{u(v,r)}.
> $$
> Changing representatives introduces telescoping factors that cancel in $U^{ab}$. For $vw$, the coset permutation rewrites the product as the product of the two individual products, proving that the map is a homomorphism. A finite product of finitely many continuous pieces gives continuity. Conjugation $U\mapsto\sigma U\sigma^{-1}$ induces an isomorphism; take its inverse as the contravariant map.
>
> To prove transitivity of transfer, choose nested representatives $R_{W/V}R_{V/U}$. Taking the product first over the second-level representatives and then over the first-level representatives equals taking the product once over $W/U$. Transitivity of inclusion and compatibility with conjugation follow directly from the definitions.
>
> We still need the Mackey formula. For $U,V\subset W$, restrict the finite $W$-set $W/U$ to $V$ and decompose it into $V$ orbits, indexed by $V\backslash W/U$. When evaluating $t_U^W$ on $v\in V$, the representatives within each orbit only permute one another. The stabilizer of that orbit is $V\cap\sigma U\sigma^{-1}$. Its contribution is exactly transfer from $V$ to this stabilizer, followed by conjugation into $U\cap\sigma^{-1}V\sigma$ and then inclusion into $U$. Taking the product over all orbits gives
> $$
> t_U^W i_V^W=\sum_{\sigma\in U\backslash W/V}
> i_{U\cap\sigma V\sigma^{-1}}^U\,c(\sigma)\,t_{V\cap\sigma^{-1}U\sigma}^{V}.
> $$
> Here additive notation denotes the sum of maps of pro-abelian groups; in multiplicative notation, it is the product of the orbit contributions. The derivation accounts for each coset factor and does not assume that $W$ is finite, since only coset sets of finite index are used.
>
> The corrected reconstruction in Exercise 11 now applies. Finite products and finite sums agree for pro-abelian groups, and all constructions are continuous. For any finite $G$-set, take the finite product of the abelianizations of its orbit stabilizers. This makes $\pi_{ab}$ the required modulation, and the maps $f^*,f_*$ in the statement are precisely transfer and inclusion.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Finite Coset Actions]]
- [[01 - Group Theory/Concepts/Quotient Groups|Abelianization]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 12, printed p. 308, PDF p. 327]. Independent derivation using coset products and double cosets. The original transfer formula is in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, printed pp. 296–297, PDF pp. 315–316]. Only that explicit formula is imported here; the required functorial laws are supplied.
- **Topology:** Abelianization uses the closed commutator subgroup. The abstract abelianization of an infinite profinite group is not mistaken for a Hausdorff quotient.
