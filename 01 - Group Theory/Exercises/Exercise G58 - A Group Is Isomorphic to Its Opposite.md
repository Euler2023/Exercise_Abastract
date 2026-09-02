---
title: "Exercise G58: A Group Is Isomorphic to Its Opposite"
topic: group-theory
difficulty: beginner
status: completed
tags:
  - exercise
  - group-theory
  - opposite-groups
  - isomorphisms
source: Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.9, printed p. 72, PDF p. 84
created: 2026-08-23
---

# Exercise G58: A Group Is Isomorphic to Its Opposite

## Problem Statement

> [!question] Exercise 6.9
> Prove that every group $G$ is isomorphic to its opposite group $G^{\mathrm{op}}$.

## Hints

> [!hint]- Hint 1
> Use the inversion map.

## Solution

> [!success]- Solution
> Define $\iota:G\to G^{\mathrm{op}}$ by $\iota(a)=a^{-1}$. If $*$ denotes the reversed product in the opposite group, then
> 
> $$
> \iota(ab)=(ab)^{-1}=b^{-1}a^{-1}=a^{-1}*b^{-1}=\iota(a)*\iota(b).
> $$
> 
> Inversion is bijective and is its own inverse. Thus $\iota$ is an isomorphism.

## Related Concepts

- [[01 - Group Theory/Concepts/Opposite Groups|Opposite Groups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.9, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
