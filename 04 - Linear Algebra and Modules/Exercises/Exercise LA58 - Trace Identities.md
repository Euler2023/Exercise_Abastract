---
title: "Exercise LA58: Trace Identities"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - trace
  - matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.3, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA58: Trace Identities

## Problem Statement

> [!question] Exercise M.3
> For $\operatorname{tr}A=a_{11}+\cdots+a_{nn}$, prove
> 
> $$
> \operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B,
> $$
> 
> $$
> \operatorname{tr}(AB)=\operatorname{tr}(BA),
> $$
> 
> and, for invertible $B$,
> 
> $$
> \operatorname{tr}A=\operatorname{tr}(BAB^{-1}).
> $$

## Hints

> [!hint]- Hint 1
> Expand the diagonal entries of a product as a double sum.

## Solution

> [!success]- Solution
> Linearity follows entrywise:
> 
> $$
> \operatorname{tr}(A+B)=\sum_i(a_{ii}+b_{ii})=\operatorname{tr}A+\operatorname{tr}B.
> $$
> 
> For products,
> 
> $$
> \operatorname{tr}(AB)=\sum_{i,j}a_{ij}b_{ji}
> =\sum_{j,i}b_{ji}a_{ij}=\operatorname{tr}(BA).
> $$
> 
> Applying this cyclic identity once gives
> 
> $$
> \operatorname{tr}(BAB^{-1})=\operatorname{tr}(AB^{-1}B)=\operatorname{tr}A.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.3, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
