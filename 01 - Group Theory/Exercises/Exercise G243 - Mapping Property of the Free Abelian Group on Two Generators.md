---
title: "Exercise G243: Mapping Property of the Free Abelian Group on Two Generators"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.4, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G243: Mapping Property of the Free Abelian Group on Two Generators

## Problem Statement

> [!question] Exercise 10.4
> For $G=\langle x,y:xyx^{-1}y^{-1}=1\rangle$, prove that for $u,v$ in an abelian group $A$ there is a unique homomorphism $G\to A$ sending $x\mapsto u$, $y\mapsto v$.

## Hints

> [!hint]- Hint 1
> Every element has a normal form $x^m y^n$.

## Solution

> [!success]- Solution
> The relation says $xy=yx$, so every element has form $x^m y^n$. Define $\phi(x^m y^n)=u^m v^n$. Since $A$ is abelian, this respects multiplication and the defining relation. It has the prescribed values, and uniqueness follows because $x,y$ generate $G$. Thus $G$ has the universal property of $\mathbb Z^2$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.4, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.

