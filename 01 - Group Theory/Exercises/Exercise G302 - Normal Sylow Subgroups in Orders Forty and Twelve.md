---
title: "Exercise G302: Normal Sylow Subgroups in Orders Forty and Twelve"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 30, printed p. 78, PDF p. 93"
created: 2026-08-28
---

# Exercise G302: Normal Sylow Subgroups in Orders Forty and Twelve

## Problem Statement

> [!question] Exercise 30
> (a) Prove that one of the Sylow subgroups of a group of order $40$ is normal.
>
> (b) Prove that one of the Sylow subgroups of a group of order $12$ is normal.

## Hints

> [!hint]- Hint 1
> For order $12$, if there are four Sylow $3$-subgroups, count the remaining elements.

## Solution

> [!success]- Solution
> **(a)** If $|G|=40=2^3\cdot5$, then $n_5\mid8$ and $n_5\equiv1\pmod5$. The only possibility is $n_5=1$, so the Sylow $5$-subgroup is normal.
>
> **(b)** If $|G|=12$, then $n_3$ is $1$ or $4$. In the first case the Sylow $3$-subgroup is normal. If $n_3=4$, the four order-$3$ subgroups have pairwise trivial intersections and contribute eight nonidentity elements. The four remaining elements include the identity, and every Sylow $2$-subgroup, having four elements and no element of order $3$, must be exactly this remaining set. It is therefore unique and normal.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 30, printed p. 78, PDF p. 93]. The proof is independently derived.

