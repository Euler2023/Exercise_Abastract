---
title: "Exercise LA9: Vandermonde Determinant"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags: [exercise, linear-algebra, determinants]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.3, printed p. 511, PDF p. 523"
created: 2026-08-12
---

# Exercise LA9: Vandermonde Determinant

## Problem Statement

> [!question] Exercise M.3
> (a) Prove that $\det(u_i^{j-1})_{1\le i,j\le n}$ is a constant multiple of $\delta(u)=\prod_{i<j}(u_i-u_j)$. (b) Determine the constant.

## Hints

> [!hint]- Hint 1
> The determinant is alternating and has the same total degree as the Vandermonde product.

## Solution

> [!success]- Solution
> Interchanging $u_i,u_j$ interchanges two rows, so the determinant is alternating and vanishes when $u_i=u_j$. Hence every $u_i-u_j$ divides it. The determinant and $\delta$ both have degree $0+1+\cdots+(n-1)$, so their quotient is a constant.
>
> In the determinant expansion, the monomial $u_1^0u_2^1\cdots u_n^{n-1}$ occurs from the identity permutation with coefficient $1$. In Artin's convention $\delta=\prod_{i<j}(u_i-u_j)$, the coefficient of the same monomial is $(-1)^{n(n-1)/2}$. Therefore
> $$
> \det(u_i^{j-1})=(-1)^{n(n-1)/2}\delta(u)=\prod_{i<j}(u_j-u_i).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

The constant changes with the chosen orientation of the Vandermonde product; both conventions are displayed.
