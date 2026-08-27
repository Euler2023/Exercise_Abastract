---
title: "Exercise G259: Double Cosets and Orbits on Ordered Pairs"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.3, printed p. 227, PDF p. 239"
created: 2026-08-27
---

# Exercise G259: Double Cosets and Orbits on Ordered Pairs

## Problem Statement

> [!question] Exercise M.3
> **(a)** Relate double cosets of a stabilizer $H$ in a transitive $G$-set $S$ to $G$-orbits in $S\times S$. **(b)** Work it out for $D_5$ on pentagon vertices. **(c)** Work it out for $T$ on tetrahedron edges.

## Hints

> [!hint]- Hint 1
> Move the first coordinate to the base point $s_0$; the remaining ambiguity is left and right multiplication by $H$.

## Solution

> [!success]- Solution
> Choose $s_0$ with stabilizer $H$. The orbit of $(s_0,gs_0)$ depends only on $HgH$, and every orbit has such a representative; equality of two such orbits is equivalent to equality of the double cosets. This proves **(a)**.
>
> For $D_5$ on vertices, the three orbits are ordered pairs at distances $0,1,2$, hence there are three double cosets. For $T\cong A_4$ on six edges, the stabilizer of one edge fixes that edge and its opposite edge and pairs the remaining four adjacent edges into two orbits. Thus there are four orbits: equal edges, opposite edges, and two oriented adjacency types. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.3, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.
