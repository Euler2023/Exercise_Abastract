---
title: 'Exercise R390: Exact Differentials in a Tower of Number Fields'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 4, printed p. 208, PDF p. 227
source_refs:
- S4/ch-III/sec-2/ex-4
created: '2026-10-23'
---

# Exercise R390: Exact Differentials in a Tower of Number Fields

## Problem Statement

> [!question] Neukirch III.2.4
> For a tower $M\supseteq L\supseteq K$ of algebraic number fields there is an exact sequence of $\mathcal O_M$-modules
> $$
> 0\longrightarrow\Omega^1_{L|K}\otimes\mathcal O_M\longrightarrow\Omega^1_{M|K}\longrightarrow\Omega^1_{M|L}\longrightarrow0.
> $$

## Hints

> [!hint]- Hint 1
> 这里 $\Omega^1_{L|K}$ 指整数环 $\mathcal O_L/\mathcal O_K$ 的微分模，而非可分域扩张自身的微分（后者为零）。先由导子泛性质得到右正合列。

> [!hint]- Hint 2
> 一般环塔的微分列左端不保证单射；本题需使用数域不同理想的塔公式。

> [!hint]- Hint 3
> 逐个 DVR 局部化。循环微分模的长度是不同指数；不同塔公式使中间模的长度恰等于左右两个模的长度之和，从而迫使左映射的核为零。

## Solution

> [!success]- Independent derivation
> 令 $A=\mathcal O_K$、$B=\mathcal O_L$、$C=\mathcal O_M$。遵循本章记号，题中的 $\Omega^1_{L|K}$ 是 $\Omega^1_{B|A}$，另外两项亦同；若把它误读成域的 Kähler 微分，三个模都会为零，便遗漏本题的算术内容。
>
> **1. 构造右正合列。** 定义
> $$
> \phi:C\otimes_B\Omega^1_{B|A}\longrightarrow\Omega^1_{C|A},\qquad c\otimes db\longmapsto c\,db.
> $$
> 商模 $Q=\Omega^1_{C|A}/C\,dB$ 上的导子 $C\to Q$ 杀死 $B$，而任意杀死 $B$ 的导子都且仅都经此商因子化。由泛性质，$Q\simeq\Omega^1_{C|B}$。因此
> $$
> C\otimes_B\Omega^1_{B|A}\xrightarrow{\phi}\Omega^1_{C|A}\longrightarrow\Omega^1_{C|B}\longrightarrow0
> $$
> 右正合。
>
> **2. 逐素处计算长度。** 取 $C$ 的非零素理想 $\mathfrak Q$，其下方为 $\mathfrak P\subset B$。记相应不同指数为 $s_{C/A},s_{C/B},s_{B/A}$，以及 $e=e(\mathfrak Q/\mathfrak P)$。前一题所证局部表示 $\Omega\simeq\mathcal O/\mathfrak D$ 给出
> $$
> \ell_{C_{\mathfrak Q}}(\Omega^1_{C|A})_{\mathfrak Q}=s_{C/A},\qquad
> \ell_{C_{\mathfrak Q}}(\Omega^1_{C|B})_{\mathfrak Q}=s_{C/B}.
> $$
> 同样 $\Omega^1_{B|A,\mathfrak P}\simeq B_{\mathfrak P}/(\pi_{\mathfrak P}^{s_{B/A}})$，故
> $$
> \ell_{C_{\mathfrak Q}}(C\otimes_B\Omega^1_{B|A})_{\mathfrak Q}=e\,s_{B/A}.
> $$
> 不同理想塔公式是已独立证明的 III (2.2)(i) [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, printed pp. 195–196, PDF pp. 214–215]：
> $$
> \mathfrak D_{M|K}=\mathfrak D_{M|L}\mathfrak D_{L|K}C.
> $$
> 取 $v_{\mathfrak Q}$ 得 $s_{C/A}=s_{C/B}+e\,s_{B/A}$。
>
> **3. 得到单射。** 第一步的右正合性意味着 $\ell(\operatorname{im}\phi)=s_{C/A}-s_{C/B}=e\,s_{B/A}$，这与 $\phi$ 定义域的长度相同，故 $\ell(\ker\phi)=0$，即其在 $\mathfrak Q$ 处为单射。在零素处所有微分模都因域扩张可分而为零。每个局部化的核为零，因而全局核为零，得到题设短正合列。

## Related Concepts

- [[02 - Ring Theory/Concepts/Different and Discriminant Ideals|Different and Discriminant Ideals]]

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials|Kähler Differentials]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Different Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 4, printed p. 208, PDF p. 227]. 独立的泛性质与局部长度证明；不同塔公式取自正文已证明的 (2.2)，未将一般右正合列错误地直接称为短正合。
- **Boundary:** 左单射依赖数域整数环及其不同理想的塔公式，一般 $A\to B\to C$ 的 Kähler 微分正合列可能在左端存在非零核。
