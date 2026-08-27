---
title: "Exercise G160: The Unique Subgroup of Order Twelve in S4"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - normal-subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.11, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G160: The Unique Subgroup of Order Twelve in S4

## Problem Statement

> [!question] Exercise 7.11
> Prove that the only subgroup of order $12$ of the symmetric group $S_4$ is the alternating group $A_4$.

## Hints

> [!hint]- Hint 1
> A subgroup of order $12$ has index $2$, hence is normal.

> [!hint]- Hint 2
> A normal subgroup is a union of conjugacy classes containing the identity. List the class sizes in $S_4$.

## Solution

> [!success]- Solution
> Let $H\le S_4$ have order $12$. Then $[S_4:H]=2$, so $H$ is normal. The conjugacy classes of $S_4$, indexed by cycle type, have sizes
>
> $$
> 1, 6, 3, 8, 6
> $$
>
> for the identity, transpositions, double transpositions, $3$-cycles, and $4$-cycles, respectively.
>
> Since $H$ is normal, it is a union of these classes and must contain the identity. The only selection of class sizes totaling $12$ is
>
> $$
> 1+3+8=12.
> $$
>
> Thus $H$ consists of the identity, the three double transpositions, and the eight $3$-cycles. These are exactly the even permutations, so $H=A_4$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- The proof uses both index-two normality and the complete conjugacy-class partition of $S_4$.
- **Source status:** [S1, Ch. 6, §7, Ex. 7.11, printed p. 191, PDF p. 203]; independent proof, cross-checked against a selected-solutions source.

