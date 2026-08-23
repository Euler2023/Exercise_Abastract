---
title: "Exercise LA173: Derivatives of Matrix Powers, Inverses, and Quotients"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-valued-functions
  - differentiation
  - inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §3, Ex. 3.2, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA173: Derivatives of Matrix Powers, Inverses, and Quotients

## Problem Statement

> [!question] Exercise 3.2
> Let $A(t)$ and $B(t)$ be differentiable matrix-valued functions of $t$. Compute
>
> $$
> \text{(a) }\frac{d}{dt}(A(t)^3),\qquad
> \text{(b) }\frac{d}{dt}(A(t)^{-1}),\qquad
> \text{(c) }\frac{d}{dt}(A(t)^{-1}B(t)).
> $$

## Hints

> [!hint]- Hint 1
> Differentiate $AA^{-1}=I$ before applying the product rule to part (c).

## Solution

> [!success]- Solution
> Suppress the argument $t$ and write $A'=dA/dt$, $B'=dB/dt$. Repeated use of the product rule gives
>
> $$
> \text{(a) }(A^3)'=A'A^2+AA'A+A^2A'.
> $$
>
> Differentiating $AA^{-1}=I$ yields
>
> $$
> A'A^{-1}+A(A^{-1})'=0,
> $$
>
> and therefore
>
> $$
> \text{(b) }(A^{-1})'=-A^{-1}A'A^{-1}.
> $$
>
> Finally,
>
> $$
> \text{(c) }(A^{-1}B)'=-A^{-1}A'A^{-1}B+A^{-1}B'.
> $$
>
> None of these formulas permits arbitrary reordering of the factors.

## Related Concepts

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA172 - Product Rule for Matrix-Valued Functions|Exercise LA172]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Hypothesis boundary:** Parts (b) and (c) apply on intervals where $A(t)$ is invertible.
- **Source status:** All three expressions were visually checked at [S1, Ch. 5, §3, Ex. 3.2, printed p. 151, PDF p. 163]. The derivation is independent.

