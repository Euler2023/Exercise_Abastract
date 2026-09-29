---
title: "Exercise LA507: Coinduction and the Hom Adjunction"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 10, printed pp. 828–829, PDF pp. 843–844"
created: 2026-09-29
---

# Exercise LA507: Coinduction and the Hom Adjunction

## Problem Statement

> [!question] Lang XX.10
> Let $G$ be a group and $S$ a subgroup. Show that the bifunctors
> $$
> (A,B)\longmapsto\operatorname{Hom}_G(A,M_G^S(B))
> \quad\text{and}\quad
> (A,B)\longmapsto\operatorname{Hom}_S(A,B)
> $$
> on $\operatorname{Mod}(G)\times\operatorname{Mod}(S)$ with value in $\operatorname{Mod}(\mathbb Z)$ are isomorphic. The isomorphism is given by the maps
> $$
> \varphi\longmapsto(a\mapsto g_a),
> \quad\text{for }\varphi\in\operatorname{Hom}_S(A,B),
> \quad g_a(\sigma)=\varphi(\sigma a),\quad g_a\in M_G^S(B).
> $$
> The inverse mapping is given by
> $$
> f\longmapsto f(1)\quad\text{with }f\in\operatorname{Hom}_G(A,M_G^S(B)).
> $$
> Recall that $M_G^S(B)$ was defined in Chapter XVIII, §7 for the induced representation. Basically you should already know the above isomorphism.

> [!info] Function convention and the evaluation notation
> Here $M_G^S(B)=\{u:G\to B:u(sg)=s\,u(g)\}$, with $(x\cdot u)(g)=u(gx)$. For arbitrary index this is **coinduction**. The printed $f(1)$ means the map $a\mapsto f(a)(1)$, since $f$ has domain $A$, not $G$.

## Hints

> [!hint]- Hint 1: Verify that each $g_a$ belongs to the function module
> Use the $S$-linearity of $\varphi$ to check $g_a(sx)=s\,g_a(x)$.

> [!hint]- Hint 2: Evaluate equivariance at the identity
> If $f$ is $G$-linear, then $f(xa)(1)=(x\cdot f(a))(1)=f(a)(x)$. This identity recovers all values of $f$ from evaluation at $1$.

## Solution

> [!success]- Independent proof of the natural adjunction
> Write $\operatorname{Coind}_S^G B=M_G^S(B)$ with the function convention in the info callout. If $\varphi:A\to B$ is $S$-linear, define
> $$
> J(\varphi)(a)(x)=\varphi(xa).
> $$
> For $s\in S$, $J(\varphi)(a)(sx)=\varphi(sxa)=s\varphi(xa)$, so it lies in the required function module. It is additive in $a$, and for $g,x\in G$,
> $$
> J(\varphi)(ga)(x)=\varphi(xga)
> =(g\cdot J(\varphi)(a))(x).
> $$
> Hence $J(\varphi)$ is $G$-linear.
>
> Conversely, for $f:A\to M_G^S(B)$ that is $G$-linear, set $E(f)(a)=f(a)(1)$. This is additive, and for $s\in S$,
> $$
> E(f)(sa)=f(sa)(1)=(s\cdot f(a))(1)=f(a)(s)=s f(a)(1).
> $$
> Thus $E(f)$ is $S$-linear.
>
> Evaluating $J(\varphi)$ at $1$ gives $E(J(\varphi))(a)=\varphi(a)$. Conversely,
> $$
> J(E(f))(a)(x)=E(f)(xa)=f(xa)(1)
> =(x\cdot f(a))(1)=f(a)(x).
> $$
> Therefore $E$ and $J$ are inverse additive maps. Precomposing with a $G$-map in $A$ or postcomposing with an $S$-map in $B$ commutes with both formulas. This proves the bifunctorial isomorphism, contravariant in $A$ and covariant in $B$.
>
> No finite-index assumption has been used. If the index is finite, the function module is also naturally isomorphic to the usual induced module; at infinite index it is the product-based right adjoint to restriction.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom functor]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induction and Frobenius reciprocity]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 10, printed pp. 828–829, PDF pp. 843–844]. The convention in the source reference was checked previously at Ch. XVIII, §7, printed p. 690, PDF p. 705.
- Proof status: independent derivation of the two explicit inverse maps.
- The notation $\operatorname{Hom}_S(A,B)$ restricts the given $G$-action on $A$ to $S$. The variance in the first argument is contravariant.
- Coinduction at arbitrary index must not be replaced without justification by the tensor module $\mathbb Z[G]\otimes_{\mathbb Z[S]}B$.

