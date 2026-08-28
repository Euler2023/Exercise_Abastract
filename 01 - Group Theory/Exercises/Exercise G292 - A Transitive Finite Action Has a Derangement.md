---
title: "Exercise G292: A Transitive Finite Action Has a Derangement"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - fixed-points
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 15, printed p. 76, PDF p. 91"
created: 2026-08-28
---

# Exercise G292: A Transitive Finite Action Has a Derangement

## Problem Statement

> [!question] Exercise 15
> Let a finite group $G$ act transitively on a finite set $S$ with $|S|\ge2$. Prove that some $x\in G$ has no fixed point in $S$.

## Hints

> [!hint]- Hint 1
> Count the pairs $(g,s)$ satisfying $gs=s$ in two ways.

## Solution

> [!success]- Solution
> Let
>
> $$
> C=\{(g,s)\in G\times S:gs=s\}.
> $$
>
> Counting first by $s$, transitivity and orbit-stabilizer give
>
> $$
> |C|=\sum_{s\in S}|G_s|
> =|S|\frac{|G|}{|S|}
> =|G|.
> $$
>
> Suppose, toward a contradiction, that every element of $G$ fixes at least one point. The identity fixes all $|S|$ points, and each of the remaining $|G|-1$ elements fixes at least one. Counting by $g$ would then give
>
> $$
> |C|\ge |S|+(|G|-1)>|G|,
> $$
>
> because $|S|\ge2$. This contradicts the previous count. Therefore at least one group element fixes no point.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Orbit-Stabilizer]]
- [[01 - Group Theory/Exercises/Exercise G193 - Burnside Formula by Double Counting|Exercise G193]]

## Notes

- **Terminology:** A fixed-point-free permutation in a finite action is called a derangement.
- **Source status:** [S2, Ch. I, Ex. 15, printed p. 76, PDF p. 91]. The double count is independent.
