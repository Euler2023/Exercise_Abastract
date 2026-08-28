---
title: "Exercise G293: Counting a Finite Correspondence"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - counting
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 17, printed p. 76, PDF p. 91"
created: 2026-08-28
---

# Exercise G293: Counting a Finite Correspondence

## Problem Statement

> [!question] Exercise 17
> Let $X,Y$ be finite sets and let $C\subseteq X\times Y$. For $x\in X$, let $\varphi(x)$ be the number of $y\in Y$ such that $(x,y)\in C$. Verify that
>
> $$
> |C|=\sum_{x\in X}\varphi(x).
> $$

## Hints

> [!hint]- Hint 1
> Partition $C$ according to its first coordinate.

## Solution

> [!success]- Solution
> For each $x\in X$, put $C_x=\{(x,y)\in C:y\in Y\}$. The sets $C_x$ are pairwise disjoint, their union is $C$, and $|C_x|=\varphi(x)$. Finite additivity therefore gives
>
> $$
> |C|=\sum_{x\in X}|C_x|=\sum_{x\in X}\varphi(x).
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G193 - Burnside Formula by Double Counting|Exercise G193]]

## Notes

- **Method boundary:** No group structure is needed; this is the finite fiber-counting identity used in later action arguments.
- **Source status:** [S2, Ch. I, Ex. 17, printed p. 76, PDF p. 91]. The proof is independently derived.

