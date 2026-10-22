---
title: 'Exercise LA578: Global Tate Duality from the Poitou Tate Sequence'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 5, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-5
created: '2026-10-23'
---

# Exercise LA578: Global Tate Duality from the Poitou Tate Sequence

## Problem Statement

> [!question] Neukirch VI.6.5
> (**Global Tate Duality**). Show that the statements of exercise 4 extend to an arbitrary finite $G_K$-module $A$ instead of $\mathbb Z/n\mathbb Z$, and $A'=\operatorname{Hom}(A,\overline K^*)$ instead of $\mu_n$.
> **Printed hint:** Use exercises 4–8 of chap. IV, §3, and exercise 4 of chap. V, §1.

## Hints

> [!hint]- 提示
> The local assertions follow from cup products and local Tate duality. For global orthogonality use the central $H^1$ portion of the more general Poitou–Tate exact sequence, naming that deeper input explicitly.

> [!hint]- Stronger hint
> In the central Poitou-Tate segment, the map from the restricted product evaluates against all global dual H^1 classes; exactness identifies its kernel with the global image.

## Solution

> [!success]- 独立推导
> 设 $K$ 为数域，$A$ 为有限离散连续 $G_K$-模；因特征 $0$，其阶可任意。$A'=\operatorname{Hom}(A,\overline K^\times)$ 配上自然 Galois 作用，评价给 $A\otimes A'\to\overline K^\times$。
> (i) 每个局部配对为
> $$
> H^1(K_v,A)\times H^1(K_v,A')
> \xrightarrow{\cup}H^2(K_v,\overline K_v^\times)
> \xrightarrow{\operatorname{inv}_v}\mathbb Q/\mathbb Z.
> $$
> **局部标准输入：Tate 局部对偶。** 对非阿基米德局部域和有限模，上式完美；实位置使用 Tate 群（一次与普通 $H^1$ 相同），复位置为零。模及其对偶在几乎所有位置未分歧，那些位置的非分歧一次上同调子群互为正交补。因此有限和定义限制积 $P^1(A)\times P^1(A')$ 的完美 LCA 配对，和前题的有限支持检测证明相同。
> (ii) 杯积投影公式
> $$
> \operatorname{cor}(\operatorname{res}x\cup y)=x\cup\operatorname{cor}y
> $$
> 与 $\operatorname{inv}_v\operatorname{cor}_{w/v}=\operatorname{inv}_w$ 给出限制/余限制伴随；对所有 $w\mid v$ 求和即得全局限制积图。
> (iii) **外部深层输入：Poitou–Tate 九项正合序列**，用于数域的有限连续模及上述 Cartier 对偶、所有位置上的非分歧限制积，并在实位置对零次/二次项作 Tate 修正。我们只用其中央段
> $$
> H^1(K,A)\xrightarrow{\operatorname{loc}}P^1(A)
> \xrightarrow{\beta}H^1(K,A')^\vee
> \longrightarrow H^2(K,A),
> $$
> 其中 $\beta(x)(b)=\sum_v\operatorname{inv}_v(x_v\cup\operatorname{loc}_v b)$，$\vee=\operatorname{Hom}_{\rm cont}(-,\mathbb Q/\mathbb Z)$。这是更强全局对偶序列中的正合性输入，本文不重证九项序列。
> 按 $\beta$ 的定义，$\ker\beta$ 恰为全局 $H^1(K,A')$ 像的正交补；正合性则给 $\ker\beta=\operatorname{im}H^1(K,A)$。再对 $A'$ 应用同一序列，用有限模的双 Cartier 对偶 $A''\cong A$，得反方向正交补。故全部三项成立。
> 这一证明将非平凡全局输入明确放在 Poitou–Tate 正合性，不把题目本身的“互为正交补”重新命名后作为证明。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 5, printed p.404, PDF p.423]。解答为独立推导；外部输入与本题推导分开标明。本题不是原书内完整自足证明。尤其一般有限 Galois 模的全局对偶不能仅从循环常值模的情形无说明地推出；本解保留所需深层标准输入的边界。

- **External input verified:** J. S. Milne, [Arithmetic Duality](https://www.jmilne.org/math/xnotes/Tate100.pdf), §2, p.4, states the nine-term sequence for a global field and finite Galois module with order prime to the characteristic, its Cartier dual, and the modified real-place groups. The central segment used here is a logically stronger imported theorem; no independent proof of the full Poitou–Tate theorem is claimed.
