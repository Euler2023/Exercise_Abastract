---
title: 'Exercise Gal165: Microprimes and Their Restriction to Finite Subfields'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 1, printed p. 290, PDF p. 309
source_refs:
- S4/ch-IV/sec-4/ex-1
created: '2026-10-23'
---

# Exercise Gal165: Microprimes and Their Restriction to Finite Subfields

## Problem Statement

> [!question] Neukirch IV.4.1
> Assume that every closed abelian subgroup of $G$ is procyclic. Let $K|k$ be a finite extension. A microprime $\mathfrak p$ of $K$ is by definition a conjugacy class $\{\sigma\}\subseteq G_K$ of some Frobenius element $\sigma\in\operatorname{Frob}(\bar k|K)$ which is not a proper power $\sigma'^n$, $n>1$, of some other Frobenius element $\sigma'\in\operatorname{Frob}(\bar k|K)$. Let $\operatorname{spec}(K)$ be the set of all microprimes of $K$. Show that if $L|K$ is a finite extension, then there is a canonical mapping
> $$
> \pi:\operatorname{spec}(L)\longrightarrow\operatorname{spec}(K).
> $$
> Above any microprime $\mathfrak p$ there are only finitely many microprimes $\mathfrak P$ of $L$, i.e., the set $\pi^{-1}(\mathfrak p)$ is finite. We write $\mathfrak P\mid\mathfrak p$ to mean $\mathfrak P\in\pi^{-1}(\mathfrak p)$.

## Hints

> [!hint]- Hint 1
> 若 $s$ 是 Frobenius 元素，则在任何包含 $s$ 的 procyclic 群上，$d$ 单射。由此先证明整个中心化子 $C_{G_K}(s)$ 是 procyclic，并有唯一的正整数度生成元。

> [!hint]- Hint 2
> 将 $G_L$ 中的本原 Frobenius 元素替换成它在 $G_K$ 中的唯一本原根，再取 $G_K$ 共轭类。

> [!hint]- Hint 3
> 固定底层本原元素 $s$，上方微素点由有限陪集空间上的 $\overline{\langle s\rangle}$ 轨道（等价双陪集）参数化。

## Solution

> [!success]- Independent derivation
> 记 $D=d_K:G_K\twoheadrightarrow\widehat{\mathbb Z}$；Frobenius 意味 $D(s)$ 为正整数。对含 $s$ 的闭 procyclic 子群 $B$，因 $s$ 的闭循环子群经 $D$ 同构到 $D(s)\widehat{\mathbb Z}$，$B$ 的每个 Sylow 分量都含一个 $\mathbb Z_p$，故 $B\simeq\widehat{\mathbb Z}$，且 $D|_B$ 为单射（各 $p$ 分量均非零）。
>
> 若 $t$ 中心化 $s$ 且 $D(t)=0$，则 $\overline{\langle s,t\rangle}$ 闭交换，按假设 procyclic；上段使 $t=1$。故 $D$ 在整个中心化子 $C=C_{G_K}(s)$ 上单射，进而 $C$ 交换；按假设它也 procyclic。其像含开子群 $D(s)\widehat{\mathbb Z}$，故为 $m\widehat{\mathbb Z}$，其中正整数 $m\mid D(s)$。唯一元素 $s_0\in C$ 满足 $D(s_0)=m$，并有 $s=s_0^{D(s)/m}$。任何 Frobenius 根都在 $C$ 中，故本原根 $s_0$ 唯一；且 $C=\overline{\langle s_0\rangle}$。
>
> 对 $G_L$ 中本原 Frobenius 元素 $t$，以它在 $G_K$ 的唯一本原根 $s_0$ 定义 $\pi([t]_{G_L})=[s_0]_{G_K}$。共轭保持 $D$ 并保持唯一本原根，因此不依赖代表元。
>
> 固定底层本原 $s$，令 $C=\overline{\langle s\rangle}$、$H=G_L$。每个双陪集 $H gC$ 对应有限轨道，令 $f_g$ 为最小正整数使 $g s^{f_g}g^{-1}\in H$。这样的整数存在，因为 $G_K/H$ 有限。该元素在 $H$ 中本原：若是另一个 Frobenius 的真整数幂，根必须属于中心化子 $gCg^{-1}$，由 $D$ 的单射及正整数度条件根只能是 $g s^r g^{-1}$，而 $0<r<f_g$ 与最小性矛盾。反之，所有映到 $[s]$ 的微素点均由此得到；更换双陪集代表只改变 $H$ 共轭类。
>
> 故 $\pi^{-1}([s])$ 与有限集 $H\backslash G_K/C$ 一一对应，纤维有限。组合两个有限扩张时取本原根的唯一性也使这些映射复合相容。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Krull Topology]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Procyclic Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Coset Actions]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 1, printed p. 290, PDF p. 309]. 独立中心化子、本原根和双陪集证明，明确使用“每个闭交换子群 procyclic”的额外假设。
- **Boundary:** 正整数 Frobenius 度很关键；一个任意 profinite 指数并不提供用于本原根最小化的正整数。
