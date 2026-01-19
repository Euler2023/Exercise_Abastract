---
title: Ring Homomorphisms
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Ring Homomorphisms

## Definition

> [!info] Definition (Ring Homomorphism)
> A **ring homomorphism** is a function $\phi: R \to S$ between rings that preserves the ring operations:
>
> 1. $\phi(a + b) = \phi(a) + \phi(b)$ for all $a, b \in R$
> 2. $\phi(ab) = \phi(a)\phi(b)$ for all $a, b \in R$
> 3. $\phi(1_R) = 1_S$ (maps identity to identity)

> [!info] Special Types
> - **Monomorphism**: Injective homomorphism
> - **Epimorphism**: Surjective homomorphism
> - **Isomorphism**: Bijective homomorphism
> - **Endomorphism**: Homomorphism $R \to R$
> - **Automorphism**: Isomorphism $R \to R$

## Kernel and Image

> [!info] Definition (Kernel)
> The **kernel** of $\phi: R \to S$ is:
> $$\ker(\phi) = \{r \in R : \phi(r) = 0_S\}$$
> The kernel is always an ideal of $R$.

> [!info] Definition (Image)
> The **image** of $\phi$ is:
> $$\text{im}(\phi) = \{\phi(r) : r \in R\}$$
> The image is always a subring of $S$.

## Key Properties

1. $\phi(0_R) = 0_S$
2. $\phi(-a) = -\phi(a)$
3. $\phi$ is injective if and only if $\ker(\phi) = \{0\}$
4. The composition of homomorphisms is a homomorphism
5. The inverse of an isomorphism is an isomorphism

## Examples

> [!example] Example 1: Evaluation Homomorphism
> For polynomial ring $R[x]$ and $a \in R$, the map $\text{ev}_a: R[x] \to R$ defined by $\text{ev}_a(f) = f(a)$ is a ring homomorphism.

> [!example] Example 2: Reduction Modulo $n$
> The map $\pi: \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ given by $\pi(a) = [a]_n$ is a surjective ring homomorphism with $\ker(\pi) = n\mathbb{Z}$.

> [!example] Example 3: Complex Conjugation
> The map $\phi: \mathbb{C} \to \mathbb{C}$ defined by $\phi(a + bi) = a - bi$ is a ring automorphism.

> [!example] Example 4: Inclusion
> The inclusion $\iota: \mathbb{Z} \hookrightarrow \mathbb{Q}$ is an injective ring homomorphism.

## Theorems

> [!abstract] First Isomorphism Theorem
> If $\phi: R \to S$ is a ring homomorphism, then:
> $$R/\ker(\phi) \cong \text{im}(\phi)$$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
