---
title: "Exercise LA232: Double Orthogonal Complement"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-complements
  - euclidean-space
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 5, Ex. 5.2, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA232: Double Orthogonal Complement

## Problem Statement

> [!question] Exercise 5.2
> Let $W$ be a subspace of a Euclidean space $V$. Prove that $W=W^{\perp\perp}$.

## Hints

> [!hint]- Hint 1
> One inclusion follows directly from symmetry of the inner product.

> [!hint]- Hint 2
> Compare dimensions using $V=W\oplus W^\perp$.

## Solution

> [!success]- Solution
> Every $w\in W$ is orthogonal to every vector in $W^\perp$, so
>
> $$
> W\subseteq W^{\perp\perp}.
> $$
>
> Since the Euclidean form is positive definite, orthogonal decomposition gives
>
> $$
> V=W\oplus W^\perp.
> $$
>
> Therefore $\dim W^\perp=\dim V-\dim W$. Applying the same formula to $W^\perp$ yields
>
> $$
> \dim W^{\perp\perp}
> =\dim V-\dim W^\perp
> =\dim W.
> $$
>
> The inclusion and equality of dimensions imply $W=W^{\perp\perp}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- Finite dimension and nondegeneracy are essential to this dimension argument.
- **Source status:** Visually verified at [S1, Ch. 8, §5, Ex. 5.2, printed p. 256, PDF p. 268]. The proof is independent.

