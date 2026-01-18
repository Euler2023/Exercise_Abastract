---
title: "Exercise LA1: Rank-Nullity Theorem"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - proof
source: "Axler, Linear Algebra Done Right"
created: 2025-01-19
---

# Exercise LA1: Rank-Nullity Theorem

## Problem Statement

> [!question] Exercise
> Let $V$ and $W$ be finite-dimensional vector spaces over field $F$, and let $T: V \to W$ be a linear transformation. Prove the **Rank-Nullity Theorem**:
> $$\dim V = \dim \ker(T) + \dim \text{im}(T)$$

## Hints

> [!hint]- Hint 1
> Start with a basis $\{u_1, \ldots, u_k\}$ for $\ker(T)$ and extend it to a basis of $V$.

> [!hint]- Hint 2
> Show that $\{T(v_1), \ldots, T(v_n)\}$ is a basis for $\text{im}(T)$.

> [!hint]- Hint 3
> Use the linear independence of $\{u_1, \ldots, u_k, v_1, \ldots, v_n\}$ crucially.

## Solution

> [!success]- Solution
> ### Proof
> Let $\dim \ker(T) = k$ and choose a basis $\{u_1, \ldots, u_k\}$ for $\ker(T)$.
>
> Extend this to a basis of $V$: $\{u_1, \ldots, u_k, v_1, \ldots, v_n\}$.
>
> Thus $\dim V = k + n$.
>
> **Claim:** $\{T(v_1), \ldots, T(v_n)\}$ is a basis for $\text{im}(T)$.
>
> **Spanning:** For any $T(v) \in \text{im}(T)$:
> $$v = \sum_{i=1}^k a_i u_i + \sum_{j=1}^n b_j v_j$$
> $$T(v) = \sum_{i=1}^k a_i T(u_i) + \sum_{j=1}^n b_j T(v_j) = 0 + \sum_{j=1}^n b_j T(v_j)$$
>
> **Linear Independence:** Suppose $\sum_{j=1}^n c_j T(v_j) = 0$.
>
> Then $T\left(\sum_{j=1}^n c_j v_j\right) = 0$, so $\sum_{j=1}^n c_j v_j \in \ker(T)$.
>
> Thus $\sum_{j=1}^n c_j v_j = \sum_{i=1}^k a_i u_i$ for some $a_i$.
>
> Rearranging: $\sum_{i=1}^k (-a_i) u_i + \sum_{j=1}^n c_j v_j = 0$
>
> Since $\{u_1, \ldots, u_k, v_1, \ldots, v_n\}$ is linearly independent, all coefficients are 0.
>
> In particular, $c_1 = \cdots = c_n = 0$.
>
> **Conclusion:**
> $$\dim \text{im}(T) = n = \dim V - \dim \ker(T)$$
> $$\therefore \dim V = \dim \ker(T) + \dim \text{im}(T) \quad \square$$

## Corollary

> [!abstract] First Isomorphism Theorem for Vector Spaces
> $V / \ker(T) \cong \text{im}(T)$

## Related Concepts

- [[06 - Representation Theory/Concepts/Vector Spaces|Vector Spaces]]
- [[06 - Representation Theory/Concepts/Linear Transformations|Linear Transformations]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

This is the linear algebra version of the First Isomorphism Theorem. The module theory generalization holds for modules over any ring.
