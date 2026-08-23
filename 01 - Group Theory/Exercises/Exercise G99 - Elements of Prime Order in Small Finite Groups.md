---
title: "Exercise G99: Elements of Prime Order in Small Finite Groups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - element-orders
  - cauchy-theorem
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.2, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise G99: Elements of Prime Order in Small Finite Groups

## Problem Statement

> [!question] Exercise M.2
> **(a)** Prove that every group of even order contains an element of order $2$.
> 
> **(b)** Prove that every group of order $21$ contains an element of order $3$.

## Hints

> [!hint]- Hint 1
> For (a), pair each element with its inverse.

> [!hint]- Hint 2
> For (b), apply Cauchy's theorem for the prime $3$.

## Solution

> [!success]- Solution
> **(a)** In a finite group, elements distinct from their inverses occur in pairs $\{x,x^{-1}\}$. After removing the identity, an even-order group leaves an odd number of elements, so at least one nonidentity element satisfies $x=x^{-1}$. Then $x^2=1$, and $x$ has order $2$.
> 
> **(b)** Since $3$ divides $|G|=21$, Cauchy's theorem supplies an element $x\in G$ of order $3$.
> 
> The second part imports Cauchy's theorem; it is not proved at this note's level.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.2, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **External input:** Part (b) uses Cauchy's theorem for finite groups.
