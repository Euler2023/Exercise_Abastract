---
title: "Exercise R47: Nonzero Gaussian Ideals Meet the Integers"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - gaussian-integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.2, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R47: Nonzero Gaussian Ideals Meet the Integers

## Problem Statement

> [!question] Exercise 3.2
> Prove that every nonzero ideal in the ring of Gaussian integers contains a nonzero integer.

## Hints

> [!hint]- Hint 1
> Multiply a nonzero Gaussian integer by its complex conjugate.

## Solution

> [!success]- Solution
> Let $I\ne0$ be an ideal of $\mathbb Z[i]$ and choose $z=a+bi\in I$, $z\ne0$. Since $\overline z=a-bi\in\mathbb Z[i]$ and $I$ absorbs multiplication,
>
> $$
> z\overline z=a^2+b^2\in I.
> $$
>
> This is a positive ordinary integer, so $I\cap\mathbb Z$ contains a nonzero element.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.2, printed p. 354, PDF p. 366]. The norm argument is independent.

