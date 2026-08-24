---
title: "Exercise LA214: Orthogonal Bases for Two Symmetric Forms"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-bases
  - symmetric-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.5, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA214: Orthogonal Bases for Two Symmetric Forms

## Problem Statement

> [!question] Exercise 4.5
> Find an orthogonal basis for the form on $\mathbb R^n$ whose matrix is
>
> $$
> \text{(a) }\begin{pmatrix}1&1\\1&1\end{pmatrix},
> \qquad
> \text{(b) }\begin{pmatrix}1&0&1\\0&2&1\\1&1&1\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> For (a), one vector in the nullspace is automatically orthogonal to every vector.

> [!hint]- Hint 2
> For (b), begin with $e_1,e_2$ and orthogonalize $e_3$ against them.

## Solution

> [!success]- Solution
> **(a)** Let $v_1=(1,0)^{\mathsf T}$ and $v_2=(1,-1)^{\mathsf T}$. Since the matrix sends $v_2$ to zero,
>
> $$
> (v_1,v_2)=0,
> \qquad
> (v_2,v_2)=0.
> $$
>
> The two vectors are independent, so $(v_1,v_2)$ is an orthogonal basis. The diagonal matrix of the form in this basis is $\operatorname{diag}(1,0)$.
>
> **(b)** Let
>
> $$
> v_1=e_1,
> \qquad
> v_2=e_2,
> \qquad
> v_3=(-2,-1,2)^{\mathsf T}.
> $$
>
> For the displayed matrix $A$,
>
> $$
> Av_3=(0,0,-1)^{\mathsf T}.
> $$
>
> Hence $v_1^{\mathsf T}Av_3=v_2^{\mathsf T}Av_3=0$, while $v_1^{\mathsf T}Av_2=0$. Their squared values are
>
> $$
> (v_1,v_1)=1,
> \qquad
> (v_2,v_2)=2,
> \qquad
> (v_3,v_3)=-2.
> $$
>
> The three vectors are independent, so they form an orthogonal basis, with diagonal matrix $\operatorname{diag}(1,2,-2)$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- Part (a) is deliberately degenerate; an orthogonal basis need not have nonzero squared lengths.
- **Source status:** Both matrices were visually verified at [S1, Ch. 8, §4, Ex. 4.5, printed p. 254, PDF p. 266]. The solution is independent.

