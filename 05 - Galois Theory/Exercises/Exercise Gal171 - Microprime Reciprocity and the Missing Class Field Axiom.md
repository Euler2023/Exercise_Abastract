---
title: 'Exercise Gal171: Microprime Reciprocity and the Missing Class Field Axiom'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 3, printed p. 299, PDF p. 318
source_refs:
- S4/ch-IV/sec-5/ex-3
created: '2026-10-23'
---

# Exercise Gal171: Microprime Reciprocity and the Missing Class Field Axiom

## Problem Statement

> [!question] Neukirch IV.5.3
> Let $d:G\to\widehat{\mathbb Z}$ be a surjective homomorphism, $A$ a $G$-module which satisfies axiom (5.1), and let $v:A_k\to\widehat{\mathbb Z}$ be a henselian valuation with respect to $d$.
> Let $K|k$ be a finite extension and let $\operatorname{spec}(K)$ be the set of microprimes of $K$ (see §4, exercise 1–5). Define a canonical mapping
> $$
> r_K:\operatorname{spec}(K)\longrightarrow A_K/N_{\bar k|K}A_{\bar k},
> $$
> and show that, for a finite extension, the diagram
> $$
> \begin{array}{ccc}
> \operatorname{spec}(L)&\xrightarrow{r_L}&A_L/N_{\bar k|L}A_{\bar k}\\
> \pi\downarrow&&\downarrow N_{L|K}\\
> \operatorname{spec}(K)&\xrightarrow{r_K}&A_K/N_{\bar k|K}A_{\bar k}
> \end{array}
> $$
> commutes. Show furthermore that, for every finite Galois extension $L|K$, $r_K$ induces the reciprocity isomorphism
> $$
> r_{L|K}:G(L|K)\longrightarrow A_K/N_{L|K}A_L.
> $$
> **Printed hint:** Let $\varphi\in G_K$ be an element such that $d_K(\varphi)\in\mathbb N$. Let $\Sigma$ be the fixed field of $\varphi$ and
> $$
> \widehat A_\Sigma=\varprojlim_\alpha A_{K_\alpha},
> $$
> where $K_\alpha|K$ varies over the finite subextensions of $\Sigma|K$, and where the projective limit is taken with respect to the norm maps $N_{K_\beta|K_\alpha}:A_{K_\beta}\to A_{K_\alpha}$. Then there is a surjective homomorphism $v_\Sigma:\widehat A_\Sigma\to Z$ and a homomorphism $N_{\Sigma|K}:\widehat A_\Sigma\to A_K$.

> [!warning] Source issue
> 印刷引用的 §4 Exercise 5 不存在；有限 Galois 群须取 abelianization；更关键的是 (5.1) 只保证 reciprocity 为同态，不能保证一般 ramified 同构。下文用二次扩张给出明确反例。最后的未完成 norm 商与 norm 完成也须区分。

## Hints

> [!hint]- Hint 1
> 先核对假设：正文此时只证明 reciprocity homomorphism；同构定理需要下一节的 class field axiom (6.1)。目标是交换群，所以非交换 Galois 群还须取 abelianization。

> [!hint]- Hint 2
> 可检验缺少 class field axiom 的后果：把标准 local multiplicative module 与其 unit module 相乘，valuation 只看第一项。unramified 条件保持，但 ramified norm 商多出一项。

## Solution

