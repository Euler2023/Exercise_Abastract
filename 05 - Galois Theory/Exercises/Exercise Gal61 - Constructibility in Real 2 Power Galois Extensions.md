---
title: "Exercise Gal61: Constructibility in Real 2-Power Galois Extensions"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, constructibility]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 12, Ex. 12.5, printed p. 511, PDF p. 523"
created: 2026-08-12
---

# Exercise Gal61: Constructibility in Real $2$-Power Galois Extensions

## Problem Statement

> [!question] Exercise 12.5
> If $K/\mathbb Q$ is Galois of $2$-power degree and $K\subset\mathbb R$, prove every element of $K$ is ruler-and-compass constructible.

## Hints

> [!hint]- Hint 1
> A finite 2-group has a subgroup chain with successive index $2$.

## Solution

> [!success]- Solution
> Let $G=\operatorname{Gal}(K/\mathbb Q)$. A composition series of the finite 2-group $G$ has quotients $C_2$. Reversing it under Galois correspondence yields
> $$
> \mathbb Q=K_0\subset K_1\subset\cdots\subset K_m=K,\qquad [K_i:K_{i-1}]=2.
> $$
> Since all fields lie in $\mathbb R$, each layer is obtained by adjoining the square root of a positive element. Thus every element of $K$ lies in a real quadratic tower and is constructible.

## Related Concepts

- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass Constructions]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]

## Notes

Reality ensures the square-root adjunctions can be taken real.
