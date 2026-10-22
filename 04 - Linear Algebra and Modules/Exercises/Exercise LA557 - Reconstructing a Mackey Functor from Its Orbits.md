---
title: 'Exercise LA557: Reconstructing a Mackey Functor from Its Orbits'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 11, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-11
created: '2026-10-23'
---

# Exercise LA557: Reconstructing a Mackey Functor from Its Orbits

## Problem Statement

> [!question] Neukirch IV.6.11
> $G$-modulations are explicitly given by the following data. Let $B_0(G)$ be the category whose objects are the $G$-sets $G/U$, where $U$ varies over the open subgroups of $G$, and whose morphisms are just the projections $\pi:G/U\to G/V$ for $U\subset V$, as well as the maps $c(\sigma):G/U\to G/\sigma U\sigma^{-1}$, $\tau U\mapsto\tau U\sigma^{-1}=\tau\sigma^{-1}(\sigma U\sigma^{-1})$, for $\sigma\in G$.
>
> Let $A=(A^*,A_*):B_0(G)\to(ab)$ be a double functor and for $\pi:G/U\to G/V$ ($U\subset V$), resp. $c(\sigma):G/U\to G/\sigma U\sigma^{-1}$ ($\sigma\in G$), define
> $$
> \operatorname{Ind}_V^U=A_*(\pi):A(G/U)\longrightarrow A(G/V),\qquad
> \operatorname{Res}_U^V=A^*(\pi):A(G/V)\longrightarrow A(G/U),
> $$
> $$
> c(\sigma)_*=A_*(c(\sigma)):A(G/U)\longrightarrow A(G/\sigma U\sigma^{-1}).
> $$
> If for any three open subgroups $U,V\subset W$ of $G$, one has the induction formula
> $$
> \operatorname{Res}_U^W\circ\operatorname{Ind}_W^V
> =\sum_{\sigma\in U\backslash W/V}
> \operatorname{Ind}_U^{U\cap\sigma V\sigma^{-1}}\circ c(\sigma)_*\circ
> \operatorname{Res}_{V\cap\sigma^{-1}U\sigma}^{V},
> $$
> then $A$ extends uniquely to a $G$-modulation $A:B(G)\to(ab)$.
>
> **Printed hint:** If $X$ is an arbitrary finite $G$-set, then the disjoint union $A_X=\coprod_{x\in X}A(G/G_x)$ is again a $G$-set, because $c(\sigma)_*A(G/G_x)=A(G/G_{\sigma x})$. Define $A(X)$ to be the group $A(X)=\operatorname{Hom}_X(X,A_X)$ of all $G$-equivariant sections $X\to A_X$ of the projection $A_X\to X$.

> [!warning] Source issue
> 按本节 double functor 的明示定义，题面缺少 $A^*(c)=A_*(c)^{-1}$。Solution 给出 $C_3$ 反例并证明加入该必要条件后的完整版本。

## Hints

> [!hint]- Hint 1
> 先检查同构 $c$：Mackey pullback 方块迫使 $c_*c^*=1$。题面给出的 double functor 是否已包含这项？

> [!hint]- Hint 2
> 在补充 $A^*(c)=A_*(c)^{-1}$ 后，$A(X)$ 是在每个轨道选择一个稳定子群处群的有限直积。对任意映射逐点用 restriction 定义 pullback，沿纤维的稳定子轨道用 induction 定义 pushforward。

> [!hint]- Hint 3
> 把一个 pullback 方块按左右轨道分解；纤维积 $(G/U)\times_{G/W}(G/V)$ 的轨道由 $U\backslash W/V$ 编号，恰得到所印 induction formula。

## Solution

> [!success]- Independent derivation
> **题面缺少一项同构兼容条件。** 本节 double functor 的定义只说两个函子在对象上一致；Mackey 性还迫使对每个同构 $c$ 有 $A^*(c)=A_*(c)^{-1}$。这是取 $c$ 与其逆构成的 pullback 方块所得。仅所印 induction formula 不能补回该条件。
>
> 反例：令 $G=C_3=\langle s\rangle$，$A(G/1)=\mathbb Z[\zeta_3]$，$A(G/G)=0$。在 $G/1$ 的自同构上令 $c(s)_*$ 为乘 $\zeta_3$，令所有 $c(s)^*$ 为恒等；两个轨道之间的 maps 均为零。它确为 double functor：与投影的任何复合均为零。唯一非平凡 induction formula 为
> $$
> \operatorname{Res}_1^G\operatorname{Ind}_G^1=0=1+\zeta_3+\zeta_3^2.
> $$
> 其余公式或为零或为函子的恒等式。然而 $c(s)_*c(s)^*$ 为乘 $\zeta_3$ 而非恒等，故不能延拓为 Mackey functor。
>
> **修正版本及证明。** 补充对 orbit isomorphisms 的 inverse compatibility。记 $M_U=A(G/U)$。按 hint，把 $A(X)$ 定义为满足 $a_{\sigma x}=c(\sigma)_*a_x$ 的族 $(a_x)_{x\in X}$。$g\in G_x$ 时 $c(g):G/G_x\to G/G_x$ 是恒等，所以每个轨道可任意选择一个 $a_x\in M_{G_x}$，其它坐标唯一确定；因此 $A(X)\simeq\prod_{G\backslash X}M_{G_x}$，不依赖轨道代表的选择。
>
> 对 $f:X\to Y$，有 $G_x\subset G_{f(x)}$，定义
> $$
> (f^*b)_x=\operatorname{Res}_{G_x}^{G_{f(x)}}b_{f(x)}.
> $$
> 对 $y\in Y$，将有限纤维 $f^{-1}(y)$ 按 $G_y$ 轨道分解，定义
> $$
> (f_*a)_y=\sum_{x\in G_y\backslash f^{-1}(y)}\operatorname{Ind}_{G_y}^{G_x}a_x.
> $$
> 换纤维代表时 conjugation 的自然性使每项相同；换 $y$ 为 $\sigma y$ 则整体乘 $c(\sigma)_*$。这两个自然性关系都是 $B_0(G)$ 中投影与 $c(\sigma)$ 的交换关系，已由函子性保证。因此 maps 良定义，并满足 $G$-equivariance。
>
> Pullback 的复合律来自 restriction 的复合律。Pushforward 的复合律来自把复合纤维先按中间纤维分组，再用 induction 的传递性求和。恒等映射分别给恒等；不交并给有限直积，也就是有限直和。
>
> 最后检查 pullback 方块。所有 groups 与 maps 对有限轨道直和相容，故只需检查两个映射 $G/U\to G/W\leftarrow G/V$。纤维积的轨道由 $U\backslash W/V$ 编号，第 $\sigma$ 个轨道的稳定子为 $U\cap\sigma V\sigma^{-1}$；按上述定义计算两条路线，左边正是 $\operatorname{Res}_U^W\operatorname{Ind}_W^V$，右边正是题面所印和式。因此假设给出 Mackey 方块。一般方块由这些轨道方块取直和而得。
>
> 反之，任一延拓必须在不交并上取直和，在轨道映射上给已有 maps；以上公式由分解纤维和 Mackey 方块强制。故延拓在 canonical isomorphism 的意义下唯一。原文若已把 inverse compatibility 隐含在 double functor 的术语中，则上述反例被该额外约定排除，而修正后的证明直接适用。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Functors]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 11, printed p. 308, PDF p. 327]. 原题及完整 printed hint 已保留。独立证明明确加入同构兼容，未将一般 modulation 等同于 $G$-module。
- **Uniqueness:** 有限直和的对象选择只能给自然同构意义的唯一；不应理解成任意 chosen models 的字面相等。
