---
title: 'Exercise Gal168: Microprime Decomposition Groups and a Source Counterexample'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 4, printed p. 290, PDF p. 309
source_refs:
- S4/ch-IV/sec-4/ex-4
created: '2026-10-23'
---

# Exercise Gal168: Microprime Decomposition Groups and a Source Counterexample

## Problem Statement

> [!question] Neukirch IV.4.4
> Show that if $L|K$ is Galois, then the Galois group $G(L|K)$ operates transitively on $\operatorname{spec}(L)$. The “decomposition group”
> $$
> G_{\mathfrak P}(L|K)=\{\sigma\in G(L|K):\mathfrak P^\sigma=\mathfrak P\}
> $$
> is cyclic, and if $Z_{\mathfrak P}=L^{G_{\mathfrak P}(L|K)}$ is the “decomposition field” of $\mathfrak P\in\operatorname{spec}(L)$, then $L|Z_{\mathfrak P}$ is unramified.

> [!warning] Source issue
> 原文“transitively on spec(L)”应限制到每个底层微素点的纤维。更严重的是最后的 $L/Z_{\mathfrak P}$ unramified 断言在给定假设下不成立；下文给出独立反例。无限层的 cyclic 也须解释为 procyclic。未静默修改题面。

## Hints

> [!hint]- Hint 1
> 先固定底层微素点。正规子群 $H=G_L$ 时，其上方纤维为 $H\backslash G_K/C$，商群 $G_K/H$ 在该纤维上传递，稳定子为 $C$ 的像。

> [!hint]- Hint 2
> 最后一句不能仅从“稳定子循环”推出。要比较本章全局定义的 $d(G_{Z_{\mathfrak P}}):d(G_L)$；microprime 的返回时间可能含抽象分歧。

> [!hint]- Hint 3
> 可用 $G=\mathbb Z_3\rtimes\widehat{\mathbb Z}$，其中 $(a,b)(c,e)=(a+4^{b_3}c,b+e)$，以及 $H=\ker(a+b_3\bmod3)$ 构造反例。

## Solution

> [!success]- Independent derivation
> **成立的有限层结论。** 沿用前题的 $G_0=G_K$、开正规 $H=G_L$，固定底层本原 Frobenius $s$ 及 $C=\overline{\langle s\rangle}$。纤维 $H\backslash G_0/C$ 上，$G_0/H$ 的作用传递，稳定子共轭于 $CH/H$，是 procyclic 群 $C$ 的有限像，因而有限循环。无限 Galois 层则由有限层逆极限得到每个纤维上传递，稳定子为 procyclic，未必是抽象有限循环群。
>
> **印刷的全谱传递性不成立。** 作用保持底层微素点，故除非底层只有一个微素点，不能在整个 $\operatorname{spec}(L)$ 上传递。下面的同一个反例给出至少三个底层微素点，甚至取 $L=K$ 即已否定全谱传递性。
>
> **不同于本章 $d$-分歧的 microprime 返回时间。** 定义
> $$
> G=\mathbb Z_3\rtimes\widehat{\mathbb Z},\qquad
> (a,b)(c,e)=(a+4^{b_3}c,b+e),\qquad d(a,b)=b.
> $$
> 这里 $b_3$ 为 $b$ 的 $3$-进分量，$4^z$ 由连续 $3$-进幂定义，$d$ 连续满射。该群满足原先的闭交换子群假设：对 $3$-Sylow 中两个交换元素有
> $$
> a(4^{e_3}-1)=c(4^{b_3}-1).
> $$
> 若交换子群的投影含非零 $b_3$，则其与第一因子 $\mathbb Z_3$ 的交为零，因此该交换 pro-$3$ 群嵌入第二因子 $\mathbb Z_3$；若投影为零，它就在第一因子中。两种情形都 procyclic。对每个 $\ell\ne3$，交换子群的 $\ell$-Sylow 经 $d$ 单射到 $\mathbb Z_\ell$，亦 procyclic。交换 profinite 群为各 Sylow 的乘积，故全部闭交换子群 procyclic。这里用了 $4^z-1\ne0$ 对非零 $z\in\mathbb Z_3$，它由二项式赋值 $v_3(4^z-1)=1+v_3(z)$ 得到。
>
> 令 $H=\ker(G\to\mathbb Z/3\mathbb Z,(a,b)\mapsto a+b_3)$。因 $4^{b_3}\equiv1\pmod3$，该映射为满同态，$H$ 正规指数 $3$。又任意 $b$ 可选 $a\equiv-b_3\pmod3$，所以 $d(H)=\widehat{\mathbb Z}$，对应 $L/K$ 的 $f=1,e=3$，是非平凡全分歧扩张。
>
> 取 $s=(0,1)$。其 $d$-度为 $1$，故为本原 Frobenius；$s^3\in H$。$s^3$ 的中心化子为 $\{(0,b):b\in\widehat{\mathbb Z}\}$，因为 $4^3-1\ne0$。若 $s^3=t^m$ 是 $H$ 中 Frobenius 的真整数幂，则 $m\,d(t)=3$，只能 $m=3,d(t)=1$，再由中心化子得 $t=s\notin H$，矛盾。因此 $s^3$ 定义 $L$ 的微素点 $\mathfrak P$。$sH$ 生成 $G/H$ 且固定 $[s^3]_H$，故分解群为整个 $G/H$，$Z_{\mathfrak P}=K$，但 $L/K$ 已算出 $e=3$，并不 unramified。
>
> 此外元素 $(a,1)$ 的 $a\bmod3$ 在共轭下不变，给出至少三个本原 Frobenius 共轭类，验证底层全谱确实可有多个点。
>
> 因此可证的修正版是“每个纤维上传递；有限层稳定子循环、无限层稳定子 procyclic”。最后的 $d$-unramified 断言在题面假设下为假，不能保留为已证明结论。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 4, printed p. 290, PDF p. 309]. 完整保留印刷三项断言；独立证明成立部分，并给出满足 procyclic 交换子群假设的反例。
- **Boundary:** 上方 microprime 的返回指数不是整个抽象扩张的 $d$-inertia degree；把二者混同会错误推出最后一句。反例为纯 profinite 数据，适用于本章明确允许的抽象“fields”语言。
