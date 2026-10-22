---
title: 'Exercise AG53: Principal Ideles in the Mixed Unit Parametrization'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 6, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-6
created: '2026-10-23'
---

# Exercise AG53: Principal Ideles in the Mixed Unit Parametrization

## Problem Statement

> [!question] Neukirch VI.1.6
> Let $\mathfrak p_1,\ldots,\mathfrak p_s$ be the complex primes of $K$. For $y\in\mathbb R$, let $\phi_k(y)$ be the idèle having component $e^{2\pi iy}$ at $\mathfrak p_k$, and components $1$ at all other places. Let $\epsilon_1,\ldots,\epsilon_t$ be a $\mathbb Z$-basis of the group of totally positive units of $K$.
> (i) The idèles of the form
> $$
> \alpha=\epsilon_1^{\lambda_1}\cdots\epsilon_t^{\lambda_t}\phi_1(y_1)\cdots\phi_s(y_s),\qquad\lambda_i\in\widehat{\mathbb Z}\times\mathbb R,\quad y_j\in\mathbb R,
> $$
> form a group, and have absolute norm $\mathfrak N(\alpha)=1$.
> (ii) $\alpha$ is a principal ideal if and only if $\lambda_i\in\mathbb Z\subseteq\widehat{\mathbb Z}\times\mathbb R$ and $y_j\in\mathbb Z\subseteq\mathbb R$.

> [!warning] Source issue / 自由基与主 idèle
> 全虚数域的“总正单位群”含全部根单位，通常没有字面意义的 $\mathbb Z$-基；本题及 Exercises 7–10 应选其模有限扭子群后的自由基的提升。原文 (ii) 的 “principal ideal”在此 idèle 参数化中应读作 “principal idèle”。下文保留原题并对该修正版完整证明。

## Hints

> [!hint]- Hint 1 — first step
> Write each mixed parameter as $\lambda_i=(x_i,t_i)$ and compare the finite components of a principal idèle first.

> [!hint]- Hint 2 — proof route
> Use finite components first, logarithms of absolute values second, and complex phases last. Separate roots of unity if the field has no real embeddings.

## Solution

> [!success]- 独立推导
> **记号补足。** 若 $K$ 全虚，总正单位群含根单位而不是自由群；应将“$\mathbb Z$-basis”解释为模其有限扭子群后的自由部分的一组提升。若有实嵌入，总正根单位仅为 $1$。
> (i) 每个参数方向都是连续同态，所以这些 idèle 构成子群。单位参数的范数由前题为 $1$，$\phi_k(y)$ 的绝对值也为 $1$，故乘积范数为 $1$。
> (ii) 若参数均为对角整数且 $y_j$ 整，则 $\alpha=\prod_i\epsilon_i^{n_i}$ 主。反之设 $\alpha$ 主，对应 $a\in K^\times$。有限分量为单位，实分量正，故 $a$ 是总正单位，写为 $\zeta\prod_i\epsilon_i^{n_i}$，$\zeta$ 为有限根单位。记 $\lambda_i=(x_i,t_i)$。有限分量给 $\prod_i\epsilon_i^{x_i-n_i}=\zeta$。设 $\zeta$ 阶为 $w$，取 $w$ 次幂并用前题的 profinite 独立性，得 $w(x_i-n_i)=0$，于是 $x_i=n_i$，再得 $\zeta=1$。
> 比较无限分量绝对值，得到
> $$
> \sum_i(t_i-n_i)(\log|\epsilon_i|_v)_{v\mid\infty}=0.
> $$
> Dirichlet 单位定理的对数向量线性独立性迫使 $t_i=n_i$。最后除去这些单位后，各复分量为 $e^{2\pi iy_j}=1$，故 $y_j\in\mathbb Z$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

题面已与原书 200 dpi 页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 6, printed p. 367, PDF p. 386]。解答为本库独立推导，引用的输入不等于原书已解本题。原文 (ii) 的“principal ideal”在 idèle 语境解释为 principal idèle。全虚域的根单位须按解答显式分离。
