---
title: 'Exercise LA572: Trace on the Adele Algebra'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 5, printed p. 373, PDF p. 392
source_refs:
- S4/ch-VI/sec-2/ex-5
created: '2026-10-23'
---

# Exercise LA572: Trace on the Adele Algebra

## Problem Statement

> [!question] Neukirch VI.2.5
> Define the trace $Tr_{L|K}:\mathbb A_L\to\mathbb A_K$ by $Tr_{L|K}(\alpha)={}$trace of the endomorphism $x\mapsto\alpha x$ of the $\mathbb A_K$-algebra $\mathbb A_L$, and show:
> (i) $Tr_{L|K}(\alpha)_{\mathfrak p}=\sum_{\mathfrak P\mid\mathfrak p}Tr_{L_{\mathfrak P}|K_{\mathfrak p}}(\alpha_{\mathfrak P})$.
> (ii) For a tower of fields $K\subseteq L\subseteq M$, one has $Tr_{M|K}=Tr_{L|K}\circ Tr_{M|L}$.
> (iii) If $L|K$ is embedded into the Galois extension $M|K$, and if $G=G(M|K)$ and $H=G(M|L)$, then one has for $\alpha\in\mathbb A_L$, $Tr_{L|K}(\alpha)=\sum_{\sigma\in G/H}\sigma\alpha$.
> (iv) $Tr_{L|K}(\alpha)=[L:K]\alpha$ for $\alpha\in\mathbb A_K$.
> (v) The trace of a principal adèle $x\in L$ is the principal adèle in $\mathbb A_K$ defined by the usual trace $Tr_{L|K}(x)$.

## Hints

> [!hint]- 提示
> Choose a $K$-basis of $L$ and use the same multiplication matrices after tensoring with $\mathbb A_K$.

> [!hint]- Stronger hint
> Use a product basis for the tower and trace the diagonal multiplication blocks; scalar and principal adeles then follow directly.

## Solution

> [!success]- 独立推导
> 前题的“几乎处处整基”使基变换给 $\mathbb A_L\cong L\otimes_K\mathbb A_K$，为秩 $[L:K]$ 的自由 $\mathbb A_K$-模。因此乘法矩阵迹定义良好。
> (i) 在 $v$ 处分解 $L\otimes_KK_v=\prod_{w\mid v}L_w$。乘法算子成为分块对角矩阵，迹为各块迹之和，即所需公式；整元的局部迹为整，所以结果确实是 adèle。
> (ii) 取 $L/K$ 的基 $b_i$ 和 $M/L$ 的基 $c_j$，则 $b_ic_j$ 是 $M/K$ 的基。按 $c_j$ 先取对角块迹，再按 $b_i$ 取迹，给塔式公式。
> (iii) 数域扩张可分。在 $M$ 上，乘法矩阵经所有 $K$-嵌入对角化，其特征值为 $\sigma\alpha$，嵌入对应 $G/H$。迹因此为各共轭之和；这可逐局部因子验证，故对 adèle 同样成立。
> (iv) $\alpha$ 来自基代数时，乘法矩阵为 $\alpha I_{[L:K]}$，迹为 $[L:K]\alpha$。
> (v) 对角 $x\in L$ 的乘法矩阵原来就在 $M_n(K)$ 中；扩标量后的迹是 $\operatorname{Tr}_{L/K}(x)\in K$ 的对角嵌入。五项均证。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Products]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已与原书图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 5, printed p.373, PDF p.392]。解答为独立推导。
