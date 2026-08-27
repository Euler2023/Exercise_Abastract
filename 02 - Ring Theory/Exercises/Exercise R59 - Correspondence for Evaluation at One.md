---
title: "Exercise R59: Correspondence for Evaluation at One"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §4, Ex. 4.1, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R59: Correspondence for Evaluation at One

## Problem Statement

> [!question] Exercise 4.1
> Consider the homomorphism $\mathbb Z[x]\to\mathbb Z$ that sends $x\mapsto1$. Explain what the Correspondence Theorem says about ideals of $\mathbb Z[x]$.

## Hints

> [!hint]- Hint 1
> Determine the kernel, then lift the ideals $(n)$ of $\mathbb Z$.

## Solution

> [!success]- Solution
> Evaluation at $1$ is surjective and has kernel $(x-1)$. Hence
>
> $$
> \mathbb Z[x]/(x-1)\cong\mathbb Z.
> $$
>
> The Correspondence Theorem gives a bijection between ideals of $\mathbb Z[x]$ containing $(x-1)$ and ideals of $\mathbb Z$. Since every ideal of $\mathbb Z$ is $(n)$, the corresponding ideals are exactly
>
> $$
> (x-1,n),\qquad n\ge0.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Isomorphism Theorems for Rings|Isomorphism Theorems for Rings]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §4, Ex. 4.1, printed p. 355, PDF p. 367]. The explicit lifting is independent.

