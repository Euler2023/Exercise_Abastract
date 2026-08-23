---
title: "Exercise LA64: Area and the Two-by-Two Determinant"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - area
  - elementary-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.9, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA64: Area and the Two-by-Two Determinant

## Problem Statement

> [!question] Exercise M.9
> Let $A$ be a real $2\times2$ matrix with columns $A_1,A_2$, and let $P$ be their parallelogram. Determine the effect of elementary row operations on its area and prove
> 
> $$
> \operatorname{area}(P)=|\det A|.
> $$

## Hints

> [!hint]- Hint 1
> Interpret a row operation as an elementary linear transformation of the plane.

## Solution

> [!success]- Solution
> A row shear preserves area, because it slides horizontal (or vertical) cross-sections without changing their lengths. Interchanging two rows is reflection in the line $x=y$ and also preserves area. Multiplying one row by $c\ne0$ scales one coordinate direction and multiplies area by $|c|$.
> 
> These are exactly the absolute determinant factors of the three elementary matrices: $1$, $1$, and $|c|$.
> 
> If $A$ is invertible, row-reduce it to $I$. At every step the area multiplier agrees with the multiplier of $|\det|$. Since the unit square has area $1=|\det I|$, reversing the operations yields
> 
> $$
> \operatorname{area}(P)=|\det A|.
> $$
> 
> If $A$ is singular, its columns are collinear, so the parallelogram has area $0$, agreeing with $\det A=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.9, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
