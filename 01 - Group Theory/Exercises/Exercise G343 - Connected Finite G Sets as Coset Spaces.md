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

> [!success]- 独立推导
> 设 $X$ 为非空有限传递 $G$-集，选 $x\in X$。稳定子 $H=G_x$ 是映射 $g\mapsto gx$ 对离散单点 $\{x\}$ 的逆像，因连续性而开。轨道—稳定子映射
> $$
> G/H\to X,\qquad gH\mapsto gx
> $$
> 良定义、双射且 $G$-等变。反向，任意开子群 $H$ 在紧群 $G$ 中有限指数：开陪集覆盖 $G$，紧性给有限子覆盖。故 $G/H$ 有限，左作用连续且传递。
> 任意有限 $G$-集唯一分解为其轨道的不交并，所以“不能分成两个非空 $G$-不变部分”与传递等价。改变基点 $x$ 将稳定子共轭，因此无基点同构类对应开子群的共轭类。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已与原书200 dpi图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 7, printed p.306, PDF p.325]。解答为独立推导。空集不是连通对象。此处“connected”是有限离散 $G$-集的轨道/范畴意义，不是其离散拓扑作为普通空间连通。
