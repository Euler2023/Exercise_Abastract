---
title: "Exercise G137: Sylow Subgroups and the Three Groups of Order Sixty"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
  - simple-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.3, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G137: Sylow Subgroups and the Three Groups of Order Sixty

## Problem Statement

> [!question] Exercise 8.3
> (a) Determine the numbers of Sylow $p$-subgroups of $PSL_2(\mathbb F_5)$, for $p=2,3,5$.
>
> (b) Prove that the three groups $A_5$, $PSL_2(\mathbb F_4)$, and $PSL_2(\mathbb F_5)$ are isomorphic.

## Hints

> [!hint]- Hint 1
> Use the fractional-linear action to calculate normalizers of representative cyclic or Klein-four subgroups.

> [!hint]- Hint 2
> Let $PSL_2(\mathbb F_5)$ act by conjugation on its five Sylow $2$-subgroups.

## Solution

> [!success]- Solution
> **(a)** Since $|PSL_2(\mathbb F_5)|=60$, its Sylow subgroups have orders $4$, $3$, and $5$. For a standard unipotent subgroup of order $5$, the normalizer has order $10$, so $n_5=60/10=6$. A subgroup of order $3$ has normalizer of order $6$, so $n_3=10$. A Sylow $2$-subgroup is a Klein four group and has normalizer of order $12$, so $n_2=5$.
>
> These values also satisfy the Sylow congruences and account for
>
> $$
> 5(4-1)=15,
> \qquad 10(3-1)=20,
> \qquad 6(5-1)=24
> $$
>
> nonidentity elements, whose total is $59$; hence no additional intersections or subgroup types have been overlooked.
>
> **(b)** The group $PSL_2(\mathbb F_4)$ acts faithfully on the five points of $\mathbb P^1(\mathbb F_4)$. The elementary generators act as even permutations, and the group has order $60$, so its image is $A_5$.
>
> By Exercise G135, $PSL_2(\mathbb F_5)$ is simple. Its conjugation action on the set of five Sylow $2$-subgroups is nontrivial, so the kernel is a proper normal subgroup and must be trivial. This embeds it in $S_5$. Its image has order $60$, and every subgroup of index $2$ in $S_5$ is $A_5$. Therefore
>
> $$
> PSL_2(\mathbb F_4)\cong A_5\cong PSL_2(\mathbb F_5).
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- The element count in part (a) is also a consistency check on all three normalizer calculations.
- **Source status:** The orders and coincidences are discussed at [S1, Ch. 9, §9.8, printed p. 281, PDF p. 293], and Ex. 8.3 was visually checked at [S1, printed p. 287, PDF p. 299]. The Sylow and action arguments are independent.

