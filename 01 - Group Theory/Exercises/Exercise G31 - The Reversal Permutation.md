---
title: "Exercise G31: The Reversal Permutation"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - permutations
  - permutation-matrices
  - sign
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 5, Ex. 5.4, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise G31: The Reversal Permutation

## Problem Statement

> [!question] Exercise 5.4
> For $p(i)=n-i+1$, find the permutation matrix, cycle decomposition, and sign.

## Hints

> [!hint]- Hint 1
> The permutation reverses the order of the standard basis.

## Solution

> [!success]- Solution
> The associated matrix is the anti-identity matrix
> 
> $$
> P=\begin{bmatrix}
> 0&\cdots&0&1\\
> 0&\cdots&1&0\\
> \vdots&\iddots&\vdots&\vdots\\
> 1&\cdots&0&0
> \end{bmatrix}.
> $$
> 
> Its disjoint-cycle decomposition is
> 
> $$
> (1\ n)(2\ n-1)\cdots,
> $$
> 
> with the middle index fixed when $n$ is odd. There are $\lfloor n/2\rfloor$ transpositions, so
> 
> $$
> \operatorname{sgn}(p)=(-1)^{\lfloor n/2\rfloor}=(-1)^{n(n-1)/2}.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §5, Ex. 5.4, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
