---
title: "Exercise Gal27: An Element with Prescribed Stabilizer"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, stabilizers]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.10, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal27: An Element with Prescribed Stabilizer

## Problem Statement

> [!question] Exercise 7.10
> If $K/F$ is Galois with group $G$ and $H\le G$, prove there is $\beta\in K$ whose stabilizer is exactly $H$.

## Hints

> [!hint]- Hint 1
> Take a primitive element of the fixed field $K^H$.

## Solution

> [!success]- Solution
> Put $L=K^H$. Since $K/F$ is finite Galois, $L/F$ is finite separable, so the primitive element theorem gives $L=F(\beta)$ for some $\beta\in L$. Every element of $H$ fixes $\beta$. Conversely, if $g(\beta)=\beta$, then $g$ fixes $F(\beta)=L$ pointwise, hence $g\in\operatorname{Gal}(K/L)=H$. Thus $\operatorname{Stab}_G(\beta)=H$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

The primitive element theorem is the only imported result.
