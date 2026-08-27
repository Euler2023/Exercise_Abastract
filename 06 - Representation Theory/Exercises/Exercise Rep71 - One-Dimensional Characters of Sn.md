---
title: "Exercise Rep71: One-Dimensional Characters of Sn"
topic: representation-theory
difficulty: beginner
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 5, Ex. 5.2, printed p. 317, PDF p. 329"
created: 2026-08-27
---

# Exercise Rep71: One-Dimensional Characters of Sn

## Problem Statement

> [!question] Exercise 5.2
> Prove that the sign representation $p\mapsto\operatorname{sign}p$ and the trivial representation are the only one-dimensional representations of the symmetric group $S_n$.

## Hints

> [!hint]- Hint 1
> All transpositions are conjugate and generate $S_n$.

## Solution

> [!success]- Solution
> A one-dimensional representation $\chi:S_n\to\mathbb C^\times$ is constant on conjugacy classes. Every transposition therefore has the same value $\epsilon$, and $\epsilon^2=1$. Since transpositions generate $S_n$, $\epsilon=1$ gives the trivial character and $\epsilon=-1$ gives the sign character. For $n=1$ these coincide; for $n\ge2$ they are the only possibilities. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** [S1, Ch. 10, §5, Ex. 5.2, printed p. 317, PDF p. 329].

