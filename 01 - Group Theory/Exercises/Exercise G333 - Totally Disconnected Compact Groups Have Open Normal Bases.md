---
title: 'Exercise G333: Totally Disconnected Compact Groups Have Open Normal Bases'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 3, printed p. 265, PDF p. 284
source_refs:
- S4/ch-IV/sec-1/ex-3
created: '2026-10-23'
---

# Exercise G333: Totally Disconnected Compact Groups Have Open Normal Bases

## Problem Statement

> [!question] Neukirch IV.1.3
> A compact Hausdorff group is totally disconnected if and only if its neutral element admits a basis of neighbourhoods consisting only of normal subgroups.

## Hints

> [!hint]- Hint 1
> 先证明紧 Hausdorff 空间中的连通分支等于 clopen 邻域的交，从而全不连通时有 clopen 基。

> [!hint]- Hint 2
> 若 $U$ 为含 $1$ 的 clopen 集，其左平移稳定子 $H=\{g:gU=U\}$ 是开子群且 $H\subseteq U$。

> [!hint]- Hint 3
> 开子群有限指数，其正规核是有限个共轭开子群的交。

## Solution

> [!success]- Independent derivation
> **1. 从全不连通取得 clopen 基。** 对紧 Hausdorff 空间 $X$ 及 $x\in X$，令 $Q$ 为所有包含 $x$ 的 clopen 集的交。证明 $Q$ 连通：若 $Q=C\sqcup D$ 是两个非空闭部分的分离，令 $x\in C$。由紧 Hausdorff 的正规性，取不交开集 $U,V$ 分别包含 $C,D$。$X\setminus(U\cup V)$ 为紧集；它的每一点不在 $Q$ 中，故被某个含 $x$ 的 clopen 集排除。有限多个这样的集的交给出 clopen $W$，满足 $Q\subseteq W\subseteq U\cup V$。于是 $W\cap U$ 是含 $x$ 的 clopen 集，却排除 $D\subseteq Q$，矛盾。因此 $Q$ 连通，且恰为 $x$ 的连通分支。若 $X$ 全不连通，则 $Q=\{x\}$。再对任意邻域的紧补集作同样有限交，便得到含 $x$ 且包含于该邻域的 clopen 集。
>
> **2. clopen 邻域产生开子群。** 在群 $G$ 中取 $1\in U\subseteq O$，$U$ clopen。由乘法连续性及 $U$ 紧，存在 $1$ 的对称开邻域 $V$，使 $VU\subseteq U$：对每个 $u\in U$ 选 $V_uW_u\subseteq U$，有限个 $W_u$ 覆盖 $U$，取对应 $V_u$ 的交并对称化。对 $v\in V$，同时有 $vU\subseteq U$ 与 $v^{-1}U\subseteq U$，故 $vU=U$。
>
> 令 $H=\{g:gU=U\}$。它是子群、包含 $V$ 因而开，并由 $1\in U$ 得 $H\subseteq U$。开陪集覆盖紧群，有限个即已覆盖，所以 $[G:H]<\infty$。核心
> $$
> N=\bigcap_{g\in G}gHg^{-1}
> $$
> 只需对有限个 $G/H$ 代表取交，故为开正规子群且 $N\subseteq O$。任意 $O$ 都含这样的 $N$，即得所需正规子群邻域基。
>
> **3. 反向。** 若有正规子群邻域基，则每个基本子群因包含开邻域而为开，其陪集均开，故它也闭。$1$ 的连通分支须包含于每一个 clopen 基本子群；Hausdorff 性使这些子群的交仅为 $\{1\}$。平移后每个连通分支都是单点，$G$ 全不连通。

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 3, printed p. 265, PDF p. 284]. 独立证明，包含通常被省略的 clopen 基及开子群构造；只输入紧 Hausdorff 空间的正规性和紧覆盖有限子覆盖。
- **Topology:** 邻域子群未预先声明开时也无妨：包含 $1$ 的开邻域的子群本身由该邻域的平移组成，自动为开。
