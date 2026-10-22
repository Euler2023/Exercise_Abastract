---
title: 'Exercise Gal161: Hilbert 90 for Truncated Witt Vectors'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 2, printed p. 283, PDF p. 302
source_refs:
- S4/ch-IV/sec-3/ex-2
created: '2026-10-23'
---

# Exercise Gal161: Hilbert 90 for Truncated Witt Vectors

## Problem Statement

> [!question] Neukirch IV.3.2
> Let $k$ be a field of characteristic $p$ and $\bar k$ its separable closure. For fixed $n\ge1$, consider in the ring of Witt vectors $W(\bar k)$ (see chap. II, §4, Exercise 2–6) the additive group $W_n(\bar k)$ of truncated Witt vectors $a=(a_0,a_1,\ldots,a_{n-1})$. Show that axiom (3.1) holds for the $G(\bar k|k)$-module $A=W_n(\bar k)$.

## Hints

> [!hint]- Hint 1
> 公理要求每个有限循环 $L/K$ 上的 $\ker N/(\sigma-1)W_n(L)$ 为零。可先证明更强的 $H^1(G,W_n(L))=0$。

> [!hint]- Hint 2
> 使用加法群的 $G$-等变短正合列 $0\to W_{n-1}(L)\xrightarrow V W_n(L)\xrightarrow{a\mapsto a_0}L\to0$，把 cocycle 的首坐标先消掉。

## Solution

> [!success]- Independent derivation
> 连续性先由逐坐标作用得到：每个 Witt 向量只有有限个坐标，这些坐标属于某有限可分扩域，故稳定子开。固定域也逐坐标识别，$A^{G_L}=W_n(L)$。
>
> 对任意有限 Galois 扩张 $L/K$，证明 $H^1(G(L/K),W_n(L))=0$。$n=1$ 是前题已经独立证明的加法 Hilbert 90。对 $n>1$，Witt 加法的首坐标是普通加法，且 Verschiebung 给出 $G$-等变加法短正合列
> $$
> 0\longrightarrow W_{n-1}(L)\xrightarrow V W_n(L)\xrightarrow{\pi_0}L\longrightarrow0.
> $$
> 该列的精确性直接由坐标 $V(a_0,\ldots)=(0,a_0,\ldots)$ 及 Witt 加法的三角形式给出。
>
> 令 $z:G\to W_n(L)$ 为 cocycle。其首坐标 $\pi_0z$ 是取值 $L$ 的加法 cocycle，故为 $b_0^{\sigma}-b_0$。选任意 $b\in W_n(L)$ 首坐标为 $b_0$，则
> $$
> z'(\sigma)=z(\sigma)-(b^\sigma-b)
> $$
> 首坐标为零，故唯一写成 $Vz''(\sigma)$。$V$ 为单射且与作用交换，所以 $z''$ 是取值 $W_{n-1}(L)$ 的 cocycle。由归纳，$z''(\sigma)=c^\sigma-c$。于是
> $$
> z(\sigma)=(b+Vc)^\sigma-(b+Vc),
> $$
> 完成归纳。
>
> 若 $G$ 循环、生成元为 $\sigma$，一个 norm-zero 元素 $a$ 给出 cocycle $z(\sigma^j)=\sum_{i=0}^{j-1}a^{\sigma^i}$；$Na=0$ 使此公式对群阶取模良定义。该 cocycle 是 coboundary，故 $a=(\sigma-1)b$。因此 $\ker N=(\sigma-1)W_n(L)$，正是公理 (3.1) 的加法形式。公理原页为 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, printed p. 278, PDF p. 297]。

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[05 - Galois Theory/Concepts/Normal Basis Theorem|Normal Basis Theorem]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 2, printed p. 283, PDF p. 302]. 独立消去 cocycle 坐标的归纳证明；并未将 Artin–Schreier–Witt 分类本身作为输入。
- **Boundary:** Witt 加法不是一般的逐坐标加法；证明只对首坐标使用普通加法，其余部分通过真正的加法同态 $V$ 处理。
