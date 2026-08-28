---
title: "Exercise G318: Recovering a Group from Its Forgetful Functor"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - category-theory
  - group-actions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 49, printed p. 80, PDF p. 95"
created: 2026-08-28
---

# Exercise G318: Recovering a Group from Its Forgetful Functor

## Problem Statement

> [!question] Exercise 49
> Let $\operatorname{Set}(G)$ be the category of left $G$-sets and let $F:\operatorname{Set}(G)\to\operatorname{Set}$ be the forgetful functor. Show that $\operatorname{Aut}(F)$ is naturally isomorphic to $G$.

## Hints

> [!hint]- Hint 1
> Evaluate a natural automorphism on the identity element of the regular left $G$-set.

## Solution

> [!success]- Solution
> For $g\in G$ and every left $G$-set $X$, define $\eta^g_X:X\to X$ by $\eta^g_X(x)=gx$. Every equivariant map commutes with these maps, so $\eta^g$ is a natural automorphism of $F$, with inverse $\eta^{g^{-1}}$. Also $\eta^g\eta^h=\eta^{gh}$, giving a homomorphism $G\to\operatorname{Aut}(F)$.
>
> Conversely, let $\eta\in\operatorname{Aut}(F)$ and evaluate it on the regular left $G$-set $G$. Put $g=\eta_G(e)$. For a $G$-set $X$ and $x\in X$, the map
>
> $$
> \phi_x:G\longrightarrow X,
> \qquad h\longmapsto hx,
> $$
>
> is equivariant. Naturality gives
>
> $$
> \eta_X(x)=\eta_X(\phi_x(e))=\phi_x(\eta_G(e))=gx.
> $$
>
> Thus $\eta=\eta^g$. Evaluation at $e$ is inverse to $g\mapsto\eta^g$, proving the natural isomorphism $\operatorname{Aut}(F)\cong G$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]

## Notes

- **Convention:** The result is $G$, not $G^{\mathrm{op}}$, because the vault and source use left $G$-sets and $g$ acts by left multiplication.
- **Source status:** [S2, Ch. I, Ex. 49, printed p. 80, PDF p. 95]. The naturality argument is independent.