> [!success]- Independent derivation
> 本题最后的同构断言在印刷假设下为假；不仅是漏写 abelianization。下面给出一个直接 norm 商反例，因此不能为原题补出一个正确的“完整证明”。
>
> **1. 构造仍满足 (5.1) 的 henselian module。** 以 $k=\mathbb Q_3$ 的可分闭包为背景，令 $A_0=(k^{sep})^\times$，$U_0$ 为绝对值 $1$ 的元素子群，取
> $$
> A=A_0\times U_0,
> $$
> valuation 只取第一因子。对有限子扩域 $F/k$，有 $A_F=F^\times\times\mathcal O_F^\times$，且 $v(N_{F/k}A_F)=f_F\mathbb Z$，所以 henselian 条件与通常 local valuation 完全相同。单位核为 $U_0\times U_0$。
>
> 对有限 unramified 循环扩张 $E/F$，norm $\mathcal O_E^\times\to\mathcal O_F^\times$ 满射：剩余域单位 norm 满射；在 principal-unit successive quotients 上 norm 诱导有限剩余域 trace，trace 满射；逐阶调整并用完备性取极限，得到单位 norm 的满射。因此 $H^0(G(E/F),\mathcal O_E^\times)=1$。若单位 $u$ norm 为 $1$，有限 Hilbert 90 给 $u=b^{\sigma-1}$；unramified 时 $F$ 的 uniformizer 也为 $E$ 的 uniformizer，除去适当整数幂可把 $b$ 调成单位而不改变 coboundary，故 $H^{-1}$ 也为 $1$。对两个因子取乘积，$A$ 仍满足 (5.1)。
>
> **2. 一个二次 ramified 商已否定同构。** 取 $L=\mathbb Q_3(\sqrt3)$、$K=\mathbb Q_3$，则 $G(L/K)$ 为二阶循环群。对任意单位 $u\in\mathcal O_L^\times$，两个共轭在剩余域 $\mathbb F_3$ 中相同，所以
> $$
> N_{L/K}(u)\bmod3=(\bar u)^2=1.
> $$
> 因此 $-1\in\mathcal O_K^\times$ 不是单位 norm。它也不是 $L^\times$ 的 norm：若 norm 的 valuation 为零，$f=1$ 使原元素 valuation 必为零，已经回到单位情形。于是两个商
> $$
> K^\times/N_{L/K}L^\times,\qquad
> \mathcal O_K^\times/N_{L/K}\mathcal O_L^\times
> $$
> 都至少有两个元素，而
> $$
> A_K/N_{L/K}A_L\simeq
> (K^\times/NL^\times)\times(\mathcal O_K^\times/N\mathcal O_L^\times)
> $$
> 至少有四个元素，不可能与二阶 $G(L/K)$ 同构。该反例的 Galois 群已经交换，所以只补 $G^{ab}$ 仍不能修复印刷断言。
>
> **3. 可正确保留的有限层内容。** 在仅有 (5.1) 时，正文 (5.6) 给 canonical homomorphisms $r_{L/K}:G(L/K)^{ab}\to A_K/N A_L$；(5.8) 给 norm/限制相容性。它们在全部有限 Galois 层形成 canonical 的 reciprocity 系统，因此 microprime 可确定其在 norm 完成
> $$
> \varprojlim_{E/K\ finite\ Galois}A_K/N_{E/K}A_E
> $$
> 中的相容像。若还要求像落在未完成的 $A_K/N_{\bar k/K}A_{\bar k}$，必须另证印刷提示中的 norm-compatible prime elements 存在并说明从该商到完成的像；不能仅把二者当成同一对象。
>
> 若补入后续 class field axiom (6.1)，正文一般 reciprocity theorem 才给有限层 $G(L/K)^{ab}$ 的同构。本题按原打印形式已被第二步反驳，故本笔记不把未证的未完成商提升或原同构断言列为完成结果。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Norm Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Norm Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 3, printed p. 299, PDF p. 318]. 题面与全部印刷提示保留；独立反例否定仅由 (5.1) 推出的同构，有限层 canonical homomorphism 与兼容性引用正文 (5.6)、(5.8)，printed pp. 294–296 / PDF pp. 313–315。
- **Source issues:** §4 实际只有 Exercises 1–4，印刷引用 1–5 越界；最后同构还漏 abelianization 与 class field axiom。microprime 定义另须沿用 §4 对闭交换子群的假设。不能把这些遗漏当作已经满足的假设。
- **Proof boundary:** 本文给出原题为假的完整反驳及可成立的有限层替代；未声称已证明提示中一般 norm 逆极限的 valuation 满射性，也未将未完成的 norm 商静默等同于完成。
