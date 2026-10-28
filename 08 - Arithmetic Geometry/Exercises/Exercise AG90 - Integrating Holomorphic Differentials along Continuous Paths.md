---
title: "Exercise AG90: Integrating Holomorphic Differentials along Continuous Paths"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.1, Exercise 6.1.1, printed p. 220, PDF p. 234"
source_refs:
  - "S7/ch-6/sec-1/ex-1"
created: 2026-10-28
---

# Exercise AG90: Integrating Holomorphic Differentials along Continuous Paths

## Problem Statement

> [!question] Original Exercise 6.1.1
> This exercise defines the integral of a holomorphic differential over a continuous path in $\mathbb C$, using integration over polygonal paths (which is easy) and Cauchy's Theorem for such integration. Let $V$ be an open subset of $\mathbb C$, let $\gamma:[0,1]\longrightarrow V$ be a continuous function, and let $\omega=f(q)dq$ be a holomorphic differential on $V$. For each $t\in[0,1]$, the image point $\gamma(t)$ lies in some disk $D_t\subset V$. Show that $\{\gamma^{-1}(D_t):t\in[0,1]\}$ is a collection of open subsets of $[0,1]$ such that $[0,1]=\bigcup_t\gamma^{-1}(D_t)$. (Intervals $[0,b)$, $(a,1]$, and $[0,1]$ are open as subsets of $[0,1]$.) Every open subset of $[0,1]$ is a union of open intervals by definition. Show that since $[0,1]$ is compact, it is covered by finitely many open intervals each taken by $\gamma$ into a disk $D$ of $V$, and therefore it partitions into finitely many closed intervals with the same property. Define $\int_\gamma\omega$ to be the integral of $\omega$ along the polygonal path connecting the images of the partition points. Show that this is well defined by using a common refinement and Cauchy's Theorem.

## Hints

> [!hint]- Hint 1
> Use the subspace topology on $[0,1]$ and a finite subcover. A Lebesgue number for the finite interval cover gives a sufficiently fine partition.

> [!hint]- Hint 2
> Inside a disk a holomorphic differential has a primitive. Replacing one segment by the smaller segments of a refinement changes no integral.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Continuity makes every $\gamma^{-1}(D_t)$ relatively open. It contains $t$, so these preimages cover $[0,1]$. For each point choose a relatively open interval contained in a suitable preimage; compactness gives a finite interval subcover. By the Lebesgue number lemma for compact metric spaces, some $\delta>0$ has the property that any subset of $[0,1]$ of diameter less than $\delta$ lies in one of those intervals. A partition $0=t_0<\cdots<t_m=1$ with mesh less than $\delta$ therefore satisfies $\gamma([t_{j-1},t_j])\subset D_j$ for suitable disks $D_j\subset V$.
>
> Disks are convex, so the straight segment from $\gamma(t_{j-1})$ to $\gamma(t_j)$ lies in $D_j$. Define the proposed integral as the sum of the ordinary segment integrals. Cauchy's theorem on a disk gives a primitive $F_j$ of $f$, and hence the contribution of this segment is
> $$
> F_j(\gamma(t_j))-F_j(\gamma(t_{j-1})).
> $$
> If the interval is subdivided, all its new endpoints still have images in $D_j$. The new segment integrals telescope to the same expression. Thus refinement does not change the value when computed using the original disks.
>
> For two admissible partitions take their common refinement. Each refined interval is contained in one interval of each partition, whose image lies in disks $D$ and $D'$. Its endpoints lie in the convex intersection $D\cap D'$, so the same straight segment is used and its integral is independent of which disk supplies a primitive. Both original sums therefore equal the common refined sum. This proves all choices give one well-defined integral, including for continuous paths that have no derivative.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Imported inputs:** The Lebesgue number lemma and Cauchy's theorem for holomorphic functions on a disk are named topological and analytic inputs.
- **Routing:** The main construction is local integration on a surface, with compactness controlling the subdivision.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
