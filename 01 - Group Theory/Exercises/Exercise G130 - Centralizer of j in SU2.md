---
title: "Exercise G130: Centralizer of j in SU2"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - centralizers
  - special-unitary-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 3, Ex. 3.4, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise G130: Centralizer of j in SU2

## Problem Statement

> [!question] Exercise 3.4
> Determine the centralizer of $j$ in $SU_2$.

## Hints

> [!hint]- Hint 1
> Write a general unit quaternion as $q=a+bi+cj+dk$.

> [!hint]- Hint 2
> Compare $qj$ and $jq$ using $ij=k$ and $kj=-i$.

## Solution

> [!success]- Solution
> Let
>
> $$
> q=a+bi+cj+dk\in SU_2,
> \qquad
> a^2+b^2+c^2+d^2=1.
> $$
>
> Quaternion multiplication gives
>
> $$
> qj=aj+bk-c-di,
> \qquad
> jq=aj-bk-c+di.
> $$
>
> Thus $qj=jq$ if and only if $b=d=0$. The remaining norm condition is $a^2+c^2=1$. Therefore
>
> $$
> C_{SU_2}(j)
> =\{a+cj:a^2+c^2=1\}
> =\{\cos\theta\,I+\sin\theta\,j:\theta\in\mathbb R\}.
> $$
>
> This is precisely the longitude through $I$ and $j$, a circle subgroup isomorphic to $SO_2$ and $S^1$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- The centralizer of any noncentral element of $SU_2$ is similarly its unique longitude.
- **Source status:** The quaternion realization of $SU_2$ and Ex. 3.4 were checked at [S1, Ch. 9, §9.3 and Ex. 3.4, printed pp. 266–268 and 284, PDF pp. 278–280 and 296]. The calculation is independent.
