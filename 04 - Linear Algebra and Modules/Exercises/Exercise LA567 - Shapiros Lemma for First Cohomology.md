---
title: 'Exercise LA567: Shapiros Lemma for First Cohomology'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 5, printed p. 315, PDF p. 334
source_refs:
- S4/ch-IV/sec-7/ex-5
created: '2026-10-23'
---

# Exercise LA567: Shapiros Lemma for First Cohomology

## Problem Statement

> [!question] Neukirch IV.7.5
> If $G$ is a group, $\mathfrak g$ a normal subgroup and $A$ a $\mathfrak g$-module, then $H^1(G,\operatorname{Ind}_G^{\mathfrak g}(A))\simeq H^1(\mathfrak g,A)$.

## Hints

> [!hint]- Hint 1
> 本节的 Ind 是所有满足 $f(xh)=f(x)^h$ 的函数，实质是 coinduction，未要求有限支撑。评价 $f\mapsto f(1)$ 诱导 Shapiro 映射。

> [!hint]- Hint 2
> 选 $G/\mathfrak g$ 的代表 $r(x)$，写 $x=r(x)h(x)$。对 cocycle $c:\mathfrak g\to A$，令 $t(\sigma,x)=r(\sigma x)^{-1}\sigma r(x)$。

> [!hint]- Hint 3
> 逆构造为 $z_c(\sigma)(x)=c(t(\sigma,x))^{h(x)}$。证明两个构造在 cohomology 上互逆，必须追踪 coboundary。

## Solution

> [!success]- Independent derivation
> 按源书本节定义，记 $I=\operatorname{Ind}_G^{\mathfrak g}(A)$，其元素是全部函数 $f:G\to A$，满足 $f(xh)=f(x)^h$；右作用为 $f^\sigma(x)=f(\sigma x)$。采用乘法的交换模块与右 cocycle 约定。
>
> **1. 评价映射。** 对 $z\in Z^1(G,I)$，定义 $c(h)=z(h)(1)$。因
> $$
> c(hk)=z(h)(k)z(k)(1)=c(h)^k c(k),
> $$
> 它是 $\mathfrak g$-cocycle。若 $z(\sigma)=b^{\sigma-1}$，则 $c(h)=b(h)/b(1)=b(1)^{h-1}$，所以评价诱导 $H^1(G,I)\to H^1(\mathfrak g,A)$。
>
> **2. 逆 cocycle 构造。** 为每个左陪集选代表 $r$，含 $1$，写 $x=r(x)h(x)$。令
> $$
> t(\sigma,x)=r(\sigma x)^{-1}\sigma r(x)\in\mathfrak g,\qquad
> z_c(\sigma)(x)=c(t(\sigma,x))^{h(x)}.
> $$
> 因 $r(xh)=r(x)$、$h(xh)=h(x)h$，$z_c(\sigma)$ 满足 induced-function 关系。又
> $$
> t(\sigma\tau,x)=t(\sigma,\tau x)t(\tau,x),\qquad
> h(\tau x)=t(\tau,x)h(x).
> $$
> 代入 $c$ 的 cocycle 式，得到 $z_c(\sigma\tau)(x)=z_c(\sigma)(\tau x)z_c(\tau)(x)$，即 $z_c$ 为 $G$-cocycle。对 $h\in\mathfrak g$、$x=1$，有 $t(h,1)=h$，故评价恢复 $c$。
>
> 若 $c(h)=a^{h-1}$，取 induced 函数 $b(x)=a^{h(x)}$，则
> $$
> z_c(\sigma)(x)=a^{h(\sigma x)}/a^{h(x)}=b^{\sigma-1}(x).
> $$
> 因此逆构造在 cohomology 上良定义。
>
> **3. 评价的核为零。** 对一般 $z$，定义 $b(r)=z(r)(1)$，再按 induced 关系延拓 $b(rh)=b(r)^h$。以 $z'=z/b^{\sigma-1}$ 归一化，则 $z'(r)(1)=1$，并且评价到 $\mathfrak g$ 的 cocycle 不变。写 $x=r(x)h(x)$，cocycle 式给 $z'(x)(1)=c(h(x))$。因此
> $$
> z'(\sigma)(x)=\frac{z'(\sigma x)(1)}{z'(x)(1)}
> =\frac{c(h(\sigma x))}{c(h(x))}=c(t(\sigma,x))^{h(x)}=z_c(\sigma)(x).
> $$
> 所以每个类都等于其评价再逆构造的类，两个映射互逆。所得同构不依赖代表元选择，因为评价映射本身没有选择。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology and Shapiro Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Group Modules]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 5, printed p. 315, PDF p. 334]. 独立显式 cocycle 与 coboundary 证明。Ind 的定义在本节 printed pp. 312–313 / PDF pp. 331–332；它是全函数 coinduction，不能误换成无限指数时的有限支撑 induction。
- **Boundary:** 此证明实际不要求 $\mathfrak g$ 正规；题面较强的正规假设当然足够。这里讨论抽象群；若转为连续 profinite cohomology，需连同 continuous coinduction 的拓扑条件一起重述。
