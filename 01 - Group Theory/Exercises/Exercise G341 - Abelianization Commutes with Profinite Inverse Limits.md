---
title: 'Exercise G341: Abelianization Commutes with Profinite Inverse Limits'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 6, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-6
created: '2026-10-23'
---

# Exercise G341: Abelianization Commutes with Profinite Inverse Limits

## Problem Statement

> [!question] Neukirch IV.2.6
> If $\{G_i\}$ is a projective system of profinite groups and $G=\varprojlim_iG_i$, then $G^{ab}=\varprojlim_iG_i^{ab}$ (see §1, exercise 5).

## Hints

> [!hint]- Hint 1
> For a directed system of compact groups, the image of an inverse-limit projection is the intersection of all subsequent images. First replace the system by these stable images so that the projections are surjective.

> [!hint]- Hint 2
> For a decreasing family of compact subgroups, taking the closure of the commutator subgroup commutes with intersection: the images of the subgroups in every finite quotient eventually stabilize.

> [!hint]- Hint 3
> For a surjective system, the closure of $[G,G]$ maps onto the commutator closure of each $G_i$, and compatible coordinates in these closures lift by compactness. Then apply exactness of inverse limits to short exact sequences of compact groups.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Write $D(H)=\overline{[H,H]}$. Inverse limits preserve short exact sequences of compact groups: given compatible quotient coordinates, impose compatibility conditions on the product of their compact fibers. Every finite collection of conditions can be satisfied by lifting to a common subsequent stage and then projecting, so the finite-intersection property gives a global lift. Thus
> $$
> 1\longrightarrow\varprojlim D(G_i)\longrightarrow G\longrightarrow\varprojlim G_i^{ab}\longrightarrow1
> $$
> is exact. It remains to prove $\varprojlim D(G_i)=D(G)$.
>
> Put $H_i=\operatorname{im}(G\to G_i)$. Compactness gives $H_i=\bigcap_{j\ge i}\operatorname{im}(G_j\to G_i)$. For a directed decreasing family of compact subgroups $(K_j)$, one has
> $$
> D(\bigcap_jK_j)=\bigcap_jD(K_j).
> $$
> To prove this, project both sides to any finite quotient. The images of $K_j$ eventually stabilize, so their commutator subgroups do as well. Compactness makes projection commute with these decreasing intersections. Closed subgroups are determined by their images in all finite quotients, proving the equality.
>
> Now if $x=(x_i)\in\varprojlim D(G_i)$, each $x_i$ belongs to the images of all subsequent $D(G_j)$, hence to the intersection of all $D(\operatorname{im}(G_j\to G_i))$. The preceding equality gives $x_i\in D(H_i)$.
>
> Any finite abelian quotient $\chi:G\to A$ factors through some coordinate image $H_i$: its open kernel contains the intersection of finitely many coordinate kernels, and directedness makes this intersection contain a single subsequent coordinate kernel. The factor map $H_i\to A$ kills $D(H_i)$, so $\chi(x)=1$. The finite quotients of the profinite abelian group $G/D(G)$ separate its points, hence $x\in D(G)$. The reverse inclusion follows because every homomorphism preserves commutators and their closures. Therefore $\varprojlim D(G_i)=D(G)$, and the exact sequence above gives
> $$
> G^{ab}\simeq\varprojlim_iG_i^{ab}.
> $$
> Both sides are compact Hausdorff, so the resulting continuous bijection is a topological isomorphism. No surjectivity assumption on the original transition maps is needed.

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Commutator Subgroup]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 6, printed p. 274, PDF p. 293]. An independent argument using stable images and compactness, without adding the surjectivity assumption absent from the printed statement.
- **Proof input:** The finite-intersection construction for inverse limits of directed compact spaces is explained in the solution. Abelianization throughout means the quotient by the closed commutator subgroup.
