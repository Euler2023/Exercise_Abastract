---
title: 'Exercise AG40: Pullback of Replete Divisor Classes'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 5, printed p. 194, PDF p. 213
source_refs:
- S4/ch-III/sec-1/ex-5
created: '2026-10-23'
---

# Exercise AG40: Pullback of Replete Divisor Classes

## Problem Statement

> [!question] Neukirch III.1.5
> Given any replete divisor $D=\sum_{\mathfrak p}\nu_{\mathfrak p}\mathfrak p$ of $K$, define a replete divisor of $L$ by the rule
> $$
> \tau^*(D)=\sum_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}\nu_{\mathfrak p}e_{\mathfrak P\mid\mathfrak p}\mathfrak P,
> $$
> where $e_{\mathfrak P\mid\mathfrak p}$ denotes the ramification index of $\mathfrak P$ over $K$. Show that $\tau^*$ induces a homomorphism
> $$
> \tau^*:CH^1(\overline{\mathcal O}_K)\longrightarrow CH^1(\overline{\mathcal O}_L).
> $$

## Hints

> [!hint]- Hint 1
> 本题沿用前一题的域同态 $\tau:K\to L$。对 $a\in K^\times$，比较 $\tau^*\operatorname{div}_K(a)$ 与 $\operatorname{div}_L(\tau a)$ 的系数。

> [!hint]- Hint 2
> 有限处 $v_{\mathfrak P}(\tau a)=e_{\mathfrak P\mid\mathfrak p}v_{\mathfrak p}(a)$；无穷处本书的 $e$ 等于 $1$，并且同一嵌入值的通常模不变。

## Solution

> [!success]- Independent derivation
> 沿用 Exercise 4 的 $\tau:K\hookrightarrow L$。对每个有限素处，分歧指数是正整数，所以 pullback 的有限系数仍为整数。一个底域素处上方只有有限多个素处，原有限支撑因而仍为有限支撑；无穷处实系数也允许。因此题设公式首先定义了 replete 除子群间的加法同态。
>
> 设 $a\in K^\times$。对有限处 $\mathfrak P\mid\mathfrak p$，归一离散赋值的延拓公式给出
> $$
> v_{\mathfrak P}(\tau a)=e_{\mathfrak P\mid\mathfrak p}v_{\mathfrak p}(a).
> $$
> 对无穷处，$v_{\mathfrak p}(a)=-\log|\sigma(a)|$；若 $\widetilde\sigma:L\to\mathbb C$ 延拓 $\sigma\circ\tau^{-1}$，则 $|\widetilde\sigma(\tau a)|=|\sigma(a)|$。本书约定无穷处 $e_{\mathfrak P\mid\mathfrak p}=1$，故上式也在无穷处成立。这是本节 (1.2)(iii) 的具体应用 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, printed p. 184, PDF p. 203]。
>
> 逐处代入得到
> $$
> \begin{aligned}
> \tau^*(\operatorname{div}_K a)
> &=\sum_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}v_{\mathfrak p}(a)\mathfrak P\\
> &=\sum_{\mathfrak P}v_{\mathfrak P}(\tau a)\mathfrak P
> =\operatorname{div}_L(\tau a).
> \end{aligned}
> $$
> 主除子因此被映为主除子，$[D]\mapsto[\tau^*D]$ 在商群上良定义并保持加法。

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 5, printed p. 194, PDF p. 213]. 独立推导；题面本身承接 Exercise 4 的 $\tau$，本笔记已将该假设在解答开头补明。
- **Convention:** 在本书无穷处定义下，$\mathbb C/\mathbb R$ 对 pullback 的系数为 $e=1$；次数 $2$ 出现在 pushforward 的 $f$ 中。
