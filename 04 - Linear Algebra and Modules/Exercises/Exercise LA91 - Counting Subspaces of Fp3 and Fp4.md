---
title: "Exercise LA91: Counting Subspaces of $\\mathbb F_p^3$ and $\\mathbb F_p^4$"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - subspaces
  - gaussian-binomial-coefficients
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 4, Ex. 4.5, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA91: Counting Subspaces of $\mathbb F_p^3$ and $\mathbb F_p^4$

## Problem Statement

> [!question] Exercise 4.5
> How many subspaces of each dimension are there in **(a)** $\mathbb F_p^3$ and **(b)** $\mathbb F_p^4$?

## Hints

> [!hint]- Hint 1
> Count ordered independent $k$-tuples and divide by the number of ordered bases of $\mathbb F_p^k$.

> [!hint]- Hint 2
> Use the symmetry between dimensions $k$ and $n-k$.

## Solution

> [!success]- Solution
> The number of $k$-dimensional subspaces of $\mathbb F_p^n$ is the Gaussian binomial coefficient
> 
> $$
> {n\brack k}_p=\prod_{i=0}^{k-1}\frac{p^n-p^i}{p^k-p^i}.
> $$
> 
> For $n=3$, the counts in dimensions $0,1,2,3$ are
> 
> $$
> 1,\quad p^2+p+1,\quad p^2+p+1,\quad1.
> $$
> 
> For $n=4$, the counts in dimensions $0,1,2,3,4$ are
> 
> $$
> 1,\quad p^3+p^2+p+1,\quad (p^2+1)(p^2+p+1),\quad p^3+p^2+p+1,\quad1.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §4, Ex. 4.5, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
