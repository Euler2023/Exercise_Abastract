---
title: "Exercise F8: Product of Nonzero Elements of a Finite Field"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.7, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F8: Product of Nonzero Elements of a Finite Field

## Problem Statement

> [!question] Exercise
> Let $K$ be a finite field. Prove that the product of the nonzero elements of $K$ is $-1$.

## Hints

> [!hint]- Hint 1
> Pair each element with its multiplicative inverse.

> [!hint]- Hint 2
> The unpaired elements satisfy $a^2=1$.

## Solution

> [!success]- Solution
> Pair every $a\in K^\times$ with $a^{-1}$. Each pair with $a\ne a^{-1}$ contributes $1$. The self-inverse elements satisfy
> $$
> a^2=1,
> \qquad (a-1)(a+1)=0.
> $$
> Since $K$ is a field, these are $1$ and $-1$. In odd characteristic their product is $-1$. In characteristic $2$, the two elements coincide and the only self-inverse element is $1=-1$. Thus in every characteristic the product of all elements of $K^\times$ is $-1$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[01 - Group Theory/Concepts/Group Definition|Groups]]

## Notes

This is an independent proof; it does not require cyclicity of $K^\times$.
