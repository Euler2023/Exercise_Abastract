---
title: 'Exercise LA553: Additive Hilbert 90 in Noethers Formulation'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 1, printed p. 283, PDF p. 302
source_refs:
- S4/ch-IV/sec-3/ex-1
created: '2026-10-23'
---

# Exercise LA553: Additive Hilbert 90 in Noethers Formulation

## Problem Statement

> [!question] Neukirch IV.3.1
> Show that Hilbert 90 in Noether's formulation also holds for the additive group $L$ of a Galois extension $L|K$.
> **Printed hint:** Use the normal basis theorem.

## Hints

> [!hint]- Hint 1
> 正规基生成元的迹不为零，否则其全部共轭之和是一条非平凡线性关系。因此可找到迹为 $1$ 的 $c\in L$。

> [!hint]- Hint 2
> 用右作用 cocycle 记号 $z(\sigma\tau)=z(\sigma)^\tau+z(\tau)$，尝试 $b=-\sum_\sigma z(\sigma)c^\sigma$。

## Solution

> [!success]- Independent derivation
> 先取 Noether 命题背景中的有限 Galois 扩张，记 $G=G(L/K)$。正规基定理给出 $\theta\in L$，使 $(\theta^\sigma)_{\sigma\in G}$ 为 $K$-基。其和 $\operatorname{Tr}_{L/K}\theta$ 不可能为零，否则该基的全部系数为 $1$ 的线性组合为零。故可令 $c=\theta/\operatorname{Tr}\theta$，使 $\sum_\sigma c^\sigma=1$；这在特征整除 $|G|$ 时也成立。
>
> 对任意加法 $1$-cocycle $z:G\to L$，采用源书的右作用约定，定义
> $$
> b=-\sum_{\sigma\in G}z(\sigma)c^\sigma.
> $$
> 由 cocycle 式 $z(\sigma)^\tau=z(\sigma\tau)-z(\tau)$，有
> $$
> \begin{aligned}
> b^\tau
> &=-\sum_\sigma\bigl(z(\sigma\tau)-z(\tau)\bigr)c^{\sigma\tau}\\
> &=-\sum_\rho z(\rho)c^\rho+z(\tau)\sum_\rho c^\rho
> =b+z(\tau).
> \end{aligned}
> $$
> 所以 $z(\tau)=b^\tau-b$ 为 coboundary，$H^1(G,L)=0$。这给出完整 Noether 型结论，而不仅是循环群的 norm-zero 版本。
>
> 若把题中的 Galois 扩张理解为无限扩张，则对连续 cocycle 仍成立：其像有限，选开正规 $N$ 同时固定全部像并使 $z|_N=0$，则 cocycle 经有限群 $G/N$ 作用于有限子扩域 $L^N$ 因子化；应用刚证明的有限情形，再 inflation 回 $G$ 即可。

## Related Concepts

- [[05 - Galois Theory/Concepts/Normal Basis Theorem|Normal Basis Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert 90]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 1, printed p. 283, PDF p. 302]. 独立迹为一与 cocycle 计算，保留正规基提示；正规基定理是明确输入。
- **Routing:** 正规基、迹和线性求和构造承担主要工作，归 linear-algebra。
