---
title: Group Homomorphisms
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Group Homomorphisms

## Definition

> [!info] Definition (Group Homomorphism)
> Let $(G, \cdot)$ and $(H, *)$ be groups. A function $\phi: G \to H$ is a **group homomorphism** if:
> $$\phi(a \cdot b) = \phi(a) * \phi(b) \quad \text{for all } a, b \in G$$

## Types of Homomorphisms

| Type | Definition | Notation |
|------|------------|----------|
| **Monomorphism** | Injective homomorphism | $G \hookrightarrow H$ |
| **Epimorphism** | Surjective homomorphism | $G \twoheadrightarrow H$ |
| **Isomorphism** | Bijective homomorphism | $G \cong H$ |
| **Endomorphism** | Homomorphism $G \to G$ | $\text{End}(G)$ |
| **Automorphism** | Isomorphism $G \to G$ | $\text{Aut}(G)$ |

## Key Properties

> [!abstract] Properties of Homomorphisms
> Let $\phi: G \to H$ be a homomorphism. Then:
>
> 1. $\phi(e_G) = e_H$
> 2. $\phi(g^{-1}) = \phi(g)^{-1}$
> 3. $\phi(g^n) = \phi(g)^n$ for all $n \in \mathbb{Z}$
> 4. If $K \leq G$, then $\phi(K) \leq H$
> 5. If $L \leq H$, then $\phi^{-1}(L) \leq G$

## Kernel and Image

> [!info] Definition (Kernel)
> The **kernel** of $\phi: G \to H$ is:
> $$\ker(\phi) = \{g \in G : \phi(g) = e_H\} = \phi^{-1}(\{e_H\})$$

> [!info] Definition (Image)
> The **image** of $\phi: G \to H$ is:
> $$\text{im}(\phi) = \{\phi(g) : g \in G\} = \phi(G)$$

> [!tip] Key Facts
> - $\ker(\phi) \trianglelefteq G$ (kernel is a [[01 - Group Theory/Concepts/Normal Subgroups|normal subgroup]])
> - $\text{im}(\phi) \leq H$ (image is a [[01 - Group Theory/Concepts/Subgroups|subgroup]])
> - $\phi$ is injective $\iff$ $\ker(\phi) = \{e_G\}$

## Examples

> [!example] Example 1: Determinant
> $\det: GL_n(\mathbb{R}) \to \mathbb{R}^*$ is a homomorphism.
> - $\det(AB) = \det(A)\det(B)$
> - $\ker(\det) = SL_n(\mathbb{R})$

> [!example] Example 2: Sign Homomorphism
> $\text{sgn}: S_n \to \{1, -1\}$ is a homomorphism.
> - $\text{sgn}(\sigma\tau) = \text{sgn}(\sigma)\text{sgn}(\tau)$
> - $\ker(\text{sgn}) = A_n$ (alternating group)

> [!example] Example 3: Exponential
> $\exp: (\mathbb{R}, +) \to (\mathbb{R}^+, \cdot)$ is an isomorphism.
> - $e^{a+b} = e^a \cdot e^b$
> - Inverse: $\ln$

## First Isomorphism Theorem

> [!abstract] First Isomorphism Theorem
> If $\phi: G \to H$ is a homomorphism, then:
> $$G / \ker(\phi) \cong \text{im}(\phi)$$
> The isomorphism is given by $g \cdot \ker(\phi) \mapsto \phi(g)$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
