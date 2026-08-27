---
title: "Exercise G234: Class Equations of the Five Groups of Order Twelve"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 8, Ex. 8.3, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G234: Class Equations of the Five Groups of Order Twelve

## Problem Statement

> [!question] Exercise 8.3
> Determine the class equations of the groups of order $12$.

## Hints

> [!hint]- Hint 1
> Use Theorem 7.8.1 and compute by presentations.

## Solution

> [!success]- Solution
> For the two abelian groups $C_{12}$ and $C_6\times C_2$, every class is a singleton: $12=1+\cdots+1$. For $A_4$,
>
> $$
> 12=1+3+4+4.
> $$
>
> For $D_6$, the rotations give two central singleton classes and two inverse-pair classes; the reflections split into two classes:
>
> $$
> 12=1+1+2+2+3+3.
> $$
>
> For $\langle x,y:x^4=y^3=1,xy=y^2x\rangle$, the center is $\{1,x^2\}$, the pairs $\{y,y^2\}$ and $\{x^2y,x^2y^2\}$ have size $2$, and the two remaining classes have size $3$. Its equation is again $12=1+1+2+2+3+3$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Semidirect-product actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §8, Ex. 8.3, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
