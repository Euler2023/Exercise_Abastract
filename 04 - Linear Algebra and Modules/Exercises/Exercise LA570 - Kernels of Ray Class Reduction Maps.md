---
title: 'Exercise LA570: Kernels of Ray Class Reduction Maps'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 14, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-14
created: '2026-10-23'
---

# Exercise LA570: Kernels of Ray Class Reduction Maps

## Problem Statement

> [!question] Neukirch VI.1.14
> Compute the kernels of $Cl_K^{\mathfrak m}\to Cl_K$ and $Cl_K^{\mathfrak m}\to Cl_K^{\mathfrak m'}$ for $\mathfrak m'\mid\mathfrak m$.

## Hints

> [!hint]- 提示
> For the ordinary class group keep both finite residues and signs. For a smaller modulus use the kernel of the residue reduction map and divide by the appropriate positive units.

> [!hint]- Stronger hint
> The first kernel retains both residue units and real signs modulo global units; the second is ker(rho) modulo positive units congruent to 1 at the smaller modulus.

## Solution

> [!success]- 独立推导
> 记 $r_1$ 为实位置数，$E=\mathcal O_K^\times$，$E_{\mathfrak m'}^+=\{\epsilon\in E:\epsilon>0,\ \epsilon\equiv1\bmod\mathfrak m'\}$。第一核为
> $$
> \ker(\mathrm{Cl}^\mathfrak m\to\mathrm{Cl})
> \cong
> \frac{(\mathcal O_K/\mathfrak m)^\times\times\{\pm1\}^{r_1}}
> {\{(\bar\epsilon,(\operatorname{sgn}\sigma(\epsilon))_\sigma):\epsilon\in E\}}.
> $$
> 证明：每个落在普通类群单位元的射线类由某个主理想 $(a)$ 表示。$a$ 的有限剩余和实符号记录它模射线主理想的差异；生成元改为 $\epsilon a$ 正好除去上列单位像。弱逼近与中国剩余定理实现任意剩余和符号组合，因此没有其他限制。
> 令 $\rho:(\mathcal O_K/\mathfrak m)^\times\to(\mathcal O_K/\mathfrak m')^\times$ 为约化，$R=\ker\rho$。则第二核为
> $$
> \ker(\mathrm{Cl}^\mathfrak m\to\mathrm{Cl}^{\mathfrak m'})
> \cong R/\operatorname{im}(E_{\mathfrak m'}^+\to R).
> $$
> 确实，核中的理想可写为 $(a)$，其中 $a$ 总正且 $a\equiv1\bmod\mathfrak m'$；其模 $\mathfrak m$ 类在 $R$。两生成元相差 $E_{\mathfrak m'}^+$，而模 $\mathfrak m$ 同余 $1$ 的差异给平凡射线类。前题的正提升构造保证每个 $R$ 元实现。也可将单位像写成 $E_{\mathfrak m'}^+/E_\mathfrak m^+$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 14, printed p.368, PDF p.387]。解答为独立推导。第一式中的 $\mathrm{Cl}_K$ 是普通理想类群；$\mathrm{Cl}_K^1$ 是窄类群，两者不能混用。
