---
title: "Exercise LA152: Every Complex Matrix Is Similar to Its Transpose"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - transpose
  - similarity
  - jordan-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.8, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA152: Every Complex Matrix Is Similar to Its Transpose

## Problem Statement

> [!question] Exercise 7.8
> Is every complex square matrix $A$ similar to its transpose?

## Hints

> [!hint]- Hint 1
> Transposing a Jordan block reverses the side on which its ones appear; reverse the Jordan basis.

## Solution

> [!success]- Solution
> Yes. Each Jordan block $J_k(\lambda)$ is similar to its transpose by the permutation matrix that reverses the order of the $k$ basis vectors. If $A=PJP^{-1}$, then $A^t=(P^{-1})^tJ^tP^t$, and $J^t$ is similar to $J$ block by block. Therefore $A^t$ is similar to $A$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** [S1, Ch. 4, §7, Ex. 7.8, printed p. 129, PDF p. 141]; independent solution.

