---
title: "Exercise G200: Proper Normal Subgroups of S5"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.2, printed p. 222, PDF p. 234"
created: 2026-08-27
---

# Exercise G200: Proper Normal Subgroups of S5

## Problem Statement

> [!question] Exercise 4.2
> Is $A_5$ the only proper normal subgroup of $S_5$?

> [!warning] Source wording
> The word “proper” normally includes the trivial subgroup. Thus the literal answer is “no”; the customary intended reading is “nontrivial proper normal subgroup.”

## Hints

> [!hint]- Hint 1
> Intersect a normal subgroup with $A_5$, then use the simplicity of $A_5$.

## Solution

> [!success]- Solution
> Literally, no: the trivial subgroup is also proper and normal. The intended nontrivial answer is yes.
>
> Let $N\trianglelefteq S_5$ be nontrivial. Then $N\cap A_5\trianglelefteq A_5$. Since $A_5$ is simple, this intersection is either $1$ or $A_5$. If it is $A_5$, then $A_5\subseteq N$, so $N=A_5$ or $S_5$.
>
> If $N\cap A_5=1$, the sign map restricts injectively to $N$, so $|N|\le2$. A normal subgroup of order $2$ would be central, but $Z(S_5)=1$; hence $N=1$. Therefore the normal subgroups are $1,A_5,S_5$, and $A_5$ is the unique nontrivial proper one. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.2, printed p. 222, PDF p. 234]; problem checked against the source PDF; solution independently derived for this vault.
