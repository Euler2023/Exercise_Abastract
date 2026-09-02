---
title: "Exercise G34: The Group and Product of $n$th Roots of Unity"
topic: group-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - group-theory
  - cyclic-groups
  - roots-of-unity
source: Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.2, printed p. 70, PDF p. 82
created: 2026-08-23
---

# Exercise G34: The Group and Product of $n$th Roots of Unity

## Problem Statement

> [!question] Exercise 4.2
> **(a)** Prove that the $n$th roots of unity form a cyclic subgroup of $\mathbb C^\times$ of order $n$.
> 
> **(b)** Determine their product.

## Hints

> [!hint]- Hint 1
> Use $\zeta=e^{2\pi i/n}$.

> [!hint]- Hint 2
> Compare the constant term of $x^n-1$ with the product of its roots.

## Solution

> [!success]- Solution
> Every $n$th root of unity is
> 
> $$
> \zeta^k=e^{2\pi ik/n},\qquad0\le k<n,
> $$
> 
> where $\zeta=e^{2\pi i/n}$. These $n$ values are distinct and form $\langle\zeta\rangle$, so the subgroup is cyclic of order $n$.
> 
> Since $x^n-1=\prod_{k=0}^{n-1}(x-\zeta^k)$, comparison of constant terms gives
> 
> $$
> \prod_{k=0}^{n-1}\zeta^k=(-1)^{n+1}.
> $$
> 
> Thus the product is $1$ for odd $n$ and $-1$ for even $n$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.2, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
