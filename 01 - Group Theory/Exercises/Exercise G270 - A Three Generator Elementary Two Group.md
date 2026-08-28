---
title: "Exercise G270: A Three-Generator Elementary Two-Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
  - smith-normal-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 7, Structure of Abelian Groups, Ex. 7.1, printed p. 439, PDF p. 451"
created: 2026-08-28
---

# Exercise G270: A Three-Generator Elementary Two-Group

## Problem Statement

> [!question] Exercise 7.1
> Find a direct sum of cyclic groups isomorphic to the abelian group presented by
>
> $$
> A=\begin{pmatrix}2&2&2\\2&2&0\\2&0&2\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Compute the Smith invariants from the gcds of entries and minors.

## Solution

> [!success]- Solution
> The gcd of all entries is $2$, the gcd of all $2\times2$ minors is $4$, and
>
> $$
> |\det A|=8.
> $$
>
> Hence the invariant factors satisfy
>
> $$
> d_1=2,
> \qquad
> d_1d_2=4,
> \qquad
> d_1d_2d_3=8,
> $$
>
> so $d_1=d_2=d_3=2$. Therefore
>
> $$
> \boxed{\operatorname{coker}(A)\cong C_2\oplus C_2\oplus C_2.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Group Theory is primary because the goal is the invariant-factor decomposition of an abelian group.
- **Computational verification:** Exact Smith reduction gives $\operatorname{diag}(2,2,2)$.
- **Source status:** [S1, Ch. 14, §14.7, Ex. 7.1, printed p. 439, PDF p. 451].
