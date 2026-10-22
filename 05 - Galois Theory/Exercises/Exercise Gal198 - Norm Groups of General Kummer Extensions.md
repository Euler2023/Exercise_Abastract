---
title: 'Exercise Gal198: Norm Groups of General Kummer Extensions'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 1, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-1
created: '2026-10-23'
---

# Exercise Gal198: Norm Groups of General Kummer Extensions

## Problem Statement

> [!question] Neukirch VI.4.1
> Determine the norm group $N_{L|K}C_L$ for an arbitrary Kummer extension in a way analogous to the case treated in (4.2) where $G(L|K)\simeq(\mathbb Z/p^\nu\mathbb Z)^r$.

## Hints

> [!hint]- 提示
> Choose a common exponent $m$ and Kummer generators $d_j$. Test the global Artin image against every Kummer character.

> [!hint]- Stronger hint
> An idele class is a norm exactly when every Kummer generator is fixed by its global Artin automorphism, equivalently when each product of local Hilbert symbols is 1.

## Solution

> [!success]- 独立推导
> 设 $\mu_m\subseteq K$，$D$ 为 $K^\times/K^{\times m}$ 的有限子群，$L=K(\sqrt[m]{D})$；这包含任意有限 Kummer 扩张，且不要求 $D$ 的各循环因子阶相等。给 $D$ 选有限生成元 $d_1,\ldots,d_r$。则范数群的显式局部条件为
> $$
> N_{L/K}C_L=
> \left\{[\alpha]\in C_K:
> \prod_v(\alpha_v,d_j)_{v,m}=1\quad(1\le j\le r)\right\}.
> $$
> 这里 Hilbert 符号约定 $(a,b)_{v,m}=\operatorname{rec}_v(a)(\sqrt[m]b)/\sqrt[m]b$。几乎所有有限位置上扩张未分歧且 $\alpha_v,d_j$ 为单位，所以乘积只有有限个非单位因子。
> **引用输入：全局互反律及其与局部互反律的兼容性**（Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, VI.§5），它把全局 Artin 元写成各局部 Artin 元的乘积，核正是 $N C_L$。Kummer 完美配对给
> $$
> \frac{\operatorname{rec}_{L/K}([\alpha])(\sqrt[m]d_j)}{\sqrt[m]d_j}
> =\prod_v(\alpha_v,d_j)_{v,m}.
> $$
> 一个自同构固定全部 Kummer 生成元，当且仅当它为单位元；因此这些有限个条件恰好刻画范数群。对主 idèle 条件自动成立，故公式与代表元无关。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 1, printed p.385, PDF p.404]。解答为独立推导。此解采用同一本书后文互反律给出的统一 Hilbert 符号公式；未把前一特殊情形的矩形不变因子假设暗中用于一般 Kummer 扩张。
