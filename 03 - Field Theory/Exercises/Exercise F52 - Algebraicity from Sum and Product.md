---
title: "Exercise F52: Algebraicity from Sum and Product"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-elements
  - transitivity
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.8, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F52: Algebraicity from Sum and Product

## Problem Statement

> [!question] Exercise 3.8
> Let $\alpha$ and $\beta$ be complex numbers. Prove that if $\alpha+\beta$ and $\alpha\beta$ are algebraic numbers, then $\alpha$ and $\beta$ are also algebraic numbers.

## Hints

> [!hint]- Hint 1
> Regard $\alpha$ and $\beta$ as the two roots of one quadratic polynomial.

## Solution

> [!success]- Solution
> Set $s=\alpha+\beta$ and $p=\alpha\beta$. By hypothesis, $s$ and $p$ are algebraic over $\mathbb Q$, so $E=\mathbb Q(s,p)$ is a finite extension of $\mathbb Q$.
>
> Both $\alpha$ and $\beta$ are roots of
>
> $$
> x^2-sx+p\in E[x].
> $$
>
> Hence each is algebraic of degree at most $2$ over $E$. Since $E/\mathbb Q$ is algebraic, transitivity of algebraicity shows that both $\alpha$ and $\beta$ are algebraic over $\mathbb Q$.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

- **Routing:** Field Theory is primary because the elementary symmetric functions place both numbers in a finite algebraic tower.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.8, printed p. 473, PDF p. 485]. The proof is independent.
