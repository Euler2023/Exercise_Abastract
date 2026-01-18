---
title: Module Definition
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2025-01-19
---

# Module Definition

## Definition

> [!info] Definition (Left $R$-Module)
> Let $R$ be a [[02 - Ring Theory/Concepts/Ring Definition|ring]] (with unity). A **left $R$-module** is an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]] $(M, +)$ together with a scalar multiplication $R \times M \to M$, written $(r, m) \mapsto rm$, satisfying:
>
> 1. $r(m + n) = rm + rn$ (distributivity over $M$)
> 2. $(r + s)m = rm + sm$ (distributivity over $R$)
> 3. $(rs)m = r(sm)$ (associativity)
> 4. $1_R m = m$ (unity acts as identity)
>
> for all $r, s \in R$ and $m, n \in M$.

## Right Modules and Bimodules

> [!info] Right Module
> A **right $R$-module** has scalar multiplication $M \times R \to M$, written $(m, r) \mapsto mr$, with:
> - $(m + n)r = mr + nr$
> - $m(r + s) = mr + ms$
> - $m(rs) = (mr)s$
> - $m \cdot 1_R = m$

> [!info] Bimodule
> An $(R, S)$-bimodule is simultaneously a left $R$-module and right $S$-module with $(rm)s = r(ms)$.

## Key Observations

> [!tip] Modules vs Vector Spaces
> - Every vector space over a field $F$ is an $F$-module
> - Every abelian group is a $\mathbb{Z}$-module
> - For commutative $R$, left and right modules coincide

## Examples

> [!example] Example 1: $R$ as $R$-module
> Any ring $R$ is a left $R$-module over itself with the ring multiplication.

> [!example] Example 2: Ideals
> Every left ideal $I \subseteq R$ is a left $R$-submodule of $R$.

> [!example] Example 3: Abelian Groups
> Every [[01 - Group Theory/Concepts/Abelian Groups|abelian group]] $G$ is a $\mathbb{Z}$-module with $n \cdot g = g + g + \cdots + g$ ($n$ times).

> [!example] Example 4: $R^n$
> $R^n = \{(r_1, \ldots, r_n) : r_i \in R\}$ is a free $R$-module with basis $\{e_1, \ldots, e_n\}$.

> [!example] Example 5: Polynomial Ring
> $R[x]$ is an $R$-module (in fact, a free module with basis $\{1, x, x^2, \ldots\}$).

## Annihilator

> [!info] Definition (Annihilator)
> For $m \in M$, the **annihilator** is:
> $$\text{Ann}_R(m) = \{r \in R : rm = 0\}$$
> This is a left ideal of $R$.
>
> For the whole module:
> $$\text{Ann}_R(M) = \{r \in R : rm = 0 \text{ for all } m \in M\}$$
> This is a two-sided ideal of $R$.

## Related Concepts

- [[04 - Module Theory/Concepts/Submodules|Submodules]]
- [[04 - Module Theory/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Module Theory/Concepts/Free Modules|Free Modules]]
