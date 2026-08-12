---
title: "Exercise Gal24: Minimal Polynomial and Basis for i + sqrt2"
topic: galois-theory
difficulty: beginner
status: not-started
tags: [exercise, galois-theory, minimal-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.7, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal24: Minimal Polynomial and Basis for $i+\sqrt2$

## Problem Statement

> [!question] Exercise 7.7
> (a) Determine the irreducible polynomial of $i+\sqrt2$ over $\mathbb Q$. (b) Prove $(1,i,\sqrt2,i\sqrt2)$ is a basis of $\mathbb Q(i,\sqrt2)$.

## Hints

> [!hint]- Hint 1
> Multiply the four conjugate linear factors.

## Solution

> [!success]- Solution
> The conjugates are $\pm i\pm\sqrt2$. Their product gives
> $$
> ((x-\sqrt2)^2+1)((x+\sqrt2)^2+1)=x^4-2x^2+9.
> $$
> Since $\mathbb Q(i)\ne\mathbb Q(\sqrt2)$, their intersection is $\mathbb Q$, so the compositum has degree $4$. Thus the displayed polynomial is irreducible.
>
> The tower $\mathbb Q\subset\mathbb Q(\sqrt2)\subset\mathbb Q(\sqrt2,i)$ has degrees $2,2$. Multiplying the bases $(1,\sqrt2)$ and $(1,i)$ gives $(1,i,\sqrt2,i\sqrt2)$.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

Independent calculation.
