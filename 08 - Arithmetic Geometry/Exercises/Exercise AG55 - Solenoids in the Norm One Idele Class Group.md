---
title: 'Exercise AG55: Solenoids in the Norm One Idele Class Group'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 8, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-8
created: '2026-10-23'
---

# Exercise AG55: Solenoids in the Norm One Idele Class Group

## Problem Statement

> [!question] Neukirch VI.1.8
> (i) The image $D_K^0$ of $f$ is compact, connected and arbitrarily divisible.
> (ii) $f$ yields a topological isomorphism
> $$
> f:\bigl((\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z\bigr)^t\times(\mathbb R/\mathbb Z)^s\xrightarrow{\sim}D_K^0.
> $$

> [!note] 前题的根单位约定
> 若 $K$ 全虚，沿用 Exercise 6 的可见修正：$\epsilon_i$ 是总正单位模根单位后的自由基的提升。有限根单位由复相位处理，不额外加入 profinite 参数。

## Hints

> [!hint]- Hint 1 — first step
> Find a compact set of representatives for $(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z$ before considering connectedness.

> [!hint]- Hint 2 — proof route
> First descend $f$ using its kernel. The solenoid is compact because of the fundamental domain $\widehat{\mathbb Z}\times[0,1]$; prove connectedness by a dense real line.

## Solution

> [!success]- 独立推导
> 由前题核的计算，$f$ 诱导从题列商群到 $D_K^0$ 的连续双射。每个 solenoid 因子 $\Sigma=(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z$ 有紧代表集 $\widehat{\mathbb Z}\times[0,1]$，故 $\Sigma$ 紧；圆 $\mathbb R/\mathbb Z$ 也紧。有限乘积紧，而 $C_K$ 为 Hausdorff，故该连续双射为同胚，证 (ii) 及紧性。
> $\{0\}\times\mathbb R$ 在 $\Sigma$ 中的像稠密：取整数 $n_j\to-x$，则 $[0,t+n_j]=[-n_j,t]\to[x,t]$。所以 $\Sigma$ 连通，题列乘积及其像连通。
> 乘 $n$ 在 $\Sigma$ 上满射：给 $[x,t]$，选整数 $k$ 使 $x+k\in n\widehat{\mathbb Z}$，则 $[(x+k)/n,(t+k)/n]$ 是原类的一个 $n$ 分点。圆上同样可除以 $n$。因此 $D_K^0$ 对每个 $n$ 可除。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 8, printed p.368, PDF p.387]。解答为独立推导。
