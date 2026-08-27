---
title: "Exercise G192: Dirichlet Fundamental Domain of a Discrete Isometry Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - discrete-groups
  - fundamental-domains
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Miscellaneous Ex. M.6, printed p. 194, PDF p. 206"
created: 2026-08-27
---

# Exercise G192: Dirichlet Fundamental Domain of a Discrete Isometry Group

## Problem Statement

> [!question] Miscellaneous Exercise M.6
> Let $G$ be a discrete subgroup of $M$. Choose a point $p$ whose stabilizer in $G$ is trivial, and let $S=Gp$. For $q\in S\setminus\{p\}$, let $\ell_q$ be the perpendicular bisector of $[p,q]$ and $H_q$ the half-plane bounded by $\ell_q$ that contains $p$. Prove that
>
> $$
> D=\bigcap_{q\in S\setminus\{p\}}H_q
> $$
>
> is a fundamental domain for $G$.

> [!warning] Source issue
> Exercise M.5 defines a fundamental domain to be bounded, but M.6 assumes only that $G$ is discrete. For a finite point group or a frieze group the Dirichlet region is generally unbounded. The tiling conclusion below holds for every discrete $G$; boundedness requires the additional cocompact hypothesis, such as $G$ being a plane crystallographic group.

## Hints

> [!hint]- Hint 1
> Rewrite $H_q$ as the set of points at least as close to $p$ as to $q$.

> [!hint]- Hint 2
> For an arbitrary point $x$, choose an orbit point $gp$ minimizing the distance to $x$.

## Solution

> [!success]- Solution
> The half-plane has the metric description
>
> $$
> H_q=\{x:|x-p|\le|x-q|\}.
> $$
>
> Therefore $D$ is the Voronoi cell of $p$ in the discrete orbit $S$.
>
> Given $x$ in the plane, discreteness of $S$ implies that the set of distances $|x-gp|$ has a minimum. Choose $g$ attaining it. Then for every $h\in G$,
>
> $$
> |g^{-1}x-p|=|x-gp|\le|x-ghp|=|g^{-1}x-hp|,
> $$
>
> so $g^{-1}x\in D$ and $x\in gD$. Hence the translates cover the plane.
>
> If a point lies in the interiors of both $gD$ and $hD$, then both $gp$ and $hp$ are its unique closest orbit point. Thus $gp=hp$. Since the stabilizer of $p$ is trivial, $g=h$. Hence interiors of distinct translates are disjoint; a half-open boundary convention assigns boundary points exactly once.
>
> This proves the fundamental-tiling property. If $G$ is cocompact, the orbit is relatively dense, which bounds the Voronoi cell $D$; without cocompactness, $D$ may be unbounded as noted above. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G191 - Areas and Fundamental Domains of Wallpaper Patterns|Exercise G191]]

## Notes

- The trivial-stabilizer assumption ensures distinct group elements give distinct orbit sites and hence distinct cells.
- **Source status:** The intersection, half-planes, and unrestricted “discrete subgroup” hypothesis were visually checked at [S1, Ch. 6, M.6, printed p. 194, PDF p. 206]. The missing boundedness hypothesis is explicitly preserved and analyzed.

