---
title: "Exercise R96: A Line Meets a Degree d Curve at Most d Times"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - algebraic-curves
  - polynomial-roots
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.10, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R96: A Line Meets a Degree d Curve at Most d Times

## Problem Statement

> [!question] Exercise 9.10
> Let $L=\{ax+by+c=0\}$ be a complex line in $\mathbb C^2$, and let $C=\{f(x,y)=0\}$ for irreducible $f$ of degree $d$. Prove that $C\cap L$ has at most $d$ points unless $C=L$.

## Hints

> [!hint]- Hint 1
> Parametrize $L$ and restrict $f$ to the parameter.

## Solution

> [!success]- Solution
> Parametrize $L$ by affine-linear functions $(x(t),y(t))$. Then
>
> $$
> h(t)=f(x(t),y(t))
> $$
>
> is a polynomial of degree at most $d$. If $h$ is not identically zero, it has at most $d$ roots, and these roots parametrize $C\cap L$. If $h\equiv0$, then $f$ vanishes identically on $L$, so the linear equation of $L$ divides $f$. Irreducibility forces $f$ to be a scalar multiple of that equation, hence $C=L$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.10, printed p. 358, PDF p. 370]. The restriction proof is independent.

