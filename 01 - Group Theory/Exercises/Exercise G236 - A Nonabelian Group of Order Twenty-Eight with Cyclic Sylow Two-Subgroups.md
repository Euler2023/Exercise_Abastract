---
title: "Exercise G236: A Nonabelian Group of Order Twenty-Eight with Cyclic Sylow Two-Subgroups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 8, Ex. 8.5, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G236: A Nonabelian Group of Order Twenty-Eight with Cyclic Sylow Two-Subgroups

## Problem Statement

> [!question] Exercise 8.5
> Let $G$ be nonabelian of order $28$ with cyclic Sylow $2$-subgroups. **(a)** Determine $n_2,n_7$. **(b)** Prove uniqueness up to isomorphism. **(c)** Determine element orders and the class equation.

## Hints

> [!hint]- Hint 1
> The normal $C_7$ is acted on by $C_4$ through the unique involution of $\operatorname{Aut}(C_7)$.

## Solution

> [!success]- Solution
> Sylow III gives $n_7=1$ and $n_2=1$ or $7$. If $n_2=1$, both Sylow subgroups are normal and commute, making $G$ abelian; hence $n_2=7$. Writing $P=\langle a\rangle\cong C_7$, $Q=\langle b\rangle\cong C_4$, the nontrivial action $Q\to\operatorname{Aut}(P)\cong C_6$ has the unique image of order $2$, so
>
> $$
> G\cong\langle a,b:a^7=b^4=1, bab^{-1}=a^{-1}\rangle,
> $$
>
> proving uniqueness. The element counts by order are: one of order $1$, one of order $2$ ($b^2$), six of order $7$, six of order $14$, and fourteen of order $4$. The center is $\{1,b^2\}$; pairing inverse powers of $a$ and of $ab^2$ gives
>
> $$
> 28=1+1+2+2+2+2+2+2+7+7.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Semidirect-product actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §8, Ex. 8.5, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
