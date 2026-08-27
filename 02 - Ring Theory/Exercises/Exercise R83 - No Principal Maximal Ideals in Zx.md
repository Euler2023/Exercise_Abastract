---
title: "Exercise R83: No Principal Maximal Ideals in Zx"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - maximal-ideals
  - polynomial-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §8, Ex. 8.1, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R83: No Principal Maximal Ideals in Zx

## Problem Statement

> [!question] Exercise 8.1
> Which principal ideals in $\mathbb Z[x]$ are maximal ideals?

## Hints

> [!hint]- Hint 1
> For a nonconstant generator, choose a prime that does not divide its leading coefficient and enlarge $(f)$ to $(f,p)$.

## Solution

> [!success]- Solution
> None are maximal. If $f$ is nonconstant, choose a prime $p$ not dividing its leading coefficient. Then the reduction $\bar f\in\mathbb F_p[x]$ is nonconstant, so $(\bar f)$ is proper. Hence $(f,p)$ is a proper ideal strictly containing $(f)$; it is strict because $p$ cannot be a multiple of a nonconstant polynomial.
>
> If $f=n$ is constant, then $(n)$ is not maximal: for $|n|>1$, it is contained in a maximal ideal $(p,x)$ for a prime $p\mid n$; $(0)$ is not maximal; and $(\pm1)$ is not proper. Therefore no principal ideal of $\mathbb Z[x]$ is maximal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §8, Ex. 8.1, printed p. 357, PDF p. 369]. The enlargement argument is independent.

