---
title: 'Exercise Gal207: Decomposition of Ramified Primes from Ideal Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 1, printed p. 413, PDF p. 432
source_refs:
- S4/ch-VI/sec-7/ex-1
created: '2026-10-23'
---

# Exercise Gal207: Decomposition of Ramified Primes from Ideal Groups

## Problem Statement

> [!question] Neukirch VI.7.1
> The decomposition law for the prime ideals $\mathfrak p$ which are ramified in an abelian extension $L|K$ can be formulated like this. Let $\mathfrak f$ be the conductor of $L|K$, $H^{\mathfrak f}\subseteq J_K^{\mathfrak f}$ the ideal group for $L$, and $H_{\mathfrak p}$ the smallest ideal group containing $H^{\mathfrak f}$ of conductor prime to $\mathfrak p$.
> If $e=(H_{\mathfrak p}:H^{\mathfrak f})$ and $\mathfrak p^f$ is the smallest power of $\mathfrak p$ which belongs to $H_{\mathfrak p}$, then
> $$
> \mathfrak p=(\mathfrak P_1\cdots\mathfrak P_r)^e,
> $$
> where the $\mathfrak P_i$ are of degree $f$ over $K$, and $r=n/(ef)$, $n=[L:K]$.
> **Printed hint:** The class field for $H_{\mathfrak p}$ is the inertia field above $\mathfrak p$.

## Hints

> [!hint]- 提示
> Interpret ideal groups as equivalence classes over moduli. The index is the inertia-group order; the least power records the Frobenius order after removing inertia.

> [!hint]- Stronger hint
> The enlarged ideal group corresponds to inertia; the order of the remaining Frobenius gives the residue degree.

## Solution

> [!success]- 独立推导
> 先澄清不同模数的理想群约定：指数 $(H_\mathfrak p:H^\mathfrak f)$ 须在共同模数下限制后计算；而 $\mathfrak p^f\in H_\mathfrak p$ 使用其与 $\mathfrak p$ 互素的较小 conductor 的代表。否则把 $\mathfrak p$ 加入允许的理想生成元后直接作字面指数，会得到错误的无限指数。
> 经 Artin 同构 $J_K^\mathfrak f/H^\mathfrak f\cong G(L/K)$，题设扩大的理想群对应于惯性子群 $I_\mathfrak p$。其固定域 $Z=L^{I_\mathfrak p}$ 在 $\mathfrak p$ 处未分歧，且是 $L$ 内在该处未分歧的最大子域；这正给导子可去掉 $\mathfrak p$ 的最小扩群。因此 $e=|I_\mathfrak p|$ 为分歧指数。
> 在 $Z/K$ 中，$\mathfrak p$ 的 Frobenius 在商群 $G/I_\mathfrak p$ 的阶，按理想 Artin 映射恰为 $\mathfrak p^f$ 首次属于 $H_\mathfrak p$ 的最小正指数。它也是剩余扩张次数 $f=|D_\mathfrak p/I_\mathfrak p|$。
> 因为 $L/K$ Galois，所有上方素点的 $e,f$ 相同。基本等式 $\sum_{\mathfrak P\mid\mathfrak p}e_\mathfrak P f_\mathfrak P=[L:K]$ 给 $r=[L:K]/ef$，理想分解随即为题列形式。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已与原书 200 dpi 图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 1, printed p.413, PDF p.432]。解答为独立推导。
