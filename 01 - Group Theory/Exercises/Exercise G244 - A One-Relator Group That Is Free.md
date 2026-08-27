---
title: "Exercise G244: A One-Relator Group That Is Free"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.5, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G244: A One-Relator Group That Is Free

## Problem Statement

> [!question] Exercise 10.5
> Prove that $\langle x,y,z:yxyz^{-2}=1\rangle$ is a free group.

## Hints

> [!hint]- Hint 1
> Solve the relation for $x$ and eliminate that generator.

## Solution

> [!success]- Solution
> The relation is equivalent to $x=y^{-1}z^2y^{-1}$. Therefore every word reduces to a word in $y,z$, so the map $F(y,z)\to G$ is onto. Conversely, define $G\to F(y,z)$ by $y\mapsto y$, $z\mapsto z$, and $x\mapsto y^{-1}z^2y^{-1}$; the defining relator maps to $1$. The two maps are inverse on generators. Hence $G\cong F(y,z)$, a free group of rank $2$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.5, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.

