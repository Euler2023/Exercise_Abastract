---
title: "Exercise G60: A Normal Subgroup of Order Two Is Central"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - center
  - involutions
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.11, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G60: A Normal Subgroup of Order Two Is Central

## Problem Statement

> [!question] Exercise 6.11
> Let $a\in G$. If $\{1,a\}$ is a normal subgroup, prove $a\in Z(G)$.

## Hints

> [!hint]- Hint 1
> Conjugation must permute the two elements and must fix the identity.

## Solution

> [!success]- Solution
> For every $g\in G$, normality gives
> 
> $$
> gag^{-1}\in\{1,a\}.
> $$
> 
> It cannot equal $1$ unless $a=1$, in which case the conclusion is immediate. Thus $gag^{-1}=a$ for every $g$, equivalently $ga=ag$. Hence $a\in Z(G)$.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.11, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
