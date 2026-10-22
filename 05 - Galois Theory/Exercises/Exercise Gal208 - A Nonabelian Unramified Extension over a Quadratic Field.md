---
title: 'Exercise Gal208: A Nonabelian Unramified Extension over a Quadratic Field'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 6, printed p. 414, PDF p. 433
source_refs:
- S4/ch-VI/sec-7/ex-6
created: '2026-10-23'
---

# Exercise Gal208: A Nonabelian Unramified Extension over a Quadratic Field

## Problem Statement

> [!question] Neukirch VI.7.6
> Show that $K|\mathbb Q(\sqrt{19\cdot151})$ is a (non-abelian!) unramified extension.

## Hints

> [!hint]- 提示
> The discriminant square root cuts out $A_5$. At each ramified rational prime, squarefree discriminant forces inertia to be a transposition.

> [!hint]- Stronger hint
> Tame discriminant exponent one forces transposition inertia; its intersection with A_5 is trivial.

## Solution

> [!success]- 独立推导
> 记 $D=2869$，$F=\mathbb Q(\sqrt D)$。Vandermonde 乘积 $\Delta=\prod_{i<j}(\alpha_i-\alpha_j)$ 满足 $\Delta^2=D$，置换按符号作用在 $\Delta$ 上。由于 $G(K/\mathbb Q)=S_5$，$F=K^{A_5}$，故 $G(K/F)=A_5$，确实非阿贝尔。
> $\mathcal O_k=\mathbb Z[\alpha]$ 且 $d_k=19\cdot151$，所以 $K/\mathbb Q$ 的有限分歧仅可能在 $19,151$。二者都不整除 $|S_5|=120$，故为驯分歧。对五根置换表示，驯判别式指数为 $5-\#(\text{惯性轨道})$；这里指数为 $1$，所以惯性生成元只有一个二循环，其余三点固定，即惯性群为换位生成的 $C_2$。
> 因此每个有限素点的相对惯性群为 $I\cap A_5=1$；不在 $19,151$ 的点原本无分歧。所以 $K/F$ 在所有有限位置未分歧。
> **无限位置约定。** $F$ 为实二次域而 $K$ 非全实，故某实位置会复化；依本书把 $\mathbb C/\mathbb R$ 称为未分歧的约定（VI, printed p.398/PDF417），题目的“unramified”成立。若采用要求实位置完全分裂的“小 Hilbert”约定，则应只说“所有有限位置未分歧”。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

题面已与原书 200 dpi 图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 6, printed p.414, PDF p.433]。解答为独立推导。
