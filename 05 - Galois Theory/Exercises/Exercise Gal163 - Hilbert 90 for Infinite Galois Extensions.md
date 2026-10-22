---
title: 'Exercise Gal163: Hilbert 90 for Infinite Galois Extensions'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 7, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-7
created: '2026-10-23'
---

# Exercise Gal163: Hilbert 90 for Infinite Galois Extensions

## Problem Statement

> [!question] Neukirch IV.3.7
> Even for infinite Galois extensions $L|K$, one has Hilbert's theorem 90: $H^1(G(L|K),L^*)=1$.

## Hints

> [!hint]- Hint 1
> 令 $L^\times$ 取离散拓扑。连续 cocycle 的像有限，故它下降到一个有限 Galois 子扩张。

> [!hint]- Hint 2
> 使用有限 Noether–Hilbert 90，找到同一个有限子扩域中的 coboundary 元素，再回到整个群。

## Solution

> [!success]- Independent derivation
> 记 $G=G(L/K)$，$L^\times$ 带离散拓扑且按自然 Galois 作用成为连续模。取连续 cocycle $f:G\to L^\times$。其像有限。选开正规 $N$，使 $f|_N=1$ 且 $N$ 固定全部像元素；此选择可由紧性有限像及有限多个稳定子取正规核获得。
>
> 于是 $f$ 经有限群 $G/N$ 因子化，且取值 $E^\times$，其中 $E=L^N$ 为有限 Galois 扩张 $E/K$。已证明的 Noether 形式 (3.8) 给出 $b\in E^\times$，使
> $$
> f(\sigma N)=b^{\sigma-1}\quad(\sigma\in G).
> $$
> 该有限命题及其证明在 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, printed p. 283, PDF p. 302]，已图核；它只处理有限 Galois 扩张，并非本无限结论的循环引用。将公式看作 $L^\times$ 中的公式，原 cocycle 也为 coboundary。因此每个类平凡，$H^1(G,L^\times)=1$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert 90]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Continuous Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 7, printed p. 284, PDF p. 303]. 独立有限层下降，输入仅为源书已证明的有限命题 (3.8)。
- **Topology:** 此处 $H^1$ 指连续 cocycle；删除连续性不能沿用本证明。
