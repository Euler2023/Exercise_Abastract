---
title: "Exercise R45: Formal Power Series and Their Units"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - formal-power-series
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §2, Ex. 2.2, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R45: Formal Power Series and Their Units

## Problem Statement

> [!question] Exercise 2.2
> Let $F$ be a field. The set of all formal power series $p(t)=a_0+a_1t+a_2t^2+\cdots$, with $a_i$ in $F$, is denoted by $F[[t]]$. There is no requirement of convergence. Prove that $F[[t]]$ is a ring, and determine the units in this ring.

## Hints

> [!hint]- Hint 1
> Define multiplication by the Cauchy product; each coefficient uses only finitely many terms.

> [!hint]- Hint 2
> Solve recursively for the coefficients of an inverse.

## Solution

> [!success]- Solution
> Define addition coefficientwise and multiplication by
>
> $$
> \left(\sum_{i\ge0}a_it^i\right)
> \left(\sum_{j\ge0}b_jt^j\right)
> =\sum_{n\ge0}\left(\sum_{i+j=n}a_ib_j\right)t^n.
> $$
>
> Each inner sum is finite. The ring axioms follow coefficientwise from those of $F$, with zero series and identity $1$.
>
> If $p(t)q(t)=1$, the constant coefficients satisfy $a_0b_0=1$, so $a_0\ne0$. Conversely, if $a_0\ne0$, set $b_0=a_0^{-1}$ and recursively choose
>
> $$
> b_n=-a_0^{-1}\sum_{i=1}^{n}a_i b_{n-i}.
> $$
>
> Then every positive-degree coefficient of $pq$ is zero. Thus the units are exactly the series with nonzero constant term.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Method boundary:** No analytic convergence is used; equality and multiplication are purely coefficientwise.
- **Source status:** The statement is from [S1, Ch. 11, §2, Ex. 2.2, printed p. 354, PDF p. 366]. The construction is independently derived.

