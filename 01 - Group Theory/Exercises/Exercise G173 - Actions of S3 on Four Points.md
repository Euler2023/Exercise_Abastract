---
title: "Exercise G173: Actions of S3 on Four Points"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - permutation-actions
  - symmetric-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.1, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G173: Actions of S3 on Four Points

## Problem Statement

> [!question] Exercise 11.1
> Describe all ways in which $S_3$ can operate on a set of four elements.

## Hints

> [!hint]- Hint 1
> Decompose the set into transitive orbits. A transitive orbit has size equal to the index of a subgroup of $S_3$.

> [!hint]- Hint 2
> The possible orbit sizes not exceeding $4$ are $1,2,3$; partition $4$ using them.

## Solution

> [!success]- Solution
> Up to equivalence of $S_3$-sets, a transitive action is an action on cosets of a subgroup. The available orbit sizes at most $4$ are $1,2,3$; there is no subgroup of index $4$. Thus the possible orbit-size partitions and actions are:
>
> 1. $1+1+1+1$: the trivial action;
> 2. $2+1+1$: the sign action on two points and two fixed points;
> 3. $2+2$: two copies of the sign action;
> 4. $3+1$: the natural action on three points and one fixed point.
>
> The transitive two-point action is unique because its kernel is $A_3$, and the transitive three-point action is unique because its point stabilizer is an order-two subgroup, all of which are conjugate. Hence the list is complete. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Coset actions]]

## Notes

- “All ways” is interpreted up to relabeling the four-element set, equivalently up to isomorphism of $S_3$-sets.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.1, printed p. 192, PDF p. 204]; independent classification.

