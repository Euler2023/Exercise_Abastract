---
title: 'Exercise R404: Positive Coprime Lifts of Unit Residue Classes'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 12, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-12
created: '2026-10-23'
---

# Exercise R404: Positive Coprime Lifts of Unit Residue Classes

## Problem Statement

> [!question] Neukirch VI.1.12
> Let $\mathfrak o=\mathcal O_K$. Every class in $(\mathfrak o/\mathfrak m)^*$ can be represented by a totally positive number in $\mathfrak o$ which is prime to an arbitrary fixed ideal.

## Hints

> [!hint]- 提示
> At primes of the fixed ideal outside the modulus prescribe residue $1$; then add a sufficiently large positive rational integer in the common modulus.

> [!hint]- Stronger hint
> Use CRT modulo the finite modulus and the product of the remaining fixed primes; a positive integer in the combined modulus preserves every residue.

## Solution

> [!success]- 独立推导
> 取剩余单位类 $\bar u$，固定非零整理想 $\mathfrak a$。令 $\mathfrak a_0$ 为 $\mathfrak a$ 中不整除 $\mathfrak m$ 的素因子的乘积。由中国剩余定理可取 $u_0\in\mathcal O$ 使
> $$
> u_0\equiv u\pmod{\mathfrak m},\qquad u_0\equiv1\pmod{\mathfrak a_0}.
> $$
> 在同时整除 $\mathfrak a$ 与 $\mathfrak m$ 的素点，$\bar u$ 为单位已保证 $u_0$ 不被该素点整除；其余整除 $\mathfrak a$ 的素点由第二条件处理。
> 取正整数 $N\in\mathfrak m\mathfrak a_0$。对足够大的整数 $k$，$\sigma(u_0)+kN>0$ 对所有实嵌入 $\sigma$ 成立。因此 $u=u_0+kN$ 总正，保持原剩余类，且 $(u)$ 与 $\mathfrak a$ 互素。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 12, printed p.368, PDF p.387]。解答为独立推导。
