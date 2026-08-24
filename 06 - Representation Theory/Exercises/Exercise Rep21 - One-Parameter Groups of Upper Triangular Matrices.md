---
title: "Exercise Rep21: One-Parameter Groups of Upper Triangular Matrices"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - triangular-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.7, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise Rep21: One-Parameter Groups of Upper Triangular Matrices

## Problem Statement

> [!question] Exercise 5.7
> Determine the one-parameter groups in the group of invertible $n\times n$ upper triangular matrices.

## Hints

> [!hint]- Hint 1
> Differentiate an upper triangular path at the identity.

> [!hint]- Hint 2
> Every power of an upper triangular matrix is upper triangular.

## Solution

> [!success]- Solution
> Let $B_n$ be the group of invertible real upper triangular matrices. If $\varphi(t)$ is a one-parameter group in $B_n$, then $\varphi(t)=e^{tA}$ and
>
> $$
> A=\varphi'(0)
> $$
>
> is upper triangular because every entry below the diagonal vanishes identically along the path.
>
> Conversely, if $A$ is any real upper triangular matrix, every power $A^k$ is upper triangular, so $e^{tA}$ is upper triangular. Its diagonal entries are
>
> $$
> e^{ta_{11}},\ldots,e^{ta_{nn}},
> $$
>
> which are positive and hence nonzero. Therefore $e^{tA}\in B_n$ for every $t$. Thus the one-parameter groups are exactly
>
> $$
> \varphi_A(t)=e^{tA}
> \quad\text{with }A\text{ upper triangular}.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]

## Notes

- Such a one-parameter group lies in the identity component, characterized by positive diagonal entries.
- **Source status:** Ex. 5.7 was visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The tangent and exponential arguments are independent.

