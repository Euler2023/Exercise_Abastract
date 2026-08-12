---
title: "Exercise Gal29: Klein Four Extensions by Square Roots"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, multiquadratic-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 8, Ex. 8.1, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal29: Klein Four Extensions by Square Roots

## Problem Statement

> [!question] Exercise 8.1
> If $K/F$ is Galois with group $D_2\cong C_2^2$, prove $K$ is obtained by adjoining two square roots and explain the action.

## Hints

> [!hint]- Hint 1
> Use the three index-two subgroups and their fixed fields.

## Solution

> [!success]- Solution
> Assume $\operatorname{char}F\ne2$. Choose two distinct order-two subgroups $H_1,H_2$. Their fixed fields are distinct quadratic extensions $F(\sqrt a)$ and $F(\sqrt b)$. Since $H_1\cap H_2=\{1\}$, their compositum has fixed subgroup trivial and therefore equals $K$:
> $$
> K=F(\sqrt a,\sqrt b).
> $$
> The four automorphisms independently change the signs of $\sqrt a,\sqrt b$. The third quadratic field is $F(\sqrt{ab})$, fixed by the simultaneous sign change.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

Characteristic different from $2$ is required for the square-root description.
