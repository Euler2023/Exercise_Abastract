---
title: "Exercise AG91: Coordinate Independence of Path Integrals on a Surface"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.1, Exercise 6.1.2, printed pp. 220–221, PDF pp. 234–235"
source_refs:
  - "S7/ch-6/sec-1/ex-2"
created: 2026-10-28
---

# Exercise AG91: Coordinate Independence of Path Integrals on a Surface

## Problem Statement

> [!question] Original Exercise 6.1.2
> Let $X$ be a compact Riemann surface and let $\gamma:[0,1]\longrightarrow X$ be continuous.
>
> (a) If $\{U_j:j\in J\}$ is a collection of coordinate neighborhoods in $X$ such that $X=\bigcup_jU_j$, show that $\{\gamma^{-1}(U_j):j\in J\}$ is a collection of open subsets of $[0,1]$ such that $[0,1]=\bigcup_j\gamma^{-1}(U_j)$. Show that $[0,1]$ is covered by finitely many open intervals each taken by $\gamma$ into one coordinate neighborhood $U$ of $X$, and therefore it partitions into finitely many closed intervals with the same property. Thus, integrating along the path $\gamma$ can be defined as a finite sum of local integrals.
>
> (b) Consider two partitions of the domain $[0,1]$ as in part (a). Show that the two corresponding sums of local integrals are equal.

## Hints

> [!hint]- Hint 1
> Apply continuity, compactness, and the Lebesgue number lemma to the preimages of coordinate neighborhoods.

> [!hint]- Hint 2
> For independence, refine further into coordinate disks inside the intersections of the two chosen charts. Use the transformation rule for a differential and its local primitives.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Each $U_j$ is open, so continuity gives open preimages, and every point of $[0,1]$ lies in a preimage because its image belongs to some $U_j$. Refining to relatively open intervals and taking a finite subcover, the Lebesgue number lemma gives a finite partition whose closed intervals each map into a coordinate neighborhood. If $z_j:U_j\to V_j\subset\mathbb C$ is its coordinate, write $\omega=f_j(z_j)dz_j$ there and define the contribution using the continuous-path integral of the coordinate path $z_j\circ\gamma$ established in Exercise 6.1.1. Adding the finitely many contributions defines a candidate integral.
>
> **(b)** First refine two partitions to have the same endpoints. On each resulting interval the path lies in an intersection of the charts used by the two definitions. Cover that image by smaller coordinate disks contained in the intersection and subdivide once more by compactness of the parameter interval. On such a disk a holomorphic differential has a local primitive: if $\omega=f(z)dz$ and $F'=f$, its integral is the endpoint difference of $F$.
>
> If $w=w(z)$ is a different coordinate, differential compatibility is
> $$
> f(z)=g(w(z))w'(z).
> $$
> A primitive $G$ of $g$ satisfies $(G\circ w)'=f$. Therefore $F-G\circ w$ is constant on the connected smaller disk. Their endpoint differences agree, proving the local integral is independent of coordinates. Refinements preserve integrals by additivity of endpoint differences. Summing over the common subdivision proves equality of the two original sums.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Scope:** The integral is of a holomorphic differential; the problem does not supply an integral for an arbitrary function along an arbitrary continuous path.
- **Inputs:** Exercise 6.1.1, local holomorphic primitives, and the Lebesgue number lemma are used explicitly.
- **Routing:** Compatibility of surface coordinates and differentials is the principal tool.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
