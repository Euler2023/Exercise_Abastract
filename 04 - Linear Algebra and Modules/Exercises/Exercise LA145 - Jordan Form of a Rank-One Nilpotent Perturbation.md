---
title: "Exercise LA145: Jordan Form of a Rank-One Nilpotent Perturbation"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-form
  - nilpotent-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.1, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA145: Jordan Form of a Rank-One Nilpotent Perturbation

## Problem Statement

> [!question] Exercise 7.1
> Determine the Jordan form of $A=\begin{pmatrix}1&1&0\\0&1&0\\0&1&1\end{pmatrix}$.

## Hints

> [!hint]- Hint 1
> Study $N=A-I$: compute its rank and square.

## Solution

> [!success]- Solution
> Here $N=A-I$ is nonzero of rank $1$ and $N^2=0$. Thus its nilpotent Jordan blocks have sizes at most $2$, and rank one forces exactly one block of size $2$ and one block of size $1$. Therefore
>
> $$
> J_A=J_2(1)\oplus[1].
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** The matrix was visually checked at [S1, Ch. 4, §7, Ex. 7.1, printed p. 129, PDF p. 141]. The solution is independent.

