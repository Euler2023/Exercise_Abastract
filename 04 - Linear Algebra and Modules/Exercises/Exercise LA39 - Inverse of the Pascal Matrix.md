---
title: "Exercise LA39: Inverse of the Pascal Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - binomial-coefficients
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.6, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA39: Inverse of the Pascal Matrix

## Problem Statement

> [!question] Exercise 2.6
> Find the inverse of
> 
> $$
> P=\begin{bmatrix}
> 1&0&0&0&0\\
> 1&1&0&0&0\\
> 1&2&1&0&0\\
> 1&3&3&1&0\\
> 1&4&6&4&1
> \end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Try alternating the signs in each row of Pascal coefficients.

## Solution

> [!success]- Solution
> The inverse is
> 
> $$
> P^{-1}=\begin{bmatrix}
> 1&0&0&0&0\\
> -1&1&0&0&0\\
> 1&-2&1&0&0\\
> -1&3&-3&1&0\\
> 1&-4&6&-4&1
> \end{bmatrix}.
> $$
> 
> In general, $P_{ij}=\binom{i-1}{j-1}$ and $(P^{-1})_{ij}=(-1)^{i-j}\binom{i-1}{j-1}$ for $i\ge j$. Their product has $(i,j)$ entry
> 
> $$
> \sum_{k=j}^{i}(-1)^{k-j}\binom{i-1}{k-1}\binom{k-1}{j-1}
> =\binom{i-1}{j-1}(1-1)^{i-j},
> $$
> 
> which is $1$ for $i=j$ and $0$ otherwise.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.6, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
