---
title: Normal Subgroups and Extensions
topic: galois-theory
tags:
  - concept
  - theorem
  - galois-theory
created: 2026-01-19
---

# Normal Subgroups and Extensions

The Galois correspondence relates normal subgroups to normal (Galois) intermediate extensions, providing a group-theoretic criterion for when intermediate extensions are themselves Galois.

## The Main Result

> [!abstract] Normality Correspondence
> Let $E/F$ be a Galois extension with $G = \text{Gal}(E/F)$, and let $K$ be an intermediate field with corresponding subgroup $H = \text{Gal}(E/K)$.
>
> Then: **$K/F$ is a normal extension** $\iff$ **$H \trianglelefteq G$** (H is a normal subgroup)
>
> When this holds:
> $$\text{Gal}(K/F) \cong G/H$$

## Understanding the Connection

> [!info] Why Normal Subgroups?
> - $K/F$ is normal means every $F$-embedding of $K$ into $\overline{F}$ maps $K$ to itself
> - These embeddings are restrictions of elements of $G$
> - $H \trianglelefteq G$ means $H$ is closed under conjugation: $gHg^{-1} = H$ for all $g \in G$
> - Conjugation corresponds to "changing the embedding"

## Key Properties

1. The quotient group $G/H$ acts naturally on $K$
2. This action gives $\text{Gal}(K/F) \cong G/H$
3. $E/K$ is always Galois (even if $K/F$ is not)
4. $K/F$ is Galois $\iff$ $K/F$ is normal and separable

## Examples

> [!example] Example 1: $\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}$
> $G \cong V_4$ (abelian, so all subgroups are normal)
> - Every intermediate field gives a normal extension
> - $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$, $\mathbb{Q}(\sqrt{3})/\mathbb{Q}$, $\mathbb{Q}(\sqrt{6})/\mathbb{Q}$ are all Galois

> [!example] Example 2: Splitting field of $x^3 - 2$
> $E = \mathbb{Q}(\sqrt[3]{2}, \omega)$, $G \cong S_3$
>
> | Subgroup | Normal? | Intermediate Field | $K/\mathbb{Q}$ Galois? |
> |----------|---------|-------------------|----------------------|
> | $A_3 = \langle(123)\rangle$ | Yes | $\mathbb{Q}(\omega)$ | Yes |
> | $\langle(12)\rangle$ | No | $\mathbb{Q}(\omega^2\sqrt[3]{2})$ | No |
> | $\langle(13)\rangle$ | No | $\mathbb{Q}(\omega\sqrt[3]{2})$ | No |
> | $\langle(23)\rangle$ | No | $\mathbb{Q}(\sqrt[3]{2})$ | No |

> [!example] Example 3: Cyclotomic Extensions
> $\mathbb{Q}(\zeta_n)/\mathbb{Q}$ has $G \cong (\mathbb{Z}/n\mathbb{Z})^*$ (abelian)
> - All subgroups are normal
> - All intermediate cyclotomic fields are Galois over $\mathbb{Q}$

## The Quotient Formula

> [!abstract] Computing Galois Groups of Normal Intermediate Extensions
> If $H \trianglelefteq G$ and $K = E^H$, then:
>
> $$\text{Gal}(K/F) \cong G/H$$
>
> The isomorphism is given by: $\sigma H \mapsto \sigma|_K$

## Proof Sketch

> [!tip] Why Normal Subgroup ↔ Normal Extension
> 1. $K/F$ normal means: for all $\sigma \in G$, $\sigma(K) = K$
> 2. $\sigma(K) = K$ iff $\sigma H \sigma^{-1} = H$ (conjugate subgroup fixes the same field)
> 3. This holds for all $\sigma \in G$ iff $H \trianglelefteq G$

## Applications

> [!abstract] Tower of Normal Extensions
> For $F \subseteq K \subseteq L \subseteq E$ where $E/F$ is Galois:
> - If $L/F$ and $K/F$ are both normal, we can use quotient groups to understand their Galois groups
> - This leads to "towers" of group extensions

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
