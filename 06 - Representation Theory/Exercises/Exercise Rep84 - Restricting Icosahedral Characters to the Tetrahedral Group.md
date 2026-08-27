---
title: "Exercise Rep84: Restricting Icosahedral Characters to the Tetrahedral Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.8, printed p. 319, PDF p. 331"
created: 2026-08-27
---

# Exercise Rep84: Restricting Icosahedral Characters to the Tetrahedral Group

## Problem Statement

> [!question] Exercise 6.8
> The stabilizer in the icosahedral group of one of the cubes inscribed in a dodecahedron is the tetrahedral group $T$. Decompose the restrictions to $T$ of the irreducible characters of $I$.

## Hints

> [!hint]- Hint 1
> Restrict the $A_5$ table to the identity, order-two, and order-three classes of $A_4$.

## Solution

> [!success]- Solution
> Write the $A_4$ irreducibles as $1,\lambda,\lambda^2,\tau_3$. Restricting the $A_5$ rows to $A_4$ gives
>
> $$
> \begin{aligned}
> \operatorname{res}(1)&=1,\\
> \operatorname{res}(3)&=\operatorname{res}(3')=\tau_3,\\
> \operatorname{res}(4)&=1\oplus\tau_3,\\
> \operatorname{res}(5)&=\lambda\oplus\lambda^2\oplus\tau_3.
> \end{aligned}
> $$
>
> Indeed the restricted character values are respectively $(1,1,1,1)$, $(3,-1,0,0)$, $(4,0,1,1)$, and $(5,1,-1,-1)$ on the four $A_4$ classes, which equal the displayed sums. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.8, printed p. 319, PDF p. 331]; restrictions independently computed.

