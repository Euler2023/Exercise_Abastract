---
title: "Exercise R30: Primitive Integer Columns"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - bezout-identity
  - integer-matrices
  - coprime-integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.1, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise R30: Primitive Integer Columns

## Problem Statement

> [!question] Exercise M.1
> Describe the column vectors $(a,c)^t$ that occur as the first column of an integer matrix $A$ whose inverse is also an integer matrix.

## Hints

> [!hint]- Hint 1
> For an integer matrix with integer inverse, the determinant is $\pm1$.

> [!hint]- Hint 2
> Use Bézout's identity to construct the second column.

## Solution

> [!success]- Solution
> The required vectors are exactly the primitive integer vectors, namely those satisfying $\gcd(a,c)=1$.
> 
> Indeed, if
> 
> $$
> A=\begin{pmatrix}a&b\\c&d\end{pmatrix}
> $$
> 
> and $A^{-1}$ has integer entries, then $\det A$ is an integer unit, so $ad-bc=\pm1$. Hence every common divisor of $a$ and $c$ divides $1$.
> 
> Conversely, if $\gcd(a,c)=1$, Bézout's identity gives integers $d$ and $b$ with $ad-bc=1$. The displayed matrix then has integer inverse
> 
> $$
> A^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.1, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
