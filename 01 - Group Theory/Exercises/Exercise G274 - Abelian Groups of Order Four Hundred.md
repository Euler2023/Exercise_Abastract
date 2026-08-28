---
title: "Exercise G274: Abelian Groups of Order 400"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - finite-abelian-groups
  - partitions
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 7, Structure of Abelian Groups, Ex. 7.5, printed p. 439, PDF p. 451"
created: 2026-08-28
---

# Exercise G274: Abelian Groups of Order 400

## Problem Statement

> [!question] Exercise 7.5
> Determine the number of isomorphism classes of abelian groups of order $400$.

## Hints

> [!hint]- Hint 1
> Factor $400$ and count partitions of the exponents in its primary decomposition.

## Solution

> [!success]- Solution
> Since
>
> $$
> 400=2^4\cdot5^2,
> $$
>
> a finite abelian group of this order is the direct product of an abelian group of order $2^4$ and one of order $5^2$. Abelian $p$-groups of order $p^n$ correspond to partitions of $n$. There are
>
> $$
> p(4)=5
> $$
>
> partitions of $4$ and
>
> $$
> p(2)=2
> $$
>
> partitions of $2$. The choices are independent, so the number of isomorphism classes is
>
> $$
> \boxed{5\cdot2=10.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Routing:** Group Theory is primary because the fundamental theorem of finite abelian groups performs the count.
- **Source status:** [S1, Ch. 14, §14.7, Ex. 7.5, printed p. 439, PDF p. 451]. The partition count is independent.
