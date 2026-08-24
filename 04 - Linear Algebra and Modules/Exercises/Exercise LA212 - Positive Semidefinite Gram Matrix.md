---
title: "Exercise LA212: Positive Semidefinite Gram Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - positive-semidefinite-matrices
  - rank
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.3, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA212: Positive Semidefinite Gram Matrix

## Problem Statement

> [!question] Exercise 4.3
> Let $A$ be a real $m\times n$ matrix. Prove that $B=A^{\mathsf T}A$ is positive semidefinite, i.e., that $X^{\mathsf T}BX\ge0$ for all $X$, and that $A$ and $B$ have the same rank.

## Hints

> [!hint]- Hint 1
> Rewrite $X^{\mathsf T}A^{\mathsf T}AX$ as a squared Euclidean norm.

> [!hint]- Hint 2
> Compare the nullspaces of $A$ and $A^{\mathsf T}A$.

## Solution

> [!success]- Solution
> For every $X\in\mathbb R^n$,
>
> $$
> X^{\mathsf T}BX=X^{\mathsf T}A^{\mathsf T}AX=(AX)^{\mathsf T}(AX)=\lVert AX\rVert^2\ge0.
> $$
>
> Hence $B$ is positive semidefinite. Moreover, $AX=0$ clearly implies $BX=0$. Conversely, if $BX=0$, then
>
> $$
> 0=X^{\mathsf T}BX=\lVert AX\rVert^2,
> $$
>
> so $AX=0$. Thus
>
> $$
> \ker(A^{\mathsf T}A)=\ker A.
> $$
>
> Both maps have domain $\mathbb R^n$, so rank-nullity gives
>
> $$
> \operatorname{rank}(A^{\mathsf T}A)=n-\dim\ker A=\operatorname{rank}A.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The same proof over $\mathbb C$ uses $A^*A$ and the Hermitian norm.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.3, printed p. 254, PDF p. 266]. The solution is independent.

