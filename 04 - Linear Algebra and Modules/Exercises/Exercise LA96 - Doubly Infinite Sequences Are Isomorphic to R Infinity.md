---
title: "Exercise LA96: Doubly Infinite Sequences Are Isomorphic to $\\mathbb R^\\infty$"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - infinite-dimensional-spaces
  - vector-space-isomorphisms
  - sequences
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 6, Ex. 6.2, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA96: Doubly Infinite Sequences Are Isomorphic to $\mathbb R^\infty$

## Problem Statement

> [!question] Exercise 6.2
> The doubly infinite rows $(\ldots,a_{-1},a_0,a_1,\ldots)$ with real entries form a vector space. Prove that it is isomorphic to $\mathbb R^\infty$.

## Hints

> [!hint]- Hint 1
> Enumerate the integer indices as $0,1,-1,2,-2,\ldots$.

## Solution

> [!success]- Solution
> Choose the bijection
> 
> $$
> \mathbb N\longrightarrow\mathbb Z,
> \qquad 1,2,3,4,5,\ldots\longmapsto0,1,-1,2,-2,\ldots.
> $$
> 
> Send a doubly infinite sequence to the one-sided sequence obtained by reading its entries in this order. Reindexing commutes with coordinatewise addition and scalar multiplication, so the map is linear. The inverse reindexes the coordinates back along the inverse bijection. Hence it is a vector-space isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §6, Ex. 6.2, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
