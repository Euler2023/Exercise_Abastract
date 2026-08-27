---
title: "Exercise R57: Sums of Ideals"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.12, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R57: Sums of Ideals

## Problem Statement

> [!question] Exercise 3.12
> Let $I$ and $J$ be ideals of a ring $R$. Prove that $I+J=\{x+y:x\in I,\ y\in J\}$ is an ideal.

## Hints

> [!hint]- Hint 1
> Verify additive closure, negatives, and absorption by an arbitrary $r\in R$.

## Solution

> [!success]- Solution
> We have $0=0+0\in I+J$. If $x_1+y_1$ and $x_2+y_2$ lie in $I+J$, then
>
> $$
> (x_1+y_1)-(x_2+y_2)=(x_1-x_2)+(y_1-y_2)\in I+J.
> $$
>
> Finally, for $r\in R$,
>
> $$
> r(x+y)=rx+ry\in I+J.
> $$
>
> Thus $I+J$ is an additive subgroup absorbing multiplication by $R$, hence an ideal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.12, printed p. 355, PDF p. 367]. The verification is independent.

