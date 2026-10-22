---
title: 'Exercise Gal197: Independent Cyclic Extensions and Splitting Primes'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 4, printed p. 379, PDF p. 398
source_refs:
- S4/ch-VI/sec-3/ex-4
created: '2026-10-23'
---

# Exercise Gal197: Independent Cyclic Extensions and Splitting Primes

## Problem Statement

> [!question] Neukirch VI.3.4
> Let $L_1,\ldots,L_r|K$ be cyclic extensions of prime degree $p$ such that $L_i\cap L_j=K$ for $i\ne j$. Then there are infinitely many primes $\mathfrak p$ of $K$ which split completely in $L_i$, for $i>1$, but which are nonsplit in $L_1$.

> [!warning] Source issue / proof scope
> Pairwise disjoint cyclic extensions need not be independent from their compositum. The solution gives an explicit biquadratic counterexample and proves the corrected criterion.

## Hints

> [!hint]- 提示
> Pairwise disjointness need not give independence from a compositum. Test three quadratic fields before proving a corrected statement.

> [!hint]- Stronger hint
> Test Q(sqrt(6)), Q(sqrt(2)), Q(sqrt(3)); after strengthening the hypothesis, choose Frobenius trivial on the latter compositum and nontrivial on L_1.

## Solution

> [!success]- 独立推导
> **Source issue / 反例。** 取 $K=\mathbb Q$，$L_1=\mathbb Q(\sqrt6)$，$L_2=\mathbb Q(\sqrt2)$，$L_3=\mathbb Q(\sqrt3)$。三者两两交为 $\mathbb Q$；然而在 $L_2,L_3$ 均完全分裂的未分歧素点，在它们的合成域中完全分裂，也必在子域 $L_1$ 完全分裂。所以原结论不成立。
> 预期修正版为 $L_1\not\subseteq F=L_2\cdots L_r$。因 $[L_1:K]=p$，这等价于 $L_1\cap F=K$。令 $M=L_1F$。则
> $$
> \operatorname{Gal}(M/F)\xrightarrow{\sim}\operatorname{Gal}(L_1/K)=C_p.
> $$
> 取此子群的非单位元 $\sigma$。它在每个 $L_i$（$i>1$）上平凡，而在 $L_1$ 上为阶 $p$ 的生成元。引用 Čebotarev 的存在性部分（Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, VII.(13.4), printed p.545/PDF564），有无穷多个素点的 Frobenius 为 $\sigma$（$M/K$ 阿贝尔，不涉及共轭歧义）。这些素点有且仅有所需分裂行为。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 4, printed p.379, PDF p.398]。解答为独立推导。
