---
title: "Exercise G43: Generating Symmetric and Alternating Groups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - alternating-groups
  - generators
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.11, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G43: Generating Symmetric and Alternating Groups

## Problem Statement

> [!question] Exercise 4.11
> **(a)** Prove that transpositions generate $S_n$.
> 
> **(b)** For $n\ge3$, prove that $3$-cycles generate $A_n$.

## Hints

> [!hint]- Hint 1
> Break each disjoint cycle into transpositions.

> [!hint]- Hint 2
> Pair the transpositions in an even permutation.

## Solution

> [!success]- Solution
> Every cycle satisfies
> 
> $$
> (a_1a_2\cdots a_k)=(a_1a_k)\cdots(a_1a_3)(a_1a_2),
> $$
> 
> so disjoint-cycle decomposition proves that transpositions generate $S_n$.
> 
> An even permutation is a product of an even number of transpositions. Pair them. If two transpositions share a letter, their product is a $3$-cycle; for example $(ab)(ac)=(acb)$. If they are disjoint, then
> 
> $$
> (ab)(cd)=(acb)(acd).
> $$
> 
> Thus every pair is a product of $3$-cycles, and these generate $A_n$.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.11, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
