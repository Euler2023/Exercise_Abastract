---
title: "Exercise G219: Class Equations of S8 and A8"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.12, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G219: Class Equations of S8 and A8

## Problem Statement

> [!question] Exercise 5.12
> Determine the class equations of $S_8$ and $A_8$.

## Hints

> [!hint]- Hint 1
> For type $1^{m_1}2^{m_2}\cdots$, use $|Z(\sigma)|=\prod i^{m_i}m_i!$.

## Solution

> [!success]- Solution
> In the partition order $1^8,2,1^6,2^2 1^4,2^3 1^2,2^4,3,1^5,3,2,1^3,3,2^2 1,3^2 1^2,3^2 2,4,1^4,4,2,1^2,4,2^2,4,3,1,4^2,5,1^3,5,2,1,5,3,6,1^2,6,2,7,1,8$, the $S_8$ class sizes are
>
> $$
> 1,28,210,420,105,112,1120,1680,1120,1120,420,2520,1260,3360,1260,1344,4032,2688,3360,3360,5760,5040,
> $$
>
> whose sum is $40320$. For $A_8$, retain the even types; $7,1$ and $5,3$ split. Thus
>
> $$
> 20160=1+210+105+112+1680+1120+2520+1260+1344+1344+1344+3360+2880+2880.
> $$
>
> The term order is $1^8,2^2 1^4,2^4,3,1^5,3,2^2 1,3^2 1^2,4,2,1^2,4^2,5,1^3$, the two $5,3$ classes, $6,2$, and the two $7,1$ classes. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.12, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.
