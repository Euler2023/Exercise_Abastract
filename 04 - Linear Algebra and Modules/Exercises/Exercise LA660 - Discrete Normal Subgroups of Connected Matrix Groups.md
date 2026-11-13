---
title: "Exercise LA660: Discrete Normal Subgroups of Connected Matrix Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 11, printed p. 28, PDF p. 40"
source_refs:
  - "S10/ch-1/sec-6/ex-11"
created: 2026-11-12
---

# Exercise LA660: Discrete Normal Subgroups of Connected Matrix Groups

## Problem Statement

> [!question] Original Exercise 11
> A subset $E$ of a matrix Lie group $G$ is called *discrete* if for each $A$ in $E$ there is a neighborhood $U$ of $A$ in $G$ such that $U$ contains no point in $E$ except for $A$. Suppose that $G$ is a connected matrix Lie group and $N$ is a discrete normal subgroup of $G$. Show that $N$ is contained in the center of $G$.

## Hints

> [!hint]- Hint 1
> For a fixed $n\in N$, examine the map $g\mapsto gng^{-1}$. Normality puts its image inside $N$.

> [!hint]- Hint 2
> A continuous map from a connected space to a discrete space has a one-point image. Evaluate the map at the identity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Fix $n\in N$. Normality makes the map
> $$
> c_n:G\longrightarrow N,\qquad c_n(g)=gng^{-1}
> $$
> well defined. It is continuous: multiplication is continuous in matrix entries, and inversion is continuous on invertible matrices by the formula $g^{-1}=\operatorname{adj}(g)/\det g$. Continuity into $N$ follows from its subspace topology.
>
> The stated discreteness condition makes every singleton of $N$ open in $N$. Arbitrary unions of these singletons are open, so $N$ has the discrete topology. Every subset of $N$ with at least two points is disconnected: one singleton and its nonempty complement give disjoint nonempty relatively open sets.
>
> Continuous images of connected spaces are connected. Indeed, a separation of the image would pull back to a separation of the domain. Therefore $c_n(G)$ has only one point. Since $c_n(I)=n$, that point is $n$, and
> $$
> gng^{-1}=n\qquad\text{for every }g\in G.
> $$
> Equivalently, $gn=ng$ for every $g$. Thus $n\in Z(G)$. As $n$ was arbitrary, $N\subseteq Z(G)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Discrete and Dense Subgroups|Discrete and Dense Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Path Connectedness and Path Components|Path Connectedness and Path Components]]

## Notes

- **Source status:** The complete exercise was checked on the 200 dpi original page, printed p. 28 / PDF p. 40. The proof is independently supplied.
- **Connectedness convention:** Hall uses “connected” for path connectedness in Definition 1.9 [S10, §1.3.2, printed p. 17 / PDF p. 29, checked on a 200 dpi original-page image]. A path-connected space is connected in the usual topological sense, using connectedness of the real interval, so the proof above applies. It also proves the result for connected topological groups without a manifold hypothesis.
- **Hypothesis boundary:** Normality is needed to keep every conjugate inside the discrete set. Connectedness is also essential: the six permutation matrices of $S_3$ form a discrete nonabelian matrix group, whose normal subgroup $N=G$ is not central.
- **Routing:** The decisive step is the topology of a continuous conjugation map on a finite-dimensional matrix group; normality provides its discrete target.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
