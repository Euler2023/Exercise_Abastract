---
title: "Exercise G66: Counting Equivalence Relations on Five Elements"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - equivalence-relations
  - partitions
  - counting
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 7, Ex. 7.6, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G66: Counting Equivalence Relations on Five Elements

## Problem Statement

> [!question] Exercise 7.6
> How many equivalence relations can be defined on a set of five elements?

## Hints

> [!hint]- Hint 1
> Equivalence relations correspond bijectively to set partitions.

## Solution

> [!success]- Solution
> The number is the Bell number $B_5$. Partition by the size $k$ of the block containing a fixed element. Using $B_0=1,B_1=1,B_2=2,B_3=5,B_4=15$,
> 
> $$
> B_5=\sum_{k=1}^5\binom4{k-1}B_{5-k}
> =15+4\cdot5+6\cdot2+4\cdot1+1=52.
> $$
> 
> Therefore there are $52$ equivalence relations.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §7, Ex. 7.6, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
