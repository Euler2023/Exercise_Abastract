---
title: 'Exercise Gal164: Kummer Cohomology without Roots of Unity in the Base'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 8, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-8
created: '2026-10-23'
---

# Exercise Gal164: Kummer Cohomology without Roots of Unity in the Base

## Problem Statement

> [!question] Neukirch IV.3.8
> If $n$ is not divisible by the characteristic of the field $K$ and if $\mu_n$ denotes the group of $n$-th roots of unity in the separable closure $\overline K$, then
> $$
> H^1(G_K,\mu_n)\simeq K^*/K^{*n}.
> $$

## Hints

> [!hint]- Hint 1
> $X^n-a$ 在特征不整除 $n$ 时为可分多项式，因此幂映射在可分闭包乘法群上满射。

> [!hint]- Hint 2
> 对 Kummer 短正合列应用前述 $H^1$ 正合列，再使用无限 Hilbert 90。注意不要求 $\mu_n\subseteq K$。

## Solution

> [!success]- Independent derivation
> 令 $K^s=\overline K$。因为 $n\ne0$ 在 $K$ 中，对任意 $a\in(K^s)^\times$，多项式 $X^n-a$ 的每个根均非零，导数 $nX^{n-1}$ 不在这些根处为零；$K^s$ 可分闭使它存在 $n$ 次根。因此有连续离散 $G_K$-模短正合列
> $$
> 1\longrightarrow\mu_n\longrightarrow(K^s)^\times\xrightarrow{x\mapsto x^n}(K^s)^\times\longrightarrow1.
> $$
> 前题的连续无限 Hilbert 90 及 Exercise 6 已证明的正合列给出
> $$
> K^\times\xrightarrow{n}K^\times\xrightarrow\delta H^1(G_K,\mu_n)\longrightarrow H^1(G_K,(K^s)^\times)=1.
> $$
> 于是 $\delta$ 满射且核为 $K^{\times n}$，得到同构。
>
> 同构可直接写为：对 $a\in K^\times$ 选 $\alpha^n=a$，令 $c_a(\sigma)=\sigma(\alpha)/\alpha\in\mu_n$（如用源书右作用则写 $\alpha^{\sigma-1}$）。换根使 cocycle 改变一个 $\mu_n$-coboundary；把 $a$ 乘以 $b^n$、$b\in K^\times$ 不改变类。核为幂类的事实也直接可见：若 $c_a=\zeta^{\sigma-1}$，则 $\alpha/\zeta\in K$，故 $a=(\alpha/\zeta)^n$。
>
> 不假设 $\mu_n$ 在底域，所以右边是带有 Galois 作用的 $\mu_n$ 的 $H^1$，一般不能改写为普通字符群 $\operatorname{Hom}(G_K,\mu_n)$；只有作用平凡时才有该额外解释。

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert 90]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 8, printed p. 284, PDF p. 303]. 独立短正合列应用与显式 cocycle；连续无限 Hilbert 90 的有限层证明已在前题给出。
- **Boundary:** 若特征整除 $n$，幂映射在可分闭包上未必满射，经典 étale Kummer 序列不能直接应用。
