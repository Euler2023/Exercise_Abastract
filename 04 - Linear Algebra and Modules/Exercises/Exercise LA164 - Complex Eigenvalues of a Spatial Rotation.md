---
title: "Exercise LA164: Complex Eigenvalues of a Spatial Rotation"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - rotations
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §1, Ex. 1.2, printed p. 150, PDF p. 162"
created: 2026-08-24
---

# Exercise LA164: Complex Eigenvalues of a Spatial Rotation

## Problem Statement

> [!question] Exercise 1.2
> What are the complex eigenvalues of the matrix $A$ that represents a rotation of $\mathbb R^3$ through the angle $\theta$ about a pole $u$?

## Hints

> [!hint]- Hint 1
> Split $\mathbb R^3$ as the rotation axis and its orthogonal plane.

## Solution

> [!success]- Solution
> The pole is fixed, so $Au=u$ and $1$ is an eigenvalue. On $u^\perp$, the operator is a planar rotation through $\theta$, whose complex eigenvalues are $e^{i\theta}$ and $e^{-i\theta}$. Hence the multiset of complex eigenvalues is
>
> $$
> \{1,e^{i\theta},e^{-i\theta}\}.
> $$
>
> For $\theta=0$ all three eigenvalues are $1$; for $\theta=\pi$ they are $1,-1,-1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** [S1, Ch. 5, §1, Ex. 1.2, printed p. 150, PDF p. 162]; independent derivation.

