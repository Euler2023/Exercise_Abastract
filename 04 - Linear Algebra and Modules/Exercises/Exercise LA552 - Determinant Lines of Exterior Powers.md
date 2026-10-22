---
title: 'Exercise LA552: Determinant Lines of Exterior Powers'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 4, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-4
created: '2026-10-23'
---

# Exercise LA552: Determinant Lines of Exterior Powers

## Problem Statement

> [!question] Neukirch III.4.4
> If $M$ is a projective metrized $\mathfrak o$-module of rank $n$, and $p\ge0$, then there is a canonical isometry
> $$
> \det\left(\bigwedge^pM\right)\simeq(\det M)^{\otimes\binom{n-1}{p-1}}.
> $$

## Hints

> [!hint]- Hint 1
> 在局部基 $e_1,\ldots,e_n$ 上，对所有递增 $p$ 元子集 $I$ 按字典序排列 $e_I$，再取它们的总外积。每个 $e_i$ 共出现 $\binom{n-1}{p-1}$ 次。

> [!hint]- Hint 2
> 不仅要数对角矩阵的指数，还要证明换基恒等式 $\det(\bigwedge^pA)=(\det A)^{\binom{n-1}{p-1}}$。可对初等剪切及对角矩阵计算后作多项式延拓。

> [!hint]- Hint 3
> 外幂基的 Gram 矩阵正是原 Gram 矩阵的 compound matrix；上述行列式恒等式同时给出等距性。

## Solution

> [!success]- Independent derivation
> 先设 $n\ge1$、$1\le p\le n$，记 $c=\binom{n-1}{p-1}$、$r=\binom np$。在 $M$ 的局部基 $e_1,\ldots,e_n$ 上，令 $e_I=e_{i_1}\wedge\cdots\wedge e_{i_p}$，所有 $p$ 元递增子集 $I$ 按字典序排列，定义
> $$
> \bigwedge_{|I|=p}e_I\longmapsto(e_1\wedge\cdots\wedge e_n)^{\otimes c}.
> $$
>
> **1. 证明换基行列式恒等式。** 对初等剪切矩阵 $E_{ab}(t)$，$\bigwedge^pE_{ab}(t)$ 只把含 $b$ 不含 $a$ 的基向量加上对应替换 $b$ 为 $a$ 的基向量的倍数；相反方向的替换不发生。将这些基成对排列后是行列式 $1$ 的剪切块，故其行列式为 $1$。对只缩放第 $a$ 个坐标的对角矩阵 $D_a(t)$，恰有 $c$ 个 $p$ 元子集含 $a$，于是 $\det(\bigwedge^pD_a(t))=t^c$。
>
> 在通用矩阵的有理函数域中，Gaussian 消元把可逆矩阵写为剪切矩阵、对角矩阵及可由它们表达的置换矩阵之积，故
> $$
> \det(\bigwedge^pA)=(\det A)^c.
> $$
> 两边都是矩阵元素的整系数多项式；它们在通用有理函数域相同，故在整系数多项式环中已相同，特化到任意交换环仍成立。
>
> **2. 拼接。** 局部基改变为 $A$ 时，左端生成元乘以 $\det(\bigwedge^pA)$，右端生成元乘以 $(\det A)^c$，由第一步二者相同。因此定义在局部重叠上相容，拼成不依赖基的全局同构。
>
> **3. 等距。** 设某嵌入分量的 Gram 矩阵为 $H$。由外幂度量的定义，$e_I$ 的 Gram 矩阵是由 $H$ 的所有 $p\times p$ 子式组成的 compound matrix $C_p(H)$，也就是 $\bigwedge^pH$ 的矩阵。因此
> $$
> \left\|\bigwedge_{|I|=p}e_I\right\|^2=\det C_p(H)=(\det H)^c
> =\left\|(e_1\wedge\cdots\wedge e_n)^{\otimes c}\right\|^2.
> $$
> 在所有嵌入分量都等距，且定义在 $\mathfrak o$ 上与 $F$ 交换，故得到所求 canonical isometry。外幂及 determinant 度量输入见 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed pp. 228,231, PDF pp. 247,250]。
>
> **4. 边界约定。** $p=0$ 时 $\bigwedge^0M=\mathfrak o$，取 $\binom{n-1}{-1}=0$，两端均为单位线。$p>n$ 时外幂为零、其 determinant 为单位线，取 $\binom{n-1}{p-1}=0$。若 $n=0$，则 $M=0$，所有相关 determinant 均为单位线；此时不必对负上标组合数赋予通常并不存在的含义，直接以单位线等距表达零秩结论。
>
> 例如 $n=3,p=2$，有基 $e_{12},e_{13},e_{23}$，每个原基向量出现两次，$c=2$；若 $H=\operatorname{diag}(a,b,d)$，外幂 Gram 对角元为 $ab,ad,bd$，其积 $(abd)^2$，可直接核对。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 4, printed p. 233, PDF p. 252]. 独立换基与 Gram 证明；原图明确写 $p\ge0$，OCR 丢失等号。
- **Boundary conventions:** 印刷公式未说明 $p=0$ 的负下标组合数或零秩的负上标；解答明确给出范围外组合数为零及 $n=0$ 的单位线解释。这是补足记号边界，并非声称原公式在未定义记号下已经完备。
