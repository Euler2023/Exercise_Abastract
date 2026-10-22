---
title: 'Exercise LA562: Comparing Module and Modulation Henselian Valuations'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 17, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-17
created: '2026-10-23'
---

# Exercise LA562: Comparing Module and Modulation Henselian Valuations

## Problem Statement

> [!question] Neukirch IV.6.17
> Let $A$ be a $G$-modulation. We define a henselian valuation of $A$ to be a homomorphism $v:A\to\boldsymbol{\mathbb Z}$ such that the submodulation $v(A)$ of $\boldsymbol{\mathbb Z}$ comes from a subgroup $Z\subset\widehat{\mathbb Z}$ which contains $\mathbb Z$ and satisfies $Z/nZ=\mathbb Z/n\mathbb Z$ for all $n\in\mathbb N$. Let $U$ denote the kernel of $v$.
>
> Compare this definition with the definition (4.6) of a henselian valuation of a $G$-module $A$.

## Hints

> [!hint]- Hint 1
> 对来自离散 $G$-module 的 modulation，$A(G/G_K)=A^{G_K}$，restriction 是 inclusion，norm 是 group norm。旧定义由 $v_k$ 给 $v_K=\frac1{f_K}v_kN_{K/k}$。

> [!hint]- Hint 2
> 新定义的自然性恰为 $v_L(a)=e_{L/K}v_K(a)$、$v_KN_{L/K}=f_{L/K}v_L$。再用 image 均为同一个 $Z$ 比较 norm-image 条件。

## Solution

> [!success]- Independent derivation
> 先限定在 Exercise 10 所述来自离散 $G$-module $M$ 的 modulation：$A(K)=M^{G_K}$，covariant maps 是 norm，contravariant maps 是 inclusion。记 $f_K=[\widehat{\mathbb Z}:d(G_K)]$。旧定义 (4.6) 为 $v_k:A(k)\to\widehat{\mathbb Z}$，其像 $Z$ 包含 $\mathbb Z$、模每个 $n$ 与 $\mathbb Z$ 相同，并要求
> $$
> v_k(N_{K/k}A(K))=f_KZ.
> $$
> 它定义
> $$
> v_K(a)=\frac1{f_K}v_k(N_{K/k}a),
> $$
> 像恰为 $Z$。
>
> 对 $L/K$，norm 的传递性立即给
> $$
> v_K(N_{L/K}a)=f_{L/K}v_L(a),
> $$
> 因为 $f_L=f_Kf_{L/K}$。对 $a\in A(K)$，group norm $N_{L/K}a=[L:K]a=e_{L/K}f_{L/K}a$（用 additive notation）；于是
> $$
> v_L(a)=\frac1{f_L}v_kN_{L/k}a=e_{L/K}v_K(a).
> $$
> Conjugation 下的自然性来自 norm 的 conjugation compatibility 和基域上的 $G$-不动性。以上正是 $v:A\to\boldsymbol{\mathbb Z}$ 的全部自然性条件，其中 $\boldsymbol{\mathbb Z}$ 按 Exercise 15 的正确方向取 $f^*=e$、$f_*=f$。所以旧定义给出新定义。
>
> 反之，若有 modulation valuation，其每个 connected point 的 image 为同一 $Z$，则取基点 component $v_k$。对 $K/k$ 的 covariant map，自然性给
> $$
> v_kN_{K/k}=f_Kv_K,
> $$
> 故 $v_kN_{K/k}A(K)=f_KZ$，旧定义的 norm-image 条件成立；上述公式也唯一恢复 $v_K$。两种定义在来自 modules 的子类上因而等价。
>
> **新定义更广。** Exercise 10 的 descent equivalence 表明，只有满足 Galois descent 的 modulations 才来自离散 $G$-modules。新定义不添加 descent；因此不能把任意新 henselian valuation 自动改写成某个旧 module valuation。旧定义及 normalization 的输入位置为 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, (4.6)–(4.7), printed pp. 288–289, PDF pp. 307–308]。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Modulations]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Ramification and Residue Degree]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 17 and the preceding valuation definition, printed p. 309, PDF p. 328]. 独立对照，明确限定 equivalence 的 Galois-descent 子类。
- **Source issue inherited:** 所用 valuation modulation 采用 Exercise 15 中经证明的正确 $e/f$ 方向；若照印刷图反读，自然性会与 (4.7) 相反。
