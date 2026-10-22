---
title: 'Exercise LA555: Continuous First Cohomology as a Direct Limit'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 5, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-5
created: '2026-10-23'
---

# Exercise LA555: Continuous First Cohomology as a Direct Limit

## Problem Statement

> [!question] Neukirch IV.3.5
> Show that $H^1(G,A)=\varinjlim_NH^1(G/N,A^N)$, where $N$ varies over all the open normal subgroups of $G$.

## Hints

> [!hint]- Hint 1
> 连续映射从紧群到离散模的像有限。选开正规 $N$，使 cocycle 在 $N$ 上为 $1$，并使 $N$ 固定全部有限像。

> [!hint]- Hint 2
> 满射需让 cocycle 在有限商下降；单射需让比较两个 coboundary 所用的元素也被更小的 $N$ 固定。

## Solution

> [!success]- Independent derivation
> 过渡映射为随 $N$ 缩小的 inflation。它们与到 $H^1(G,A)$ 的 inflation 相容，给出自然映射从直极限到 $H^1(G,A)$。
>
> **满射。** 对连续 cocycle $f:G\to A$，紧性和 $A$ 离散使 $f(G)$ 有限。$f(1)=1$，所以存在开正规 $N_0$ 使 $f|_{N_0}=1$。每个像元素有开稳定子，取有限个稳定子的正规核的交，再与 $N_0$ 相交，得开正规 $N$，既使 $f|_N=1$ 又固定全部 $f(G)$。于是 $f(gn)=f(g)^nf(n)=f(g)$，故 $f$ 经 $G/N$ 因子化并取值 $A^N$。得到有限商 cocycle，其 inflation 为原 $f$。
>
> **单射。** 设某个 $f\in Z^1(G/N,A^N)$ inflation 后为 coboundary $f(g)=a^{g-1}$，$a\in A$。选开正规 $M\subseteq N$ 同时固定 $a$，则同一公式在 $G/M$ 上以 $a\in A^M$ 为 coboundary。所以该类在直极限中已经为零。
>
> 两不同有限层类相等的情形也归结为其商为 coboundary，再取共同更细层。因此映射是同构。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Continuous Group Cohomology]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct Limits]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 5, printed p. 284, PDF p. 303]. 独立有限像下降与 coboundary 见证下降证明。
- **Boundary:** 离散模拓扑与 cocycle 连续性是有限层下降的关键，任意不连续 cocycle 不在此结论范围内。
