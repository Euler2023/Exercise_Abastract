---
title: "Exercise LA234: Symmetric Idempotents as Orthogonal Projections"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-projection
  - symmetric-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 5, Ex. 5.4, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA234: Symmetric Idempotents as Orthogonal Projections

## Problem Statement

> [!question] Exercise 5.4
> Let $T$ be a linear operator on $V=\mathbb R^n$ whose matrix $A$ is real symmetric.
>
> **(a)** Prove that $V$ is the orthogonal sum $V=(\ker T)\oplus(\operatorname{im}T)$.
>
> **(b)** Prove that $T$ is an orthogonal projection onto $\operatorname{im}T$ if and only if, in addition to being symmetric, $A^2=A$.

## Hints

> [!hint]- Hint 1
> Show $\operatorname{im}T\subseteq(\ker T)^\perp$ and compare dimensions.

> [!hint]- Hint 2
> If $T^2=T$, decompose $x$ as $(x-Tx)+Tx$.

## Solution

> [!success]- Solution
> **(a)** If $y=Tx\in\operatorname{im}T$ and $z\in\ker T$, symmetry gives
>
> $$
> (y,z)=(Tx,z)=(x,Tz)=0.
> $$
>
> Thus $\operatorname{im}T\subseteq(\ker T)^\perp$. Rank-nullity shows both spaces have dimension $\operatorname{rank}T$, so equality holds. Therefore
>
> $$
> V=(\ker T)\oplus^\perp(\operatorname{im}T).
> $$
>
> **(b)** An orthogonal projection is the identity on its image and zero on its orthogonal kernel, so $T^2=T$, equivalently $A^2=A$.
>
> Conversely, suppose $A^2=A$. Then
>
> $$
> x=(x-Tx)+Tx,
> $$
>
> where $T(x-Tx)=Tx-T^2x=0$ and $Tx\in\operatorname{im}T$. Part (a) makes this the orthogonal decomposition of $x$, and $T$ returns its image component. Hence $T$ is the orthogonal projection onto $\operatorname{im}T$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Idempotence alone describes an oblique projection; symmetry forces its kernel to be orthogonal to its image.
- **Source status:** Both parts were visually verified at [S1, Ch. 8, §5, Ex. 5.4, printed p. 256, PDF p. 268]. The proof is independent.

