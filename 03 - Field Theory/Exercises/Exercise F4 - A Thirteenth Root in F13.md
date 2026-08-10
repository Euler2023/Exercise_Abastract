---
title: "Exercise F4: A Thirteenth Root in F13"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - frobenius
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.3, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F4: A Thirteenth Root in $\mathbb F_{13}$

## Problem Statement

> [!question] Exercise
> Find a thirteenth root of $2$ in the field $\mathbb F_{13}$.

## Hints

> [!hint]- Hint
> Apply $a^{13}=a$ in $\mathbb F_{13}$.

## Solution

> [!success]- Solution
> The Frobenius map is the identity on the prime field $\mathbb F_{13}$, so every $a\in\mathbb F_{13}$ satisfies $a^{13}=a$. In particular,
> $$
> 2^{13}=2.
> $$
> Hence a thirteenth root of $2$ is simply $2$. It is the unique one because the map $x\mapsto x^{13}$ is the identity.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

This is an independently derived application of the Frobenius identity.
