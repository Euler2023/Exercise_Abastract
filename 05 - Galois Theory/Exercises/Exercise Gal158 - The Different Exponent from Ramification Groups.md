---
title: 'Exercise Gal158: The Different Exponent from Ramification Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 2, printed p. 208, PDF p. 227
source_refs:
- S4/ch-III/sec-2/ex-2
created: '2026-10-23'
---

# Exercise Gal158: The Different Exponent from Ramification Groups

## Problem Statement

> [!question] Neukirch III.2.2
> Let $L|K$ be a Galois extension of henselian fields with separable residue field extension $\lambda|\kappa$, and let $G_i$, $i\ge0$, be the $i$-th ramification group. Then, if $\mathfrak D_{L|K}=\mathfrak P^s$, one has
> $$
> s=\sum_{i=0}^{\infty}(\#G_i-1).
> $$
> **Printed hint:** If $\mathcal O=\mathfrak o[x]$ (see chap. II, (10.4)), then $s=v_L(\delta_{L|K}(x))=\sum_{\sigma\in G,\ \sigma\ne1}v_L(x-\sigma x)$.

## Hints

> [!hint]- Hint 1
> 以整环生成元 $x$ 写出最小多项式 $f(X)=\prod_{\sigma\in G}(X-\sigma x)$，再计算 $f'(x)$ 的赋值。

> [!hint]- Hint 2
> 对 $\sigma\ne1$，正整数 $v_L(x-\sigma x)$ 恰等于满足 $\sigma\in G_i$ 的非负整数 $i$ 的个数。

## Solution

> [!success]- Independent derivation
> 沿用本章离散赋值背景：$L/K$ 为有限 Galois 扩张，赋值为归一离散赋值，整环为 $\mathcal O/\mathfrak o$，剩余扩张可分。先用已证明的 II (10.4) 取 $\mathcal O=\mathfrak o[x]$；该页还给出
> $$
> G_i=\{\sigma\in G:v_L(\sigma x-x)\ge i+1\}.
> $$
> 出处为 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, printed p. 178, PDF p. 197]。由于 $x$ 生成 $L/K$，非恒等 $\sigma$ 不固定 $x$，故 $i_G(\sigma)=v_L(x-\sigma x)$ 为有限非负整数。
>
> 由不同理想的单生成公式 (2.4) [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, printed pp. 197–198, PDF pp. 216–217]，
> $$
> \mathfrak D_{L|K}=(f'(x)),\qquad f'(x)=\prod_{\sigma\ne1}(x-\sigma x),
> $$
> 所以
> $$
> s=\sum_{\sigma\ne1}i_G(\sigma).
> $$
> 对任一非负整数 $m$，有 $m=\sum_{i\ge0}\mathbf1_{m\ge i+1}$。应用于每个 $i_G(\sigma)$，交换有限非零求和，得到
> $$
> \begin{aligned}
> s&=\sum_{\sigma\ne1}\sum_{i\ge0}\mathbf1_{i_G(\sigma)\ge i+1}\\
> &=\sum_{i\ge0}\#\{\sigma\in G_i:\sigma\ne1\}
> =\sum_{i\ge0}(\#G_i-1).
> \end{aligned}
> $$
> 有限性也已证明：取所有 $\sigma\ne1$ 的 $i_G(\sigma)$ 的最大值后，更高的 $G_i$ 只含恒等元。若 $G=1$，则空和为零，结论仍成立。
>
> 例如 tame Galois 扩张中 $G_0$ 的阶为 $e$、$G_i=1$ 对 $i\ge1$，公式退化为 $s=e-1$，与已证明的不同理想界 (2.6) 一致。

## Related Concepts

- [[02 - Ring Theory/Concepts/Different and Discriminant Ideals|Different and Discriminant Ideals]]

- [[05 - Galois Theory/Concepts/Higher Ramification Groups and Herbrand Functions|Higher Ramification Groups and Herbrand Functions]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Different Ideals within Ideal Theory]]
- [[05 - Galois Theory/Concepts/Normal Subgroups and Extensions|Galois Groups and Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 2, printed p. 208, PDF p. 227]. 独立计数推导，保留了印刷提示。原图为 $i\ge0$，OCR 文本漏掉等号。
- **Hypotheses:** 有限扩张及离散赋值沿用 II §10 与 III §2 的背景；若离开该背景，整数指数 $s$ 与整数编号的上述公式不能直接沿用。
- **Routing:** 核心步骤是对 ramification subgroup filtration 的非恒等元素计数，故采用 galois-theory；不同理想与赋值作为跨主题概念链接。
