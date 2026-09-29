---
title: "Exercise LA418: Determinant of a Block Upper Triangular Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 2, printed p. 567, PDF p. 582"
created: 2026-09-29
---

# Exercise LA418: Determinant of a Block Upper Triangular Matrix

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 2
> Carry out explicitly the proof that the determinant of a matrix
>
> $$
> \begin{pmatrix}
> M_1&*&\cdots&*\\
> 0&M_2&\cdots&*\\
> \vdots&\ddots&\ddots&\vdots\\
> 0&\cdots&0&M_s
> \end{pmatrix},
> $$
>
> where each $M_i$ is a square matrix, is equal to the product of the determinants of the matrices $M_1,\ldots,M_s$.

## Hints

> [!hint]- Hint 1: Expand by permutations
> In a nonzero summand of the Leibniz formula, a row in the last block must be paired with a column in the last block.

> [!hint]- Hint 2: Work backwards through the blocks
> Once the last block uses all its own columns, repeat with the preceding block. The surviving permutations preserve every block.

## Solution

> [!success]- Solution
> Work over a commutative ring. Write the whole matrix as $B=(b_{ij})$, and let $I_1,\ldots,I_s$ be the consecutive sets of row and column indices belonging to its diagonal blocks. In
>
> $$
> \det B=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)
> \prod_{i=1}^n b_{i,\sigma(i)},
> $$
>
> a term vanishes if a row is assigned a column in an earlier block. Therefore any term not already forced to be zero must have $\sigma(I_s)\subseteq I_s$. Since $\sigma$ is injective and $I_s$ is finite, equality holds. Those columns are now all occupied, so the same argument gives $\sigma(I_{s-1})=I_{s-1}$, and induction gives $\sigma(I_j)=I_j$ for every $j$.
>
> Such a permutation is specified by independent permutations $\sigma_j$ within the blocks. Because the index sets are consecutive and preserved, there are no inversions between two different blocks, so $\operatorname{sgn}(\sigma)=\prod_j\operatorname{sgn}(\sigma_j)$. Consequently distributivity gives
>
> $$
> \det B
> =\prod_{j=1}^s\left(
> \sum_{\sigma_j\in S_{|I_j|}}\operatorname{sgn}(\sigma_j)
> \prod_{i\in I_j}b_{i,\sigma_j(i)}\right)
> =\prod_{j=1}^s\det M_j.
> $$
>
> The entries in the blocks above the diagonal do not occur in this final expression.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 2, printed p. 567, PDF p. 582]. The block pattern was checked on the original page image and transcribed as searchable mathematics. The Leibniz expansion is an independent derivation.
- **Boundary:** This proof uses only the determinant definition over a commutative ring. It does not require the diagonal blocks to be invertible or the coefficient ring to be a field.
