---
title: "Exercise Gal64: Base Change and Galois Groups"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, base-change]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.1, printed p. 511, PDF p. 523"
created: 2026-08-12
---

# Exercise Gal64: Base Change and Galois Groups

## Problem Statement

> [!question] Exercise M.1
> Let $F_1\subset F_2$, let $f\in F_1[x]$, and let a splitting field $K_2$ of $f$ over $F_2$ contain a splitting field $K_1$ over $F_1$. Relate $G(K_1/F_1)$ and $G(K_2/F_2)$.

## Hints

> [!hint]- Hint 1
> Identify $K_2=K_1F_2$ and restrict automorphisms.

## Solution

> [!success]- Solution
> Inside a common algebraic closure, $K_2=K_1F_2$. Restriction gives an injection
> $$
> \operatorname{Gal}(K_2/F_2)\hookrightarrow\operatorname{Gal}(K_1/F_1),
> $$
> whose image consists of those automorphisms of $K_1$ acting trivially on $K_1\cap F_2$. Hence
> $$
> \operatorname{Gal}(K_2/F_2)\cong\operatorname{Gal}(K_1/K_1\cap F_2).
> $$
> If $K_1\cap F_2=F_1$, the groups are isomorphic; base extension can otherwise shrink the Galois group.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The formula assumes the standard embeddings into a common algebraic closure.
