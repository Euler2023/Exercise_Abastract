---
title: 'Exercise G346: The Symmetric Galois Group of Artins Quintic'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 4, printed p. 414, PDF p. 433
source_refs:
- S4/ch-VI/sec-7/ex-4
created: '2026-10-23'
---

# Exercise G346: The Symmetric Galois Group of Artins Quintic

## Problem Statement

> [!question] Neukirch VI.7.4
> The decomposition field $K|\mathbb Q$ of $f(X)$ has as Galois group the symmetric group $S_5$, i.e., it is of degree $120$.

## Hints

> [!hint]- 提示
> The factorization modulo $2$ has degrees $2$ and $3$, yielding a transposition by cubing. A transitive group of prime degree containing a transposition is symmetric.

> [!hint]- Stronger hint
> Cube the (2)(3) Frobenius permutation modulo 2. The graph of conjugate transpositions is connected because the action is transitive of prime degree.

## Solution

> [!success]- 独立推导
> 前题不可约性使 $G\le S_5$ 在五个根上传递。模 $2$ 有
> $$
> X^5+X+1=(X^2+X+1)(X^3+X^2+1),
> $$
> 两因子均不可约且互异。因 $2\nmid2869$，未分歧 Frobenius 的循环型为 $(2)(3)$；取其立方得到单个换位。
> 为避免借用五次传递子群分类，考虑 $G$ 中这个换位的所有共轭，并以它们所交换的根对为五顶点图的边。图的连通分支被 $G$ 置换；由传递性，它们大小相同并整除素数 $5$。图至少有一条边，所以分支不可能全为单点，只能图连通。
> 连通图的边换位生成全部 $S_5$：沿路径可通过共轭逐步得到任意两顶点的换位。因此这些共轭换位生成 $S_5\subseteq G$，所以 $G=S_5$，$[K:\mathbb Q]=120$。模 $2$ 的因式分解也已运行符号运算复核。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

题面已与原书 200 dpi 图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 4, printed p.414, PDF p.433]。解答为独立推导。Frobenius 循环型来自已证明的未分歧素点因式分解定理；不是从判别式非平方单独推断 $S_5$。
