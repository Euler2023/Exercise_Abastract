---
title: Galois Correspondence
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2026-01-19
---

# Galois Correspondence

The Galois correspondence is the bijection between intermediate fields and subgroups established by the Fundamental Theorem of Galois Theory.

## The Correspondence Maps

> [!info] Definition
> For a Galois extension $E/F$ with $G = \text{Gal}(E/F)$:
>
> **Field to Subgroup**:
> $$\Phi: K \mapsto \text{Gal}(E/K) = \{\sigma \in G : \sigma|_K = \text{id}\}$$
>
> **Subgroup to Field**:
> $$\Psi: H \mapsto E^H = \{x \in E : \sigma(x) = x \text{ for all } \sigma \in H\}$$

## Properties

> [!tip] Lattice Anti-Isomorphism
> The correspondence reverses inclusions and preserves lattice operations:
>
> | Fields | Groups |
> |--------|--------|
> | $K_1 \subseteq K_2$ | $H_1 \supseteq H_2$ |
> | $K_1 \cap K_2$ | $\langle H_1, H_2 \rangle$ (generated subgroup) |
> | $K_1 K_2$ (compositum) | $H_1 \cap H_2$ |
> | $F$ | $G$ |
> | $E$ | $\{1\}$ |

## Degree Formulas

> [!abstract] Index-Degree Relationship
> For intermediate field $K$ with corresponding subgroup $H = \text{Gal}(E/K)$:
>
> $$[E:K] = |H|$$
> $$[K:F] = [G:H]$$
> $$[E:F] = |G|$$

## Examples

> [!example] Example 1: $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$
> - $G = \{1, \sigma\}$ where $\sigma(\sqrt{2}) = -\sqrt{2}$
> - Subgroups: $\{1\}$ and $G$
> - Fields: $\mathbb{Q}(\sqrt{2})$ and $\mathbb{Q}$
>
> | Field | Subgroup | Degree |
> |-------|----------|--------|
> | $\mathbb{Q}(\sqrt{2})$ | $\{1\}$ | 1 |
> | $\mathbb{Q}$ | $G$ | 2 |

> [!example] Example 2: $\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}$
> $G = \langle \sigma, \tau \rangle \cong V_4$ (Klein four-group)
> - $\sigma: \sqrt{2} \mapsto -\sqrt{2}, \sqrt{3} \mapsto \sqrt{3}$
> - $\tau: \sqrt{2} \mapsto \sqrt{2}, \sqrt{3} \mapsto -\sqrt{3}$
>
> | Subgroup | Fixed Field |
> |----------|-------------|
> | $\{1\}$ | $\mathbb{Q}(\sqrt{2}, \sqrt{3})$ |
> | $\langle\sigma\rangle$ | $\mathbb{Q}(\sqrt{3})$ |
> | $\langle\tau\rangle$ | $\mathbb{Q}(\sqrt{2})$ |
> | $\langle\sigma\tau\rangle$ | $\mathbb{Q}(\sqrt{6})$ |
> | $G$ | $\mathbb{Q}$ |

> [!example] Example 3: $\mathbb{Q}(\zeta_8)/\mathbb{Q}$
> - $G \cong (\mathbb{Z}/8\mathbb{Z})^* \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
> - 5 subgroups ↔ 5 intermediate fields
> - Includes $\mathbb{Q}(i)$, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{-2})$

## Computing Fixed Fields

> [!tip] Method
> To find $E^H$ for subgroup $H$:
> 1. Find elements fixed by all $\sigma \in H$
> 2. Often: average over $H$: $\frac{1}{|H|}\sum_{\sigma \in H} \sigma(\alpha)$
> 3. Verify the degree: $[E:E^H] = |H|$

## Lattice Diagrams

> [!info] Drawing the Correspondence
> - Draw the field lattice (larger fields higher)
> - Draw the group lattice (larger groups lower)
> - Connect corresponding elements horizontally
> - Verify: lines cross if and only if one contains the other

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
