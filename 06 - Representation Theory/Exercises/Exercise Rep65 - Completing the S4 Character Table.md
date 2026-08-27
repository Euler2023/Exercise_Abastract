---
title: "Exercise Rep65: Completing the S4 Character Table"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.8, printed p. 316, PDF p. 328"
created: 2026-08-27
---

# Exercise Rep65: Completing the S4 Character Table

## Problem Statement

> [!question] Exercise 4.8
> Find the missing rows in the character table below:
>
> | | (1) | (3) | (6) | (6) | (8) |
> |---|---:|---:|---:|---:|---:|
> | $\chi_1$ | 1 | 1 | 1 | 1 | 1 |
> | $\chi_2$ | 1 | 1 | -1 | -1 | 1 |
> | $\chi_3$ | 3 | -1 | 1 | -1 | 0 |
> | $\chi_4$ | 3 | -1 | -1 | 1 | 0 |

## Hints

> [!hint]- Hint 1
> Use column orthogonality with the identity column.

## Solution

> [!success]- Solution
> The class sizes sum to $24$. The known degree squares total $1+1+9+9=20$, so the missing degree is $2$. Let the row be $(2,a,b,c,d)$. Orthogonality with the four displayed rows, weighted by class sizes, yields a unique solution:
>
> $$
> \chi_5=(2,2,0,0,-1).
> $$
>
> Its norm is
>
> $$
> \frac1{24}(1\cdot4+3\cdot4+8\cdot1)=1,
> $$
>
> and its weighted inner product with every previous row is zero. Hence this is the missing irreducible row. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- The source table was visually checked and transcribed from [S1, Ch. 10, §4, Ex. 4.8, printed p. 316, PDF p. 328].

