---
title: "Exercise G89: Center of a Product Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - direct-products
  - center
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.5, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G89: Center of a Product Group

## Problem Statement

> [!question] Exercise 11.5
> If $Z_i=Z(G_i)$, prove $Z(G_1\times G_2)=Z_1\times Z_2$.

## Hints

> [!hint]- Hint 1
> Commutation in a direct product is coordinatewise.

## Solution

> [!success]- Solution
> The pair $(x_1,x_2)$ commutes with every $(g_1,g_2)$ exactly when
> 
> $$
> x_1g_1=g_1x_1\quad\text{and}\quad x_2g_2=g_2x_2
> $$
> 
> for every choice of $g_1,g_2$. This is equivalent to $x_i\in Z(G_i)$ for both coordinates. Hence the center is $Z_1\times Z_2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.5, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
