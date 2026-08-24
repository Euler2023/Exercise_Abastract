---
title: "Exercise Rep36: Dimensions of Five Classical Groups"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-groups
  - dimensions
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 7, Ex. 7.2, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep36: Dimensions of Five Classical Groups

## Problem Statement

> [!question] Exercise 7.2
> Determine the dimensions of (a) $U_n$, (b) $SU_n$, (c) $SO_n(\mathbb C)$, (d) $O_{3,1}$, and (e) $SP_{2n}$.

## Hints

> [!hint]- Hint 1
> Count the free parameters in each Lie algebra.

## Solution

> [!success]- Solution
> A skew-Hermitian matrix has $n$ imaginary diagonal parameters and $n(n-1)$ real off-diagonal parameters, so $\dim_{\mathbb R}U_n=n^2$. Trace zero removes one real parameter, giving $\dim_{\mathbb R}SU_n=n^2-1$.
>
> Complex skew-symmetric matrices have $n(n-1)/2$ complex parameters, so
>
> $$
> \dim_{\mathbb C}SO_n(\mathbb C)=\frac{n(n-1)}2.
> $$
>
> The Lorentz Lie algebra has the same parameter count as a real skew-symmetric $4\times4$ matrix, hence $\dim_{\mathbb R}O_{3,1}=6$. Finally, the symplectic block form has an arbitrary $n\times n$ block and two symmetric blocks, so
>
> $$
> \dim_{\mathbb R}SP_{2n}=n^2+n(n+1)=n(2n+1).
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- As a real manifold, $SO_n(\mathbb C)$ has twice its displayed complex dimension.
- **Source status:** Ex. 7.2 was visually checked at [S1, Ch. 9, §9.7, printed p. 286, PDF p. 298]. The parameter counts are independent.

