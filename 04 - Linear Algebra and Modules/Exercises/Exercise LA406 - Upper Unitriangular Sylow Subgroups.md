---
title: "Exercise LA406: Upper Unitriangular Sylow Subgroups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 17, printed p. 547, PDF p. 562"
created: 2026-09-26
---

# Exercise LA406: Upper Unitriangular Sylow Subgroups

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 17
> Let $F$ be a finite field with $q$ elements. Show that the group of all upper triangular matrices with $1$ on the diagonal is a Sylow subgroup of $GL_n(F)$ and of $SL_n(F)$.

## Hints

> [!hint]- Hint 1
> Write $q=p^f$, where $p=\operatorname{char}F$, and count the entries strictly above the diagonal.

> [!hint]- Hint 2
> Compare with the highest power of $p$ dividing the orders found in Exercises 15 and 16.

## Solution

> [!success]- Independently derived solution
> Let $U$ be the upper unitriangular subgroup and write $q=p^f$. There are $n(n-1)/2$ entries strictly above the diagonal, each with $q$ choices, so
>
> $$
> |U|=q^{n(n-1)/2}=p^{f n(n-1)/2}.
> $$
>
> Every matrix in $U$ has determinant $1$, hence $U\subseteq SL_n(F)\subseteq GL_n(F)$. By Exercises 15 and 16,
>
> $$
> |GL_n(F)|=q^{n(n-1)/2}\prod_{i=1}^{n}(q^i-1),
> \qquad
> |SL_n(F)|=q^{n(n-1)/2}\prod_{i=2}^{n}(q^i-1).
> $$
>
> Since $q=p^f$, every factor $q^i-1$ is congruent to $-1$ modulo $p$ and is prime to $p$. Thus $|U|$ is the full $p$-part of the order of both ambient groups. By definition, $U$ is a Sylow $p$-subgroup of each.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA404 - Counting General Linear Groups over Finite Fields|Exercise LA404]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA405 - Orders of Special and Projective Special Linear Groups|Exercise LA405]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- **Routing:** The decisive computation counts free matrix entries and compares matrix-group orders; the group-theoretic Sylow definition is a final step.
- **Source and proof status:** The statement was checked against [S2, Ch. XIII, Ex. 17, printed p. 547, PDF p. 562]. The solution is independently derived.
