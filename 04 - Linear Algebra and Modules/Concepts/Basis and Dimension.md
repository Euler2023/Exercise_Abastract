---
title: Basis and Dimension
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Basis and Dimension

## Definition

> [!info] Definition (Basis)
> A **basis** for a [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] $V$ is a set $\mathcal{B} = \{v_1, v_2, \ldots, v_n\}$ that is:
> 1. [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linearly independent]]
> 2. Spans $V$ (every vector in $V$ is a linear combination of basis vectors)

> [!info] Definition (Dimension)
> The **dimension** of a vector space $V$, denoted $\dim V$, is the cardinality of any basis for $V$.

## Key Properties

1. **Uniqueness of representation**: Every vector $v \in V$ can be written uniquely as $v = \sum_{i=1}^n \alpha_i v_i$
2. **Basis size invariance**: All bases for $V$ have the same cardinality
3. **Existence**: Every vector space has a basis (requires Axiom of Choice for infinite-dimensional spaces)
4. **Extension**: Any linearly independent set can be extended to a basis
5. **Reduction**: Any spanning set contains a basis

## Important Results

> [!abstract] Theorem (Dimension of Subspaces)
> If $W$ is a [[04 - Linear Algebra and Modules/Concepts/Subspaces|subspace]] of finite-dimensional $V$, then:
> 1. $\dim W \leq \dim V$
> 2. $\dim W = \dim V$ implies $W = V$

> [!abstract] Theorem (Coordinates)
> Given a basis $\mathcal{B} = \{v_1, \ldots, v_n\}$, the coordinate map $\phi: V \to F^n$ defined by $v \mapsto (\alpha_1, \ldots, \alpha_n)$ where $v = \sum \alpha_i v_i$ is an isomorphism.

## Standard Bases

| Space | Standard Basis | Dimension |
|-------|----------------|-----------|
| $F^n$ | $\{e_1, \ldots, e_n\}$ | $n$ |
| $P_n(x)$ | $\{1, x, x^2, \ldots, x^n\}$ | $n+1$ |
| $M_{m \times n}(F)$ | $\{E_{ij}\}$ | $mn$ |

## Examples

> [!example] Example 1: $\mathbb{R}^3$
> Standard basis: $\{(1,0,0), (0,1,0), (0,0,1)\}$, so $\dim \mathbb{R}^3 = 3$.

> [!example] Example 2: Polynomials
> $P_2(x)$ has basis $\{1, x, x^2\}$, so $\dim P_2(x) = 3$.

> [!example] Example 3: Non-standard basis
> $\{(1,1), (1,-1)\}$ is also a basis for $\mathbb{R}^2$.

> [!example] Example 4: Infinite-dimensional
> The space of all polynomials $P(x)$ has infinite dimension (basis $\{1, x, x^2, \ldots\}$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]] (generalization)
