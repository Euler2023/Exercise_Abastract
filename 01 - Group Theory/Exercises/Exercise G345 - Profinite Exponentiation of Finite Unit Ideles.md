---
title: 'Exercise G345: Profinite Exponentiation of Finite Unit Ideles'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 3, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-3
created: '2026-10-23'
---

# Exercise G345: Profinite Exponentiation of Finite Unit Ideles

## Problem Statement

> [!question] Neukirch VI.1.3
> Write $I_K^1=I_f^1\times I_\infty^1$, with $I_f^1=\prod_{\mathfrak p\nmid\infty}U_{\mathfrak p}$, $I_\infty^1=\prod_{\mathfrak p\mid\infty}U_{\mathfrak p}$. Show that taking integer powers of idèles $\alpha\in I_f^1$ extends by continuity to exponentiation $\alpha^x$ with $x\in\widehat{\mathbb Z}$.

## Hints

> [!hint]- Hint 1 — first step
> First define the requested exponent in one finite quotient of the compact finite-unit group.

> [!hint]- Hint 2 — proof route
> Every finite quotient has a finite exponent. Pass to the inverse limit of the maps on these finite quotients.

## Solution

> [!success]- 独立推导
> 每个 $U_v=\mathcal O_v^\times$ 是有限群 $U_v/(1+\mathfrak p_v^r)$ 的逆极限，故 $I_f^1$ 是 profinite 群。给任意开正规子群 $N$，$\alpha N$ 在有限商内有某阶 $d_N$。定义
> $$
> \alpha^xN=(\alpha N)^{\,x\bmod d_N}.
> $$
> 若 $N'\subseteq N$，这些元素投影一致，故定义唯一的 $\alpha^x\in\varprojlim_N I_f^1/N=I_f^1$。每个有限商坐标仅依赖 $x$ 的有限同余类，因而映射连续。它在整数上就是通常幂；整数在 $\widehat{\mathbb Z}$ 稠密，故连续延拓唯一。逐个有限商计算得 $\alpha^{x+y}=\alpha^x\alpha^y$ 与 $(\alpha^x)^y=\alpha^{xy}$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已与原书 200 dpi 页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 3, printed p. 367, PDF p. 386]。解答为本库独立推导，引用的输入不等于原书已解本题。
