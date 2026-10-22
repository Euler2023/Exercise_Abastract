---
title: 'Exercise AG39: Pushforward of Replete Divisor Classes'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 4, printed pp. 193–194, PDF pp. 212–213
source_refs:
- S4/ch-III/sec-1/ex-4
created: '2026-10-23'
---

# Exercise AG39: Pushforward of Replete Divisor Classes

## Problem Statement

> [!question] Neukirch III.1.4
> Let $K$ and $L$ be number fields, and let $\tau:K\longrightarrow L$ be a homomorphism. Given any replete divisor $D=\sum_{\mathfrak P}\nu_{\mathfrak P}\mathfrak P$ of $L$, define a replete divisor of $K$ by the rule
> $$
> \tau_*(D)=\sum_{\mathfrak p}\left(\sum_{\mathfrak P\mid\mathfrak p}\nu_{\mathfrak P}f_{\mathfrak P\mid\mathfrak p}\right)\mathfrak p,
> $$
> where $f_{\mathfrak P\mid\mathfrak p}$ is the inertia degree of $\mathfrak P$ over $\tau K$ and $\mathfrak P\mid\mathfrak p$ signifies $\tau\mathfrak p=\mathfrak P|_{\tau K}$. Show that $\tau_*$ induces a homomorphism
> $$
> \tau_*:CH^1(\overline{\mathcal O}_L)\longrightarrow CH^1(\overline{\mathcal O}_K).
> $$

## Hints

> [!hint]- Hint 1
> 需证的是主除子被映为主除子；形式求和本身已给出加法同态。

> [!hint]- Hint 2
> 有限处利用局部范数的赋值公式，无穷处利用 $v_\infty=-\log|\cdot|$；同一恒等式是 $v_{\mathfrak p}(N_{L/\tau K}a)=\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}v_{\mathfrak P}(a)$。

## Solution

> [!success]- Independent derivation
> 域同态 $\tau$ 单射。将 $K$ 经 $\tau$ 识别为 $L$ 的子域，证明后再用 $\tau^{-1}$ 还原；以下写成 $K\subset L$。有限处 $f_{\mathfrak P\mid\mathfrak p}$ 为正整数，故整数系数仍被映到整数系数；无穷处允许实系数。有限支撑在映射后仍有限，因而题设给出良定义的加法同态 $\operatorname{Div}(\overline{\mathcal O}_L)\to\operatorname{Div}(\overline{\mathcal O}_K)$。
>
> 对 $a\in L^\times$，要证明
> $$
> \tau_*(\operatorname{div}_L(a))=\operatorname{div}_K(N_{L/K}a).
> $$
> 有限处：局部化后的范数分解与赋值公式给出
> $$
> N_{L/K}a=\prod_{\mathfrak P\mid\mathfrak p}N_{L_{\mathfrak P}/K_{\mathfrak p}}a,\qquad
> v_{\mathfrak p}(N_{L/K}a)=\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}v_{\mathfrak P}(a).
> $$
> 无穷处：若 $K_{\mathfrak p}=\mathbb R$，实扩展分量的范数是该实嵌入值，复扩展分量的范数是复模平方；取 $-\log$ 后分别产生系数 $1$、$2$。若 $K_{\mathfrak p}=\mathbb C$，每个分量为 $\mathbb C/\mathbb C$，系数为 $1$。因此仍为同一求和公式。它正是本节 (1.2)(iv) 及范数分解的应用 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, printed pp. 184–185, PDF pp. 203–204]。
>
> 逐处比较系数便得所需主除子等式。于是主除子子群被映入主除子子群，商映射
> $$
> [D]\longmapsto[\tau_*D]
> $$
> 不依赖代表元。恢复原同态时，右边的范数元素应写成 $\tau^{-1}(N_{L/\tau K}a)\in K^\times$。

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 4, printed pp. 193–194, PDF pp. 212–213]. 独立逐处推导。无穷处的 inertia degree 为局部域次数；本书约定 $\mathbb C/\mathbb R$ 的 $e=1,f=2$，不能套入另一套将其称作 ramified 的记号。
- **Source anchors:** 本节 (1.6)(v) 的 replete ideal 范数兼容式及其证明在 printed pp. 187–188 / PDF pp. 206–207，与上述除子计算一致。
