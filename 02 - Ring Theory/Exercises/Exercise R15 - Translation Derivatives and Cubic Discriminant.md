---
title: "Exercise R15: Translation Derivatives and the Cubic Discriminant"
topic: ring-theory
difficulty: intermediate
status: not-started
tags: [exercise, ring-theory, discriminant]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 2, Ex. 2.6, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise R15: Translation Derivatives and the Cubic Discriminant

## Problem Statement

> [!question] Exercise 2.6
> Let $u_i'=u_i+t$. Compute $\frac d{dt}s_i(u')$ and $\frac d{dt}\Delta(u')$, and verify Formula 16.2.5.

## Hints

> [!hint]- Hint 1
> Translation leaves every difference $u_i-u_j$ unchanged.

## Solution

> [!success]- Solution
> Direct expansion gives
> $$
> s_1'=s_1+3t,\quad s_2'=s_2+2s_1t+3t^2,\quad
> s_3'=s_3+s_2t+s_1t^2+t^3.
> $$
> Therefore
> $$
> \dot s_1=3,\qquad \dot s_2=2s_1',\qquad \dot s_3=s_2'.
> $$
> Since $u_i'-u_j'=u_i-u_j$, one has $\dot\Delta=0$. Substitution into
> $$
> \Delta=s_1^2s_2^2-4s_2^3-4s_1^3s_3-27s_3^2+18s_1s_2s_3
> $$
> differentiates to zero and verifies the formula.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

The coefficient convention matches Artin's monic cubic.
