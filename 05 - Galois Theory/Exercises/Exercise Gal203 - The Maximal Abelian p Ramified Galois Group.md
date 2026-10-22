---
title: 'Exercise Gal203: The Maximal Abelian p Ramified Galois Group'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 3, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-3
created: '2026-10-23'
---

# Exercise Gal203: The Maximal Abelian p Ramified Galois Group

## Problem Statement

> [!question] Neukirch VI.5.3
> Let $p$ be a prime number, and let $M_p|K$ be the maximal abelian $p$-extension unramified outside of $\{\mathfrak p\mid p\}$. Further, let $H|K$ be the maximal unramified subextension of $M_p|K$ in which the infinite places split completely. Then there is an exact sequence
> $$
> 1\longrightarrow G(M_p|H)\longrightarrow G(M_p|K)\longrightarrow Cl_K(p)\longrightarrow1,
> $$
> where $Cl_K(p)$ is the $p$-Sylow subgroup of the ideal class group $Cl_K$, and there is a canonical isomorphism
> $$
> G(M_p|H)\simeq\prod_{\mathfrak p\mid p}U_{\mathfrak p}^{(1)}/\bigl(\prod_{\mathfrak p\mid p}U_{\mathfrak p}^{(1)}\cap\bar E\bigr),
> $$
> where $\bar E$ is the closure of the (diagonally embedded) unit group $E=\mathcal O_K^*$ in $\prod_{\mathfrak p\mid p}U_{\mathfrak p}$.

> [!warning] Source issue / proof scope
> For p=2 with real places, the displayed unit quotient omits real sign factors under the source convention. A rational cyclotomic example and the corrected exact sequence are given below.

## Hints

> [!hint]- 提示
> Use inverse limits of ray class sequences supported above $p$. For $p=2$, check the real sign groups explicitly.

> [!hint]- Stronger hint
> Take p-parts of ray exact sequences and inverse limits, retaining real sign factors when p=2.

## Solution

> [!success]- 独立推导
> **Source issue at $p=2$.** 若允许实位置复化（本书把 $\mathbb C/\mathbb R$ 称为未分歧），原印第二式遗漏实符号。例 $K=\mathbb Q,p=2$：右端为 $\mathbb Z_2^\times/\{\pm1\}\cong\mathbb Z_2$，而最大阿贝尔 $2$-分歧圆分扩张的 Galois 群为 $\mathbb Z_2^\times\cong\mathbb Z_2\times C_2$。以下给一般修正版；对奇 $p$ 恢复原式。
> 令
> $$
> \mathcal U_p=\left(\prod_{v\mid p}U_v\times\{\pm1\}^{r_1}\right)^{(p)}
> $$
> 为该紧阿贝尔群的最大 pro-$p$ 商，$E_p$ 为全局单位对角映射到 $\mathcal U_p$ 的闭像。对模 $\prod_{v\mid p}\mathfrak p_v^n$ 的射线正合序列取 $p$-部分再取逆极限；有限单位剩余群的逆极限为局部单位群，符号条件保留全部实符号，故得到
> $$
> 1\to\mathcal U_p/E_p\to G(M_p/K)\to\mathrm{Cl}_K(p)\to1.
> $$
> 右端有限，按全局类域论，其固定域正是所有有限位置未分歧且无限位置全分裂的最大 $p$-子扩张 $H$。所以核为 $G(M_p/H)$，第一式成立。
> 若 $p$ 奇，实符号的 $p$-部分平凡，$U_v/U_v^{(1)}$ 阶为 $q_v-1$，与 $p$ 互素。因此 $\mathcal U_p=\prod_{v\mid p}U_v^{(1)}$，且全局单位在此的闭像等于 $\bar E\cap\prod U_v^{(1)}$，恢复原式。若 $p=2$ 且 $K$ 全虚，同样没有实符号修正。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 3, printed p.394, PDF p.413]。解答为独立推导。最大 pro-$p$ 商的上标 $(p)$ 与原书主单位 $U_v^{(1)}$ 不同。勿用本题掩盖实位置与窄类群的约定差别。
