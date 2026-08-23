---
title: "Exercise LA128: Real Eigenvalues of Two by Two Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
  - discriminants
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.5, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA128: Real Eigenvalues of Two by Two Matrices

## Problem Statement

> [!question] Exercise 5.5
> Which real $2\times2$ matrices have real eigenvalues? Prove that the eigenvalues are real if the off-diagonal entries have the same sign.

## Hints

> [!hint]- Hint 1
> Compute the discriminant of $t^2-(a+d)t+(ad-bc)$.

## Solution

> [!success]- Solution
> For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, the discriminant is
>
> $$
> \Delta=(a+d)^2-4(ad-bc)=(a-d)^2+4bc.
> $$
>
> Thus $A$ has real eigenvalues exactly when $\Delta\ge0$. If $b,c$ have the same sign (including either being zero), then $bc\ge0$, so $\Delta\ge0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, §5, Ex. 5.5, printed p. 128, PDF p. 140]; independent solution.

