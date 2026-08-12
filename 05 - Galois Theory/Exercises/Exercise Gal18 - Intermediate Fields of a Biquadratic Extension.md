---
title: "Exercise Gal18: Intermediate Fields of a Biquadratic Extension"
topic: galois-theory
difficulty: beginner
status: complete
tags:
  - exercise
  - galois-theory
  - intermediate-fields
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.1, printed p. 507, PDF p. 519
created: 2026-08-12
---

# Exercise Gal18: Intermediate Fields of a Biquadratic Extension

## Problem Statement

> [!question] Exercise 7.1
> Determine the intermediate fields of $F(\sqrt a,\sqrt b)/F$ without using the Main Theorem.

## Hints

> [!hint]- Hint 1
> Square a general element and impose that its generated subfield be quadratic.

## Solution

> [!success]- Solution
> Assume $\operatorname{char}F\ne2$ and that $a,b,ab$ are nonsquares, so the extension has degree $4$. The three evident quadratic fields are
> $$
> F(\sqrt a),\quad F(\sqrt b),\quad F(\sqrt{ab}).
> $$
> Let $E$ be a proper nontrivial intermediate field. Then $[E:F]=2$. Choose $\theta=x+y\sqrt a+z\sqrt b+w\sqrt{ab}\in E\setminus F$ and subtract its scalar part. Since $\theta$ has degree $2$, its square and trace relations force the nonzero vector $(y,z,w)$ to lie on one coordinate axis; otherwise the three independent radical coefficients in $\theta^2$ cannot all be proportional to those of $\theta$. Thus $E$ is one of the three displayed fields.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]

## Notes

Degenerate square classes collapse the list and should be handled by first reducing the extension degree.
