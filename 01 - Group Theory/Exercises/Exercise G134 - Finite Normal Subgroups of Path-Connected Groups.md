---
title: "Exercise G134: Finite Normal Subgroups of Path-Connected Groups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - path-connectedness
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 7, Ex. 7.7, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G134: Finite Normal Subgroups of Path-Connected Groups

## Problem Statement

> [!question] Exercise 7.7
> Let $H$ be a finite normal subgroup of a path-connected group $G$. Prove that $H$ is contained in the center of $G$.

## Hints

> [!hint]- Hint 1
> For fixed $h\in H$, consider the continuous map $g\mapsto ghg^{-1}$ into the finite set $H$.

## Solution

> [!success]- Solution
> Fix $h\in H$. Normality makes
>
> $$
> f_h:G\longrightarrow H,
> \qquad f_h(g)=ghg^{-1},
> $$
>
> well-defined and continuous. Since $G$ is path connected, its image under $f_h$ is path connected. A finite subset of a matrix group is discrete, so the only path-connected subsets of $H$ are singletons. Because $f_h(e)=h$, one has $f_h(g)=h$ for all $g$. Thus $gh=hg$ for every $g\in G$. This holds for every $h\in H$, so $H\subseteq Z(G)$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The argument applies to any path-connected topological group in which the finite subgroup is discrete.
- **Source status:** Ex. 7.7 was visually checked at [S1, Ch. 9, §9.7, printed p. 287, PDF p. 299]. The conjugation-map proof is independent.
