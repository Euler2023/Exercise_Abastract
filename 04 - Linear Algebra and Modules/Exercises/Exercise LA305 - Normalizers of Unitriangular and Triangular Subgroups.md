---
title: "Exercise LA305: Normalizers of Unitriangular and Triangular Subgroups"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 6, Ex. 6.2, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise LA305: Normalizers of Unitriangular and Triangular Subgroups

## Problem Statement

> [!question] Exercise 6.2
> For the upper triangular subgroup $B\le GL_n(\mathbb C)$ and its unitriangular subgroup $U$, prove $B=N(U)=N(B)$.

## Hints

> [!hint]- Hint 1
> Recover the standard complete flag from the invariant subspaces of $U$ and $B$.

## Solution

> [!success]- Solution
> Let $F_i=\langle e_1,\ldots,e_i\rangle$. The group $B$ is precisely the stabilizer of the complete flag $(F_i)$, and conjugation by $B$ preserves $U$, so $B\subseteq N(U)\cap N(B)$. The common fixed space of $U$ is $F_1$; applying the same observation to the induced action on $\mathbb C^n/F_1$ successively recovers every $F_i$. Hence a normalizer of $U$ preserves the flag and lies in $B$. Similarly $F_1$ is the unique common invariant line of $B$, and successive quotients recover the flag, so $N(B)\subseteq B$. Therefore $N(U)=B=N(B)$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** [S1, Ch. 7, §6, Ex. 6.2, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.

