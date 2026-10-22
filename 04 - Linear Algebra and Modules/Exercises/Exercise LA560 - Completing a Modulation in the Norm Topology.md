---
title: 'Exercise LA560: Completing a Modulation in the Norm Topology'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 14, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-14
created: '2026-10-23'
---

# Exercise LA560: Completing a Modulation in the Norm Topology

## Problem Statement

> [!question] Neukirch IV.6.14
> If $A$ is a $G$-modulation, then the completion $\widehat A$ is again a $G$-modulation which, for connected $X$, is given by
> $$
> \widehat A(X)=\varprojlim_f A(X)/f_*A(Y),
> $$
> where the projective limit is taken over all Galois maps $f:Y\to X$.

## Hints

> [!hint]- Hint 1
> 把 norm images 当作 $A(X)$ 的零邻域基；共同 Galois refinements 使它有向。

> [!hint]- Hint 2
> Exercise 13 的 proof 实际给出两个操作的连续性：任意 target norm neighbourhood 都包含某个 source norm neighbourhood 的像。用 prodiscrete completion 延拓。

## Solution

> [!success]- Independent derivation
> 对 connected $X$，记 $N_f=f_*A(Y)$。若 $f_1,f_2$ 给两个 subgroups，取共同 Galois refinement $q$，则 $N_q\subset N_{f_1}\cap N_{f_2}$。因此这些 subgroup 及其平移给出群拓扑。分离化的核为 $\bigcap_fN_f=NA(X)$。
>
> 令 $Q_f=A(X)/N_f$ 取离散拓扑。其逆极限 $\widehat A(X)$ 为 complete Hausdorff prodiscrete group：它是离散群乘积中的闭子群，而相容坐标逐个最终稳定即收敛。自然映射 $A(X)\to\widehat A(X)$ 像稠密；给定有限多坐标，选共同后继 $q$，相容坐标中在 $Q_q$ 的任一代表同时实现这些有限坐标。其核是 $NA(X)$，故这确为 norm topology 的 separated completion，未假设 quotients 有限。
>
> Exercise 13 中的 refinement 给出 maps 的连续性。对 $h:X\to Z$：给 $Z$ 上任意 $N_q$，取 $X$ 上 Galois $p$ 使 $hp$ 经 $q$，于是 $h_*N_p\subset N_q$；给 $X$ 上任意 $N_p$，取 $Z$ 上 Galois $q$ 使 pullback 的每个分支经 $p$，Mackey 方块给 $h^*N_q\subset N_p$。因此 $h_*,h^*$ 均为 continuous homomorphisms。
>
> 逐坐标延拓：例如给 $h_*$ 的目标坐标 $A(Z)/N_q$，选这样的 $p$，便有 $A(X)/N_p\to A(Z)/N_q$；对 $\widehat A(X)$ 先取 $p$ 坐标再作用。换更小的 $N_p$ 给同值，所以与选择无关。各目标坐标相容，得到 $\widehat h_*$；同理得 $\widehat h^*$。这些延拓唯一，因为原群稠密而目标 Hausdorff。
>
> 对不连通对象取有限直和的 completion（亦即有限积）。原 modulation 的复合律、恒等律和每个 Mackey 方块都是两个 continuous maps 的等式；在稠密子群 $A(X)$ 上成立，故在 completion 上成立。有限和及 additivity 也保持。因此 $\widehat A$ 是 $G$-modulation，自然 $A\to\widehat A$ 是其同态。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Inverse Limits of Abelian Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Galois Refinements]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 14, printed p. 308, PDF p. 327]. 独立连续性与 prodiscrete completion 推导。
- **Boundary:** 对一般 modulation，norm quotients 可无限，故这里 completion 不必 compact 或 profinite。后续 class-field hypotheses 才给有限 norm quotients。
