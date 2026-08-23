---
title: "Exercise G29: Permutation Matrix of a Four-Cycle"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - permutations
  - permutation-matrices
  - sign
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 5, Ex. 5.2, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise G29: Permutation Matrix of a Four-Cycle

## Problem Statement

> [!question] Exercise 5.2
> Let $p=(1342)$.
> 
> **(a)** Find its permutation matrix $P$.
> 
> **(b)** Write $p$ as a product of transpositions and evaluate the corresponding matrix product.
> 
> **(c)** Determine the sign of $p$.

## Hints

> [!hint]- Hint 1
> Artin's convention puts $e_{p(i)}$ in column $i$.

> [!hint]- Hint 2
> A $4$-cycle is a product of three transpositions.

## Solution

> [!success]- Solution
> The map is $1\mapsto3$, $3\mapsto4$, $4\mapsto2$, $2\mapsto1$. Hence
> 
> $$
> P=\begin{bmatrix}
> 0&1&0&0\\
> 0&0&0&1\\
> 1&0&0&0\\
> 0&0&1&0
> \end{bmatrix}.
> $$
> 
> One transposition factorization is
> 
> $$
> (1342)=(12)(14)(13).
> $$
> 
> Multiplying the three corresponding swap matrices, in this order, gives the displayed $P$. Since the factorization has three transpositions,
> 
> $$
> \operatorname{sgn}(p)=(-1)^3=-1.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §5, Ex. 5.2, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
