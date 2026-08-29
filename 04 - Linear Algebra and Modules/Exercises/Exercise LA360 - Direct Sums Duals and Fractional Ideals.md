---
title: "Exercise LA360: Direct Sums, Duals, and Fractional Ideals"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - fractional-ideals
  - dual-modules
  - direct-sums
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 12, printed p. 168, PDF p. 183"
created: 2026-08-29
---

# Exercise LA360: Direct Sums, Duals, and Fractional Ideals

## Problem Statement

> [!question] Exercise 12
> Let $\mathfrak o$ be a Dedekind ring with quotient field $K$.
>
> **(a)** Let $\mathfrak a,\mathfrak b$ be ideals. Show that there is an isomorphism of $\mathfrak o$-modules
>
> $$
> \mathfrak a\oplus\mathfrak b
> \cong
> \mathfrak o\oplus\mathfrak a\mathfrak b.
> $$
>
> **(b)** Let $\mathfrak a,\mathfrak b$ be fractional ideals, and let $f:\mathfrak a\to\mathfrak b$ be an isomorphism of $\mathfrak o$-modules. Then $f$ has an extension to a $K$-linear map $f_K:K\to K$. Let $c=f_K(1)$. Show that $\mathfrak b=c\mathfrak a$ and that $f$ is the map
>
> $$
> m_c:x\longmapsto cx.
> $$
>
> **(c)** Let $\mathfrak a$ be a fractional ideal. For each $b\in\mathfrak a^{-1}$, the map $m_b:\mathfrak a\to\mathfrak o$ is an element of the dual $\mathfrak a^\vee$. Show that, under this map,
>
> $$
> \mathfrak a^{-1}
> =
> \mathfrak a^\vee
> =
> \operatorname{Hom}_{\mathfrak o}(\mathfrak a,\mathfrak o),
> $$
>
> and hence $\mathfrak a^{\vee\vee}=\mathfrak a$.

## Hints

> [!hint]- Source hint for (a)
> First suppose $\mathfrak a+\mathfrak b=\mathfrak o$. Study the surjection
>
> $$
> \mathfrak a\oplus\mathfrak b\longrightarrow
> \mathfrak a+\mathfrak b,
> \qquad
> (x,y)\longmapsto x+y.
> $$

> [!hint]- General case of (a)
> Exercise II.19 gives $c\in K^\times$ such that $c\mathfrak a$ is an integral ideal relatively prime to $\mathfrak b$. Multiplication by $c$ does not change the relevant module isomorphism types.

> [!hint]- Parts (b) and (c)
> Every $K$-linear endomorphism of the one-dimensional $K$-vector space $K$ is multiplication by its value at $1$.

## Solution

> [!success]- Solution
> **(a) Relatively prime case.** Assume
>
> $$
> \mathfrak a+\mathfrak b=\mathfrak o.
> $$
>
> The addition map gives an exact sequence
>
> $$
> 0\longrightarrow\mathfrak a\cap\mathfrak b
> \xrightarrow{x\mapsto(x,-x)}
> \mathfrak a\oplus\mathfrak b
> \xrightarrow{(x,y)\mapsto x+y}
> \mathfrak o\longrightarrow0.
> $$
>
> Relatively prime ideals satisfy
>
> $$
> \mathfrak a\cap\mathfrak b=\mathfrak a\mathfrak b.
> $$
>
> Indeed, the product is always contained in the intersection. Conversely, choose $r\in\mathfrak a$ and $s\in\mathfrak b$ with $r+s=1$. If $x\in\mathfrak a\cap\mathfrak b$, then
>
> $$
> x=xr+xs\in\mathfrak a\mathfrak b.
> $$
>
> Since the quotient $\mathfrak o$ is free, the exact sequence splits. Hence
>
> $$
> \mathfrak a\oplus\mathfrak b
> \cong
> \mathfrak a\mathfrak b\oplus\mathfrak o.
> $$
>
> **General case.** By Exercise II.19, choose $c\in K^\times$ such that $c\mathfrak a$ is an integral ideal and
>
> $$
> c\mathfrak a+\mathfrak b=\mathfrak o.
> $$
>
> The relatively prime case gives
>
> $$
> c\mathfrak a\oplus\mathfrak b
> \cong
> \mathfrak o\oplus c\mathfrak a\mathfrak b.
> $$
>
> Multiplication by $c$ gives $\mathfrak a\cong c\mathfrak a$ and $\mathfrak a\mathfrak b\cong c\mathfrak a\mathfrak b$. Replacing those two factors yields
>
> $$
> \mathfrak a\oplus\mathfrak b
> \cong
> \mathfrak o\oplus\mathfrak a\mathfrak b.
> $$
>
> **(b)** A nonzero fractional ideal spans $K$ over $K$, so scalar extension gives a unique $K$-linear isomorphism
>
> $$
> f_K:K\otimes_{\mathfrak o}\mathfrak a
> \longrightarrow
> K\otimes_{\mathfrak o}\mathfrak b,
> $$
>
> and both sides identify with $K$. Put $c=f_K(1)$. For every $x\in K$,
>
> $$
> f_K(x)=f_K(x\cdot1)=x f_K(1)=cx.
> $$
>
> Restricting to $\mathfrak a$ gives $f=m_c$, and surjectivity gives
>
> $$
> \mathfrak b=f(\mathfrak a)=c\mathfrak a.
> $$
>
> **(c)** If $b\in\mathfrak a^{-1}$, then $b\mathfrak a\subseteq\mathfrak o$, so multiplication by $b$ defines an $\mathfrak o$-linear map
>
> $$
> m_b:\mathfrak a\longrightarrow\mathfrak o.
> $$
>
> The map $b\mapsto m_b$ is injective because $\mathfrak a$ contains a nonzero element. Conversely, let
>
> $$
> \varphi\in\operatorname{Hom}_{\mathfrak o}(\mathfrak a,\mathfrak o).
> $$
>
> As in part (b), $\varphi$ extends to a $K$-linear map $K\to K$, hence is multiplication by some $b\in K$. Since $\varphi(\mathfrak a)\subseteq\mathfrak o$, one has $b\mathfrak a\subseteq\mathfrak o$, so $b\in\mathfrak a^{-1}$. Therefore
>
> $$
> \mathfrak a^\vee
> =
> \operatorname{Hom}_{\mathfrak o}(\mathfrak a,\mathfrak o)
> \cong\mathfrak a^{-1}.
> $$
>
> A nonzero fractional ideal of a Dedekind ring is invertible, so
>
> $$
> (\mathfrak a^{-1})^{-1}=\mathfrak a.
> $$
>
> Applying the same identification to $\mathfrak a^{-1}$ shows that the natural evaluation map identifies $\mathfrak a^{\vee\vee}$ with $\mathfrak a$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]
- [[02 - Ring Theory/Exercises/Exercise R223 - Coprime Representatives of Ideal Classes|Exercise R223]]

## Notes

- **Routing rationale:** Direct-sum splittings, scalar extension, and dual modules perform the main work, so the note belongs to Linear Algebra and Modules; ideal-class links record the ring-theoretic input.
- **Imported input:** The general case of (a) uses Lang's Chapter II, Exercise 19, and (c) uses invertibility of nonzero fractional ideals in a Dedekind ring.
- **Source status:** The three parts and the source hint for (a) were visually checked at [S2, Ch. III, Ex. 12, printed p. 168, PDF p. 183]. All proofs above are independent.
