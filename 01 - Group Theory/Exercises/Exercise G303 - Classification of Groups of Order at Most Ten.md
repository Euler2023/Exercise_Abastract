---
title: "Exercise G303: Classification of Groups of Order at Most Ten"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - classification
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 31, printed p. 78, PDF p. 93"
created: 2026-08-28
---

# Exercise G303: Classification of Groups of Order at Most Ten

## Problem Statement

> [!question] Exercise 31
> Determine all groups of order at most $10$ up to isomorphism. In particular, show that a nonabelian group of order $6$ is isomorphic to $S_3$.

## Hints

> [!hint]- Hint 1
> Use the classifications of groups of orders $p$, $p^2$, and $8$, together with Sylow theory for orders $6$ and $10$.

## Solution

> [!success]- Solution
> The complete list is
>
> | Order | Isomorphism types |
> |---:|---|
> | $1$ | $1$ |
> | $2$ | $C_2$ |
> | $3$ | $C_3$ |
> | $4$ | $C_4$, $C_2\times C_2$ |
> | $5$ | $C_5$ |
> | $6$ | $C_6$, $S_3$ |
> | $7$ | $C_7$ |
> | $8$ | $C_8$, $C_4\times C_2$, $C_2^3$, $D_4$, $Q_8$ |
> | $9$ | $C_9$, $C_3\times C_3$ |
> | $10$ | $C_{10}$, $D_5$ |
>
> Prime orders are cyclic, and Exercise 24 handles orders $4$ and $9$; the order-$8$ classification is Exercise G198. For order $2r$ with odd prime $r$, the Sylow $r$-subgroup $R$ is normal. If the Sylow $2$-subgroup also centralizes $R$, the group is cyclic. Otherwise conjugation gives the unique nontrivial homomorphism $C_2\to\operatorname{Aut}(C_r)$, namely inversion, yielding the dihedral semidirect product $C_r\rtimes C_2$. For $r=3$ this group acts faithfully on the three cosets of a subgroup of order $2$, hence is $S_3$; for $r=5$ it is $D_5$. These possibilities are pairwise distinguished by abelianity and element orders.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Exercises/Exercise G198 - Classification of Groups of Order Eight|Exercise G198]]
- [[01 - Group Theory/Exercises/Exercise G297 - Classification of Groups of Order p Squared|Exercise G297]]

## Notes

- **Notation:** $D_r$ denotes the dihedral group of order $2r$ here, matching the neighboring vault convention.
- **Source status:** [S2, Ch. I, Ex. 31, printed p. 78, PDF p. 93]. The source uses the bound $\le10$; the classification is independently derived.

