---
title: Direct Products
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Direct Products

## Definition

> [!info] Definition (External Direct Product)
> The **direct product** of groups $G$ and $H$ is:
> $$G \times H = \{(g, h) : g \in G, h \in H\}$$
> with componentwise operation: $(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$

## Properties

1. $|G \times H| = |G| \cdot |H|$ (for finite groups)
2. $G \times H \cong H \times G$
3. $(G \times H) \times K \cong G \times (H \times K)$
4. $G \times \{e\} \cong G$
5. $G \times H$ is abelian iff both $G$ and $H$ are abelian

## Internal Direct Product

> [!info] Definition (Internal Direct Product)
> $G$ is the **internal direct product** of [[01 - Group Theory/Concepts/Subgroups|subgroups]] $H$ and $K$, written $G = H \times K$, if:
> 1. $H, K \trianglelefteq G$ (both normal)
> 2. $H \cap K = \{e\}$
> 3. $HK = G$

> [!tip] Recognition Theorem
> If $G = H \times K$ internally, then $G \cong H \times K$ externally.

## Generalization

> [!info] Definition (Finite Direct Product)
> $$\prod_{i=1}^n G_i = G_1 \times G_2 \times \cdots \times G_n$$

> [!info] Definition (Direct Sum - for [[01 - Group Theory/Concepts/Abelian Groups|abelian groups]])
> $$\bigoplus_{i \in I} G_i = \{(g_i)_{i \in I} : g_i = 0 \text{ for all but finitely many } i\}$$

## Examples

> [!example] Example 1: $\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$
> Since $\gcd(2, 3) = 1$ (Chinese Remainder Theorem).

> [!example] Example 2: $V_4 = \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
> Klein four-group.

> [!example] Example 3: $\mathbb{Z}/4\mathbb{Z} \not\cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
> Different structures: one is cyclic, one is not.

## Criteria for Direct Products

> [!abstract] Chinese Remainder Theorem (for groups)
> $\mathbb{Z}/mn\mathbb{Z} \cong \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}$ iff $\gcd(m, n) = 1$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[04 - Module Theory/Concepts/Direct Sum|Direct Sum]]
