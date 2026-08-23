---
title: "Exercise R32: Euclidean-Algorithm Addition Game"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - euclidean-algorithm
  - coprime-integers
  - invariants
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.13, printed p. 76, PDF p. 88"
created: 2026-08-23
---

# Exercise R32: Euclidean-Algorithm Addition Game

## Problem Statement

> [!question] Exercise M.13
> Starting from $(1,1)$, a move replaces $(a,b)$ by either $(a+b,b)$ or $(a,a+b)$. Determine all points that can be reached.

## Hints

> [!hint]- Hint 1
> The gcd is invariant under either move.

> [!hint]- Hint 2
> Reverse a move by subtracting the smaller coordinate from the larger one.

## Solution

> [!success]- Solution
> Every reachable pair has positive coordinates and gcd $1$, because
> 
> $$
> \gcd(a+b,b)=\gcd(a,b)=\gcd(a,a+b).
> $$
> 
> Conversely, let $(a,b)$ be a positive coprime pair. If $a=b$, coprimality forces $(a,b)=(1,1)$. Otherwise subtract the smaller coordinate from the larger. Positivity and gcd are preserved, while $a+b$ strictly decreases. Repeating therefore reaches $(1,1)$. Reversing these subtraction steps gives permitted forward moves from $(1,1)$ to $(a,b)$. Hence the reachable points are exactly
> 
> $$
> \{(a,b)\in\mathbb Z_{>0}^2:\gcd(a,b)=1\}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.13, printed p. 76, PDF p. 88]. The solution is an independent derivation for this vault, not a solution printed in Artin.
