---
title: "Exercise G269: Abelian Group Presented by a Determinant-Seven Matrix"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
  - smith-normal-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 5, Generators and Relations, Ex. 5.2, printed p. 438, PDF p. 450"
created: 2026-08-28
---

# Exercise G269: Abelian Group Presented by a Determinant-Seven Matrix

## Problem Statement

> [!question] Exercise 5.2
> Identify the abelian group presented by
>
> $$
> A=\begin{pmatrix}3&1&2\\1&1&1\\2&3&6\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Compute the determinantal divisors: the gcd of the entries, the gcd of the $2\times2$ minors, and $|\det A|$.

## Solution

> [!success]- Solution
> The entries have gcd $1$. Among the $2\times2$ minors there is a minor equal to $1$, so their gcd is also $1$. Finally,
>
> $$
> \det A=7.
> $$
>
> Therefore the Smith invariant factors are $1,1,7$, and
>
> $$
> \operatorname{coker}(A)
> \cong\mathbb Z/1\mathbb Z\oplus\mathbb Z/1\mathbb Z\oplus\mathbb Z/7\mathbb Z
> \cong\boxed{\mathbb Z/7\mathbb Z}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Group Theory is primary because the requested output is an isomorphism type of an abelian group.
- **Computational verification:** The Smith form $\operatorname{diag}(1,1,7)$ was checked by exact integer arithmetic.
- **Source status:** [S1, Ch. 14, §14.5, Ex. 5.2, printed p. 438, PDF p. 450].
