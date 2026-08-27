---
title: "Exercise Rep92: Character-Weighted Operators Are Invariant"
topic: representation-theory
difficulty: beginner
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 7, Ex. 7.5, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep92: Character-Weighted Operators Are Invariant

## Problem Statement

> [!question] Exercise 7.5
> Let $\rho$ be a representation of a group $G$ on $V$, and let $\chi$ be a character of $G$, not necessarily the character of $\rho$. Prove that $T=\sum_g\chi(g)\rho_g$ on $V$ is $G$-invariant.

## Hints

> [!hint]- Hint 1
> Characters are constant on conjugacy classes.

## Solution

> [!success]- Solution
> For $h\in G$,
>
> $$
> \rho_hT\rho_h^{-1}=\sum_g\chi(g)\rho_{hgh^{-1}}
> =\sum_k\chi(h^{-1}kh)\rho_k=\sum_k\chi(k)\rho_k=T.
> $$
>
> Hence $T$ commutes with the representation and is $G$-invariant. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** [S1, Ch. 10, §7, Ex. 7.5, printed p. 320, PDF p. 332].

