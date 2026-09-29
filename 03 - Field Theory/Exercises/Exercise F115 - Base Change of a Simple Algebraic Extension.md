---
title: "Exercise F115: Base Change of a Simple Algebraic Extension"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - minimal-polynomials
  - tensor-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 2, printed p. 637, PDF p. 652"
created: 2026-09-29
---

# Exercise F115: Base Change of a Simple Algebraic Extension

## Problem Statement

> [!question] Lang XVI.2
> Let $k$ be a field, $f(X)$ an irreducible polynomial over $k$, and $\alpha$ a root of $f$. Show that $k(\alpha)\otimes k'$ is isomorphic, as a $k'$-algebra, to $k'[X]/(f(X))$.

## Hints

> [!hint]- Hint 1
> Interpret $k'$ as an arbitrary field extension of $k$, as in Exercise 1. Send $X$ to $\alpha\otimes1$ and a coefficient $c\in k'$ to $1\otimes c$.

> [!hint]- Hint 2
> Construct the inverse by sending $g(\alpha)\otimes c$ to the residue class of $cg(X)$. Check that changing $g$ by a multiple of $f$ makes no difference.

## Solution

> [!success]- Independent derivation by inverse maps
> We tensor over $k$ and let $k'$ be any extension field. Multiplying $f$ by a nonzero scalar does not change its ideal, so we may take $f$ monic. The evaluation map identifies $k(\alpha)$ with $k[X]/(f)$: irreducibility makes this quotient a field, and its image is $k[\alpha]=k(\alpha)$.
>
> Define a $k'$-algebra homomorphism
> $$
> \Phi:k'[X]\longrightarrow k(\alpha)\otimes_k k',
> \qquad \sum_j c_jX^j\longmapsto\sum_j\alpha^j\otimes c_j.
> $$
> The tensor algebra has multiplication $(a\otimes c)(b\otimes d)=ab\otimes cd$, so this is indeed multiplicative and sends $1$ to $1$. Since $f(\alpha)=0$, the map vanishes on $(f)$ and induces
> $$
> \overline\Phi:k'[X]/(f)\longrightarrow k(\alpha)\otimes_k k'.
> $$
>
> Conversely, for $g\in k[X]$ and $c\in k'$ put
> $$
> \beta(g(\alpha),c)=[cg(X)]\in k'[X]/(f).
> $$
> If $g(\alpha)=h(\alpha)$, minimality of $f$ gives $g-h\in(f)$, so the residue class does not depend on the representative. The map $\beta$ is additive in each argument and $k$-balanced: for $a\in k$, $\beta(ag(\alpha),c)=\beta(g(\alpha),ac)$. The tensor universal property therefore gives a $k$-linear map
> $$
> \Psi:k(\alpha)\otimes_k k'\longrightarrow k'[X]/(f),
> \qquad g(\alpha)\otimes c\longmapsto[cg(X)].
> $$
> This map is $k'$-linear, preserves $1$, and is multiplicative on pure tensors; distributivity proves multiplicativity on arbitrary sums.
>
> For every polynomial class $[p(X)]$, the composite $\Psi\overline\Phi$ returns $[p(X)]$. For every pure tensor $g(\alpha)\otimes c$, the composite $\overline\Phi\Psi$ returns that same tensor. Polynomial classes and pure tensors span their respective algebras, so both composites are identities. Hence $\overline\Phi$ and $\Psi$ are inverse $k'$-algebra isomorphisms.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]

## Notes

- Source: [S2, Ch. XVI, Exercise 2, printed p. 637, PDF p. 652], visually verified. The printed exercise does not reintroduce $k'$; the preceding exercise supplies the intended arbitrary extension field $k'/k$.
- The proof is independent and uses only the minimal-polynomial quotient description and the tensor universal property. No separability assumption is needed.
- The quotient need not be a field or even reduced. For a purely inseparable degree-$p$ extension $k(\alpha)/k$ in characteristic $p$, adjoining $\alpha$ to the coefficient field can turn $f$ into $(X-\alpha)^p$, producing nonzero nilpotents.
