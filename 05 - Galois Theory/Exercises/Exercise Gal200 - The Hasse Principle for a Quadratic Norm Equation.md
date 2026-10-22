---
title: 'Exercise Gal200: The Hasse Principle for a Quadratic Norm Equation'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 3, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-3
created: '2026-10-23'
---

# Exercise Gal200: The Hasse Principle for a Quadratic Norm Equation

## Problem Statement

> [!question] Neukirch VI.4.3
> An equation $x^2-ay^2=b$, $a,b\in K^*$, has a solution in $K$ if and only if it is solvable everywhere locally, i.e., in each completion $K_{\mathfrak p}$.
> **Printed hint:** $x^2-ay^2=N_{K(\sqrt a)|K}(x-\sqrt a\,y)$ if $a\notin K^{*2}$.

## Hints

> [!hint]- 提示
> Separate the split case $a\in K^{\times2}$ from a quadratic cyclic extension.

> [!hint]- Stronger hint
> When a is not a square, the equation is the norm equation from K(sqrt(a)); apply the cyclic Hasse norm theorem.

## Solution

> [!success]- 独立推导
> 这里 $K$ 是本章的数域。全局解嵌入各 $K_v$ 立即给局部解。反向，若 $a=c^2\in K^{\times2}$，取
> $$
> x=\frac{b+1}{2},\qquad y=\frac{1-b}{2c};
> $$
> 则 $(x-cy)(x+cy)=b$，故总有解。
> 若 $a$ 非平方，令 $L=K(\sqrt a)$，这是循环二次扩张。局部解表明 $b$ 在每个 $K_v$ 中都是局部范数；若 $a$ 在某处成为平方，局部代数为 $K_v\times K_v$，其范数为乘法，仍无障碍。
> **引用原书已证 Hasse 范数定理 VI.(4.5), printed p.384/PDF403**：循环扩张中，处处局部范数的全局元素是全局范数。所以存在 $z=x-\sqrt a\,y\in L^\times$，$N(z)=b$，展开即所求方程。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 3, printed p.385, PDF p.404]。解答为独立推导。
