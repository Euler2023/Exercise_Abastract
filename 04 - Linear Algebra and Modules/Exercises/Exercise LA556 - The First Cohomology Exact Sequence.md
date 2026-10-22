---
title: 'Exercise LA556: The First Cohomology Exact Sequence'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 6, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-6
created: '2026-10-23'
---

# Exercise LA556: The First Cohomology Exact Sequence

## Problem Statement

> [!question] Neukirch IV.3.6
> If $1\to A\to B\to C\to1$ is an exact sequence of continuous $G$-modules, then one has an exact sequence
> $$
> 1\longrightarrow A^G\longrightarrow B^G\longrightarrow C^G\longrightarrow H^1(G,A)\longrightarrow H^1(G,B)\longrightarrow H^1(G,C).
> $$

## Hints

> [!hint]- Hint 1
> 对 $c\in C^G$ 选提升 $b\in B$，定义连接 cocycle $\sigma\mapsto b^{\sigma-1}$，它取值于 $A$。

> [!hint]- Hint 2
> 依次把“像为 coboundary”解释为调整提升或调整 cocycle，使其固定或使其取值于核。

## Solution

> [!success]- Independent derivation
> 将 $A$ 视为 $B$ 的子模，商映射记为 $\pi$。不动点序列在前两处的正合性直接由核定义得到。对 $c\in C^G$，选 $b\in B$ 使 $\pi(b)=c$，则
> $$
> z_b(\sigma)=b^{\sigma-1}\in A.
> $$
> 它满足 cocycle 式，且连续，因为 $B$ 是连续离散模。换提升 $b$ 为 $ab$ 只乘以 $A$ 中的 coboundary $a^{\sigma-1}$。因此 $\delta(c)=[z_b]$ 良定义，并因模块交换而为同态。
>
> **在 $C^G$ 正合。** 若 $c$ 来自 $b\in B^G$，则 $z_b=1$。反之若 $z_b=a^{\sigma-1}$ 对某个 $a\in A$ 成立，则 $b/a$ 被 $G$ 固定且仍映到 $c$，故 $c$ 来自 $B^G$。
>
> **在 $H^1(G,A)$ 正合。** $\delta(c)$ 在 $B$ 中由 $b$ 给出 coboundary。反之，若 $A$-cocycle $z$ 在 $B$ 中为 $b^{\sigma-1}$，则 $\pi(b)$ 被 $G$ 固定，且 $\delta(\pi(b))=[z]$。
>
> **在 $H^1(G,B)$ 正合。** 从 $A$ 来的类在 $C$ 中显然平凡。若 $B$-cocycle $z$ 映到 $C$ 中的 coboundary $c^{\sigma-1}$，取提升 $b\in B$，则 $z(\sigma)/b^{\sigma-1}$ 的像恒为 $1$，于是它是取值 $A$ 的 cocycle，并在 $H^1(G,B)$ 中与 $z$ 同类。故核等于像。
>
> 所有由模同态诱导的箭头均保持连续 cocycle；连接箭头的连续性问题也已通过离散模作用确认，因此题设全部正合性成立。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 6, printed p. 284, PDF p. 303]. 独立构造连接同态并逐处证明；最后未声明到 $H^1(G,C)$ 满射。
