---
title: "Exercise Rep77: Sum of the Regular Representation Matrices"
topic: representation-theory
difficulty: beginner
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.1, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep77: Sum of the Regular Representation Matrices

## Problem Statement

> [!question] Exercise 6.1
> Let $R^{\mathrm{reg}}$ denote the regular matrix representation of a group $G$. Determine $\sum_g R_g^{\mathrm{reg}}$.

## Hints

> [!hint]- Hint 1
> For fixed basis elements $e_h,e_k$, exactly one $g$ sends $e_h$ to $e_k$.

## Solution

> [!success]- Solution
> In the basis $\{e_h:h\in G\}$, left multiplication gives $R_g e_h=e_{gh}$. For each ordered pair $(k,h)$ there is exactly one element $g=kh^{-1}$ with $gh=k$. Hence every matrix entry of the sum is $1$:
>
> $$
> \sum_{g\in G}R_g^{\mathrm{reg}}=J_{|G|},
> $$
>
> the all-ones matrix. Equivalently it sends $\sum_h a_he_h$ to $(\sum_h a_h)\sum_k e_k$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.1, printed p. 318, PDF p. 330].

