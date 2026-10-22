---
title: 'Exercise LA554: Inflation and Restriction in Continuous First Cohomology'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 4, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-4
created: '2026-10-23'
---

# Exercise LA554: Inflation and Restriction in Continuous First Cohomology

## Problem Statement

> [!question] Neukirch IV.3.4
> Let $G$ be a profinite group and $A$ a continuous $G$-module. Put
> $$
> H^1(G,A)=Z^1(G,A)/B^1(G,A),
> $$
> where $Z^1(G,A)$ consists of all continuous maps $f:G\to A$ (with respect to the discrete topology on $A$) such that $f(\sigma\tau)=f(\sigma)^\tau f(\tau)$, and $B^1(G,A)$ consists of all functions of the form $f_a(\sigma)=a^{\sigma-1}$, $a\in A$. Show that if $\mathfrak g$ is a closed normal subgroup of $G$, then one has an exact sequence
> $$
> 1\longrightarrow H^1(G/\mathfrak g,A^{\mathfrak g})\longrightarrow H^1(G,A)\longrightarrow H^1(\mathfrak g,A).
> $$

## Hints

> [!hint]- Hint 1
> 前一箭头 inflation，后一箭头 restriction。证明 restriction 核中的 cocycle 可乘一个 coboundary，使它在 $\mathfrak g$ 上恒等于 $1$。

> [!hint]- Hint 2
> 比较 $f(g h)$ 和 $f(h'g)$，其中 $h'=ghg^{-1}$，便知 $f(g)\in A^{\mathfrak g}$ 且在 $\mathfrak g$ 陪集上常值。

## Solution

> [!success]- Independent derivation
> 用乘法记号及源书右作用。inflation 把 $\bar f:G/\mathfrak g\to A^{\mathfrak g}$ 与商映射复合；restriction 将 cocycle 限制到 $\mathfrak g$。两者保持 cocycle 与 coboundary，因而在 $H^1$ 上良定义。inflation 的像在 $\mathfrak g$ 上为 $1$，所以复合为零。
>
> **inflation 单射。** 若膨胀后的 cocycle 满足 $f(g)=a^{g-1}$，则对 $h\in\mathfrak g$，$1=f(h)=a^{h-1}$，所以 $a\in A^{\mathfrak g}$。原商群 cocycle 本来就是 $A^{\mathfrak g}$ 中的 coboundary，故类为零。
>
> **中间正合。** 若 $[f]$ 在 $H^1(\mathfrak g,A)$ 中为零，存在 $a\in A$ 使 $f(h)=a^{h-1}$ 对全部 $h\in\mathfrak g$ 成立。用 $f/f_a$ 代替后可设 $f|_{\mathfrak g}=1$。于是对 $g\in G,h\in\mathfrak g$，
> $$
> f(gh)=f(g)^h,\qquad
> f(gh)=f((ghg^{-1})g)=f(g).
> $$
> 故 $f(g)$ 被 $\mathfrak g$ 固定，且 $f$ 在右陪集上常值。因此它下降为 $\bar f:G/\mathfrak g\to A^{\mathfrak g}$ 的 cocycle。商拓扑使下降映射连续，因为原 $f$ 连续且在纤维上常值。其 inflation 正是 $f$，得到核等于像。
>
> 整个论证不要求 restriction 满射；题设在最右端也未写 $1$，无需额外证明满射。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 4, printed p. 284, PDF p. 303]. 独立 cocycle 归一化证明，连续性与商拓扑均已检查。
