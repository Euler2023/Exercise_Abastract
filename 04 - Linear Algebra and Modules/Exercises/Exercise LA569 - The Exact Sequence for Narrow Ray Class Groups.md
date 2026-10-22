---
title: 'Exercise LA569: The Exact Sequence for Narrow Ray Class Groups'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 13, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-13
created: '2026-10-23'
---

# Exercise LA569: The Exact Sequence for Narrow Ray Class Groups

## Problem Statement

> [!question] Neukirch VI.1.13
> For every module $\mathfrak m$, one has an exact sequence
> $$
> 1\longrightarrow\mathfrak o_+^*/\mathfrak o_+^{\mathfrak m}\longrightarrow(\mathfrak o/\mathfrak m)^*\longrightarrow Cl_K^{\mathfrak m}\longrightarrow Cl_K^1\longrightarrow1,
> $$
> where $\mathfrak o_+^*$, resp. $\mathfrak o_+^{\mathfrak m}$, is the group of totally positive units of $\mathfrak o$, resp. of totally positive units $\equiv1\bmod\mathfrak m$.

## Hints

> [!hint]- 提示
> Lift a residue unit to a totally positive integer and send it to its principal ideal class. Check dependence on lifts before computing the kernel.

> [!hint]- Stronger hint
> Send a positive residue lift u to the ray class of (u). The kernel consists exactly of positive units modulo the ray-unit subgroup.

## Solution

> [!success]- 独立推导
> 此处遵守 Neukirch 的约定：每个射线模都附带所有实位置的正性条件，故 $\mathrm{Cl}_K^1$ 是窄理想类群。令 $E_+=\mathcal O_{K,+}^\times$，$E_\mathfrak m=E_+\cap(1+\mathfrak m)$。
> 由前题，每个 $\bar u\in(\mathcal O_K/\mathfrak m)^\times$ 可取总正提升 $u$。定义 $\bar u\mapsto[(u)]_\mathfrak m$。若 $u'$ 为另一总正提升，则 $u/u'$ 总正且同余 $1$，故两主理想同射线类；映射良定义且为同态。
> 其核恰为 $\operatorname{im}E_+$：若 $(u)$ 在射线群平凡，存在总正 $b\equiv1\pmod{\mathfrak m}$ 使 $(u)=(b)$，故 $u/b\in E_+$；反向直接成立。$E_+$ 到剩余单位群的核为 $E_\mathfrak m$，给左端单射。
> 忘掉有限同余条件的 $\mathrm{Cl}^\mathfrak m\to\mathrm{Cl}^1$ 满射，因为前题保证每个窄类有与 $\mathfrak m$ 互素的代表。其核由总正主理想生成，正好是中间映射的像。因此全序列正合。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 13, printed p.368, PDF p.387]。解答为独立推导。
