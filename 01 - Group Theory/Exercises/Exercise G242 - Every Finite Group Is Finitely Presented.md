---
title: "Exercise G242: Every Finite Group Is Finitely Presented"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.3, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G242: Every Finite Group Is Finitely Presented

## Problem Statement

> [!question] Exercise 10.3
> Can every finite group be presented by finitely many generators and finitely many relations?

## Hints

> [!hint]- Hint 1
> Use one symbol for every group element and encode the multiplication table.

## Solution

> [!success]- Solution
> Yes. For finite $G$, take generators $x_g$ indexed by $g\in G$ and the finite set of relations $x_gx_h=x_{gh}$ for every pair $g,h$. The map $x_g\mapsto g$ is onto. The relations reduce every word to a single $x_g$, so the presented group has at most $|G|$ elements; surjectivity gives at least $|G|$. Hence it is isomorphic to $G$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.3, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.

