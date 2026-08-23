---
title: "Exercise LA166: Geometry of an Orientation-Reversing Orthogonal Operator"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-matrices
  - improper-rotations
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §1, Ex. 1.4, printed p. 150, PDF p. 162"
created: 2026-08-24
---

# Exercise LA166: Geometry of an Orientation-Reversing Orthogonal Operator

## Problem Statement

> [!question] Exercise 1.4
> Describe geometrically the action of an orthogonal $3\times3$ matrix with determinant $-1$.

## Hints

> [!hint]- Hint 1
> Show that $-1$ is an eigenvalue and examine the orthogonal plane perpendicular to a corresponding eigenvector.

## Solution

> [!success]- Solution
> Let $A\in O_3$ with $\det A=-1$. Its eigenvalues have absolute value $1$, and the nonreal ones occur as a conjugate pair. Their product is $1$, so the remaining real eigenvalue is $-1$. Choose a unit vector $u$ with $Au=-u$.
>
> The plane $u^\perp$ is $A$-invariant. The restriction $A|_{u^\perp}$ has determinant $1$, hence is a planar rotation through some angle $\theta$. Therefore $A$ reverses the axis $\mathbb Ru$ and rotates its perpendicular plane. Equivalently, it is a rotation about $\mathbb Ru$ followed by reflection in the plane $u^\perp$.
>
> When $\theta=0$ this is an ordinary plane reflection; when $\theta=\pi$ it is $-I$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 5, §1, Ex. 1.4, printed p. 150, PDF p. 162]; independent geometric classification.

