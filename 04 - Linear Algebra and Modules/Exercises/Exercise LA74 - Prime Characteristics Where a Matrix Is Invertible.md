---
title: "Exercise LA74: Prime Characteristics Where a Matrix Is Invertible"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - finite-fields
  - invertibility
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.5, printed p. 98, PDF p. 110"
created: 2026-08-23
---

# Exercise LA74: Prime Characteristics Where a Matrix Is Invertible

## Problem Statement

> [!question] Exercise 1.5
> Determine the primes $p$ for which
> 
> $$
> A=\begin{pmatrix}1&2&0\\0&3&-1\\-2&0&2\end{pmatrix}
> $$
> 
> is invertible over $\mathbb F_p$.

## Hints

> [!hint]- Hint 1
> Compute the integer determinant and reduce it modulo $p$.

## Solution

> [!success]- Solution
> Expansion along the first row gives
> 
> $$
> \det A=1\cdot6-2\cdot(-2)=10.
> $$
> 
> The reduction of $A$ modulo $p$ is invertible exactly when $10\not\equiv0\pmod p$. Hence it is invertible for every prime except
> 
> $$
> p=2\quad\text{or}\quad p=5.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.5, printed p. 98, PDF p. 110]. The solution is an independent derivation for this vault, not a solution printed in Artin.
