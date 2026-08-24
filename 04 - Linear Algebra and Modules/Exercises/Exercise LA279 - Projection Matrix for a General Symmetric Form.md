---
title: "Exercise LA279: Projection Matrix for a General Symmetric Form"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - bilinear-forms
  - projection
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.13, printed p. 260, PDF p. 272"
created: 2026-08-24
---

# Exercise LA279: Projection Matrix for a General Symmetric Form

## Problem Statement

> [!question] Miscellaneous Problem M.13
> Let $\langle x,y\rangle=x^{\mathsf T}Ay$ be a symmetric form on $\mathbb R^n$, and let the columns of an $n\times r$ matrix $M$ be a basis of a subspace $W$. Find the matrix of the projection onto $W$ orthogonal with respect to this form. State the hypotheses needed for the formula. Specialize it to projection onto a line for the ordinary dot product.

## Hints

> [!hint]- Hint 1
> Write the projected vector as $Mc$ and impose $M^{\mathsf T}A(x-Mc)=0$.

> [!hint]- Hint 2
> The restriction of the form to $W$ must be nondegenerate.

## Solution

> [!success]- Solution
> Let $M$ have full column rank, and assume the Gram matrix
>
> $$
> G=M^{\mathsf T}AM
> $$
>
> is invertible. This is exactly the condition that the restriction of the symmetric form to $W$ be nondegenerate. If $\pi(x)=Mc$, the orthogonality requirement $x-Mc\in W^\perp$ is
>
> $$
> M^{\mathsf T}A(x-Mc)=0.
> $$
>
> Thus $Gc=M^{\mathsf T}Ax$, and
>
> $$
> \boxed{\pi=M(M^{\mathsf T}AM)^{-1}M^{\mathsf T}A}.
> $$
>
> The ambient matrix $A$ need not be invertible; only its restriction to $W$ must be nondegenerate. The formula gives $\pi^2=\pi$, $\operatorname{im}\pi=W$, and $x-\pi x\in W^\perp$.
>
> For the ordinary dot product, $A=I$. If $W=\mathbb Rw$ with $w\ne0$, take $M=w$ as a one-column matrix. Then
>
> $$
> \boxed{\pi=\frac{ww^{\mathsf T}}{w^{\mathsf T}w}},
> \qquad
> \pi(x)=\frac{x\cdot w}{w\cdot w}w.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- When $G$ is singular, a vector can have no unique orthogonal projection onto $W$ with the stated decomposition property.
- **Source status:** The problem and its requested specialization were visually verified at [S1, Ch. 8, M.13, printed p. 260, PDF p. 272]. The derivation is independent.

