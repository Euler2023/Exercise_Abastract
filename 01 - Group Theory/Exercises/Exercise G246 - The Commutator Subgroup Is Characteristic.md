---
title: "Exercise G246: The Commutator Subgroup Is Characteristic"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.7, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G246: The Commutator Subgroup Is Characteristic

## Problem Statement

> [!question] Exercise 10.7
> Prove that the commutator subgroup $[G,G]$ is characteristic and that $G/[G,G]$ is abelian.

## Hints

> [!hint]- Hint 1
> Automorphisms carry commutators to commutators.

## Solution

> [!success]- Solution
> For an automorphism $\alpha$, $\alpha([x,y])=[\alpha(x),\alpha(y)]$, so $\alpha([G,G])\subseteq[G,G]$; applying $\alpha^{-1}$ gives equality. Hence $[G,G]$ is characteristic. In the quotient every commutator is trivial, so all cosets commute. Conversely any normal subgroup with abelian quotient contains every commutator, making $[G,G]$ the smallest such subgroup. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.7, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.

