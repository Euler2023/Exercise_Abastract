---
title: "Exercise F5: Counting Irreducible Cubics"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - irreducible-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.4, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F5: Counting Irreducible Cubics

## Problem Statement

> [!question] Exercise
> Determine the number of irreducible polynomials of degree $3$ over $\mathbb F_3$ and over $\mathbb F_5$.

## Hints

> [!hint]- Hint 1
> The roots in $\mathbb F_{q^3}$ not lying in $\mathbb F_q$ have degree exactly $3$ over $\mathbb F_q$.

> [!hint]- Hint 2
> Each monic irreducible cubic contributes three distinct roots.

## Solution

> [!success]- Solution
> The field $\mathbb F_{q^3}$ has $q^3-q$ elements outside $\mathbb F_q$. Since $3$ is prime, each such element has degree exactly $3$ over $\mathbb F_q$. Every monic irreducible cubic has three distinct roots in one Frobenius orbit, so the number is
> $$
> N_q(3)=\frac{q^3-q}{3}.
> $$
> Therefore
> $$
> N_3(3)=\frac{27-3}{3}=8,
> \qquad
> N_5(3)=\frac{125-5}{3}=40.
> $$
> Thus there are $8$ monic irreducible cubics over $\mathbb F_3$ and $40$ over $\mathbb F_5$. If nonzero scalar associates are counted separately, multiply these numbers by $q-1$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

The count is an independent derivation. The usual convention counts monic irreducible polynomials.
