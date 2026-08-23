---
title: "Exercise G69: An Element of Order $p$ in a Finite $p$-Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - orders
  - p-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.3, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G69: An Element of Order $p$ in a Finite $p$-Group

## Problem Statement

> [!question] Exercise 8.3
> Does every finite group whose order is a power of a prime $p$ contain an element of order $p$?

## Hints

> [!hint]- Hint 1
> Take any nonidentity element and reduce its $p$-power order.

## Solution

> [!success]- Solution
> Yes. Choose $x\ne1$. By Lagrange, $|x|=p^r$ for some $r\ge1$. Then
> 
> $$
> y=x^{p^{r-1}}
> $$
> 
> satisfies $y^p=1$, while $y\ne1$ by the definition of the order of $x$. Thus $y$ has order $p$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.3, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
