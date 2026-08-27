---
title: "Exercise G172: A Translational Tiling Subset Is a Subgroup"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 10, Ex. 10.3, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G172: A Translational Tiling Subset Is a Subgroup

## Problem Statement

> [!question] Exercise 10.3
> Consider the operation of left multiplication by $G$ on the set of its subsets. Let $U$ be a subset such that the sets $gU$ partition $G$. Let $H$ be the unique subset in this orbit that contains $1$. Prove that $H$ is a subgroup of $G$.

## Hints

> [!hint]- Hint 1
> If $h\in H$, then both $H$ and $hH$ contain $h$.

> [!hint]- Hint 2
> Use the disjointness of the partition to conclude $hH=H$.

## Solution

> [!success]- Solution
> By definition, $1\in H$. Let $h\in H$. Since $1\in H$, we also have $h=h\cdot1\in hH$. The two partition members $H$ and $hH$ intersect at $h$, so they must be equal:
>
> $$
> hH=H.
> $$
>
> If $h,k\in H$, then $hk\in hH=H$, proving closure. Also, because $1\in hH$, there is $k\in H$ with $hk=1$, so $k=h^{-1}\in H$. Therefore $H$ contains the identity and is closed under products and inverses; hence $H\le G$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- The argument also shows that the partition is exactly the usual partition of $G$ into left cosets of $H$.
- **Source status:** [S1, Ch. 6, §10, Ex. 10.3, printed p. 192, PDF p. 204]; independent proof.
