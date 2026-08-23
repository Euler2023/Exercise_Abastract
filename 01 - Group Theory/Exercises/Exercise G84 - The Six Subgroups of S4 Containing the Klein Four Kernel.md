---
title: "Exercise G84: The Six Subgroups of $S_4$ Containing the Klein Four Kernel"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - correspondence-theorem
  - symmetric-groups
  - klein-four-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 10, Ex. 10.5, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G84: The Six Subgroups of $S_4$ Containing the Klein Four Kernel

## Problem Statement

> [!question] Exercise 10.5
> For Artin's homomorphism $S_4\to S_3$ with kernel $K$, determine the six subgroups of $S_4$ containing $K$.

## Hints

> [!hint]- Hint 1
> They are preimages of the six subgroups of $S_3$.

## Solution

> [!success]- Solution
> The kernel is the Klein four group
> 
> $$
> K=\{1,(12)(34),(13)(24),(14)(23)\}.
> $$
> 
> The six preimages are $K$, $A_4$, $S_4$, and three order-$8$ subgroups stabilizing the three partitions of $\{1,2,3,4\}$ into two pairs. They may be written
> 
> $$
> D_1=\langle(12),(34),(13)(24)\rangle,
> $$
> 
> $$
> D_2=\langle(13),(24),(12)(34)\rangle,
> $$
> 
> $$
> D_3=\langle(14),(23),(12)(34)\rangle.
> $$
> 
> Each $D_i$ is isomorphic to the dihedral group of order $8$. These correspond respectively to the trivial subgroup, the three order-$2$ subgroups, $A_3$, and all of $S_3$.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §10, Ex. 10.5, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
