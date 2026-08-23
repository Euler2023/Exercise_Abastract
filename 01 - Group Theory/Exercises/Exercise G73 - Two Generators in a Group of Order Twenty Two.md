---
title: "Exercise G73: Two Generators in a Group of Order 22"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - generators
  - orders
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.7, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise G73: Two Generators in a Group of Order 22

## Problem Statement

> [!question] Exercise 8.7
> Let $|G|=22$, $x\ne1$, and let $y$ not be a power of $x$. Prove $\langle x,y\rangle=G$.

## Hints

> [!hint]- Hint 1
> The subgroup order divides $22$ and is strictly larger than $\langle x\rangle$ when needed.

## Solution

> [!success]- Solution
> Let $H=\langle x,y\rangle$. If $|x|=22$, then $\langle x\rangle=G$. If $|x|=11$, then $y\notin\langle x\rangle$, so $|H|>11$ and Lagrange forces $|H|=22$.
> 
> If $|x|=2$, then $H$ properly contains $\langle x\rangle$, so $|H|$ is $11$ or $22$. It cannot be $11$ because it contains an element of order $2$. Hence again $|H|=22$. Thus $H=G$.

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.7, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
