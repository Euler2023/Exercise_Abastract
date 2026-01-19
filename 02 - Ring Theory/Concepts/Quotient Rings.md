---
title: Quotient Rings
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Quotient Rings

## Definition

> [!info] Definition (Quotient Ring)
> Let $R$ be a ring and $I$ an ideal of $R$. The **quotient ring** (or **factor ring**) $R/I$ is the set of cosets:
> $$R/I = \{r + I : r \in R\}$$
> with operations:
> - $(a + I) + (b + I) = (a + b) + I$
> - $(a + I)(b + I) = ab + I$

## Intuition

The quotient ring $R/I$ "collapses" all elements of $I$ to zero. Two elements $a, b \in R$ become equal in $R/I$ if and only if $a - b \in I$. This is analogous to how $\mathbb{Z}/n\mathbb{Z}$ identifies integers that differ by multiples of $n$.

## Key Properties

1. The operations are well-defined because $I$ is an ideal (not just a subring)
2. The zero element of $R/I$ is $0 + I = I$
3. The identity element is $1 + I$
4. The natural projection $\pi: R \to R/I$ given by $\pi(r) = r + I$ is a surjective ring homomorphism with $\ker(\pi) = I$

## Examples

> [!example] Example 1: $\mathbb{Z}/n\mathbb{Z}$
> The quotient $\mathbb{Z}/n\mathbb{Z}$ is the ring of integers modulo $n$:
> - Elements: $\{[0], [1], \ldots, [n-1]\}$
> - $\mathbb{Z}/n\mathbb{Z}$ is a field if and only if $n$ is prime

> [!example] Example 2: $\mathbb{R}[x]/(x^2 + 1)$
> The quotient $\mathbb{R}[x]/(x^2 + 1)$ is isomorphic to $\mathbb{C}$:
> - The coset $x + (x^2 + 1)$ acts like $i$
> - Every element has form $a + bx + (x^2+1)$ for $a, b \in \mathbb{R}$

> [!example] Example 3: $\mathbb{Z}[x]/(x)$
> The quotient $\mathbb{Z}[x]/(x)$ is isomorphic to $\mathbb{Z}$:
> - Setting $x = 0$ in all polynomials gives just the constant term

## Theorems

> [!abstract] Correspondence Theorem
> There is a bijection between:
> - Ideals of $R$ containing $I$
> - Ideals of $R/I$
>
> Given by $J \mapsto J/I$ with inverse $\bar{J} \mapsto \pi^{-1}(\bar{J})$.

> [!abstract] Third Isomorphism Theorem
> If $I \subseteq J$ are ideals of $R$, then:
> $$(R/I)/(J/I) \cong R/J$$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
