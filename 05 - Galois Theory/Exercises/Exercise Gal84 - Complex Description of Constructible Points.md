---
title: "Exercise Gal84: Complex Description of Constructible Points"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - ruler-and-compass
  - constructible-numbers
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 5, Constructions with Ruler and Compass, Ex. 5.6, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise Gal84: Complex Description of Constructible Points

## Problem Statement

> [!question] Exercise 5.6
> Thinking of the plane as the complex plane, describe the set of constructible points as complex numbers.

## Hints

> [!hint]- Hint 1
> Separate a point $z$ into its real and imaginary coordinates.

## Solution

> [!success]- Solution
> Let $\mathcal R_c$ denote the field of constructible real numbers: the smallest subfield of $\mathbb R$ containing $\mathbb Q$ and closed under taking square roots of positive elements. A point $(x,y)$ is constructible exactly when both coordinates $x$ and $y$ lie in $\mathcal R_c$. Under the identification $(x,y)\leftrightarrow x+iy$, the set of constructible points is therefore
>
> $$
> \boxed{\mathcal C_c=\{x+iy:x,y\in\mathcal R_c\}=\mathcal R_c(i).}
> $$
>
> Equivalently, $z\in\mathbb C$ is constructible if and only if $z$ lies in a field obtained from $\mathbb Q(i)$ by a finite tower of quadratic adjunctions compatible with the real-coordinate construction. Combining the finite towers for $x$ and $y$ proves the converse direction as well.

## Related Concepts

- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Square Classes and Multiquadratic Extensions|Square Classes and Multiquadratic Extensions]]

## Notes

- **Routing:** Galois Theory is primary because the answer identifies geometric constructibility with finite quadratic field towers.
- **Source status:** [S1, Ch. 15, §15.5, Ex. 5.6, printed p. 473, PDF p. 485]. The description is independent.
