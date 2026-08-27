---
title: "Exercise Rep67: Character Table and Subgroups of the Order Twenty Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.10, printed pp. 316–317, PDF pp. 328–329"
created: 2026-08-27
---

# Exercise Rep67: Character Table and Subgroups of the Order Twenty Group

## Problem Statement

> [!question] Exercise 4.10
> **(a)** Find the missing rows in the character table below. **(b)** Determine the orders of the elements $a,b,c,d$. **(c)** Show that the group $G$ with this character table has a subgroup $H$ of order $10$, and describe this subgroup as a union of conjugacy classes. **(d)** Decide whether $H$ is $C_{10}$ or $D_5$. **(e)** Determine all normal subgroups of $G$.
>
> | | (1) | (4) | (5) | (5) | (5) |
> |---|---:|---:|---:|---:|---:|
> | | $1$ | $a$ | $b$ | $c$ | $d$ |
> | $\chi_1$ | 1 | 1 | 1 | 1 | 1 |
> | $\chi_2$ | 1 | 1 | -1 | -1 | 1 |
> | $\chi_3$ | 1 | 1 | $-i$ | $i$ | -1 |
> | $\chi_4$ | 1 | 1 | $i$ | $-i$ | -1 |

## Hints

> [!hint]- Hint 1
> Compare with the group in Exercise Rep62.

## Solution

> [!success]- Solution
> The class sizes sum to $20$, and the four known degree-one rows leave degree $4$. Orthogonality gives the missing row
>
> $$
> \chi_5=(4,-1,0,0,0).
> $$
>
> The group is $C_5\rtimes C_4$ with faithful action. Thus $a$ has order $5$; $b$ and $c$ have order $4$; and $d$ has order $2$. The preimage of the order-two subgroup of $G/C_5\cong C_4$ is
>
> $$
> H=\{1\}\cup C_a\cup C_d,
> $$
>
> whose size is $1+4+5=10$. Its involutions act on $C_5$ by inversion, so $H\cong D_5$, not $C_{10}$. The normal subgroups are $1$, $C_5$, $H\cong D_5$, and $G$; these correspond to the normal subgroups of the cyclic quotient together with the Frobenius kernel. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- The table spans [S1, Ch. 10, §4, Ex. 4.10, printed pp. 316–317, PDF pp. 328–329] and was visually transcribed.

