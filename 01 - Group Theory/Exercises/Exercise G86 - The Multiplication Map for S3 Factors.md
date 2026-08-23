---
title: "Exercise G86: The Multiplication Map for $S_3$ Factors"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - product-groups
  - symmetric-groups
  - semidirect-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.2, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G86: The Multiplication Map for $S_3$ Factors

## Problem Statement

> [!question] Exercise 11.2
> What does Proposition 2.11.4 say for the usual subgroups $K=\langle y\rangle$ and $H=\langle x\rangle$ of $S_3$, where $|x|=3$ and $|y|=2$?

## Hints

> [!hint]- Hint 1
> Check intersection, product, normality, and commutation separately.

## Solution

> [!success]- Solution
> Here $H\cap K=\{1\}$ and $HK=S_3$, so the multiplication map
> 
> $$
> H\times K\longrightarrow S_3,qquad(h,k)\longmapsto hk
> $$
> 
> is bijective. The subgroup $H=A_3$ is normal, so $HK$ is a subgroup as Proposition 2.11.4(c) predicts. However, $H$ and $K$ do not commute and $K$ is not normal. Thus the bijection is not a homomorphism and $S_3$ is not the direct product $C_3\times C_2$; it is the nontrivial semidirect product $C_3\rtimes C_2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.2, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
