---
title: "Exercise G240: Mapping Properties of Free and Quotient Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.1, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G240: Mapping Properties of Free and Quotient Groups

## Problem Statement

> [!question] Exercise 10.1
> Prove the mapping properties of free groups and quotient groups.

## Hints

> [!hint]- Hint 1
> Define a homomorphism on reduced words; for quotients, test whether the kernel contains the normal subgroup.

## Solution

> [!success]- Solution
> For a free group $F(S)$ and a map $f:S\to G$, define $\widehat f(s_1^{\epsilon_1}\cdots s_k^{\epsilon_k})=f(s_1)^{\epsilon_1}\cdots f(s_k)^{\epsilon_k}$. Free reduction does not change this value, so $\widehat f$ is a homomorphism; uniqueness follows because $S$ generates $F(S)$. For $N\trianglelefteq G$, a homomorphism $\varphi:G\to H$ factors uniquely through $G/N$ exactly when $N\subseteq\ker\varphi$: set $\bar\varphi(gN)=\varphi(g)$, whose well-definedness is precisely that condition. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.1, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.

