---
title: "Exercise F27: Descending a Polynomial Multiple to the Base Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags: [exercise, field-theory, field-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.10, printed p. 512, PDF p. 524"
created: 2026-08-12
---

# Exercise F27: Descending a Polynomial Multiple to the Base Field

## Problem Statement

> [!question] Exercise M.10
> Let $K/F$ be finite and $f(x)\in K[x]$. Prove there is a nonzero $g(x)\in K[x]$ such that $f(x)g(x)\in F[x]$.

## Hints

> [!hint]- Hint 1
> Multiplication by $f$ is an $F[x]$-linear endomorphism of the free module $K[x]$.

## Solution

> [!success]- Solution
> Choose an $F$-basis of $K$. Then $K[x]$ is a free $F[x]$-module of rank $d=[K:F]$. Multiplication by $f$ is represented by a matrix $M_f\in M_d(F[x])$. Its determinant $N(f)=\det M_f$ lies in $F[x]$ and is nonzero because after extending scalars to $K(x)$, multiplication by the nonzero element $f$ is invertible.
>
> The adjugate identity $M_f\operatorname{adj}(M_f)=N(f)I$, applied to the vector representing $1$, produces $g\in K[x]$ with $fg=N(f)\in F[x]$. Since $N(f)\ne0$, also $g\ne0$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

This is the polynomial norm construction; it does not require the extension to be Galois or separable.
