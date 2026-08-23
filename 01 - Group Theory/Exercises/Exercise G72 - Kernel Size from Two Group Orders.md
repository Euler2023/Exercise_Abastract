---
title: "Exercise G72: Kernel Size from Two Group Orders"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - homomorphisms
  - kernel
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.6, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G72: Kernel Size from Two Group Orders

## Problem Statement

> [!question] Exercise 8.6
> Let $\varphi:G\to G'$ be nontrivial with $|G|=18$ and $|G'|=15$. Determine $|\ker\varphi|$.

## Hints

> [!hint]- Hint 1
> The image order divides both group orders.

## Solution

> [!success]- Solution
> The image order divides $18$ by the First Isomorphism Theorem and divides $15$ as a subgroup of $G'$. Thus it divides $\gcd(18,15)=3$. Since the homomorphism is nontrivial, the image order is not $1$, so it is $3$. Therefore
> 
> $$
> |\ker\varphi|=\frac{|G|}{|\operatorname{im}\varphi|}=\frac{18}{3}=6.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.6, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
