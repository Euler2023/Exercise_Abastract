---
title: 'Exercise Gal196: Dense Subgroups inside an Idele Norm Group'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 3, printed p. 379, PDF p. 398
source_refs:
- S4/ch-VI/sec-3/ex-3
created: '2026-10-23'
---

# Exercise Gal196: Dense Subgroups inside an Idele Norm Group

## Problem Statement

> [!question] Neukirch VI.3.3
> Let $L|K$ be a finite abelian extension, and let $D$ be a subgroup of $I_K$ such that $K^*D$ is dense in $I_K$ and $D\subseteq N_{L|K}L^*$. Then $L=K$.

> [!warning] Source issue / proof scope
> The printed condition puts $D$ inside principal ideles and makes the density hypothesis impossible. The solution states the vacuity and separately proves the intended idele-norm version.

## Hints

> [!hint]- 提示
> Test the printed $L^\times$ against the discreteness of principal idèles. For the intended idèle norm condition, take the image in $C_K$ and use closedness of norm groups.

> [!hint]- Stronger hint
> For the corrected idele condition, the closed norm subgroup contains a dense subgroup of C_K, and its index equals [L:K].

## Solution

> [!success]- 独立推导
> **Source issue.** 原印 $D\subseteq N_{L/K}L^\times$ 把 $D$ 放入主 idèle 子群 $K^\times$，从而 $K^\times D=K^\times$；该子群在 $I_K$ 中离散闭，并不稠密，所以这些假设不能同时成立。非空的预期版本应为 $D\subseteq N_{L/K}I_L$。
> 对修正版，把稠密性投影到 $C_K=I_K/K^\times$，得到 $D$ 的类的像在 $C_K$ 稠密，并包含于 $N_{L/K}C_L$。后者是闭子群（有限扩张的全局范数群闭性，VI.§6 (6.1) 的证明）。因此 $N_{L/K}C_L=C_K$。
> 全局类域论范数指数公式给 $[C_K:N C_L]=[L:K]$，因为 $L/K$ 阿贝尔。左端为 $1$，故 $L=K$。这里闭性与范数指数是本书已证明的全局类域论输入，不是把“稠密”直接误写为“相等”。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 3, printed p.379, PDF p.398]。解答为独立推导。
