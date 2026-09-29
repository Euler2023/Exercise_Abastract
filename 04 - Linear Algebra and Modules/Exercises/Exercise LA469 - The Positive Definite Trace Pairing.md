---
title: "Exercise LA469: The Positive Definite Trace Pairing"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - inner-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 27, printed p. 600, PDF p. 615"
created: 2026-09-29
---

# Exercise LA469: The Positive Definite Trace Pairing

## Problem Statement

> [!question] Lang XV.27 — The trace form
> Let $\operatorname{Mat}_n(\mathbb R)$ be the vector space of real $n\times n$ matrices. Define the twisted trace form on this space by
> $$
> B_t(X,Y)=\operatorname{tr}(X\,{}^tY)=\langle X,Y\rangle_t.
> $$
> As usual, $\,{}^tY$ is the transpose of a matrix $Y$. Show that $B_t$ is a symmetric positive definite bilinear form on $\operatorname{Mat}_n(\mathbb R)$. What is the analogous positive definite hermitian form on $\operatorname{Mat}_n(\mathbb C)$?

## Hints

> [!hint]- Hint 1
> Expand the diagonal entries of $X\,{}^tY$.

> [!hint]- Hint 2
> For the complex case replace transpose by conjugate transpose. Check which variable is linear.

## Solution

> [!success]- Independent derivation
> Writing $X=(x_{ij})$ and $Y=(y_{ij})$, we have
> $$
> \operatorname{tr}(X\,{}^tY)=\sum_i\sum_j x_{ij}y_{ij}.
> $$
> This expression is real bilinear and unchanged on interchanging $X$ and $Y$. Moreover
> $$
> B_t(X,X)=\sum_{i,j}x_{ij}^2\ge0,
> $$
> with equality precisely when every entry of $X$ vanishes. This proves positive definiteness.
>
> On complex matrices use $Y^*={}^{t}\overline Y$ and set
> $$
> B_{\mathbb C}(X,Y)=\operatorname{tr}(XY^*)=\sum_{i,j}x_{ij}\overline{y_{ij}}.
> $$
> It is complex-linear in $X$, conjugate-linear in $Y$, satisfies $B_{\mathbb C}(Y,X)=\overline{B_{\mathbb C}(X,Y)}$, and obeys
> $$
> B_{\mathbb C}(X,X)=\sum_{i,j}|x_{ij}|^2>0\quad(X\ne0).
> $$
> These are the required Hermitian and positive-definite properties.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Source: [S2, Ch. XV, Exercise 27, printed p. 600, PDF p. 615], visually verified. The proof is an independent entrywise computation.
- The complex formula uses Lang's first-variable-linear convention. Under the conjugate-linear-first convention in the linked Bilinear and Hermitian Forms note, use $\operatorname{tr}(X^*Y)$ instead.
- The transpose is essential on the full real matrix space: for $X=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$, $\operatorname{tr}(X^2)=-2$. On real diagonal matrices it can be omitted, as in Exercise 28.
