---
title: "Exercise LA72: Free Semigroup of Nonnegative Unimodular Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - semigroups
  - elementary-matrices
  - unimodular-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.15, printed p. 77, PDF p. 89"
created: 2026-08-23
---

# Exercise LA72: Free Semigroup of Nonnegative Unimodular Matrices

## Problem Statement

> [!question] Exercise M.15
> Determine the semigroup $S$ of matrices expressible as a product, of arbitrary length, whose factors are
> 
> $$
> U=\begin{pmatrix}1&1\\0&1\end{pmatrix}
> \quad\text{or}\quad
> L=\begin{pmatrix}1&0\\1&1\end{pmatrix}.
> $$
> 
> Show that every element of $S$ has exactly one such expression.

## Hints

> [!hint]- Hint 1
> Products have nonnegative integer entries and determinant $1$.

> [!hint]- Hint 2
> For a nonidentity nonnegative unimodular matrix, one column dominates the other componentwise; subtract the smaller column to recover the last factor.

## Solution

> [!success]- Solution
> The semigroup is
> 
> $$
> S=SL_2(\mathbb Z)\cap M_2(\mathbb Z_{\ge0}).
> $$
> 
> Every word in $U,L$ lies in this set. Conversely, let $A$ be a nonidentity matrix in this set. Its two columns are comparable componentwise: otherwise the inequalities would cross, forcing the positive determinant to have absolute value greater than $1$ or the opposite sign. If the second column dominates the first, then $A=BU$, where $B$ is obtained by subtracting the first column from the second. If the first dominates the second, then $A=BL$, subtracting the second from the first. In either case $B$ again has nonnegative integer entries and determinant $1$, and its sum of entries is smaller. Induction reduces to $I$ and yields a word in $U,L$.
> 
> The dominating column also determines the last letter uniquely: second dominates for a last $U$, first dominates for a last $L$. Removing that last letter and inducting proves uniqueness. Thus $S$ is the free monoid on $U$ and $L$, with the empty word representing $I$.

## Related Concepts

- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.15, printed p. 77, PDF p. 89]. The solution is an independent derivation for this vault, not a solution printed in Artin.
