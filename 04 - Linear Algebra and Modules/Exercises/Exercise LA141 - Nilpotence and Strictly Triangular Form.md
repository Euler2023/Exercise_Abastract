---
title: "Exercise LA141: Nilpotence and Strictly Triangular Form"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - nilpotent-operators
  - triangularization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.8, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA141: Nilpotence and Strictly Triangular Form

## Problem Statement

> [!question] Exercise 6.8
> Prove that $T$ is nilpotent if and only if some basis makes its matrix upper triangular with all diagonal entries zero.

## Hints

> [!hint]- Hint 1
> For a nilpotent operator, adapt a basis to the filtration $0\subseteq\ker T\subseteq\ker T^2\subseteq\cdots$.

## Solution

> [!success]- Solution
> If $T^N=0$, extend a basis of $\ker T$ successively to bases of $\ker T^2,\ker T^3,\ldots,V$. Because $T(\ker T^j)\subseteq\ker T^{j-1}$, each basis vector is sent into the span of earlier basis vectors. The matrix is therefore upper triangular with zero diagonal.
>
> Conversely, a strictly upper triangular $n\times n$ matrix has zero $n$th power: each multiplication moves every possible nonzero entry at least one diagonal farther upward. Hence $T^n=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA31 - Inverse of Identity Plus a Nilpotent Matrix|Exercise LA31]]

## Notes

- **Source status:** [S1, Ch. 4, §6, Ex. 6.8, printed p. 129, PDF p. 141]; independent solution.

