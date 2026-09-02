---
title: "Exercise G180: Symmetries of a Stack of Three Rectangular Sheets"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - permutation-actions
  - semidirect-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.9, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G180: Symmetries of a Stack of Three Rectangular Sheets

## Problem Statement

> [!question] Exercise 11.9
> Three sheets of rectangular paper $S_1,S_2,S_3$ are made into a stack. Let $G$ be the group of all symmetries of this configuration, including symmetries of the individual sheets as well as permutations of the set of sheets. Determine the order of $G$, and the kernel of the map $G\to S_3$ defined by the permutations of $\{S_1,S_2,S_3\}$.

## Hints

> [!hint]- Hint 1
> A nonsquare rectangle has symmetry group $D_2$ of order $4$.

> [!hint]- Hint 2
> The three sheet-symmetry choices form $D_2^3$, and $S_3$ permutes these three factors.

## Solution

> [!success]- Solution
> Each individual rectangular sheet has symmetry group $D_2\cong C_2\times C_2$ of order $4$. The choices on the three sheets are independent, giving a normal subgroup
>
> $$
> K\cong D_2^3,\qquad |K|=4^3=64.
> $$
>
> Every permutation of the three sheets is allowed and conjugates $K$ by permuting its three factors. Hence
>
> $$
> G\cong D_2^3\rtimes S_3=D_2\wr S_3.
> $$
>
> The natural map $G\to S_3$ is surjective, has kernel $K$, and therefore
>
> $$
> |G|=64\cdot6=384,\qquad \ker(G\to S_3)=D_2^3.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- This is the standard wreath-product interpretation intended by “symmetries of the individual sheets as well as permutations.”
- **Source status:** [S1, Ch. 6, §11, Ex. 11.9, printed p. 192, PDF p. 204]; independent semidirect-product calculation.
