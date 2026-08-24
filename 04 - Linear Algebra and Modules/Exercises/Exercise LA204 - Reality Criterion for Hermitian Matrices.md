---
title: "Exercise LA204: Reality Criterion for Hermitian Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-matrices
  - quadratic-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 3, Ex. 3.1, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA204: Reality Criterion for Hermitian Matrices

## Problem Statement

> [!question] Exercise 3.1
> Is a complex $n\times n$ matrix $A$ such that $X^*AX$ is real for all $X$ Hermitian?

## Hints

> [!hint]- Hint 1
> Split $A$ into its Hermitian real and imaginary parts.

> [!hint]- Hint 2
> Apply the hypothesis to $e_i$, $e_i+e_j$, and $e_i+i e_j$.

## Solution

> [!success]- Solution
> Yes. Write
>
> $$
> H=\frac{A+A^*}{2},
> \qquad
> K=\frac{A-A^*}{2i}.
> $$
>
> Both $H$ and $K$ are Hermitian, and $A=H+iK$. Consequently,
>
> $$
> X^*AX=X^*HX+iX^*KX.
> $$
>
> The two quantities $X^*HX$ and $X^*KX$ are real. Since the left side is real for every $X$, we have
>
> $$
> X^*KX=0
> $$
>
> for every $X$.
>
> Let $K=(k_{ij})$. Taking $X=e_i$ gives $k_{ii}=0$. For $i<j$, taking $X=e_i+e_j$ gives
>
> $$
> k_{ij}+k_{ji}=2\operatorname{Re}(k_{ij})=0,
> $$
>
> because $K$ is Hermitian. Taking $X=e_i+i e_j$ gives
>
> $$
> i k_{ij}-i k_{ji}=-2\operatorname{Im}(k_{ij})=0.
> $$
>
> Thus every $k_{ij}=0$, so $K=0$. Therefore $A=H$ and $A^*=A$; hence $A$ is Hermitian.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- This is a complex polarization principle: the scalar-valued function $X\mapsto X^*AX$ determines the Hermitian part and detects whether the skew-Hermitian part vanishes.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §3, Ex. 3.1, printed p. 254, PDF p. 266]. The solution is an independent derivation.

