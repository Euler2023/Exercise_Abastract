---
title: Field Extensions
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2025-01-19
---

# Field Extensions

## Definition

> [!info] Definition (Field Extension)
> A **field extension** $K/F$ (read "$K$ over $F$") is a pair of [[03 - Field Theory/Concepts/Field Definition|fields]] where $F \subseteq K$ (i.e., $F$ is a subfield of $K$).
>
> - $F$ is the **base field** (or ground field)
> - $K$ is the **extension field**

## Vector Space Structure

> [!tip] Key Observation
> If $K/F$ is a field extension, then $K$ is a [[06 - Representation Theory/Concepts/Vector Spaces|vector space]] over $F$.

> [!info] Definition (Degree)
> The **degree** of $K/F$, written $[K:F]$, is the dimension of $K$ as an $F$-vector space:
> $$[K:F] = \dim_F K$$

| Degree | Name |
|--------|------|
| $[K:F] < \infty$ | Finite extension |
| $[K:F] = \infty$ | Infinite extension |

## Generating Extensions

> [!info] Simple Extension
> For $\alpha \in K$, the **simple extension** $F(\alpha)$ is the smallest subfield of $K$ containing $F$ and $\alpha$.
>
> $$F(\alpha) = \bigcap \{L : F \subseteq L \subseteq K, \alpha \in L, L \text{ is a field}\}$$

> [!info] Adjunction of Multiple Elements
> For $S \subseteq K$:
> $$F(S) = F(\alpha_1, \alpha_2, \ldots) = \text{smallest subfield containing } F \cup S$$

## Tower Law

> [!abstract] Tower Law
> If $F \subseteq K \subseteq L$ are fields, then:
> $$[L:F] = [L:K] \cdot [K:F]$$
> (with the convention that $\infty \cdot n = n \cdot \infty = \infty \cdot \infty = \infty$)

**Proof sketch:** If $\{u_i\}$ is a basis for $K/F$ and $\{v_j\}$ is a basis for $L/K$, then $\{u_i v_j\}$ is a basis for $L/F$.

## Examples

> [!example] Example 1: $\mathbb{C}/\mathbb{R}$
> - $[\mathbb{C}:\mathbb{R}] = 2$
> - Basis: $\{1, i\}$

> [!example] Example 2: $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$
> - $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2$
> - $\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} : a, b \in \mathbb{Q}\}$

> [!example] Example 3: $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$
> - $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3$
> - Basis: $\{1, \sqrt[3]{2}, \sqrt[3]{4}\}$

> [!example] Example 4: Tower
> $\mathbb{Q} \subset \mathbb{Q}(\sqrt{2}) \subset \mathbb{Q}(\sqrt{2}, \sqrt{3})$
> - $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2$
> - $[\mathbb{Q}(\sqrt{2}, \sqrt{3}):\mathbb{Q}(\sqrt{2})] = 2$
> - $[\mathbb{Q}(\sqrt{2}, \sqrt{3}):\mathbb{Q}] = 4$

## Related Concepts

- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
