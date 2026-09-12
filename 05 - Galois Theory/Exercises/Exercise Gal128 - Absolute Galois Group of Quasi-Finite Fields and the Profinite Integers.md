---
title: "Exercise Gal128: Absolute Galois Group of Quasi-Finite Fields and the Profinite Integers"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - infinite-galois-theory
  - profinite-integers
  - p-adic-integers
  - quasi-finite-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 44, printed p. 329, PDF p. 344"
created: 2026-09-12
---

# Exercise Gal128: Absolute Galois Group of Quasi-Finite Fields and the Profinite Integers

## Problem Statement

> [!question]
> Let $k$ be a field such that every finite extension is cyclic, and having one extension of degree $n$ for each integer $n$. Show that the Galois group $G = G(k^{\mathrm{a}}/k)$ is the inverse limit $\varprojlim \mathbf{Z}/m\mathbf{Z}$, as $m\mathbf{Z}$ ranges over all ideals of $\mathbf{Z}$, ordered by inclusion. Show that this limit is isomorphic to the direct product of the limits
> $$
> \prod_p \lim_{n \to \infty} \mathbf{Z}/p^n\mathbf{Z} = \prod_p \mathbf{Z}_p
> $$
> taken over all prime numbers $p$, in other words, it is isomorphic to the product of all $p$-adic integers.

## Hints

> [!hint]- Weak Hint
> Recall the description of the Galois group of an infinite algebraic extension as the inverse limit of the Galois groups of its finite Galois subextensions. What are the finite Galois extensions of $k$ here?

> [!hint]- Moderate Hint
> For each $n$, let $k_n$ be the unique extension of degree $n$. Show that $k_m \subseteq k_n$ if and only if $m \mid n$. The restriction map $\operatorname{Gal}(k_n/k) \to \operatorname{Gal}(k_m/k)$ corresponds to the natural projection $\mathbf{Z}/n\mathbf{Z} \to \mathbf{Z}/m\mathbf{Z}$.

> [!hint]- Strong Hint
> Use the Chinese Remainder Theorem: for each $m = \prod p_i^{a_i}$, the ring $\mathbf{Z}/m\mathbf{Z}$ decomposes as $\prod \mathbf{Z}/p_i^{a_i}\mathbf{Z}$. Show that the inverse limit commutes with finite products, leading to $\varprojlim_m \mathbf{Z}/m\mathbf{Z} \cong \prod_p \varprojlim_n \mathbf{Z}/p^n\mathbf{Z} = \prod_p \mathbf{Z}_p$.

## Solution

