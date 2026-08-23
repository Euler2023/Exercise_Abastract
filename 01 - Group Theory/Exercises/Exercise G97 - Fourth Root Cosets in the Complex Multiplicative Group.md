---
title: "Exercise G97: Fourth-Root Cosets in the Complex Multiplicative Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - quotient-groups
  - roots-of-unity
  - complex-numbers
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 12, Ex. 12.4, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise G97: Fourth-Root Cosets in the Complex Multiplicative Group

## Problem Statement

> [!question] Exercise 12.4
> Let $H=\{\pm1,\pm i\}\le\mathbb C^\times$. Describe its cosets explicitly. Is $\mathbb C^\times/H\cong\mathbb C^\times$?

## Hints

> [!hint]- Hint 1
> Use the fourth-power homomorphism.

## Solution

> [!success]- Solution
> For $z\ne0$,
> 
> $$
> zH=\{z,iz,-z,-iz\},
> $$
> 
> the four quarter-turn rotations of $z$. Consider
> 
> $$
> \varphi:\mathbb C^\times\to\mathbb C^\times,qquad\varphi(z)=z^4.
> $$
> 
> It is surjective because every nonzero complex number has a fourth root, and its kernel is exactly $H$. The First Isomorphism Theorem gives
> 
> $$
> \mathbb C^\times/H\cong\mathbb C^\times.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §12, Ex. 12.4, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
