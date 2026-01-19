---
title: Direct Sum
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - linear-algebra
created: 2026-01-19
---

# Direct Sum

## Definition

> [!info] Definition (External Direct Sum)
> For $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|modules]] $M_1, \ldots, M_n$, the **direct sum** is:
> $$M_1 \oplus M_2 \oplus \cdots \oplus M_n = \{(m_1, \ldots, m_n) : m_i \in M_i\}$$
> with componentwise operations.

> [!info] Definition (Internal Direct Sum)
> $M$ is the **internal direct sum** of [[04 - Linear Algebra and Modules/Concepts/Submodules|submodules]] $N_1, \ldots, N_k$, written $M = N_1 \oplus \cdots \oplus N_k$, if:
> 1. $M = N_1 + N_2 + \cdots + N_k$
> 2. $N_i \cap (N_1 + \cdots + N_{i-1} + N_{i+1} + \cdots + N_k) = \{0\}$ for all $i$
>
> Equivalently: every $m \in M$ is **uniquely** expressible as $m = n_1 + \cdots + n_k$.

## Infinite Direct Sums

> [!info] Definition (Infinite Direct Sum)
> $$\bigoplus_{i \in I} M_i = \{(m_i)_{i \in I} : m_i = 0 \text{ for all but finitely many } i\}$$

> [!info] Definition (Direct Product)
> $$\prod_{i \in I} M_i = \{(m_i)_{i \in I} : m_i \in M_i\}$$

> [!warning] Note
> For infinite $I$: $\bigoplus_{i \in I} M_i \subsetneq \prod_{i \in I} M_i$

## Key Properties

1. $M_1 \oplus M_2 \cong M_2 \oplus M_1$
2. $(M_1 \oplus M_2) \oplus M_3 \cong M_1 \oplus (M_2 \oplus M_3)$
3. $M \oplus \{0\} \cong M$
4. Internal and external direct sums are isomorphic

## Projection and Injection

For $M = M_1 \oplus M_2$:
- **Projection**: $\pi_i: M \to M_i$, $\pi_1(m_1, m_2) = m_1$
- **Injection**: $\iota_i: M_i \to M$, $\iota_1(m_1) = (m_1, 0)$

These satisfy: $\pi_i \circ \iota_i = \text{id}$ and $\iota_1 \circ \pi_1 + \iota_2 \circ \pi_2 = \text{id}_M$

## Examples

> [!example] Example 1: $\mathbb{R}^n$
> $\mathbb{R}^n = \mathbb{R} \oplus \mathbb{R} \oplus \cdots \oplus \mathbb{R}$ ($n$ copies)

> [!example] Example 2: Structure theorem
> $\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}/2\mathbb{Z} \oplus \mathbb{Z}/3\mathbb{Z}$ (since $\gcd(2,3) = 1$)

> [!example] Example 3: [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspace]] complement
> In a [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]]: $V = W \oplus W'$ where $W'$ is any complement.

> [!example] Example 4: No complement
> In $\mathbb{Z}$-modules: $2\mathbb{Z} \subseteq \mathbb{Z}$ has no complement (no direct sum decomposition).

## Comparison with Direct Product

| Property | Direct Sum $\bigoplus$ | Direct Product $\prod$ |
|----------|------------------------|------------------------|
| Finite case | Same | Same |
| Elements | Finite support | Any |
| Universal property | Coproduct | Product |
| [[01 - Group Theory/Concepts/Abelian Groups|Abelian groups]] | Coproduct | Product |

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]] (split sequences)
