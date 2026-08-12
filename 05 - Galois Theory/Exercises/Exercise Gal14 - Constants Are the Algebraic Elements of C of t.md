---
title: "Exercise Gal14: Constants Are the Algebraic Elements of C(t)"
topic: galois-theory
difficulty: beginner
status: not-started
tags: [exercise, galois-theory, rational-functions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 5, Ex. 5.3, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal14: Constants Are the Algebraic Elements of $\mathbb C(t)$

## Problem Statement

> [!question] Exercise 5.3
> Prove every element of $\mathbb C(t)\setminus\mathbb C$ is transcendental over $\mathbb C$.

## Hints

> [!hint]- Hint 1
> If $r(t)$ is nonconstant, clear denominators in $r(t)=y$.

## Solution

> [!success]- Solution
> Let $r(t)=a(t)/b(t)$ be nonconstant. The equation $b(t)r-a(t)=0$ shows that $t$ is algebraic over $\mathbb C(r)$. If $r$ were algebraic over $\mathbb C$, transitivity of algebraicity would make $t$ algebraic over $\mathbb C$, contradicting that $t$ is an indeterminate. Hence every nonconstant rational function is transcendental over $\mathbb C$.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

The argument works over any base field.
