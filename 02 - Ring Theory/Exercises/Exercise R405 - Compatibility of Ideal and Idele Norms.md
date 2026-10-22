---
title: 'Exercise R405: Compatibility of Ideal and Idele Norms'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 3, printed p. 373, PDF p. 392
source_refs:
- S4/ch-VI/sec-2/ex-3
created: '2026-10-23'
---

# Exercise R405: Compatibility of Ideal and Idele Norms

## Problem Statement

> [!question] Neukirch VI.2.3
> The correspondence between idèles and ideals, $\alpha\mapsto(\alpha)$, satisfies the following rule, in the case of a Galois extension $L|K$,
> $$
> (N_{L|K}(\alpha))=N_{L|K}((\alpha)).
> $$
> (For the norm on ideals, see chap. III, §1.)

## Hints

> [!hint]- 提示
> Compare the exponent of each prime of $K$ on both sides.

> [!hint]- Stronger hint
> Both exponents at p are the sum over P above p of f(P/p) times v_P(alpha_P).

## Solution

> [!success]- 独立推导
> 对每个有限素点 $\mathfrak p$，局部范数赋值公式为
> $$
> v_\mathfrak p(N_{L_\mathfrak P/K_\mathfrak p}x)
> =f_{\mathfrak P/\mathfrak p}\,v_\mathfrak P(x).
> $$
> 因此左端在 $\mathfrak p$ 处的指数为 $\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P/\mathfrak p}v_\mathfrak P(\alpha_\mathfrak P)$。另一方面理想范数满足 $N(\mathfrak P)=\mathfrak p^{f_{\mathfrak P/\mathfrak p}}$，故
> $$
> N((\alpha))
> =N\left(\prod_\mathfrak P\mathfrak P^{v_\mathfrak P(\alpha_\mathfrak P)}\right)
> =\prod_\mathfrak p\mathfrak p^{\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P/\mathfrak p}v_\mathfrak P(\alpha_\mathfrak P)}.
> $$
> 所有素理想指数一致，证毕。实际上该计算不需要 Galois 假设。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已与原书图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 3, printed p.373, PDF p.392]。解答为独立推导。
