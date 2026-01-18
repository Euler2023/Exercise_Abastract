---
title: "Exercise G2: Prove Uniqueness of Inverses"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - proof
source: "Dummit & Foote, Ch. 1"
created: 2025-01-19
---

# Exercise G2: Uniqueness of Inverses

## Problem Statement

> [!question] Exercise
> Let $(G, \cdot)$ be a [[01 - Group Theory/Concepts/Group Definition|group]] and $a \in G$. Prove that the inverse $a^{-1}$ is unique.

## Hints

> [!hint]- Hint 1
> Suppose $b$ and $c$ are both inverses of $a$.

> [!hint]- Hint 2
> Compute $b \cdot (a \cdot c)$ in two different ways using associativity.

## Solution

> [!success]- Solution
> ### Approach
> Assume two inverses exist and use associativity to show they're equal.
>
> ### Proof
> Suppose $b$ and $c$ are both inverses of $a$, meaning:
> - $a \cdot b = b \cdot a = e$
> - $a \cdot c = c \cdot a = e$
>
> Consider:
> $$b = b \cdot e = b \cdot (a \cdot c) = (b \cdot a) \cdot c = e \cdot c = c$$
>
> Therefore $b = c$, and the inverse is unique. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

This result justifies the notation $a^{-1}$ for "the" inverse of $a$.
