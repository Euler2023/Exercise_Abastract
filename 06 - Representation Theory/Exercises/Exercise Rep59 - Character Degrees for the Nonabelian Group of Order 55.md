---
title: "Exercise Rep59: Character Degrees for the Nonabelian Group of Order 55"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.2, printed p. 315, PDF p. 327"
created: 2026-08-27
---

# Exercise Rep59: Character Degrees for the Nonabelian Group of Order 55

## Problem Statement

> [!question] Exercise 4.2
> A nonabelian group $G$ has order $55$. Determine its class equation and the dimensions of its irreducible characters.

## Hints

> [!hint]- Hint 1
> Write $G=C_{11}\rtimes C_5$ and inspect centralizers.

## Solution

> [!success]- Solution
> Sylow theory gives a unique normal subgroup $N\cong C_{11}$ and $11$ Sylow $5$-subgroups. Nontrivial conjugation by a complement $C_5$ acts fixed-point freely on $N\setminus\{1\}$. Hence the ten nonidentity elements of $N$ form two classes of size $5$. Each nonidentity element outside $N$ has centralizer of order $5$, hence class size $11$; the $44$ such elements give four classes. The class equation is
>
> $$
> 55=1+5+5+11+11+11+11.
> $$
>
> Thus there are seven irreducible characters. The commutator subgroup is $N$, so $G^{\mathrm{ab}}\cong C_5$ and there are five one-dimensional characters. The remaining degree squares total $55-5=50$; with two characters left, they must both have degree $5$. Therefore the degrees are
>
> $$
> 1,1,1,1,1,5,5.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- **Source status:** [S1, Ch. 10, §4, Ex. 4.2, printed p. 315, PDF p. 327]; the class and degree computation is independent.

