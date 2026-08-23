---
title: Subspaces
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, §§3.1 and 3.3, printed pp. 78–80 and 84–86, PDF pp. 90–92 and 96–98"
source_status: partially-verified
status: not-started
---

# Subspaces

## Definition

> [!info] Definition (Subspace)
> Let $V$ be a [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] over a field $F$. A subset $W \subseteq V$ is a **subspace** of $V$ if $W$ is itself a vector space under the same operations.

> [!tip] Subspace Test
> A non-empty subset $W \subseteq V$ is a subspace if and only if for all $u, v \in W$ and $\alpha \in F$:
> 1. $u + v \in W$ (closed under addition)
> 2. $\alpha u \in W$ (closed under scalar multiplication)
>
> Equivalently: $\alpha u + \beta v \in W$ for all $u, v \in W$ and $\alpha, \beta \in F$.

## Key Properties

1. Every subspace contains $\mathbf{0}$
2. The intersection of subspaces is a subspace
3. The union of subspaces is generally **not** a subspace
4. $\{0\}$ and $V$ are always subspaces (trivial subspaces)

## Important Subspaces

> [!info] Definition (Sum of Subspaces)
> For subspaces $U, W \subseteq V$:
> $$U + W = \{u + w : u \in U, w \in W\}$$

> [!info] Definition (Direct Sum)
> $V = U \oplus W$ if $V = U + W$ and $U \cap W = \{0\}$.

> [!abstract] Dimension Formula
> For subspaces $U, W$ of a finite-dimensional space:
> $$\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$$

## Examples

> [!example] Example 1: Lines through origin
> Any line through the origin in $\mathbb{R}^2$ is a subspace: $W = \{t(a, b) : t \in \mathbb{R}\}$.

> [!example] Example 2: Planes through origin
> Any plane through the origin in $\mathbb{R}^3$ is a subspace.

> [!example] Example 3: Solution space
> The set of solutions to a homogeneous linear system $A\mathbf{x} = \mathbf{0}$ is a subspace of $\mathbb{R}^n$.

> [!example] Example 4: Polynomial subspace
> $P_n(x) = \{$polynomials of degree $\leq n\}$ is a subspace of the space of all polynomials.

> [!warning] Non-example
> The set $\{(x, y) \in \mathbb{R}^2 : x \geq 0\}$ is **not** a subspace (not closed under scalar multiplication by $-1$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]] (generalization)

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.
