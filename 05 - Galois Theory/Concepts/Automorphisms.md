---
title: Field Automorphisms
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2026-01-19
---

# Field Automorphisms

## Definition

> [!info] Definition (Field Automorphism)
> A **field automorphism** of a field $K$ is a bijective ring homomorphism $\sigma: K \to K$.
>
> Equivalently, $\sigma$ is an isomorphism from $K$ to itself satisfying:
> - $\sigma(a + b) = \sigma(a) + \sigma(b)$
> - $\sigma(ab) = \sigma(a)\sigma(b)$
> - $\sigma(1) = 1$

> [!info] Definition ($F$-Automorphism)
> Let $K/F$ be a field extension. An **$F$-automorphism** of $K$ is an automorphism $\sigma: K \to K$ that fixes $F$ pointwise:
> $$\sigma(a) = a \quad \text{for all } a \in F$$
>
> The set of all $F$-automorphisms of $K$ is denoted $\text{Aut}_F(K)$.

## Intuition

An automorphism is a "symmetry" of the field that preserves its algebraic structure. An $F$-automorphism is a symmetry that keeps the base field $F$ completely unchanged while potentially permuting elements in the extension $K \setminus F$.

## Key Properties

1. **Group structure**: $\text{Aut}_F(K)$ forms a group under composition
2. **Fixes base field**: If $\sigma \in \text{Aut}_F(K)$, then $\sigma|_F = \text{id}_F$
3. **Preserves algebraic relations**: If $f(\alpha) = 0$ for $f \in F[x]$, then $f(\sigma(\alpha)) = 0$
4. **Permutes roots**: $\sigma$ permutes the roots of any polynomial $f \in F[x]$
5. **Determined by generators**: An $F$-automorphism is completely determined by its action on generators of $K/F$

## Key Results

> [!abstract] Bound on Automorphisms
> For a finite extension $K/F$:
> $$|\text{Aut}_F(K)| \leq [K:F]$$
>
> Equality holds if and only if $K/F$ is a Galois extension.

> [!abstract] Automorphisms Permute Roots
> Let $\sigma \in \text{Aut}_F(K)$ and $\alpha \in K$ be algebraic over $F$ with minimal polynomial $m(x) \in F[x]$. Then $\sigma(\alpha)$ is also a root of $m(x)$.

## Examples

> [!example] Example 1: $\text{Aut}_\mathbb{Q}(\mathbb{Q})$
> The only automorphism of $\mathbb{Q}$ is the identity:
> - $\sigma(1) = 1$
> - $\sigma(n) = n$ for all $n \in \mathbb{Z}$ (by additivity)
> - $\sigma(1/n) = 1/\sigma(n) = 1/n$ (by multiplicativity)
>
> Thus $\text{Aut}(\mathbb{Q}) = \{\text{id}\}$.

> [!example] Example 2: Complex Conjugation
> $\sigma: \mathbb{C} \to \mathbb{C}$ defined by $\sigma(a + bi) = a - bi$ is an $\mathbb{R}$-automorphism.
>
> - Fixes $\mathbb{R}$ pointwise
> - $\sigma(i) = -i$ (permutes roots of $x^2 + 1$)
> - $\sigma^2 = \text{id}$
>
> $\text{Aut}_\mathbb{R}(\mathbb{C}) = \{\text{id}, \sigma\} \cong \mathbb{Z}/2\mathbb{Z}$

> [!example] Example 3: $\text{Aut}_\mathbb{Q}(\mathbb{Q}(\sqrt{2}))$
> Let $\sigma: \mathbb{Q}(\sqrt{2}) \to \mathbb{Q}(\sqrt{2})$ be an automorphism fixing $\mathbb{Q}$.
>
> Since $\sigma(\sqrt{2})^2 = \sigma(2) = 2$, we have $\sigma(\sqrt{2}) = \pm\sqrt{2}$.
>
> - $\sigma_1 = \text{id}$: $\sqrt{2} \mapsto \sqrt{2}$
> - $\sigma_2$: $\sqrt{2} \mapsto -\sqrt{2}$
>
> $\text{Aut}_\mathbb{Q}(\mathbb{Q}(\sqrt{2})) = \{\sigma_1, \sigma_2\} \cong \mathbb{Z}/2\mathbb{Z}$

> [!example] Example 4: Non-Galois Extension
> $\text{Aut}_\mathbb{Q}(\mathbb{Q}(\sqrt[3]{2})) = \{\text{id}\}$
>
> Any $\mathbb{Q}$-automorphism must send $\sqrt[3]{2}$ to a root of $x^3 - 2$. The roots are $\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^2\sqrt[3]{2}$ where $\omega = e^{2\pi i/3}$.
>
> But $\omega\sqrt[3]{2}$ and $\omega^2\sqrt[3]{2}$ are not in $\mathbb{Q}(\sqrt[3]{2}) \subset \mathbb{R}$.
>
> So the only option is $\sqrt[3]{2} \mapsto \sqrt[3]{2}$, i.e., the identity.

## Constructing Automorphisms

> [!tip] Method
> To find all $F$-automorphisms of $K = F(\alpha)$:
> 1. Find the minimal polynomial $m(x)$ of $\alpha$ over $F$
> 2. List all roots of $m(x)$ that lie in $K$
> 3. Each such root $\beta$ gives an automorphism $\sigma: \alpha \mapsto \beta$
> 4. Verify each $\sigma$ extends to a well-defined automorphism

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Exercises

```dataview
LIST
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```
