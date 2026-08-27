---
title: "Exercise Rep63: Column Orthogonality of Character Tables"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.6, printed p. 316, PDF p. 328"
created: 2026-08-27
---

# Exercise Rep63: Column Orthogonality of Character Tables

## Problem Statement

> [!question] Exercise 4.6
> Explain how to adjust the entries of a character table to produce a unitary matrix, and prove that the columns of a character table are orthogonal.

## Hints

> [!hint]- Hint 1
> Multiply the column for a class $C_j$ by $\sqrt{|C_j|/|G|}$.

## Solution

> [!success]- Solution
> Let $C_1,\ldots,C_r$ be the conjugacy classes and $\chi_1,\ldots,\chi_r$ the irreducible characters. Define
>
> $$
> U_{ij}=\sqrt{\frac{|C_j|}{|G|}}\,\chi_i(C_j).
> $$
>
> Row orthogonality says
>
> $$
> (UU^*)_{ik}=\frac1{|G|}\sum_j|C_j|\chi_i(C_j)\overline{\chi_k(C_j)}=\delta_{ik}.
> $$
>
> The character table is square, so $UU^*=I$ implies $U^*U=I$. Therefore its columns are orthonormal after scaling. Undoing the scaling gives
>
> $$
> \sum_i\chi_i(C_j)\overline{\chi_i(C_k)}=0\quad(j\ne k),
> $$
>
> while the squared norm of column $j$ is $|G|/|C_j|=|C_G(g_j)|$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source input:** row orthogonality is Artin's Main Theorem 10.4.6.
- **Source status:** [S1, Ch. 10, §4, Ex. 4.6, printed p. 316, PDF p. 328].

