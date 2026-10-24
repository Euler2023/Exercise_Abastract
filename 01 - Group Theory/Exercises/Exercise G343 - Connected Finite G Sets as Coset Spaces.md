---
title: 'Exercise G343: Connected Finite G Sets as Coset Spaces'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 7, printed p. 306, PDF p. 325
source_refs:
- S4/ch-IV/sec-6/ex-7
created: '2026-10-23'
---

# Exercise G343: Connected Finite G Sets as Coset Spaces

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 7
> Let $G$ be a profinite group and $B(G)$ the category of finite $G$-sets, i.e., of finite sets $X$ with a continuous $G$-operation. Show that the connected, i.e., transitive $G$-sets in $B(G)$ are, up to isomorphism, the sets $G/G_K$, where $G_K$ is an open subgroup of $G$, and $G$ operates via multiplication on the left.

## Hints

> [!hint]- Hint 1 — first step
> Choose a point $x$ of a transitive finite $G$-set and consider the orbit map $g\mapsto gx$.

> [!hint]- Hint 2 — proof route
> Choose a point and use its stabilizer. Continuity forces the stabilizer open, while finiteness gives finite index.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $X$ be a nonempty finite transitive $G$-set and choose $x\in X$. The stabilizer $H=G_x$ is the inverse image of the discrete singleton $\{x\}$ under the continuous map $g\mapsto gx$, so it is open. The orbit-stabilizer map
> $$
> G/H\to X,\qquad gH\mapsto gx
> $$
> is well defined, bijective, and $G$-equivariant. Conversely, any open subgroup $H$ has finite index in the compact group $G$: its open cosets cover $G$, and compactness gives a finite subcover. Thus $G/H$ is finite, with a continuous transitive left action.
> Every finite $G$-set decomposes uniquely as the disjoint union of its orbits. Thus being indecomposable into two nonempty $G$-invariant subsets is equivalent to transitivity. Changing the base point $x$ conjugates the stabilizer, so unpointed isomorphism classes correspond to conjugacy classes of open subgroups.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

The statement was checked against the original pages rendered at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 7, printed p.306, PDF p.325]. The solution is an independent derivation. The empty set is not a connected object. Here “connected” refers to the orbit or categorical meaning for finite discrete $G$-sets, not connectedness of their discrete topology as ordinary spaces.
