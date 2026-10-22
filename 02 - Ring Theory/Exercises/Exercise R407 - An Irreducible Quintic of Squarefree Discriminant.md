---
title: 'Exercise R407: An Irreducible Quintic of Squarefree Discriminant'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 2, printed p. 413, PDF p. 432
source_refs:
- S4/ch-VI/sec-7/ex-2
created: '2026-10-23'
---

# Exercise R407: An Irreducible Quintic of Squarefree Discriminant

## Problem Statement

> [!question] Neukirch VI.7.2
> **Source setup for Exercises 2–6:** The following exercises 2–6 concern a non-abelian example of E. Artin.
> The polynomial $f(X)=X^5-X+1$ is irreducible. The discriminant of a root $\alpha$ (i.e., the discriminant of $\mathbb Z[\alpha]$) is $d=19\cdot151$.
> **Printed hint:** The discriminant of a root of $X^5+aX+b$ is $5^5b^4+2^8a^5$.

## Hints

> [!hint]- 提示
> Reduce modulo $3$ and test the three irreducible quadratics. Compute the discriminant as a resultant with the derivative.

> [!hint]- Stronger hint
> No roots or irreducible quadratic divisors modulo 3 prove irreducibility; evaluate the resultant against 5X^4+a for the discriminant.

## Solution

> [!success]- 独立推导
> 模 $3$ 时，$f(0)=f(1)=f(2)=1$，无一次因子。$\mathbb F_3[X]$ 的首一不可约二次多项式只有
> $$
> X^2+1,\quad X^2+X+2,\quad X^2+2X+2.
> $$
> $X^5-X+1$ 除以它们的余式分别为 $1,X+1,X+1$，均非零。五次多项式若可约，必有一次或二次不可约因子，故模 $3$ 不可约；Gauss 引理给其在 $\mathbb Q$ 上不可约。
> 设 $F=X^5+aX+b$，$F'=5X^4+a$。对 $F'$ 的四个根 $\rho$，$F(\rho)=b+(4a/5)\rho$，所以
> $$
> \operatorname{disc}F
> =\operatorname{Res}(F,F')
> =5^5\prod_{\rho^4=-a/5}\left(b+\frac{4a}{5}\rho\right)
> =5^5b^4+4^4a^5.
> $$
> 取 $a=-1,b=1$ 得 $3125-256=2869=19\cdot151$，两个因子均素，故判别式平方自由。
> 已运行符号运算独立复核：三个二次余式、判别式及 $2869$ 的素因子分解均与上述手算一致。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[02 - Ring Theory/Concepts/Irreducible Polynomials|Irreducibility]]

## Notes

题面已与原书 200 dpi 图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 2, printed p.413, PDF p.432]。解答为独立推导。计算仅复核这些有限代数数据；不可约性论证仍由文中的有限域因子检验给出。
