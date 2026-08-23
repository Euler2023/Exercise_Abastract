---
title: "Exercise LA92: Symmetric and Skew-Symmetric Direct Sum"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - direct-sums
  - symmetric-matrices
  - skew-symmetric-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 5, Ex. 5.1, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA92: Symmetric and Skew-Symmetric Direct Sum

## Problem Statement

> [!question] Exercise 5.1
> Prove that $\mathbb R^{n\times n}$ is the direct sum of the symmetric matrices $(A^t=A)$ and the skew-symmetric matrices $(A^t=-A)$.

## Hints

> [!hint]- Hint 1
> Decompose $A$ using $(A+A^t)/2$ and $(A-A^t)/2$.

> [!hint]- Hint 2
> A matrix that is both symmetric and skew-symmetric must vanish over $\mathbb R$.

## Solution

> [!success]- Solution
> Every real matrix has the decomposition
> 
> $$
> A=\frac{A+A^t}{2}+\frac{A-A^t}{2}.
> $$
> 
> The first summand is symmetric and the second is skew-symmetric. If $C$ belongs to both subspaces, then $C=C^t=-C$, so $2C=0$ and therefore $C=0$ over $\mathbb R$. The intersection is zero, making the sum direct.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §5, Ex. 5.1, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
