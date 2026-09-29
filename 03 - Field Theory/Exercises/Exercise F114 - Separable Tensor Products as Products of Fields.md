---
title: "Exercise F114: Separable Tensor Products as Products of Fields"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - separable-extensions
  - tensor-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 1, printed p. 637, PDF p. 652"
created: 2026-09-29
---

# Exercise F114: Separable Tensor Products as Products of Fields

## Problem Statement

> [!question] Lang XVI.1
> Let $k$ be a field and $k(\alpha)$ a finite extension. Let $f(X)=\operatorname{Irr}(\alpha,k,X)$, and suppose that $f$ is separable. Let $k'$ be any extension of $k$. Show that $k(\alpha)\otimes k'$ is a direct sum of fields. If $k'$ is algebraically closed, show that these fields correspond to the embeddings of $k(\alpha)$ in $k'$.

## Hints

> [!hint]- Hint 1
> Use $k(\alpha)\otimes_k k'\simeq k'[X]/(f)$, proved in Exercise 2. A Bézout identity between $f$ and $f'$ remains an identity after extending the coefficient field.

> [!hint]- Hint 2
> Factor $f$ over $k'$ into distinct monic irreducibles and use the Chinese remainder map. When $k'$ is algebraically closed, evaluate at each root of $f$.

## Solution

> [!success]- Independent derivation
> By [[03 - Field Theory/Exercises/Exercise F115 - Base Change of a Simple Algebraic Extension|Exercise F115]], there is a $k'$-algebra isomorphism
> $$
> k(\alpha)\otimes_k k'\simeq k'[X]/(f).
> $$
> Separability means $\gcd(f,f')=1$ in $k[X]$. Choose $u,v\in k[X]$ with $uf+vf'=1$. This remains a Bézout identity in $k'[X]$, so $f$ has no repeated irreducible factor over $k'$. Write
> $$
> f=f_1\cdots f_s
> $$
> for its distinct monic irreducible factors in $k'[X]$. These factors are pairwise coprime. The reduction map
> $$
> k'[X]/(f)\longrightarrow\prod_{j=1}^{s}k'[X]/(f_j),
> \qquad [g]\longmapsto([g]\bmod f_j)_j,
> $$
> is injective: a polynomial divisible by all the pairwise coprime $f_j$ is divisible by their product. It is surjective as well. Put $g_j=f/f_j$, and choose $u_j,v_j$ with $u_jg_j+v_jf_j=1$. Then $e_j=u_jg_j$ is congruent to $1$ modulo $f_j$ and to $0$ modulo every other factor. The polynomial $\sum_j a_je_j$ maps to any prescribed tuple of residue classes $([a_j])_j$.
>
> Each quotient $k'[X]/(f_j)$ is a field because $f_j$ is irreducible. This proves the required finite direct-sum decomposition, equivalently a finite direct product of fields as an algebra.
>
> Now suppose $k'$ is algebraically closed, and put $d=\deg f$. Its $d$ distinct roots $\beta_1,\ldots,\beta_d$ lie in $k'$, so the factors are all linear. A $k$-embedding $\sigma:k(\alpha)\hookrightarrow k'$ is determined by $\sigma(\alpha)$, which must be a root of $f$. Conversely, evaluation at any such root induces a homomorphism $k[X]/(f)\to k'$. It is a unital homomorphism from a field, hence injective. Thus the roots are in bijection with the embeddings.
>
> In these terms the decomposition is the explicit map
> $$
> k(\alpha)\otimes_k k'
> \longrightarrow
> \prod_{\sigma\in\operatorname{Hom}_k(k(\alpha),k')}k',
> \qquad a\otimes c\longmapsto\bigl(\sigma(a)c\bigr)_\sigma.
> $$
> Each embedding labels one coordinate projection. Different coordinates may be isomorphic fields, but they are distinct factors of this decomposition.

## Related Concepts

- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- Source: [S2, Ch. XVI, Exercise 1, printed p. 637, PDF p. 652], checked against the original rendered page. All tensor products in this exercise are over $k$, and the embeddings fix $k$.
- Proof inputs: the simple-extension base-change isomorphism is proved in Exercise F115; the required Chinese remainder argument is supplied above. Polynomial division, irreducible factorization over a field, and Bézout's identity are the elementary algebraic inputs.
- The source's “direct sum” is finite, so it agrees with the direct product on the underlying vector space and with coordinatewise multiplication. No claim is made that $k(\alpha)\otimes_k k'$ itself is a field.
- Routing is by the minimal-polynomial factorization and separability argument; the tensor-product prerequisite is cross-linked.
