---
title: "Exercise G174: Actions of the Tetrahedral Group on Two Points"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - permutation-actions
  - alternating-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.2, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G174: Actions of the Tetrahedral Group on Two Points

## Problem Statement

> [!question] Exercise 11.2
> Describe all ways in which the tetrahedral group $T$ can operate on a set of two elements.

## Hints

> [!hint]- Hint 1
> The rotation group $T$ is isomorphic to $A_4$.

> [!hint]- Hint 2
> A nontrivial two-point action would give a surjective homomorphism $A_4\to C_2$ and hence a normal subgroup of index $2$.

## Solution

> [!success]- Solution
> An action on two points is a homomorphism $T\cong A_4\to S_2\cong C_2$. If it were nontrivial, its kernel would be a normal subgroup of $A_4$ of order $6$. But $A_4$ has no subgroup of order $6$: such a subgroup would contain all four Sylow $3$-subgroups or contradict their conjugacy/count.
>
> Therefore every homomorphism $A_4\to C_2$ is trivial. The only action fixes both points. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Alternating and symmetric groups]]

## Notes

- Equivalently, the abelianization of $A_4$ is $C_3$, which has no quotient of order $2$.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.2, printed p. 192, PDF p. 204]; independent proof.

