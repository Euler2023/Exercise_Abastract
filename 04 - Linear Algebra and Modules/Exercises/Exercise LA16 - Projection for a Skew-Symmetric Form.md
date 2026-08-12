---
title: "Exercise LA16: Projection for a Skew-Symmetric Form"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-forms
  - projections
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.2, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA16: Projection for a Skew-Symmetric Form

## Problem Statement

> [!question] Exercise 8.2
> Let $W$ be a subspace on which a real skew-symmetric form is nondegenerate. Find a formula for the orthogonal projection $\pi:V\to W$.

## Hints

> [!hint]- Hint 1
> Choose a basis $w_1,\ldots,w_r$ of $W$ and let $G=(\omega(w_i,w_j))$.

> [!hint]- Hint 2
> Write $\pi(v)=\sum_i c_iw_i$ and impose $v-\pi(v)\in W^{\perp_\omega}$.

## Solution

> [!success]- Solution
> Let $\omega$ denote the form, choose a basis $w_1,\ldots,w_r$ of $W$, and put
>
> $$
> G=(\omega(w_i,w_j))_{i,j}.
> $$
>
> The restriction to $W$ is nondegenerate, so $G$ is invertible. Write
>
> $$
> \pi(v)=\sum_{j=1}^r c_jw_j.
> $$
>
> The defining condition $v-\pi(v)\in W^{\perp_\omega}$ says, for every $i$,
>
> $$
> 0=\omega(w_i,v-\pi(v))
> =\omega(w_i,v)-\sum_{j=1}^rG_{ij}c_j.
> $$
>
> Therefore, if
>
> $$
> d(v)=\begin{pmatrix}\omega(w_1,v)\\ \vdots\\ \omega(w_r,v)\end{pmatrix},
> $$
>
> then $Gc=d(v)$ and
>
> $$
> \pi(v)=\sum_{j=1}^r\bigl(G^{-1}d(v)\bigr)_jw_j.
> $$
>
> This map fixes $W$ and kills $W^{\perp_\omega}$, so it is precisely the projection associated with
>
> $$
> V=W\oplus W^{\perp_\omega}.
> $$
>
> In a symplectic basis $e_1,\ldots,e_s,f_1,\ldots,f_s$ of $W$, normalized by $\omega(e_i,f_j)=\delta_{ij}$, the formula becomes
>
> $$
> \pi(v)=\sum_{i=1}^s\bigl(\omega(e_i,v)f_i-\omega(f_i,v)e_i\bigr).
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source status:** The statement is [S1, Ch. 8, Exercises §8, Ex. 8.2, printed p. 258, PDF p. 270]. The solution is independently derived from Artin's Theorem 8.8.6.
- Here “orthogonal” refers to the skew form $\omega$, not to the Euclidean inner product.
