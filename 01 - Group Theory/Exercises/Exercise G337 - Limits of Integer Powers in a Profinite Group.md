---
title: 'Exercise G337: Limits of Integer Powers in a Profinite Group'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 2, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-2
created: '2026-10-23'
---

# Exercise G337: Limits of Integer Powers in a Profinite Group

## Problem Statement

> [!question] Neukirch IV.2.2
> If $\sigma\in G$ and $a=\lim_{i\to\infty}a_i\in\widehat{\mathbb Z}$ with $a_i\in\mathbb Z$, then $\sigma^a=\lim_{i\to\infty}\sigma^{a_i}$ in $G$.

## Hints

> [!hint]- Hint 1
> 在每个有限商中，$a_i$ 模该群指数的类最终等于 $a$ 的类。

> [!hint]- Hint 2
> profinite 群的收敛等价于每个有限商中的最终一致。

## Solution

> [!success]- Independent derivation
> 固定开正规子群 $N$，令 $m=\exp(G/N)$。$a_i\to a$ 意味着在有限离散商 $\mathbb Z/m\mathbb Z$ 中最终有 $a_i\equiv a\pmod m$。因此最终
> $$
> \sigma^{a_i}N=(\sigma N)^{a_i}=(\sigma N)^{a\bmod m}=\sigma^aN.
> $$
> $\sigma^aN$ 随 $N$ 变化构成 $\sigma^a$ 的邻域基，故任意邻域最终包含全部 $\sigma^{a_i}$，即 $\sigma^{a_i}\to\sigma^a$。
>
> 同样论证适用于任意收敛网而不只序列。若只知道指数在某个 $\mathbb Z_p$ 中收敛，则对一般 profinite $G$ 不够；例如 $G$ 有阶与 $p$ 互素的循环商时，该商中的指数余数未被控制。

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Finite Quotients]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 2, printed p. 274, PDF p. 293]. 独立逐有限商收敛证明，与前题的连续延拓构造一致。
