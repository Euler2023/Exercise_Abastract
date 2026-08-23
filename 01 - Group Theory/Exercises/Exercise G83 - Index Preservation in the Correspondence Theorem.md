---
title: "Exercise G83: Index Preservation in the Correspondence Theorem"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - correspondence-theorem
  - index
  - cosets
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 10, Ex. 10.4, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G83: Index Preservation in the Correspondence Theorem

## Problem Statement

> [!question] Exercise 10.4
> In the Correspondence Theorem, let $H$ and $H'$ correspond. Prove $[G:H]=[G':H']$.

## Hints

> [!hint]- Hint 1
> Construct a bijection between the two coset sets.

## Solution

> [!success]- Solution
> Let $\varphi:G\to G'$ be the surjection and $H=\varphi^{-1}(H')$. Define
> 
> $$
> G/H\longrightarrow G'/H',\qquad gH\longmapsto\varphi(g)H'.
> $$
> 
> It is well-defined and surjective. If the images of $g_1H$ and $g_2H$ agree, then $\varphi(g_2^{-1}g_1)\in H'$, so $g_2^{-1}g_1\in H$ and the original cosets agree. Thus the map is bijective and the indices are equal.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §10, Ex. 10.4, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
