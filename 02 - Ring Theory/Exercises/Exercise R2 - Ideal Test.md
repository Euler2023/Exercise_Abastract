---
title: "Exercise R2: Ideal Test"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - proof
source: "Dummit & Foote, Ch. 7"
created: 2025-01-19
---

# Exercise R2: Ideal Test

## Problem Statement

> [!question] Exercise
> Let $R$ be a commutative ring with unity and let $I \subseteq R$. Prove that $I$ is an ideal if and only if:
>
> 1. $0 \in I$
> 2. $a - b \in I$ for all $a, b \in I$
> 3. $ra \in I$ for all $r \in R$ and $a \in I$

## Hints

> [!hint]- Hint 1
> For the forward direction, use the definition of ideal directly.

> [!hint]- Hint 2
> For the backward direction, first show $(I, +)$ is a subgroup using conditions 1 and 2.

## Solution

> [!success]- Solution
> ### Proof
> **($\Rightarrow$)** Assume $I$ is an ideal.
>
> 1. Since $I$ is a subgroup of $(R, +)$, we have $0 \in I$.
> 2. Since $I$ is a subgroup, $a, b \in I$ implies $a - b \in I$.
> 3. By definition of ideal, $ra \in I$ for all $r \in R$, $a \in I$.
>
> **($\Leftarrow$)** Assume conditions 1-3 hold.
>
> **Step 1: $(I, +)$ is a subgroup of $(R, +)$.**
> - Non-empty: $0 \in I$ by (1)
> - Closure under subtraction: $a - b \in I$ by (2)
> - Therefore $(I, +) \leq (R, +)$ by the one-step subgroup test
>
> **Step 2: $I$ absorbs multiplication.**
> - By (3), $ra \in I$ for all $r \in R$, $a \in I$
> - Since $R$ is commutative, $ar = ra \in I$ as well
>
> Therefore $I$ is a (two-sided) ideal. $\square$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]

## Notes

For non-commutative rings, we need to verify both $ra \in I$ and $ar \in I$ separately.
