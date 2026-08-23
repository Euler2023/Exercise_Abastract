---
title: "Exercise G93: When a Product Set of Subgroups Is a Subgroup"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - product-sets
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.9, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G93: When a Product Set of Subgroups Is a Subgroup

## Problem Statement

> [!question] Exercise 11.9
> For subgroups $H,K\le G$, prove $HK$ is a subgroup if and only if $HK=KH$.

## Hints

> [!hint]- Hint 1
> Use $HKHK=H(KH)K$ in one direction and inverses in the other.

## Solution

> [!success]- Solution
> If $HK=KH$, then
> 
> $$
> (HK)(HK)=H(KH)K=HHKK=HK,
> $$
> 
> and
> 
> $$
> (HK)^{-1}=K^{-1}H^{-1}=KH=HK.
> $$
> 
> Thus $HK$ is a subgroup.
> 
> Conversely, if $HK$ is a subgroup, then it is closed under inverses, so
> 
> $$
> HK=(HK)^{-1}=KH.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.9, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
