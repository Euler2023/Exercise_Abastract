---
title: "Exercise G232: S3 Times C2 among the Groups of Order Twelve"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 8, Ex. 8.1, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G232: S3 Times C2 among the Groups of Order Twelve

## Problem Statement

> [!question] Exercise 8.1
> Which group in Theorem 7.8.1 is isomorphic to $S_3\times C_2$?

## Hints

> [!hint]- Hint 1
> Compare it with the dihedral group of a hexagon.

## Solution

> [!success]- Solution
> It is $D_6$. Write $D_6=\langle r,s:r^6=s^2=1,srs=r^{-1}\rangle$. The central element $r^3$ generates $C_2$, while $\langle r^2,s\rangle\cong D_3\cong S_3$; the two subgroups commute, intersect trivially, and their orders multiply to $12$. Hence $D_6\cong S_3\times C_2$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Semidirect-product actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §8, Ex. 8.1, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
