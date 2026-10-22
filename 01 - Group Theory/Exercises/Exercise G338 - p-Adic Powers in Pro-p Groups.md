---
title: 'Exercise G338: p-Adic Powers in Pro-p Groups'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 3, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-3
created: '2026-10-23'
---

# Exercise G338: p-Adic Powers in Pro-p Groups

## Problem Statement

> [!question] Neukirch IV.2.3
> A pro-$p$-group is a profinite group $G$ whose quotients $G/N$, modulo all open normal subgroups $N$, are finite $p$-groups. Imitating exercise 1, make sense of the powers $\sigma^a$, for all $\sigma\in G$ and $a\in\mathbb Z_p$.

## Hints

> [!hint]- Hint 1
> 有限 $p$-群的指数为某个 $p$ 幂，故指数只需 $a\bmod p^m$，不需要完整的 profinite 整数。

> [!hint]- Hint 2
> 定义各有限商坐标后验证商映射相容，并把同一元素的整数幂法则传到极限。

## Solution

> [!success]- Independent derivation
> 对每个开正规 $N$，$\exp(G/N)=p^{m_N}$。定义
> $$
> (\sigma^a)_N=(\sigma N)^{a\bmod p^{m_N}}.
> $$
> 较细有限商到较粗有限商的映射保持整数幂，所以这些坐标相容，确定 $G$ 的唯一元素 $\sigma^a$。每个坐标只依赖有限数据，故 $(\sigma,a)\mapsto\sigma^a$ 联合连续，并延拓整数幂；稠密性 $\mathbb Z\subset\mathbb Z_p$ 使延拓唯一。
>
> 逐有限商可得 $(\sigma^a)^b=\sigma^{ab}$ 及 $\sigma^{a+b}=\sigma^a\sigma^b$。因此 $a\mapsto\sigma^a$ 是 $\mathbb Z_p$ 的连续同态，像为闭循环子群 $\overline{\langle\sigma\rangle}$。其核是闭理想 $p^m\mathbb Z_p$（有限阶情形）或零（无穷阶情形），故一个元素生成的 pro-$p$ 群为有限循环 $p$ 群或 $\mathbb Z_p$。若 $G$ 交换，则 $(\sigma\tau)^a=\sigma^a\tau^a$，使 $G$ 成为拓扑 $\mathbb Z_p$-模。

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 3, printed p. 274, PDF p. 293]. 独立有限商定义及法则验证。
- **Boundary:** pro-$p$ 假设保证所有幂所需的指数余数都是 $p$ 幂模数；一般 profinite 群应使用 $\widehat{\mathbb Z}$。
