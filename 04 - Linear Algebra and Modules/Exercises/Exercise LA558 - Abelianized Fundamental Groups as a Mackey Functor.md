---
title: 'Exercise LA558: Abelianized Fundamental Groups as a Mackey Functor'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 12, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-12
created: '2026-10-23'
---

# Exercise LA558: Abelianized Fundamental Groups as a Mackey Functor

## Problem Statement

> [!question] Neukirch IV.6.12
> The function $\pi_{\rm ab}(G/G_K)=G_K^{\rm ab}$ extends to a $G$-modulation
> $$
> \pi_{\rm ab}:B(G)\longrightarrow(pro\text{-}ab)
> $$
> into the category of pro-abelian groups. Thus, for an extension $L|K$, the maps $f^*:G_K^{\rm ab}\to G_L^{\rm ab}$, resp. $f_*:G_L^{\rm ab}\to G_K^{\rm ab}$, induced by $f:G/G_L\to G/G_K$ are given by the transfer, resp. the inclusion $G_L\to G_K$.

## Hints

> [!hint]- Hint 1
> 对开子群 $U\subset V$，covariant map 来自 inclusion，contravariant map 是 transfer $V^{ab}\to U^{ab}$。

> [!hint]- Hint 2
> 用 transfer 的陪集代表公式；把 $W/V$ 的代表按 $U$ 轨道分组，得到 double-coset 公式。连续性可在有限商逐层检查。

## Solution

> [!success]- Independent derivation
> 对每个开子群 $U$ 定义 $M_U=U/\overline{[U,U]}$，给 profinite quotient topology。Inclusion 给连续 $i_U^V:U^{ab}\to V^{ab}$；transfer 给 $t_U^V:V^{ab}\to U^{ab}$。具体选 $V/U$ 的左陪集代表 $R$，写 $vr=r' u(v,r)$，则
> $$
> t_U^V(\bar v)=\prod_{r\in R}\overline{u(v,r)}.
> $$
> 不同代表改变结果一个在 $U^{ab}$ 中相消的 telescope；对 $vw$，陪集置换使乘积成为两次乘积之积，所以是同态。有限乘积和有限个连续分片给出连续性。共轭 $U\mapsto\sigma U\sigma^{-1}$ 给同构，并令 contravariant map 为其逆。
>
> Transfer 的传递性可选嵌套代表 $R_{W/V}R_{V/U}$：上述乘积先对第二层代表，再对第一层代表求积，等于一次对 $W/U$ 求积。Inclusion 的传递性及 conjugation compatibility 由定义直接成立。
>
> 还需 Mackey 公式。对 $U,V\subset W$，把有限 $W$-set $W/U$ 限制到 $V$ 后按 $V$ 轨道分解；轨道由 $V\backslash W/U$ 编号。计算 $t_U^W$ 在 $v\in V$ 上的值时，每个轨道内的代表只相互置换；该轨道的稳定子为 $V\cap\sigma U\sigma^{-1}$。该轨道贡献恰为：先 transfer 从 $V$ 到此稳定子，再共轭至 $U\cap\sigma^{-1}V\sigma$，最后 inclusion 到 $U$。对所有轨道取积即得
> $$
> t_U^W i_V^W=\sum_{\sigma\in U\backslash W/V}
> i_{U\cap\sigma V\sigma^{-1}}^U\,c(\sigma)\,t_{V\cap\sigma^{-1}U\sigma}^{V}.
> $$
> 这里用 additive notation 表示 pro-abelian groups 的和；写成乘法就是各轨道贡献的乘积。此推导逐个陪集因子列出，没有假设 $W$ 有限，因只用有限指数陪集集。
>
> Exercise 11 的修正重构遂适用；finite products 与 finite sums 在 pro-abelian groups 中一致，所有构造连续。对任意有限 $G$-set 取各轨道稳定子群的 abelianization 的有限积。于是 $\pi_{ab}$ 是所需 modulation，且题面所给 $f^*,f_*$ 正是 transfer 与 inclusion。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Finite Coset Actions]]
- [[01 - Group Theory/Concepts/Quotient Groups|Abelianization]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 12, printed p. 308, PDF p. 327]. 独立陪集乘积与 double-coset 推导。Transfer 的原公式为 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, printed pp. 296–297, PDF pp. 315–316]；这里只把该显式公式作输入，并补所需函子律。
- **Topology:** Abelianization 使用闭交换子群。没有把无限 profinite group 的抽象 abelianization 错当 Hausdorff quotient。
