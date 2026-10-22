---
title: 'Exercise AG56: The Identity Component of Norm One Idele Classes'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 9, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-9
created: '2026-10-23'
---

# Exercise AG56: The Identity Component of Norm One Idele Classes

## Problem Statement

> [!question] Neukirch VI.1.9
> The group $D_K^0$ is the intersection of all closed subgroups of finite index in $C_K^0$, and it is the connected component of $1$ in $C_K^0$.

> [!note] 前题的根单位约定
> 若 $K$ 全虚，沿用 Exercise 6 的可见修正：$\epsilon_i$ 是总正单位模根单位后的自由基的提升。有限根单位由复相位处理，不额外加入 profinite 参数。

## Hints

> [!hint]- Hint 1 — first step
> Look at the image of idèles which equal $1$ at every finite place and are positive at all real places.

> [!hint]- Hint 2 — proof route
> Identify $D_K^0$ with the closure of the image of the connected archimedean norm-one subgroup. The remaining quotient is profinite.

## Solution

> [!success]- 独立推导
> 设 $H_\infty$ 为在所有有限位置等于 $1$、在实位置正、且范数为 $1$ 的无限 idèle 子群。对数绝对值在超平面 $\sum_v\log|a_v|_v=0$ 中取值，复相位为圆；故 $H_\infty\cong\mathbb R^t\times(S^1)^s$ 连通。单位定理的对数基说明它恰为前题参数中各 profinite 坐标为 $0$ 的像。因此其在 $C_K^0$ 中的闭包就是 $D_K^0$：整数在 $\widehat{\mathbb Z}$ 稠密，可通过对角单位关系把所有 profinite 坐标逼近出来。
> 原书已证 $C_K^0$ 紧（VI.(1.6), printed p.362/PDF381）。商 $C_K^0/D_K^0$ 是 profinite：用有限理想类代表分解 idèle，移去 $H_\infty$ 后只余紧的有限单位群 $\prod_{v\nmid\infty}U_v$ 和有限多个理想类陪集；再除去单位闭包，得到一个紧全不连通群。有限单位群的开同余子群给这一商的开子群基。
> 把上述 profinite 结论精确化如下。记 $Q=C_K^0/D_K^0$，以有限部分的赋值理想定义连续映射 $Q\to\operatorname{Cl}_K$；它良定义，因为 $D_K^0$ 的代表在有限处都是单位。若理想类为零，可用一个主 idèle 消去全部有限赋值，得到有限单位部分与一个范数一无限部分。再除以 $H_\infty\subseteq D_K^0$，无限部分只剩实处的符号。因此该映射的核是 profinite 群
> $$
> P=\left(\prod_{v\nmid\infty}\mathcal O_v^\times\right)\times\{\pm1\}^{r_1}
> $$
> 在 $Q$ 中的连续像。$P$ 紧而 $Q$ Hausdorff，故这个像是 $P$ 除以一个闭子群，仍是 profinite，且它是 $Q$ 的开子群，因为理想类群有限。紧群具有开 profinite 子群时本身 profinite：先在这个子群中取任意小的开子群，再与有限多个共轭相交，得到原群中任意小的开正规子群。这里群为阿贝尔，甚至无需取共轭。这样同时补上了实符号的有限部分，并未把一般全不连通空间的连续像误当作全不连通。
> 所以 $C_K^0/D_K^0$ 的单位连通分支平凡，原群的单位连通分支恰为 $D_K^0$。每个闭有限指数子群对应有限离散商，必须包含连通群 $D_K^0$。反之 profinite 商中每个非单位元均可由某个有限商分离，拉回其核即得不包含该元的闭有限指数子群。故所求交恰为 $D_K^0$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 9, printed p.368, PDF p.387]。解答为独立推导。“有限单位群与有限理想类”商的论证使用限制积拓扑；不能把 $I_K/K^\times$ 的连通性误判为各局部分量连通性的直接乘积。
