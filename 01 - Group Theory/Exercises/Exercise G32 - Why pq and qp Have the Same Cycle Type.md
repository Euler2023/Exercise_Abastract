---
title: "Exercise G32: Why $pq$ and $qp$ Have the Same Cycle Type"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - permutations
  - conjugation
  - cycle-notation
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 5, Ex. 5.5, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise G32: Why $pq$ and $qp$ Have the Same Cycle Type

## Problem Statement

> [!question] Exercise 5.5
> In Artin's examples, $qp$ and $pq$ are different but both are $3$-cycles. Is this an accident?

## Hints

> [!hint]- Hint 1
> Relate $pq$ to $qp$ by conjugation.

## Solution

> [!success]- Solution
> It is not an accident. For any permutations $p,q$,
> 
> $$
> p(qp)p^{-1}=pq.
> $$
> 
> Thus $pq$ and $qp$ are conjugate. Conjugating a permutation merely relabels every entry in its disjoint cycles, so conjugate permutations have the same cycle lengths. In Artin's particular example $qp=(135)$ and $pq=(234)$; both must therefore be $3$-cycles.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §5, Ex. 5.5, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
