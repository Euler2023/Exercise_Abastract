---
title: 'Exercise G342: Transfer into Galois Fixed Abelianization'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 5, printed p. 306, PDF p. 325
source_refs:
- S4/ch-IV/sec-6/ex-5
created: '2026-10-23'
---

# Exercise G342: Transfer into Galois Fixed Abelianization

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 5
> If $L/K$ is a finite Galois extension, then $G_L^{ab}$ is a $G(L/K)$-module in a canonical way, and the transfer from $G_K$ to $G_L$ is a homomorphism
> $$
> \operatorname{Ver}:G_K^{ab}\longrightarrow(G_L^{ab})^{G(L/K)}.
> $$

## Hints

> [!hint]- Hint 1 — first step
> Write the transfer as a product over coset representatives and compare its conjugate after permuting those representatives.

> [!hint]- Hint 2 — proof route
> Conjugation by two lifts differs by an inner automorphism of $G_L$. Transfer is equivariant under conjugation, while inner conjugation acts trivially on $G_K^{\mathrm{ab}}$.

## Solution

> [!success]- 独立推导
> 设 $\Gamma=G_K$，$H=G_L\triangleleft\Gamma$，$Q=\Gamma/H$。对 $q\in Q$ 选提升 $\gamma\in\Gamma$，在 $H^{\mathrm{ab}}$ 上定义 $q[h]=[\gamma h\gamma^{-1}]$。另一个提升为 $\gamma h_0$，两共轭差一个 $H$ 的内自同构，后者在阿贝尔化上平凡；所以作用独立于提升，满足群作用律，连续性来自有限商和连续共轭。
> 有限指数 transfer 用余类代表的乘积定义；改变代表只改变其在 $H$ 内的交换子，所以给连续同态 $\Gamma^{\mathrm{ab}}\to H^{\mathrm{ab}}$。其对共轭自然：
> $$
> q\,\operatorname{Ver}([\delta])
> =\operatorname{Ver}([\gamma\delta\gamma^{-1}])
> =\operatorname{Ver}([\delta]).
> $$
> 末式因为内共轭在 $\Gamma^{\mathrm{ab}}$ 上平凡。故像落在 $Q$-不变部分，证所求。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

题面已与原书200 dpi页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 5, printed p.306, PDF p.325]。解答为独立推导，沿用本章的抽象域、连续离散 $G$-模、限制与范数约定。
