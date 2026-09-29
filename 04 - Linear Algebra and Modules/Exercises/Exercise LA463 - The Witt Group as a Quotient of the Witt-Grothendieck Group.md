---
title: "Exercise LA463: The Witt Group as a Quotient of the Witt-Grothendieck Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - witt-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 21, printed p. 599, PDF p. 614"
created: 2026-09-29
---

# Exercise LA463: The Witt Group as a Quotient of the Witt-Grothendieck Group

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 21
> Show explicitly how $W(k)$ is a homomorphic image of $WG(k)$.

> [!info] Inherited definitions and hypotheses
> Work over a field $k$ of characteristic different from $2$, as in Sections 10–11. Let $M(k)$ be the monoid of isometry classes of finite-dimensional nondegenerate symmetric bilinear forms under orthogonal sum, and let $WG(k)$ be its Grothendieck group. Lang defines $W(k)$ by identifying symmetric forms with isometric anisotropic parts; radicals and hyperbolic summands are discarded. Lang calls an anisotropic form “definite,” which does not mean positive definite over an ordered field.

## Hints

> [!hint]- Hint 1: Send an actual form to its Witt class
> The map $M(k)\to W(k)$ respects orthogonal sum. Extend it to formal differences.

> [!hint]- Hint 2: Compare Witt decompositions
> If $g$ and $h$ have the same anisotropic part, write $g\simeq H^{\perp r}\perp a$ and $h\simeq H^{\perp s}\perp a$, where $H$ is a hyperbolic plane.

## Solution

> [!success]- Independent construction, with the kernel identified
> Use $[g]_G$ for the class of $g$ in $WG(k)$ and $[g]_W$ for its class in $W(k)$. Every element of $WG(k)$ is a formal difference $[g]_G-[h]_G$. Define
>
> $$
> \pi:WG(k)\longrightarrow W(k),\qquad
> \pi([g]_G-[h]_G)=[g]_W-[h]_W.
> $$
>
> To verify well-definedness directly, suppose another pair $(g',h')$ represents the same formal difference. The group-completion relation means that for some nondegenerate form $t$,
>
> $$
> g\perp h'\perp t\simeq g'\perp h\perp t.
> $$
>
> Taking Witt classes and cancelling in the group $W(k)$ gives $[g]_W-[h]_W=[g']_W-[h']_W$. The defining formula also respects addition of formal differences, so $\pi$ is a homomorphism.
>
> Every Witt class is represented by an anisotropic form $a$, which is nondegenerate: a nonzero vector in its radical would satisfy $a(v,v)=0$. Therefore $[a]_W=\pi([a]_G)$, proving surjectivity. An equally explicit description is
>
> $$
> \pi([g]_G-[h]_G)=[g\perp(-h)]_W,
> $$
>
> because $h\perp(-h)$ is hyperbolic. For example, after diagonalizing $h$, each pair $\langle b,-b\rangle$ is a hyperbolic plane: it is nondegenerate and contains the nonzero isotropic vector $(1,1)$.
>
> We can also compute the kernel. The hyperbolic plane $H$ has trivial Witt class, so $\mathbb Z[H]_G\subseteq\ker\pi$. Conversely, if $\pi([g]_G-[h]_G)=0$, then $g$ and $h$ have isometric anisotropic parts. Witt decomposition gives
>
> $$
> g\simeq H^{\perp r}\perp a,\qquad
> h\simeq H^{\perp s}\perp a
> $$
>
> for some $r,s\ge0$ and anisotropic $a$. Thus $[g]_G-[h]_G=(r-s)[H]_G$, proving
>
> $$
> W(k)\simeq WG(k)/\mathbb Z[H]_G.
> $$
>
> The dimension homomorphism sends $[H]_G$ to $2$, so $[H]_G$ has infinite order. This also makes the exact sequence $0\to\mathbb Z\to WG(k)\to W(k)\to0$ explicit, with the first map $r\mapsto r[H]_G$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Witt and Witt-Grothendieck Groups|Witt and Witt-Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** The exercise was checked on [S2, Ch. XV, Ex. 21, printed p. 599, PDF p. 614]. The definitions and group property were checked on [S2, Ch. XV, §11, Theorem 11.1 and following definitions, printed pp. 594–595, PDF pp. 609–610]. The quotient map and kernel computation are independent derivations.
- **Imported source result:** Witt decomposition and uniqueness of the anisotropic part are supplied by [S2, Ch. XV, Corollary 10.7, printed pp. 593–594, PDF pp. 608–609], checked on the page images. The standing characteristic assumption is stated at the start of §10, printed p. 589 / PDF p. 604.
- **Notation boundary:** In $WG(k)$, the additive inverse $-[h]_G$ is generally different from the class $[-h]_G$ of the negated form. They have the same image in $W(k)$ because their difference is a hyperbolic contribution.
