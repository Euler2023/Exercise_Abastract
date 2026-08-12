---
title: "Exercise R17: Half-Symmetric and Skew-Symmetric Polynomials"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, symmetric-polynomials, discriminant]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.7, printed p. 512, PDF p. 524"
created: 2026-08-12
---

# Exercise R17: Half-Symmetric and Skew-Symmetric Polynomials

## Problem Statement

> [!question] Exercise M.7
> A polynomial is half-symmetric if every even permutation fixes it, and skew-symmetric if every permutation multiplies it by its sign. (a) Prove $\delta=\prod_{i<j}(u_i-u_j)$ is skew-symmetric. (b) Prove every half-symmetric polynomial is $f+g\delta$, with $f,g$ symmetric.

## Hints

> [!hint]- Hint 1
> Split a half-symmetric polynomial into its $+1$ and $-1$ parts under one transposition.

## Solution

> [!success]- Solution
> A transposition negates $\delta$; transpositions generate $S_n$, so $\sigma(\delta)=\operatorname{sgn}(\sigma)\delta$.
>
> Assume $2$ is invertible. For half-symmetric $h$, choose an odd transposition $\tau$ and put
> $$
> f=\frac{h+\tau h}{2},\qquad a=\frac{h-\tau h}{2}.
> $$
> Then $f$ is symmetric and $a$ is skew-symmetric. Every $u_i-u_j$ divides $a$, so $a=\delta g$; the quotient $g$ is symmetric. Hence $h=f+g\delta$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

The decomposition requires characteristic different from $2$.
