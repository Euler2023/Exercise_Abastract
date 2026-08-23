---
title: "Exercise G103: Double Cosets Form a Partition"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - double-cosets
  - equivalence-relations
  - subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.9, printed p. 76, PDF p. 88"
created: 2026-08-23
---

# Exercise G103: Double Cosets Form a Partition

## Problem Statement

> [!question] Exercise M.9
> Let $H,K\le G$ and $g\in G$. The set $HgK=\{hgk:h\in H,\ k\in K\}$ is called a double coset. Do the double cosets partition $G$?

## Hints

> [!hint]- Hint 1
> Define $x\sim y$ when $y=hxk$ for some $h\in H$, $k\in K$.

## Solution

> [!success]- Solution
> Yes. Define $x\sim y$ if $y=hxk$ for some $h\in H$ and $k\in K$. It is reflexive by taking $h=k=1$. If $y=hxk$, then $x=h^{-1}yk^{-1}$, so it is symmetric. If $y=h_1xk_1$ and $z=h_2yk_2$, then
> 
> $$
> z=(h_2h_1)x(k_1k_2),
> $$
> 
> so it is transitive. The equivalence class of $g$ is exactly $HgK$, and equivalence classes partition $G$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.9, printed p. 76, PDF p. 88]. The solution is an independent derivation for this vault, not a solution printed in Artin.
