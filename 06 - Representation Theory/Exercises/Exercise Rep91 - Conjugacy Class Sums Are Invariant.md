---
title: "Exercise Rep91: Conjugacy Class Sums Are Invariant"
topic: representation-theory
difficulty: beginner
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 7, Ex. 7.4, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep91: Conjugacy Class Sums Are Invariant

## Problem Statement

> [!question] Exercise 7.4
> Let $\rho$ be a representation of $G$ and let $C$ be a conjugacy class in $G$. Show that $T=\sum_{g\in C}\rho_g$ is $G$-invariant.

## Hints

> [!hint]- Hint 1
> Conjugation permutes the elements of $C$.

## Solution

> [!success]- Solution
> For $h\in G$,
>
> $$
> \rho_hT\rho_h^{-1}=\sum_{g\in C}\rho_{hgh^{-1}}.
> $$
>
> Since $g\mapsto hgh^{-1}$ permutes $C$, the right side equals $T$. Thus $T$ commutes with every $\rho_h$ and is $G$-invariant. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source status:** [S1, Ch. 10, §7, Ex. 7.4, printed p. 320, PDF p. 332].

