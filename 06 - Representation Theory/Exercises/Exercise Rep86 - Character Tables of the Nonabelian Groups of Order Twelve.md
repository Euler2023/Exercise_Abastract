---
title: "Exercise Rep86: Character Tables of the Nonabelian Groups of Order Twelve"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.10, printed p. 319, PDF p. 331"
created: 2026-08-27
---

# Exercise Rep86: Character Tables of the Nonabelian Groups of Order Twelve

## Problem Statement

> [!question] Exercise 6.10
> Determine the character tables for the nonabelian groups of order $12$ (see (7.8.1)).

## Hints

> [!hint]- Hint 1
> The three groups are $A_4$, $D_6$, and $C_3\rtimes C_4$ with inversion action.

## Solution

> [!success]- Solution
> For $A_4$, on class sizes $1,3,4,4$, the rows are
>
> $$
> (1,1,1,1),\ (1,1,\omega,\omega^2),\ (1,1,\omega^2,\omega),\ (3,-1,0,0).
> $$
>
> For $D_6$, on classes $1,r^3,\{r,r^5\},\{r^2,r^4\}$ and the two reflection classes, the four linear rows send $r,s$ independently to $\pm1$, and the remaining rows are
>
> $$
> (2,-2,1,-1,0,0),\qquad(2,2,-1,-1,0,0).
> $$
>
> For $C_3\rtimes C_4=\langle a,b\mid a^3=b^4=1,\ bab^{-1}=a^{-1}\rangle$, the table is the completed six-row table of Exercise Rep66. Row orthogonality and the degree-square sum $12$ verify all three tables. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.10, printed p. 319, PDF p. 331].

