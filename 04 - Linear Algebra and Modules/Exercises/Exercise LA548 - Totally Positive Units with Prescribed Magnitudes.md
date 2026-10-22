---
title: 'Exercise LA548: Totally Positive Units with Prescribed Magnitudes'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 2, printed p. 193, PDF p. 212
source_refs:
- S4/ch-III/sec-1/ex-2
created: '2026-10-23'
---

# Exercise LA548: Totally Positive Units with Prescribed Magnitudes

## Problem Statement

> [!question] Neukirch III.1.2
> Let $K$ be totally real, i.e., $K_{\mathfrak p}=\mathbb R$ for all $\mathfrak p\mid\infty$. Let $T$ be a proper nonempty subset of $\operatorname{Hom}(K,\mathbb R)$. Then there exists a unit $\varepsilon$ of $K$ satisfying $\tau\varepsilon>1$ for $\tau\in S$ and $0<\tau\varepsilon<1$ for $\tau\notin S$.

> [!warning] Source issue
> 原书先定义子集 $T$，结论却使用未定义的 $S$。这里保留印刷文本；解答将 $S$ 解释为 $T$。这是符号修正，不能静默把原文改写为已经一致的题面。

## Hints

> [!hint]- Hint 1
> 把子集符号统一解释为 $T$。单位的对数构成 $H=\{(x_\tau):\sum x_\tau=0\}$ 中的完备格。

> [!hint]- Hint 2
> 取和为零、在 $T$ 上严格正、在其补集上严格负的向量 $v$。放大到 $Nv$，再用有界基本域选距离 $Nv$ 有界的格点。

> [!hint]- Hint 3
> 平方所得单位，使每个实嵌入值为正，而不改变对数坐标的严格符号。

## Solution

> [!success]- Independent derivation
> 按警告中的解释令 $S=T$。写 $n=[K:\mathbb Q]$、$q=|T|$，则 $1\le q\le n-1$。设
> $$
> v_\tau=\begin{cases}n-q,&\tau\in T,\\-q,&\tau\notin T.\end{cases}
> $$
> 有 $\sum_\tau v_\tau=q(n-q)-(n-q)q=0$。Dirichlet 单位格定理给出
> $$
> \Lambda=\{(\log|\tau u|)_\tau:u\in\mathcal O_K^\times\}\subset H
> $$
> 是完备格；该输入及其 trace-zero 解释在 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.11), printed p. 191, PDF p. 210] 重新陈述。选 $\Lambda$ 的有界基本平行多面体，取 $C$ 使其中每个坐标的绝对值均小于 $C$。因此对每个实数 $N>0$ 都存在 $\lambda_N\in\Lambda$，满足
> $$
> |(\lambda_N)_\tau-Nv_\tau|<C\quad\text{对所有 }\tau.
> $$
> 取 $N\min(q,n-q)>C$，则 $(\lambda_N)_\tau>0$ 在 $T$ 上，且 $(\lambda_N)_\tau<0$ 在其补集上。按 $\Lambda$ 的定义选单位 $u$ 对应此格点。令 $\varepsilon=u^2$，则
> $$
> \tau\varepsilon=(\tau u)^2>0,\qquad \log(\tau\varepsilon)=2\log|\tau u|.
> $$
> 故 $\tau\varepsilon>1$ 对 $\tau\in T$ 成立，$0<\tau\varepsilon<1$ 对 $\tau\notin T$ 成立。
>
> 例如 $K=\mathbb Q(\sqrt2)$，单位 $(1+\sqrt2)^2=3+2\sqrt2$ 的两个实嵌入值为 $3+2\sqrt2>1$、$3-2\sqrt2\in(0,1)$，可直接核对所需两种大小；取逆则交换两处。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet Unit Lattices]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 2, printed p. 193, PDF p. 212]. 独立格逼近证明；未把此习题当作已证定理。
- **Routing:** 核心是 trace-zero 超平面、完备格及有界基本域，沿用既有同类单位格习题的 linear-algebra 路由。
- **Comparison:** 本题与 I §7 Exercise 6 的大小方向相反；把子集换成其补集或取单位的逆即可相互转换，但仍是一源题一笔记。
