---
title: "Exercise LA251: Kernels and Orthogonal Images"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - adjoints
  - normal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.15, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA251: Kernels and Orthogonal Images

## Problem Statement

> [!question] Exercise 6.15
> Prove that for any square matrix $A$, $\ker A=(\operatorname{im}A^*)^\perp$, and that if $A$ is normal, $\ker A=(\operatorname{im}A)^\perp$.

## Hints

> [!hint]- Hint 1
> Translate orthogonality to $\operatorname{im}A^*$ using the adjoint identity.

> [!hint]- Hint 2
> For normal $A$, compare $\lVert Ax\rVert$ and $\lVert A^*x\rVert$.

## Solution

> [!success]- Solution
> A vector $x$ lies in $(\operatorname{im}A^*)^\perp$ exactly when
>
> $$
> (A^*y,x)=0
> $$
>
> for every $y$. By Hermitian symmetry and the adjoint identity this is equivalent to $(Ax,y)=0$ for every $y$, hence to $Ax=0$. Therefore
>
> $$
> \ker A=(\operatorname{im}A^*)^\perp.
> $$
>
> Applying this identity to $A^*$ gives
>
> $$
> \ker A^*=(\operatorname{im}A)^\perp.
> $$
>
> If $A$ is normal, then
>
> $$
> \lVert Ax\rVert^2=(x,A^*Ax)=(x,AA^*x)=\lVert A^*x\rVert^2.
> $$
>
> Hence $\ker A=\ker A^*$, and the second displayed identity yields
>
> $$
> \ker A=(\operatorname{im}A)^\perp.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- The first equality holds without normality; normality is used only to replace $A^*$ by $A$ in the image.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.15, printed p. 257, PDF p. 269]. The proof is independent.

