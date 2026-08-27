---
title: "Exercise Rep93: Matrix and Trace of a Left-Right Multiplication Operator"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 7, Ex. 7.6, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep93: Matrix and Trace of a Left-Right Multiplication Operator

## Problem Statement

> [!question] Exercise 7.6
> Compute the matrix of the operator $F$ of Lemma 10.8.1, and use the matrix to verify the formula for its trace.

## Hints

> [!hint]- Hint 1
> Vectorize matrices and use the matrix units $E_{ij}$.

## Solution

> [!success]- Solution
> For $F:M_{m\times n}\to M_{m\times n}$ defined by $F(M)=AMB$, vectorization gives
>
> $$
> \operatorname{vec}(F(M))=(B^{\mathsf T}\otimes A)\operatorname{vec}(M).
> $$
>
> Thus the matrix of $F$ in the matrix-unit basis is $B^{\mathsf T}\otimes A$. Its diagonal entry indexed by $(i,j)$ is $a_{ii}b_{jj}$, and therefore
>
> $$
> \operatorname{tr}F=\sum_{i,j}a_{ii}b_{jj}
> =\left(\sum_i a_{ii}\right)\left(\sum_j b_{jj}\right)
> =(\operatorname{tr}A)(\operatorname{tr}B).
> $$
>
> This is the trace formula used in Lemma 10.8.1. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source status:** [S1, Ch. 10, §7, Ex. 7.6, printed p. 320, PDF p. 332]; the matrix-unit computation is independent.

