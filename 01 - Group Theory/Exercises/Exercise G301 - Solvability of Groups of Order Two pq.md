---
title: "Exercise G301: Solvability of Groups of Order Two pq"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
  - solvable-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 29, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G301: Solvability of Groups of Order Two pq

## Problem Statement

> [!question] Exercise 29
> Let $p,q$ be odd primes. Prove that every group of order $2pq$ is solvable.

## Hints

> [!hint]- Hint 1
> Assume $p<q$. If a Sylow $q$-subgroup is not normal, count its nonidentity elements and compare the space left for Sylow $p$-subgroups.

## Solution

> [!success]- Solution
> We may assume $p<q$. The Sylow number $n_q$ divides $2p$ and is congruent to $1$ modulo $q$. If $n_q\ne1$, the only possible divisor is $2p$, so the Sylow $q$-subgroups contribute
>
> $$
> 2p(q-1)
> $$
>
> distinct nonidentity elements. Only $2p-1$ nonidentity elements remain. If a Sylow $p$-subgroup were also nonnormal, then $n_p\mid2q$, $n_p\equiv1\pmod p$, and $n_p\notin\{1,2\}$, so $n_p\ge q$. Distinct order-$p$ subgroups meet trivially and would contribute at least $q(p-1)>2p-1$ nonidentity elements, a contradiction. Hence some Sylow $p$- or $q$-subgroup $N$ is normal.
>
> The group $N$ is cyclic of prime order. The quotient has order $2r$ for an odd prime $r$; its Sylow $r$-subgroup is normal, so that quotient is solvable. An extension of a solvable group by the abelian group $N$ is solvable. Therefore $G$ is solvable.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Solvable Groups|Solvable Groups]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 29, printed p. 77, PDF p. 92]. The counting proof is independent.

