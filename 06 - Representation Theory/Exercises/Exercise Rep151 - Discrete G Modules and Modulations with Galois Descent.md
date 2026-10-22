---
title: 'Exercise Rep151: Discrete G Modules and Modulations with Galois Descent'
topic: representation-theory
difficulty: advanced
status: not-started
tags:
- exercise
- representation-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 10, printed pp. 307–308, PDF pp. 326–327
source_refs:
- S4/ch-IV/sec-6/ex-10
created: '2026-10-23'
---

# Exercise Rep151: Discrete G Modules and Modulations with Galois Descent

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 10
> If $A$ is a $G$-module, then the function $A(G/G_K)=A^{G_K}$ extends to a $G$-modulation $A$ in such a way that, for an extension $L/K$, the map $f^*:A_K\to A_L$, resp. $f_*:A_L\to A_K$, induced by $f:G/G_L\to G/G_K$, is the inclusion, resp. the norm $N_{L/K}$.
> The rule $A\mapsto A$ is an equivalence between the category of $G$-modules and the category of $G$-modulations with “Galois descent”, i.e., of those $G$-modulations $A$ such that
> $$
> f^*:A(Y)\longrightarrow A(X)^{G(X\mid Y)},
> $$
> for every Galois mapping $f:X\to Y$, is an isomorphism.

## Hints

> [!hint]- Hint 1 — first step
> On an arbitrary finite $G$-set $X$, consider the group of equivariant functions $X\to A$. Restriction should be composition.

> [!hint]- Hint 2 — proof route
> Use equivariant maps $X\to M$, with pullback and summation over fibers. Conversely reconstruct $M$ as the direct limit of $A(G/N)$ over open normal $N$.

## Solution

> [!success]- 独立推导
> 解答采用加法记号，乘法记号下纤维和就是范数乘积。对任意有限 $G$-集定义
> $$
> A_M(X)=\operatorname{Map}_G(X,M),\quad
> f^*u=u\circ f,\quad
> (f_*u)(y)=\sum_{x\in f^{-1}(y)}u(x).
> $$
> 纤维有限，所以转移有定义；$G$ 将纤维双射到对应纤维，故和仍等变。限制的反变复合律与转移的协变复合律分别来自函数复合与有限重和。不交并给直积；拉回方块中对应纤维有双射，故 $g^*f_*=f'_*g'^*$，即 Mackey 恒等式。
> 评价在 $G/H$ 的基点 $H$ 给 $A_M(G/H)\cong M^H$；投影 $G/H\to G/J$ 的转移为 $\sum_{j\in J/H}j m$，限制为不变元包含。若 $H\triangleleft J$，被 deck 群固定的等变函数恰为在投影纤维上常值的函数，因此唯一下降到 $G/J$，证 Galois descent。
> 反向，给满足 descent 的 modulation $A$，取
> $$
> M_A=\varinjlim_{N\triangleleft_{\rm open}G}A(G/N)
> $$
> 并用限制作过渡。各过渡由 descent 单射；$G/N$ 的自同构给 $G$ 作用，兼容后令 $M_A$ 为离散连续模，因为每个有限层元素被 $N$ 固定。
> 对任意开 $H$ 选正规开 $N\subseteq H$。descent 给 $A(G/H)\cong A(G/N)^{H/N}$。进一步取直接极限，每个 $H$-固定元素在某个有限层表示，转移单射使其在该有限层已经固定，所以
> $$
> A(G/H)\cong M_A^H.
> $$
> 有限 $G$-集按轨道分解，故这些同构扩展到所有对象。限制映射按构造相容；Mackey 恒等式把转移拉到足够小正规层后变成有限纤维和，而该层限制单射，故转移也被唯一确定并相容。
> 同态逐层取极限给模同态，模同态逐对象给 modulation 同态。上述两构造互为逆（对离散连续模，$M=\bigcup_NM^N$），从而得到范畴等价。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已与原书200 dpi图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 10, printed p.307, PDF p.326]。解答为独立推导。只有满足 Galois descent 的 modulation 才来自单个离散 $G$-模；一般 Mackey 函子不能与 $G$-模混同。源书此题跨 printed pp.307–308/PDF326–327。
