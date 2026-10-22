---
title: 'Exercise Gal177: Unramified Covers are Cyclic Galois Covers'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 16, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-16
created: '2026-10-23'
---

# Exercise Gal177: Unramified Covers are Cyclic Galois Covers

## Problem Statement

> [!question] Neukirch IV.6.16
> An unramified map $f:X\to Y$ of connected finite $G$-sets is Galois, and $d$ induces an isomorphism
> $$
> G(X|Y)\simeq\mathbb Z/f_{X|Y}\mathbb Z.
> $$
> Let $\varphi_{X|Y}\in G(X|Y)$ be the element which is mapped to $1\bmod f_{X|Y}\mathbb Z$.

## Hints

> [!hint]- Hint 1
> 令 $H=G_x\subset K=G_y$。$e=1$ 等价于 $I_H=I_K$，所以 $H$ 是 $d|_K$ 下的 $d(H)$ 的完整原像。

> [!hint]- Hint 2
> $\widehat{\mathbb Z}$ 的闭子群正规，故 $H\triangleleft K$；用 normalized degree $d_K$ 算 quotient。

## Solution

> [!success]- Independent derivation
> 设 $I_K=\ker(d|_K)$，$I_H=H\cap I_K$。由 unramified 的定义 $[I_K:I_H]=1$，有 $I_K\subset H$。若 $k\in K$ 且 $d(k)\in d(H)$，选 $h\in H$ 使 $d(h)=d(k)$；则 $kh^{-1}\in I_K\subset H$，故 $k\in H$。因此
> $$
> H=(d|_K)^{-1}(d(H)).
> $$
> 由于 $d(K)$ 交换，$H$ 正规于 $K$，这正是 transitive $G$-sets 的映射 $G/H\to G/K$ 为 Galois 的条件。其 deck group 与 $K/H$ 同构（采用源书关于 deck actions 的约定），而 $d$ 诱导
> $$
> K/H\simeq d(K)/d(H).
> $$
> 写 $d(K)=m_K\widehat{\mathbb Z}$、$d(H)=m_Kf\widehat{\mathbb Z}$，用 $d_K=d/m_K$ 得
> $$
> d(K)/d(H)\simeq\widehat{\mathbb Z}/f\widehat{\mathbb Z}\simeq\mathbb Z/f\mathbb Z.
> $$
> 这里 $f=f_{X|Y}$。所以 Frobenius $\varphi_{X|Y}$ 为唯一被 normalized degree 送到 $1$ 的元素，并生成 deck group。对 degree $1$，它是平凡群的恒等元，结论仍成立。未经 normalization 的 $d$ 则把生成元送到 $m_K$ 而非 $1$；这也是必须注明 $d_K$ 的原因。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Quotients]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 16, printed p. 309, PDF p. 328]. 独立稳定子群证明；所称 $d$ 诱导的同构包含在 $G_y$ 上的 normalization。
- **Scope:** 对一般 ramified cover，$I_K$ 未必包含 $H$，因此这一正规与 cyclic 结论不能直接推广。
