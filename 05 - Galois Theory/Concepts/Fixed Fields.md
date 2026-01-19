---
title: Fixed Fields
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2026-01-19
---

# Fixed Fields

## Definition

> [!info] Definition (Fixed Field)
> Let $K$ be a field and $H$ a group of automorphisms of $K$. The **fixed field** of $H$ is:
> $$K^H = \{x \in K : \sigma(x) = x \text{ for all } \sigma \in H\}$$
>
> This is the set of all elements of $K$ that are fixed by every automorphism in $H$.

## Key Properties

1. **$K^H$ is a subfield**: The fixed field is always a subfield of $K$
2. **Containment reversal**: If $H_1 \subseteq H_2$, then $K^{H_2} \subseteq K^{H_1}$
3. **Fixed by trivial group**: $K^{\{1\}} = K$
4. **Fixed by full Galois group**: If $K/F$ is Galois, then $K^{\text{Gal}(K/F)} = F$

## Fundamental Results

> [!abstract] Artin's Theorem
> If $G$ is a finite group of automorphisms of a field $K$, then:
> 1. $K/K^G$ is a Galois extension
> 2. $\text{Gal}(K/K^G) = G$
> 3. $[K:K^G] = |G|$

> [!abstract] Fixed Field in Galois Extensions
> Let $K/F$ be a finite Galois extension with $G = \text{Gal}(K/F)$. For any subgroup $H \leq G$:
> $$[K:K^H] = |H| \quad \text{and} \quad [K^H:F] = [G:H]$$

## Connection to Galois Correspondence

> [!tip] The Two Maps
> In the Galois correspondence for $K/F$ Galois:
>
> **Subgroup → Field**: $H \mapsto K^H$ (fixed field)
>
> **Field → Subgroup**: $L \mapsto \text{Gal}(K/L)$
>
> These are inverse bijections between:
> - Subgroups of $\text{Gal}(K/F)$
> - Intermediate fields $F \subseteq L \subseteq K$

## Examples

> [!example] Example 1: $\mathbb{C}/\mathbb{R}$
> Let $G = \text{Gal}(\mathbb{C}/\mathbb{R}) = \{id, \overline{(\cdot)}\}$ (identity and complex conjugation).
>
> - $\mathbb{C}^{\{id\}} = \mathbb{C}$
> - $\mathbb{C}^G = \{z \in \mathbb{C} : \bar{z} = z\} = \mathbb{R}$
>
> The fixed field of the full Galois group is the base field $\mathbb{R}$.

> [!example] Example 2: $\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}$
> $G = \text{Gal} \cong V_4 = \{1, \sigma, \tau, \sigma\tau\}$ where:
> - $\sigma: \sqrt{2} \mapsto -\sqrt{2}, \sqrt{3} \mapsto \sqrt{3}$
> - $\tau: \sqrt{2} \mapsto \sqrt{2}, \sqrt{3} \mapsto -\sqrt{3}$
>
> | Subgroup $H$ | Fixed Field $K^H$ |
> |--------------|-------------------|
> | $\{1\}$ | $\mathbb{Q}(\sqrt{2}, \sqrt{3})$ |
> | $\langle\sigma\rangle$ | $\mathbb{Q}(\sqrt{3})$ |
> | $\langle\tau\rangle$ | $\mathbb{Q}(\sqrt{2})$ |
> | $\langle\sigma\tau\rangle$ | $\mathbb{Q}(\sqrt{6})$ |
> | $G$ | $\mathbb{Q}$ |

> [!example] Example 3: Cyclotomic Extension
> $K = \mathbb{Q}(\zeta_5)$ where $\zeta_5 = e^{2\pi i/5}$.
>
> $G = \text{Gal}(K/\mathbb{Q}) \cong (\mathbb{Z}/5\mathbb{Z})^* \cong \mathbb{Z}/4\mathbb{Z}$
>
> The unique subgroup of order 2 corresponds to $\mathbb{Q}(\sqrt{5})$:
> $$\mathbb{Q}(\zeta_5)^{H_2} = \mathbb{Q}(\sqrt{5})$$
> where $H_2 = \{\sigma_1, \sigma_4\}$ (elements of order dividing 2).

> [!example] Example 4: Computing a Fixed Field
> Let $K = \mathbb{Q}(\sqrt[4]{2}, i)$ and $H = \langle\sigma\rangle$ where $\sigma: \sqrt[4]{2} \mapsto i\sqrt[4]{2}, i \mapsto i$.
>
> The orbit of $\sqrt[4]{2}$ is $\{\sqrt[4]{2}, i\sqrt[4]{2}, -\sqrt[4]{2}, -i\sqrt[4]{2}\}$.
>
> Elements fixed by $\sigma$:
> - $i$ (fixed)
> - $(\sqrt[4]{2})^4 = 2$ (fixed)
> - $(\sqrt[4]{2})^2 = \sqrt{2}$ has orbit $\{\sqrt{2}, -\sqrt{2}\}$, not fixed
>
> $K^H = \mathbb{Q}(i)$

## Computing Fixed Fields

> [!tip] General Method
> To find $K^H$ for a subgroup $H$:
>
> 1. **Find fixed elements**: Look for elements $\alpha$ where $\sigma(\alpha) = \alpha$ for all $\sigma \in H$
>
> 2. **Use trace/averaging**: For $\alpha \in K$, the element
>    $$\text{Tr}_H(\alpha) = \sum_{\sigma \in H} \sigma(\alpha)$$
>    is always fixed by $H$
>
> 3. **Check the degree**: Verify $[K:K^H] = |H|$
>
> 4. **Find generators**: Find enough fixed elements to generate the field

## Theorems

> [!abstract] Fixed Field Characterization
> For $K/F$ Galois with $G = \text{Gal}(K/F)$:
>
> 1. $K^G = F$ (the base field is exactly the fixed field)
> 2. For $H \leq G$: $\text{Gal}(K/K^H) = H$
> 3. For intermediate $L$: $K^{\text{Gal}(K/L)} = L$

> [!abstract] Conjugate Subgroups and Fixed Fields
> For $H \leq G$ and $g \in G$:
> $$K^{gHg^{-1}} = g(K^H)$$
>
> Conjugate subgroups correspond to conjugate (isomorphic) fixed fields.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem]]

## Exercises

```dataview
LIST
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```
