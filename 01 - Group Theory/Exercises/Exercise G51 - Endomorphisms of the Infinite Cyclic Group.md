---
title: "Exercise G51: Endomorphisms of the Infinite Cyclic Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - homomorphisms
  - cyclic-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.2, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G51: Endomorphisms of the Infinite Cyclic Group

## Problem Statement

> [!question] Exercise 6.2
> Describe all homomorphisms $\varphi:\mathbb Z^+\to\mathbb Z^+$. Determine which are injective, surjective, and isomorphisms.

## Hints

> [!hint]- Hint 1
> A homomorphism is determined by $\varphi(1)$.

## Solution

> [!success]- Solution
> Let $k=\varphi(1)$. Additivity gives
> 
> $$
> \varphi(n)=kn
> $$
> 
> for every $n\in\mathbb Z$, and every integer $k$ defines such a homomorphism. It is injective exactly when $k\ne0$. Its image is $k\mathbb Z$, so it is surjective exactly when $k=\pm1$. Therefore the isomorphisms are precisely $n\mapsto n$ and $n\mapsto-n$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.2, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
