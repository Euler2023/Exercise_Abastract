---
title: 'Exercise G344: Galois Maps of Connected Finite G Sets'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 8, printed p. 307, PDF p. 326
source_refs:
- S4/ch-IV/sec-6/ex-8
created: '2026-10-23'
---

# Exercise G344: Galois Maps of Connected Finite G Sets

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 8
> Let $f:X\to Y$ be a map of connected finite $G$-sets, and let $x\in X$, $y=f(x)\in Y$. Show that $f$ is Galois if and only if $\pi_1(X,x)$ is a normal subgroup of $\pi_1(Y,y)$. In this case, one has a canonical isomorphism
> $$
> G(X\mid Y)\cong\pi_1(Y,y)/\pi_1(X,x).
> $$

## Hints

> [!hint]- Hint 1 — first step
> After choosing $x$ and $y$, replace the map by $G/H\to G/J$ with $H\subseteq J$ and inspect its fiber over $J$.

> [!hint]- Hint 2 — proof route
> Write $X=G/H$, $Y=G/J$ with $H\le J$. The automorphism group over $Y$ is the normalizer quotient $N_J(H)/H$.

## Solution

> [!success]- 独立推导
> 按选定基点识别 $X=G/H,Y=G/J$，其中 $H=G_x\subseteq J=G_y$，且 $f(gH)=gJ$。在 $y$ 上的纤维为 $J/H$。一个 $G$-等变自同构由 $H$ 的像唯一确定，且在 $Y$ 上方需把它送到 $aH$，$a\in J$；良定义双射要求 $a\in N_J(H)$。因此（以逆元约定消去右乘的反同态）
> $$
> \operatorname{Aut}_Y(X)\cong N_J(H)/H.
> $$
> 其在 $J/H$ 上传递，当且仅当 $N_J(H)=J$，即 $H\triangleleft J$；其他纤维是它的 $G$-平移，故等价于所有纤维传递。正规时上述同构成为 $G(X/Y)\cong J/H$。
> 明确群运算约定：用 $aH$ 对应 $gH\mapsto ga^{-1}H$，则 $\tau_a\circ\tau_b=\tau_{ab}$，保证这是群同构而非未经说明的反同构。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Groups and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已与原书200 dpi图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 8, printed p.307, PDF p.326]。解答为独立推导。
