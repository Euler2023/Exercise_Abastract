---
title: 'Exercise Gal166: The Degree Sum over Microprimes'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 2, printed p. 290, PDF p. 309
source_refs:
- S4/ch-IV/sec-4/ex-2
created: '2026-10-23'
---

# Exercise Gal166: The Degree Sum over Microprimes

## Problem Statement

> [!question] Neukirch IV.4.2
> For a finite extension $L|K$ and a microprime $\mathfrak P\mid\mathfrak p$ of $L$, let $f_{\mathfrak P\mid\mathfrak p}=d(\mathfrak P)/d(\mathfrak p)$. Show that
> $$
> \sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}=[L:K].
> $$

## Hints

> [!hint]- Hint 1
> 用前题的双陪集表示。$f_{\mathfrak P\mid\mathfrak p}$ 是本原 Frobenius 在有限陪集空间上对应轨道的长度。

> [!hint]- Hint 2
> 互不交轨道的长度之和就是整个陪集空间的大小。

## Solution

> [!success]- Independent derivation
> 沿用前题假设，取 $G_K$ 中代表底层微素点的本原 Frobenius $s$，记 $H=G_L$、$C=\overline{\langle s\rangle}$。右作用 $s$ 在有限左陪集集 $H\backslash G_K$ 上将其分成轨道，轨道由 $H\backslash G_K/C$ 参数化。
>
> 在轨道 $HgC$ 中，最小返回时间为 $f_g>0$，对应上方微素点的本原代表为 $g s^{f_g}g^{-1}\in H$。$d$ 为到交换群的同态，故共轭不改变 $d$，从而
> $$
> \frac{d(g s^{f_g}g^{-1})}{d(s)}=f_g.
> $$
> 这就是题设 $f_{\mathfrak P\mid\mathfrak p}$。全部轨道构成不交分割，因此
> $$
> \sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}
> =\sum_{HgC}\#(HgC/H)=\#(H\backslash G_K)=[G_K:H]=[L:K].
> $$
> 因此这些比值不仅为正有理数，实际上是正整数。此公式计数的是 microprime Frobenius 轨道的返回时间，不应直接把它等同于本章起始 $d(G_K):d(G_L)$ 对整个扩张定义的统一 inertia degree。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Finite Coset Actions]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Galois Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 2, printed p. 290, PDF p. 309]. 独立轨道计数；前题已证明微素点与轨道的一一对应。
