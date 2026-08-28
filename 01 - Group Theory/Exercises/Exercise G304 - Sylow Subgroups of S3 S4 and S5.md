---
title: "Exercise G304: Sylow Subgroups of S3, S4, and S5"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
  - symmetric-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 32, printed p. 78, PDF p. 93"
created: 2026-08-28
---

# Exercise G304: Sylow Subgroups of S3, S4, and S5

## Problem Statement

> [!question] Exercise 32
> Determine the Sylow $p$-subgroups of $S_3,S_4,S_5$ for $p=2$ and $p=3$.

## Hints

> [!hint]- Hint 1
> Give one representative subgroup in each case; all Sylow subgroups are its conjugates. Count cycles to find their numbers.

## Solution

> [!success]- Solution
> The Sylow subgroups, up to conjugacy, are:
>
> | Group | $p$ | Representative | Order | Number |
> |---|---:|---|---:|---:|
> | $S_3$ | $2$ | $\langle(12)\rangle$ | $2$ | $3$ |
> | $S_3$ | $3$ | $\langle(123)\rangle=A_3$ | $3$ | $1$ |
> | $S_4$ | $2$ | $\langle(1234),(13)\rangle\cong D_4$ | $8$ | $3$ |
> | $S_4$ | $3$ | $\langle(123)\rangle$ | $3$ | $4$ |
> | $S_5$ | $2$ | $\langle(1234),(13)\rangle$ fixing $5$ | $8$ | $15$ |
> | $S_5$ | $3$ | $\langle(123)\rangle$ | $3$ | $10$ |
>
> The $3$-subgroup counts follow by dividing the number of $3$-cycles by two generators per subgroup: $8/2=4$ in $S_4$ and $20/2=10$ in $S_5$. The displayed order-$8$ subgroup is dihedral and hence Sylow in both $S_4$ and $S_5$. There are three such subgroups in $S_4$. Any order-$8$ subgroup of $S_5$, viewed as a $2$-group acting on five points, has a fixed point; faithfulness forces that fixed point to be unique. There are five choices of fixed point and three Sylow $2$-subgroups in its $S_4$ stabilizer, giving $5\cdot3=15$.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 32, printed p. 78, PDF p. 93]. Representatives and counts were independently checked.

