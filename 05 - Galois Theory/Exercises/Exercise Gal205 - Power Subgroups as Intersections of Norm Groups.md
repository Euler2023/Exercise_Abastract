---
title: 'Exercise Gal205: Power Subgroups as Intersections of Norm Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 3, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-3
created: '2026-10-23'
---

# Exercise Gal205: Power Subgroups as Intersections of Norm Groups

## Problem Statement

> [!question] Neukirch VI.6.3
> The group $(C_K)^n=(I_K)^nK^*/K^*$ is the intersection of the norm groups $N_{L|K}C_L$ of all abelian extensions $L|K$ of exponent $n$.

## Hints

> [!hint]- 提示
> Pass to the maximal abelian Galois group. Its quotient by $n$-th powers is a profinite group of exponent dividing $n$, separated by its finite quotients.

> [!hint]- Stronger hint
> The divisible connected component lies in every power subgroup; the remaining compact quotient is separated by finite characters of exponent dividing n.

## Solution

> [!success]- 独立推导
> 这里“exponent $n$”按类域论惯例理解为指数整除 $n$；即使只取精确指数 $n$ 的足够多扩张，也需另说明其存在性，不宜混用。
> 由 VI.§5 Exercise1，$C_K/D_K\cong G=\operatorname{Gal}(K^{\mathrm{ab}}/K)$。连通分支 $D_K$ 由 solenoid、圆和实直线构成，是可除群，所以 $D_K=(D_K)^n\subseteq(C_K)^n$。因此
> $$
> C_K/(C_K)^n\cong G/G^n.
> $$
> $G$ 紧，$n$ 次幂映射连续，所以 $G^n$ 闭。商 $G/G^n$ 是 exponent 整除 $n$ 的 profinite 阿贝尔群，其开子群的交为单位元。
> 有限阿贝尔 $L/K$ 的 exponent 整除 $n$，恰当且仅当其互反商的核包含 $(C_K)^n$；该核为 $N_{L/K}C_L$。任意不在 $(C_K)^n$ 的类，在 profinite 商 $G/G^n$ 的某个有限商非平凡；对应类域的范数群便不包含该类。反向所有这些范数群都包含 $(C_K)^n$。两包含给所求交等式。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 3, printed p.404, PDF p.423]。解答为独立推导；外部输入与本题推导分开标明。
