---
title: Vector Spaces
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2025-01-19
---

# Vector Spaces

## Definition

> [!info] Definition (Vector Space)
> A **vector space** over a [[03 - Field Theory/Concepts/Field Definition|field]] $F$ is a set $V$ with two operations:
> - Vector addition: $V \times V \to V$
> - Scalar multiplication: $F \times V \to V$
>
> satisfying:
> 1. $(V, +)$ is an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]]
> 2. $1 \cdot v = v$
> 3. $(ab)v = a(bv)$
> 4. $a(u + v) = au + av$
> 5. $(a + b)v = av + bv$

> [!tip] Module Perspective
> A vector space over $F$ is exactly an $F$-module.

## Key Concepts

### Subspaces

> [!info] Definition (Subspace)
> $W \subseteq V$ is a **subspace** if $W$ is closed under addition and scalar multiplication.
>
> **Subspace Test**: $W$ is a subspace iff:
> - $0 \in W$
> - $u, v \in W \Rightarrow u + v \in W$
> - $a \in F, v \in W \Rightarrow av \in W$

### Linear Independence

> [!info] Definition
> Vectors $\{v_1, \ldots, v_n\}$ are **linearly independent** if:
> $$a_1 v_1 + \cdots + a_n v_n = 0 \Rightarrow a_1 = \cdots = a_n = 0$$

### Basis and Dimension

> [!info] Definition (Basis)
> A **basis** of $V$ is a linearly independent spanning set.

> [!abstract] Theorem
> Any two bases of $V$ have the same cardinality, called the **dimension** $\dim V$.

## Examples

> [!example] Example 1: $F^n$
> Standard $n$-dimensional space over $F$.
> Standard basis: $\{e_1, \ldots, e_n\}$ where $e_i$ has 1 in position $i$.

> [!example] Example 2: $F[x]_{\leq n}$
> Polynomials of degree $\leq n$.
> Dimension: $n + 1$
> Basis: $\{1, x, x^2, \ldots, x^n\}$

> [!example] Example 3: $\mathbb{C}$ over $\mathbb{R}$
> $\dim_\mathbb{R} \mathbb{C} = 2$
> Basis: $\{1, i\}$

> [!example] Example 4: Field Extension
> $K/F$ with $[K:F] = n$ means $K$ is $n$-dimensional over $F$.

## Linear Transformations

> [!info] Definition
> A **linear transformation** $T: V \to W$ satisfies:
> - $T(u + v) = T(u) + T(v)$
> - $T(av) = aT(v)$

This is exactly a module homomorphism when viewing $V, W$ as $F$-modules.

## Quotient Spaces

> [!info] Definition (Quotient Space)
> For subspace $W \subseteq V$:
> $$V/W = \{v + W : v \in V\}$$
> Dimension: $\dim(V/W) = \dim V - \dim W$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
