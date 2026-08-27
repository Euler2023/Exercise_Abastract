---
title: "Exercise Rep79: Tetrahedral Action on Edges"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.3, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep79: Tetrahedral Action on Edges

## Problem Statement

> [!question] Exercise 6.3
> Let $\chi^e$ denote the character of the representation of the tetrahedral group $T$ on the six edges of the tetrahedron. Decompose this character into irreducible characters.

## Hints

> [!hint]- Hint 1
> Count fixed edges for the identity, half-turns, and third-turns.

## Solution

> [!success]- Solution
> On the four classes of $T\cong A_4$, with sizes $1,3,4,4$, the fixed-edge counts are
>
> $$
> \chi^e=(6,2,0,0).
> $$
>
> The three one-dimensional characters all take value $1$ on the half-turn class, and the three-dimensional character is $(3,-1,0,0)$. Inner products show that each occurs once. Hence
>
> $$
> \chi^e=1\oplus\lambda\oplus\lambda^2\oplus\tau_3.
> $$
>
> The dimensions sum to $6$, as required. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.3, printed p. 318, PDF p. 330].

