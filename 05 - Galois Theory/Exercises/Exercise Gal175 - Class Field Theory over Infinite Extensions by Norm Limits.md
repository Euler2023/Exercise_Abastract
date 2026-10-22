---
title: 'Exercise Gal175: Class Field Theory over Infinite Extensions by Norm Limits'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 4, printed p. 306, PDF p. 325
source_refs:
- S4/ch-IV/sec-6/ex-4
created: '2026-10-23'
---

# Exercise Gal175: Class Field Theory over Infinite Extensions by Norm Limits

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 4
> (Generalization to infinite extensions.) Let $(d:G\to\widehat{\mathbb Z},v:A_k\to\widehat{\mathbb Z})$ be a class field theory. We assume that the kernel $U_k$ of $v_k:A_k\to\widehat{\mathbb Z}$ is compact for every finite extension $K/k$. For an infinite extension $K/k$, put
> $$
> \widehat A_K=\varprojlim_\alpha A_{K_\alpha},
> $$
> where $K_\alpha/k$ varies over the finite subextensions of $K/k$ and the projective limit is taken with respect to the norm maps $N_{K_\beta/K_\alpha}:A_{K_\beta}\to A_{K_\alpha}$. Show:
> 1) For every (finite or infinite) extension $L/K$, one has a norm map
> $$
> N_{L/K}:\widehat A_L\longrightarrow\widehat A_K,
> $$
> and if $L/K$ is finite, there is an injection $i_{L/K}:\widehat A_K\hookrightarrow\widehat A_L$. If furthermore $L/K$ is Galois, then one has $\widehat A_K\cong\widehat A_L^{G(L/K)}$.
> 2) For every extension $K/k$ with finite inertia degree $f_K=[K\cap\widetilde k:k]$, $(d,v)$ induces a class field theory $(d_K:G_K\to\widehat{\mathbb Z},v_K:\widehat A_K\to\widehat{\mathbb Z})$.
> 3) If $K\subseteq K'$ are extensions of $k$ with $f_K,f_{K'}<\infty$, and $L/K$ and $L'/K'$ are (finite or infinite) Galois extensions with $L\subseteq L'$, then one has a commutative diagram
> $$
> \begin{array}{ccc}
> \widehat A_{K'}&\xrightarrow{(\ ,L'/K')}&G(L'/K')^{ab}\\
> {\scriptstyle N_{K'/K}}\downarrow&&\downarrow{\scriptstyle\mathrm{res}}\\
> \widehat A_K&\xrightarrow{(\ ,L/K)}&G(L/K)^{ab}.
> \end{array}
> $$

## Hints

> [!hint]- Hint 1 — first step
> Start with a fixed finite subextension of $K$ and use norm transitivity to define one coordinate of the proposed map.

> [!hint]- Hint 2 — proof route
> Define maps at finite levels and use norm transitivity. Compact valuation fibers supply compatible solutions when taking inverse limits of the finite reciprocity and cyclic exact sequences.

## Solution

> [!success]- 独立推导
> 记 $K_\alpha$ 为有限层。所有以下极限均相对于范数；把 $L,K$ 的有限层取成相容公共有向系统。对固定有限 $K_\alpha$，从足够大有限 $L_\beta$ 到 $K_\alpha$ 的范数，在进一步加大 $\beta$ 后由范数传递律不变，因而给范数的各坐标，定义 $N_{L/K}$。
> 若 $[L:K]<\infty$，可将它下降为某个有限层 $L_0/K_0$；加大 $K_0$ 后使 $L_\alpha=L_0K_\alpha$ 且 $[L_\alpha:K_\alpha]=[L:K]$。基变换下的有限层包含映射与范数交换，故给 $i_{L/K}$。有限 Galois 时每层不变元正好是 $A_{K_\alpha}$；有限群不变元与逆极限交换，得到题列不变元等式及单射。
> 这里使用的极限精确性原理须说明：在赋值已固定的每个纤维中，解集是紧群 $U_{K_\alpha}$ 的闭陪集。任意有限多个兼容约束可推到一个更高有限层，并在那里用已证有限类域论求解；因此这些闭解集具有有限交性质。紧性给全部约束的共同解。不能一般性地声称任意逆极限保满射。
> 若 $f_K<\infty$，有限层未分歧次数最终稳定。各有限层规范化赋值相容，定义 $v_K$；前段紧纤维原理给所需每个值的兼容提升，故值群保持 henselian 条件。对有限循环 $L/K$，下降到上述等次数有限层，有限层的两周期复形为
> $$
> A_{L_\alpha}\xrightarrow{\sigma-1}A_{L_\alpha}\xrightarrow{N}A_{K_\alpha}.
> $$
> 固定赋值后用紧纤维原理提升其解，得到极限中 $\ker N=(\sigma-1)\widehat A_L$；同一原理将有限层的范数商 $A_{K_\alpha}/N A_{L_\alpha}$（阶恒为 $[L:K]$，范数过渡由互反同构为同构）提升为
> $$
> \widehat A_K/N\widehat A_L\cong G(L/K).
> $$
> 所以 Tate 的 $H^{-1}$ 平凡、$H^0$ 阶为 $[L:K]$，给极限上的类域公理。
> 以下补足上述“有限兼容”的构造。取共尾系统，使 $L_\alpha/K_\alpha$ 都是同一个有限 Galois 扩张 $L/K$ 的下降、次数 $n$ 固定。若 $f_K<\infty$，则有限层的绝对惯性次数最终等于 $f_K$；$f_L$ 也有限。舍去初始有限层后，$K_\beta/K_\alpha$、$L_\beta/L_\alpha$ 的相对惯性次数均为 $1$，而 $L_\alpha/K_\alpha$ 的惯性次数 $f$ 与分歧指数 $e$ 固定。因此过渡范数保持规范化赋值，且 $v_{L_\alpha}(A_{K_\alpha})=eZ$，$v_{K_\alpha}(N A_{L_\alpha})=fZ$。这里 $Z$ 是题设的共同值子群；本段先以整数值代表元叙述，除以整数的唯一可除部分不影响有限商。
>
> 对一个指定整数值 $c$，各层 $v^{-1}(c)$ 都非空且是紧单位群的陪集。任何有限多个坐标与范数约束可以提升到一个共同较高层 $\gamma$，任取该层值 $c$ 的元素，然后向下取范数，便同时满足这些约束。因此极限中有值 $c$ 的元素。这证明包含标准整数的条件。更一般共同值群 $Z$ 的元素也用完全相同的纤维论证提升；所得到值群仍为 $Z$，故 $Z/mZ=\mathbb Z/m\mathbb Z$ 保留。
>
> 对 $b=(b_\alpha)\in\widehat A_L$ 满足 $Nb=1$，有限层 Hilbert 90 给 $b_\alpha=c_\alpha^{\sigma-1}$。可乘 $A_{K_\alpha}$ 中元素，把 $v(c_\alpha)$ 放在模 $eZ$ 的同一组有限整数代表元内，因为 $Z/eZ=\mathbb Z/e\mathbb Z$。这些 $c_\alpha$ 属于有限个紧纤维的并。任意有限约束选择共同上层 $\gamma$，先在那里解 $b_\gamma=c_\gamma^{\sigma-1}$ 并作此赋值调整，再向下取范数；交换性与过渡赋值不变保证所有低层约束成立。闭集有限交原理便给 $c\in\widehat A_L$，所以 $b=c^{\sigma-1}$。
>
> 再对 $a=(a_\alpha)\in\widehat A_K$，有限层互反把其剩余类都对应到同一个 $\tau\in G(L/K)$：这是范数—限制相容及各下降群之间限制同构的结果。若 $\tau=1$，每层有 $b_\alpha$ 满足 $Nb_\alpha=a_\alpha$；它们的赋值固定为 $v(a_\alpha)/f$。对有限约束，在共同上层解该范数方程，再向下范数，故紧纤维原理给 $N b=a$。反之范数当然给 $\tau=1$。
>
> 最后每个 $\tau$ 都能在极限中出现：有限层互反原像的赋值模 $fZ$ 由 $\tau$ 的未分歧分量确定，选固定整数代表 $c$。把任意原像乘一个范数，可将其赋值调整为 $c$；这样的原像集是非空紧闭集。有限多个兼容约束仍由共同上层的原像向下范数满足，因此得到极限原像。此处的有限层满射、固定赋值和共同上层构造分别负责非空性、紧性与有限兼容，未把“逆极限保满射”当一般原理。
> 有限层互反的范数—限制交换图在每层成立；取相容坐标即给 (3)。无限 $L,L'$ 再取其有限 Galois 子层的逆极限。范数与限制逐坐标定义，因此交换关系不依赖下降层的选择。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

题面已与原书200 dpi页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 4, printed p.306, PDF p.325]。解答为独立推导，沿用本章的抽象域、连续离散 $G$-模、限制与范数约定。紧性只用于赋值纤维，未将可能含非紧值群的整个 $A_K$ 当紧空间。有限惯性次数假设用于赋值规范化稳定，不能删去。
