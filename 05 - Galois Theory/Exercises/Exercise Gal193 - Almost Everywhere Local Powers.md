---
title: 'Exercise Gal193: Almost Everywhere Local Powers'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 2, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-2
created: '2026-10-23'
---

# Exercise Gal193: Almost Everywhere Local Powers

## Problem Statement

> [!question] Neukirch VI.1.2
> Let $K$ be a number field, $m=2^\nu m'$ ($m'$ odd), and let $S$ be a finite set of primes. Let $a\in K^*$ and $a\in K_{\mathfrak p}^{*m}$, for all $\mathfrak p\notin S$. Show:
> (i) If $K(\zeta_{2^\nu})|K$ is cyclic, where $\zeta_{2^\nu}$ is a primitive $2^\nu$-th root of unity, then $a\in K^{*m}$.
> (ii) Otherwise one has at least that $a\in K^{*m/2}$.
> **Printed hint:** Use the following fact, proved in (3.8): if $L|K$ is a finite extension in which almost all prime ideals split completely, then $L=K$.

## Hints

> [!hint]- Hint 1 — first step
> Let the Galois group act on all roots of $X^m-a$ and translate the local-root hypothesis into a fixed-point condition.

> [!hint]- Hint 2 — proof route
> Study the affine action on the $m$ roots of $X^m-a$. Separate the prime-power components of $\mu_m$; only the noncyclic $2$-part can survive.

## Solution

> [!success]- 独立推导
> 取 $M=K(\mu_m,\alpha)$，$\alpha^m=a$。**引用输入：Čebotarev 定理的存在性部分**（Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, VII.§13, (13.4), printed p.545/PDF564）：每个共轭类在无穷多未分歧素点实现为 Frobenius。因为几乎处处 $X^m-a$ 有局部根，每个 $g\in G=\operatorname{Gal}(M/K)$ 在这些根中都有不动点。
> 写 $g(\alpha)=\zeta^{c(g)}\alpha$，$g(\zeta)=\zeta^{\chi(g)}$。有
> $$
> c(gh)=c(g)+\chi(g)c(h),\qquad c(g)\in(\chi(g)-1)(\mathbb Z/m\mathbb Z).
> $$
> 后一条件正是仿射置换有不动点。若 $\chi(g)=1$，则 $c(g)=0$，所以 $\ker\chi$ 固定 $\alpha$；因此 $M=K(\mu_m)$，且 $c$ 成为其阿贝尔群 $G$ 上的上循环。
> 对每个 $\ell^e\mid m$，若 $g$ 在 $\mu_{\ell^e}$ 上作用平凡，上式迫使 $c_\ell(g)=0$；故 $c_\ell$ 因子化到 $G$ 在 $(\mathbb Z/\ell^e)^\times$ 内的像。奇素数时这个像循环；若 $\ell=2$ 且题中循环条件成立，像也循环。对循环群生成元 $g$，局部条件给 $c_\ell(g)=(\chi(g)-1)b_\ell$，上循环恒等式便给每个元素同一余边界。合并 $b_\ell$ 后可调整 $\alpha$ 使它被 $G$ 固定，得 (i)。
> 在非循环的 $2$-部分，$(\mathbb Z/2^\nu)^\times=\langle-1\rangle\times\langle5\rangle$。其非循环子群包含 $-1$：若不含 $-1$，投影到循环商除掉 $\langle-1\rangle$ 后为单射，子群将循环。记作用为 $-1$ 的元素为 $\tau$。因 $c_2(\tau)\in2\mathbb Z/2^\nu$，调整根使 $c_2(\tau)=0$。由 $g\tau=\tau g$ 得 $2c_2(g)=0$。奇素数部分已可同时消去，故调整后的 $\alpha$ 满足 $g(\alpha^2)=\alpha^2$；于是 $\alpha^2\in K$，$a=(\alpha^2)^{m/2}$，证得 (ii)。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已与原书 200 dpi 页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 2, printed p. 367, PDF p. 386]。解答为本库独立推导，引用的输入不等于原书已解本题。使用本书后文已证明的 Čebotarev 存在性输入，未声称按原提示给出前向章节顺序的证明。
