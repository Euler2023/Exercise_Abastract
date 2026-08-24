---
title: "Exercise LA229: Sylvester Criterion for Positive Definiteness"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - positive-definite-matrices
  - sylvester-criterion
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.20, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA229: Sylvester Criterion for Positive Definiteness

## Problem Statement

> [!question] Exercise 4.20
> Prove the criterion for positive definiteness given in Theorem 8.4.19. Does the criterion carry over to Hermitian matrices?

## Hints

> [!hint]- Hint 1
> Apply Gram-Schmidt to the ordered coordinate basis while preserving each flag $V_k=\operatorname{span}(e_1,\ldots,e_k)$.

> [!hint]- Hint 2
> If the resulting diagonal entries are $d_i$, then the $k$th leading principal minor is $d_1\cdots d_k$.

## Solution

> [!success]- Solution
> Let $A_k$ be the leading $k\times k$ principal submatrix and put $\Delta_k=\det A_k$, with $\Delta_0=1$.
>
> If $A$ is positive definite, its restriction to $V_k=\operatorname{span}(e_1,\ldots,e_k)$ is positive definite. By choosing an orthonormal basis of $V_k$, $A_k$ is congruent to $I_k$, so
>
> $$
> \Delta_k=(\det P_k)^{-2}>0.
> $$
>
> Conversely, assume every $\Delta_k>0$. Apply Gram-Schmidt to $e_1,\ldots,e_n$ without normalizing. Because each $A_k$ is invertible, the process produces an orthogonal basis $u_1,\ldots,u_n$ with $u_k\in V_k$ and with unit upper-triangular change-of-basis matrix. Write
>
> $$
> d_k=(u_k,u_k).
> $$
>
> On $V_k$, congruence to $\operatorname{diag}(d_1,\ldots,d_k)$ and the unit determinant of the change-of-basis matrix give
>
> $$
> \Delta_k=d_1d_2\cdots d_k.
> $$
>
> Therefore
>
> $$
> d_k=\frac{\Delta_k}{\Delta_{k-1}}>0.
> $$
>
> In the orthogonal basis, the form is a sum $\sum_k d_kx_k^2$ with all $d_k>0$, so it is positive definite. This proves
>
> $$
> \boxed{A>0\iff \det A_k>0\text{ for }k=1,\ldots,n}.
> $$
>
> The same criterion carries over to Hermitian matrices. The identical Gram-Schmidt argument uses $P^*AP$, and determinants change by the positive factor $|\det P|^2$. All leading principal minors of a Hermitian matrix are real, so the inequalities are meaningful.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- The criterion uses leading principal minors, not an arbitrary selection of principal minors.
- **Source status:** The exercise was visually verified at [S1, Ch. 8, §4, Ex. 4.20, printed p. 256, PDF p. 268], and Theorem 8.4.19 at printed p. 241/PDF p. 253. The proof is independent.

