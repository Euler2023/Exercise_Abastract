---
title: "Exercise Rep82: Icosahedral Permutation Characters"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.6, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep82: Icosahedral Permutation Characters

## Problem Statement

> [!question] Exercise 6.6
> Decompose the characters of the representations of the icosahedral group on the sets of faces, edges, and vertices into irreducible characters.

## Hints

> [!hint]- Hint 1
> A nonidentity rotation fixes two faces, edges, or vertices exactly when its axis passes through objects of that type.

## Solution

> [!success]- Solution
> Write the irreducible $A_5$ characters by their degrees as $1,3,3',4,5$. In class order $1,2,3,5,5'$, the fixed-point characters for vertices, faces, and edges are
>
> $$
> (12,0,0,2,2),\qquad(20,0,2,0,0),\qquad(30,2,0,0,0).
> $$
>
> Taking weighted inner products with the $A_5$ character table gives
>
> $$
> \begin{aligned}
> \mathbb C[\text{vertices}]&=1\oplus3\oplus3'\oplus5,\\
> \mathbb C[\text{faces}]&=1\oplus3\oplus3'\oplus2\cdot4\oplus5,\\
> \mathbb C[\text{edges}]&=1\oplus3\oplus3'\oplus2\cdot4\oplus3\cdot5.
> \end{aligned}
> $$
>
> The dimensions are respectively $12,20,30$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.6, printed p. 318, PDF p. 330]; fixed-point counts and decompositions are independent.

