---
title: "Exercise LA68: Identity Component of a Matrix Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - path-components
  - normal-subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.7, printed p. 76, PDF p. 88"
created: 2026-08-23
---

# Exercise LA68: Identity Component of a Matrix Group

## Problem Statement

> [!question] Exercise M.7
> Identify the set of $n\times n$ matrices with $\mathbb R^{n\times n}$, and let $G\le GL_n(\mathbb R)$.
> 
> **(a)** If paths in $G$ join $A$ to $B$ and $C$ to $D$, prove that a path in $G$ joins $AC$ to $BD$.
> 
> **(b)** Prove that the matrices joinable to $I$ form a normal subgroup of $G$.

## Hints

> [!hint]- Hint 1
> Multiply the two paths pointwise.

> [!hint]- Hint 2
> For inverses and conjugates, apply continuous matrix operations to a path.

## Solution

> [!success]- Solution
> If $X(t)$ joins $A$ to $B$ and $Y(t)$ joins $C$ to $D$, then $Z(t)=X(t)Y(t)$ is continuous, stays in $G$, and joins $AC$ to $BD$.
> 
> Let $G^0$ be the set of matrices joinable to $I$. Part (a) shows closure under products. If $X(t)$ joins $I$ to $A$, then $X(t)^{-1}$ joins $I$ to $A^{-1}$, so $G^0$ is a subgroup. For $g\in G$, the path $gX(t)g^{-1}$ joins $I$ to $gAg^{-1}$ and stays in $G$. Hence $gG^0g^{-1}=G^0$, so $G^0\trianglelefteq G$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Path Connectedness and Path Components|Path Connectedness and Path Components]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Component terminology:** The set denoted $G^0$ in this solution is the identity **path component**, defined by paths to $I$. Artin M.7 calls it the connected component. In general topology, the identity connected component is instead the maximal connected subset containing $I$; the two coincide when $G$ is locally path connected, in particular for Lie groups. No such additional hypothesis is needed for the normal-subgroup proof here.
- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.7, printed p. 76, PDF p. 88]. The solution is an independent derivation for this vault, not a solution printed in Artin.
