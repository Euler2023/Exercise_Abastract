---
title: 'Exercise LA568: Congruence Independence of Global Units'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 4, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-4
created: '2026-10-23'
---

# Exercise LA568: Congruence Independence of Global Units

## Problem Statement

> [!question] Neukirch VI.1.4
> Let $\epsilon_1,\ldots,\epsilon_t\in\mathcal O_K^*$ be independent units. The images $\bar\epsilon_1,\ldots,\bar\epsilon_t$ in $I_f^1$ are then independent units with respect to the exponentiation with elements of $\widehat{\mathbb Z}$, i.e., any relation
> $$
> \bar\epsilon_1^{x_1}\cdots\bar\epsilon_t^{x_t}=1,\qquad x_i\in\widehat{\mathbb Z},
> $$
> implies $x_i=0$, $i=1,\ldots,t$.

## Hints

> [!hint]- Hint 1 — first step
> Reduce a proposed profinite relation modulo an arbitrary positive integer before using the independence of the original units.

> [!hint]- Hint 2 — proof route
> Approximate the exponents modulo $2n$ and apply the preceding exercise. Then use the integer matrix describing the units in a free unit basis.

## Solution

> [!success]- 独立推导
> 设 $E=\mathcal O_K^\times$，取自由商 $E/\mu(K)\cong\mathbb Z^r$ 的一组基。令 $B\in M_{r,t}(\mathbb Z)$ 的列为各 $\epsilon_i$ 在该基的坐标；独立性说 $B$ 的列在 $\mathbb Q$ 上独立。
> 给任意 $n\ge1$，选整数 $a_i\equiv x_i\pmod{2n\widehat{\mathbb Z}}$。从假设得 $u=\prod_i\epsilon_i^{a_i}$ 在每个有限 $K_v$ 中为 $2n$ 次幂，因为 $a_i-x_i=2ny_i$ 且局部有限单位群上可连续取幂。VI.§1 Exercise2 应用于指数 $2n$，得到 $u\in K^{\times n}$。若 $u=b^n$，则所有有限赋值 $v(b)=v(u)/n=0$，故 $b\in E$，从而 $Ba\in n\mathbb Z^r$。
> 于是 $Bx\equiv0\pmod n$ 对所有 $n$ 成立，$Bx=0$ 于 $\widehat{\mathbb Z}^r$。取有理左逆并清分母，存在整数矩阵 $C$ 和非零整数 $d$ 使 $CB=dI_t$，故 $dx=0$。$\widehat{\mathbb Z}=\prod_\ell\mathbb Z_\ell$ 无扭，故 $x=0$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Unit Lattices]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已与原书 200 dpi 页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 4, printed p. 367, PDF p. 386]。解答为本库独立推导，引用的输入不等于原书已解本题。这里“independent”指模根单位后的乘法独立；并不假定这些单位本身已经构成全单位群的一组基。
