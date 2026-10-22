---
title: 'Exercise LA549: Canonical Tensor Isometries for Metrized Modules'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 1, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-1
created: '2026-10-23'
---

# Exercise LA549: Canonical Tensor Isometries for Metrized Modules

## Problem Statement

> [!question] Neukirch III.4.1
> If $M,N,L$ are metrized $\mathfrak o$-modules, then one has canonical isometries
> $$
> M\otimes_{\mathfrak o}N\simeq N\otimes_{\mathfrak o}M,\qquad
> (M\otimes_{\mathfrak o}N)\otimes_{\mathfrak o}L\simeq M\otimes_{\mathfrak o}(N\otimes_{\mathfrak o}L),
> $$
> $$
> M\otimes_{\mathfrak o}(N\oplus L)\simeq(M\otimes_{\mathfrak o}N)\oplus(M\otimes_{\mathfrak o}L).
> $$

## Hints

> [!hint]- Hint 1
> 先写出交换、结合和分配映射在纯张量上的公式，它们的逆映射由同样的普遍性质构造。

> [!hint]- Hint 2
> 张量积度量在纯张量上是内积的乘积，直和度量是两内积之和。验证纯张量后用半双线性延拓。

## Solution

> [!success]- Independent derivation
> 令 $K$ 为数域、$\mathfrak o=\mathcal O_K$，采用源书的 $K_{\mathbb C}=K\otimes_{\mathbb Q}\mathbb C$ 上的 Hermitian 度量。各嵌入分量可分别验证；张量积与直和度量定义见 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed p. 228, PDF p. 247]。
>
> **1. 交换。** 映射 $c(m\otimes n)=n\otimes m$ 对平衡关系良定义，且 $c^2=1$。纯张量满足
> $$
> \langle c(m\otimes n),c(m'\otimes n')\rangle
> =\langle n,n'\rangle_N\langle m,m'\rangle_M
> =\langle m\otimes n,m'\otimes n'\rangle.
> $$
> 由半双线性延拓，$c$ 保持整个度量。
>
> **2. 结合。** 由三重平衡映射的普遍性质，$a((m\otimes n)\otimes\ell)=m\otimes(n\otimes\ell)$ 为同构，其逆改变括号回去。两侧纯张量内积都等于
> $$
> \langle m,m'\rangle_M\langle n,n'\rangle_N\langle\ell,\ell'\rangle_L,
> $$
> 所以 $a$ 为等距。
>
> **3. 分配。** 令
> $$
> d(m\otimes(n,\ell))=(m\otimes n,m\otimes\ell).
> $$
> 逆映射为 $(m\otimes n,0)\mapsto m\otimes(n,0)$、$(0,m\otimes\ell)\mapsto m\otimes(0,\ell)$ 后加法延拓。对纯张量，原内积为
> $$
> \langle m,m'\rangle_M\bigl(\langle n,n'\rangle_N+\langle\ell,\ell'\rangle_L\bigr),
> $$
> 像的直和内积则为
> $$
> \langle m,m'\rangle_M\langle n,n'\rangle_N+\langle m,m'\rangle_M\langle\ell,\ell'\rangle_L,
> $$
> 二者相等。延拓后 $d$ 为等距。
>
> 三种映射均直接由模的普遍性质定义，不依赖基；其复化与源书的共轭 involution $F$ 交换。因此它们是源书意义下 metrized 模的 canonical isometries。允许模中存在挠元素，因为代数同构对任意模成立，而度量定义在复化上，挠部分在复化后为零。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 1, printed p. 233, PDF p. 252]. 独立构造并逐一核对度量。
- **Section boundary:** 此页运行页眉是 §5，但正文的 §5 标题在本组四题之后；本题属于 §4，不能按页眉误编成 III.5.1。
