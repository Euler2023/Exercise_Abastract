---
title: 'Exercise Gal176: Tautological Class Field Theory from Transfer Descent'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 6, printed p. 306, PDF p. 325
source_refs:
- S4/ch-IV/sec-6/ex-6
created: '2026-10-23'
---

# Exercise Gal176: Tautological Class Field Theory from Transfer Descent

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 6
> (Tautological class field theory.) Assume that the profinite group $G$ satisfies the condition: for every finite Galois extension,
> $$
> \operatorname{Ver}:G_K^{ab}\longrightarrow(G_L^{ab})^{G(L/K)}
> $$
> is an isomorphism. (These are the profinite groups of “strict cohomological dimension 2” (see [145], chap. III, th. (3.6.4)).) Put $A_K=G_K^{ab}$ and form the direct limit $A=\varinjlim_K A_K$ via the transfer. Then $A_K$ is identified with $A^{G_K}$.
> Show that for every cyclic extension $L/K$ one has
> $$
> \#H^i(G(L/K),A_L)=\begin{cases}[L:K]&\text{for }i=0,\\1&\text{for }i=-1,\end{cases}
> $$
> and that for every surjective homomorphism $d:G\to\widehat{\mathbb Z}$, the induced map $v:A_k=G^{ab}\to\widehat{\mathbb Z}$ is a henselian valuation with respect to $d$. The corresponding reciprocity map $r_{L/K}:G(L/K)\to A_K/N_{L/K}A_L$ is essentially the identity.

## Hints

> [!hint]- Hint 1 — first step
> For a cyclic quotient $\Gamma/H$, first identify the image of $H^{ab}\to\Gamma^{ab}$ and its kernel.

> [!hint]- Hint 2 — proof route
> For a cyclic quotient $\Gamma/H$, its commutator subgroup is $[\Gamma,H]$. Use $\operatorname{Ver}\circ j=N$ and the assumed transfer descent.

## Solution

> [!success]- 独立推导
> transfer 的传递律定义有向极限。对任意有限 $L/K$，可再嵌入有限 Galois $M/K$；假设使 $\operatorname{Ver}_{M/K}$ 单射，故所有转移均单射，可把每个 $A_K$ 看作 $A$ 的子群。共轭定义 $G$ 在 $A$ 上的作用，每个 $A_K$ 的元素被开子群 $G_K$ 固定，所以作用离散连续。
> 若 $a\in A^{G_K}$，取包含其某个代表的有限 Galois 层 $L/K$。转移单射使 $a$ 在 $A_L$ 中已经被 $G(L/K)$ 固定；假设给 $a\in\operatorname{Ver}A_K$。因此 $A^{G_K}=A_K$。
> 现令 $\Gamma=G_K,H=G_L,Q=\Gamma/H$ 循环，记 $B=H^{\mathrm{ab}}$，$C=\Gamma^{\mathrm{ab}}$，$j:B\to C$ 为包含诱导映射。选 $\tau\in\Gamma$ 提升 $Q$ 的生成元。因 $\Gamma$ 由 $H,\tau$ 拓扑生成，闭交换子子群满足 $\Gamma'=[\Gamma,H]$，故
> $$
> \ker j=[\Gamma,H]/H'=(\tau-1)B.
> $$
> 模块范数在 $B$ 上满足 $N_Q=\operatorname{Ver}\circ j$；由假设 $\operatorname{Ver}:C\xrightarrow{\sim}B^Q$，得到 $\ker N_Q=\ker j=(\tau-1)B$，所以 $\widehat H^{-1}(Q,B)=0$。同样
> $$
> \widehat H^0(Q,B)=B^Q/N_QB
> \cong C/jB\cong\Gamma/H=Q,
> $$
> 给两个群阶。
> 对 $d$，诱导 $v:G^{\mathrm{ab}}\to\widehat{\mathbb Z}$ 满射。有限 $K/k$ 的范数是包含 $G_K^{\mathrm{ab}}\to G^{\mathrm{ab}}$，故值群是 $d(G_K)=f_K\widehat{\mathbb Z}$；规范化后有限层值群均为 $\widehat{\mathbb Z}$，含标准整数且模每个 $n$ 得 $\mathbb Z/n$。这正给 henselian 指数条件。
> 最后 $A_K/N_{L/K}A_L=C/jB\cong G(L/K)^{\mathrm{ab}}$，两个商由同一 $\Gamma$ 元的类给出，所以互反同构是这一恒等识别。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已与原书200 dpi图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 6, printed p.306, PDF p.325]。解答为独立推导。严格上同调维数的等价刻画是原书附带引用；本证明只使用题目明确给定的 transfer 同构性质，未证明那项外部分类。
