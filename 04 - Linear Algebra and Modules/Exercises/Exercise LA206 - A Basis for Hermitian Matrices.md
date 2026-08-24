---
title: "Exercise LA206: A Basis for Hermitian Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-matrices
  - basis
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 3, Ex. 3.3, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA206: A Basis for Hermitian Matrices

## Problem Statement

> [!question] Exercise 3.3
> The set of $n\times n$ Hermitian matrices forms a real vector space. Find a basis for this space.

## Hints

> [!hint]- Hint 1
> A Hermitian matrix has real diagonal entries, while its entries below the diagonal are determined by those above it.

> [!hint]- Hint 2
> For $i<j$, separate the real and imaginary parts of the $(i,j)$ entry.

## Solution

> [!success]- Solution
> Let $E_{ij}$ denote the matrix unit with a $1$ in position $(i,j)$ and zeros elsewhere. Consider the collection
>
> $$
> \mathcal B=
> \{E_{ii}:1\le i\le n\}
> \cup
> \{E_{ij}+E_{ji}:1\le i<j\le n\}
> \cup
> \{i(E_{ij}-E_{ji}):1\le i<j\le n\}.
> $$
>
> Every matrix in $\mathcal B$ is Hermitian. If $H=(h_{ij})$ is Hermitian, then $h_{ii}\in\mathbb R$ and, for $i<j$, we may write
>
> $$
> h_{ij}=a_{ij}+ib_{ij},
> \qquad
> h_{ji}=a_{ij}-ib_{ij},
> $$
>
> with $a_{ij},b_{ij}\in\mathbb R$. Therefore
>
> $$
> H=
> \sum_{i=1}^n h_{ii}E_{ii}
> +\sum_{i<j}a_{ij}(E_{ij}+E_{ji})
> +\sum_{i<j}b_{ij}i(E_{ij}-E_{ji}).
> $$
>
> The coefficients in this expression are uniquely determined by the entries of $H$, so $\mathcal B$ is linearly independent and spans the real vector space of Hermitian matrices. It is therefore a basis. Its cardinality is
>
> $$
> n+2\binom n2=n^2.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The scalar field is $\mathbb R$: multiplying a Hermitian matrix by a nonreal complex scalar need not preserve the Hermitian condition.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §3, Ex. 3.3, printed p. 254, PDF p. 266]. The solution is an independent derivation.

