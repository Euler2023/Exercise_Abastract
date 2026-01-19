---
title: Quotient Modules
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
---

# Quotient Modules

## Definition

> [!info] Definition (Quotient Module)
> Let $M$ be an $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|module]] and $N$ a [[04 - Linear Algebra and Modules/Concepts/Submodules|submodule]]. The **quotient module** is:
> $$M/N = \{m + N : m \in M\}$$
> with operations:
> - $(m_1 + N) + (m_2 + N) = (m_1 + m_2) + N$
> - $r(m + N) = rm + N$

## Key Properties

1. The natural map $\pi: M \to M/N$ given by $\pi(m) = m + N$ is a surjective [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|homomorphism]]
2. $\ker(\pi) = N$
3. Elements $m_1 + N = m_2 + N$ iff $m_1 - m_2 \in N$

## Isomorphism Theorems

> [!abstract] First Isomorphism Theorem
> If $f: M \to N$ is an $R$-module homomorphism, then:
> $$M/\ker(f) \cong \text{im}(f)$$

> [!abstract] Second Isomorphism Theorem
> For submodules $A, B \subseteq M$:
> $$(A + B)/B \cong A/(A \cap B)$$

> [!abstract] Third Isomorphism Theorem
> For submodules $N \subseteq K \subseteq M$:
> $$(M/N)/(K/N) \cong M/K$$

> [!abstract] Correspondence Theorem
> There is a bijection between:
> - Submodules of $M$ containing $N$
> - Submodules of $M/N$
>
> Given by $K \mapsto K/N$ with inverse $\bar{K} \mapsto \pi^{-1}(\bar{K})$.

## Examples

> [!example] Example 1: $\mathbb{Z}/n\mathbb{Z}$
> $\mathbb{Z}/n\mathbb{Z}$ as a $\mathbb{Z}$-module (i.e., abelian group).

> [!example] Example 2: Vector space quotient
> For [[04 - Linear Algebra and Modules/Concepts/Subspaces|subspace]] $W \subseteq V$: $\dim(V/W) = \dim V - \dim W$.

> [!example] Example 3: Quotient ring as module
> $R/I$ is both a ring and an $R$-module for ideal $I$.

> [!example] Example 4: Cokernel
> For $f: M \to N$, the **cokernel** is $\text{coker}(f) = N/\text{im}(f)$.

## Universal Property

> [!abstract] Universal Property
> Given $f: M \to P$ with $N \subseteq \ker(f)$, there exists a unique $\bar{f}: M/N \to P$ such that $f = \bar{f} \circ \pi$:
> ```
> M --f--> P
> |       ^
> π       |
> ↓     ∃!f̄
> M/N ---→
> ```

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
