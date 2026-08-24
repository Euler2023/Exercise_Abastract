---
title: "Exercise LA277: Matrix Characterization of Orthogonal Projection"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-projection
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.11, printed p. 260, PDF p. 272"
created: 2026-08-24
---

# Exercise LA277: Matrix Characterization of Orthogonal Projection

## Problem Statement

> [!question] Miscellaneous Problem M.11
> Let $A$ be a real $n\times n$ matrix. Prove that $A$ represents the orthogonal projection onto its image if and only if
>
> $$
> A^2=A=A^{\mathsf T}A.
> $$

## Hints

> [!hint]- Hint 1
> An orthogonal projection is symmetric and idempotent.

> [!hint]- Hint 2
> Conversely, $A^{\mathsf T}A$ is symmetric. Compare this with the assumed equality $A=A^{\mathsf T}A$.

## Solution

> [!success]- Solution
> If $A$ is the orthogonal projection onto $W=\operatorname{im}A$, then $A^2=A$ and $A^{\mathsf T}=A$. Therefore
>
> $$
> A^{\mathsf T}A=A^2=A.
> $$
>
> Conversely, suppose $A^2=A=A^{\mathsf T}A$. The matrix $A^{\mathsf T}A$ is symmetric, so $A$ is symmetric. Thus $A$ is a symmetric idempotent. For every $x$,
>
> $$
> x=Ax+(I-A)x,
> $$
>
> where $Ax\in\operatorname{im}A$ and, for $y=Az\in\operatorname{im}A$,
>
> $$
> y^{\mathsf T}(I-A)x=z^{\mathsf T}A^{\mathsf T}(I-A)x
> =z^{\mathsf T}A(I-A)x=0.
> $$
>
> Hence $(I-A)x\in(\operatorname{im}A)^\perp$, and $A$ is precisely the orthogonal projection onto its image.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The criterion was visually verified at [S1, Ch. 8, M.11, printed p. 260, PDF p. 272]. The proof is independent.

