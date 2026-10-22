---
title: 'Exercise AG41: Push-Pull and Degrees of Replete Divisors'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 6, printed p. 194, PDF p. 213
source_refs:
- S4/ch-III/sec-1/ex-6
created: '2026-10-23'
---

# Exercise AG41: Push-Pull and Degrees of Replete Divisors

## Problem Statement

> [!question] Neukirch III.1.6
> Show that $\tau_*\circ\tau^*=[L:K]$ and that
> $$
> \deg(\tau_*D)=\deg(D),\qquad \deg(\tau^*D)=[L:K]\deg(D).
> $$

## Hints

> [!hint]- Hint 1
> 先在单个素除子 $\mathfrak p$ 上计算 push-pull；所需系数是 $\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}$。

> [!hint]- Hint 2
> 次数定义为 $\sum\nu_{\mathfrak p}\log\mathfrak N(\mathfrak p)$，并且 $\mathfrak N(\mathfrak P)=\mathfrak N(\mathfrak p)^{f_{\mathfrak P\mid\mathfrak p}}$。

## Solution

> [!success]- Independent derivation
> 沿用前两题的 $\tau:K\hookrightarrow L$，把 $K$ 与 $\tau K$ 识别，记 $d=[L:K]$。本节 (1.2)(i)–(ii) 给出（包括无穷处）
> $$
> \sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}=d,\qquad
> \log\mathfrak N(\mathfrak P)=f_{\mathfrak P\mid\mathfrak p}\log\mathfrak N(\mathfrak p).
> $$
> 这些是已证明的源输入 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.2), printed p. 184, PDF p. 203]。
>
> 对单个底域素除子，
> $$
> \tau_*\tau^*(\mathfrak p)=\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}\mathfrak p=d\mathfrak p.
> $$
> 按加法与实系数线性延拓，$\tau_*\tau^*D=dD$；故在除子群上已成立，在除子类群上也成立。
>
> 对 $D_L=\sum_{\mathfrak P}\nu_{\mathfrak P}\mathfrak P$，
> $$
> \begin{aligned}
> \deg(\tau_*D_L)
> &=\sum_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}\nu_{\mathfrak P}f_{\mathfrak P\mid\mathfrak p}\log\mathfrak N(\mathfrak p)\\
> &=\sum_{\mathfrak P}\nu_{\mathfrak P}\log\mathfrak N(\mathfrak P)=\deg(D_L).
> \end{aligned}
> $$
> 对 $D_K=\sum_{\mathfrak p}\nu_{\mathfrak p}\mathfrak p$，
> $$
> \begin{aligned}
> \deg(\tau^*D_K)
> &=\sum_{\mathfrak p}\nu_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}\log\mathfrak N(\mathfrak P)\\
> &=\sum_{\mathfrak p}\nu_{\mathfrak p}\log\mathfrak N(\mathfrak p)\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}\\
> &=d\deg(D_K).
> \end{aligned}
> $$
> 例如 $L=\mathbb Q(i)$、$K=\mathbb Q$，实无穷处 $\infty$ 的 pullback 是唯一复无穷处 $\mathfrak P$，其 $e=1,f=2$。$\deg\mathfrak P=2$ 而 $\deg\infty=1$，pushforward 为 $2\infty$，逐式验证三条恒等式。

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 6, printed p. 194, PDF p. 213]. 独立求和证明；原页第一条次数等式里的 $D$ 属于 $L$，第二条里的 $D$ 属于 $K$，故解答分记 $D_L,D_K$，避免把两个不同定义域混用。
- **Boundary:** 这里证明的是 $\tau_*\tau^*=d$；反向复合一般不是乘以 $d$。Galois 情形反向复合对应对全部自同构共轭的求和。
