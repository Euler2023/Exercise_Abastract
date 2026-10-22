---
title: 'Exercise LA574: The Hasse Principle for Ternary Diagonal Forms'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 5, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-5
created: '2026-10-23'
---

# Exercise LA574: The Hasse Principle for Ternary Diagonal Forms

## Problem Statement

> [!question] Neukirch VI.4.5
> A quadratic form $ax^2+by^2+cz^2$, $a,b,c\in K^*$, represents zero if and only if it represents zero everywhere locally.
> **Printed remark:** In complete generality, one has the following “local-to-global principle”:
> **Theorem of Minkowski-Hasse:** A quadratic form over a number field $K$ represents zero if and only if it represents zero over every completion $K_{\mathfrak p}$.
> The proof follows from the result stated in Exercise 5 by pure algebra (see [113]).

## Hints

> [!hint]- 提示
> Use the preceding exercise locally to make $z\ne0$, divide by $z^2$, and reduce to the preceding norm equation.

> [!hint]- Stronger hint
> Choose local zeros with z nonzero and divide by a z^2, reducing to the quadratic norm equation with coefficients -b/a and -c/a.

## Solution

> [!success]- 独立推导
> 设 $K$ 为数域。全局非平凡零点显然给每个局部非平凡零点。反向，假设每个 $K_v$ 中各有非平凡零点。$K_v$ 特征 $0$、元素多于五，且 $a,b,c$ 非零；上一题修正版给一个 $z\ne0$ 的局部零点。令 $u=x/z$，$w=y/z$，得
> $$
> u^2-\left(-\frac ba\right)w^2=-\frac ca
> $$
> 处处局部可解。VI.§4 Exercise3 的二次范数 Hasse 原理给 $u,w\in K$ 的全局解。于是 $(u,w,1)$ 是原三元形式的非平凡全局零点。
> 这里只证明题目的三元情形；原书附带的任意维数 Minkowski–Hasse 定理仍需其指明的额外代数归纳，不把该附带陈述算成本题已证明。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 5, printed p.385, PDF p.404]。解答为独立推导。
