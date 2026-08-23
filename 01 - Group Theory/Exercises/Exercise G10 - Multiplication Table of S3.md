---
title: "Exercise G10: Multiplication Table of S3"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - computation
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 2, Ex. 2.1, printed p. 69, PDF p. 81"
created: 2026-08-10
---

# Exercise G10: Multiplication Table of $S_3$

## Problem Statement

> [!question] Exercise
> Make a multiplication table for the symmetric group $S_3$.

## Hints

> [!hint]- Hint 1
> Let $r=(123)$ and $s=(12)$. Then
> $$S_3=\{e,r,r^2,s,sr,sr^2\}$$
> with $r^3=s^2=e$ and $sr=r^{-1}s$.

> [!hint]- Hint 2
> Reduce every product using the relations
> $$r^3=e,\qquad s^2=e,\qquad sr=r^2s.$$

## Solution

> [!success]- Solution
> We compose permutations from right to left. Set
> $$r=(123),\qquad s=(12).$$
> Then
> $$r^2=(132),\qquad sr=(23),\qquad sr^2=(13).$$
> The relations
> $$r^3=e,\qquad s^2=e,\qquad sr=r^{-1}s$$
> reduce every product to one of the six elements
> $$e,r,r^2,s,sr,sr^2.$$
>
> In the following table, the entry in row $x$ and column $y$ is the product $xy$:
>
> | $\cdot$ | $e$ | $r$ | $r^2$ | $s$ | $sr$ | $sr^2$ |
> |---|---|---|---|---|---|---|
> | $e$ | $e$ | $r$ | $r^2$ | $s$ | $sr$ | $sr^2$ |
> | $r$ | $r$ | $r^2$ | $e$ | $sr^2$ | $s$ | $sr$ |
> | $r^2$ | $r^2$ | $e$ | $r$ | $sr$ | $sr^2$ | $s$ |
> | $s$ | $s$ | $sr$ | $sr^2$ | $e$ | $r$ | $r^2$ |
> | $sr$ | $sr$ | $sr^2$ | $s$ | $r^2$ | $e$ | $r$ |
> | $sr^2$ | $sr^2$ | $s$ | $sr$ | $r$ | $r^2$ | $e$ |
>
> For example,
> $$r(sr)=rsr=s$$
> and
> $$(sr)(sr^2)=srsr^2=r^{-1}r^2=r.$$
> These reductions account for every entry in the table. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

The table is not symmetric across the main diagonal; for example, $rs=sr^2\ne sr$. This records the fact that $S_3$ is non-abelian.

**Source status:** Exercise statement from [S1, Ch. 2, §2, Ex. 2.1, printed p. 69, PDF p. 81]. The table is an exact finite computation, and the displayed relations verify all entries.
