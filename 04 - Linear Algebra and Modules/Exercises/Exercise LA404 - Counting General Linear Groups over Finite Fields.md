---
title: "Exercise LA404: Counting General Linear Groups over Finite Fields"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 15, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise LA404: Counting General Linear Groups over Finite Fields

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 15
> Let $F$ be a finite field with $q$ elements. Show that the order of $GL_n(F)$ is
>
> $$
> (q^n-1)(q^n-q)\cdots(q^n-q^{n-1})
> =q^{n(n-1)/2}\prod_{i=1}^{n}(q^i-1).
> $$
>
> **Printed hint.** Let $x_1,\ldots,x_n$ be a basis of $F^n$. Any element of $GL_n(F)$ is uniquely determined by its effect on this basis, and thus the order of $GL_n(F)$ is equal to the number of all possible bases. If $A\in GL_n(F)$, let $Ax_i=y_i$. For $y_1$ we can select any of the $q^n-1$ non-zero vectors in $F^n$. Suppose inductively that we have already chosen $y_1,\ldots,y_r$ with $r<n$. These vectors span a subspace of dimension $r$ which contains $q^r$ elements. For $y_{r+1}$ we can select any of the $q^n-q^r$ elements outside of this subspace. The formula drops out.

## Hints

> [!hint]- Hint 1
> An invertible linear map is uniquely determined by its action on one fixed ordered basis.

> [!hint]- Hint 2
> Choose the images one at a time and exclude the span of the vectors already selected.

## Solution

> [!success]- Independently derived solution
> Fix the standard ordered basis $e_1,\ldots,e_n$ of $F^n$. A matrix $A$ is invertible exactly when its columns $Ae_1,\ldots,Ae_n$ form an ordered basis. For the first column there are $q^n-1$ nonzero choices. Once $r$ independent columns have been chosen, their span contains exactly $q^r$ vectors, so the next column has $q^n-q^r$ possible values. Multiplication gives
>
> $$
> |GL_n(F)|=\prod_{r=0}^{n-1}(q^n-q^r).
> $$
>
> Factor $q^r$ from the $r$-th factor and reindex $i=n-r$. Since $\sum_{r=0}^{n-1}r=n(n-1)/2$, the same count is
>
> $$
> |GL_n(F)|=q^{n(n-1)/2}\prod_{i=1}^{n}(q^i-1).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source and proof status:** The formula and printed counting hint were checked against [S2, Ch. XIII, Ex. 15, printed p. 546, PDF p. 561]. The full counting argument is independently derived.
