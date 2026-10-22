---
title: 'Exercise Gal160: Galois Groups of Independent Composita'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 2, printed p. 264, PDF p. 283
source_refs:
- S4/ch-IV/sec-1/ex-2
created: '2026-10-23'
---

# Exercise Gal160: Galois Groups of Independent Composita

## Problem Statement

> [!question] Neukirch IV.1.2
> Given a family of Galois extensions $K_i|k$ in $\Omega|k$, let $K|k$ be the composite of all $K_i|k$, and $K_i'|k$ the composite of the extensions $K_j|k$ such that $j\ne i$. If $K_i\cap K_i'=k$ for all $i$, then one has a topological isomorphism
> $$
> G(K|k)\simeq\prod_iG(K_i|k).
> $$

## Hints

> [!hint]- Hint 1
> 限制到各 $K_i$ 给出连续单射。先证明任意有限个坐标上的投影满射。

> [!hint]- Hint 2
> 有限族可归纳，每一步将其中一个 $K_i$ 与其他域的合成比较；题设比两两交为底域更强。

> [!hint]- Hint 3
> 有限坐标投影均满射使像在乘积中稠密；像同时紧而闭，故等于整个乘积。

## Solution

> [!success]- Independent derivation
> 各 $K_i/k$ 的合成 $K/k$ 为 Galois。限制给出连续同态
> $$
> r:G(K/k)\longrightarrow\prod_iG(K_i/k).
> $$
> 若一个自同构在全部 $K_i$ 上为恒等，则在它们生成的 $K$ 上为恒等，故单射。
>
> 对有限指标集 $F$，记 $K_F$ 为相应合成。归纳证明 $G(K_F/k)\simeq\prod_{i\in F}G(K_i/k)$。单个域情形成立；加入 $i$ 时，$K_i\cap K_{F\setminus\{i\}}\subseteq K_i\cap K_i'=k$，且两边都包含 $k$，故交等于 $k$。前题的限制同构给出 $[K_F:K_{F\setminus\{i\}}]$ 所对应的全部 $K_i$ 自同构；更直接地，$K_i$ 与其他合成线性无交，从而任给各域自同构，可在张量积上逐因子作用并传到合成。这里线性无交也可从前题 Galois 群结论对有限 Galois 子扩张求次数后取得，故同样适用于无限 $K_i$。
>
> 于是限制到 $K_F$ 后可实现有限个坐标上的任意自同构。$K_F/k$ 的自同构可延拓到 $K/k$：由正常可分扩张的嵌入延拓定理，或无限 Galois 对应的限制满射。因此 $r$ 在任意有限坐标上的投影满射，像在乘积拓扑中稠密。
>
> $G(K/k)$ 紧，目标乘积 Hausdorff，故像闭。闭且稠密即为全部乘积；连续双射再由紧到 Hausdorff 得同胚。

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Linear Disjointness]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 2, printed p. 264, PDF p. 283]. 独立有限坐标与紧性推导。
- **Boundary:** 两两交 $K_i\cap K_j=k$ 不够。例如三个二次域 $\mathbb Q(\sqrt2),\mathbb Q(\sqrt3),\mathbb Q(\sqrt6)$ 两两交为 $\mathbb Q$，但合成群只有四个元素，而三个二阶群的乘积有八个；题设要求与其余全部合成的交为 $k$。
