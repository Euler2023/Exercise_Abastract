---
title: 'Exercise Gal206: Cyclic Extensions with Prescribed Local Completions'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 7, printed p. 405, PDF p. 424
source_refs:
- S4/ch-VI/sec-6/ex-7
created: '2026-10-23'
---

# Exercise Gal206: Cyclic Extensions with Prescribed Local Completions

## Problem Statement

> [!question] Neukirch VI.6.7
> (**Theorem of Grunwald**). If the last condition of exercise 6 is satisfied for the triple $(K,n,S)$, then, given cyclic extensions $L_{\mathfrak p}|K_{\mathfrak p}$ for $\mathfrak p\in S$, there always exists a cyclic extension $L|K$ which has $L_{\mathfrak p}|K_{\mathfrak p}$ as a completion for $\mathfrak p\in S$, and which satisfies the identity of degrees
> $$
> [L:K]=\operatorname{lcm}\{[L_{\mathfrak p}:K_{\mathfrak p}]\}
> $$
> (see also [10], chap. X, §2).
> **Printed note (separate quoted source input):** Let $G$ be a finite group of order prime to $\#\mu(K)$, let $S$ be a finite set of places, and let $L_{\mathfrak p}|K_{\mathfrak p}$, $\mathfrak p\in S$, be given Galois extensions whose Galois groups $G_{\mathfrak p}$ can be embedded into $G$. Then there exists a Galois extension $L|K$ which on the one hand has Galois group isomorphic to $G$, and which on the other hand has the given extensions $L_{\mathfrak p}|K_{\mathfrak p}$ as completions (see [109]).

## Hints

> [!hint]- 提示
> Take $n$ to be the displayed least common multiple. Embed each local cyclic character into $\mathbb Z/n$, extend it globally using Exercise6, and check the global character has order exactly $n$.

> [!hint]- Stronger hint
> Embed each local cyclic character of degree d_v into Z/n with n=lcm(d_v); a global lift must have order exactly n.

## Solution

> [!success]- 独立推导
> **假设补足。** 这里 $n$ 必须取为 $d_v=[L_v:K_v]$ 的最小公倍数，并对这个 $n$ 检验 Exercise6 的充分条件；不能对一个无关的 $n$ 检验条件后任意指定局部次数。$S$ 为空时取 $n=1,L=K$。
> 对非空 $S$，局部循环扩张给连续满特征 $\chi_v:G_{K_v}\to\mathbb Z/d_v$。以 $1\mapsto n/d_v$ 将它嵌入 $\mathbb Z/n$，其核仍恰好固定 $L_v$。Exercise6 已证明，在所列有效充分条件下，全局限制映射
> $$
> H^1(K,\mathbb Z/n)\to\prod_{v\in S}H^1(K_v,\mathbb Z/n)
> $$
> 满射。因此这些局部特征同为某个全局连续特征 $\chi:G_K\to\mathbb Z/n$ 的限制。
> 令 $L$ 为 $\ker\chi$ 的固定域。它是有限循环扩张。$\chi$ 的像包含一个阶为 $d_v$ 的子群，对所有 $v$ 均如此，故其阶被所有 $d_v$ 整除；同时其阶整除 $n=\operatorname{lcm}d_v$，所以像的阶就是 $n$，$[L:K]=n$。
> 在每个 $v$，限制特征的核为 $G_{L_v}$，所以选定完备化恰为给定的 $L_v$，不是仅包含它。这也验证了次数等式。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书 printed pp.405/PDF pp.424。解答为独立推导。这是带明确充分条件的 Grunwald 结论；无条件的精确次数版本受 Wang 特例限制。原文的 $n$ 与局部次数关系已在解答显式补足。

- **Scope of printed note:** The following finite-group realization note is retained as separately cited source context, not as an additional numbered exercise or as a theorem independently proved by this cyclic Grunwald solution.
