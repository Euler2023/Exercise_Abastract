---
title: "Exercise LA81: Independence of $x^2$, $\\cos x$, and $e^x$"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-independence
  - function-spaces
  - derivatives
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.3, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA81: Independence of $x^2$, $\cos x$, and $e^x$

## Problem Statement

> [!question] Exercise 3.3
> Prove that the functions $x^2$, $\cos x$, and $e^x$ are linearly independent.

## Hints

> [!hint]- Hint 1
> Assume a linear relation, then evaluate it and its derivative at $x=0$.

## Solution

> [!success]- Solution
> Suppose
> 
> $$
> ax^2+b\cos x+ce^x=0
> $$
> 
> for all $x$. At $x=0$ this gives $b+c=0$. Differentiating and evaluating at $0$ gives $c=0$, hence $b=0$. The original relation is then $ax^2=0$ for all $x$, so $a=0$. Thus only the trivial linear relation exists.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.3, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
