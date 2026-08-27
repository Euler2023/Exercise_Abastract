---
title: "Exercise G203: Class Equation and Normal Subgroups of the Octahedral Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.5, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G203: Class Equation and Normal Subgroups of the Octahedral Group

## Problem Statement

> [!question] Exercise 4.5
> **(a)** Determine the class equation of the octahedral group $O$.
>
> **(b)** This group contains two proper normal subgroups. Find them, show that they are normal, and show that there are no others.

## Hints

> [!hint]- Hint 1
> Use $O\cong S_4$ acting on the four body diagonals of a cube.

## Solution

> [!success]- Solution
> Via $O\cong S_4$, conjugacy classes correspond to cycle types. Their sizes are
>
> $$
> 24=1+6+3+8+6,
> $$
>
> for types $1$, $(12)$, $(12)(34)$, $(123)$, and $(1234)$ respectively.
>
> The alternating subgroup $A_4$ (order $12$) is the kernel of the sign map. The set
>
> $$
> V_4=\{1,(12)(34),(13)(24),(14)(23)\}
> $$
>
> is also normal because it is the union of the identity class and the class of double transpositions. Any normal subgroup is a union of conjugacy classes containing $1$ and its order must divide $24$. Checking sums of $1,6,3,8,6$ shows that the only proper nontrivial possibilities are $1+3=4$ and $1+3+8=12$. Thus the only proper nontrivial normal subgroups are $V_4$ and $A_4$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.5, printed p. 223, PDF p. 235]; problem checked against the source PDF; solution independently derived for this vault.
