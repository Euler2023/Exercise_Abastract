---
title: 'Exercise Gal173: The Abstract Hilbert Pairing'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 2, printed p. 305, PDF p. 324
source_refs:
- S4/ch-IV/sec-6/ex-2
created: '2026-10-23'
---

# Exercise Gal173: The Abstract Hilbert Pairing

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 2
> Under the hypotheses of exercise 1, Kummer theory and class field theory yield, via Pontryagin duality $G(L/K)\times\operatorname{Hom}(G(L/K),\mu_n)\to\mu_n$, a nondegenerate bilinear mapping (the abstract “Hilbert symbol”)
> $$
> (\ ,\ ):A_K/A_K^n\times A_K/A_K^n\longrightarrow\mu_n.
> $$

## Hints

> [!hint]- Hint 1 — first step
> Associate to a class $b$ its Kummer character and to a class $a$ its reciprocity automorphism; evaluate that character at that automorphism.

> [!hint]- Hint 2 — proof route
> Put reciprocity in the first slot and the Kummer character in the second. Do not infer skew symmetry from bilinearity alone.

## Solution

> [!success]- 独立推导
> 前题证明范数群等于幂子群，所以互反律给 $\operatorname{rec}:A_K/A_K^n\xrightarrow{\sim}G(L/K)$。Kummer 同构把 $b\in A_K$ 的类送到特征
> $$
> \chi_b(\sigma)=\frac{\sigma\beta}{\beta},\qquad\beta^n=b.
> $$
> $\mu_n$ 被 $G_K$ 固定，故换根 $\beta$ 不改变特征；$b$ 乘一个 $n$ 次幂也不改变它。定义 $(\bar a,\bar b)=\chi_b(\operatorname{rec}(\bar a))$。两条同构和评价配对均为群同态，故两变量分别乘法双线性。
> 若 $\bar a\ne1$，$\operatorname{rec}(\bar a)$ 为非单位元；有限阿贝尔群的 $\mu_n$-特征分离点，存在 $\chi_b$ 使评价非 $1$。若 $\bar b\ne1$，非平凡 $\chi_b$ 在某个群元上非平凡，而互反映射满，故存在 $\bar a$ 检测它。两侧均非退化。
> 本题仅给一般抽象配对；交换、反对称或 Steinberg 关系需要额外结构，不从此构造自动得出。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

题面已与原书200 dpi页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 2, printed p.305, PDF p.324]。解答为独立推导，沿用本章的抽象域、连续离散 $G$-模、限制与范数约定。
