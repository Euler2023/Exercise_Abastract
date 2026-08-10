---
title: "Exercise F13: Finite Multiplicative Subgroups Are Cyclic"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-subgroups
  - cyclic-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.13, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F13: Finite Multiplicative Subgroups Are Cyclic

## Problem Statement

> [!question] Exercise
> Prove that a finite subgroup of the multiplicative group of any field $F$ is cyclic.

## Hints

> [!hint]- Hint 1
> Apply the structure theorem for finite abelian groups.

> [!hint]- Hint 2
> A polynomial of degree $d$ has at most $d$ roots in a field.

## Solution

> [!success]- Solution
> Let $H\le F^\times$ be finite. It is abelian, so the structure theorem gives
> $$
> H\cong C_{d_1}\times\cdots\times C_{d_s},
> \qquad d_1\mid d_2\mid\cdots\mid d_s.
> $$
> Put $d=d_s$. Every element of $H$ has order dividing $d$, hence every element is a root of $x^d-1$. A degree-$d$ polynomial over a field has at most $d$ roots, so
> $$
> |H|\le d.
> $$
> On the other hand,
> $$
> |H|=d_1\cdots d_s\ge d_s=d.
> $$
> Equality follows. Consequently $d_1=\cdots=d_{s-1}=1$, and $H\cong C_d$ is cyclic.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

The finite abelian group structure theorem is the only imported standard input. The polynomial root bound is proved earlier in S1.
