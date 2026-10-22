---
title: 'Exercise AG52: Mixed Real and Profinite Powers of a Positive Unit'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 5, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-5
created: '2026-10-23'
---

# Exercise AG52: Mixed Real and Profinite Powers of a Positive Unit

## Problem Statement

> [!question] Neukirch VI.1.5
> Let $\epsilon\in\mathcal O_K^*$ be totally positive, i.e., $\epsilon\in I_K^1$. Extend the exponentiation $\mathbb Z\to I_K^1$, $n\mapsto\epsilon^n$, by continuity to an exponentiation $\widehat{\mathbb Z}\times\mathbb R\to I_K^1=I_f^1\times I_\infty^1$, $\epsilon\mapsto\epsilon^\lambda$, in such a way that $\mathfrak N(\epsilon^\lambda)=1$.

## Hints

> [!hint]- Hint 1 — first step
> Choose the finite-component exponent and the real-parameter exponent on the infinite components separately.

> [!hint]- Hint 2 — proof route
> Use the profinite exponent on the finite components. On every infinite component choose a logarithm, using the real logarithm at real places.

## Solution

> [!success]- 独立推导
> 固定每个复嵌入下 $\epsilon_v$ 的一个复对数 $L_v$；实嵌入因总正可取 $L_v=\log\epsilon_v\in\mathbb R$。对 $\lambda=(x,t)$ 定义有限分量为 $\epsilon_v^x$（前题的连续延拓），无限分量为 $\exp(tL_v)$。
> 这是从加法群 $\widehat{\mathbb Z}\times\mathbb R$ 到 $I_K^1$ 的连续同态；对角整数 $(n,n)$ 的像为通常主 idèle $\epsilon^n$。有限分量均为单位，故它们绝对值为 $1$；无限分量给出
> $$
> \mathfrak N(\epsilon^{(x,t)})
>  =\prod_{v\mid\infty}|\epsilon_v|_v^t
>  =\left(\prod_v|\epsilon|_v\right)^t=1.
> $$
> 末步使用数域的乘积公式。复对数的不同选择改变实参数方向的复相位；这不影响存在性与范数结论。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

题面已与原书 200 dpi 页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 5, printed p. 367, PDF p. 386]。解答为本库独立推导，引用的输入不等于原书已解本题。这是连续延拓的存在性构造；从稠密性不能推出唯一性，因为对角 $\mathbb Z$ 在 $\widehat{\mathbb Z}\times\mathbb R$ 中并不稠密。
