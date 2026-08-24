---
title: "Exercise G117: Orbits of Subgroup Left Multiplication"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - cosets
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 1, Ex. 1.2, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G117: Orbits of Subgroup Left Multiplication

## Problem Statement

> [!question] Exercise 1.2
> Let $H$ be a subgroup of a group $G$. Describe the orbits for the operation of $H$ on $G$ by left multiplication.

## Hints

> [!hint]- Hint 1
> Write down the orbit of one element $x\in G$ directly from the definition.

## Solution

> [!success]- Solution
> The orbit of $x\in G$ is
>
> $$
> H*x=\{hx:h\in H\}=Hx.
> $$
>
> This is the right coset of $H$ represented by $x$. Therefore the orbits are precisely the right cosets of $H$ in $G$. In particular, the orbit decomposition is the usual partition of $G$ into right cosets. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- The side matters: left multiplication by elements of $H$ produces right cosets $Hx$.
- **Source status:** [S1, Ch. 7, §1, Ex. 1.2, printed p. 221, PDF p. 233]; independent derivation.

