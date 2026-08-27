---
title: "Exercise G202: Class Equation of the Tetrahedral Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.4, printed p. 222, PDF p. 234"
created: 2026-08-27
---

# Exercise G202: Class Equation of the Tetrahedral Group

## Problem Statement

> [!question] Exercise 4.4
> **(a)** Determine the class equation of the tetrahedral group $T$.
>
> **(b)** Prove that $T$ has a normal subgroup of order $4$, and no subgroup of order $6$.

## Hints

> [!hint]- Hint 1
> Identify $T$ with $A_4$. The eight $3$-cycles split into two classes.

## Solution

> [!success]- Solution
> Under $T\cong A_4$, the identity is alone; the three half-turns form one class; and the eight rotations of order $3$ split into two classes of four (a rotation and its inverse lie in different $A_4$-classes). Thus
>
> $$
> 12=1+3+4+4.
> $$
>
> The identity together with the three half-turns is the Klein four subgroup $V_4$. It is a union of conjugacy classes, hence normal. A subgroup of order $6$ would have index $2$ and therefore be normal, but no union of the displayed conjugacy classes containing the identity has size $6$. Hence none exists. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Alternating Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.4, printed p. 222, PDF p. 234]; problem checked against the source PDF; solution independently derived for this vault.
