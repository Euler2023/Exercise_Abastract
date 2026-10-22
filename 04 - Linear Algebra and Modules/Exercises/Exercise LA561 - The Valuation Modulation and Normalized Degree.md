---
title: 'Exercise LA561: The Valuation Modulation and Normalized Degree'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 15, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-15
created: '2026-10-23'
---

# Exercise LA561: The Valuation Modulation and Normalized Degree

## Problem Statement

> [!question] Neukirch IV.6.15
> For the following, let $d:G\to\widehat{\mathbb Z}$ be a fixed surjective homomorphism. Let $f:X\to Y$ be a map of connected finite $G$-sets and $x\in X$, $y=f(x)\in Y$. The inertia degree, resp. the ramification index, of $f$ is defined by
> $$
> f_{X|Y}=(d(G_y):d(G_x)),\qquad e_{X|Y}=(I_y:I_x),
> $$
> where $I_y$, resp. $I_x$, is the kernel of $d:G_y\to\widehat{\mathbb Z}$, resp. $d:G_x\to\widehat{\mathbb Z}$. $f$ is called unramified if $e_{X|Y}=1$.
>
> $d$ defines a $G$-modulation $\boldsymbol{\mathbb Z}$ such that the maps $f^*,f_*$, corresponding to a mapping $f:X\to Y$ of connected $G$-sets, are given by
> $$
> \boldsymbol{\mathbb Z}(Y)=\widehat{\mathbb Z}\ \mathop{\leftrightarrows}^{e_{X|Y}}_{f_{X|Y}}\ \widehat{\mathbb Z}=\boldsymbol{\mathbb Z}(X).
> $$
> In this transcription of the printed arrows, the upper arrow points left and is labelled $e_{X|Y}$; the lower arrow points right and is labelled $f_{X|Y}$. This gives a homomorphism of $G$-modulations $d:\pi_{\rm ab}\to\boldsymbol{\mathbb Z}$.

> [!warning] Source issue
> 原图的 $e$、$f$ 箭头方向与 normalized degree / transfer 不符：正确 $f^*$ 乘 $e$，$f_*$ 乘 $f$。Solution 由 transfer 逐因子计算给出独立校准。

## Hints

> [!hint]- Hint 1
> 在 $H=G_x$ 上令 $m_H=[\widehat{\mathbb Z}:d(H)]$，并用 $d_H=d/m_H$ 把 image 归一化。

> [!hint]- Hint 2
> Inclusion 在 normalized degree 上乘 $m_H/m_K=f$。Transfer 在原 $d$ 上乘 $[K:H]=ef$，归一化后乘 $e$。据此检查印刷箭头。

## Solution

> [!success]- Independent derivation
> **校准箭头。** 上图若以 $Y$ 为左、$X$ 为右，原图将 $f$ 标在右向箭头，将 $e$ 标在左向箭头。它与随后的同态 $d:\pi_{ab}\to\boldsymbol{\mathbb Z}$ 不相容。正确的是
> $$
> f^*:\boldsymbol{\mathbb Z}(Y)\longrightarrow\boldsymbol{\mathbb Z}(X),\quad z\longmapsto e_{X|Y}z,
> \qquad
> f_*:\boldsymbol{\mathbb Z}(X)\longrightarrow\boldsymbol{\mathbb Z}(Y),\quad z\longmapsto f_{X|Y}z.
> $$
> 以下证明修正版本，同时证明原打印方向不能成立。
>
> 设 $H\subset K$ 为相应稳定子，$m_H=[\widehat{\mathbb Z}:d(H)]$、$m_K=[\widehat{\mathbb Z}:d(K)]$。两者均为有限整数，且 $d(H)=m_H\widehat{\mathbb Z}$。定义连续满射
> $$
> d_H:H^{ab}\longrightarrow\widehat{\mathbb Z},\qquad d_H(h)=d(h)/m_H.
> $$
> 像中整除 $m_H$ 的商唯一。令 $f=m_H/m_K$、$e=[I_K:I_H]$，稳定子 exact sequences 给 $[K:H]=ef$。
>
> Inclusion $i:H^{ab}\to K^{ab}$ 满足
> $$
> d_K i(h)=d(h)/m_K=f\,d_H(h).
> $$
> Transfer 的陪集乘积公式给 $d(\operatorname{Ver}_{K/H}k)=[K:H]d(k)$：写 $kr=r'h_r$，对所有 $r$ 求和，$\sum d(r)-\sum d(r')$ 因同一陪集排列相消。故
> $$
> d_H\operatorname{Ver}_{K/H}(k)=\frac{ef\,d(k)}{m_H}=e\,d_K(k).
> $$
> 于是 $\ker d_H$ 在 inclusion、transfer、conjugation 下均稳定，是 $\pi_{ab}$ 的 submodulation。取其逐点 quotient，便得到一个 modulation，值由 $d_H$ canonically 识别为 $\widehat{\mathbb Z}$，两个 induced maps 正是上述 $f_*,f^*$。所有 Mackey 恒等式自动由 quotient 继承，$d$ 也是 modulation homomorphism。
>
> 作为直接检查，若扩张 unramified，则 $e=1$，restriction 必须把一个 normalized prime value $1$ 仍送到 $1$，norm 才乘 residue degree $f$。原图的相反标法在 $f>1$ 时已与该 normalization 矛盾。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Quotient Functors]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Inertia and Residue Degree]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 15 and its preceding definitions, printed p. 309, PDF p. 328]. 原图在 350 dpi 与另一审阅者的原页检查中复核；这里转写其方向并显式修正，未保存仅含公式的截图。
- **Notation:** 源书 $\boldsymbol{\mathbb Z}(X)$ 的点值为 $\widehat{\mathbb Z}$；后面的 valuation image subgroup 另记 $Z\subset\widehat{\mathbb Z}$。
