---
title: Étale Cohomology
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
---

# Étale Cohomology

## Motivation

Classical singular cohomology doesn't work well in algebraic geometry (especially in positive characteristic). Grothendieck developed **étale cohomology** as an algebraic substitute that:
- Works over any field
- Captures Galois-theoretic information
- Leads to proofs of the Weil conjectures

## The Étale Topology

> [!info] Definition (Étale Morphism)
> A morphism $f: X \to Y$ of schemes is **étale** if it is:
> - Flat
> - Unramified (= formally étale)
>
> Intuitively: local isomorphism (like covering maps in topology).

> [!info] Definition (Étale Site)
> The **étale site** $X_{\text{ét}}$ of a scheme $X$ has:
> - Objects: étale morphisms $U \to X$
> - Coverings: families $\{U_i \to U\}$ that are jointly surjective

## Étale Sheaves

> [!info] Definition
> An **étale sheaf** $\mathcal{F}$ on $X$ assigns to each étale $U \to X$ an abelian group $\mathcal{F}(U)$, with restriction maps satisfying the sheaf axiom for étale covers.

Key examples:
- Constant sheaf $\underline{\mathbb{Z}/n\mathbb{Z}}$
- Sheaf of $n$-th roots of unity $\mu_n$
- Sheaves of $\ell$-adic integers $\mathbb{Z}_\ell$

## Étale Cohomology Groups

> [!info] Definition
> For an étale sheaf $\mathcal{F}$ on $X$:
> $$H^i_{\text{ét}}(X, \mathcal{F}) = R^i \Gamma(X_{\text{ét}}, \mathcal{F})$$
> (right derived functors of global sections)

## Key Properties

1. **Comparison**: For $X/\mathbb{C}$ smooth, $H^i_{\text{ét}}(X, \mathbb{Z}/n\mathbb{Z}) \cong H^i(X(\mathbb{C}), \mathbb{Z}/n\mathbb{Z})$

2. **Galois action**: For $X/K$, the group $\text{Gal}(\bar{K}/K)$ acts on $H^i_{\text{ét}}(X_{\bar{K}}, \mathcal{F})$

3. **Finiteness**: For proper smooth $X$ over a field, $H^i_{\text{ét}}(X, \mathbb{Z}/n\mathbb{Z})$ is finite

## $\ell$-adic Cohomology

> [!info] Definition
> For prime $\ell \neq \text{char}(k)$:
> $$H^i(X, \mathbb{Z}_\ell) = \varprojlim_n H^i_{\text{ét}}(X, \mathbb{Z}/\ell^n\mathbb{Z})$$
> $$H^i(X, \mathbb{Q}_\ell) = H^i(X, \mathbb{Z}_\ell) \otimes_{\mathbb{Z}_\ell} \mathbb{Q}_\ell$$

These are **$\ell$-adic Galois representations**!

## Weil Conjectures

> [!abstract] Theorem (Deligne, 1974)
> For smooth projective $X$ over $\mathbb{F}_q$:
>
> 1. **Rationality**: $Z(X, t) = \frac{P_1(t) \cdots P_{2n-1}(t)}{P_0(t) P_2(t) \cdots P_{2n}(t)}$
>
> 2. **Functional equation**: $Z(X, 1/q^n t) = \pm q^{n\chi/2} t^\chi Z(X, t)$
>
> 3. **Riemann hypothesis**: Roots of $P_i(t)$ have absolute value $q^{-i/2}$

Here $P_i(t) = \det(1 - \text{Frob}_q \cdot t \mid H^i(X, \mathbb{Q}_\ell))$.

## Examples

> [!example] Example 1: Point
> $H^0(\text{Spec}(k), \mathbb{Z}_\ell) = \mathbb{Z}_\ell$, all others zero.

> [!example] Example 2: Projective line
> $H^0(\mathbb{P}^1, \mathbb{Z}_\ell) = H^2(\mathbb{P}^1, \mathbb{Z}_\ell) = \mathbb{Z}_\ell$
> $H^1(\mathbb{P}^1, \mathbb{Z}_\ell) = 0$

> [!example] Example 3: Elliptic curve
> $H^1(E, \mathbb{Z}_\ell) \cong \mathbb{Z}_\ell^2$ with Galois action encoding the $\ell$-adic Tate module.

## Connection to Galois Representations

> [!abstract] Theorem
> For smooth proper $X/K$, the étale cohomology $H^i(X_{\bar{K}}, \mathbb{Q}_\ell)$ is a finite-dimensional $\mathbb{Q}_\ell$-vector space with continuous $\text{Gal}(\bar{K}/K)$-action.

This gives [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois representations]] from geometry!

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Zeta Functions of Varieties|Zeta Functions of Varieties]]
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]]
