---
title: 'Exercise LA565: A Prime-Order Formula for the Herbrand Quotient'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 3, printed p. 315, PDF p. 334
source_refs:
- S4/ch-IV/sec-7/ex-3
created: '2026-10-23'
---

# Exercise LA565: A Prime-Order Formula for the Herbrand Quotient

## Problem Statement

> [!question] Neukirch IV.7.3
> Let $G$ be a cyclic group of prime order $p$, and let $A$ be a $G$-module such that $q_{0,p}(A)$ is defined. Show that
> $$
> h(G,A)^{p-1}=q_{0,p}(A^G)^p/q_{0,p}(A).
> $$
> **Printed hint:** Use the exact sequence
> $$
> 0\longrightarrow A^G\longrightarrow A\xrightarrow{\sigma-1}A^{\sigma-1}\longrightarrow0.
> $$
> Let $N=1+\sigma+\cdots+\sigma^{p-1}$ in the group ring $\mathbb Z[G]$. Show that the ring $\mathbb Z[G]/\mathbb ZN$ is isomorphic to $\mathbb Z[\zeta]$, for $\zeta$ a primitive $p$-th root of unity, and that in this ring one has
> $$
> p=(\sigma-1)^{p-1}\varepsilon,
> $$
> where $\varepsilon$ is a unit in $\mathbb Z[G]/\mathbb ZN$.

## Hints

> [!hint]- Hint 1
> 设 $B=A^G$、$C=(\sigma-1)A$。$B$ 上作用平凡，所以 $h(G,B)=q_{0,p}(B)$；$C$ 上 $N=0$，所以 $h(G,C)=q_{0,\sigma-1}(C)^{-1}$。

> [!hint]- Hint 2
> 在 $C$ 上使用 cyclotomic ring 恒等式 $p=(\sigma-1)^{p-1}\varepsilon$，把 $q_{0,p}(C)$ 写为 $q_{0,\sigma-1}(C)^{p-1}$。

> [!hint]- Hint 3
> 先别略过有限性：用 $A[p]$ 的有限性把 $B/pB$ 的潜在额外核嵌入有限群 $H^1(G,A[p])$。

## Solution

> [!success]- Independent derivation
> 采用加法记号，记 $T=\sigma-1$、$B=A^G$、$C=TA$，有题设短正合列。$A[p]$ 与 $A/pA$ 都有限。
>
> **1. 证明 $q_{0,p}(B)$ 可定义。** $B[p]\subseteq A[p]$ 有限。映射 $B/pB\to A/pA$ 的核为 $(B\cap pA)/pB$。对 $a=pb\in B$，$b^g-b$ 取值于 $A[p]$ 并为 cocycle；改变 $b$ 改变 coboundary。若其类为零，可调整 $b$ 使其固定，此时 $a\in pB$。故该核嵌入有限群 $H^1(G,A[p])$，后者有限因为所有函数 $G\to A[p]$ 仅有限个。于是 $B/pB$ 有限。对上述短正合列应用 Exercise 1 的二周期乘法性（微分为 $0,p$），$q_{0,p}(C)$ 亦可定义，且
> $$
> q_{0,p}(A)=q_{0,p}(B)q_{0,p}(C).
> $$
>
> **2. cyclotomic ring 恒等式。** $\mathbb Z[G]=\mathbb Z[X]/(X^p-1)$，再模掉 $N=\Phi_p(X)$，得到 $\mathbb Z[X]/\Phi_p(X)\simeq\mathbb Z[\zeta]$，$\sigma\mapsto\zeta$。又
> $$
> p=\Phi_p(1)=\prod_{j=1}^{p-1}(1-\zeta^j).
> $$
> 每个 $(1-\zeta^j)/(1-\zeta)$ 是代数整数，范数为 $p/p=1$，故为单位（其逆可由首一最小多项式的常数项 $\pm1$ 表达为整系数多项式）。因此乘积给出 $p=(\zeta-1)^{p-1}\varepsilon$，$\varepsilon$ 为单位。
>
> **3. 在 $C$ 上计算。** 因 $NT=0$，$NC=0$，所以 $C$ 为上述 cyclotomic ring 的模，$p=T^{p-1}\varepsilon$。$\ker T\subseteq C[p]$，且 $pC\subseteq TC$，所以 $\ker T$ 与 $C/TC$ 均有限。Exercise 2 的复合公式使
> $$
> q_{0,p}(C)=q_{0,T}(C)^{p-1},
> $$
> 因为单位 $\varepsilon$ 的核余核均平凡。又 $NC=0$，故
> $$
> h(G,C)=\frac{\#C^G}{\#(C/TC)}=q_{0,T}(C)^{-1}.
> $$
> $B$ 上作用平凡，$N=p$，故 $h(G,B)=q_{0,p}(B)$。两项有限使 $h(G,A)$ 也由 Herbrand 六边形定义，并由乘法性得到
> $$
> \begin{aligned}
> h(G,A)^{p-1}
> &=q_{0,p}(B)^{p-1}/q_{0,p}(C)\\
> &=q_{0,p}(B)^p/q_{0,p}(A).
> \end{aligned}
> $$
> 这正是题设公式。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Herbrand Quotients]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Integers]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 3, printed p. 315, PDF p. 334]. 独立完成印刷提示中的环同构与单位恒等式，并补足所有 quotient 有限性。
- **Input:** Herbrand quotient 对短正合列的乘法性为正文已证明 (7.3)，printed p. 312 / PDF p. 331；前两题另给出同类二周期形式。