> [!success]- Complete Derivation
> Let $k$ be a field satisfying the hypothesis: for each integer $n \ge 1$, there exists a unique extension $k_n$ of degree $n$ within a fixed algebraic closure $k^{\mathrm{a}}$, and $k_n/k$ is cyclic. Such fields are called **quasi-finite fields** (finite fields $\mathbf{F}_q$ are the primary example).
>
> ---
>
> ### 1. Subfield Inclusions and Galois Groups
> - **Uniqueness and Inclusions:**
>   Let $m, n \ge 1$. If $m \mid n$, then $k_n$ contains an intermediate subfield of degree $m$ over $k$. By uniqueness of the extension of degree $m$, this subfield must be $k_m$.
>   Conversely, if $k_m \subseteq k_n$, the tower law $[k_n : k] = [k_n : k_m] [k_m : k]$ implies $m \mid n$.
>   Therefore:
>   $$
>   k_m \subseteq k_n \iff m \mid n \iff n\mathbf{Z} \subseteq m\mathbf{Z}.
>   $$
>
> - **Galois Groups of Finite Extensions:**
>   Each $k_n/k$ is Galois with cyclic Galois group:
>   $$
>   \operatorname{Gal}(k_n/k) \cong \mathbf{Z}/n\mathbf{Z}.
>   $$
>   When $m \mid n$, the restriction map $\left.\sigma \mapsto \sigma\right|_{k_m}$ is a surjective homomorphism from $\operatorname{Gal}(k_n/k)$ to $\operatorname{Gal}(k_m/k)$. Under the canonical generator choices, this restriction corresponds to the natural reduction modulo $m$:
>   $$
>   \pi_{n, m}: \mathbf{Z}/n\mathbf{Z} \longrightarrow \mathbf{Z}/m\mathbf{Z}, \quad x \bmod n \longmapsto x \bmod m.
>   $$
>
> ---
>
> ### 2. The Absolute Galois Group as $\widehat{\mathbf{Z}}$
> Since every finite extension of $k$ is contained in $k_n$ for some $n$, the algebraic closure is the directed union:
> $$
> k^{\mathrm{a}} = \bigcup_{n=1}^\infty k_n.
> $$
> By the fundamental structure theorem for infinite Galois extensions (Exercise 43), the absolute Galois group $G = \operatorname{Gal}(k^{\mathrm{a}}/k)$ is the inverse limit over all finite Galois extensions ordered by inclusion:
> $$
> G = \operatorname{Gal}(k^{\mathrm{a}}/k) \cong \varprojlim_n \operatorname{Gal}(k_n/k) \cong \varprojlim_{m\mathbf{Z} \subseteq \mathbf{Z}} \mathbf{Z}/m\mathbf{Z}.
> $$
> This profinite group is denoted by $\widehat{\mathbf{Z}}$, the **profinite completion of the integers**:
> $$
> \widehat{\mathbf{Z}} = \varprojlim_{m \ge 1} \mathbf{Z}/m\mathbf{Z}.
> $$
>
> ---
>
> ### 3. Decomposition into the Product of $p$-Adic Integers
> We now prove that $\varprojlim_{m} \mathbf{Z}/m\mathbf{Z} \cong \prod_p \mathbf{Z}_p$.
>
> 1. **Chinese Remainder Theorem for Finite Quotients:**
>    For any positive integer $m \ge 1$, let its prime factorization be $m = \prod_{p \mid m} p^{v_p(m)}$.
>    By the Chinese Remainder Theorem, the canonical ring homomorphism
>    $$
>    \theta_m: \mathbf{Z}/m\mathbf{Z} \xrightarrow{\sim} \prod_{p \mid m} \mathbf{Z}/p^{v_p(m)}\mathbf{Z}
>    $$
>    is an isomorphism of finite rings and topological groups.
>
> 2. **Embedding into the Direct Product:**
>    For each prime $p$, consider the projective system of finite quotient groups $\{\mathbf{Z}/p^n\mathbf{Z}\}_{n=1}^\infty$ with the transition maps $\mathbf{Z}/p^{n+1}\mathbf{Z} \to \mathbf{Z}/p^n\mathbf{Z}$.
>    The inverse limit is the ring of **$p$-adic integers**:
>    $$
>    \mathbf{Z}_p = \lim_{n \to \infty} \mathbf{Z}/p^n\mathbf{Z}.
>    $$
>    Form the direct product of all $p$-adic integer rings over all prime numbers $p$:
>    $$
>    \prod_{p \text{ prime}} \mathbf{Z}_p = \prod_p \left(\varprojlim_{n} \mathbf{Z}/p^n\mathbf{Z}\right).
>    $$
>
> 3. **The Natural Isomorphism:**
>    For each prime $p$ and each $n \ge 1$, the projection $\mathbf{Z}/p^n\mathbf{Z}$ is one of the terms in the inverse system $\{\mathbf{Z}/m\mathbf{Z}\}_{m \ge 1}$.
>    Hence there is a natural continuous homomorphism:
>    $$
>    \Psi: \varprojlim_m \mathbf{Z}/m\mathbf{Z} \longrightarrow \prod_p \mathbf{Z}_p, \quad (x_m)_{m \ge 1} \longmapsto \left( (x_{p^n})_{n \ge 1} \right)_{p \text{ prime}}.
>    $$
>    - **Injectivity:** Suppose $\Psi((x_m)) = 0$. Then $x_{p^n} = 0$ for all primes $p$ and all $n \ge 1$.
>      For any integer $m = \prod p_i^{a_i}$, the component $x_m$ is determined by the components $x_{p_i^{a_i}}$ via the Chinese Remainder Theorem:
>      $$
>      x_m \equiv x_{p_i^{a_i}} \pmod{p_i^{a_i}}.
>      $$
>      Since each $x_{p_i^{a_i}} = 0$, we have $x_m = 0$ for all $m$. Thus $\Psi$ is injective.
>
>    - **Surjectivity:** Let $((y_{p, n})_{n \ge 1})_{p} \in \prod_p \mathbf{Z}_p$.
>      For each $m = \prod_{i=1}^r p_i^{a_i}$, by the Chinese Remainder Theorem there exists a unique $x_m \in \mathbf{Z}/m\mathbf{Z}$ such that
>      $$
>      x_m \equiv y_{p_i, a_i} \pmod{p_i^{a_i}} \quad \text{for each } i = 1, \dots, r.
>      $$
>      If $m_1 \mid m_2$, compatibility of the families $(y_{p, n})_n$ implies that $x_{m_2} \equiv x_{m_1} \pmod{m_1}$.
>      Thus $(x_m)_{m \ge 1} \in \varprojlim_m \mathbf{Z}/m\mathbf{Z}$, and $\Psi((x_m)) = ((y_{p, n}))$.
>      Thus $\Psi$ is surjective.
>
>    - **Topological Homeomorphism:** Both spaces are compact Hausdorff groups, and $\Psi$ is a continuous bijection. By the Open Mapping Theorem for compact spaces, $\Psi$ is a homeomorphism.
>
> Therefore, we obtain the canonical isomorphism of topological groups:
> $$
> G(k^{\mathrm{a}}/k) \cong \varprojlim_m \mathbf{Z}/m\mathbf{Z} \cong \prod_{p \text{ prime}} \mathbf{Z}_p.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]

## Notes

- For finite fields $k = \mathbf{F}_q$, the absolute Galois group is precisely $\operatorname{Gal}(\bar{\mathbf{F}}_q/\mathbf{F}_q) \cong \widehat{\mathbf{Z}} \cong \prod_p \mathbf{Z}_p$. The Frobenius automorphism $\sigma_q: x \mapsto x^q$ corresponds to the element $(1, 1, 1, \dots) \in \prod_p \mathbf{Z}_p$, which generates a dense subgroup isomorphic to $\mathbf{Z}$.
- A field whose absolute Galois group is isomorphic to $\widehat{\mathbf{Z}}$ is called quasi-finite. Examples include finite fields, as well as formal Laurent series fields $C((t))$ where $C$ is algebraically closed of characteristic 0.
