---
title: "Exercise LA221: Signature of the Trace Product"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - trace
  - signature
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.12, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA221: Signature of the Trace Product

## Problem Statement

> [!question] Exercise 4.12
> Let $V=\mathbb R^{2\times2}$ be the vector space of real $2\times2$ matrices.
>
> **(a)** Determine the matrix of the bilinear form $(A,B)=\operatorname{trace}(AB)$ on $V$ with respect to the standard basis $\{E_{ij}\}$.
>
> **(b)** Determine the signature of this form.
>
> **(c)** Find an orthogonal basis for this form.
>
> **(d)** Determine the signature of the form $\operatorname{trace}(AB)$ on the space $\mathbb R^{n\times n}$ of real $n\times n$ matrices.

## Hints

> [!hint]- Hint 1
> Use $\operatorname{trace}(E_{ij}E_{kl})=\delta_{jk}\delta_{il}$.

> [!hint]- Hint 2
> Pair $E_{ij}$ with $E_{ji}$ and replace them by their symmetric and skew-symmetric combinations.

## Solution

> [!success]- Solution
> **(a)** In the ordered basis $(E_{11},E_{12},E_{21},E_{22})$, the matrix is
>
> $$
> G=\begin{pmatrix}
> 1&0&0&0\\
> 0&0&1&0\\
> 0&1&0&0\\
> 0&0&0&1
> \end{pmatrix}.
> $$
>
> **(b)–(c)** The basis
>
> $$
> E_{11},\quad E_{22},\quad E_{12}+E_{21},\quad E_{12}-E_{21}
> $$
>
> is orthogonal. The corresponding diagonal values are $1,1,2,-2$. Thus the signature is
>
> $$
> \boxed{(3,1)}.
> $$
>
> **(d)** For general $n$, the diagonal units $E_{ii}$ contribute $n$ positive directions. For every $i<j$, the pair
>
> $$
> E_{ij}+E_{ji},
> \qquad
> E_{ij}-E_{ji}
> $$
>
> contributes one value $2$ and one value $-2$. Therefore
>
> $$
> \boxed{
> p=n+\binom n2=\frac{n(n+1)}2,
> \qquad
> m=\binom n2=\frac{n(n-1)}2}.
> $$
>
> The form is nondegenerate because $p+m=n^2$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The positive and negative subspaces are respectively the symmetric and skew-symmetric matrices.
- **Source status:** All four parts were visually verified at [S1, Ch. 8, §4, Ex. 4.12, printed p. 255, PDF p. 267]. The solution is independent.

