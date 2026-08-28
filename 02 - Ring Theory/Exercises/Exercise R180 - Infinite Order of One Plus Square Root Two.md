---
title: "Exercise R180: Infinite Order of 1 + sqrt(2)"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-fields
  - units
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 9, Real Quadratic Fields, Ex. 9.1, printed p. 411, PDF p. 423"
created: 2026-08-28
---

# Exercise R180: Infinite Order of 1 + sqrt(2)

## Problem Statement

> [!question] Exercise 9.1
> Prove that $1+\sqrt2$ is an element of infinite order in the group of units of $\mathbb Z[\sqrt2]$.

## Hints

> [!hint]- Hint 1
> Compute its norm, and then apply the real embedding that sends $\sqrt2$ to the positive square root.

## Solution

> [!success]- Solution
> Let $\alpha=1+\sqrt2$. Its norm is
>
> $$
> N(\alpha)=(1+\sqrt2)(1-\sqrt2)=-1,
> $$
>
> so $\alpha$ is a unit, with inverse $\sqrt2-1$.
>
> Under the ordinary real embedding, $\alpha=1+\sqrt2>1$. Therefore
>
> $$
> \alpha^n>1
> $$
>
> for every positive integer $n$. In particular, no positive power of $\alpha$ equals $1$. Hence $\alpha$ has infinite order in $\mathbb Z[\sqrt2]^\times$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Routing:** Ring Theory is primary because the problem concerns the unit group of a quadratic integer ring.
- **Source status:** The problem is from [S1, Ch. 13, §13.9, Ex. 9.1, printed p. 411, PDF p. 423]. The norm and order argument are independent.
