---
title: "Exercise G81: Intersections of Cosets and Finite-Index Subgroups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - cosets
  - finite-index
  - intersections
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 10, Ex. 10.2, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G81: Intersections of Cosets and Finite-Index Subgroups

## Problem Statement

> [!question] Exercise 10.2
> Let $H,K\le G$.
> 
> **(a)** Prove $xH\cap yK$ is empty or a coset of $H\cap K$.
> 
> **(b)** If $H,K$ have finite index, prove $H\cap K$ has finite index.

## Hints

> [!hint]- Hint 1
> If $z$ lies in the intersection, translate everything by $z^{-1}$.

> [!hint]- Hint 2
> Map an $(H\cap K)$-coset to its pair of $H$- and $K$-cosets.

## Solution

> [!success]- Solution
> If $z\in xH\cap yK$, then $xH=zH$ and $yK=zK$. Therefore
> 
> $$
> xH\cap yK=zH\cap zK=z(H\cap K).
> $$
> 
> This proves (a).
> 
> For (b), define
> 
> $$
> G/(H\cap K)\longrightarrow G/H\times G/K,qquad
> g(H\cap K)\longmapsto(gH,gK).
> $$
> 
> It is injective: equal pairs imply $g_2^{-1}g_1\in H\cap K$. Hence
> 
> $$
> [G:H\cap K]\le [G:H][G:K]<\infty.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §10, Ex. 10.2, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
