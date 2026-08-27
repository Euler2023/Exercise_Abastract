---
title: "Exercise R43: Addition Must Be Commutative"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ring-axioms
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.9, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R43: Addition Must Be Commutative

## Problem Statement

> [!question] Exercise 1.9
> Let $R$ be a set with two laws of composition satisfying all ring axioms except the commutative law for addition. Use the distributive law to prove that the commutative law for addition holds, so that $R$ is a ring.

## Hints

> [!hint]- Hint 1
> Expand $(1+1)(a+b)$ first by left distributivity and then by right distributivity.

## Solution

> [!success]- Solution
> Associativity, an additive identity, and additive inverses make addition a group law, so cancellation is available. Distributing in the two orders gives
>
> $$
> (1+1)(a+b)=(a+b)+(a+b)=a+b+a+b,
> $$
>
> while also
>
> $$
> (1+1)(a+b)=(1+1)a+(1+1)b=a+a+b+b.
> $$
>
> Hence $a+b+a+b=a+a+b+b$. Cancel $a$ on the left and $b$ on the right to obtain $b+a=a+b$. Thus addition is commutative.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §1, Ex. 1.9, printed p. 354, PDF p. 366]. The proof is independent.

