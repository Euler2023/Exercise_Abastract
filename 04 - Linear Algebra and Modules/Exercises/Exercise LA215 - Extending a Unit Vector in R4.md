---
title: "Exercise LA215: Extending a Unit Vector in R4"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthonormal-bases
  - euclidean-space
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.6, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA215: Extending a Unit Vector in R4

## Problem Statement

> [!question] Exercise 4.6
> Extend the vector $X_1=\frac12(1,-1,1,1)^{\mathsf T}$ to an orthonormal basis for $\mathbb R^4$.

## Hints

> [!hint]- Hint 1
> Look for three more vectors whose entries are all $\pm\frac12$.

> [!hint]- Hint 2
> Arrange the sign patterns as rows of a Hadamard-type matrix.

## Solution

> [!success]- Solution
> One extension is
>
> $$
> \begin{aligned}
> X_1&=\frac12(1,-1,1,1)^{\mathsf T},\\
> X_2&=\frac12(1,1,-1,1)^{\mathsf T},\\
> X_3&=\frac12(1,1,1,-1)^{\mathsf T},\\
> X_4&=\frac12(1,-1,-1,-1)^{\mathsf T}.
> \end{aligned}
> $$
>
> Each vector has squared length $4\cdot(1/2)^2=1$. Comparing the sign patterns shows that any two distinct vectors agree in two coordinates and disagree in two coordinates, so their dot product is
>
> $$
> \frac14(1+1-1-1)=0.
> $$
>
> Hence $(X_1,X_2,X_3,X_4)$ is an orthonormal set of four vectors in $\mathbb R^4$, and therefore an orthonormal basis.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The columns formed by these vectors constitute an orthogonal $4\times4$ matrix.
- **Source status:** The vector was visually verified at [S1, Ch. 8, §4, Ex. 4.6, printed p. 254, PDF p. 266]. The extension is an independent construction.

