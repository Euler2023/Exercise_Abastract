---
title: Galois Extensions
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2026-01-19
---

# Galois Extensions

## Definition

> [!info] Definition (Galois Extension)
> A field extension $E/F$ is a **Galois extension** if it is both:
> 1. **Normal**: Every irreducible polynomial in $F[x]$ with a root in $E$ splits completely in $E$
> 2. **Separable**: Every element of $E$ is separable over $F$ (minimal polynomial has no repeated roots)

> [!info] Equivalent Characterization
> A finite extension $E/F$ is Galois if and only if:
> $$|\text{Aut}_F(E)| = [E:F]$$
> where $\text{Aut}_F(E)$ denotes the group of $F$-automorphisms of $E$.

## Key Properties

1. $E/F$ is Galois iff $E$ is the splitting field of a separable polynomial over $F$
2. The Galois group $\text{Gal}(E/F) = \text{Aut}_F(E)$ has order $[E:F]$
3. $E^{\text{Gal}(E/F)} = F$ (the fixed field of the Galois group is exactly $F$)
4. Every finite extension in characteristic 0 is separable, so Galois = normal
5. Galois extensions are closed under composition and intersection

## Examples

> [!example] Example 1: $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$
> This is Galois:
> - Splitting field of $x^2 - 2$ (normal)
> - Characteristic 0, so separable
> - $\text{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) \cong \mathbb{Z}/2\mathbb{Z}$

> [!example] Example 2: $\mathbb{Q}(\sqrt[3]{2}, \omega)/\mathbb{Q}$
> This is Galois:
> - Splitting field of $x^3 - 2$
> - $\text{Gal} \cong S_3$ (order 6 = degree)

> [!example] Example 3: $\mathbb{C}/\mathbb{R}$
> This is Galois:
> - Splitting field of $x^2 + 1$
> - $\text{Gal}(\mathbb{C}/\mathbb{R}) = \{id, \text{conjugation}\} \cong \mathbb{Z}/2\mathbb{Z}$

> [!example] Example 4: Cyclotomic Extensions
> $\mathbb{Q}(\zeta_n)/\mathbb{Q}$ is Galois:
> - Splitting field of $x^n - 1$
> - $\text{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^*$

## Non-Examples

> [!warning] Non-Example: $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$
> This is **not** Galois:
> - Not normal: $x^3 - 2$ has only one root in $\mathbb{Q}(\sqrt[3]{2})$
> - The other roots $\omega\sqrt[3]{2}, \omega^2\sqrt[3]{2}$ are not real
> - $|\text{Aut}_\mathbb{Q}(\mathbb{Q}(\sqrt[3]{2}))| = 1 \neq 3 = [\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]$

## Theorems

> [!abstract] Fixed Field Theorem
> If $E/F$ is Galois with $G = \text{Gal}(E/F)$, then $E^G = F$.
>
> The converse also holds: if $E^G = F$ for a finite group $G$ of automorphisms, then $E/F$ is Galois with Galois group $G$.

> [!abstract] Artin's Theorem
> If $G$ is a finite group of automorphisms of a field $E$, then:
> - $E/E^G$ is Galois
> - $\text{Gal}(E/E^G) = G$
> - $[E:E^G] = |G|$

## Intermediate Extensions

> [!tip] Galois Behavior in Towers
> For $F \subseteq K \subseteq E$ with $E/F$ Galois:
> - $E/K$ is always Galois
> - $K/F$ is Galois iff $\text{Gal}(E/K) \trianglelefteq \text{Gal}(E/F)$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
