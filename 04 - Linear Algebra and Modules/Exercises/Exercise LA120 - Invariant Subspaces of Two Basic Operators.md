---
title: "Exercise LA120: Invariant Subspaces of Two Basic Operators"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - invariant-subspaces
  - diagonal-operators
  - Jordan-blocks
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.5, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA120: Invariant Subspaces of Two Basic Operators

## Problem Statement

> [!question] Exercise 4.5
> Find all invariant subspaces of the real operators with matrices
>
> $$
> \text{(a) }\begin{pmatrix}1&1\\0&1\end{pmatrix},
> \qquad
> \text{(b) }\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> A one-dimensional invariant subspace is an eigenline. In (b), use polynomials that project onto individual eigenspaces.

## Solution

> [!success]- Solution
> (a) The only eigenline is $\mathbb Re_1$. Thus the invariant subspaces are $0$, $\mathbb Re_1$, and $\mathbb R^2$.
>
> (b) The eigenvalues are distinct. If $W$ is invariant, applying the Lagrange interpolation polynomials in $T$ shows that every coordinate component of each $w\in W$ also lies in $W$. Hence $W$ is spanned by a subset of $e_1,e_2,e_3$. The eight invariant subspaces are therefore $0$, the three coordinate lines, the three coordinate planes, and $\mathbb R^3$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source status:** Both displayed matrices were visually checked at [S1, Ch. 4, §4, Ex. 4.5, printed p. 127, PDF p. 139]. The solution is independent.

