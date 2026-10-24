---
title: 'Exercise LA549: Canonical Tensor Isometries for Metrized Modules'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 1, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-1
created: '2026-10-23'
---

# Exercise LA549: Canonical Tensor Isometries for Metrized Modules

## Problem Statement

> [!question] Neukirch III.4.1
> If $M,N,L$ are metrized $\mathfrak o$-modules, then one has canonical isometries
> $$
> M\otimes_{\mathfrak o}N\simeq N\otimes_{\mathfrak o}M,\qquad
> (M\otimes_{\mathfrak o}N)\otimes_{\mathfrak o}L\simeq M\otimes_{\mathfrak o}(N\otimes_{\mathfrak o}L),
> $$
> $$
> M\otimes_{\mathfrak o}(N\oplus L)\simeq(M\otimes_{\mathfrak o}N)\oplus(M\otimes_{\mathfrak o}L).
> $$

## Hints

> [!hint]- Hint 1
> First write the symmetry, associativity, and distributivity maps on pure tensors. Construct their inverses using the same universal properties.

> [!hint]- Hint 2
> On pure tensors, the tensor product metric is the product of the inner products; the direct sum metric is their sum. Check pure tensors, then extend sesquilinearly.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $K$ be a number field and $\mathfrak o=\mathcal O_K$. Use the book's Hermitian metrics over $K_{\mathbb C}=K\otimes_{\mathbb Q}\mathbb C$. Each embedding component can be checked separately; the tensor product and direct sum metrics are defined in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed p. 228, PDF p. 247].
>
> **1. Symmetry.** The map $c(m\otimes n)=n\otimes m$ respects the balancing relations, so it is well-defined, and $c^2=1$. For pure tensors,
> $$
> \langle c(m\otimes n),c(m'\otimes n')\rangle
> =\langle n,n'\rangle_N\langle m,m'\rangle_M
> =\langle m\otimes n,m'\otimes n'\rangle.
> $$
> Sesquilinear extension shows that $c$ preserves the entire metric.
>
> **2. Associativity.** The universal property for balanced trilinear maps makes $a((m\otimes n)\otimes\ell)=m\otimes(n\otimes\ell)$ an isomorphism; its inverse restores the original parentheses. The inner products of pure tensors on both sides equal
> $$
> \langle m,m'\rangle_M\langle n,n'\rangle_N\langle\ell,\ell'\rangle_L,
> $$
> Thus $a$ is an isometry.
>
> **3. Distributivity.** Define
> $$
> d(m\otimes(n,\ell))=(m\otimes n,m\otimes\ell).
> $$
> Its inverse is given by $(m\otimes n,0)\mapsto m\otimes(n,0)$ and $(0,m\otimes\ell)\mapsto m\otimes(0,\ell)$, extended additively. For pure tensors, the original inner product is
> $$
> \langle m,m'\rangle_M\bigl(\langle n,n'\rangle_N+\langle\ell,\ell'\rangle_L\bigr),
> $$
> The direct sum inner product of their images is
> $$
> \langle m,m'\rangle_M\langle n,n'\rangle_N+\langle m,m'\rangle_M\langle\ell,\ell'\rangle_L,
> $$
> These are equal. Extending shows that $d$ is an isometry.
>
> All three maps are defined directly by the universal properties of modules and do not depend on bases. Their complexifications commute with the book's conjugation involution $F$. They are therefore canonical isometries of metrized modules in the book's sense. Torsion is allowed: the algebraic isomorphisms hold for arbitrary modules, while the metrics are defined on the complexifications, where the torsion parts vanish.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 1, printed p. 233, PDF p. 252]. Independent constructions with a separate metric check for each map.
- **Section boundary:** The running header on this page says §5, but the heading for §5 occurs after these four exercises. This exercise belongs to §4 and must not be misnumbered III.5.1 on the basis of the running header.
