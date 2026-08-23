---
title: "Exercise G52: A Fractional-Linear Model of $S_3$"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - isomorphisms
  - symmetric-groups
  - mobius-transformations
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.3, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G52: A Fractional-Linear Model of $S_3$

## Problem Statement

> [!question] Exercise 6.3
> Show that $f(x)=1/x$ and $g(x)=(x-1)/x$ generate, under composition, a group isomorphic to $S_3$.

## Hints

> [!hint]- Hint 1
> Check $f^2=g^3=1$ and $fgf=g^{-1}$.

## Solution

> [!success]- Solution
> Direct composition gives
> 
> $$
> f^2=1,\qquad g^2(x)=\frac1{1-x},\qquad g^3=1,
> $$
> 
> and $fgf=g^{-1}$. Hence every word reduces to one of
> 
> $$
> 1,\ f,\ g,\ g^2,\ fg,\ fg^2.
> $$
> 
> These are the six distinct functions
> 
> $$
> x,\quad \frac1x,\quad \frac{x-1}{x},\quad \frac1{1-x},
> \quad \frac{x}{x-1},\quad1-x.
> $$
> 
> The relations are the standard presentation $\langle f,g\mid f^2=g^3=1,\ fgf=g^{-1}\rangle$ of $S_3$, so the generated group is isomorphic to $S_3$.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.3, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
