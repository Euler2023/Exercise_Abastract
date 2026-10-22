---
title: 'Exercise LA579: The Correct Dual Obstruction to Grunwald Surjectivity'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 6, printed pp. 404–405, PDF pp. 423–424
source_refs:
- S4/ch-VI/sec-6/ex-6
created: '2026-10-23'
---

# Exercise LA579: The Correct Dual Obstruction to Grunwald Surjectivity

## Problem Statement

> [!question] Neukirch VI.6.6
> If $S$ is a finite set of places of $K$, then the map
> $$
> H^1(K,\mathbb Z/n\mathbb Z)\longrightarrow\prod_{\mathfrak p\in S}H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)
> $$
> is surjective if and only if the map
> $$
> H^1(K,\mu_n)\longrightarrow\prod_{\mathfrak p\notin S}H^1(K_{\mathfrak p},\mu_n)
> $$
> is injective. This is the case in particular if either the extension $K(\mu_{2^\nu})|K$ is cyclic, $n=2^\nu m$, $(m,2)=1$, or if $S$ does not contain all places $\mathfrak p\mid2$ which are nonsplit in $K(\mu_{2^\nu})$ (see §1, exercise 2).

> [!warning] Source issue / proof scope
> The printed injectivity criterion omits the everywhere locally trivial Kummer kernel. The correct obstruction is the quotient B_S/B_empty; the solution gives an explicit counterexample.

## Hints

> [!hint]- 提示
> Use Exercise4(iii) on a vector supported inside $S$. Distinguish a class locally trivial outside $S$ from one locally trivial at every place; the latter cannot obstruct a local prescription.

> [!hint]- Stronger hint
> The annihilator of the local restriction image is loc_S(B_S), whose kernel is the everywhere locally trivial subgroup B_empty; test S empty.

## Solution

> [!success]- 独立推导
> **Source issue.** 原印“injective”一般过强。令
> $$
> B_S=\ker\left(H^1(K,\mu_n)\to\prod_{v\notin S}H^1(K_v,\mu_n)\right),\quad
> B_\varnothing=\ker\left(H^1(K,\mu_n)\to\prod_vH^1(K_v,\mu_n)\right).
> $$
> 正确充要条件为 $B_S=B_\varnothing$，而不是 $B_S=0$。
> 证明：局部完美配对把 $F_S=\prod_{v\in S}H^1(K_v,\mathbb Z/n)$ 的对偶识别为 $\prod_{v\in S}H^1(K_v,\mu_n)$。把一个右向量在 $S$ 外补零；它湮灭全部全局特征，按 Exercise4(iii) 当且仅当它是某个全局 Kummer 类的局部化。这些向量恰为 $\operatorname{loc}_S(B_S)$，其核是 $B_\varnothing$。因此全局限制映射的像的湮灭子为 $B_S/B_\varnothing$；$F_S$ 有限，故限制映射满射当且仅当该商为零。
> **原等价的明确反例。** 取 $K=\mathbb Q(\sqrt7)$，$n=8$，$S=\varnothing$。左映射到空积必满；但 $a=16$ 非全局八次幂，因为 $K$ 为实域，实八次根只有 $\pm\sqrt2$，而 $\sqrt2\notin\mathbb Q(\sqrt7)$。它却在每个局部域为八次幂：
> - 对奇素数 $p$，令 $d=p-1$。若 $v_2(d)\le2$，$\gcd(8,d)\mid4$，所以 $16=2^4$ 在 $\mathbb F_p^\times$ 为八次幂；若 $v_2(d)\ge3$，则 $p\equiv1\bmod8$，二次互反补充律给 $2=u^2$，从而 $16=u^8$。两种情形都以 Hensel 引理提升到 $\mathbb Q_p$，再嵌入每个 $K_v$。
> - 因 $-7\equiv1\bmod8$ 是 $\mathbb Q_2$ 的平方，$K_v=\mathbb Q_2(\sqrt7)\cong\mathbb Q_2(i)$；$(1+i)^8=16$。
> - 实位置有正实八次根。
> 所以 $B_\varnothing\ne0$，原注入性断言错误。
> **原题充分条件的有效解释。** 第一条件直接由 VI.§1 Exercise2(i) 给 $B_S=0$。第二条件中，“nonsplit”须沿本书解释为只有一个上方素点，即其在 $E_2=K(\mu_{2^\nu})$ 中分解群等于全体 $G(E_2/K)$。若存在这样的 $v\mid2$ 且 $v\notin S$，VI.§1 Exercise2 的仿射上循环证明已消去所有奇素数部分；剩余 $2$-部分上循环因子化到 $G(E_2/K)$。局部 $n$ 次幂给一个被该局部分解群固定的 $X^n-a$ 的根，因此仿射 cocycle 在该分解群上为余边界；分解群既是整个群，它便在全群为余边界，故 $B_S=0$。这给两种条件下的满射性。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书 printed pp.404–405/PDF pp.423–424。解答为独立推导。不将 nonsplit 译为“不完全分裂”；那会把分解群为全体的必要用法改成仅非平凡。一般处处局部幂核可以非零，上例已直接验证。
