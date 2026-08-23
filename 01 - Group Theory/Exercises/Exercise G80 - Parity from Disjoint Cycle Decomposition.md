---
title: "Exercise G80: Parity from Disjoint-Cycle Decomposition"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - parity
  - cycle-notation
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 10, Ex. 10.1, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G80: Parity from Disjoint-Cycle Decomposition

## Problem Statement

> [!question] Exercise 10.1
> Describe how to determine from disjoint-cycle decomposition whether a permutation is odd or even.

## Hints

> [!hint]- Hint 1
> A $k$-cycle is a product of $k-1$ transpositions.

## Solution

> [!success]- Solution
> If the nontrivial disjoint cycles have lengths $k_1,\ldots,k_r$, then
> 
> $$
> \operatorname{sgn}(p)=(-1)^{\sum_i(k_i-1)}.
> $$
> 
> Equivalently, each even-length cycle is odd and each odd-length cycle is even, so the permutation is odd exactly when the number of even-length cycles is odd. Including fixed points, another form is $\operatorname{sgn}(p)=(-1)^{n-c}$, where $c$ is the total number of cycles.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §10, Ex. 10.1, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
