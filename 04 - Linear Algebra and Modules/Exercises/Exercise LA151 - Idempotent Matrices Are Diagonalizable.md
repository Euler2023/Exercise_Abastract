---
title: "Exercise LA151: Idempotent Matrices Are Diagonalizable"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - idempotents
  - diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.7, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA151: Idempotent Matrices Are Diagonalizable

## Problem Statement

> [!question] Exercise 7.7
> Is every complex square matrix $A$ satisfying $A^2=A$ diagonalizable?

## Hints

> [!hint]- Hint 1
> Its minimal polynomial divides $t(t-1)$.

## Solution

> [!success]- Solution
> Yes. The identity $A(A-I)=0$ shows that the minimal polynomial divides $t(t-1)$, which has distinct roots. Hence $A$ is diagonalizable, with diagonal entries only $0$ and $1$. Equivalently, $V=\ker A\oplus\operatorname{im}A$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source status:** [S1, Ch. 4, §7, Ex. 7.7, printed p. 129, PDF p. 141]; independent solution.

