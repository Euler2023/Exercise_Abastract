---
title: 'Exercise G336: Continuous Profinite Exponentiation'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 1, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-1
created: '2026-10-23'
---

# Exercise G336: Continuous Profinite Exponentiation

## Problem Statement

> [!question] Neukirch IV.2.1
> Show that, for a profinite group $G$, the power map $G\times\mathbb Z\to G$, $(\sigma,n)\mapsto\sigma^n$, extends to a continuous map
> $$
> G\times\widehat{\mathbb Z}\longrightarrow G,\qquad(\sigma,a)\longmapsto\sigma^a,
> $$
> and that one has $(\sigma^a)^b=\sigma^{ab}$ and $\sigma^{a+b}=\sigma^a\sigma^b$ if $G$ is abelian.

## Hints

> [!hint]- Hint 1
> 在有限商 $G/N$ 中，幂只依赖指数模 $\exp(G/N)$ 的类；这些幂与商映射相容。

> [!hint]- Hint 2
> 用 $G\simeq\varprojlim_NG/N$ 定义幂，再逐个有限商验证连续性和恒等式。

## Solution

> [!success]- Independent derivation
> 对每个开正规子群 $N$，令 $m_N=\exp(G/N)$。对 $a\in\widehat{\mathbb Z}$，在有限群中定义
> $$
> (\sigma^a)_N=(\sigma N)^{a\bmod m_N}.
> $$
> 若 $M\subseteq N$，商映射保持整数幂，且指数约化相容，故这些坐标形成逆极限元素。利用正文的 profinite 逆极限表示，得到唯一 $\sigma^a\in G$。
>
> 每个坐标只依赖离散有限数据 $\sigma N$ 与 $a\bmod m_N$，所以从 $G\times\widehat{\mathbb Z}$ 到各有限商的映射连续。逆极限拓扑使总映射连续。对整数 $a$，定义与原整数幂一致；因 $\mathbb Z$ 稠密于 $\widehat{\mathbb Z}$，连续延拓唯一。
>
> 有限商中固定元素的所有幂都处于同一个循环子群，故整数幂法则逐坐标成立，并得到
> $$
> (\sigma^a)^b=\sigma^{ab},\qquad\sigma^{a+b}=\sigma^a\sigma^b.
> $$
> 事实上，对固定同一个 $\sigma$ 的这两条法则不要求整个 $G$ 交换；源题给出的交换群假设是充分的。若 $G$ 交换，还可逐商证明 $(\sigma\tau)^a=\sigma^a\tau^a$，于是 $G$ 成为拓扑 $\widehat{\mathbb Z}$-模（加法记号下）。

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 1, printed p. 274, PDF p. 293]. 独立有限商构造；使用 profinite 群的逆极限表示这一正文输入，未预设 profinite 幂已经存在。
- **Boundary:** 非交换 $G$ 中不能一般地加入 $(\sigma\tau)^a=\sigma^a\tau^a$；即使整数指数为 $2$ 也会失败。
