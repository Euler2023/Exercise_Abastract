---
title: "Exercise G178: Minimal Faithful Permutation Degrees"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - permutation-actions
  - quaternion-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.7, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G178: Minimal Faithful Permutation Degrees

## Problem Statement

> [!question] Exercise 11.7
> For each group, find the smallest integer $n$ such that the group has a faithful operation on a set of order $n$: (a) $D_4$, (b) $D_6$, (c) the quaternion group $H$.

## Hints

> [!hint]- Hint 1
> Use the natural square action for $D_4$ and the decomposition $D_6\cong S_3\times C_2$ for a five-point action.

> [!hint]- Hint 2
> Every nontrivial subgroup of $Q_8$ contains $-1$.

## Solution

> [!success]- Solution
> **(a)** $D_4$ acts faithfully on the four vertices of a square, so $n\le4$. It cannot embed in $S_3$ because $8\nmid6$. Hence $n=4$.
>
> **(b)** Since
>
> $$
> D_6\cong D_3\times C_2\cong S_3\times C_2,
> $$
>
> it acts faithfully on a disjoint union of a three-point $S_3$-orbit and a two-point $C_2$-orbit, so $n\le5$. It cannot embed in $S_4$: a subgroup of order $12$ in $S_4$ would be $A_4$, which is not isomorphic to $D_6$. Thus $n=5$.
>
> **(c)** The regular action gives a faithful action of $Q_8$ on $8$ points. In any transitive constituent of smaller size the stabilizer is nontrivial; because every subgroup of $Q_8$ is normal, that stabilizer lies in the kernel of the constituent. Moreover every nontrivial subgroup contains $-1$, so the intersection of the kernels of any collection of such smaller constituents still contains $-1$. Hence no action on fewer than $8$ points is faithful, and $n=8$.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The answers use Artin's convention $|D_m|=2m$.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.7, printed p. 192, PDF p. 204]; independent minimality proofs.

