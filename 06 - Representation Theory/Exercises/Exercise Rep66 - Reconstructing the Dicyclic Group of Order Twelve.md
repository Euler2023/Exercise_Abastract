---
title: "Exercise Rep66: Reconstructing the Dicyclic Group of Order Twelve"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.9, printed p. 316, PDF p. 328"
created: 2026-08-27
---

# Exercise Rep66: Reconstructing the Dicyclic Group of Order Twelve

## Problem Statement

> [!question] Exercise 4.9
> Below is a partial character table. One conjugacy class is missing.
>
> | | (1) | (1) | (2) | (2) | (3) |
> |---|---:|---:|---:|---:|---:|
> | | $1$ | $u$ | $v$ | $w$ | $x$ |
> | $\chi_1$ | 1 | 1 | 1 | 1 | 1 |
> | $\chi_2$ | 1 | 1 | 1 | 1 | -1 |
> | $\chi_3$ | 1 | -1 | 1 | -1 | $i$ |
> | $\chi_4$ | 1 | -1 | 1 | -1 | $-i$ |
> | $\chi_5$ | 2 | 2 | -1 | -1 | 0 |
>
> **(a)** Complete the table. **(b)** Determine the orders of representative elements in each conjugacy class. **(c)** Determine the normal subgroups. **(d)** Describe the group.

## Hints

> [!hint]- Hint 1
> Degree squares show that one two-dimensional row and one class of size $3$ are missing.

## Solution

> [!success]- Solution
> The completed table has one further class $y$ of size $3$ and one further irreducible row:
>
> $$
> \begin{array}{c|rrrrrr}
> &1&u&v&w&x&y\\\hline
> \chi_1&1&1&1&1&1&1\\
> \chi_2&1&1&1&1&-1&-1\\
> \chi_3&1&-1&1&-1&i&-i\\
> \chi_4&1&-1&1&-1&-i&i\\
> \chi_5&2&2&-1&-1&0&0\\
> \chi_6&2&-2&-1&1&0&0
> \end{array}.
> $$
>
> Column orthogonality gives this uniquely. The representative orders are respectively $1,2,3,6,4,4$. The group is
>
> $$
> C_3\rtimes C_4=\langle a,b\mid a^3=b^4=1,\ bab^{-1}=a^{-1}\rangle,
> $$
>
> also called the dicyclic group $\operatorname{Dic}_3$; $b^2$ is the central involution. Its normal subgroups are $1$, $\langle b^2\rangle\cong C_2$, $\langle a\rangle\cong C_3$, $\langle a,b^2\rangle\cong C_6$, and $G$. They can also be read as intersections of kernels and unions of conjugacy classes. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- The source table and its omitted-column wording were visually checked at [S1, Ch. 10, §4, Ex. 4.9, printed p. 316, PDF p. 328].

