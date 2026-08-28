---
title: "Exercise Gal81: Impossibility of Constructing the Regular Nine-Gon"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - ruler-and-compass
  - cyclotomic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 5, Constructions with Ruler and Compass, Ex. 5.3, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise Gal81: Impossibility of Constructing the Regular Nine-Gon

## Problem Statement

> [!question] Exercise 5.3
> Decide whether or not the regular $9$-gon is constructible by ruler and compass.

## Hints

> [!hint]- Hint 1
> A regular $9$-gon would construct the angle $40^\circ$. Find the degree of $2\cos40^\circ$.

## Solution

> [!success]- Solution
> Let $u=2\cos40^\circ$. The identity
>
> $$
> (2\cos\theta)^3-3(2\cos\theta)=2\cos3\theta
> $$
>
> with $\theta=40^\circ$ gives
>
> $$
> u^3-3u=2\cos120^\circ=-1.
> $$
>
> Thus $u$ is a root of $x^3-3x+1$. This cubic has no rational root and is therefore irreducible over $\mathbb Q$. Hence $u$ has degree $3$ over $\mathbb Q$.
>
> Every constructible real number has degree a power of $2$ over $\mathbb Q$. Since $3$ is not a power of $2$, $u$ and therefore the angle $40^\circ$ are not constructible. Consequently the regular $9$-gon is not constructible by ruler and compass.

## Related Concepts

- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Galois Theory is primary because the obstruction is the non-power-of-two degree of a cyclotomic coordinate.
- **Source status:** [S1, Ch. 15, §15.5, Ex. 5.3, printed p. 473, PDF p. 485]. The impossibility proof is independent.
