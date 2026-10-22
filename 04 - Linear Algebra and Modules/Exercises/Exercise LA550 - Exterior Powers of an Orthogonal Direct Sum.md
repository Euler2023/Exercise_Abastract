---
title: 'Exercise LA550: Exterior Powers of an Orthogonal Direct Sum'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 2, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-2
created: '2026-10-23'
---

# Exercise LA550: Exterior Powers of an Orthogonal Direct Sum

## Problem Statement

> [!question] Neukirch III.4.2
> For any two projective metrized $\mathfrak o$-modules $M,N$, one has
> $$
> \bigwedge^n(M\oplus N)\simeq\bigoplus_{i+j=n}\bigwedge^iM\otimes\bigwedge^jN.
> $$

## Hints

> [!hint]- Hint 1
> 从右到左把 $M$ 的外向量放在前、$N$ 的外向量放在后，取外积；用局部基验证这是同构。

> [!hint]- Hint 2
> 不同 $(i,j)$ 分量相互正交。相同 $(i,j)$ 的 Gram 矩阵按 $M,N$ 分为块对角，行列式就是两个外积内积之积。

## Solution

> [!success]- Independent derivation
> 取 $n\ge0$。对 $i+j=n$ 定义
> $$
> \begin{aligned}
> \psi_{i,j}:\bigwedge^iM\otimes\bigwedge^jN&\longrightarrow\bigwedge^n(M\oplus N),\\
> (m_1\wedge\cdots\wedge m_i)\otimes(n_1\wedge\cdots\wedge n_j)&\longmapsto
> (m_1,0)\wedge\cdots\wedge(m_i,0)\wedge(0,n_1)\wedge\cdots\wedge(0,n_j).
> \end{aligned}
> $$
> 交错性与平衡性使其良定义。将这些映射相加得 $\psi$。
>
> **代数同构。** 在每个素理想处，projective 模局部自由；选局部基 $e_1,\ldots,e_r$、$f_1,\ldots,f_s$。直和的外幂基由有序子集 $e_I\wedge f_J$ 组成，且 $|I|+|J|=n$。这些基恰为 $\psi$ 下右端各基的像，因此每个局部化都是同构；有限模的核、余核局部判别给出全局同构。
>
> **度量保持。** 外幂度量定义为 Gram 行列式 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed p. 228, PDF p. 247]。$M_{\mathbb C}$ 与 $N_{\mathbb C}$ 在直和内正交。若比较 $(i,j)$ 与 $(i',j')$ 且 $i\ne i'$，Gram 矩阵中 $M$ 与 $N$ 的交叉项为零，而来自两个正交空间的行列数不匹配，故矩阵秩小于 $n$，行列式为零。不同分量于是正交。
>
> 若 $(i,j)=(i',j')$，Gram 矩阵为块对角，故
> $$
> \begin{aligned}
> \langle\psi_{i,j}(m\otimes n),\psi_{i,j}(m'\otimes n')\rangle
> &=\det(\langle m_a,m'_b\rangle)\det(\langle n_c,n'_d\rangle)\\
> &=\langle m,m'\rangle_{\wedge^iM}\langle n,n'\rangle_{\wedge^jN}.
> \end{aligned}
> $$
> 这是右端张量积度量。半双线性延拓和不同分量的正交性说明 $\psi$ 等距。映射与 $F$ 交换且不依赖局部基，故为 canonical isometry。
>
> 当 $n=0$ 时两端均为 $\mathfrak o$；当 $n>r+s$ 时两端均为零，所述论证和结论依然成立。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Hermitian Forms]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 2, printed p. 233, PDF p. 252]. 独立局部基与 Gram 行列式推导，包含代数同构和度量两部分。
- **Convention:** $\bigwedge^0M=\mathfrak o$，超过秩的外幂为零；右端采用正交直和与张量积度量，不能只证明无度量的模同构。
