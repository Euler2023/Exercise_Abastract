---
title: "Exercise LA147: Jordan Forms from the Rank of T Minus Lambda I"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-form
  - rank
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.3, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA147: Jordan Forms from the Rank of T Minus Lambda I

## Problem Statement

> [!question] Exercise 7.3
> Let $\dim V=5$, $p_T(t)=(t-\lambda)^5$, and $\operatorname{rank}(T-\lambda I)=2$. What Jordan forms are possible?

## Hints

> [!hint]- Hint 1
> For nilpotent Jordan blocks of sizes $s_i$, the rank is $\sum(s_i-1)=5-(\text{number of blocks})$.

## Solution

> [!success]- Solution
> Rank two means that $T-\lambda I$ has $5-2=3$ Jordan blocks. The partitions of $5$ into exactly three positive parts are $3+1+1$ and $2+2+1$. Hence the possibilities are
>
> $$
> J_3(\lambda)\oplus[\lambda]\oplus[\lambda],
> \qquad
> J_2(\lambda)\oplus J_2(\lambda)\oplus[\lambda].
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** [S1, Ch. 4, §7, Ex. 7.3, printed p. 129, PDF p. 141]; independent classification.

