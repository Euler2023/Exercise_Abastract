---
title: 'Exercise R408: The Full Integer Ring of Artins Quintic Field'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 3, printed p. 413, PDF p. 432
source_refs:
- S4/ch-VI/sec-7/ex-3
created: '2026-10-23'
---

# Exercise R408: The Full Integer Ring of Artins Quintic Field

## Problem Statement

> [!question] Neukirch VI.7.3
> Let $k=\mathbb Q(\alpha)$. Then $\mathbb Z[\alpha]$ is the ring $\mathcal O_k$ of integers of $k$.
> **Printed hint:** The discriminant of $\mathbb Z[\alpha]$ equals the discriminant of $\mathcal O_k$ because on the one hand, both differ only by a square, and on the other hand, it is squarefree. The transition matrix from $1,\alpha,\ldots,\alpha^{n-1}$ to an integral basis $\omega_1,\ldots,\omega_n$ of $\mathcal O_k$ is therefore invertible over $\mathbb Z$.

## Hints

> [!hint]- 提示
> Use the index–discriminant formula; do not reverse the basis-change divisibility.

> [!hint]- Stronger hint
> The square of the order index divides the squarefree integer 2869.

## Solution

> [!success]- 独立推导
> $\alpha$ 是首一整系数多项式的根，故为代数整数，$\mathbb Z[\alpha]\subseteq\mathcal O_k$ 为满秩子格。若 $I=[\mathcal O_k:\mathbb Z[\alpha]]$，格的基变换公式给
> $$
> \operatorname{disc}(1,\alpha,\ldots,\alpha^4)
> =I^2\,d_k.
> $$
> 前题左端为平方自由整数 $2869$。因 $I^2$ 是正整数平方且整除 $2869$，只能 $I=1$。所以 $\mathbb Z[\alpha]=\mathcal O_k$，且 $d_k=2869$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Different and Discriminant Ideals|Discriminants of Orders]]

## Notes

题面已与原书 200 dpi 图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 3, printed p.413, PDF p.432]。解答为独立推导。
