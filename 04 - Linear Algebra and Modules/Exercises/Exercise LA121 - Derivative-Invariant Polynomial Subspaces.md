---
title: "Exercise LA121: Derivative-Invariant Polynomial Subspaces"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - nilpotent-operators
  - invariant-subspaces
  - polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.6, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA121: Derivative-Invariant Polynomial Subspaces

## Problem Statement

> [!question] Exercise 4.6
> Let $P$ be the real vector space of polynomials printed as $p(x)=a_0+a_1+\cdots+a_nx^n$ of degree at most $n$, and let $D=d/dx$ act on $P$.
>
> (a) Prove that $D$ is nilpotent. (b) Find its matrix in a convenient basis. (c) Determine all $D$-invariant subspaces of $P$.

## Hints

> [!hint]- Hint 1
> Use the basis $1,x,x^2/2!,\ldots,x^n/n!$.

## Solution

> [!success]- Solution
> (a) Differentiating more than $n$ times gives zero, so $D^{n+1}=0$.
>
> (b) For $e_k=x^k/k!$, $De_0=0$ and $De_k=e_{k-1}$. Thus the matrix has ones immediately above the diagonal and zeros elsewhere.
>
> (c) Let $0\ne W$ be invariant and let $r$ be the greatest degree occurring in $W$. If $p\in W$ has degree $r$, the vectors $p,Dp,\ldots,D^rp$ have distinct degrees and span all polynomials of degree at most $r$. Hence
>
> $$
> W=\operatorname{span}(1,x,\ldots,x^r).
> $$
>
> Together with $0$, these are all invariant subspaces.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source issue:** The printed formula omits the factor $x$ after $a_1$; the intended standard expression is $a_0+a_1x+\cdots+a_nx^n$. The printed wording is preserved in the statement and the correction is explicit here.
- **Source status:** [S1, Ch. 4, §4, Ex. 4.6, printed p. 127, PDF p. 139]; independent solution.

