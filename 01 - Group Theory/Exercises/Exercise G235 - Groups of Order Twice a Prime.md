---
title: "Exercise G235: Groups of Order Twice a Prime"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 8, Ex. 8.4, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G235: Groups of Order Twice a Prime

## Problem Statement

> [!question] Exercise 8.4
> Prove that a group of order $2p$, with $p$ prime, is either cyclic or dihedral.

## Hints

> [!hint]- Hint 1
> For odd $p$, the Sylow $p$-subgroup is normal and an involution acts on it.

## Solution

> [!success]- Solution
> For odd $p$, the Sylow $p$-subgroup $P=\langle r\rangle$ is unique. By Cauchy's theorem choose an involution $s$. Conjugation by $s$ is an automorphism of $P$ of order dividing $2$. The only possibilities compatible with $s^2=1$ are $r\mapsto r$ and $r\mapsto r^{-1}$: in the first case $G\cong C_p\times C_2\cong C_{2p}$; in the second $G\cong D_p$. For $p=2$, the groups $C_4$ and $C_2^2=D_2$ give the same conclusion. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Semidirect-product actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §8, Ex. 8.4, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
