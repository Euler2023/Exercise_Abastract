---
title: Galois Group
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2025-01-19
---

# Galois Group

## Definition

> [!info] Definition (Galois Group)
> Let $K/F$ be a [[03 - Field Theory/Concepts/Field Extensions|field extension]]. The **Galois group** of $K$ over $F$ is:
> $$\text{Gal}(K/F) = \text{Aut}_F(K) = \{\sigma: K \to K : \sigma \text{ is an automorphism with } \sigma|_F = \text{id}_F\}$$
>
> These are automorphisms of $K$ that fix $F$ pointwise.

## Group Structure

- The operation is composition of automorphisms
- Identity: the identity map $\text{id}_K$
- Inverses: $\sigma^{-1}$ is also an $F$-automorphism

## Key Properties

> [!tip] For Finite Extensions
> If $K/F$ is a finite extension:
> $$|\text{Gal}(K/F)| \leq [K:F]$$
> Equality holds if and only if $K/F$ is a Galois extension.

> [!info] Definition (Galois Extension)
> A finite extension $K/F$ is **Galois** if $|\text{Gal}(K/F)| = [K:F]$.
>
> Equivalently: $K/F$ is normal and separable.

## Computing Galois Groups

For $K/F$ Galois:
1. Find generators of $K$ over $F$
2. Determine where automorphisms can send the generators
3. Check which maps extend to automorphisms

## Examples

> [!example] Example 1: $\text{Gal}(\mathbb{C}/\mathbb{R})$
> $|\text{Gal}(\mathbb{C}/\mathbb{R})| = [\mathbb{C}:\mathbb{R}] = 2$
>
> Elements: $\{\text{id}, \text{complex conjugation}\}$
>
> $\text{Gal}(\mathbb{C}/\mathbb{R}) \cong \mathbb{Z}/2\mathbb{Z}$

> [!example] Example 2: $\text{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q})$
> An automorphism $\sigma$ must satisfy:
> - $\sigma$ fixes $\mathbb{Q}$
> - $\sigma(\sqrt{2})^2 = \sigma(2) = 2$
>
> So $\sigma(\sqrt{2}) = \pm\sqrt{2}$.
>
> Elements: $\{\text{id}, \sigma\}$ where $\sigma(\sqrt{2}) = -\sqrt{2}$.
>
> $\text{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) \cong \mathbb{Z}/2\mathbb{Z}$

> [!example] Example 3: Splitting field of $x^3 - 2$ over $\mathbb{Q}$
> $K = \mathbb{Q}(\sqrt[3]{2}, \omega)$ where $\omega = e^{2\pi i/3}$
>
> $[K:\mathbb{Q}] = 6$
>
> $\text{Gal}(K/\mathbb{Q}) \cong S_3$ (permutes the three roots of $x^3 - 2$)

> [!example] Example 4: Cyclotomic Extension
> $\text{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^*$
>
> Automorphisms: $\sigma_k: \zeta_n \mapsto \zeta_n^k$ for $\gcd(k, n) = 1$

## Fixed Field

> [!info] Definition (Fixed Field)
> For $H \leq \text{Gal}(K/F)$, the **fixed field** is:
> $$K^H = \{\alpha \in K : \sigma(\alpha) = \alpha \text{ for all } \sigma \in H\}$$

## Related Concepts

- [[05 - Galois Theory/Concepts/Automorphisms|Field Automorphisms]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
