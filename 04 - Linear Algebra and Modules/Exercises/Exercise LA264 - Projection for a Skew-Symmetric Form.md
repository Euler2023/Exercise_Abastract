---
title: "Exercise LA264: Projection for a Skew-Symmetric Form"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-forms
  - projection
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.2, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA264: Projection for a Skew-Symmetric Form

## Problem Statement

> [!question] Exercise 8.2
> Let $W$ be a subspace on which a real skew-symmetric form is nondegenerate. Find a formula for the orthogonal projection $\pi:V\to W$.

## Hints

> [!hint]- Hint 1
> Choose a basis of $W$ and solve the linear equations requiring $v-\pi(v)\in W^\perp$.

> [!hint]- Hint 2
> In a symplectic basis, the Gram matrix is a block matrix with inverse immediately visible.

## Solution

> [!success]- Solution
> Let $w_1,\ldots,w_r$ be a basis of $W$ and let
>
> $$
> G=(\omega(w_i,w_j))_{i,j}.
> $$
>
> Nondegeneracy on $W$ says that $G$ is invertible. Write $\pi(v)=\sum_jc_jw_j$. The condition $v-\pi(v)\in W^\perp$ is
>
> $$
> \omega(w_i,v)-\sum_j\omega(w_i,w_j)c_j=0
> $$
>
> for every $i$. Thus, with $b_i=\omega(w_i,v)$,
>
> $$
> Gc=b,
> \qquad
> \boxed{\pi(v)=\sum_jw_j(G^{-1}b)_j}.
> $$
>
> In a symplectic basis $(u_1,v_1,\ldots,u_m,v_m)$ satisfying $\omega(u_i,v_j)=\delta_{ij}$, this becomes
>
> $$
> \boxed{\pi(x)=\sum_{i=1}^m\bigl(-\omega(v_i,x)u_i+\omega(u_i,x)v_i\bigr)}.
> $$
>
> The residual is orthogonal to every basis vector of $W$, so this is the required projection.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Unlike the symmetric projection formula, a skew form has no nonzero vector with $\omega(w,w)\ne0$; the inverse Gram matrix replaces division by squared lengths.
- **Source status:** Verified at [S1, Ch. 8, §8, Ex. 8.2, printed p. 258, PDF p. 270]. The formula is independently derived.

