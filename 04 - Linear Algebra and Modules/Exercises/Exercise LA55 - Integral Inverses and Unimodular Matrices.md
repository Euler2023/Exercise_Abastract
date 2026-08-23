---
title: "Exercise LA55: Integral Inverses and Unimodular Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - integer-matrices
  - unimodular-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 6, Ex. 6.2, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise LA55: Integral Inverses and Unimodular Matrices

## Problem Statement

> [!question] Exercise 6.2
> Let $A$ be an integer $n\times n$ matrix. Prove that $A$ is invertible with integer inverse if and only if $\det A=\pm1$.

## Hints

> [!hint]- Hint 1
> Use $A^{-1}=\operatorname{adj}(A)/\det A$ in one direction and determinants in the other.

## Solution

> [!success]- Solution
> If $\det A=\pm1$, every entry of $\operatorname{adj}(A)$ is an integer and
> 
> $$
> A^{-1}=\frac{\operatorname{adj}(A)}{\det A}
> $$
> 
> therefore has integer entries.
> 
> Conversely, if both $A$ and $A^{-1}$ have integer entries, their determinants are integers and
> 
> $$
> (\det A)(\det A^{-1})=1.
> $$
> 
> The only integer units are $1$ and $-1$, so $\det A=\pm1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §6, Ex. 6.2, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
