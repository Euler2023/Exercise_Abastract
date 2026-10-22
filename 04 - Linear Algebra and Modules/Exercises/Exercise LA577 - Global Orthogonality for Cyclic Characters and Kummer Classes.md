---
title: 'Exercise LA577: Global Orthogonality for Cyclic Characters and Kummer Classes'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 4, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-4
created: '2026-10-23'
---

# Exercise LA577: Global Orthogonality for Cyclic Characters and Kummer Classes

## Problem Statement

> [!question] Neukirch VI.6.4
> (i) For a number field $K$, local Tate duality (see chap. V, §1, exercise 2) yields a non-degenerate pairing
> $$
> \tag{*}\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)\times\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mu_n)\longrightarrow\mathbb Z/n\mathbb Z
> $$
> of locally compact groups, where the restricted products are taken with respect to the subgroups $H_{nr}^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)$, resp. $H_{nr}^1(K_{\mathfrak p},\mu_n)$. For $\chi=(\chi_{\mathfrak p})$ in the first and $\alpha=(\alpha_{\mathfrak p})$ in the second product, it is given by
> $$
> (\chi,\alpha)=\sum_{\mathfrak p}\chi_{\mathfrak p}(\alpha_{\mathfrak p},\overline K_{\mathfrak p}|K_{\mathfrak p}).
> $$
> (ii) If $L|K$ is a finite extension, then one has a commutative diagram
> $$
> \begin{array}{ccccc}
> \prod_{\mathfrak P}'H^1(L_{\mathfrak P},\mathbb Z/n\mathbb Z)&\times&\prod_{\mathfrak P}'H^1(L_{\mathfrak P},\mu_n)&\longrightarrow&\mathbb Z/n\mathbb Z\\
> \uparrow&&\downarrow N_{L|K}&&\Vert\\
> \prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)&\times&\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mu_n)&\longrightarrow&\mathbb Z/n\mathbb Z.
> \end{array}
> $$
> (iii) The images of
> $$
> H^1(K,\mathbb Z/n\mathbb Z)\longrightarrow\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)
> $$
> and
> $$
> H^1(K,\mu_n)\longrightarrow\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mu_n)
> $$
> are mutual orthogonal complements with respect to the pairing (*).
> **Printed hint for (iii):** The cokernel of the second map is $C_K/(C_K)^n$, and one has $H^1(K,\mathbb Z/n\mathbb Z)=\operatorname{Hom}(G(L|K),\mathbb Z/n\mathbb Z)$, where $L|K$ is the maximal abelian extension of exponent $n$.

## Hints

> [!hint]- 提示
> Use $H^1(K,\mu_n)=K^\times/K^{\times n}$ and identify the restricted Kummer product with $I_K/I_K^n$. A local character family annihilates principal idèles exactly when it descends to $C_K$.

> [!hint]- Stronger hint
> Use global reciprocity to identify characters annihilating principal ideles, then use finite characters to separate C_K/C_K^n.

## Solution

> [!success]- 独立推导
> (i) 局部输入是有限群的完美配对
> $$
> H^1(K_v,\mathbb Z/n)\times K_v^\times/K_v^{\times n}\to\mathbb Z/n,
> \quad(\chi_v,a_v)\mapsto\chi_v(\operatorname{rec}_v(a_v)).
> $$
> 在 $v\nmid n\infty$，两边非分歧子群互为正交补。故限制积中的两个向量只有有限多个位置有非零配对，和式良定义且连续。任何非零局部坐标可用只支持该位置的对偶向量检测，故非退化；局部完美性与开紧子群互为正交补还给 Pontryagin 对偶同构。
> (ii) 局部互反兼容范数：$\operatorname{rec}_{K_v}(N_{L_w/K_v}a)=\operatorname{res}_{L_w/K_v}(\operatorname{rec}_{L_w}(a))$。因此
> $$
> \sum_w\langle\operatorname{res}\chi,a_w\rangle_w
> =\sum_v\left\langle\chi_v,\prod_{w\mid v}N_{L_w/K_v}a_w\right\rangle_v.
> $$
> 这就是原图的交换性。
> (iii) Kummer 理论把右限制积识别为 $I_K/I_K^n$；未分歧单位处可取单位代表，所以这一识别兼容限制积拓扑。一个左向量给 $I_K$ 上连续的阶整除 $n$ 的特征。它与所有对角 $a\in K^\times$ 正交，当且仅当杀掉 $K^\times$，即下降为 $C_K$ 的有限特征；全局互反律将其识别为 $H^1(K,\mathbb Z/n)$，得到第一侧正交补。
> 反过来，一个 idèle 类与全部全局特征正交，当且仅当它在 $C_K/C_K^n$ 中不能被任何有限特征检测。该商为 exponent 整除 $n$ 的 profinite 群，有限特征分离其点，故该类属于 $C_K^n$。这等价于 idèle 代表为 $a\beta^n$，$a\in K^\times$；也就是右侧向量来自全局 Kummer 类。两侧互为正交补。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 4, printed p.404, PDF p.423]。解答为独立推导；外部输入与本题推导分开标明。无限位置的 $H^1$ 与相应 Tate 修正一致；复位置的两群平凡。局部 Tate 非退化性作为已识别输入，(iii) 的全局结论在常值模情形由互反律直接推导。

- **Source cross-reference:** The printed local-duality reference says V.§1 Exercise 2; the finite-module local Tate-duality task is V.§1 Exercise 4. The original reference is preserved above and the actual imported duality statement is specified in the solution.
