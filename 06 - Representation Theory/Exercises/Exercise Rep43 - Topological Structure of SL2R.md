---
title: "Exercise Rep43: Topological Structure of SL2R"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - matrix-topology
  - special-linear-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.7, printed p. 288, PDF p. 300"
created: 2026-08-24
---

# Exercise Rep43: Topological Structure of SL2R

## Problem Statement

> [!question] Miscellaneous Exercise M.7
> Let $G=SL_2$. A ray in $\mathbb R^2$ is a half line leading from the origin to infinity. The rays are in bijective correspondence with the points on the unit $1$-sphere in $\mathbb R^2$.
>
> (a) Determine the stabilizer $H$ of the ray $\{re_1:r\ge0\}$.
>
> (b) Prove that $f:H\times SO_2\to G$, $f(P,B)=PB$, is a homeomorphism (not a homomorphism).
>
> (c) Use (b) to identify the topological structure of $SL_2$.

## Hints

> [!hint]- Hint 1
> Use the unique upper-triangular-times-rotation decomposition with positive diagonal.

## Solution

> [!success]- Solution
> **(a)** Stabilizing the positive ray forces the first column to be $(a,0)^{\mathsf T}$ with $a>0$. The determinant condition then gives
>
> $$
> H=\left\{\begin{pmatrix}a&b\\0&a^{-1}\end{pmatrix}:a>0,\ b\in\mathbb R\right\}.
> $$
>
> **(b)** Applying Gram–Schmidt to the rows of $Q\in SL_2(\mathbb R)$ gives a unique decomposition
>
> $$
> Q=PB,
> \qquad P\in H,
> \qquad B\in SO_2.
> $$
>
> This is the two-dimensional $RQ$ decomposition with positive diagonal. Its formulas use square roots of positive sums of squares, so both the factors and the inverse map depend continuously on $Q$. Thus $f$ is a homeomorphism. It is not a homomorphism because $SO_2$ does not commute with $H$.
>
> **(c)** The parameterization $(a,b)\mapsto(\log a,b)$ identifies $H$ with $\mathbb R^2$, while $SO_2\cong S^1$. Therefore
>
> $$
> SL_2(\mathbb R)\cong\mathbb R^2\times S^1
> $$
>
> as a topological space.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- This product is topological, not a direct-product decomposition of groups.
- **Source status:** M.7 was visually checked at [S1, Ch. 9, Misc. Ex. M.7, printed p. 288, PDF p. 300]. The decomposition and topology are independently derived.
