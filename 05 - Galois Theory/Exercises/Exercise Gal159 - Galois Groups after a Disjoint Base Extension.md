---
title: 'Exercise Gal159: Galois Groups after a Disjoint Base Extension'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 1, printed p. 264, PDF p. 283
source_refs:
- S4/ch-IV/sec-1/ex-1
created: '2026-10-23'
---

# Exercise Gal159: Galois Groups after a Disjoint Base Extension

## Problem Statement

> [!question] Neukirch IV.1.1
> Let $L|k$ be a Galois extension and $K|k$ an arbitrary extension, both contained in a common extension $\Omega|k$. If $L\cap K=k$, then the mapping
> $$
> G(LK|K)\longrightarrow G(L|k),\qquad\sigma\longmapsto\sigma|_L,
> $$
> is a topological isomorphism, that is, an isomorphism of groups and a homeomorphism of topological spaces.

## Hints

> [!hint]- Hint 1
> $LK/K$ 仍为 Galois 扩张，限制映射连续且单射；利用紧性说明其像闭。

> [!hint]- Hint 2
> 限制映射的像在 $L$ 中的不动域恰为 $L\cap K$。对闭子群使用无限 Galois 对应。

## Solution

> [!success]- Independent derivation
> $L/k$ 的每个元素在 $k$ 上可分，其最小多项式在 $L$ 中分裂；因而在 $K$ 上的最小多项式也在 $LK$ 中分裂，$LK/K$ 为 Galois 扩张。限制给出群同态 $r$；若 $\sigma$ 在 $L$ 上为恒等且固定 $K$，则它固定由两域生成的 $LK$，故 $r$ 单射。
>
> Krull 拓扑以固定有限子扩张的子群为基本开邻域，有限多个 $L$ 中元素的逐点稳定子在限制下的原像仍是开稳定子，所以 $r$ 连续。域的 Galois 群是紧 Hausdorff 群，故像 $H=r(G(LK/K))$ 为闭子群。
>
> 对 $a\in L$，它被 $H$ 固定当且仅当作为 $LK$ 的元素被 $G(LK/K)$ 固定，即当且仅当 $a\in K$。因此
> $$
> L^H=L\cap K=k.
> $$
> 无限 Galois 对应对闭子群适用，故 $H=G(L/k)$。这一步使用本节正文已证明的拓扑 Galois 对应 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, (1.2), printed pp. 263–264, PDF pp. 282–283]，未以本题的结论作输入。于是 $r$ 是连续双射；紧空间到 Hausdorff 空间的连续双射为同胚，得到所需拓扑同构。

## Related Concepts

- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 1, printed p. 264, PDF p. 283]. 独立限制映射与闭子群证明，适用于无限 Galois $L/k$，并不要求 $K/k$ 为 Galois 或有限。
- **Topology:** 不能只证明抽象群双射后省去拓扑检查；这里的紧到 Hausdorff 论证已补齐该部分。
