---
title: 'Exercise AG54: The Kernel of the Connected Idele Parametrization'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 7, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-7
created: '2026-10-23'
---

# Exercise AG54: The Kernel of the Connected Idele Parametrization

## Problem Statement

> [!question] Neukirch VI.1.7
> Sending
> $$
> (\lambda_1,\ldots,\lambda_t,y_1,\ldots,y_s)\longmapsto\epsilon_1^{\lambda_1}\cdots\epsilon_t^{\lambda_t}\phi_1(y_1)\cdots\phi_s(y_s)
> $$
> defines a continuous homomorphism
> $$
> f:(\widehat{\mathbb Z}\times\mathbb R)^t\times\mathbb R^s\longrightarrow C_K^0
> $$
> into the group $C_K^0=\{[\alpha]\in C_K\mid\mathfrak N([\alpha])=1\}$, with kernel $\mathbb Z^t\times\mathbb Z^s$.

> [!note] 前题的根单位约定
> 若 $K$ 全虚，沿用 Exercise 6 的可见修正：$\epsilon_i$ 是总正单位模根单位后的自由基的提升。有限根单位由复相位处理，不额外加入 profinite 参数。

## Hints

> [!hint]- Hint 1 — first step
> A parameter lies in the kernel of the class-group map exactly when its idèle is principal.

> [!hint]- Hint 2 — proof route
> The map to the quotient vanishes precisely for principal idèles; invoke the preceding parametrization result.

## Solution

> [!success]- 独立推导
> 各幂映射和 $\phi_j$ 连续且保持乘法，有限乘积后再投影 $I_K\to C_K$，给所需连续同态。前题 (i) 证明像的范数恒为 $1$，故像落在这里用 $C_K^0$ 表示的范数一子群。
> 参数落在核中，当且仅当所得 idèle 是主 idèle。前题 (ii) 精确刻画为：每个 $\lambda_i=(x_i,t_i)$ 是 $(n_i,n_i)$，且所有 $y_j$ 是整数。因此
> $$
> \ker f=\operatorname{diag}(\mathbb Z)^t\times\mathbb Z^s.
> $$
> 注意本节 $C_K^0$ 只表示范数一子群；它一般不等于单位元连通分支，后者记为 $D_K^0$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

题面已与原书 200 dpi 页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 7, printed p. 367, PDF p. 386]。解答为本库独立推导，引用的输入不等于原书已解本题。
