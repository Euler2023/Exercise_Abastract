---
title: "Exercise LA500: A Free Group Ring Resolution of the Trivial Module"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 2, printed p. 826, PDF p. 841"
created: 2026-09-29
---

# Exercise LA500: A Free Group Ring Resolution of the Trivial Module

## Problem Statement

> [!question] Lang XX.2 — Cohomology of groups
> Let $G$ be a group. Use $G$ as the set $S$ in the standard complex. Define an action of $G$ on the standard complex $E$ by letting
> $$
> x(x_0,\ldots,x_i)=(xx_0,\ldots,xx_i).
> $$
> Prove that each $E_i$ is a free module over the group ring $\mathbb Z[G]$. Thus if we let $R=\mathbb Z[G]$ be the group ring, and consider the category $\operatorname{Mod}(G)$ of $G$-modules, then the standard complex gives a free resolution of $\mathbb Z$ in this category.

## Hints

> [!hint]- Hint 1: Normalize the first coordinate
> Every basis tuple has a unique expression $x_0(1,x_0^{-1}x_1,\ldots,x_0^{-1}x_i)$.

> [!hint]- Hint 2: Check all module maps
> Deletion of an entry commutes with simultaneous left multiplication. Give $\mathbb Z$ the trivial action and check the augmentation as well.

## Solution

> [!success]- Independent free-basis and exactness proof
> Extend the given diagonal action linearly on $E_i=\mathbb Z[G^{i+1}]$. The identities $1v=v$ and $x(yv)=(xy)v$ hold on every basis tuple, so this makes $E_i$ a left $\mathbb Z[G]$-module.
>
> A $\mathbb Z[G]$-basis is
> $$
> \mathcal B_i=\{(1,y_1,\ldots,y_i):y_j\in G\}.
> $$
> Indeed, each tuple has the unique expression
> $$
> (x_0,\ldots,x_i)=x_0(1,x_0^{-1}x_1,\ldots,x_0^{-1}x_i).
> $$
> Hence the map from the free $\mathbb Z[G]$-module with basis $\mathcal B_i$ to $E_i$ is a bijection on its underlying abelian-group bases. It is therefore an isomorphism. For $i=0$, the basis has the single element $(1)$, giving $E_0\simeq\mathbb Z[G]$.
>
> For every deleted position, diagonal multiplication and deletion commute. Thus
> $$
> d_i(xv)=x\,d_i(v).
> $$
> With the trivial $G$-action on $\mathbb Z$, the augmentation $\varepsilon(x_0)=1$ is also equivariant.
>
> For completeness, exactness follows by taking $z=1$ and prepending it to every tuple: $h_i(x_0,\ldots,x_i)=(1,x_0,\ldots,x_i)$, with $h_{-1}(1)=(1)$. Deletion of the prepended entry gives $dh+hd=\mathrm{id}$, because the other deletion terms cancel against $hd$. Double deletions also cancel in pairs, giving $d^2=0$. Therefore the augmented complex is exact as an abelian-group sequence, hence also as a sequence of $\mathbb Z[G]$-modules: kernels and images are the same underlying subgroups.
>
> All its terms are free $\mathbb Z[G]$-modules, so it is a free resolution of the trivial module $\mathbb Z$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group algebras and group rings]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 2, printed p. 826, PDF p. 841]. The source heading “Cohomology of groups” begins with this exercise.
- Proof status: independent derivation; no finiteness assumption on $G$ is used.
- The normalized-tuple basis is a group-ring basis, whereas all tuples form an abelian-group basis. These are distinct assertions.
- The contracting homotopy need not be $G$-linear. In particular, this proof does not assert that the resolution splits in $\operatorname{Mod}(G)$.

