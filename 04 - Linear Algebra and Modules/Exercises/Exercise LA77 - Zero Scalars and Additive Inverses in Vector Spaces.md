---
title: "Exercise LA77: Zero Scalars and Additive Inverses in Vector Spaces"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - vector-spaces
  - subspaces
  - axioms
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 2, Ex. 2.1, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA77: Zero Scalars and Additive Inverses in Vector Spaces

## Problem Statement

> [!question] Exercise 2.1
> **(a)** Prove that the scalar product of a vector with the zero element of the field $F$ is the zero vector.
> 
> **(b)** Prove that if $w$ belongs to a subspace $W$, then $-w\in W$.

## Hints

> [!hint]- Hint 1
> Use $(0+0)v=0v+0v$ and cancellation in the additive group.

> [!hint]- Hint 2
> Use closure of $W$ under scalar multiplication by $-1$.

## Solution

> [!success]- Solution
> For any vector $v$,
> 
> $$
> 0v=(0+0)v=0v+0v.
> $$
> 
> Adding the inverse of $0v$ to both sides gives $0v=0$, the zero vector. If $w\in W$, then scalar closure gives $(-1)w\in W$. Since
> 
> $$
> w+(-1)w=(1-1)w=0w=0,
> $$
> 
> we have $(-1)w=-w$, so $-w\in W$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §2, Ex. 2.1, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
