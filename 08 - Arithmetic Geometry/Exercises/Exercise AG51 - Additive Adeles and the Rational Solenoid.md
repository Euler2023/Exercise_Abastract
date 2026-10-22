---
title: 'Exercise AG51: Additive Adeles and the Rational Solenoid'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 1, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-1
created: '2026-10-23'
---

# Exercise AG51: Additive Adeles and the Rational Solenoid

## Problem Statement

> [!question] Neukirch VI.1.1
> (i) $\mathbb A_{\mathbb Q}=(\widehat{\mathbb Z}\otimes_{\mathbb Z}\mathbb Q)\times\mathbb R$.
> (ii) The quotient group $\mathbb A_{\mathbb Q}/\mathbb Z$ is compact and connected.
> (iii) $\mathbb A_{\mathbb Q}/\mathbb Z$ is arbitrarily and uniquely divisible, i.e., the equation $nx=y$ has a unique solution, for every $n\in\mathbb N$ and $y\in\mathbb A_{\mathbb Q}/\mathbb Z$.

## Hints

> [!hint]- Hint 1 — first step
> Separate the finite adèle coordinates from the real coordinate and clear the finitely many finite denominators.

> [!hint]- Hint 2 — proof route
> (i) Clear the finitely many denominators of a finite adèle. For (ii)–(iii), first test the printed denominator on the class of $1/n$.

## Solution

> [!success]- 独立推导
> **Source issue.** (ii)–(iii) 的分母印为 $\mathbb Z$，按此原文不成立：对角元 $1/n+\mathbb Z$ 是非零 $n$ 阶扭元；且投影到 $\mathbb Q_p/\mathbb Z_p$ 给出无限离散商，所以商既不紧也不连通。以下证明预期修正版 $\mathbb A_{\mathbb Q}/\mathbb Q$。
> (i) 有限 adèle $a=(a_p)$ 只有有限多个非整分量，故存在正整数 $d$ 使 $da\in\prod_p\mathbb Z_p=\widehat{\mathbb Z}$。于是 $\mathbb A_{\mathbb Q,f}=\bigcup_{d\ge1}d^{-1}\widehat{\mathbb Z}=\widehat{\mathbb Z}\otimes\mathbb Q$。
> 中国剩余定理给每个有限 adèle $a_f$ 一个 $q\in\mathbb Q$，使 $a_f-q\in\widehat{\mathbb Z}$；两个这种 $q$ 相差整数。因此
> $$
> \mathbb A_{\mathbb Q}/\mathbb Q\cong(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z,
> $$
> 其中 $\mathbb Z$ 对角嵌入。每个类有 $\widehat{\mathbb Z}\times[0,1]$ 内的代表，故商紧。$\{0\}\times\mathbb R$ 的像连通且稠密：对任意 $[x,t]$，取整数 $n_j\to-x$ 于 $\widehat{\mathbb Z}$，则 $[0,t+n_j]=[-n_j,t]\to[x,t]$。故整个商连通。
> 对 $y=[a]\in\mathbb A_{\mathbb Q}/\mathbb Q$，$x=[a/n]$ 满足 $nx=y$。若 $nx=0$，则代表元 $b$ 满足 $nb=q\in\mathbb Q$，故 $b=q/n$ 本来就是对角有理数，$x=0$。所以乘 $n$ 是双射。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

题面已与原书 200 dpi 页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 1, printed p. 367, PDF p. 386]。解答为本库独立推导，引用的输入不等于原书已解本题。保留原印 $\mathbb Z$，解答明确改为 $\mathbb Q$；不要把原题无条件标为真。
