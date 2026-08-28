---
title: "Exercise G300: Normal Sylow Subgroups in Order p Squared q"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
  - solvable-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 28, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G300: Normal Sylow Subgroups in Order p Squared q

## Problem Statement

> [!question] Exercise 28
> Let $p,q$ be distinct primes. Prove that a group of order $p^2q$ is solvable and that one of its Sylow subgroups is normal.

## Hints

> [!hint]- Hint 1
> If neither Sylow subgroup were normal, compare $n_p\mid q$ with $n_q\mid p^2$. The only residual numerical case is $|G|=12$.

## Solution

> [!success]- Solution
> Suppose neither Sylow subgroup is normal. Since $n_p\mid q$ and $n_p\equiv1\pmod p$, we must have $n_p=q$, hence $q>p$. Next $n_q\mid p^2$ and $n_q\equiv1\pmod q$. Because $q>p$, the value $n_q=p$ is impossible, so $n_q=p^2$. Therefore $q\mid p^2-1=(p-1)(p+1)$. The prime $q>p$ cannot divide $p-1$, so it divides $p+1$; hence $q=p+1$, forcing $(p,q)=(2,3)$.
>
> It remains to exclude simultaneous nonnormality for order $12$. If $n_3=4$, the four Sylow $3$-subgroups contribute eight distinct nonidentity elements. Exactly four elements remain, including the identity. Every Sylow $2$-subgroup has four elements, all among those four, so it is unique and normal. Thus in all cases at least one Sylow subgroup $N$ is normal.
>
> The normal subgroup $N$ has order $p^2$ or $q$, hence is abelian, and $G/N$ has order $q$ or $p^2$, hence is also abelian. Consequently the derived subgroup $G'$ lies in $N$ and $G''=1$, so $G$ is solvable.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Solvable Groups|Solvable Groups]]
- [[01 - Group Theory/Exercises/Exercise G297 - Classification of Groups of Order p Squared|Exercise G297]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 28, printed p. 77, PDF p. 92]. The Sylow count and solvability deduction are independent.

