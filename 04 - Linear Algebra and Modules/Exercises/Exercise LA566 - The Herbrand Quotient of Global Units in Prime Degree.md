---
title: 'Exercise LA566: The Herbrand Quotient of Global Units in Prime Degree'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 4, printed p. 315, PDF p. 334
source_refs:
- S4/ch-IV/sec-7/ex-4
created: '2026-10-23'
---

# Exercise LA566: The Herbrand Quotient of Global Units in Prime Degree

## Problem Statement

> [!question] Neukirch IV.7.4
> Let $L|K$ be a cyclic extension of prime degree. Using exercise 3, compute the Herbrand quotient of the group of units $\mathcal O_L^*$ of $L$, viewed as a $G(L|K)$-module.

## Hints

> [!hint]- Hint 1
> 对有限生成交换群 $B$，$q_{0,p}(B)=p^{\operatorname{rank}B}$，有限挠部分的 kernel/cokernel 贡献相消。

> [!hint]- Hint 2
> 用 Dirichlet 单位定理：$\operatorname{rank}\mathcal O_F^\times=r_F+s_F-1$。固定单位为 $\mathcal O_K^\times$。

> [!hint]- Hint 3
> 奇素数次数时无 real-to-complex ramification；次数 $2$ 时令 $t$ 为变复的实素处数。

## Solution

> [!success]- Independent derivation
> 按 $\mathcal O_L$ 的数域整数环含义，设 $p=[L:K]$，$U_F=\mathcal O_F^\times$，$m_F=r_F+s_F$ 为无穷素处数。Dirichlet 单位定理给出 $U_F\simeq\mu(F)\times\mathbb Z^{m_F-1}$；源书对单位格的陈述见 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.11), printed p. 191, PDF p. 210]。
>
> 有限交换群 $T$ 的 $p$-乘法核与余核阶相同，因为 $\#T=\#T[p]\,\#pT$。所以
> $$
> q_{0,p}(U_F)=p^{m_F-1}.
> $$
> 又 $U_L^G=U_K$：不动元素在 $K$ 中，而整性及逆元整性等价于在 $\mathcal O_K$ 中为单位。Exercise 3 因而给出
> $$
> h(G,U_L)^{p-1}=p^{p(m_K-1)-(m_L-1)}.
> $$
>
> 若 $p$ 奇，则一个实处若变复，其局部分解群阶为 $2$，不可能整除奇数 $p$；因此每个无穷处都产生 $p$ 个同类型处，$m_L=pm_K$。代入得到 $h(G,U_L)^{p-1}=p^{-(p-1)}$，Herbrand quotient 为正有理数，所以
> $$
> h(G,U_L)=1/p.
> $$
> 若 $p=2$，设 $t$ 为 $K$ 中在 $L$ 中变复的实处数。每个这类处只产生一个复处，而其余无穷处产生两个，故 $m_L=2m_K-t$，得到
> $$
> h(G,U_L)=2^{t-1}.
> $$
> 统一写为
> $$
> h(G,U_L)=\frac{\prod_{v\mid\infty}[L_w:K_v]}{[L:K]},
> $$
> 其中每个 $v$ 选任一 $w\mid v$；只有 real-to-complex 的局部次数贡献因子 $2$。
>
> 核对：$\mathbb Q(i)/\mathbb Q$ 有 $t=1$，单位群有限，其 Herbrand quotient 为 $1$；实二次扩张有 $t=0$，结果为 $1/2$。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet Unit Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Herbrand Quotients]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real and Complex Places]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 4, printed p. 315, PDF p. 334]. 独立由前题公式与单位秩计算。
- **Scope:** 这里解释为数域的全局单位群。若 $L/K$ 指非阿基米德 local fields，则单位群不是此有限生成离散群，不能套用 Dirichlet 秩；local-unit Herbrand quotient 需另算，通常为 $1$。
