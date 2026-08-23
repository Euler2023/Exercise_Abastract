---
title: "Exercise LA94: Successive-Intersection Criterion for Direct Sums"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - direct-sums
  - subspaces
  - uniqueness
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 5, Ex. 5.3, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA94: Successive-Intersection Criterion for Direct Sums

## Problem Statement

> [!question] Exercise 5.3
> Let $W_1,\ldots,W_k\le V$ and suppose $V=\sum_iW_i$. Assume
> 
> $$
> W_1\cap W_2=0,
> \quad (W_1+W_2)\cap W_3=0,
> \quad\ldots,\quad
> (W_1+\cdots+W_{k-1})\cap W_k=0.
> $$
> 
> Prove that $V=W_1\oplus\cdots\oplus W_k$.

## Hints

> [!hint]- Hint 1
> Prove uniqueness of a representation by peeling off the last summand.

## Solution

> [!success]- Solution
> Suppose
> 
> $$
> w_1+\cdots+w_k=0,
> \qquad w_i\in W_i.
> $$
> 
> Then $w_k=-(w_1+\cdots+w_{k-1})$ belongs to both $W_k$ and $W_1+\cdots+W_{k-1}$, so $w_k=0$. Repeating the argument with $k-1,k-2,\ldots,2$ gives every $w_i=0$. Thus a sum representation is unique. Since the assumed ordinary sum already equals $V$, it is a direct sum.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §5, Ex. 5.3, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
