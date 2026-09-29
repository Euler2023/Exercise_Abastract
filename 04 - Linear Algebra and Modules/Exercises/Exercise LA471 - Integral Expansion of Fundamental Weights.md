---
title: "Exercise LA471: Integral Expansion of Fundamental Weights"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - dual-bases
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 29, printed p. 600, PDF p. 615"
created: 2026-09-29
---

# Exercise LA471: Integral Expansion of Fundamental Weights

## Problem Statement

> [!question] Lang XV.29
> Show that the elements $n\alpha_i'$ $(i=1,\ldots,n-1)$ can be expressed as linear combinations of $\alpha_1,\ldots,\alpha_{n-1}$ with positive coefficients in $\mathbb Z$.

## Hints

> [!hint]- Hint 1
> Write each $h_\ell$ in terms of $h_n$ and the consecutive differences. Determine $h_n$ from $\sum_\ell h_\ell=0$.

> [!hint]- Hint 2
> The coefficient of $\alpha_j$ in $n\alpha_i'$ is $n\min(i,j)-ij$.

## Solution

> [!success]- Independent derivation
> Recall from [[04 - Linear Algebra and Modules/Exercises/Exercise LA468 - Coordinate Differences and Dual Bases on Trace Zero Diagonals|Exercise LA468]] that $\alpha_j(H)=h_j-h_{j+1}$ and $\alpha_i'(H)=\sum_{\ell=1}^i h_\ell$ on the trace-zero diagonal space. Telescoping gives
> $$
> h_\ell=h_n+\sum_{j=\ell}^{n-1}\alpha_j(H).
> $$
> Summing over $\ell=1,\ldots,n$ and using trace zero yields
> $$
> nh_n=-\sum_{j=1}^{n-1}j\alpha_j(H).
> $$
> Summing instead over $\ell=1,\ldots,i$ yields
> $$
> \alpha_i'(H)=ih_n+\sum_{j=1}^{n-1}\min(i,j)\alpha_j(H).
> $$
> Substitute the first identity into the second and multiply by $n$. Since the resulting identity holds for every $H$, it is an identity of functionals:
> $$
> n\alpha_i'=\sum_{j=1}^{n-1}\bigl(n\min(i,j)-ij\bigr)\alpha_j
> =\sum_{j=1}^{n-1}\min(i,j)\bigl(n-\max(i,j)\bigr)\alpha_j.
> $$
> For $1\le i,j\le n-1$, both integer factors in the last coefficient are strictly positive, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[06 - Representation Theory/Concepts/Weights and Weight Spaces|Weights and Weight Spaces]]

## Notes

- Source: [S2, Ch. XV, Exercise 29, printed p. 600, PDF p. 615], visually verified. This is an independent telescoping derivation, using the notation and partial-sum formula from Exercise 26.
- For $n=3$, the identities read $3\alpha_1'=2\alpha_1+\alpha_2$ and $3\alpha_2'=\alpha_1+2\alpha_2$. For $n=1$ there are no functionals in the assertion.
- The term “fundamental weights” explains the link with type $A_{n-1}$; the calculation does not require root-system theory or the source's shared [JoL 01] reference.
