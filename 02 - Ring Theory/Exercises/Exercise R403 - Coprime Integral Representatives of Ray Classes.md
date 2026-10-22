---
title: 'Exercise R403: Coprime Integral Representatives of Ray Classes'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 11, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-11
created: '2026-10-23'
---

# Exercise R403: Coprime Integral Representatives of Ray Classes

## Problem Statement

> [!question] Neukirch VI.1.11
> Every ideal class of the ray class group $Cl_K^{\mathfrak m}$ can be represented by an integral ideal which is prime to an arbitrary fixed ideal.

## Hints

> [!hint]- 提示
> Multiply a given ideal by a totally positive principal ideal congruent to $1$ modulo the modulus. Choose the generator inside the inverse ideal using the Chinese remainder theorem.

> [!hint]- Stronger hint
> Take x in the inverse fractional ideal, prescribe nonzero classes at the fixed primes, then add a large positive rational integer in the homogeneous ideal.

## Solution

> [!success]- 独立推导
> 取给定射线类代表分式理想 $\mathfrak b$，且 $\mathfrak b$ 与 $\mathfrak m$ 互素。设固定非零整理想为 $\mathfrak a$。要找 $x\in K^\times$，满足 $x\equiv1\pmod{\mathfrak m}$、所有实嵌入下 $x>0$，并使 $(x)\mathfrak b$ 整且与 $\mathfrak a$ 互素。
> 取格理想 $L=\mathfrak b^{-1}$。在 $\mathfrak p\mid\mathfrak a$ 处要求 $x$ 在 $L_\mathfrak p/\mathfrak pL_\mathfrak p$ 中非零；这等价于 $v_\mathfrak p(x)=-v_\mathfrak p(\mathfrak b)$。在 $\mathfrak p\mid\mathfrak m$ 处，$\mathfrak b_\mathfrak p=\mathcal O_\mathfrak p$，故可要求 $x\equiv1$。这些是两两兼容的有限剩余条件，由理想的中国剩余定理得到 $x_0\in L$。
> 它们的齐次解包含某个非零整理想 $\mathfrak c\subseteq L$。取正整数 $N\in\mathfrak c$，则 $x_0+kN$ 在每个实嵌入下随 $k\to+\infty$ 变正，同时保持全部有限同余条件。取这种 $x$。于是 $(x)\mathfrak b$ 是整理想，与 $\mathfrak a$ 互素，且与 $\mathfrak b$ 同射线类。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 11, printed p.368, PDF p.387]。解答为独立推导。
