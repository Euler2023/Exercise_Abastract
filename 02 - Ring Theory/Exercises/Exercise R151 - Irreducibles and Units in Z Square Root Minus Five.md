---
title: "Exercise R151: Irreducibles and Units in Z[sqrt(-5)]"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - irreducible-elements
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 2, Factoring Algebraic Integers, Ex. 2.1, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise R151: Irreducibles and Units in Z[sqrt(-5)]

## Problem Statement

> [!question] Exercise 2.1
> Prove that $2$, $3$, and $1\pm\sqrt{-5}$ are irreducible elements of the ring $R=\mathbb Z[\sqrt{-5}]$ and that the units of this ring are $\pm1$.

## Hints

> [!hint]- Hint 1
> Use the multiplicative norm $N(a+b\sqrt{-5})=a^2+5b^2$.

> [!hint]- Hint 2
> A proper factorization of an element of norm $4$, $9$, or $6$ would require an element of norm $2$ or $3$.

## Solution

> [!success]- Solution
> For $\alpha=a+b\sqrt{-5}$, define
>
> $$
> N(\alpha)=a^2+5b^2.
> $$
>
> This norm is a nonnegative integer and is multiplicative. An element is a unit exactly when its norm is $1$. The equation
>
> $$
> a^2+5b^2=1
> $$
>
> forces $b=0$ and $a=\pm1$, so $R^\times=\{\pm1\}$.
>
> Now $N(2)=4$. A proper factorization of $2$ would force both factors to have norm $2$, but $a^2+5b^2=2$ has no integer solution. Hence $2$ is irreducible.
>
> Similarly, $N(3)=9$. A proper factorization would require factors of norm $3$, and $a^2+5b^2=3$ has no integer solution. Thus $3$ is irreducible.
>
> Finally,
>
> $$
> N(1\pm\sqrt{-5})=6.
> $$
>
> A proper factorization would require norms $2$ and $3$, neither of which occurs in $R$. Therefore $1+\sqrt{-5}$ and $1-\sqrt{-5}$ are irreducible.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because multiplicative norms decide units and irreducible elements in a quadratic integer ring.
- **Source status:** The problem is from [S1, Ch. 13, §13.2, Ex. 2.1, printed p. 408, PDF p. 420]. The norm argument is independent.
