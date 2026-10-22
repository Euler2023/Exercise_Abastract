---
title: 'Exercise LA559: Universal Norms Form a Submodulation'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 13, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-13
created: '2026-10-23'
---

# Exercise LA559: Universal Norms Form a Submodulation

## Problem Statement

> [!question] Neukirch IV.6.13
> Let $A$ be a $G$-modulation. For every connected finite $G$-set $X$, let
> $$
> NA(X)=\bigcap_f f_*A(Y),
> $$
> where the intersection is taken over all Galois maps $f:Y\to X$. Show that the function $NA(X)$ defines a $G$-submodulation $NA$ of $A$, the modulation of universal norms.

## Hints

> [!hint]- Hint 1
> 任意有限 cover 都可被 connected Galois cover 支配：对开子群取 finite-index normal core。

> [!hint]- Hint 2
> Pushforward 用一个共同 Galois refinement；pullback 用 Mackey 方块，但须选 downstairs cover 使其每个 upstairs 分支都支配给定 cover。

## Solution

> [!success]- Independent derivation
> 约定对不连通 $X=\coprod X_i$，$NA(X)=\bigoplus_i NA(X_i)$。只需证 connected maps $h:X\to Z$ 的 $h_*$ 与 $h^*$ 保持这些群。写稳定子群 $H=G_x\subset K=G_{h(x)}$。
>
> 先记有限 cover 的 refinement 事实。若 $W\to X$ 为 Galois，其稳定子 $N\triangleleft H$ 且 $N$ 在 $K$ 中开。取
> $$
> M=\bigcap_{k\in K}kNk^{-1}\triangleleft K.
> $$
> 交只有有限多个不同因子，故 $M$ 开，并且 $M\subset N$。$Y=G/M\to Z=G/K$ 为 Galois；其 pullback 到 $X$ 的每个分支稳定子都为某个 $H\cap kMk^{-1}=M$，所以每个分支均经 $G/N=W$ 映到 $X$。一般两个 covers 也可用两 stabilizers 的 normal core 得到共同 Galois refinement。
>
> **Pushforward.** 令 $a\in NA(X)$，任取 Galois $q:Y\to Z$。取一个 connected Galois $p:W\to X$ 和映射 $r:W\to Y$ 使 $hp=qr$（用 stabilizers 的共同 normal core）。因 $a\in p_*A(W)$，写 $a=p_*b$，则
> $$
> h_*a=h_*p_*b=q_*r_*b\in q_*A(Y).
> $$
> 对所有 $q$ 成立，故 $h_*a\in NA(Z)$。
>
> **Pullback.** 令 $a\in NA(Z)$，任取 Galois $p:W\to X$。按上述 core 构造选 Galois $q:Y\to Z$，使 $X\times_ZY=\coprod_jT_j$ 的每个 $T_j\to X$ 都经 $W$ 因子化。写 $a=q_*b$。Mackey 方块给
> $$
> h^*a=h^*q_*b=\sum_j (T_j\to X)_*(T_j\to Y)^*b.
> $$
> 每一项因 pushforward 的传递性都落在 $p_*A(W)$，所以总和亦然。遍历 $p$ 即 $h^*a\in NA(X)$。
>
> 对 isomorphisms 两种操作互逆，故 conjugation 也保持 $NA$。所有函子律、additivity 和 Mackey 方块都是 $A$ 中恒等式在稳定子群上的限制；因此这些 subgroup 构成 submodulation。证明没有要求 Galois descent，也不要求任何 norm map 满射。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Subobjects and Functors]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Cores]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 13, printed p. 308, PDF p. 327]. 独立 normal-core refinement 与 Mackey 方块证明。
- **Boundary:** Universal norm 是所有有限 Galois norm images 的交；不应把“同时属于每个像”误写成存在一个在无限层的共同原像。
