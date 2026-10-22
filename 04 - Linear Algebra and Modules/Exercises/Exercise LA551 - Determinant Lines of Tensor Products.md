---
title: 'Exercise LA551: Determinant Lines of Tensor Products'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 3, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-3
created: '2026-10-23'
---

# Exercise LA551: Determinant Lines of Tensor Products

## Problem Statement

> [!question] Neukirch III.4.3
> For any two projective metrized $\mathfrak o$-modules $M,N$, one has
> $$
> \det(M\otimes_{\mathfrak o}N)\simeq(\det M)^{\otimes\operatorname{rk}(N)}\otimes_{\mathfrak o}(\det N)^{\otimes\operatorname{rk}(M)}.
> $$

## Hints

> [!hint]- Hint 1
> 取秩 $r,s$ 的局部基，按字典序排列 $e_a\otimes f_b$。比较两端 determinant-line 的基向量。

> [!hint]- Hint 2
> 换基矩阵为 Kronecker 积 $A\otimes B$。分解为 $(A\otimes I_s)(I_r\otimes B)$，其行列式为 $(\det A)^s(\det B)^r$。

> [!hint]- Hint 3
> 张量积基的 Gram 矩阵为 $H_M\otimes H_N$，同一行列式恒等式正好给出度量保持。

## Solution

> [!success]- Independent derivation
> 设 $r=\operatorname{rk}M$、$s=\operatorname{rk}N$。先考虑 $r,s>0$。在两模都自由的局部化上选基 $e_1,\ldots,e_r$、$f_1,\ldots,f_s$，并将张量积基按 $(a,b)$ 字典序排列。定义 determinant-line 映射，使
> $$
> \bigwedge_{a=1}^{r}\bigwedge_{b=1}^{s}(e_a\otimes f_b)
> \longmapsto
> (e_1\wedge\cdots\wedge e_r)^{\otimes s}\otimes(f_1\wedge\cdots\wedge f_s)^{\otimes r}.
> $$
> 这是局部秩一模的同构。
>
> **换基独立性。** 设两组基改变矩阵为 $A\in\mathrm{GL}_r$、$B\in\mathrm{GL}_s$。张量积的矩阵为 $A\otimes B$。有
> $$
> A\otimes B=(A\otimes I_s)(I_r\otimes B).
> $$
> $I_r\otimes B$ 为 $r$ 个 $B$ 的块对角矩阵，$A\otimes I_s$ 经同时置换行列后为 $s$ 个 $A$ 的块对角矩阵；故
> $$
> \det(A\otimes B)=(\det A)^s(\det B)^r.
> $$
> 左端与右端生成元在换基时均乘以这个相同的单位，局部定义因而在交叠处一致，拼接为全局同构。
>
> **度量保持。** 在每个嵌入分量，若 $H=(\langle e_a,e_{a'}\rangle)$、$J=(\langle f_b,f_{b'}\rangle)$ 是 Gram 矩阵，则张量基的 Gram 矩阵为 $H\otimes J$。左端生成元的范数平方为
> $$
> \det(H\otimes J)=(\det H)^s(\det J)^r.
> $$
> 右端生成元在 determinant 与张量积度量下的范数平方恰为同一数。对秩一 Hermitian 空间，非零生成元的范数相等已保证线性同构等距。上述构造定义在 $\mathfrak o$ 上，故与 $F$ 交换。所需各度量定义见 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed pp. 228,231, PDF pp. 247,250]。
>
> 若 $r=0$ 或 $s=0$，projective 模相应为零，$\det0=\bigwedge^00=\mathfrak o$，零次张量幂也为 $\mathfrak o$；两端由单位线的标准等距识别，结论仍成立。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Hermitian Forms]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 3, printed p. 233, PDF p. 252]. 独立给出局部定义、换基拼接与度量验证；Kronecker 行列式恒等式亦已推导。
- **Convention:** 固定张量基的字典序决定该具体同构；任何比较其他排序所得的公式时都应连同相应置换符号一起比较。
