---
title: "Exercise G92: Homomorphisms into a Product Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - homomorphisms
  - direct-products
  - universal-property
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.8, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G92: Homomorphisms into a Product Group

## Problem Statement

> [!question] Exercise 11.8
> Establish a bijection between homomorphisms $\Phi:H\to G\times G'$ and pairs of homomorphisms $(\varphi,\varphi')$ from $H$ to the two factors.

## Hints

> [!hint]- Hint 1
> Compose with the two coordinate projections; reverse by pairing values.

## Solution

> [!success]- Solution
> Given $\Phi$, define
> 
> $$
> \varphi=\pi_1\circ\Phi,\qquad \varphi'=\pi_2\circ\Phi.
> $$
> 
> Conversely, given $(\varphi,\varphi')$, set
> 
> $$
> \Phi(h)=(\varphi(h),\varphi'(h)).
> $$
> 
> Coordinatewise multiplication shows that this is a homomorphism. The two constructions are inverse to one another, giving the required bijection.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.8, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
