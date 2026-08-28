---
title: "Exercise G315: Primitive Actions and Maximal Stabilizers"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - primitive-actions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 46, printed p. 80, PDF p. 95"
created: 2026-08-28
---

# Exercise G315: Primitive Actions and Maximal Stabilizers

## Problem Statement

> [!question] Exercise 46
> Let $G$ act transitively on a set $S$ with more than one element, and let $H=G_s$ be a point stabilizer. Prove that the following are equivalent:
>
> **PRIM 1.** The only $G$-stable partitions of $S$ are the one-block partition and the partition into singletons.
>
> **PRIM 2.** The subgroup $H$ is maximal in $G$.

## Hints

> [!hint]- Hint 1
> Identify $S$ with $G/H$. Intermediate subgroups $H\le K\le G$ correspond to block systems.

## Solution

> [!success]- Solution
> Identify $S$ with $G/H$ by $gH\mapsto gs$. If $H\le K\le G$, the subsets
>
> $$
> g(K/H)=\{gkH:k\in K\},
> \qquad g\in G,
> $$
>
> form a $G$-stable partition of $G/H$. It is the singleton partition for $K=H$ and the one-block partition for $K=G$.
>
> Conversely, let $\mathcal P$ be a stable partition and let $\Delta$ be the block containing $H$. Put $K=\{g\in G:g\Delta=\Delta\}$. Every $h\in H$ fixes $H$, so $h\Delta$ meets $\Delta$ and hence equals it; thus $H\le K$. Moreover $\Delta=K/H$: one inclusion follows from stability, and if $gH\in\Delta$, then $g\Delta$ and $\Delta$ meet at $gH$, so $g\Delta=\Delta$ and $g\in K$. Therefore all stable partitions arise from intermediate subgroups.
>
> Hence there is no nontrivial stable partition exactly when there is no subgroup strictly between $H$ and $G$, which is exactly maximality of $H$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- **Terminology:** An action satisfying these equivalent conditions is primitive.
- **Source status:** [S2, Ch. I, Ex. 46, printed p. 80, PDF p. 95]. The subgroup-block correspondence is independently proved.

