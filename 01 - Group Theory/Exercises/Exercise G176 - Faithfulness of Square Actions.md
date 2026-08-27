---
title: "Exercise G176: Faithfulness of Square Actions"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - permutation-actions
  - dihedral-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.4, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G176: Faithfulness of Square Actions

## Problem Statement

> [!question] Exercise 11.4
> Let $G=D_4$ be the dihedral group of symmetries of a square. Is the action of $G$ on the vertices a faithful action? On the diagonals?

## Hints

> [!hint]- Hint 1
> A symmetry fixing every vertex is determined on the whole square.

> [!hint]- Hint 2
> For the two diagonals, find all symmetries preserving each diagonal setwise.

## Solution

> [!success]- Solution
> The vertex action is faithful: an isometry fixing all four vertices is the identity, so its kernel is trivial.
>
> The action on the two diagonals is not faithful. If $r$ is a quarter-turn and $s$ is reflection in one diagonal, then the kernel is
>
> $$
> \{1,r^2,s,r^2s\}\cong C_2\times C_2.
> $$
>
> Each of these four symmetries preserves both diagonal lines setwise. A quarter-turn exchanges them, so the image has order $2$ and the kernel has order $8/2=4$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- Faithfulness depends on the chosen set: the same geometric group has a faithful four-point action and a nonfaithful two-point action.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.4, printed p. 192, PDF p. 204]; independent kernel computation.

