---
title: "Exercise Rep78: Conjugation Representation of D3"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.2, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep78: Conjugation Representation of D3

## Problem Statement

> [!question] Exercise 6.2
> Let $\rho$ be the permutation representation associated to the operation of $D_3$ on itself by conjugation. Decompose the character of $\rho$ into irreducible characters.

## Hints

> [!hint]- Hint 1
> The number of fixed points of conjugation by $g$ is $|C_G(g)|$.

## Solution

> [!success]- Solution
> Identify $D_3\cong S_3$ and order its classes as identity, reflections, and $3$-cycles. Their centralizer sizes are $6,2,3$, so the permutation character is $(6,2,3)$. With irreducible characters
>
> $$
> 1=(1,1,1),\quad \varepsilon=(1,-1,1),\quad \sigma=(2,0,-1),
> $$
>
> weighted inner products give multiplicities $3,1,1$. Therefore
>
> $$
> \rho\cong 3\cdot1\oplus\varepsilon\oplus\sigma.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.2, printed p. 318, PDF p. 330].

