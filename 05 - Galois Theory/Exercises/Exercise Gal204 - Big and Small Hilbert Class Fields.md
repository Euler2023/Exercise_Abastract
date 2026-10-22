---
title: 'Exercise Gal204: Big and Small Hilbert Class Fields'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 1, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-1
created: '2026-10-23'
---

# Exercise Gal204: Big and Small Hilbert Class Fields

## Problem Statement

> [!question] Neukirch VI.6.1
> Let $K^1|K$ be the big, and $H|K$ the small Hilbert class field. Then $G(K^1|H)\simeq(\mathbb Z/2\mathbb Z)^{r-t}$, where $r$ is the number of real places, and $2^t=(\mathfrak o^*:\mathfrak o_+^*)$.

## Hints

> [!hint]- 提示
> The big and small class fields correspond to the narrow and ordinary class groups. Apply the sign exact sequence.

> [!hint]- Stronger hint
> The kernel of the narrow-to-ordinary class map is the real sign group divided by the signs of units.

## Solution

> [!success]- 独立推导
> 本书的大 Hilbert 类域允许实位置复化，其 Galois 群为窄类群 $\mathrm{Cl}_K^1$；小 Hilbert 类域要求实位置完全分裂，对应普通类群 $\mathrm{Cl}_K$。两者包含关系为 $H\subseteq K^1$。
> 原书 VI.(1.11), printed p.366/PDF385 的正合列为
> $$
> 1\to E/E_+\to\{\pm1\}^r\to\mathrm{Cl}_K^1\to\mathrm{Cl}_K\to1.
> $$
> 因此限制映射的核，也就是 $G(K^1/H)$，为 $\{\pm1\}^r/\operatorname{sgn}E$。它是 $\mathbb F_2$-向量空间，维数 $r-t$，得到所求同构。$r=0$ 时 $t=0$，两个 Hilbert 类域相同。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 1, printed p.404, PDF p.423]。解答为独立推导；外部输入与本题推导分开标明。
