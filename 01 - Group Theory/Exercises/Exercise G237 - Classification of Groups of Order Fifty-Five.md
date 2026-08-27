---
title: "Exercise G237: Classification of Groups of Order Fifty-Five"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 8, Ex. 8.6, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G237: Classification of Groups of Order Fifty-Five

## Problem Statement

> [!question] Exercise 8.6
> Let $|G|=55$. **(a)** Prove $G=\langle x,y:x^{11}=y^5=1, yxy^{-1}=x^r\rangle$. **(b)** Decide possible $r$. **(c)** Prove there are two isomorphism classes.

## Hints

> [!hint]- Hint 1
> Use the unique Sylow $11$-subgroup and $r^5\equiv1\pmod{11}$.

## Solution

> [!success]- Solution
> Sylow III gives a unique $P=\langle x\rangle$ of order $11$ and a subgroup $\langle y\rangle$ of order $5$; their product is all of $G$. Conjugation has the form $yxy^{-1}=x^r$, and $y^5=1$ forces $r^5\equiv1\pmod{11}$. Thus
>
> $$
> r\in\{1,3,4,5,9\}.
> $$
>
> If $r=1$, the group is cyclic $C_{55}$. The four nonidentity values are the generators of the unique order-$5$ subgroup of $\mathbb F_{11}^{\times}$; replacing $y$ by another generator changes one to another, so all yield one nonabelian semidirect product $C_{11}\rtimes C_5$. Hence exactly two isomorphism classes occur. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Semidirect-product actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §8, Ex. 8.6, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.
