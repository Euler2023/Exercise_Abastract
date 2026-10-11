---
title: "Exercise F121: A Primitive Element of a Triquadratic Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - primitive-elements
  - dummit-foote
source: "David S. Dummit and Richard M. Foote, Abstract Algebra, 3rd ed., Ch. 14, §14.4, Exercise 2, printed p. 595, PDF p. 608"
created: 2026-10-02
---

# Exercise F121: A Primitive Element of a Triquadratic Field

## Problem Statement

> [!question] Dummit–Foote, Section 14.4, Exercise 2
> Find a primitive generator for $\mathbb Q(\sqrt2,\sqrt3,\sqrt5)$ over $\mathbb Q$.

## Hints

> [!hint]- Hint 1: Combine the generators
> Try $\theta=\sqrt2+\sqrt3+\sqrt5$. It suffices to recover all three square roots as rational expressions in $\theta$.

> [!hint]- Hint 2: Recover one square root first
> Expand $(\theta-\sqrt5)^2$ and use $(\sqrt2+\sqrt3)^2=5+2\sqrt6$. Rearrange and square once more to obtain an equation linear in $\sqrt5$.

> [!hint]- Hint 3: Recover the other two
> After finding $\sqrt5$, put $s=\theta-\sqrt5$. The identity $(\sqrt2+\sqrt3)(\sqrt3-\sqrt2)=1$ expresses $\sqrt2$ and $\sqrt3$ using $s$ and $s^{-1}$.

## Solution

> [!success]- Complete independent derivation
> Use the positive real square roots and set
> $$
> K=\mathbb Q(\sqrt2,\sqrt3,\sqrt5),
> \qquad \theta=\sqrt2+\sqrt3+\sqrt5.
> $$
> We claim that $K=\mathbb Q(\theta)$. The inclusion $\mathbb Q(\theta)\subseteq K$ follows from the definition of $\theta$. For the reverse inclusion, we recover the three generators.
>
> **1. Recover $\sqrt5$.** Since
> $$
> (\theta-\sqrt5)^2=(\sqrt2+\sqrt3)^2=5+2\sqrt6,
> $$
> expansion and cancellation give
> $$
> \theta^2-2\theta\sqrt5=2\sqrt6.
> $$
> Squaring this equality gives
> $$
> \theta^4-4\theta^3\sqrt5+20\theta^2=24.
> $$
> The element $\theta$ is positive, so $4\theta^3\ne0$. Therefore
> $$
> \sqrt5=\frac{\theta^4+20\theta^2-24}{4\theta^3}
> \in\mathbb Q(\theta).
> $$
>
> **2. Recover $\sqrt2$ and $\sqrt3$.** Put
> $$
> s=\theta-\sqrt5=\sqrt2+\sqrt3\in\mathbb Q(\theta).
> $$
> Again $s>0$, so its inverse belongs to $\mathbb Q(\theta)$. The identity
> $$
> (\sqrt2+\sqrt3)(\sqrt3-\sqrt2)=3-2=1
> $$
> gives $s^{-1}=\sqrt3-\sqrt2$. Adding and subtracting yields
> $$
> \sqrt2=\frac{s-s^{-1}}2,
> \qquad
> \sqrt3=\frac{s+s^{-1}}2.
> $$
> Thus all three square roots lie in $\mathbb Q(\theta)$, proving
> $$
> \mathbb Q(\sqrt2,\sqrt3,\sqrt5)
> =\mathbb Q(\sqrt2+\sqrt3+\sqrt5).
> $$
> Hence $\sqrt2+\sqrt3+\sqrt5$ is a primitive generator.

## Related Concepts

- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[05 - Galois Theory/Concepts/Square Classes and Multiquadratic Extensions|Square Classes and Multiquadratic Extensions]]

## Notes

- **Source and proof status:** The complete statement was visually checked in Dummit–Foote, third edition, §14.4, Exercise 2, printed p. 595 / PDF p. 608. The recovery calculation is an independent derivation for this vault, not a textbook solution.
- **Routing and method:** The proof uses field operations and explicit recovery of generators, so Field Theory is primary. It does not require the primitive element theorem, a prior degree calculation, or Galois correspondence.
- **Related exercises:** [[03 - Field Theory/Exercises/Exercise F16 - Primitive Elements of a Biquadratic Field|Exercise F16]] classifies generators of a biquadratic field. [[05 - Galois Theory/Exercises/Exercise Gal16 - The Galois Group of a Triradical Field|Exercise Gal16]] and [[05 - Galois Theory/Exercises/Exercise Gal21 - All Subfields of Q sqrt2 sqrt3 sqrt5|Exercise Gal21]] study the degree, Galois group, and intermediate fields of the same triquadratic field; their tasks differ from the present construction.
