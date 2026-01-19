---
title: Subrings
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Subrings

## Definition

> [!info] Definition (Subring)
> A **subring** of a ring $(R, +, \cdot)$ is a non-empty subset $S \subseteq R$ that is itself a ring under the same operations. Equivalently, $S$ is a subring if:
>
> 1. $(S, +)$ is a subgroup of $(R, +)$
> 2. $S$ is closed under multiplication: $\forall a, b \in S$, $ab \in S$
> 3. $1_R \in S$ (if $R$ has identity and we require subrings to contain it)

> [!tip] Subring Test
> A non-empty subset $S \subseteq R$ is a subring if and only if for all $a, b \in S$:
> 1. $a - b \in S$ (closure under subtraction)
> 2. $ab \in S$ (closure under multiplication)
> 3. $1_R \in S$ (contains identity, if required)

## Intuition

A subring is to a ring what a subgroup is to a group. It's a subset that inherits the ring structure and satisfies all ring axioms using the same operations restricted to the subset.

## Key Properties

1. Every ring $R$ has at least two subrings: $R$ itself and $\{0\}$ (the trivial subring, though it lacks identity if we require $1 \in S$)
2. The intersection of subrings is a subring
3. If $S$ is a subring of $R$ and $T$ is a subring of $S$, then $T$ is a subring of $R$ (transitivity)
4. The center $Z(R) = \{z \in R : zr = rz \text{ for all } r \in R\}$ is a subring

## Examples

> [!example] Example 1: $\mathbb{Z} \subseteq \mathbb{Q}$
> The integers $\mathbb{Z}$ form a subring of the rationals $\mathbb{Q}$:
> - Closed under subtraction and multiplication
> - Contains $1$

> [!example] Example 2: $\mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$
> We have a chain of subrings: rationals inside reals inside complex numbers.

> [!example] Example 3: Gaussian Integers
> $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$ is a subring of $\mathbb{C}$.

> [!example] Example 4: Upper Triangular Matrices
> The set of upper triangular $n \times n$ matrices forms a subring of $M_n(R)$.

## Non-Examples

> [!warning] Non-Example: $2\mathbb{Z}$ in $\mathbb{Z}$
> The even integers $2\mathbb{Z}$ form a subring of $\mathbb{Z}$ only if we don't require $1 \in S$. Since $1 \notin 2\mathbb{Z}$, it's a "rng" (ring without identity) but not a subring in the strict sense.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
