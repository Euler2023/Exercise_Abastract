---
title: "Exercise G179: Automorphisms of a Cyclic Group of Prime Order"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - automorphisms
  - cyclic-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.8, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G179: Automorphisms of a Cyclic Group of Prime Order

## Problem Statement

> [!question] Exercise 11.8
> Find a bijective correspondence between the multiplicative group $\mathbb F_p^*$ and the set of automorphisms of a cyclic group of order $p$.

## Hints

> [!hint]- Hint 1
> Write the cyclic group additively as $\mathbb Z/p\mathbb Z$.

> [!hint]- Hint 2
> An automorphism is determined by the image of $1$, which must be nonzero.

## Solution

> [!success]- Solution
> For $a\in\mathbb F_p^*$ define
>
> $$
> \phi_a:\mathbb Z/p\mathbb Z\longrightarrow\mathbb Z/p\mathbb Z,qquad x\longmapsto ax.
> $$
>
> This is an automorphism, with inverse $\phi_{a^{-1}}$. Every automorphism is determined by the image of $1$, and that image must be a generator, hence a nonzero residue. Thus $a\mapsto\phi_a$ is bijective. Since
>
> $$
> \phi_a\circ\phi_b=\phi_{ab},
> $$
>
> it is in fact a group isomorphism
>
> $$
> \mathbb F_p^*\cong\operatorname{Aut}(C_p).
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- The source's $F^*$ denotes the multiplicative group of the field $F=\mathbb F_p$ in this exercise.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.8, printed p. 192, PDF p. 204]; independent construction.

