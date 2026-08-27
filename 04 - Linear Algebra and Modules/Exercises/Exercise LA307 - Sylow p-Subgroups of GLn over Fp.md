---
title: "Exercise LA307: Sylow p-Subgroups of GLn over Fp"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 7, Ex. 7.8, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise LA307: Sylow p-Subgroups of GLn over Fp

## Problem Statement

> [!question] Exercise 7.8
> Compute $|GL_n(\mathbb F_p)|$. Find a Sylow $p$-subgroup and determine the number of Sylow $p$-subgroups.

## Hints

> [!hint]- Hint 1
> Count ordered bases and use the unitriangular group.

## Solution

> [!success]- Solution
> Counting ordered bases gives
>
> $$
> |GL_n(\mathbb F_p)|=\prod_{i=0}^{n-1}(p^n-p^i)=p^{n(n-1)/2}\prod_{k=1}^n(p^k-1).
> $$
>
> The upper unitriangular group $U$ has order $p^{n(n-1)/2}$ and is Sylow. Its normalizer is the invertible upper triangular group $B$, of order $(p-1)^n p^{n(n-1)/2}$. Therefore
>
> $$
> n_p=[GL_n(\mathbb F_p):B]=\prod_{k=1}^n\frac{p^k-1}{p-1}=\prod_{k=1}^n(1+p+\cdots+p^{k-1}).
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** [S1, Ch. 7, §7, Ex. 7.8, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
