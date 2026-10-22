---
title: 'Exercise G340: Sylow Subgroups of Profinite Integers and Local Units'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 5, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-5
created: '2026-10-23'
---

# Exercise G340: Sylow Subgroups of Profinite Integers and Local Units

## Problem Statement

> [!question] Neukirch IV.2.5
> What is the $p$-Sylow subgroup of $\widehat{\mathbb Z}$ and of $\mathbb Z_p^*$?

## Hints

> [!hint]- Hint 1
> 利用 $\widehat{\mathbb Z}\simeq\prod_\ell\mathbb Z_\ell$。加法群的 $p$ 部分只有一个因子。

> [!hint]- Hint 2
> 局部单位的模 $p$ 约化核为 $1+p\mathbb Z_p$；商 $\mathbb F_p^\times$ 的阶与 $p$ 互素。$p=2$ 时这个商平凡。

## Solution

> [!success]- Independent derivation
> **加法群 $\widehat{\mathbb Z}$。** CRT 给出 $\widehat{\mathbb Z}\simeq\prod_\ell\mathbb Z_\ell$。其中
> $$
> P=\mathbb Z_p\times\prod_{\ell\ne p}\{0\}
> $$
> 为 pro-$p$ 闭子群，在有限商 $\mathbb Z/n\mathbb Z$ 中的像正是其 $p$-主部分，故是 $p$-Sylow。群交换，使它也是唯一的 Sylow 子群。
>
> **乘法群 $\mathbb Z_p^\times$。** 约化同态 $\mathbb Z_p^\times\twoheadrightarrow\mathbb F_p^\times$ 的核为 $U_1=1+p\mathbb Z_p$，有限商
> $$
> U_1/(1+p^m\mathbb Z_p)
> $$
> 的阶为 $p^{m-1}$，所以 $U_1$ 是 pro-$p$。任意 pro-$p$ 子群的模 $p$ 像既为 $p$ 群，又是阶 $p-1$ 的群的子群，故只能平凡，必须包含于 $U_1$。于是 $U_1$ 就是唯一 $p$-Sylow。
>
> 当 $p$ 为奇数，答案通常写为主单位群 $1+p\mathbb Z_p$；当 $p=2$，所有 $2$-进单位均为奇数，$1+2\mathbb Z_2=\mathbb Z_2^\times$，因此整个单位群都是 Sylow $2$ 子群。不能误写成较小的 $1+4\mathbb Z_2$。

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 5, printed p. 274, PDF p. 293]. 独立有限商计算，明确 $p=2$ 边界。
- **Notation:** 第一项为加法群，第二项为乘法单位群；不能把两项的群运算混用。
