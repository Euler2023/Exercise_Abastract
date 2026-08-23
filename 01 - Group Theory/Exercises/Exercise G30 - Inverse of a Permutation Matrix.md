---
title: "Exercise G30: Inverse of a Permutation Matrix"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - permutations
  - permutation-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 5, Ex. 5.3, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise G30: Inverse of a Permutation Matrix

## Problem Statement

> [!question] Exercise 5.3
> Prove that the inverse of a permutation matrix $P$ is its transpose.

## Hints

> [!hint]- Hint 1
> The columns of $P$ are the standard basis vectors in some order.

## Solution

> [!success]- Solution
> Every row and every column of $P$ contains exactly one $1$. Therefore distinct columns are orthogonal and each column has squared length $1$. Thus
> 
> $$
> P^{\mathsf T}P=I.
> $$
> 
> The same argument with rows gives $PP^{\mathsf T}=I$. Hence
> 
> $$
> P^{-1}=P^{\mathsf T}.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §5, Ex. 5.3, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
