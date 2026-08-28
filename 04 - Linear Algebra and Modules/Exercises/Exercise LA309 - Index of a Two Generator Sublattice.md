---
title: "Exercise LA309: Index of a Two-Generator Sublattice"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 10, About Lattices, Ex. 10.1, printed p. 411, PDF p. 423"
created: 2026-08-28
---

# Exercise LA309: Index of a Two-Generator Sublattice

## Problem Statement

> [!question] Exercise 10.1
> Let $M$ be the integer lattice in $\mathbb R^2$, and let $L$ be the lattice with basis $((2,3)^{\mathsf T},(3,6)^{\mathsf T})$. Determine the index $[M:L]$.

## Hints

> [!hint]- Hint 1
> Put the two basis vectors into the columns of an integer matrix and take the absolute determinant.

## Solution

> [!success]- Solution
> Relative to the standard basis of $M=\mathbb Z^2$, the basis matrix of $L$ is
>
> $$
> A=\begin{pmatrix}2&3\\3&6\end{pmatrix}.
> $$
>
> Therefore
>
> $$
> [M:L]=|\det A|=|12-9|=\boxed{3}.
> $$
>
> Equivalently, the fundamental parallelogram of $L$ has three times the area of the unit square for $M$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Linear Algebra and Modules is primary because a determinant of a change-of-basis matrix computes the lattice index.
- **Source status:** The problem is from [S1, Ch. 13, §13.10, Ex. 10.1, printed p. 411, PDF p. 423]. The determinant computation is independent.
